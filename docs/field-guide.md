# Field guide

Every key in the schema is derived from STD-EDS-007, the canonical data model for the Autonomy
Register. This guide explains the fields that are most often filled in wrongly, and why they matter.
For the rest, the `description` on each property in the schema is the rule.

## The three fields that carry the most weight

### `pac_rule_source_type`

One of `Legal-Imported`, `Commitment-Chosen`, `Judgment-Delegated`.

Every rule a system enforces at runtime came from somewhere. Either the law required it — name the
provision, and name the person who watches that provision for change. Or the organisation chose to go
beyond the law — name the decision that chose it. Or nobody outside the organisation compelled it and
somebody inside decided — name them.

A rule whose source cannot be named is a rule the system enforces on nobody's authority. It is
enforced perfectly and answerable to no one. This is the field most organisations cannot complete,
and completing it is most of the value of keeping the register at all.

### `accountability_acceptance_ref`

The reference to a signed record in which a named human accepted, in writing, that the system acts on
their authority.

An executive title on an org chart is not accountability. This field is what makes "the algorithm did
it" unavailable as an answer: someone signed for it, and if the seat changes, the incoming holder
signs again or the delegation stops.

### `retrieval_freshness_obligation` and `retrieval_corpus_suspension_trigger`

For each corpus the system retrieves from: how stale may it become, and what happens when it does.

A system can hold entirely valid authority and still act on a policy document that changed last
Tuesday. Authority is assessed at a moment; the information surface it was assessed against keeps
moving. These two fields are where an organisation states, in advance, how much drift it will tolerate
and what it will do about it — rather than discovering the answer afterwards.

## Derived fields — do not set these by hand

`delegation_tier`, `adae_next_review_due`, `next_review_due`, `next_rotation_due`,
`killswitch_next_test_due`, `next_chain_assessment_due`.

Each is computed from another field. Where a register lets a human set them independently, the
register will eventually disagree with itself.

## Immutable after first write

`system_id`, `gmi_level_at_deployment`, `retirement_date`, `retirement_reason`.

`gmi_level_at_deployment` is immutable for a reason worth stating: it records the organisation's
governance maturity *at the moment it approved this system*. Later maturity improvements do not
retroactively justify a deployment made when the organisation was not ready.

## Theoretical background

The concepts recorded by Sections H and K are developed in the preprint series:

- *Continuous Admissibility: A Temporal Governance Framework for Delegated Machine Authority.* Zenodo. https://doi.org/10.5281/zenodo.20580716
- *The Autonomy Budget: A Portfolio-Level Framework for Governing Delegated Machine Authority.* Zenodo. https://doi.org/10.5281/zenodo.20480491
- *Write-Before-Execute: A Governance Standard for Evidentially Defensible AI Decision Logging.* Zenodo. https://doi.org/10.5281/zenodo.20603712
