---
name: Coherence Witness Report
about: Report drift, stale content, or verification failures in the coherence layer
title: '[COHERENCE] '
labels: coherence, boundary
assignees: ''
---

## Which file or artifact is affected?

Examples: `OUTBOUND_COHERENCE_WITNESS.json`, `training-corpus-manifest.json`, `TRAINING_BOUNDARY.md`.

## What is the problem?

Examples: status is stale but still marked as `preferred_source`, or an experimental repo is being treated as canonical.

## What should it be?

Examples: change status to `experimental` and training signal to `do_not_treat_as_canonical`.

## Evidence

Link to the commit, workflow run, document, or repository state that supports the change.

## Additional context

Add any other information that may help preserve the coherence boundary.
