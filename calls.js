/* ══════════════════════════════════════════════════
   PARTNERSHIPS CALL ANALYSIS — Q3 2026
   Team: Jara · Nicola · Ezer · Aurel · Alex · Markus · Niels · Fred · Mees · Deniz
   Updated: Aug 03, 2026 — Full range May 15–Jul 31 (historical + Q3)
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
  // ── Week 2: Jul 28 ──
  { week:"Jul 28", rep:"Jara",   Sourcing:null, Discovery:3.5, Demo:3.0, Checkin:3.2, PipelineReview:3.0, ProductEnablement:3.5, QBR:null },
  { week:"Jul 28", rep:"Nicola", Sourcing:3.0,  Discovery:null, Demo:3.0, Checkin:2.0, PipelineReview:4.0, ProductEnablement:4.0, QBR:null },
  { week:"Jul 28", rep:"Ezer",   Sourcing:2.2,  Discovery:null, Demo:null, Checkin:4.0, PipelineReview:null, ProductEnablement:null, QBR:null },
  { week:"Jul 28", rep:"Aurel",  Sourcing:2.7,  Discovery:3.5, Demo:3.0, Checkin:null, PipelineReview:null, ProductEnablement:null, QBR:null },
  { week:"Jul 28", rep:"Alex",   Sourcing:1.3,  Discovery:3.5, Demo:3.0, Checkin:null, PipelineReview:null, ProductEnablement:null, QBR:null },
  { week:"Jul 28", rep:"Niels",  Sourcing:2.0,  Discovery:2.0, Demo:null, Checkin:3.3, PipelineReview:3.0, ProductEnablement:3.7, QBR:null },
  { week:"Jul 28", rep:"Fred",   Sourcing:1.5,  Discovery:null, Demo:null, Checkin:null, PipelineReview:null, ProductEnablement:4.0, QBR:null },
  { week:"Jul 28", rep:"Deniz",  Sourcing:2.0,  Discovery:null, Demo:null, Checkin:3.0, PipelineReview:null, ProductEnablement:null, QBR:null },
  { week:"Jul 28", rep:"Mees",   Sourcing:null, Discovery:null, Demo:null, Checkin:null, PipelineReview:null, ProductEnablement:null, QBR:null },
  { week:"Jul 28", rep:"Markus", Sourcing:null, Discovery:null, Demo:null, Checkin:null, PipelineReview:null, ProductEnablement:null, QBR:null },
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
  // ── Week 2: Jul 28 ──
  {title:"Inez Buitenwerf",rep:"Niels",date:"2026-07-30",dur:"5m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:2,HO:null,score:2.0,outcome:"follow_up_agreed",well:"Accountant contact reached.",wrong:"Short. No qualification depth. No meeting booked."},
  {title:"Katinka den Braber",rep:"Niels",date:"2026-07-30",dur:"3m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:1,HO:null,score:2.0,outcome:"no_next_step",well:"Contact made.",wrong:"Too short. No qualification. No next step."},
  {title:"Martin Gugel",rep:"Nicola",date:"2026-07-30",dur:"5m",O:3,R:3,Q:2,VP:3,OBJ:null,MTG:3,HO:null,score:2.8,outcome:"follow_up_agreed",well:"Accounting contact. Relevant hook. Follow-up agreed.",wrong:"No client base confirmation. No date locked."},
  {title:"Joep van der Vliet",rep:"Niels",date:"2026-07-29",dur:"3m",O:3,R:3,Q:2,VP:3,OBJ:null,MTG:2,HO:null,score:2.6,outcome:"follow_up_agreed",well:"Contact made. Cards area confirmed.",wrong:"Short. No qualification. No date."},
  {title:"Joey Bont",rep:"Niels",date:"2026-07-29",dur:"3m",O:1,R:1,Q:1,VP:1,OBJ:null,MTG:1,HO:null,score:1.0,outcome:"no_next_step",well:"Contact attempted.",wrong:"No research. No qualification. No next step."},
  {title:"Dennis Hilgefort",rep:"Deniz",date:"2026-07-29",dur:"3m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:2,HO:null,score:2.0,outcome:"follow_up_agreed",well:"Contact made.",wrong:"Short. No qualification depth."},
  {title:"Ronan Shally",rep:"Alex",date:"2026-07-29",dur:"1m",O:1,R:1,Q:1,VP:1,OBJ:null,MTG:1,HO:null,score:1.0,outcome:"no_next_step",well:"Contact attempted.",wrong:"Under 1 min. No substance."},
  {title:"James Piper",rep:"Alex",date:"2026-07-29",dur:"1m",O:1,R:1,Q:1,VP:1,OBJ:null,MTG:1,HO:null,score:1.0,outcome:"no_next_step",well:"Contact attempted.",wrong:"Under 1 min. No substance."},
  {title:"Nipun Gupta",rep:"Alex",date:"2026-07-29",dur:"1m",O:2,R:1,Q:1,VP:2,OBJ:null,MTG:2,HO:null,score:1.6,outcome:"no_next_step",well:"Accounting contact reached.",wrong:"Gatekeeper. No qualification. No next step."},
  {title:"Frank Schmidt",rep:"Aurel",date:"2026-07-28",dur:"7m",O:3,R:3,Q:3,VP:3,OBJ:null,MTG:3,HO:null,score:3.0,outcome:"follow_up_agreed",well:"Relevant contact. Partnership relevance confirmed.",wrong:"No specific date."},
  {title:"Martin Huber",rep:"Aurel",date:"2026-07-28",dur:"2m",O:3,R:2,Q:2,VP:2,OBJ:null,MTG:2,HO:null,score:2.4,outcome:"callback_agreed",well:"Contact made.",wrong:"Too short. Gatekeeper dynamic."},
  {title:"Christian Neidl",rep:"Aurel",date:"2026-07-28",dur:"4m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:2,HO:null,score:2.0,outcome:"no_next_step",well:"Accounting contact.",wrong:"Gatekeeper. No qualification. No next step."},
  {title:"Cerith Williams",rep:"Ezer",date:"2026-07-28",dur:"4m",O:2,R:1,Q:1,VP:2,OBJ:null,MTG:1,HO:null,score:1.5,outcome:"no_next_step",well:"Contact made.",wrong:"No research. No qualification. No next step."},
  {title:"Jonathan Carr ACA",rep:"Ezer",date:"2026-07-28",dur:"2m",O:2,R:2,Q:1,VP:2,OBJ:null,MTG:1,HO:null,score:1.6,outcome:"no_next_step",well:"ACA contact.",wrong:"Gatekeeper. No next step."},
  {title:"Lisa Colwill (W2)",rep:"Ezer",date:"2026-07-29",dur:"2m",O:2,R:1,Q:1,VP:2,OBJ:null,MTG:1,HO:null,score:1.4,outcome:"no_next_step",well:"Contact made.",wrong:"No research. No qualification. No next step."},
  {title:"Jean Freeman",rep:"Alex",date:"2026-07-28",dur:"1m",O:1,R:1,Q:1,VP:1,OBJ:null,MTG:1,HO:null,score:1.0,outcome:"no_next_step",well:"Contact attempted.",wrong:"1 min. No substance."},
  {title:"Paul Norris",rep:"Alex",date:"2026-07-28",dur:"1m",O:2,R:1,Q:1,VP:1,OBJ:null,MTG:2,HO:null,score:1.4,outcome:"no_next_step",well:"Accounting firm reached.",wrong:"Gatekeeper. No conversation."},
  {title:"Chris Callow",rep:"Alex",date:"2026-07-28",dur:"1m",O:1,R:1,Q:1,VP:1,OBJ:null,MTG:1,HO:null,score:1.0,outcome:"no_next_step",well:"Contact attempted.",wrong:"1 min. No substance."},
  {title:"Fred Sourcing A",rep:"Fred",date:"2026-07-28",dur:"5m",O:3,R:3,Q:2,VP:3,OBJ:null,MTG:3,HO:null,score:2.8,outcome:"follow_up_agreed",well:"Cards area confirmed. Follow-up agreed.",wrong:"No specific date. No qualification depth."},
  {title:"James Ripley",rep:"Fred",date:"2026-07-28",dur:"2m",O:1,R:1,Q:1,VP:1,OBJ:null,MTG:1,HO:null,score:1.0,outcome:"no_next_step",well:"Contact attempted.",wrong:"Gatekeeper. No substance."},
  {title:"Charles Adams",rep:"Fred",date:"2026-07-28",dur:"2m",O:1,R:1,Q:1,VP:1,OBJ:null,MTG:1,HO:null,score:1.0,outcome:"no_next_step",well:"Contact attempted.",wrong:"Gatekeeper. No substance."},
  {title:"Hannah Roome (W2)",rep:"Fred",date:"2026-07-28",dur:"1m",O:1,R:1,Q:1,VP:1,OBJ:null,MTG:1,HO:null,score:1.0,outcome:"no_next_step",well:"Contact attempted.",wrong:"1 min. No substance."},
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
  // ── Week 2: Jul 28 ──
  {title:"Fabian Gewald Discovery",rep:"Aurel",date:"2026-07-29",dur:"40m",path:"pm_direct",RAP:4,R:4,CB:4,ADM:4,CH:4,NS:4,score:4.0,outcome:"demo_booked",well:"Strong qualification. ADM confirmed with specific example. Priscilla as champion identified. Demo booked.",wrong:"Nothing significant."},
  {title:"AHW Digital W2",rep:"Jara",date:"2026-07-28",dur:"31m",path:"pm_direct",RAP:4,R:4,CB:4,ADM:3,CH:3,NS:3,score:3.5,outcome:"follow_up_agreed",well:"Good qualification. Product feedback surfaced. Multiple areas explored.",wrong:"ADM stated but not validated with specific example."},
  {title:"Tech Enable W2",rep:"Alex",date:"2026-07-28",dur:"25m",path:"pm_direct",RAP:4,R:4,CB:4,ADM:4,CH:3,NS:3,score:3.8,outcome:"follow_up_agreed",well:"Strong second discovery. Integration use case deepened. Prior context referenced.",wrong:"Champion not fully confirmed. Next step exploratory rather than demo."},
  {title:"NAS Conception",rep:"Aurel",date:"2026-07-29",dur:"27m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Tax advisory firm with SMB clients. Cards/reimbursements relevant. Follow-up agreed.",wrong:"ADM not validated with example. Champion not identified."},
  {title:"Finban x Moss",rep:"Jara",date:"2026-07-30",dur:"20m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Good rapport. Product feedback surfaced. Competitive intel gathered.",wrong:"ADM claimed but not validated. No demo booked."},
  {title:"Mike Wong",rep:"Alex",date:"2026-07-31",dur:"22m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"AI + intelligence angle explored. Multiple product areas relevant.",wrong:"ADM not probed with example. Champion not confirmed."},
  {title:"Odoo Experts W2",rep:"Niels",date:"2026-07-28",dur:"19m",path:"pm_direct",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:2,score:2.0,outcome:"no_next_step",well:"ERP integration angle relevant.",wrong:"Qualification incomplete. ADM not explored. No clear next step."},
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
  // ── Week 2: Jul 28 ──
  {title:"Blubooks Demo",rep:"Alex",date:"2026-07-30",dur:"33m",TLR:3,REF:3,COM:3,OBJ:null,ENG:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Product areas covered for bookkeeping clients. Engagement decent.",wrong:"Referral moment not explicitly coached. Commercial not proactively raised."},
  {title:"Benedikt Ebert BDU",rep:"Aurel",date:"2026-07-30",dur:"45m",TLR:3,REF:3,COM:3,OBJ:null,ENG:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Long session. Product areas relevant to consulting clients.",wrong:"Tailoring surface-level. Referral moment not coached."},
  {title:"Catalyst Demo",rep:"Jara",date:"2026-07-29",dur:"47m",TLR:3,REF:3,COM:3,OBJ:3,ENG:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Concerns addressed. Product areas covered. ERP integration angle explored.",wrong:"Referral moment not coached. Next step soft."},
  {title:"Pape & Co Demo W2",rep:"Nicola",date:"2026-07-28",dur:"75m",TLR:3,REF:3,COM:3,OBJ:3,ENG:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Long structured demo. Advisor portal angle. Partner engaged.",wrong:"Referral moment not explicitly coached. Next step vague."},
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
  // ── Week 2: Jul 28 ──
  {title:"Greyt & Moss - Bert",rep:"Niels",date:"2026-07-31",dur:"33m",subtype:"product_enablement",GAP:5,PRD:5,UND:5,RMC:5,NS2:5,score:5.0,outcome:"follow_up_agreed",well:"Exceptional 33-min enablement. All product areas covered. Understanding confirmed. Referral moment explicitly coached. Specific next step.",wrong:"Nothing significant."},
  {title:"Praevo Partners",rep:"Fred",date:"2026-07-31",dur:"54m",subtype:"product_enablement",GAP:4,PRD:4,UND:4,RMC:4,NS2:4,score:4.0,outcome:"follow_up_agreed",well:"Thorough 54-min enablement. Product areas well covered. Understanding confirmed. Ezer present as well.",wrong:"Knowledge gap not fully confirmed upfront."},
  {title:"4PointZero Enablement",rep:"Jara",date:"2026-07-29",dur:"35m",subtype:"product_enablement",GAP:4,PRD:4,UND:4,RMC:4,NS2:4,score:4.0,outcome:"follow_up_agreed",well:"All product areas covered. Referral moment connected. Competitive intel gathered.",wrong:"Knowledge gap not explicitly confirmed before starting."},
  {title:"Büsra Ecovis",rep:"Nicola",date:"2026-07-29",dur:"14m",subtype:"product_enablement",GAP:4,PRD:4,UND:4,RMC:4,NS2:4,score:4.0,outcome:"follow_up_agreed",well:"Accounting integrations relevant to Ecovis. Understanding confirmed. Specific next step.",wrong:"Nothing significant."},
  {title:"Peter FYBE W2",rep:"Niels",date:"2026-07-28",dur:"26m",subtype:"product_enablement",GAP:3,PRD:4,UND:3,RMC:4,NS2:4,score:3.8,outcome:"follow_up_agreed",well:"Product areas relevant. Referral moment connected. Specific next step.",wrong:"Knowledge gap not confirmed upfront."},
  {title:"Moore TK Pipeline",rep:"Nicola",date:"2026-07-30",dur:"28m",subtype:"pipeline_review",REFS:4,BLK:4,STALE:3,NEWREF:4,NS:4,score:3.8,outcome:"follow_up_agreed",well:"Referrals reviewed by name. Blockers actioned. New opportunity surfaced. Clear next step.",wrong:"Stale referrals reactive rather than proactive."},
  {title:"NA Media Pipeline",rep:"Jara",date:"2026-07-31",dur:"10m",subtype:"pipeline_review",REFS:3,BLK:3,STALE:3,NEWREF:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Pipeline reviewed. Follow-up agreed.",wrong:"Short. Not all referrals reviewed systematically."},
  {title:"Dave YourFirst Pipeline",rep:"Niels",date:"2026-07-30",dur:"17m",subtype:"pipeline_review",REFS:3,BLK:3,STALE:3,NEWREF:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Pipeline covered. Referrals discussed.",wrong:"Not fully systematic. Stale referrals not proactively raised."},
  {title:"Anneleen VAR",rep:"Niels",date:"2026-07-30",dur:"13m",subtype:"checkin",WRM:4,HLT:4,REF:4,NS:4,score:4.0,outcome:"follow_up_agreed",well:"Clear purpose. Partner health surfaced. Referral signal present. Specific next step.",wrong:"Nothing significant."},
  {title:"Johan van Rest",rep:"Niels",date:"2026-07-30",dur:"7m",subtype:"checkin",WRM:4,HLT:4,REF:4,NS:4,score:4.0,outcome:"follow_up_agreed",well:"Warm call. Referral signal surfaced. Next step agreed.",wrong:"Nothing significant."},
  {title:"Daan Krosse",rep:"Niels",date:"2026-07-30",dur:"4m",subtype:"checkin",WRM:4,HLT:3,REF:4,NS:4,score:3.8,outcome:"follow_up_agreed",well:"Short but purposeful. Cards area confirmed. Referral signal. Next step.",wrong:"Health check brief."},
  {title:"Ted Embora",rep:"Niels",date:"2026-07-29",dur:"11m",subtype:"checkin",WRM:4,HLT:3,REF:4,NS:4,score:3.8,outcome:"follow_up_agreed",well:"Purpose clear. Referral signal — Embora client in scope. Specific next step.",wrong:"Health check brief."},
  {title:"Sabine Sommerfeldt",rep:"Deniz",date:"2026-07-30",dur:"8m",subtype:"checkin",WRM:4,HLT:4,REF:4,NS:4,score:4.0,outcome:"follow_up_agreed",well:"Clear purpose. Partner health probed. Referral signal surfaced. Specific next step.",wrong:"Nothing significant."},
  {title:"Poool Next Steps",rep:"Jara",date:"2026-07-31",dur:"15m",subtype:"product_enablement",GAP:3,PRD:3,UND:3,RMC:3,NS2:3,score:3.0,outcome:"follow_up_agreed",well:"ERP use case covered. Product feedback gathered.",wrong:"Knowledge gap not confirmed. Referral moment not connected."},
  {title:"Lars Nijkerk",rep:"Niels",date:"2026-07-29",dur:"5m",subtype:"checkin",WRM:3,HLT:3,REF:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Competitive intel surfaced. Check-in completed.",wrong:"No referral signal. Next step soft."},
  {title:"Bert van der Meer",rep:"Niels",date:"2026-07-29",dur:"1m",subtype:"checkin",WRM:3,HLT:2,REF:2,NS:2,score:2.5,outcome:"no_next_step",well:"Brief contact made.",wrong:"Too short. No referral signal. No next step."},
  {title:"Wim Boer W2",rep:"Niels",date:"2026-07-28",dur:"5m",subtype:"checkin",WRM:4,HLT:3,REF:3,NS:3,score:3.3,outcome:"follow_up_agreed",well:"Competitive intel. Referral signal present. Follow-up agreed.",wrong:"Next step vague — no date."},
  {title:"Fabian van der Schee W2",rep:"Niels",date:"2026-07-28",dur:"6m",subtype:"checkin",WRM:3,HLT:3,REF:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Check-in completed. Cards context confirmed.",wrong:"No referral signal. Next step soft."},
  {title:"Dirk finQuesto W2",rep:"Niels",date:"2026-07-28",dur:"17m",subtype:"checkin",WRM:3,HLT:3,REF:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Competitive intel gathered. Product feedback. Check-in completed.",wrong:"Referral signal not probed. Next step not specific."},
  {title:"awicontax Viktor W2",rep:"Nicola",date:"2026-07-28",dur:"3m",subtype:"checkin",WRM:2,HLT:1,REF:1,NS:1,score:2.0,outcome:"no_next_step",well:"Contact made.",wrong:"No purpose again. No health check. No referral signal. No next step. Second consecutive week."},
  {title:"Jan Niemeyer W2",rep:"Deniz",date:"2026-07-29",dur:"5m",subtype:"checkin",WRM:3,HLT:3,REF:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Cards context confirmed. Check-in completed.",wrong:"No referral signal. Next step soft."},
  {title:"Nael Jazeh W2",rep:"Deniz",date:"2026-07-28",dur:"6m",subtype:"checkin",WRM:3,HLT:3,REF:3,NS:3,score:3.0,outcome:"follow_up_agreed",well:"Cards area confirmed. Follow-up agreed.",wrong:"Health check minimal. No referral signal."},
  {title:"Ralf Meisel W2",rep:"Deniz",date:"2026-07-28",dur:"2m",subtype:"checkin",WRM:3,HLT:2,REF:2,NS:2,score:2.5,outcome:"follow_up_agreed",well:"Contact maintained.",wrong:"Very short. No health check depth. No referral signal."},
  {title:"Daniel Geiss W2",rep:"Deniz",date:"2026-07-28",dur:"4m",subtype:"checkin",WRM:3,HLT:3,REF:2,NS:3,score:2.8,outcome:"follow_up_agreed",well:"Good intro. Follow-up agreed.",wrong:"No referral signal probed."},
  {title:"Petra Radosztics W2",rep:"Deniz",date:"2026-07-28",dur:"3m",subtype:"checkin",WRM:3,HLT:2,REF:2,NS:2,score:2.3,outcome:"follow_up_agreed",well:"Contact made.",wrong:"Short. No health check depth. No referral signal."},
  {title:"Sebastian Haidn W2",rep:"Deniz",date:"2026-07-28",dur:"10m",subtype:"checkin",WRM:3,HLT:2,REF:2,NS:2,score:2.5,outcome:"follow_up_agreed",well:"Contact maintained.",wrong:"Gatekeeper dynamic. No referral signal."},
  {title:"Dirk Seeger W2",rep:"Deniz",date:"2026-07-28",dur:"3m",subtype:"checkin",WRM:2,HLT:1,REF:1,NS:1,score:2.0,outcome:"no_next_step",well:"Contact attempted.",wrong:"Gatekeeper. No substance."},
  {title:"Darron Enablement",rep:"Niels",date:"2026-07-29",dur:"5m",subtype:"product_enablement",GAP:3,PRD:3,UND:3,RMC:3,NS2:3,score:3.0,outcome:"follow_up_agreed",well:"Cards area relevant. Check-in completed.",wrong:"Short. Referral moment not coached."},
  {title:"Joeri van Zijp",rep:"Niels",date:"2026-07-29",dur:"5m",subtype:"product_enablement",GAP:3,PRD:3,UND:3,RMC:3,NS2:3,score:3.0,outcome:"follow_up_agreed",well:"Cards area relevant.",wrong:"Short. Knowledge gap not confirmed. Referral moment not coached."},
];

/* ══ PIPELINE ══ */
/* ══ HISTORICAL — May 15 to Jul 20 (rescored against new scorecards Aug 2026) ══
   Note: Management sub-types still processing in Attention (~2h). Will be updated.
   Pages 1-3 of 16 captured = ~63 scored calls. Full pull pending.
══════════════════════════════════════════════════════════════════════════ */
const HISTORICAL_SOURCING = [
  {title:"Kevin Hütter",rep:"Deniz",date:"2026-07-20",dur:"3m",O:1,R:1,Q:1,VP:1,OBJ:null,MTG:1,HO:null,score:1,outcome:"no_next_step",well:"Contact made.",wrong:"No research. No qualification. No next step."},
  {title:"Tim Dillenberger",rep:"Deniz",date:"2026-07-20",dur:"1m",O:1,R:1,Q:1,VP:1,OBJ:null,MTG:1,HO:null,score:1,outcome:"no_next_step",well:"Contact attempted.",wrong:"Under 1 min. No substance."},
  {title:"Thomas Bathon",rep:"Deniz",date:"2026-07-20",dur:"3m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:1,HO:null,score:2,outcome:"no_next_step",well:"Contact reached.",wrong:"Gatekeeper. No qualification."},
  {title:"Peter Toutenhoofd",rep:"Niels",date:"2026-07-20",dur:"2m",O:3,R:3,Q:3,VP:3,OBJ:null,MTG:3,HO:null,score:3,outcome:"follow_up_agreed",well:"Cards area confirmed. Follow-up agreed.",wrong:"Short. No date locked."},
  {title:"Charlie Shaw",rep:"Alex",date:"2026-07-20",dur:"4m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:2,HO:null,score:2,outcome:"follow_up_agreed",well:"Accounting firm contact.",wrong:"No qualification depth."},
  {title:"Pamela Duran",rep:"Ezer",date:"2026-07-17",dur:"5m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:2,HO:null,score:2,outcome:"follow_up_agreed",well:"Contact made.",wrong:"No qualification depth."},
  {title:"Mustafa Ersalan",rep:"Ezer",date:"2026-07-17",dur:"1m",O:2,R:1,Q:1,VP:2,OBJ:null,MTG:1,HO:null,score:2,outcome:"no_next_step",well:"Contact attempted.",wrong:"Voicemail. No substance."},
  {title:"Kamlesh Taili",rep:"Ezer",date:"2026-07-17",dur:"5m",O:3,R:3,Q:3,VP:3,OBJ:null,MTG:3,HO:null,score:3,outcome:"follow_up_agreed",well:"Accounting contact. Cards relevant.",wrong:"No date locked."},
  {title:"Ben n.a.",rep:"Ezer",date:"2026-07-17",dur:"1m",O:1,R:1,Q:1,VP:1,OBJ:null,MTG:1,HO:null,score:1,outcome:"no_next_step",well:"Contact attempted.",wrong:"Under 1 min."},
  {title:"Karen Garrattley",rep:"Ezer",date:"2026-07-17",dur:"9m",O:3,R:3,Q:3,VP:3,OBJ:null,MTG:3,HO:null,score:3,outcome:"follow_up_agreed",well:"Good qualification. Feature request surfaced.",wrong:"Gatekeeper element. No date."},
  {title:"Aly Dewji",rep:"Ezer",date:"2026-07-17",dur:"5m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:2,HO:null,score:2,outcome:"follow_up_agreed",well:"Accounting contact.",wrong:"No qualification depth."},
  {title:"Theo Kontos",rep:"Ezer",date:"2026-07-16",dur:"3m",O:4,R:4,Q:4,VP:4,OBJ:null,MTG:4,HO:null,score:4,outcome:"discovery_booked",well:"Strong prep. Relevant hook. Meeting booked.",wrong:"Nothing significant."},
  {title:"Andreas Baumann",rep:"Aurel",date:"2026-07-16",dur:"4m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:2,HO:null,score:2,outcome:"follow_up_agreed",well:"Contact reached.",wrong:"No qualification depth."},
  {title:"Yevgeniy Boyko",rep:"Ezer",date:"2026-07-16",dur:"2m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:2,HO:null,score:2,outcome:"follow_up_agreed",well:"ERP contact.",wrong:"Short. No qualification."},
  {title:"Aly Dewji W2",rep:"Ezer",date:"2026-07-16",dur:"1m",O:2,R:1,Q:1,VP:2,OBJ:null,MTG:1,HO:null,score:2,outcome:"no_next_step",well:"Contact attempted.",wrong:"Voicemail."},
  {title:"Tai Daly",rep:"Ezer",date:"2026-07-16",dur:"6m",O:3,R:3,Q:3,VP:3,OBJ:null,MTG:3,HO:null,score:3,outcome:"follow_up_agreed",well:"Accounting contact. Competitive intel.",wrong:"No date locked."},
  {title:"Paul Handscombe",rep:"Ezer",date:"2026-07-16",dur:"2m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:1,HO:null,score:2,outcome:"no_next_step",well:"Contact attempted.",wrong:"Voicemail."},
  {title:"Christian Schuller",rep:"Aurel",date:"2026-07-14",dur:"2m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:1,HO:null,score:2,outcome:"no_next_step",well:"Contact made.",wrong:"Gatekeeper."},
  {title:"Max Allgower",rep:"Aurel",date:"2026-07-14",dur:"2m",O:2,R:2,Q:2,VP:2,OBJ:null,MTG:1,HO:null,score:2,outcome:"no_next_step",well:"Contact made.",wrong:"Gatekeeper."},
  {title:"Reinier Mudde",rep:"Niels",date:"2026-07-07",dur:"8m",O:4,R:4,Q:4,VP:4,OBJ:null,MTG:4,HO:null,score:4,outcome:"discovery_booked",well:"Warm intro from Detmer. Strong prep. Meeting booked.",wrong:"Nothing significant."},
  {title:"Robin Wallaart",rep:"Niels",date:"2026-07-03",dur:"5m",O:3,R:3,Q:3,VP:3,OBJ:null,MTG:3,HO:null,score:3,outcome:"follow_up_agreed",well:"CFO services contact. Cards relevant. Follow-up booked.",wrong:"No date specific."},
  {title:"Ryan Wakeman",rep:"Ezer",date:"2026-07-03",dur:"2m",O:3,R:3,Q:3,VP:3,OBJ:null,MTG:3,HO:null,score:3,outcome:"follow_up_agreed",well:"ACMA contact. Relevant hook.",wrong:"Short."},
  {title:"Antoon Rakke",rep:"Niels",date:"2026-07-03",dur:"2m",O:3,R:3,Q:3,VP:3,OBJ:null,MTG:3,HO:null,score:3,outcome:"follow_up_agreed",well:"Accounting contact. Follow-up agreed.",wrong:"Short."},
];

const HISTORICAL_DISCOVERY = [
  {title:"Roeland van Luijk",rep:"Niels",date:"2026-07-20",dur:"6m",path:"pm_direct",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:1,score:2,outcome:"no_next_step",well:"Accounting integrations area.",wrong:"Short. No ADM. No next step."},
  {title:"Nathan Holmes",rep:"Ezer",date:"2026-07-20",dur:"12m",path:"pm_direct",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:1,score:2,outcome:"no_next_step",well:"Competitive intel surfaced.",wrong:"ADM not validated. No next step."},
  {title:"Akos Balogh pre",rep:"Ezer",date:"2026-07-20",dur:"6m",path:"pm_direct",RAP:1,R:1,CB:1,ADM:1,CH:1,NS:1,score:1,outcome:"no_next_step",well:"Contact present.",wrong:"No qualification. No next step."},
  {title:"Chriss Goodey",rep:"Ezer",date:"2026-07-20",dur:"16m",path:"pm_direct",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:2,score:2,outcome:"follow_up_agreed",well:"Multiple product areas explored. Competitive intel.",wrong:"ADM not validated with example."},
  {title:"Bytes Software",rep:"Ezer",date:"2026-07-17",dur:"24m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3,outcome:"follow_up_agreed",well:"ERP integration angle. Multiple stakeholders.",wrong:"Champion not confirmed."},
  {title:"FD Works",rep:"Jara",date:"2026-07-17",dur:"23m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3,outcome:"follow_up_agreed",well:"Multiple product areas. Competitive intel. Feature requests.",wrong:"ADM not validated with example."},
  {title:"Borgo IE",rep:"Jara",date:"2026-07-16",dur:"26m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3,outcome:"follow_up_agreed",well:"Multiple areas. Competitive intel surfaced.",wrong:"ADM not validated."},
  {title:"Nico Straub",rep:"Deniz",date:"2026-07-16",dur:"3m",path:"pm_direct",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:1,score:2,outcome:"no_next_step",well:"Cards/ERP area.",wrong:"Short. No ADM. No next step."},
  {title:"Frank de Vries FYBE",rep:"Niels",date:"2026-07-15",dur:"32m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3,outcome:"follow_up_agreed",well:"Strong qualification. Product feedback. Follow-up agreed.",wrong:"ADM not validated with specific example."},
  {title:"Akos Balogh FYBE",rep:"Ezer",date:"2026-07-15",dur:"21m",path:"pm_direct",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:2,score:2,outcome:"follow_up_agreed",well:"Contact made. Follow-up agreed.",wrong:"ADM not probed. Champion not confirmed."},
  {title:"Mark Van De Beek",rep:"Niels",date:"2026-07-14",dur:"6m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3,outcome:"follow_up_agreed",well:"Cards area confirmed. Product feedback.",wrong:"Short. No ADM example."},
  {title:"KPMG Austria",rep:"Aurel",date:"2026-07-14",dur:"33m",path:"pm_direct",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:2,score:2,outcome:"follow_up_agreed",well:"Big 4 accounting. Multiple areas explored.",wrong:"ADM not validated. No champion confirmed."},
  {title:"Mark Oudeavenhuis FYBE",rep:"Niels",date:"2026-07-14",dur:"31m",path:"pm_direct",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:2,score:2,outcome:"follow_up_agreed",well:"Accounting integrations. Good context.",wrong:"ADM not validated. Next step soft."},
  {title:"Phil Benson Finance",rep:"Alex",date:"2026-07-13",dur:"31m",path:"pm_direct",RAP:4,R:4,CB:4,ADM:4,CH:4,NS:4,score:4,outcome:"demo_booked",well:"Strong qualification. ADM confirmed. Champion identified. Demo booked.",wrong:"Nothing significant."},
  {title:"Steuerwehr",rep:"Aurel",date:"2026-07-13",dur:"27m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3,outcome:"follow_up_agreed",well:"Tax advisory firm. Cards area. Follow-up agreed.",wrong:"ADM not validated with example."},
  {title:"Manthey Steuerberatung",rep:"Aurel",date:"2026-07-09",dur:"24m",path:"pm_direct",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:2,score:2,outcome:"follow_up_agreed",well:"Tax advisory firm. Product feedback.",wrong:"ADM not validated."},
  {title:"Max Zeegers FYBE",rep:"Niels",date:"2026-07-09",dur:"25m",path:"pm_direct",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:2,score:2,outcome:"follow_up_agreed",well:"Finance contact. Cards area.",wrong:"ADM not validated."},
  {title:"Jeroen Glebbeek FYBE",rep:"Niels",date:"2026-07-08",dur:"22m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3,outcome:"follow_up_agreed",well:"Strong rapport. Product areas covered.",wrong:"ADM not validated with example."},
  {title:"Milena De Coop Haegen",rep:"Niels",date:"2026-07-08",dur:"20m",path:"pm_direct",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:2,score:2,outcome:"follow_up_agreed",well:"Cards area relevant.",wrong:"ADM not validated."},
  {title:"BDU Benedikt Ebert",rep:"Aurel",date:"2026-07-08",dur:"22m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3,outcome:"follow_up_agreed",well:"Consulting firm. Cards area. Follow-up agreed.",wrong:"ADM not validated."},
  {title:"Lisa Schuler WTK",rep:"Aurel",date:"2026-07-08",dur:"31m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3,outcome:"follow_up_agreed",well:"Austrian accounting firm. Multiple areas.",wrong:"ADM not validated with example."},
  {title:"DDA Fenna",rep:"Niels",date:"2026-07-07",dur:"17m",path:"pm_direct",RAP:1,R:1,CB:1,ADM:1,CH:1,NS:1,score:1,outcome:"no_next_step",well:"Contact present.",wrong:"No qualification. No ADM. No next step."},
  {title:"Eleonore De Ridder",rep:"Aurel",date:"2026-07-07",dur:"3m",path:"pm_direct",RAP:1,R:1,CB:1,ADM:1,CH:1,NS:1,score:1,outcome:"no_next_step",well:"Contact made.",wrong:"Too short. No qualification."},
  {title:"Kock Hellmold",rep:"Aurel",date:"2026-07-07",dur:"19m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3,outcome:"follow_up_agreed",well:"Tax advisory firm. Strong rapport. Follow-up agreed.",wrong:"ADM not validated."},
  {title:"Ishant Sharma",rep:"Ezer",date:"2026-07-06",dur:"10m",path:"pm_direct",RAP:3,R:3,CB:3,ADM:3,CH:3,NS:3,score:3,outcome:"follow_up_agreed",well:"Accounting contact. Cards area relevant.",wrong:"ADM not validated."},
  {title:"Franz Salzmann",rep:"Nicola",date:"2026-07-03",dur:"7m",path:"pm_direct",RAP:2,R:2,CB:2,ADM:2,CH:2,NS:2,score:2,outcome:"follow_up_agreed",well:"Austrian accounting contact.",wrong:"Short. No ADM."},
];

const HISTORICAL_DEMO = [
  {title:"FYBE Tiffany Demo",rep:"Niels",date:"2026-07-17",dur:"34m",TLR:4,REF:4,COM:4,OBJ:null,ENG:4,NS:4,score:4,outcome:"follow_up_agreed",well:"Tailored to FYBE. Referral moment coached. Commercial raised. Strong next step.",wrong:"Nothing significant."},
  {title:"Akos Balogh Demo",rep:"Alex",date:"2026-07-17",dur:"34m",TLR:4,REF:4,COM:4,OBJ:4,ENG:4,NS:4,score:4,outcome:"follow_up_agreed",well:"Tailored. Objections handled. Referral moment. Commercial raised.",wrong:"Nothing significant."},
  {title:"Lisa Schuler Demo",rep:"Aurel",date:"2026-07-17",dur:"49m",TLR:3,REF:3,COM:3,OBJ:3,ENG:3,NS:3,score:3,outcome:"follow_up_agreed",well:"Long session. Multiple areas. Competitive intel.",wrong:"Referral moment weak. Commercial not proactively raised."},
  {title:"Williams Stanley",rep:"Jara",date:"2026-07-16",dur:"22m",TLR:2,REF:2,COM:2,OBJ:null,ENG:2,NS:2,score:2,outcome:"no_next_step",well:"Large firm. Multiple attendees.",wrong:"Not tailored. Referral moment not coached. No commercial."},
  {title:"Reinier Mudde FYBE",rep:"Niels",date:"2026-07-15",dur:"41m",TLR:4,REF:4,COM:4,OBJ:null,ENG:4,NS:4,score:4,outcome:"follow_up_agreed",well:"Tailored to FYBE context. Referral moment. Commercial raised.",wrong:"Nothing significant."},
  {title:"Sempar Demo",rep:"Alex",date:"2026-07-15",dur:"55m",TLR:3,REF:3,COM:3,OBJ:null,ENG:3,NS:3,score:3,outcome:"follow_up_agreed",well:"Long session. Product feedback surfaced.",wrong:"Referral moment not coached. Commercial soft."},
  {title:"Reinier Mudde FYBE 2",rep:"Niels",date:"2026-07-14",dur:"41m",TLR:4,REF:4,COM:4,OBJ:null,ENG:4,NS:4,score:4,outcome:"follow_up_agreed",well:"Second strong FYBE demo. Consistent quality.",wrong:"Nothing significant."},
  {title:"Alex Kock Demo",rep:"Aurel",date:"2026-07-14",dur:"35m",TLR:3,REF:3,COM:3,OBJ:null,ENG:3,NS:3,score:3,outcome:"follow_up_agreed",well:"Tax advisory firm. Relevant areas covered.",wrong:"Referral moment not coached."},
  {title:"Kitty Veenema FYBE",rep:"Niels",date:"2026-07-08",dur:"45m",TLR:3,REF:3,COM:3,OBJ:null,ENG:3,NS:3,score:3,outcome:"follow_up_agreed",well:"FYBE context. Good engagement.",wrong:"Referral moment not coached. Commercial soft."},
  {title:"Ewout Bastiaannet FYBE",rep:"Niels",date:"2026-07-08",dur:"32m",TLR:3,REF:3,COM:3,OBJ:null,ENG:3,NS:3,score:3,outcome:"follow_up_agreed",well:"FYBE context. Strong engagement.",wrong:"Referral moment not coached."},
  {title:"Alain Wickenhagen FYBE",rep:"Niels",date:"2026-07-08",dur:"29m",TLR:2,REF:2,COM:2,OBJ:null,ENG:2,NS:2,score:2,outcome:"follow_up_agreed",well:"FYBE context.",wrong:"Not tailored. Referral moment not coached."},
];

const HISTORICAL_MANAGEMENT = [
  {title:"Billy Grace Commercial",rep:"Niels",date:"2026-07-20",dur:"30m",subtype:"checkin",WRM:3,HLT:3,REF:2,NS:2,score:2,outcome:"follow_up_agreed",well:"Commercial terms discussed.",wrong:"No referral signal. Next step soft."},
  {title:"Mick Weijers Billy Grace",rep:"Niels",date:"2026-07-17",dur:"4m",subtype:"checkin",WRM:2,HLT:2,REF:2,NS:2,score:2,outcome:"follow_up_agreed",well:"Contact maintained.",wrong:"Short. No referral signal."},
  {title:"Twigger Ezer",rep:"Ezer",date:"2026-07-07",dur:"9m",subtype:"product_enablement",GAP:1,PRD:1,UND:1,RMC:1,NS2:1,score:1,outcome:"no_next_step",well:"Contact present.",wrong:"No purpose. No product coverage. No next step."},
];

const PIPELINE = {
  funnel: {
    DE: { sourced: 18, discovery: 9, demo: 6 },
    GB: { sourced: 28, discovery: 8, demo: 5 },
    NL: { sourced: 16, discovery: 10, demo: 5 },
    AT: { sourced: 7,  discovery: 4, demo: 3 },
  },
  q3_targets: {
    DE: { sqls: 18, arr: 45000 },
    GB: { sqls: 12, arr: 30000 },
    NL: { sqls: 15, arr: 38000 },
    AT: { sqls: 8,  arr: 20000 },
  }
};
