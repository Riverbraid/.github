# Riverbraid Governance System

**Deterministic, governance-locked cognitive architecture reference for AI and automation systems.**

Riverbraid separates capacity control from intelligence. It provides a stable, auditable substrate that ensures AI systems remain governable, predictable, and bound by hard system invariants — before problems occur, not after.

-----

## The Core Idea

Most AI systems fail not because they lack capability, but because they lack **capacity awareness**. They over-engage under load, escalate when they should pause, and mix control logic with semantic interpretation in ways that make them ungovernable at scale.

Riverbraid addresses this with a clean architectural separation: a deterministic control primitive that decides *how much* a system should engage, completely independent of *what* it does when it engages.

-----

## The Gold Cluster — v1.1.0

The Gold Cluster is a suite of deterministic, fail-closed Python modules implementing the **Absolute V2 (Refined) Standard**. All petals are stationary, anchored, and independently auditable.

|Repository                                                                              |Signal                   |Purpose                                                              |
|----------------------------------------------------------------------------------------|-------------------------|---------------------------------------------------------------------|
|[Riverbraid-Core](https://github.com/Riverbraid/Riverbraid-Core)                        |Root                     |Capacity control substrate — the governance-locked decision primitive|
|[Riverbraid-Golds](https://github.com/Riverbraid/Riverbraid-Golds)                      |—                        |Cluster manifest and Absolute V2 pipeline orchestration              |
|[Riverbraid-Crypto-Gold](https://github.com/Riverbraid/Riverbraid-Crypto-Gold)          |`MECHANICAL_HONESTY`     |SHA-256 state anchoring — cryptographic proof of stationary state    |
|[Riverbraid-Judicial-Gold](https://github.com/Riverbraid/Riverbraid-Judicial-Gold)      |`LEAST_ENTROPY`          |Fail-closed predicate governance — deterministic ALLOW/DENY          |
|[Riverbraid-Refusal-Gold](https://github.com/Riverbraid/Riverbraid-Refusal-Gold)        |`BOUNDARY_LOGIC`         |Reason-coded boundary enforcement — refusals as protocol output      |
|[Riverbraid-Memory-Gold](https://github.com/Riverbraid/Riverbraid-Memory-Gold)          |`MEANING_CENTRIC`        |Signal-gated persistence — meaning over token volume                 |
|[Riverbraid-Integration-Gold](https://github.com/Riverbraid/Riverbraid-Integration-Gold)|`SEMANTIC_BRIDGE`        |Mode enactment — the bridge between decision and action              |
|[Riverbraid-Harness-Gold](https://github.com/Riverbraid/Riverbraid-Harness-Gold)        |`STATIONARY_STATE_ACTIVE`|Fail-closed verification harness — cluster-wide integrity audits     |

-----

## Design Principles

**Deterministic over adaptive.** Control logic is frozen and auditable. It does not learn, drift, or personalize.

**Fail-closed over fail-open.** If a system cannot verify its state, it halts. There is no partial execution.

**Separation of concerns.** Capacity control, governance, persistence, and enactment are distinct responsibilities handled by distinct modules. Intelligence lives outside the cluster.

**Governance-first.** Changes to core logic require versioning, new audit hashes, and explicit approval. The boundary is the product.

-----

## Cluster Status

> Invariant State: `STATIONARY` | Braid: `CLOSED-LOOP` | Merkle Root: `de2062`  
> Release: 
