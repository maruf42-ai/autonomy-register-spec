# Autonomy Register — open specification

Most organisations cannot say what their AI systems are authorised to do, who is accountable when
one of them causes harm, or what those systems rely on to make a decision. Not because the
information is secret, but because there is nowhere it is written down.

This repository is the specification that makes it recordable.

- **`schema/`** — JSON Schema (2020-12) for a complete register entry: eleven sections, 98 fields.
- **`openapi/`** — the register API: nine endpoints, role-bound, every write logged.
- **`examples/`** — a fully worked entry for a fictional lender's hardship-assessment agent, and five
  entries that are *deliberately invalid*, each violating one interlock.
- **`docs/`** — field guide.

The worked example validates against the schema on every push. So do the invalid ones — as failures.

## What is in an entry

| Section | Records |
|---|---|
| A · System Identity | What the system is, and the named humans accountable for it |
| B · Governance Classification | Autonomy level, criticality, and the authority exposure score |
| C · Delegation Chain | Which systems may direct this one, and which it may direct |
| D · Foundation Model Dependency | Whose model it runs on, how opaque it is, and whether provider change is monitored |
| E · Authority Limits | What it may spend, per decision and in aggregate; how many customers it may touch |
| F · Human Oversight | Who supervises it, during which hours, and who can stop it |
| G · Non-Human Identity Credentials | Every credential it holds, and when they last rotated |
| H · Approval and Lifecycle | Who approved it, what rules it enforces, and where those rules came from |
| I · Additional Notes | Anything material that no other field captures |
| J · Responsible-AI Fields | Fairness, provenance, consent, drift |
| K · Grounding and Admissibility | What it retrieves, how stale that may become, and what happens when it does |

## The interlocks

A register entry can be complete and still be wrong, because the fields constrain one another. The
composite schema encodes ten of these. A conformant entry must satisfy them:

1. Autonomy Level 3 and above requires a named certified supervisor, named backups, and stated coverage hours.
2. Level 3 requires governance maturity 2; Level 4 requires 3; Level 5 requires 4.
3. The per-decision authority limit must sit within the ceiling for the delegation tier.
4. An orchestrator must declare its chain depth, its sub-agents, and the chain's authority ceiling.
5. A sub-agent must name the orchestrator authorised to direct it.
6. A system dependent on a foundation model must have been characterised, with provider change monitored.
7. A system with a retrieval layer must declare, for each source, how stale it may become and what happens when it does.
8. The same, for any static fact its authority was assessed against.
9. A fairness assessment that is not "Not Required" must be evidenced by a dated report and an outcome.
10. Credentials must be enumerated individually and reconciled against the security register.

The five files in `examples/invalid/` each break exactly one of these, and the CI asserts that the
schema rejects them. A specification that only ever validates is not being tested.

## Validate locally

```bash
npm install
npm test
```

## What is open, and what is not

**The specification is open.** `schema/` and `openapi/` are Apache-2.0, patent grant included.
Implement it, extend it, ship a product against it. There is nothing to ask permission for.

**The governance instruments are not part of this repository.** The schema records *that* a system
has an authority exposure score, a decay band, a policy rule whose source is Legal-Imported. It does
not tell you how to derive any of them. That derivation — which rule belongs in the boundary, traced
to which source, and who is accountable when the source changes — is the MANDATE Suite, and it is
proprietary.

That division is deliberate. A field list is not a moat, and pretending otherwise would only make the
specification useless to the people best placed to implement it.

## Citation

See `CITATION.cff`. The theoretical foundations are published as a preprint series; the relevant
papers are cited in `docs/field-guide.md`.

---

**Dr M Maruf Hossain, PhD, GAICD** · Chief AI Strategist, 42 Consulting.AI
enquire@42consulting.ai · www.42consulting.ai
