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

## Read before contributing

Review the shared policies that apply where the receiving repository does not provide a narrower rule:

- `GOVERNANCE.md` — authority and disposition;
- `MAINTAINERS.md` — current authority map;
- `INBOUND_CONTRIBUTION_RIGHTS.md` — contributor rights and licensing representations;
- `PULL_REQUEST_TEMPLATE.md` — change, evidence, and claim-boundary fields;
- `SECURITY.md` — sensitive reporting route;
- `SUPPORT.md` — issue routing;
- `FORKING.md` — provenance and authority for adaptations;
- `SUPPORTED_VERSIONS.md` — source-bound support posture;
- `RELEASE_AND_COMPATIBILITY.md` — release, comparison, and compatibility rules.

Repository-specific guidance governs within its declared scope.

## Before opening a pull request

Check whether the change affects:

- protocol semantics;
- verification commands, expected results, or verification depth;
- registry entries, pins, manifests, or source identities;
- workflow behavior or action identity;
- dependencies, environments, locks, or network behavior;
- schemas, machine contracts, or comparison contracts;
- hashes, seals, evidence, or provenance;
- public claims or nonclaims;
- governance, authority, or maintainer scope;
- security, privacy, access, or disclosure;
- repository lifecycle, release, compatibility, or supersession status;
- the proposed F0–F4 control package.

If it touches any of those, clearly state the exact impact and required authority in the pull request body.

Use `PULL_REQUEST_TEMPLATE.md` where GitHub applies the shared account default.

## Pull request scope

Use small pull requests with a clear subject and boundary.

A good pull request states:

- what changed;
- why it changed;
- the exact base and proposed subject;
- what did not change;
- tests and observations performed;
- negative, blocked, unavailable, malformed, or degraded cases;
- evidence not yet available;
- supported and refused claims;
- authority or further disposition required;
- whether code, workflow, registry, verifier, schema, environment, hash, seal, authority, or protocol behavior changed;
- rollback, supersession, recovery, and re-entry notes where material.

Do not delete a template section merely because a result is inconvenient. Use `NOT_APPLICABLE` with a short reason when appropriate.

## Suggested boundary block

```text
Scope:
Documentation only.
No code changes.
No workflow changes.
No registry changes.
No verifier changes.
No hash or seal changes.
No protocol changes.
No adoption or gate advancement.
```

Adjust the block when the pull request actually changes one of those surfaces.

## Evidence rule

A successful check applies only to the exact source, configuration, commands, environment, and verification depth observed.

Do not present:

- file presence as execution;
- execution as correctness;
- self-execution as independent reproduction;
- one component pass as an integrated or account-wide pass;
- a historical result as automatically current;
- a merge as adoption or F0–F4 gate advancement.

When a technical claim is made, preserve an attributable command, source identity, environment, result, and limitation record sufficient for review.

## Inbound rights and licensing

`INBOUND_CONTRIBUTION_RIGHTS.md` is the shared policy candidate for authorship, licensing, third-party material, generated content, provenance, and acceptance boundaries.

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
- bounded compatibility or lifecycle questions;
- requests for a private security-reporting route without sensitive details.

Do not publish vulnerability details, credentials, secrets, private keys, personal data, or unredacted exploit information in public issues. Follow `SECURITY.md`.

## Governance and forks

A contribution does not adopt the F0–F4 control package, advance a gate, refresh the Evaluation Kit registry, establish independent review, appoint a maintainer, or transfer protocol or release authority unless the required attributable authority and evidence are present.

## Conduct

Contributions should be factual, bounded, and respectful.

Do not use issues or pull requests to imply unsupported maturity, adoption, certification, legal approval, production readiness, external audit, complete AI safety, absolute security, full-constellation operation, or absence of defects.

## Acceptance boundary

Submission does not guarantee review, acceptance, support, attribution format, or response time.

A merge does not automatically appoint the contributor as a maintainer, transfer registry or protocol authority, establish independent review, or support claims beyond the evidence actually reviewed.

## Boundary

This guide does not guarantee review, acceptance, support availability, response time, maintenance capacity, legal sufficiency, compatibility, security coverage, or future project direction.