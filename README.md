# Riverbraid GitHub Support Configuration

This repository provides shared community-health files and profile candidates for the Riverbraid public repository surface.

**Account type:** GitHub user account  
**Primary evaluation entrance:** [Riverbraid-Evaluation-Kit](https://github.com/Riverbraid/Riverbraid-Evaluation-Kit)

## Account-surface boundary

`Riverbraid` is currently a GitHub **user account**, not an organization.

GitHub displays a personal profile README only from a public repository named exactly `Riverbraid/Riverbraid` with a non-empty root `README.md`.

The file `profile/README.md` in this `.github` repository is the organization-profile convention. Under the current user-account structure, it must be treated as a profile candidate and documentation surface, not as proof that the Riverbraid account profile renders that content.

`USER_PROFILE_README_CANDIDATE.md` contains the clean candidate text for a future `Riverbraid/Riverbraid/README.md` if that repository is created manually.

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

## Community health

Shared community-health files in this repository may provide default contribution and security-reporting guidance across public Riverbraid repositories where GitHub's user-owned repository behavior supports that inheritance.

Their presence does not prove that every repository inherits or displays every file. Per-repository coverage remains an inspectable policy and platform-behavior question.

## Authority boundary

Riverbraid-Core remains the normative source for protocol semantics. This repository does not replace code, test vectors, registry entries, signatures, seals, workflow evidence, claim-boundary documents, or the F0–F4 control package.

## Non-claims

This repository does not claim certification, production readiness, external audit, legal approval, complete AI safety, absolute security, adoption, profile-rendering completeness, or absence of defects.
