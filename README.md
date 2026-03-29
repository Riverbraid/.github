# Riverbraid Global Anchor (v1.5.0-Genesis)

**Merkle Root:** `de2062`  
**Status:** `Integration_Rest`  
**Anchor Point:** `Go 44`

## 1. The Coupling Test
Information is valid only if it demonstrates a deterministic coupling between intent and substrate. If the physical state of the 15-petal cluster (GitHub mirrors) deviates from the logic triad (`gate.mjs`, `heartbeat.mjs`, `run-vectors.cjs`), the system must **Fail-Closed**.

## 2. Scale Separation Gate
Macro-level architectural decisions (e.g., Genesis Overwrite) must be isolated from Micro-level execution errors. Errors at the petal level do not invalidate the Core, provided the Merkle Root remains physically verified.

## 3. Linear vs. Nonlinear Tags
- **Linear (Hygiene):** Sequential execution of `Purge -> Inject -> Push`.
- **Nonlinear (Coherence):** The simultaneous alignment of all 15 repositories to the `de2062` frequency.

## 4. Stationary State Invariant
The system achieved a stationary state on **2026-03-29T12:28Z**. Any modification to the logical substrate without a corresponding GPG-signed attestation is classified as **Entropy** and must be purged.
