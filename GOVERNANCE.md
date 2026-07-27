# Riverbraid Governance

**Governance model:** Founder-led, evidence-constrained, forkable  
**Account type:** GitHub user account  
**Current protocol authority:** Riverbraid-Core  
**Public evaluation authority:** Riverbraid-Evaluation-Kit for its exact pinned profile  
**F0–F4 status:** Proposed, not adopted, not executed

## Purpose

This file explains how Riverbraid decisions are made without converting historical authorship, repository access, file presence, or technical contribution into current authority.

## Governing principles

Riverbraid governance follows these rules:

- evidence precedes claims;
- missing required evidence fails closed;
- authority must be explicit, attributable, scoped, and current;
- repository visibility is not registry membership;
- registry membership is not equal verification depth;
- verification is not adoption;
- adoption is not execution;
- execution is not external review;
- history is preserved rather than silently rewritten;
- founder authorship must not require permanent founder dependency for ordinary continuation;
- forks remain permitted, but forked claims and authority do not inherit automatically.

## Current authority model

### Founder authority

The Riverbraid founder retains final disposition authority for:

- adoption or supersession of protocol-defining control records;
- changes to the F0–F4 gate definitions or claim ceilings;
- registry succession where a current record reserves that decision;
- changes that materially alter Riverbraid's public identity or governing purpose;
- exceptional conflict or succession dispositions not already delegated.

Founder authority does not convert unperformed work into evidence and cannot declare a technical PASS contrary to observed results.

### Protocol authority

`Riverbraid-Core` defines current public protocol terminology and audit-floor semantics within its declared claim boundary.

A Core file does not become controlling merely because it exists. Applicability depends on its declared status, exact source identity, adoption state where required, and relationship to other controlling records.

### Evaluation authority

`Riverbraid-Evaluation-Kit` defines the public pinned evaluation profile for its exact registry, commands, expected results, environment contract, and claim ceiling.

A successful Evaluation Kit run applies only to the exact observed subject and does not establish registry freshness, equal verifier depth, independent reproduction, adoption, or full-account operation.

### Repository maintenance authority

Repository maintainers may review and merge changes within the authority already delegated to that repository.

Maintenance authority does not by itself authorize:

- protocol redefinition;
- registry succession;
- F0–F4 adoption or gate advancement;
- certification or production-readiness claims;
- deletion or rewriting of required historical evidence.

### Evidence and review roles

A contributor, reviewer, evaluator, or evidence recorder may produce attributable findings and recommendations.

Those roles do not automatically carry disposition authority. An evidence producer must not approve their own result as independent review.

## Decision classes

Every material decision should identify its class:

- `TECHNICAL_DETERMINATION` — resolved by source inspection, deterministic validation, or execution evidence;
- `BOUNDED_MAINTENANCE_DECISION` — resolved by an authorized maintainer within an existing claim boundary;
- `FOUNDER_DISPOSITION` — reserved for adoption, scope, identity, succession, or other explicitly retained authority;
- `EXTERNAL_OR_INDEPENDENT_DISPOSITION` — requires a distinct reviewer or operator under declared independence conditions;
- `NOT_YET_DECIDABLE` — required evidence or authority is absent.

No decision may be upgraded merely to satisfy a schedule.

## Change process

Material pull requests should state:

1. exact subject and scope;
2. authority affected;
3. files and behaviors changed;
4. tests or observations performed;
5. evidence not yet available;
6. allowed and refused claims;
7. rollback or reconstitution path where material;
8. whether founder, maintainer, or independent disposition is required.

Changes affecting protocol semantics, registry pins, verifier commands, evidence formats, claim ceilings, workflows, environment locks, hashes, seals, releases, or lifecycle status require explicit review of those surfaces.

## Adoption and execution boundary

A proposal is not adopted until the required authority performs an attributable adoption act.

An adopted record is not executed until the required actions occur and execution evidence exists.

No pull request, successful workflow, issue closure, or file merge may silently adopt the F0–F4 control package or advance P0, F0, F1, F2, F3, or F4.

## Conflict and appeal

When sources conflict:

1. preserve both source identities;
2. identify applicability, authority, freshness, and supersession state;
3. stop claim expansion;
4. open an attributable issue or fault record;
5. obtain the required disposition rather than selecting the more convenient source.

## Succession and continuity

Riverbraid should remain understandable, forkable, and maintainable without continuous founder intervention.

A future succession record should identify:

- successor authority;
- scope and effective time;
- transferred and retained powers;
- custody of keys, evidence, registries, and release processes;
- re-entry and rollback procedures;
- public notice and supersession links.

Until such a record exists, no contributor should infer succession from inactivity, repository access, or historical contribution.

## Forkability

Forks are permitted under the licenses of the applicable repositories.

A fork must not imply inherited Riverbraid authority, registry membership, verification, adoption, endorsement, or evidence continuity. See `FORKING.md`.

## Non-claims

This governance file does not establish a legal entity, board, staffed maintainership program, service level, certification body, external audit, production-readiness authority, or automatic succession.
