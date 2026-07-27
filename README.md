# Riverbraid GitHub Support Configuration

This repository provides shared community-health files and profile candidates for the Riverbraid public repository surface.

**Account type:** GitHub user account  
**Primary evaluation entrance:** [Riverbraid-Evaluation-Kit](https://github.com/Riverbraid/Riverbraid-Evaluation-Kit)

## Account-surface boundary

`Riverbraid` is currently a GitHub **user account**, not an organization.

GitHub displays a personal profile README only from a public repository named exactly `Riverbraid/Riverbraid` with a non-empty root `README.md`.

The file `profile/README.md` in this `.github` repository is the organization-profile convention. Under the current user-account structure, it must be treated as a profile candidate and documentation surface, not as proof that the Riverbraid account profile renders that content.

`USER_PROFILE_README_CANDIDATE.md` contains the clean candidate text for a future `Riverbraid/Riverbraid/README.md` if that repository is created manually. Issue #6 records that account-level action.

## Current public route

Until the personal profile repository exists, the mechanically available route is:

1. Open `Riverbraid/.github` or another known Riverbraid repository.
2. Follow the primary entrance to `Riverbraid-Evaluation-Kit`.
3. Use `Riverbraid-Documentation` for explanatory and source-custody context.
4. Inspect `Riverbraid-Core` or a domain repository as needed.

The intended future profile route is:

```text
Riverbraid user profile → Evaluation Kit → Documentation → Core or domain repository
```

## Shared governance and community-health files

- `GOVERNANCE.md` — founder-led authority, decision classes, adoption, succession, and conflict boundaries.
- `MAINTAINERS.md` — current authority map and CODEOWNERS deferral.
- `CONTRIBUTING.md` — review posture and links to the dedicated rights policy.
- `INBOUND_CONTRIBUTION_RIGHTS.md` — authorship, licensing, third-party material, generated content, and acceptance boundaries.
- `FORKING.md` — fork identity, evidence continuity, and non-inherited claims.
- `SECURITY.md` — fail-closed sensitive-reporting route and private-intake limitations.
- `SUPPORT.md` — bounded routing and availability limits.
- `CODE_OF_CONDUCT.md` — conduct expectations.
- `PULL_REQUEST_TEMPLATE.md` — evidence, authority, claim, rollback, security, contributor-rights, and F0–F4 checks.

GitHub may use supported files from this public `.github` repository as account defaults when an owned repository lacks its own file of the same type.

Per-repository files take precedence, and local issue-template directories may override account defaults. File presence here does not prove that every repository inherits, displays, or enforces every surface.

## Authority boundary

Riverbraid-Core remains the normative source for protocol semantics. This repository does not replace code, test vectors, registry entries, signatures, seals, workflow evidence, claim-boundary documents, or the F0–F4 control package.

## Non-claims

This repository does not claim certification, production readiness, external audit, legal approval, complete AI safety, absolute security, adoption, profile-rendering completeness, account-wide template inheritance, or absence of defects.
