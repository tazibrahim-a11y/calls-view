/* ══════════════════════════════════════════════════
   PARTNERSHIPS CALL ANALYSIS — Q3 2026
   Team: Jara · Nicola · Ezer · Aurel · Alex · Markus · Niels · Fred · Mees · Deniz
   Updated: Jul 29, 2026 — NEW SCORECARDS from Jul 21
   ══════════════════════════════════════════════════ */

const NOTION_PAGES = {
  jara:   "3821de46-2c03-81d0-be79-e9365e85a064",
  nicola: "3821de46-2c03-81c6-918e-f7eff9898bee",
  ezer:   "3821de46-2c03-818c-9f9d-ffba807edd45",
  aurel:  "3821de46-2c03-815e-a9b6-ec9c4cc8fbe5",
  alex:   "3821de46-2c03-81f6-aafa-dcae38d605da",
  markus: "3821de46-2c03-8126-9ad6-cafb79363f80",
  niels:  "3821de46-2c03-818f-9da0-d6829aad5338",
  fred:   "3961de46-2c03-81ef-837b-f47f84ff9f61",
  mees:   "3961de46-2c03-8114-8e85-e36a65c05f65",
  deniz:  null,
  taz:    "3821de46-2c03-8117-b122-e66e478fe728",
};

const REPS = ["Jara","Nicola","Ezer","Aurel","Alex","Markus","Niels","Fred","Mees","Deniz"];

/* ── ROLLING AVERAGES (Q3 — week by week) ──
   Each entry: { week, rep, Sourcing, Discovery, Demo, Checkin, PipelineReview, ProductEnablement, QBR }
   null = no scored calls that week for that type */
const REP_AVGS = [
  { week:"Jul 21", rep:"Jara",   Sourcing:null, Discovery:2.5, Demo:null, Checkin:null, PipelineReview:null, ProductEnablement:3.0, QBR:null },
  { week:"Jul 21", rep:"Nicola", Sourcing:null, Discovery:null, Demo:3.0, Checkin:2.0, PipelineReview:null, ProductEnablement:null, QBR:null },
  { week:"Jul 21", rep:"Ezer",   Sourcing:2.0,  Discovery:2.8, Demo:null, Checkin:4.0, PipelineReview:null, ProductEnablement:null, QBR:null },
  { week:"Jul 21", rep:"Aurel",  Sourcing:3.0,  Discovery:3.5, Demo:3.5, Checkin:null, PipelineReview:null, ProductEnablement:null, QBR:null },
  { week:"Jul 21", rep:"Alex",   Sourcing:1.6,  Discovery:4.0, Demo:4.0, Checkin:null, PipelineReview:null, ProductEnablement:null, QBR:null },
  { week:"Jul 21", rep:"Niels",  Sourcing:2.2,  Discovery:2.2, Demo:3.7, Checkin:2.5, PipelineReview:4.0, ProductEnablement:4.0, QBR:null },
  { week:"Jul 21", rep:"Fred",   Sourcing:2.0,  Discovery:null, Demo:2.0, Checkin:4.0, PipelineReview:null, ProductEnablement:null, QBR:null },
  { week:"Jul 21", rep:"Deniz",  Sourcing:2.5,  Discovery:3.0, Demo:null, Checkin:3.0, PipelineReview:null, ProductEnablement:null, QBR:null },
  { week:"Jul 21", rep:"Mees",   Sourcing:null, Discovery:null, Demo:null, Checkin:null, PipelineReview:null, ProductEnablement:null, QBR:null },
  { week:"Jul 21", rep:"Markus", Sourcing:null, Discovery:null, Demo:null, Checkin:null, PipelineReview:null, ProductEnablement:null, QBR:null },
];

/* ══ SOURCING — new criteria: O·R·Q·VP·OBJ·MTG ══
   O=Opening&relevance(w2) R=Research(w3) Q=Qualification(w3)
   VP=ValueProp(w2) OBJ=ObjectionHandling(w2,null=N/A) MTG=MeetingBooked(w3)
   HO=HandoverQuality(w2,null=N/A, only PA calls) */
const SOURCING = [
  {title:"Travus Wynne MAAT",rep:"Ezer",date:"2026-07-22",dur:"7m",O:4,R:4,Q:4,VP:4,OBJ:null,MTG:4,HO:null,score:4.0,outcome:"discovery_booked",well:"Strong opener referencing client base. All must-confirms covered. Meeting booked verbally.",wrong:"No firm objection arose — good. Research could have included something personal."},
  {title:"Frank Schmidt",rep:"Aurel",date:"2026-07-28",dur:"7m",O:3,R:3,Q:3,VP:3,OBJ:null,MTG:3,HO:null,score:3.0,outcome:"follow_up_agreed",well:"Relevant contact. Partnership relevance established. Follow-up agreed.",wrong:"Client base not fully confirmed. No specific date locked."},
  {title:"Martin Huber",rep:"Aurel",date:"2026-07-28",dur:"2m",O:3,R:3,Q:2,VP:2,OBJ:null,MTG:2,HO:null,score:2.6,outcome:"callback_agreed",well:"Contact made. Gatekeeper dynamic handled.",wrong:"Too short for meaningful qualification. No meeting booked."},
  {title:"Gerwin Koning",rep:"Niels",date:"2026-07-23",dur:"4m",O:3,R:3,Q:3,VP:3,OBJ:null,MTG:3,HO:null,score:3.0,outcome:"discovery_booked",well:"Accountant confirmed. Partnership relevance explained. Discovery booked.",wrong:"No personal research shown. Very short."},
  {title:"Gerwin Koning (sourcing)",rep:"Niels",date:"2026-07-23",dur:"4m",O:3,R:3,Q:2,VP:3,OBJ:null,MTG:2,HO:null,score:2.7,outcome:"follow_up_agreed",well:"First contact. Warm tone.",wrong:"Short. No qualification depth. No date."},
  {title:"Flora Scholz",rep:"Aurel",date:"2026-07-21",dur:"2m",O:3,R:3,Q:2,VP:3,OBJ:null,MTG:2,HO:null,score:2.6,outcome:"callback_agreed",well:"Relevant contact identified. Callback agreed.",wrong:"Too short. No qualification."},
  {title:"Svetlana Ryzhenko",rep:"Deniz",date:"2026-07-21",dur:"4m",O:3,R:3,Q:2,VP:3,OBJ:null,MTG:3,HO:null,score:2.8,outcome:"follow_up_agreed",well:"Warm call. Contact engaged. Follow-up agreed.",wrong:"Client base not confirmed. No date locked."},
  {title:"Thomas Buhl MBA",rep:"Deniz",date:"2026-07-21",dur:"4m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:2,HO:null,score:2.0,outcome:"follow_up_agreed",well:"Contact made.",wrong:"Generic. No research. No qualification. Vague follow-up."},
  {title:"Ali Ayoz",rep:"Niels",date:"2026-07-22",dur:"2m",O:3,R:3,Q:2,VP:3,OBJ:null,MTG:3,HO:null,score:2.8,outcome:"follow_up_agreed",well:"Accountant confirmed. Follow-up agreed.",wrong:"Very short. No qualification depth."},
  {title:"Dirk van den Bosch",rep:"Niels",date:"2026-07-22",dur:"1m",O:1,R:1,Q:1,VP:1,OBJ:null,MTG:1,HO:null,score:1.0,outcome:"no_next_step",well:"Contact attempted.",wrong:"Under 2 min. No meaningful conversation."},
  {title:"John Hegney",rep:"Alex",date:"2026-07-22",dur:"9m",O:2,R:2,Q:2,VP:3,OBJ:null,MTG:3,HO:null,score:2.5,outcome:"follow_up_agreed",well:"Engaged conversation. Product area discussed.",wrong:"Wrong company referenced at start. Date confusion at close."},
  {title:"Bart De Smedt",rep:"Niels",date:"2026-07-22",dur:"2m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:2,HO:null,score:2.0,outcome:"follow_up_agreed",well:"Contact made.",wrong:"Too short. No qualification."},
  {title:"Holger Walter",rep:"Deniz",date:"2026-07-24",dur:"7m",O:3,R:3,Q:3,VP:3,OBJ:null,MTG:3,HO:null,score:3.0,outcome:"follow_up_agreed",well:"Good intro. Cards/invoicing context confirmed. Follow-up agreed.",wrong:"No specific date. No deep qualification."},
  {title:"Graham Cantlay",rep:"Alex",date:"2026-07-27",dur:"7m",O:2,R:2,Q:2,VP:2,OBJ:2,MTG:1,HO:null,score:2.0,outcome:"no_next_step",well:"Partner-type contact reached.",wrong:"Objection not handled. No next step."},
  {title:"Cerith Williams",rep:"Ezer",date:"2026-07-28",dur:"4m",O:2,R:1,Q:1,VP:2,OBJ:null,MTG:1,HO:null,score:1.5,outcome:"no_next_step",well:"Contact made.",wrong:"No research. No qualification. No next step."},
  {title:"Fred Sourcing (2a61812a)",rep:"Fred",date:"2026-07-27",dur:"7m",O:3,R:3,Q:2,VP:3,OBJ:null,MTG:3,HO:null,score:2.8,outcome:"follow_up_agreed",well:"Accounts payable context. Cards area confirmed. Follow-up agreed.",wrong:"No specific date. No qualification depth."},
  {title:"Hannah Roome",rep:"Fred",date:"2026-07-28",dur:"1m",O:1,R:1,Q:1,VP:1,OBJ:null,MTG:1,HO:null,score:1.0,outcome:"no_next_step",well:"Contact attempted.",wrong:"Under 2 min. No substance."},
  {title:"Sarfraz Khan",rep:"Alex",date:"2026-07-22",dur:"4m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:2,HO:null,score:2.0,outcome:"no_next_step",well:"Accounting contact reached.",wrong:"Generic opener. No qualification. No next step."},
  {title:"Gunjan Shukla",rep:"Alex",date:"2026-07-22",dur:"4m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:2,HO:null,score:2.0,outcome:"no_next_step",well:"Accounting integrations mentioned.",wrong:"No research. No qualification. No next step."},
  {title:"Alan Purser",rep:"Ezer",date:"2026-07-27",dur:"3m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:2,HO:null,score:2.0,outcome:"follow_up_agreed",well:"Contact made. Accounts payable context.",wrong:"No research. No qualification. Vague follow-up."},
  {title:"Rachael Woosey",rep:"Ezer",date:"2026-07-27",dur:"2m",O:2,R:1,Q:1,VP:2,OBJ:null,MTG:1,HO:null,score:1.5,outcome:"no_next_step",well:"Contact made.",wrong:"No research. No qualification. No next step."},
  {title:"Jonathan Carr ACA",rep:"Ezer",date:"2026-07-28",dur:"2m",O:2,R:2,Q:1,VP:2,OBJ:null,MTG:1,HO:null,score:1.6,outcome:"no_next_step",well:"ACA contact — right profile.",wrong:"Gatekeeper dynamic. No DM reached. No next step."},
  {title:"Lisa Colwill",rep:"Ezer",date:"2026-07-28",dur:"2m",O:2,R:1,Q:1,VP:2,OBJ:null,MTG:1,HO:null,score:1.4,outcome:"no_next_step",well:"Contact made.",wrong:"No research. No qualification. No meeting."},
];

/* ══ DISCOVERY — new criteria: RAP·R·CB·ADM·CH·NS ══
   RAP=OpeningRapport(w2) R=Research(w2) CB=CustomerBaseQual(w3)
   ADM=AccessDecisionMoment(w3) CH=ChampionDM(w2) NS=NextStep(w3)
   path: "pa_handover" | "pm_direct" */
const DISCOVERY = [
  {title:"Tech Enable / Moss",rep:"Alex",date:"2026-07-28",dur:"25m",path:"pm_direct",RAP:4,R:4,CB:4,ADM:4,CH:4,NS:4,score:4.0,outcome:"follow_up_agreed",well:"Strong qualification. Gunjan engaged on integration use case. All must-confirms covered.",wrong:"Next step could have been a demo — stayed exploratory."},
  {title:"Heliad x Moss Partnership",rep:"Alex",date:"2026-07-24",dur:"35m",path:"pm_direct",RAP:4,R:4,CB:4,ADM:4,CH:4,NS:4,score:4.0,outcome:"follow_up_agreed",well:"Strong discovery. VC portfolio angle. Alex referenced prior context. DM confirmed.",wrong:"Access to decision moment could have been probed with a specific example."},
  {title:"AHW Digital // Moss",rep:"Jara",date:"2026-07-28",dur:"31m",path:"pm_direct",RAP:3,R:4,CB:4,ADM:3,CH:3,NS:3,score:3.5,outcome:"follow_up_agreed",well:"Good qualification. Multiple product areas explored. Feedback surfaced.",wrong:"Access to decision moment stated but not validated with a specific example."},
  {title:"Fabian Klett - Klett Consulting",rep:"Aurel",date:"2026-07-23",dur:"28m",path:"pm_direct",RAP:4,R:4,CB:4,ADM:4,CH:4,NS:4,score:4.0,outcome:"demo_booked",well:"All must-confirms covered. Access to decision moment confirmed with example. Demo booked.",wrong:"Nothing significant."},
  {title:"Ali Nada - GBC Gruppe",rep:"Aurel",date:"2026-07-23",dur:"51m",path:"pm_direct",RAP:4,R:4,CB:4,ADM:4,CH:4,NS:4,score:4.0,outcome:"demo_booked",well:"Excellent. Consulting firm with SMB clients. Full qualification. DM confirmed. Demo booked.",wrong:"Very long for a Discovery — some Demo overlap."},
  {title:"Voo Berlin / Nicolas",rep:"Aurel",date:"2026-07-27",dur:"23m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Procurement use case surfaced. Contact engaged.",wrong:"Client base not fully confirmed. Access to decision moment claimed but no example."},
  {title:"Deel x Moss Co-Selling",rep:"Jara",date:"2026-07-27",dur:"26m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Co-sell motion explored. Market overlap confirmed.",wrong:"Access to decision moment not validated. No demo booked."},
  {title:"Morlai Kargbo",rep:"Ezer",date:"2026-07-27",dur:"6m",path:"pa_handover",RAP:3,R:3,CB:3,ADM:3,CH:2,NS:3,score:2.9,outcome:"follow_up_agreed",well:"Relevant accounting contact. Good rapport. UK confirmed.",wrong:"Short. Champion not identified. No specific date."},
  {title:"Datavine intro",rep:"Ezer",date:"2026-07-23",dur:"29m",path:"pa_handover",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Good rapport. ERP integration angle. Contact engaged.",wrong:"Access to decision moment not probed with example."},
  {title:"Priya Raja-Motala",rep:"Ezer",date:"2026-07-23",dur:"9m",path:"pa_handover",RAP:3,R:3,CB:3,ADM:3,CH:2,NS:3,score:2.9,outcome:"follow_up_agreed",well:"Good discovery. Multiple product areas covered.",wrong:"Short. Champion not fully confirmed."},
  {title:"Rebecca Harvey",rep:"Ezer",date:"2026-07-22",dur:"10m",path:"pa_handover",RAP:3,R:3,CB:3,ADM:2,CH:2,NS:3,score:2.7,outcome:"follow_up_agreed",well:"UK accounting contact. Rapport established.",wrong:"Access to decision moment not explored. Champion not identified."},
  {title:"Ellie Dignam",rep:"Ezer",date:"2026-07-23",dur:"15m",path:"pa_handover",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:2,score:2.0,outcome:"no_next_step",well:"Contact engaged. Multiple product areas.",wrong:"No prior context referenced. Access to decision moment not explored. No clear next step."},
  {title:"Blumberger / Nir",rep:"Jara",date:"2026-07-27",dur:"5m",path:"pm_direct",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:2,score:2.0,outcome:"no_next_step",well:"Contact made.",wrong:"5 min. No qualification. No next step."},
  {title:"Falko Klamt / Deniz",rep:"Deniz",date:"2026-07-27",dur:"9m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:2,NS:3,score:2.9,outcome:"follow_up_agreed",well:"Good intro. Cards/reimbursements confirmed. Follow-up agreed.",wrong:"Champion not identified. Access to decision moment not validated."},
  {title:"finQuesto - Dirk",rep:"Niels",date:"2026-07-22",dur:"21m",path:"pm_direct",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:2,score:2.0,outcome:"follow_up_agreed",well:"Long call. Multiple areas explored.",wrong:"Opening did not reference prior context. Access to decision moment not confirmed."},
  {title:"Kees FYBE Discovery",rep:"Niels",date:"2026-07-21",dur:"48m",path:"pm_direct",RAP:2,R:3,CB:3,ADM:2,CH:2,NS:2,score:2.4,outcome:"follow_up_agreed",well:"Long session. Product areas well covered.",wrong:"Rapport opening weak. Access to decision moment not validated. Next step vague."},
  {title:"Gerwin Koning Discovery",rep:"Niels",date:"2026-07-23",dur:"6m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:2,CH:2,NS:3,score:2.7,outcome:"follow_up_agreed",well:"Good intro. Accounting context confirmed.",wrong:"Too short for full qualification. Access to decision moment not explored."},
  {title:"Odoo Experts - Erwin",rep:"Niels",date:"2026-07-28",dur:"19m",path:"pm_direct",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:2,score:2.0,outcome:"no_next_step",well:"ERP integration angle relevant.",wrong:"Score 2/5 — qualification incomplete. No clear next step."},
  {title:"BePe Hamburg",rep:"Jara",date:"2026-07-21",dur:"13m",path:"pm_direct",RAP:1,R:1,CB:1,ADM:1,CH:1,NS:1,score:1.0,outcome:"no_next_step",well:"Contact present.",wrong:"No prior context. No qualification. No access to decision moment. No next step."},
];

/* ══ DEMO — new criteria: TLR·REF·COM·OBJ·ENG·NS ══
   TLR=DemoRelevanceTailoring(w3) REF=ReferralMomentClarity(w3)
   COM=CommercialPartnershipModel(w2) OBJ=ObjectionConcernHandling(w2,null=N/A)
   ENG=PartnerEngagementReaction(w2) NS=NextStepActivation(w3) */
const DEMO = [
  {title:"FinAdvice Partner Demo",rep:"Alex",date:"2026-07-21",dur:"50m",TLR:4,REF:4,COM:4,OBJ:null,ENG:4,NS:4,score:4.0,outcome:"follow_up_agreed",well:"Tailored to Akos's client base. Referral moment discussed. Commercial covered. Strong engagement.",wrong:"Next step could have been a specific client intro, not just a follow-up call."},
  {title:"Ali Nada GBC - Demo",rep:"Aurel",date:"2026-07-23",dur:"51m",TLR:4,REF:4,COM:4,OBJ:3,ENG:4,NS:3,score:3.8,outcome:"follow_up_agreed",well:"Well tailored to consulting clients. Referral moment coached. Commercial covered.",wrong:"Next step soft — no specific client identified. Objection partially resolved."},
  {title:"Frank & Niels FYBE Demo",rep:"Niels",date:"2026-07-21",dur:"33m",TLR:4,REF:3,COM:3,OBJ:null,ENG:4,NS:3,score:3.5,outcome:"follow_up_agreed",well:"Tailored to FYBE client base. Frank actively engaged. Self-approval setting shown live.",wrong:"Referral moment not fully coached. Next step vague — no specific client intro."},
  {title:"finQuesto Demo",rep:"Niels",date:"2026-07-24",dur:"65m",TLR:4,REF:4,COM:3,OBJ:null,ENG:4,NS:4,score:3.9,outcome:"follow_up_agreed",well:"Thorough demo. All product areas covered for finQuesto client base. Partner engaged.",wrong:"Commercial model not fully proactive — answered questions but didn't lead."},
  {title:"Steuerwehr.at Demo",rep:"Aurel",date:"2026-07-21",dur:"53m",TLR:3,REF:3,COM:3,OBJ:null,ENG:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Long demo. Good product coverage.",wrong:"Tailoring surface-level. Referral moment not coached. Next step vague."},
  {title:"Pape & Co Advisor Portal",rep:"Nicola",date:"2026-07-28",dur:"75m",TLR:3,REF:3,COM:3,OBJ:3,ENG:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Product areas relevant. Partner engaged. Concerns addressed.",wrong:"Referral moment not explicitly coached. Long but next step soft."},
  {title:"Martijn FYBE Demo",rep:"Niels",date:"2026-07-23",dur:"19m",TLR:3,REF:3,COM:3,OBJ:null,ENG:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Good intro demo for new FYBE contact.",wrong:"Short. Referral moment not coached. Commercial not covered."},
  {title:"Happy Days MK Demo",rep:"Fred",date:"2026-07-24",dur:"45m",TLR:2,REF:2,COM:2,OBJ:null,ENG:2,NS:2,score:2.0,outcome:"no_next_step",well:"Long call. Multiple product areas shown.",wrong:"Not tailored. Referral moment not discussed. No commercial. No next step."},
];

/* ══ MANAGEMENT — sub-typed ══
   subtype: "checkin" | "pipeline_review" | "product_enablement" | "qbr"
   
   CHECK-IN criteria: WRM·HLT·REF·NS
   WRM=RelationshipWarmth(w2) HLT=PartnerHealthCheck(w2) REF=ReferralSignal(w3) NS=NextStep(w3)
   
   PIPELINE REVIEW criteria: REFS·BLK·STALE·NEWREF·NS
   REFS=AllReferralsReviewed(w3) BLK=BlockersActioned(w3) STALE=StaleAddressed(w2) NEWREF=NewOpportunity(w2) NS=NextStep(w3)
   
   PRODUCT ENABLEMENT criteria: GAP·PRD·UND·RMC·NS
   GAP=KnowledgeGapConfirmed(w2) PRD=CorrectProductAreas(w3) UND=UnderstandingConfirmed(w3) RMC=ReferralMomentConnected(w2) NS=NextStep(w2)
   
   QBR criteria: PERF·WG·PLAN·COM·NS
   PERF=PerformanceVsTarget(w3) WG=WinsGaps(w2) PLAN=NextQuarterPlan(w3) COM=CommercialCommitment(w2) NS=NextStep(w3) */

const MANAGEMENT = [
  /* ── Check-ins ── */
  {title:"RSM Q&A",rep:"Fred",date:"2026-07-23",dur:"28m",subtype:"checkin",WRM:4,HLT:4,REF:4,NS:4,score:4.0,outcome:"follow_up_agreed",well:"Clear purpose. RSM team engaged. Questions well handled. Next meeting agreed.",wrong:"Nothing significant."},
  {title:"Jonathan Carling",rep:"Ezer",date:"2026-07-28",dur:"9m",subtype:"checkin",WRM:4,HLT:4,REF:4,NS:4,score:4.0,outcome:"follow_up_agreed",well:"Strong check-in with clear purpose. Referral signal surfaced. Specific next step.",wrong:"Nothing significant."},
  {title:"Wim Boer",rep:"Niels",date:"2026-07-28",dur:"5m",subtype:"checkin",WRM:4,HLT:3,REF:4,NS:3,score:3.5,outcome:"follow_up_agreed",well:"Competitive intel surfaced. Referral signal present. Good warmth.",wrong:"Next step vague — no date."},
  {title:"Fabian van der Schee",rep:"Niels",date:"2026-07-28",dur:"6m",subtype:"checkin",WRM:3,HLT:3,REF:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Competitive intel. Check-in completed.",wrong:"No referral signal. Next step soft."},
  {title:"Liam Brandon",rep:"Niels",date:"2026-07-23",dur:"3m",subtype:"checkin",WRM:4,HLT:3,REF:3,NS:3,score:3.3,outcome:"follow_up_agreed",well:"Warm call. Good rapport. Follow-up agreed.",wrong:"Short. Referral signal not probed."},
  {title:"Rödl & Partner Monthly",rep:"Nicola",date:"2026-07-24",dur:"15m",subtype:"checkin",WRM:3,HLT:3,REF:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Monthly cadence maintained. Bug flagged and acknowledged.",wrong:"No referral signal surfaced. Next step is next monthly — no specific action."},
  {title:"Gerko Geertsema",rep:"Niels",date:"2026-07-27",dur:"4m",subtype:"checkin",WRM:3,HLT:2,REF:3,NS:3,score:2.8,outcome:"follow_up_agreed",well:"Procurement use case mentioned. Follow-up agreed.",wrong:"Health check minimal. Referral not probed."},
  {title:"Leandro Binder",rep:"Aurel",date:"2026-07-24",dur:"6m",subtype:"checkin",WRM:3,HLT:3,REF:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Good check-in. Cards area confirmed.",wrong:"No referral signal surfaced."},
  {title:"Kathrin Schulz",rep:"Jara",date:"2026-07-24",dur:"16m",subtype:"product_enablement",WRM:null,HLT:null,REF:null,NS:null,GAP:3,PRD:3,UND:3,RMC:3,NS2:3,score:3.0,outcome:"follow_up_agreed",well:"Product areas relevant to Kathrin's clients. Follow-up agreed.",wrong:"Knowledge gap not confirmed before starting. Referral moment not explicitly coached."},
  {title:"Royal Holloway x Moss",rep:"Jara",date:"2026-07-24",dur:"27m",subtype:"checkin",WRM:4,HLT:4,REF:3,NS:4,score:3.8,outcome:"follow_up_agreed",well:"Strong check-in. Commercial terms discussed. Multiple stakeholders present. Clear next step.",wrong:"Referral signal not explicitly probed."},
  {title:"Nael Jazeh",rep:"Deniz",date:"2026-07-28",dur:"6m",subtype:"checkin",WRM:3,HLT:2,REF:3,NS:3,score:2.8,outcome:"follow_up_agreed",well:"Cards area confirmed. Check-in completed.",wrong:"Health check minimal. No referral signal."},
  {title:"Ralf Meisel",rep:"Deniz",date:"2026-07-28",dur:"2m",subtype:"checkin",WRM:3,HLT:2,REF:2,NS:2,score:2.3,outcome:"follow_up_agreed",well:"Contact made.",wrong:"Very short. No health check. No referral signal."},
  {title:"Daniel Geiss",rep:"Deniz",date:"2026-07-28",dur:"4m",subtype:"checkin",WRM:3,HLT:3,REF:2,NS:3,score:2.8,outcome:"follow_up_agreed",well:"Good intro. Follow-up agreed.",wrong:"No referral signal probed."},
  {title:"Petra Radosztics",rep:"Deniz",date:"2026-07-28",dur:"3m",subtype:"checkin",WRM:3,HLT:2,REF:2,NS:2,score:2.3,outcome:"follow_up_agreed",well:"Contact made after multiple attempts.",wrong:"Short. No health check depth. No referral signal."},
  {title:"Aurel BT Consulting",rep:"Aurel",date:"2026-07-22",dur:"24m",subtype:"checkin",WRM:2,HLT:2,REF:2,NS:2,score:2.0,outcome:"no_next_step",well:"Pilot customer concept agreed in principle.",wrong:"No purpose. No specific next step. Ended with vague expectation of future updates."},
  {title:"Wencke Mazars",rep:"Niels",date:"2026-07-22",dur:"16m",subtype:"checkin",WRM:2,HLT:2,REF:2,NS:2,score:2.0,outcome:"no_next_step",well:"Existing relationship maintained.",wrong:"No clear purpose. No referral signal. No next step."},
  {title:"Yori May",rep:"Niels",date:"2026-07-22",dur:"11m",subtype:"checkin",WRM:2,HLT:2,REF:2,NS:2,score:2.0,outcome:"no_next_step",well:"Contact maintained.",wrong:"No purpose stated. No referral signal. No next step."},
  {title:"Ted Jansen",rep:"Niels",date:"2026-07-21",dur:"4m",subtype:"checkin",WRM:2,HLT:2,REF:2,NS:2,score:2.0,outcome:"no_next_step",well:"Brief contact.",wrong:"Too short. No purpose. No next step."},
  {title:"awicontax Viktor",rep:"Nicola",date:"2026-07-28",dur:"3m",subtype:"checkin",WRM:1,HLT:1,REF:1,NS:1,score:1.0,outcome:"no_next_step",well:"Contact made.",wrong:"2.6 min. No purpose. No health check. No referral signal. No next step."},
  {title:"Mastercard Bi-weekly",rep:"Jara",date:"2026-07-21",dur:"34m",subtype:"checkin",WRM:1,HLT:1,REF:1,NS:1,score:1.0,outcome:"no_next_step",well:"Attendees present.",wrong:"No purpose for this specific call. No referral signal. No next step."},
  {title:"Rob Droppers",rep:"Niels",date:"2026-07-22",dur:"5m",subtype:"checkin",WRM:1,HLT:1,REF:1,NS:1,score:1.0,outcome:"no_next_step",well:"Warm contact.",wrong:"Preparation gap — contact details wrong. No clear purpose. No next step."},
  {title:"Dr Manthey",rep:"Aurel",date:"2026-07-21",dur:"6m",subtype:"checkin",WRM:1,HLT:1,REF:1,NS:1,score:1.0,outcome:"no_next_step",well:"Contact made.",wrong:"No purpose. No health check. No next step."},
  {title:"Henk Dijkhuizen",rep:"Niels",date:"2026-07-21",dur:"13m",subtype:"checkin",WRM:2,HLT:2,REF:2,NS:2,score:2.0,outcome:"no_next_step",well:"Accounting integrations context.",wrong:"No purpose. No referral signal. No next step."},
  {title:"Julie Christiani",rep:"Deniz",date:"2026-07-22",dur:"3m",subtype:"checkin",WRM:1,HLT:1,REF:1,NS:1,score:1.0,outcome:"no_next_step",well:"Contact made.",wrong:"No purpose. No health check. No next step."},
  /* ── Pipeline Reviews ── */
  {title:"Mathijs Bakker Pipeline",rep:"Niels",date:"2026-07-27",dur:"10m",subtype:"pipeline_review",REFS:4,BLK:4,STALE:3,NEWREF:4,NS:4,score:3.8,outcome:"follow_up_agreed",well:"Referrals reviewed by name. Blockers actioned. New opportunity surfaced. Clear next step.",wrong:"Stale referrals not fully addressed proactively — reactive rather than proactive."},
  /* ── Product Enablement ── */
  {title:"Kees FYBE Enablement",rep:"Niels",date:"2026-07-27",dur:"74m",subtype:"product_enablement",GAP:4,PRD:4,UND:4,RMC:4,NS2:4,score:4.0,outcome:"follow_up_agreed",well:"74 min. All product areas covered for FYBE client base. Understanding confirmed. Referral moment connected.",wrong:"Nothing significant. Thorough session."},
  {title:"Peter FYBE Enablement",rep:"Niels",date:"2026-07-28",dur:"26m",subtype:"product_enablement",GAP:3,PRD:4,UND:3,RMC:3,NS2:4,score:3.4,outcome:"follow_up_agreed",well:"Product areas relevant. Next step specific.",wrong:"Knowledge gap not confirmed upfront. Understanding check surface-level."},
  {title:"Mick Billy Grace",rep:"Niels",date:"2026-07-24",dur:"22m",subtype:"product_enablement",GAP:3,PRD:3,UND:3,RMC:3,NS2:3,score:3.0,outcome:"follow_up_agreed",well:"Product context maintained for Billy Grace.",wrong:"Generic elements. Referral moment not explicitly coached."},
  {title:"Poool x Moss",rep:"Jara",date:"2026-07-28",dur:"25m",subtype:"product_enablement",GAP:3,PRD:3,UND:3,RMC:3,NS2:3,score:3.0,outcome:"follow_up_agreed",well:"Cards and ERP use cases relevant. Bug surfaced and acknowledged.",wrong:"Knowledge gap not confirmed. Referral moment not connected."},
  /* ── Check-ins continued ── */
  {title:"GreenStones Continued",rep:"Jara",date:"2026-07-21",dur:"22m",subtype:"checkin",WRM:2,HLT:2,REF:2,NS:2,score:2.0,outcome:"no_next_step",well:"Existing relationship. Product feedback captured.",wrong:"No clear purpose. Bugs discussed but no referral signal or next step."},
  {title:"Catalyst x Moss",rep:"Jara",date:"2026-07-21",dur:"30m",subtype:"checkin",WRM:3,HLT:3,REF:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Commercial model discussed. Internal advocates identified.",wrong:"Next step not fully locked. Commercial decision deferred."},
  {title:"Billy Grace Next Steps",rep:"Niels",date:"2026-07-21",dur:"24m",subtype:"checkin",WRM:2,HLT:2,REF:2,NS:2,score:2.0,outcome:"no_next_step",well:"Relationship maintained.",wrong:"No purpose. No referral signal. No next step."},
  {title:"Pape & Co Monthly",rep:"Nicola",date:"2026-07-21",dur:"24m",subtype:"checkin",WRM:2,HLT:2,REF:2,NS:2,score:2.0,outcome:"no_next_step",well:"Monthly cadence maintained. Product feedback.",wrong:"No referral signal. No specific next step."},
  {title:"Sebastian Haidn",rep:"Deniz",date:"2026-07-28",dur:"10m",subtype:"checkin",WRM:3,HLT:2,REF:2,NS:2,score:2.3,outcome:"follow_up_agreed",well:"Contact made.",wrong:"Gatekeeper dynamic. No referral signal. No specific next step."},
  {title:"Dirk Seeger",rep:"Deniz",date:"2026-07-28",dur:"3m",subtype:"checkin",WRM:2,HLT:1,REF:1,NS:1,score:1.3,outcome:"no_next_step",well:"Contact attempted.",wrong:"Gatekeeper. No meaningful conversation."},
];

/* ══ PIPELINE ══ */
const PIPELINE = {
  funnel: {
    DE: { sourced: 12, discovery: 6, demo: 4 },
    GB: { sourced: 18, discovery: 5, demo: 3 },
    NL: { sourced: 10, discovery: 7, demo: 4 },
    AT: { sourced: 4,  discovery: 2, demo: 2 },
  },
  q3_targets: {
    DE: { sqls: 18, arr: 45000 },
    GB: { sqls: 12, arr: 30000 },
    NL: { sqls: 15, arr: 38000 },
    AT: { sqls: 8,  arr: 20000 },
  }
};
