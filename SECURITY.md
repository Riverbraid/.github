# Security Policy

This document describes the bounded reporting route for security concerns affecting Riverbraid public repositories.

It is a community-health surface only. It does not create certification, legal approval, production readiness, guaranteed response times, staffed security operations, external audit, absolute security, or absence of defects.

## Scope

This policy applies to public Riverbraid repositories as a reporting and routing surface.

It does not mean every repository is production-ready, independently audited, actively monitored, or safe for deployment.

## Sensitive reporting rule

Do **not** publish any of the following in a public issue, pull request, discussion, commit, gist, or workflow log:

- exploit instructions or proof-of-concept code for an unremediated vulnerability;
- credentials, tokens, private keys, secrets, or recovery material;
- personal or confidential data;
- unredacted logs containing sensitive values;
- information that would materially increase immediate exploitation risk.

## Preferred private route

For the affected repository, first check its **Security** tab for a **Report a vulnerability** option.

Use that route only when GitHub visibly provides the private vulnerability-reporting form for the exact repository.

Private vulnerability-reporting enablement is currently a manual repository-setting confirmation item tracked in `Riverbraid-Documentation#19`. File presence in this repository does not prove that the private route is enabled everywhere.

## When no verified private route is available

Fail closed:

1. do not send sensitive details through a public channel;
2. open a minimal public issue in the affected repository titled `Private security contact requested`;
3. include only the repository name, a high-level affected surface, and a statement that details are being withheld pending a verified private route;
4. do not include exploitability, secrets, vulnerable line details, or reproduction steps;
5. wait for an attributable maintainer response establishing an appropriate private channel.

A public placeholder issue is routing metadata, not a vulnerability report.

## Non-sensitive security findings

A public issue may be appropriate when the information is already public and does not increase exploitation risk, such as:

- stale or contradictory security documentation;
- missing claim boundaries;
- visibly unpinned workflow references;
- a public workflow failure that contains no secrets;
- a request to confirm security-setting status without vulnerability details.

## Report contents for a verified private route

Include only what is necessary:

- repository and exact commit or ref;
- affected file, workflow, dependency, or setting;
- observed behavior and security impact;
- bounded reproduction steps;
- environment and prerequisites;
- whether credentials or personal data may have been exposed;
- suggested containment, if known;
- disclosure constraints or timing concerns.

## Response boundary

Riverbraid currently provides public inspection surfaces and verification artifacts. This policy does not imply a staffed response team, emergency availability, formal disclosure program, bounty program, guaranteed remediation, third-party audit, or production-deployment support.

## Non-claims

This policy does not claim:

- certification;
- legal approval;
- production readiness;
- absolute security;
- external audit;
- complete AI safety;
- guaranteed response time;
- private vulnerability-reporting availability in every repository;
- absence of defects.
