---
title: Summary
status: public
type: intro
---

### In a nutshell

I work for a company that does diagnostic testing for pharmaceutical
companies as part of their clinical trials: ECG and Holter (heart monitoring),
respiratory, blood pressure, survey data, etc. One of their services is to
provide data from this testing back to the trial sponsors in client-specific
formats, on client- specified schedules. Essentially this part of the
business is a data pipeline managed by a patchwork of systems and paper
trails, and the two departments responsible for getting out the data are
called "Project Management" (PM) and "Programming" or "SAs". In addition,
there is a group within Project Management called "Data Managers" (DM) who
are particularly involved in this process. (Whereas the Project Managers
have other responsibilities beyond the data).

One key part of the process (but by no means the only part) is the _group
calendar/task lists_ that the PM/DMs maintain. In addition to reminding them
and the SAs what is due on a particular day, and marking it complete when
sent, the PM directors use data from these lists to determine a performance
metric: _# and % of data sends late per month_.

For various reasons described below, the PM directors have decided they cannot
live with their current tools, which are siloed between departments and
company locations, and in some cases no longer supported by IT. There have
even been problems with missing some data send deadlines. They approached
me about developing a more centralized system to meet their needs better.

### Summary of current process

Project Managers and Data Managers (PMs and DMs) need to keep track of a
schedule for _data sends_ to clients. That is to say, they are responsible
for data being sent by the SA team to a particular client on a particular
date, and on recurring dates.

PMs create the schedules initially when the final data format has been
approved (see below), based on information the client supplies about how
often the data is to be sent. The DMs look at the schedule every Friday
and decide who is responsible for each data send for the following week,
and assign themselves to them. _[This is the process in the Philadelphia
office, need to find out how other offices do it.]_

PMs and DMs use this schedule as a _task list_, marking data sends as
_complete_ when they receive confirmation from the SAs (or when the SAs
themselves mark it as complete).

Each data send task has a number of additional fields they use for
sorting/filtering/searching, such as account number, data type, etc. as well
as a 'reason' comments field for when a data send is late.

For the most part, PMs and DMs look at only their own data sends, but
occasionally need to see others as well if someone is out of the office,
etc. SAs basically only need to see what is due for today, in particular
what data is ready to send for today.

From monthly data gathered across all offices, Project Manager directors
can derive metrics for PM or DMs _[need to clarify]_ from the number or
percentage of _late_ data sends.

### A larger picture

The DMs (or in some cases the SAs) _extract_ the data from production systems
as CSV and then _run_ the data through SAS programs. These programs have been
previously tested on a subset of production data through the Programming
SDLC process [yes they do actually call it that, waterfall is alive and
bubbling], and approved by the client, via a formal contract called a Data
Transfer Agreement (DTA). Once ready, the DMs _notify_ the SA team through
an email to a shared _Google Group_.

The SA team assigns a rotating person per day _[in each office?]_ to do "data
sends". This person checks what sends are _ready_ (on the Google Group list),
and sends the data via client-specified method (FTP, etc).  This process may
change in the future so that DMs do the data sends for their own requests
(rather than as SAs do, on a rotating basis).

However, all we are concerned with here basically are the _deadline_ and
_status_ of the data sends, none of the mechanics.

### Areas of inefficiency in the current process

#### The current process is siloed between departments and ERT locations.

The PM/DMs themselves use at least three different systems for tracking the
data send schedules:

1. a shared "Task Pad" in Outlook (one in Philly, one in Peterborough);

2. a Google Calendar (Pittsburgh);

3. a calendar application of some sort designed as part of another
system. (Germany)

The communication with the SA team is done outside of any of these, partially
through a Google Group (DM informing SAs  data is ready) and partially via
email (SAs informing DMs data has been sent).

As a result, there are several points of communication between departments
that are largely unnecessary except from the point of view of having a paper
trail for a clumsy process.

#### Outlook is not going to be supported by IT.

Many people no longer have Outlook installed, in fact.

#### There is no sync between personal calendars and the data sends.

DMs are double-entering their data sends into their own personal calendars.

#### There is much duplication between another system.

All of the identifying fields on a data send, with the possible exception
of the Data Manager, are also present in the Programming Requests system
[another system which manages an earlier stage in the data pipeline].

