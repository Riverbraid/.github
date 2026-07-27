# Riverbraid Maintainers and Authority Map

**Status:** Declarative current-state map  
**As of:** 2026-07-27

## Purpose

This file distinguishes repository access, maintenance work, review, evidence production, protocol authority, and founder disposition.

It does not create a team, employment relationship, guaranteed response capacity, or authority beyond the scopes declared below.

## Current authority holders

| Surface | Current authority | Scope | Exclusions |
|---|---|---|---|
| Founder disposition | Riverbraid founder / authenticated account owner | Adoption, identity, governing scope, reserved succession and exceptional dispositions | Cannot turn missing evidence into PASS |
| Protocol semantics | `Riverbraid-Core` under its declared authority files | Current public protocol and audit-floor semantics | Does not control unrelated experimental behavior or establish adoption by existence |
| Public pinned evaluation profile | `Riverbraid-Evaluation-Kit` | Exact registry, commands, expected results, environment contract, and claim ceiling | Does not establish freshness, equal depth, independence, or production readiness |
| Constellation classification | `Riverbraid-Golds` | Role/lifecycle/registry/depth crosswalks within declared noncontrolling boundaries | Does not select the F3/F4 functional core |
| Explanatory documentation | `Riverbraid-Documentation` | Human-readable context, limitations, crosswalks, and evidence references | Does not override protocol, registry, or execution evidence |
| Shared community-health defaults | `Riverbraid/.github` | Default guidance and templates where GitHub inheritance applies | Does not prove per-repository inheritance or user-profile rendering |

## Maintainer status

The current public surface is founder-maintained.

No additional individual or team is declared here as having independent merge, release, registry, security-response, or protocol authority.

Repository collaborator permissions may exist for operational reasons, but permission is not equivalent to governing authority. Any future maintainer appointment should be recorded with:

- GitHub identity;
- repositories and paths covered;
- authority type;
- effective time;
- review and revocation conditions;
- whether release, registry, workflow, or security-setting authority is included;
- conflict-of-interest and independent-review limits.

## Authority types

- `FOUNDATION_AUTHORITY` — governing purpose, adoption, scope, and reserved founder dispositions.
- `PROTOCOL_AUTHORITY` — meaning and rules within an explicit protocol boundary.
- `REGISTRY_AUTHORITY` — admission, pin, succession, and rollback authority for a declared registry.
- `MAINTENANCE_AUTHORITY` — bounded repository changes and issue/PR disposition.
- `RELEASE_AUTHORITY` — tags, releases, package publication, and release evidence.
- `SECURITY_RESPONSE_AUTHORITY` — private intake, triage, disclosure, and remediation coordination.
- `EVIDENCE_RECORDER` — produces attributable observations without automatically approving them.
- `INDEPENDENT_REVIEWER` — performs a declared independent assessment and records limitations.

One person or account may hold multiple roles, but each action must still identify the authority being exercised.

## CODEOWNERS status

`CODEOWNERS` is intentionally not declared by this file.

Adding CODEOWNERS should occur only after:

- maintainers beyond the founder are actually appointed;
- path ownership matches real review capacity;
- required-review settings are understood;
- fallback and succession behavior are defined;
- the file will not create a false automated-governance signal.

## Review expectations

Maintainers should reject or return changes that:

- overstate available evidence;
- combine or skip gates;
- rewrite history without preservation;
- treat file presence as verification;
- hide failed or unavailable results;
- silently alter authority, registry, environment, or claim ceilings;
- imply certification, production readiness, external audit, or complete AI safety without evidence.

## Availability boundary

No response time, review time, security coverage, release cadence, or long-term maintenance capacity is guaranteed.

## Review trigger

Update this file when authority is appointed, removed, delegated, superseded, or materially changed; when the account becomes an organization; or when release/security responsibilities become operational.
