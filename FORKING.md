# Forking and Adaptation Policy

Riverbraid repositories may be forked and adapted under each repository's applicable license.

## Core rule

A fork inherits source history and license obligations. It does **not** automatically inherit Riverbraid authority, identity, registry membership, verification results, adoption state, endorsement, or evidence continuity.

## Required distinctions

A public fork or adaptation should state:

- upstream repository and exact source commit;
- fork or adaptation name;
- files and behavior changed;
- whether upstream tests were rerun;
- whether new tests or evidence exist;
- which upstream claims still apply unchanged;
- which claims are no longer applicable;
- who now owns maintenance and security response;
- whether the fork remains compatible with any Riverbraid profile.

## Naming and presentation

A fork may accurately say that it is derived from Riverbraid.

It must not imply that it is:

- the canonical Riverbraid repository;
- an adopted Riverbraid profile;
- included in the Evaluation Kit registry;
- verified by upstream results after material changes;
- maintained, approved, endorsed, certified, or audited by Riverbraid;
- entitled to use upstream evidence as proof of changed bytes or behavior.

Materially divergent adaptations should use a distinct name and prominent provenance statement.

## Evidence continuity

Upstream evidence remains attributable only to the exact upstream subject it assessed.

After a fork changes code, configuration, dependencies, workflows, registry entries, environment locks, expected results, schemas, hashes, seals, or claim boundaries, the fork must create new evidence for those changed surfaces.

Copying an evidence file does not transfer the truth of the evidence to a new subject.

## Registry and profile relationship

A fork is not part of the Riverbraid Evaluation Kit registry or any future F3/F4 functional core unless an authorized process explicitly admits and pins it.

Compatibility may be claimed only at the tested level and under the observed environment.

## Security and support

Fork maintainers are responsible for their own:

- security reporting route;
- dependency and workflow review;
- releases and tags;
- incident response;
- legal and compliance decisions;
- user support;
- claim boundaries.

Riverbraid does not guarantee support for forks or adaptations.

## Contribution back upstream

Changes proposed upstream should be submitted as small, reviewable pull requests that preserve provenance and disclose:

- the fork commit where the change originated;
- the upstream base;
- tests performed;
- evidence and limitations;
- any license or third-party contribution considerations.

## F0–F4 boundary

Forking, copying, or publishing the proposed F0–F4 control package does not adopt or execute it. Adoption and gate advancement remain subject to the authority and evidence rules of the applicable control records.
