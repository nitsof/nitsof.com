---
title: "From prototype to production in four weeks — the NITSOF method"
slug: from-prototype-to-production
date: "2026-03-18"
author: NITSOF Team
category: Studio
excerpt: "Four weeks isn't a sprint. It's a constraint that forces the right decisions early. This is how we structure engagements so nothing important gets built twice."
---

Four weeks sounds aggressive. For a meaningful piece of software — something with real users, real data, and a real business on the line — it sounds impossible.

It's not. But it requires treating the four-week constraint as a design principle, not a deadline.

## Why four weeks works

The most expensive thing in software development is rework: building something, showing it to a stakeholder, and being told it's wrong. The longer the feedback loop, the more expensive the rework.

Traditional agency engagements often have a six-to-eight week discovery phase before a single line of production code gets written. By the time you show the client something real, the mental model on both sides has already calcified around the spec — and the spec is always wrong.

Four weeks changes the feedback economics. If the cycle is short enough, you can afford to be wrong early. You can prototype a direction, show it to real users, and pivot without sinking months of work.

## How we structure the four weeks

**Week 1 — Scope and scaffold**

We don't write a requirements document. We build the thing that the rest of the project is about: the core user action. If it's a Shopify app, we build the install flow and the one screen that does the main job. If it's an internal tool, we build the thing an operator will do fifty times a day.

Getting this in front of a real user by day five tells us more than two weeks of discovery calls.

**Week 2 — The hard part**

Week two is where most projects either save themselves or go wrong. The hard part is usually something technical (an API that doesn't work the way the docs said, a data model that can't represent the edge cases) or something product-level (users don't use the feature the way we thought).

We surface this in week two because there's still time to respond. Week three is too late.

**Week 3 — Completeness**

Week three is about filling in what the core doesn't cover: error states, edge cases, mobile, accessibility, the things that aren't visible in a demo but matter when a thousand people use it.

This is also when we write the tests that let us change things in week four without breaking what's already working.

**Week 4 — Ship**

Week four is launch. Not "feature-complete." Not "code freeze." Launch — to real users, in a real environment.

The features that didn't make it into four weeks go on the backlog. They're almost always the right things to cut.

## What makes this possible

Two things make four weeks work:

**Opinionated tooling decisions made early.** We don't spend week one evaluating database options. We make the call on day one and move. The cost of a wrong tooling decision is lower than the cost of tooling paralysis.

**Stakeholder access, not stakeholder meetings.** Four weeks doesn't leave room for a weekly status call with a two-week feedback cycle. We need someone on the client side who can answer a question in an hour and make a decision in a day. If that person doesn't exist, the timeline doesn't work.

---

*If you have something you need to ship and you're tired of timelines that keep slipping, [let's talk](/contact). We're direct about what's achievable in four weeks and what isn't.*
