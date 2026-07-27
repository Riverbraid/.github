# Contributing to Riverbraid

This document describes how to contribute to Riverbraid public repositories.

It is a community-health surface only. It does not create governance authority, maintainer capacity, guaranteed response times, legal approval, certification, production readiness, or external validation.

## Contribution posture

Riverbraid prioritizes bounded, inspectable, evidence-preserving changes.

Preferred contributions are:

- documentation corrections;
- claim-boundary fixes;
- reproduction notes;
- verification-failure reports;
- surface-coherence improvements;
- small, reviewable pull requests;
- issues that separate observed facts from interpretation.

## Before opening a pull request

Check whether the change affects:

- protocol semantics;
- verification commands or expected results;
- registry entries or pins;
- workflow or action identity;
- dependencies or environment locks;
- schemas or machine contracts;
- hashes, seals, manifests, or evidence records;
- public claims;
- repository lifecycle or authority status;
- the proposed F0–F4 control package.

If it touches any of those, clearly state the impact and required authority in the pull request body.

Use the default pull-request template where GitHub applies it.

## Pull request scope

Use small pull requests with a clear scope.

A good pull request states:

- what changed;
- why it changed;
- exact base and proposed subject;
- what did not change;
- verification performed and not performed;
- evidence and limitations;
- whether code, workflow, registry, verifier, schema, environment, hash, seal, authority, or protocol behavior changed;
- rollback and re-entry notes where material.

## Inbound rights and licensing

Riverbraid does not currently require a separate Contributor License Agreement or Developer Certificate of Origin by default.

By submitting a contribution, you represent that:

- you have the right to submit the contributed material;
- the contribution may be distributed under the license already declared by the target repository;
- third-party material and its license are identified;
- confidential information, secrets, personal data, and restricted material are not included;
- material AI assistance is disclosed when it materially affects provenance, licensing, or reviewability.

Contributors retain any copyright they hold. Submission does not transfer Riverbraid authority, maintainer status, endorsement, or authorship of unrelated work.

If the target repository has no clear license, or the contribution cannot be distributed under that license, stop and open a licensing issue before submitting the change.

This section is a project contribution policy, not legal advice or a completed legal review.

## Issues

Use issues for:

- reproduction failures;
- documentation mismatch;
- inconsistent metadata;
- broken links;
- verification ambiguity;
- claim-boundary problems;
- public-surface coherence issues;
- licensing or provenance uncertainty;
- requests for a private security-reporting route without sensitive details.

Do not publish vulnerability details, credentials, secrets, private keys, or personal data in public issues. Follow `SECURITY.md`.

## Governance and forks

Review:

- `GOVERNANCE.md` for authority and decision classes;
- `MAINTAINERS.md` for current role boundaries;
- `FORKING.md` for provenance and inherited-claim limits;
- `SUPPORT.md` for routing and availability boundaries.

A contribution does not adopt the F0–F4 control package, advance a gate, refresh the Evaluation Kit registry, or establish independent review unless the required attributable authority and evidence are present.

## Conduct

Contributions should be factual, bounded, and respectful.

Do not use issues or pull requests to imply unsupported maturity, adoption, certification, legal approval, production readiness, external audit, complete AI safety, absolute security, or absence of defects.

## Boundary

This guide does not guarantee review, acceptance, support availability, response time, maintenance capacity, legal sufficiency, or future project direction.
