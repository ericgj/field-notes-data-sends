---
title: Motivations
status: draft
type: meta
---

### First of all, I think such examples are badly needed.

We are inundated with blog posts of varying degrees of usefulness about using
this or that tool; examples of system architectures of varying degrees of
specificity; endless opinions about what makes possible a good team, tight
iteration loops, maintainable code, etc. &mdash; with varying degrees of
connection to experience. What we do not have much of are _worked examples_
of application development as a whole. Not just example applications with
some annotation &mdash; which is rare enough &mdash; but the real decisions
and constraints that form the software as it is developed within a particular
organization, by developers working together with stakeholders. My belief
is that this lack of "documentation" of a certain kind, has contributed to
a rather bleak landscape for learning and teaching application development
skills &mdash; one that encourages the reversal of nearly every one of the
Agile Manifesto's priorities.

I think that one part of it [[1]](#note1) is that we are encouraged as
programmers to look for general solutions. And we extend this generalizing
tendency beyond this or that particular computational problem, to _the process
of software development itself_, as if _it_ were a computational problem. So
then if something is wrapped up in a particular domain, the implication is
it can't be of much use to anyone outside that domain, so why spend the time
to write it up or even publish the code? Especially because it's hard work,
hard to do well, because we have relatively few examples of this _genre_. So we
see the endless parade of "magic bullets", the best tools and practices that
will work across all domains and situations and organizational forms. (To be
fair, plenty of pressure to find magic bullets comes from outside programming
itself &mdash; from those who would like a product to wrap up and sell.)

I say this up front, to clarify that my purpose in writing these notes
is emphatically _not_ to promote a particular development tool, style, or
process. The purpose is to document as I go what choices we (as a development
team) make, and what I find works and doesn't in terms of techniques. A
number of choices depend on my own skills and prior experiences, on the
work of others, and on the fact that I am the single developer on the team,
among other factors. In other words, I am presenting these notes not as
documentation of "best practices", but as an example of adapting one's
practices to a particular situation. The undeniable fact that they do not
present an "instruction manual" for quite different situations does not take
away from their value.

### Growing Software Guided By Tests?

Steve Freeman and Nat Pryce's _Growing Object Oriented Software, Guided By
Tests_ (GOOS) presents a very nuanced approach to application development,
making the practical case for a kind of test-driven (or "guided") development
that generally speaking starts from the outside of the system, and works
inwards as the tests &mdash; and therefore the structure of the application
&mdash; can be developed to accommodate new features. It presents this through
a long worked example of developing a semi-realistic application. Despite
the influence of this book well beyond the Java community (which is the
language used throughout the book), very little public work has been done,
to my knowledge, to evaluate and/or adapt their techniques to other languages
and scenarios.

Another motivation I have for taking these notes as I go is as a kind of
evaluation and adaptation of the techniques of GOOS. Although I have some
experience with this on another project, I do not have a firm sense of
the applicability of GOOS techniques to web applications, in particular to
mostly-client-side web applications. Or to what extent GOOS is an argument
for a certain style of Java, e.g. against heavy frameworks and dependency
injection tooling that hide the application wiring &mdash; which is of course
not without its parallels elsewhere, but other language communities may not
be fighting it out on exactly the same lines.

For those of us developing for the most part outside of frameworks, or with
frameworks "on the side", GOOS represents one of the few practical road
maps in a very foggy landscape, even if it's the map of another country ;)
At the very least, it gives a place to start and a way to think about how to
prioritize things during the initial development: the walking skeleton. But
I will come to that later.

### Working with non-technical users and other stakeholders

### Why this project is a good fit

### I need feedback

-----

<a name="note1"></a> 
[1] Another factor is license / nondisclosure agreement / competition issues. I
am not dismissing these entirely, they definitely do take out a whole chunk
of the world's codebase, particularly for _applications_ vs _libraries_.
They also leave a censoring wake behind them, for projects which are not or
are only partially closed.

