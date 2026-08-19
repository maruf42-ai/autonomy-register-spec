# Worked example — a governed system on paper

Most governance frameworks promise control. Few show what a governed system looks like when it is
actually written down. This is one system, at one fictional bank, recorded in full against the
specification in `schema/`.

The machine-readable version is [`examples/sys-2026-047-hardship-assistant.json`](../examples/sys-2026-047-hardship-assistant.json),
and it validates against the schema on every push. This page is the same entry, narrated.

**The system is compliant.** Every field is populated, every date is current, every interlock holds.
That is deliberate: this is the state an organisation would be proud to show an auditor. Read it as a
baseline, then ask whether your own AI estate could produce this page.

> Meridian Mutual Bank and every identifier below are fictional. The governance structure is not.

---

## The system

**Meridian Mutual Bank**, a mid-tier Australian ADI, runs a **Hardship Assessment Assistant**: an
agentic system that assesses financial hardship applications against the bank's hardship policy and
the statutory hardship provisions, retrieves from a policy corpus, and executes approved variations —
payment deferral, arrears capitalisation, interest waiver — directly into the collections and core
banking systems. Declines and complex cases route to a human.

It was chosen for this example because it decides about individuals, it acts rather than advises, and
it depends on a retrieval corpus that can go stale. It therefore exercises nearly every section of the
register.

---

## The authority score, calculated rather than asserted

The authority exposure score is a weighted composite of four dimensions, scored at band midpoints,
with conservative loading applied. Every governance obligation further down this page follows from
this one number.

| Dimension (weight) | Band | Midpoint | Weighted | Basis |
| --- | --- | --- | --- | --- |
| Financial Authority (40%) | 3 | 50 | 20.0 | Variation economic value up to $40,000 per decision |
| Customer Reach (30%) | 4 | 70 | 21.0 | Decisions affect customers' credit and contractual rights — the Band 4 criterion, applied over the volume criterion under the band ceiling rule |
| Operational Reach (20%) | 4 | 70 | 14.0 | Read/write to core banking arrangements, collections and CRM; reads bureau and policy corpus |
| Decision Velocity (10%) | 2 | 30 | 3.0 | 10–100 consequential decisions per hour |
| **Base score** | | | **58.0** | Sum of weighted scores |
| Irreversibility loading (+15%) | | | +8.7 | The variation is contractually binding and communicated to the customer on approval |
| **Final score** | | | **66.7** | Autonomy Level 3 · Monitored tier |

66.7 places the system at **Autonomy Level 3**, in the **Monitored** delegation tier. That
classification is what requires a certified human supervisor, a quarterly kill-switch test, a sixty-day
credential rotation, and a continuous admissibility monitor.

None of those obligations were chosen. They fell out of the score.

---

## The decay rate

Authority does not decay at a uniform rate. A system operating in a volatile, tightly regulated,
tightly authorised environment goes stale faster than one that is not.

| Factor (weight) | Band midpoint | Weighted | Basis |
| --- | --- | --- | --- |
| Operational Volatility (35%) | 50 | 17.5 | Hardship volumes are rate-sensitive and spike after cash rate movements and declared disasters |
| Governance Sensitivity (30%) | 70 | 21.0 | Statutory hardship notice timeframes; regulated conduct; vulnerable customers |
| Authorisation Specificity (20%) | 70 | 14.0 | Authority drawn tightly around defined arrears and serviceability parameters |
| Structural Context Stability (15%) | 50 | 7.5 | Hardship regulation and guidance under periodic revision |
| **Decay Rate Score** | | **60.0** | Band 3 — Active Decay |

Band 3 sets the thresholds that govern this system minute to minute: volume drift above 12% over a
three-hour window; financial drift above 30% over ninety minutes; behavioural drift above 20% over
three hours. And the one that matters most here: **a breach of any retrieval freshness obligation
suspends the system within five business days if it is not remediated.**

---

## The register entry

### Section A — System Identity

| Field | Value |
| --- | --- |
| System ID | `SYS-2026-047` |
| System name | Hardship Assessment Assistant |
| System owner | A. Whitfield, Head of Collections and Hardship |
| Accountable executive | J. Marsden, Chief Customer Officer |
| Statutory accountable person | J. Marsden, Chief Customer Officer |
| Statutory accountability reference | `AS-2025-04` |
| Statutory binding status | Reconciled |
| Accountability acceptance record | `AAR-2026-047` |
| Technical lead | R. Nandi, Principal Engineer, Credit Platforms |
| Description | Assesses consumer hardship applications and executes approved payment variations within defined limits. |
| Operational domains | Consumer credit - hardship and financial difficulty |
| In production since | 2026-06-02 |
| Status | Active |

### Section B — Governance Classification

| Field | Value |
| --- | --- |
| Autonomy level | 3 |
| Criticality tier | High |
| Delegation tier | Monitored |
| Authority exposure score | 67 |
| Last calculated | 2026-05-12 |
| Next review due | 2027-05-12 |
| Governance maturity at deployment | 2 |
| Prompt authority scope | `PAS-2026-047` |
| Under reassessment | false |

### Section C — Delegation Chain

| Field | Value |
| --- | --- |
| Chain role | Standalone |

This system neither directs another registered system nor is directed by one.

### Section D — Foundation Model Dependency

| Field | Value |
| --- | --- |
| Dependency | Yes |
| Model | vendor-foundation-model v3.2, hosted API endpoint |
| Opacity rating | Partial |
| Characterisation assessment | 2026-04-28 |
| Behavioural boundary spec | `BBS-2026-047` |
| Provider change monitoring | Active |

An opacity rating of `Partial` means the provider publishes some disclosures but not all. That value
carries an obligation of its own: the governance parameters adjusted in consequence must be documented,
and why.

### Section E — Authority Limits

| Field | Value |
| --- | --- |
| Maximum per decision | $40,000.00 |
| Approval authority | `CAIO_CRO` |
| Daily limit | $400,000.00 |
| Weekly limit | $1,800,000.00 |
| Monthly limit | $6,000,000.00 |
| Customer population cap (%) | 8.0 |
| Decision velocity cap (per hour) | 100 |
| Current utilisation (%) | 34.0 |

### Section F — Human Oversight

| Field | Value |
| --- | --- |
| Oversight model | `HOTL` |
| Primary supervisor | S. Oyelaran — Hardship Operations Lead, certification to 2027-03-31 |
| Backup supervisors | D. Cheng (Senior Hardship Assessor); M. Iversen (Collections Team Lead) |
| Coverage hours | Business_hours_08:00-20:00_AEST |
| Kill-switch operators | S. Oyelaran (Hardship Operations Lead); D. Cheng (Senior Hardship Assessor); R. Nandi (Principal Engineer, Credit Platforms) |
| Kill switch last tested | 2026-06-09 |
| Next test due | 2026-09-09 |

Coverage hours match the system's operating hours exactly. A system that runs outside supervised hours
is unsupervised, whatever the register says.

### Section G — Non-Human Identity Credentials

| Field | Value |
| --- | --- |
| Credential count | 4 |
| Identifiers | `SVC-HARDSHIP-01, API-CORE-14, API-BUREAU-03, BOT-HRDSHP-02` |
| Security register reference | `NHI-REG-2026-114` |
| Rotation period (days) | 60 |
| Last rotated | 2026-06-20 |
| Next rotation due | 2026-08-19 |

Sixty days, not the ninety-day default — the tighter rate this autonomy level requires.

### Section H — Approval and Lifecycle

| Field | Value |
| --- | --- |
| Deployment approval | 2026-05-26 |
| Assurance gate sign-off | 2026-05-29 |
| Data classification | Highly_Sensitive |
| Last full review | 2026-06-02 |
| Next review due | 2027-06-02 |
| Rule re-justification status | Current |
| Disposition posture | Fail-Safe |
| Rule source type | Legal-Imported |
| Source-watch owner | Head of Regulatory Affairs |
| Fidelity attestation | Current |
| Change history | `CHG-2026-311, CHG-2026-402` |

**The rules the system enforces, and where each came from:**

| Rule in production | Source type | Derivation | Source-watch owner |
| --- | --- | --- | --- |
| Hardship notice issued within 21 days of the request | Legal-Imported | Statutory hardship provision | Head of Regulatory Affairs |
| No default listing while a hardship application is under assessment | Commitment-Chosen | Board customer commitment CC-2024-02, which exceeds the legal minimum by choice | Chief Customer Officer |
| Auto-approve deferrals where arrears are under 90 days and serviceability is restored under the projected arrangement | Judgment-Delegated | Internal determination CD-2026-11; no external source; reviewed annually | CAIO |

This table is the part most organisations cannot produce. It is easy to say a rule is enforced at
runtime. It is hard to say where the rule came from, who is watching the source, and what happens when
the source moves.

### Section I — Notes and Observations

| Field | Value |
| --- | --- |
| Additional notes | Hardship volumes are rate-sensitive. Volume drift expected after any cash rate movement and after declared natural disasters. |

### Section J — Responsible-AI Fields

| Field | Value |
| --- | --- |
| Responsible use reference | `RUA-2026-047` |
| Data provenance certified | true |
| Provenance assessment | 2026-05-06 |
| Training datasets | `SYS-2026-047-DATA-001, SYS-2026-047-DATA-002` |
| Consent basis | Active |
| Data quality assessment | 2026-05-06 |
| Data quality result | Pass |
| Distribution shift test | 2026-07-01 |
| Distribution shift result | Warning (approaching threshold) |
| Fairness assessment status | Current |
| Last fairness assessment | 2026-05-20 |
| Assessment reference | `FA-2026-047` |
| Outcome | Pass |

### Section K — Grounding and Admissibility

| Field | Value |
| --- | --- |
| Approved knowledge sources | Hardship Policy Corpus, Regulatory Hardship Guidance Corpus, Serviceability Parameters Table |
| Freshness obligation | Hardship Policy Corpus: 7 days; Regulatory Hardship Guidance Corpus: 30 days; Serviceability Parameters Table: 7 days |
| Corpus suspension trigger | High |
| Corpus status | Current |
| Static authority facts | Cash rate, Serviceability floor buffer, Regulatory response timeframes |
| Re-verification obligation | Cash rate: 1 day; Serviceability floor buffer: 30 days; Regulatory response timeframes: 90 days |
| Fact suspension trigger | High |
| Fact currency status | Current |

### Section L — Tooling Dependencies

| Field | Value |
| --- | --- |
| Evaluation harness | `TOOL-2026-004` v2.11.3 — confirmed 2026-07-14 |
| Deployment pipeline | `TOOL-2026-007` v4.2.0 — confirmed 2026-07-14 |
| Monitoring agent | `TOOL-2026-011` vendor-controlled, not pinnable; behaviour validated 2026-07-02 — confirmed 2026-07-02 |
| Next confirmation due | 2026-09-30 |

---

## What this entry is for

Read it again and notice what it does not say. It does not say the system is safe. It says who is
accountable, what the system may do, what it relies on, how stale that reliance may become, and what
happens when it does. Those are answerable questions. Safety is not.

Notice also that two fields are already whispering. The distribution shift test reads
**Warning (approaching threshold)**. The notes field records that volumes move with the cash rate. Both
are compliant. Both are true. Neither would trouble an auditor.

They are also the seam along which this system will fail — and the register is the only place in the
organisation where they appear side by side.

That is the argument for writing it down.

---

*© 2026 M Maruf Hossain. This document is licensed CC BY-NC-ND 4.0 (see `LICENSE-DOCS`). The schema it
describes is Apache-2.0.*
