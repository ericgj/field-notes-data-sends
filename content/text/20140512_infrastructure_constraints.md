---
title: Infrastructure constraints
status: public
type: diary
date: 2014-05-12
---

As mentioned, the company hosts user accounts through Google, replicating
its ActiveDirectory store or however that works. In addition, IT has a
strong bias towards using Google's application infrastructure (Google App &
Compute Engine for instance). Deploying applications elsewhere would be a
bit of an uphill battle, and less straightforward to authenticate users. So
we should basically assume, unless a compelling alternative presents itself,
that the application should be deployed to Google App Engine.

Several constraints follow on this, since GAE is a bit more of a controlled
(and controlling!) environment than your typical cloud platform. In particular,
the server language practically speaking has to be either Java or Python. (Go
and PHP are possible too, but are much less production-ready). For me,
Python is the more familiar choice.

### Events and event recurrence

The primary technical hurdle I see is _persistence of event recurrence_. I
would greatly prefer not to implement this myself, but instead piggyback
on an existing calendar system - Google calendar being the obvious choice
given our infrastructure.

Google has a **CalDAV interface**, which would make it easier to swap out
backends, theoretically, -- however:

1. Google has threatened once to drop support for CalDAV (June 2013) 

2. It is not clear whether Google's CalDAV stores non-standard properties
in event data.

3. CalDAV is a bit more of a pain to use, because there is no CalDAV python
client that deals with Google OAuth; you basically have to do the auth and
the CalDAV requests using an httplib2 instance.

For these reasons, the Google **Calendar API** client seems like a better
choice, most likely wrapped in an application adapter layer since we don't
need all the functionality of calendar events to model data-send tasks. (Also
to protect against API flux; Google is already on v3 of this API!)

Going down this route, essentially the application can be seen as a
_domain-specific, alternative front-end to Google calendar_.  It will likely
need as well some sort of data store for user authorization and preferences.

Note that the Calendar API seems increasingly geared towards _sync_, including
push-based sync: meaning the client application stores a copy of event data
as well, and either syncs with the calendar periodically or receives updates
via webhook push.  That adds quite a bit of complexity that I hope to avoid,
although it may become practical since retrieving a lot of events for a lot
of users could be slow and also end up hitting Google's rate-limit. This is
one thing I would like to estimate before going too far.

It does seem that Calendar API does allow flexibility in querying, similar
to CalDAV's REPORT verb, with parameters for `timeMax` and `timeMin` as well
as `sharedExtendedProperty name=value`. Although apparently _no_ filter for
attendees or creator/organizer.

Given we are looking at basically 1 day / 1 week / 2 week / 1 month views
of the data, at least for the primary UI, hopefully this will be sufficient
without needing a local cache.

I can see the PM director's 'monthly' (or even longer) UI possibly syncing
with the calendar given you may need up to a year's worth of data to crunch.

Another consideration is _backup of calendar events_. Does Google provide
some kind of automated calendar backup?

### Non-event data

For the most part this can be straightforwardly modeled with
`sharedExtendedProperties`, hopefully.

Potentially the `attendees` could be used to model PM, DM, etc.; but there
is no way to filter responses on attendees.

For the task status, i.e. "open" or "completed", it seems like there should
be a built-in field we can piggyback on, but apparently not, so likewise it
should be an extended property.
