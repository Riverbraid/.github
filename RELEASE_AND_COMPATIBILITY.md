# Release and Compatibility Policy

**Status:** Shared public policy candidate

## Purpose

This policy keeps release identity, source identity, compatibility, verification, adoption, and current applicability separate.

## Release identity

A release should identify:

- repository and exact source commit;
- tag or release identifier;
- release authority;
- included artifacts and digests where material;
- environment and dependency assumptions;
- verification commands and observed results;
- compatibility scope;
- known limitations and nonclaims;
- supersession, rollback, and review triggers.

A tag, GitHub release, package publication, generated archive, or version label does not by itself establish correctness, adoption, support, security, or compatibility.

## Compatibility classes

Use an explicit relationship such as:

- `EXACT_MATCH` — exact source, contract, and required environment identity match;
- `DECLARED_COMPATIBLE` — compatibility is permitted by a versioned contract and has attributable evidence;
- `EXPLAINED_VARIANT` — a declared difference is within the comparison contract;
- `PARTIALLY_COMPATIBLE` — only named interfaces or behaviors are supported;
- `INCOMPATIBLE` — a material contract or behavior conflict is observed;
- `NOT_ASSESSED` — no sufficient compatibility assessment exists;
- `COMPARISON_NOT_VALID` — the subjects or conditions fall outside the comparison contract.

A successful command under an out-of-contract configuration is not an `EXACT_MATCH`.

## Cross-repository compatibility

Repositories are compatible only at the interfaces directly assessed.

The following do not establish integration compatibility:

- common ownership;
- similar names;
- registry co-membership;
- use of the same runtime;
- separate passing tests;
- simultaneous cloning;
- documentation that says components are intended to work together.

An integrated claim requires direct evidence that real inputs and outputs crossed the relevant repository boundaries and that blocking component states propagated visibly.

## Versioning

Individual repositories may use semantic versioning or another declared scheme. Riverbraid does not currently impose one account-wide semantic-versioning contract.

A version number must not silently encode:

- adoption status;
- gate closure;
- certification;
- production readiness;
- verification depth;
- registry freshness;
- compatibility with every other repository.

Those dimensions require separate records or explicit declarations.

## Pre-release and proposed material

Draft branches, proposed control packages, candidate schemas, and unmerged pull requests remain candidates unless an authorized record states otherwise.

They may be tested and reviewed, but their existence or successful self-check does not make them adopted, released, or currently applicable on a default branch.

## Supersession and rollback

A newer release does not erase an older release or retroactively change what an earlier result established.

Supersession should preserve:

- prior identity;
- replacement identity;
- reason and authority;
- effective time;
- affected claims and dependencies;
- migration or rollback path;
- current applicability of both subjects.

Rollback restores a previously valid operational state under the same governing grammar. A change to the governing schema or representational basis requires reconstitution rather than silent rollback.

## Security and dependency boundary

Release evidence must disclose unresolved network acquisition, mutable dependencies, unpinned actions or images, unavailable security settings, and other supply-chain limitations material to the claim.

A digest-pinned base or source commit narrows identity. It does not by itself establish offline, hermetic, independently reproduced, or fully supply-chain-isolated operation.

## Non-claims

This policy does not establish a release cadence, long-term-support program, universal backward compatibility, package-distribution commitment, production readiness, certification, external audit, or full-constellation operation.