# Contributing to Riverbraid

This document describes how to contribute to Riverbraid public repositories.

It is a community health surface only. It does not create governance authority, maintainer capacity, guaranteed response times, legal approval, certification, production readiness, or external validation.

## Contribution posture

Riverbraid prioritizes bounded, inspectable, evidence-preserving changes.

Preferred contributions are:

- Documentation corrections
- Claim boundary fixes
- Reproduction notes
- Verification failure reports
- Surface coherence improvements
- Small, reviewable pull requests
- Issues that separate observed facts from interpretation

## Before opening a pull request

Check whether the change affects:

- Protocol semantics
- Verification commands
- Registry entries
- Workflow behavior
- Hashes or seals
- Public claims
- Repository lifecycle status

If it touches any of those, clearly state the impact in the pull request body.

## Pull request scope

Use small pull requests with a clear scope.

A good pull request states:

- What changed
- Why it changed
- What did not change
- Whether code, workflow, registry, verifier, hash, seal, or protocol behavior changed

## Suggested pull request boundary block

```text
Scope:
Documentation only.
No code changes.
No workflow changes.
No registry changes.
No verifier changes.
No hash or seal changes.
No protocol changes.
```

Adjust this block if the pull request actually changes one of those surfaces.

## Issues

Use issues for:

- Reproduction failures
- Documentation mismatch
- Inconsistent metadata
- Broken links
- Verification ambiguity
- Claim boundary problems
- Public surface coherence issues

## Conduct

Contributions should be factual, bounded, and respectful.

Do not use issues or pull requests to imply unsupported maturity, adoption, certification, legal approval, production readiness, external audit, complete AI safety, absolute security, or absence of defects.

## Boundary

This guide does not guarantee review, acceptance, support availability, response time, or maintenance capacity.
