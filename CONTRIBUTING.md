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

Use `PULL_REQUEST_TEMPLATE.md` where GitHub applies the shared account default.

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

`INBOUND_CONTRIBUTION_RIGHTS.md` is the shared current policy candidate for authorship, licensing, third-party material, generated content, provenance, and acceptance boundaries.

Its current posture is:

- no separate Contributor License Agreement is required by default;
- no Developer Certificate of Origin sign-off is required by default;
- contributors must have the right to submit their material;
- accepted contributions are provided under the target repository's applicable license unless that repository declares a narrower policy;
- third-party and materially tool-generated inputs must be disclosed where relevant;
- submission or merge does not transfer Riverbraid governance or maintainer authority.

If the target repository has no clear license, or the contribution cannot be distributed under that license, stop and open a licensing issue before submitting the change.

This policy is not legal advice or a completed legal review.

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
