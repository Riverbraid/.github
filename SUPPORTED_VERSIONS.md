# Supported Versions and Source Identities

**Status:** Shared public policy candidate  
**Account-wide support window:** Not declared

## Core rule

Riverbraid does not use one global version number or the newest visible branch as a substitute for exact source identity, current applicability, or support.

A repository, profile, schema, evaluator, workflow, or release is supported only to the extent that its own current records declare:

- exact repository and source identity;
- role and scope;
- version or profile identity;
- environment and dependency contract;
- verification command and depth;
- current applicability and freshness;
- known limitations and nonclaims;
- maintenance or disposition authority.

## Current support posture

No account-wide promise is made that:

- every public repository is active;
- every default branch is compatible with every other default branch;
- every tag or release remains supported;
- registry membership equals functional-core membership;
- a passing historical run remains current;
- all repositories use the same runtime, schema, workflow, or compatibility policy.

The preferred public evaluation entrance is `Riverbraid-Evaluation-Kit` for its exact pinned profile and declared claim ceiling.

Repositories outside that profile must not be described as supported by the profile merely because they share a name, owner, runtime, or conceptual relationship.

## Status vocabulary

A repository or version should use a bounded status such as:

- `SUPPORTED_EXACT_PROFILE`;
- `SUPPORTED_WITH_DECLARED_LIMITATIONS`;
- `MAINTENANCE_ONLY`;
- `EXPERIMENTAL`;
- `REFERENCE_ONLY`;
- `DORMANT`;
- `SUPERSEDED`;
- `ARCHIVED`;
- `NOT_ASSESSED`;
- `SUPPORT_STATUS_UNKNOWN`.

The exact vocabulary may be narrowed by a repository-specific contract. Silence must not be converted into `SUPPORTED`.

## Security updates

No universal security-maintenance period is currently promised.

A security fix applies only to the exact source state containing it. A patched file without attributable execution or review evidence must remain distinguished from an executed or verified repair.

Sensitive reports must follow `SECURITY.md`.

## Compatibility and freshness

Compatibility is current only when the depended-on source identities, schemas, commands, environments, and claim boundaries remain applicable under the declared review triggers.

A stale result may remain historically true. It is not sufficient for a present support claim unless the relevant freshness policy is satisfied.

## Repository-specific authority

A repository may publish a narrower supported-versions table, release line, long-term-support commitment, or end-of-support date.

That repository-specific declaration governs only within its stated scope and does not create an account-wide obligation.

## Non-claims

This file does not establish guaranteed maintenance, backward compatibility, security coverage, service levels, production readiness, certification, external audit, universal interoperability, or support for every Riverbraid repository.