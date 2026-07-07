/* ══════════════════════════════════════════════════
   PARTNERSHIPS CALL ANALYSIS — JULY 2026
   Team: Jara · Nicola · Ezer · Aurel · Alex · Markus · Niels · Fred · Mees
   Updated: Jul 7, 2026
   Default filter: last 7 days
   ══════════════════════════════════════════════════ */

/* ══════ NOTION PAGE IDs ══════ */
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
  taz:    "3821de46-2c03-8117-b122-e66e478fe728",
};

const REPS = ["Jara","Nicola","Ezer","Aurel","Alex","Markus","Niels","Fred","Mees"];

const SOURCING=[
  {title:"Reinier Mudde",rep:"Niels",date:"2026-07-07",dur:"8m",O:4,Q:3,H:3,M:4,score:3.5,outcome:"follow_up_call_booked",well:"Strong opener, partnership framed clearly, next meeting agreed.",wrong:"Client base not fully qualified. No firm meeting date."},
  {title:"Ryan Wakeman ACMA",rep:"Ezer",date:"2026-07-03",dur:"2m",O:3,Q:3,H:3,M:3,score:3.0,outcome:"follow_up_call_booked",well:"Short but professional intro. Meeting concept accepted.",wrong:"No qualification. No specific date locked."},
  {title:"Antoon Rakke",rep:"Niels",date:"2026-07-03",dur:"2m",O:3,Q:3,H:3,M:3,score:3.0,outcome:"follow_up_call_booked",well:"Partnership value explained clearly. Follow-up agreed.",wrong:"Very short. No qualification of client base."},
  {title:"Robin Wallaart",rep:"Niels",date:"2026-07-03",dur:"5m",O:3,Q:3,H:3,M:3,score:3.2,outcome:"follow_up_call_booked",well:"Good positioning. Accountant confirmed. Next step agreed.",wrong:"No meeting booked with date/time."},
  {title:"Tiffany Oemar",rep:"Niels",date:"2026-07-03",dur:"5m",O:3,Q:3,H:4,M:3,score:3.2,outcome:"follow_up_call_booked",well:"Objection handled well. Follow-up agreed.",wrong:"No qualification of client base or count."},
  {title:"Kitty Veenema",rep:"Niels",date:"2026-07-03",dur:"4m",O:3,Q:3,H:3,M:3,score:3.0,outcome:"follow_up_call_booked",well:"Clear intro. Partnership relevance established.",wrong:"No qualification. No date confirmed."},
  {title:"Anna Köhn",rep:"Aurel",date:"2026-07-02",dur:"2m",O:3,Q:3,H:3,M:3,score:3.0,outcome:"follow_up_call_booked",well:"Relevant contact identified.",wrong:"Very short. No qualification."},
  {title:"Martijn Nuis",rep:"Niels",date:"2026-07-01",dur:"3m",O:3,Q:3,H:3,M:3,score:3.0,outcome:"follow_up_call_booked",well:"Partnership intro landed.",wrong:"No qualification. No date."},
  {title:"Mark Linthorst",rep:"Niels",date:"2026-07-01",dur:"2m",O:3,Q:3,H:3,M:3,score:3.0,outcome:"follow_up_call_booked",well:"Short but relevant contact.",wrong:"No qualification. Very short."},
  {title:"Max Zeegers",rep:"Niels",date:"2026-07-01",dur:"4m",O:3,Q:3,H:3,M:3,score:3.2,outcome:"follow_up_call_booked",well:"Good positioning. Accountant confirmed.",wrong:"No meeting date."},
  {title:"Ashley Townsend",rep:"Alex",date:"2026-06-30",dur:"3m",O:3,Q:3,H:3,M:2,score:2.8,outcome:"no_next_step",well:"Clear intro.",wrong:"No meeting booked. No qualification."},
  {title:"Eduard Hoekstra RA",rep:"Niels",date:"2026-06-30",dur:"4m",O:4,Q:4,H:4,M:4,score:3.8,outcome:"follow_up_call_booked",well:"Strong sourcing — RA confirmed, clients identified, follow-up agreed.",wrong:"No specific date locked."},
  {title:"Paul O'Rourke",rep:"Alex",date:"2026-06-30",dur:"3m",O:3,Q:3,H:3,M:2,score:2.8,outcome:"no_next_step",well:"Partnership framed.",wrong:"No next step. Very brief."},
  {title:"Fred Amo-Agyei",rep:"Alex",date:"2026-06-30",dur:"2m",O:3,Q:3,H:3,M:3,score:3.0,outcome:"follow_up_call_booked",well:"Relevant contact.",wrong:"Very short."},
  {title:"Harald Meisl",rep:"Aurel",date:"2026-06-30",dur:"3m",O:3,Q:2,H:2,M:2,score:2.5,outcome:"no_next_step",well:"Contact attempted.",wrong:"Gatekeeper. No substance."},
  {title:"Ewout Bastiaannet",rep:"Niels",date:"2026-06-30",dur:"4m",O:4,Q:3,H:4,M:3,score:3.5,outcome:"follow_up_call_booked",well:"Good engagement. Follow-up agreed.",wrong:"No date confirmed."},
  {title:"Bart Groosman",rep:"Niels",date:"2026-06-30",dur:"3m",O:3,Q:3,H:3,M:3,score:3.2,outcome:"follow_up_call_booked",well:"Relevant contact confirmed.",wrong:"No qualification depth."},
  {title:"Mark Oude Avenhuis",rep:"Niels",date:"2026-06-30",dur:"6m",O:4,Q:3,H:3,M:4,score:3.5,outcome:"follow_up_call_booked",well:"Strong positioning. Meeting agreed.",wrong:"No specific date."},
  {title:"Tom Overwijn (sourcing)",rep:"Niels",date:"2026-06-30",dur:"4m",O:4,Q:3,H:3,M:4,score:3.5,outcome:"follow_up_call_booked",well:"Good intro. Accounting context confirmed.",wrong:"No qualification."},
  {title:"Robin Meuldijk (sourcing)",rep:"Niels",date:"2026-06-29",dur:"2m",O:3,Q:2,H:3,M:2,score:2.5,outcome:"no_next_step",well:"Initial contact made.",wrong:"Very short. No substance."},
  {title:"+441392432525",rep:"Alex",date:"2026-07-02",dur:"5m",O:2,Q:2,H:3,M:2,score:2.5,outcome:"no_next_step",well:"Called the right org.",wrong:"Gatekeeper. No DM reached."},
  {title:"Mees Sourcing call",rep:"Mees",date:"2026-06-29",dur:"2m",O:3,Q:3,H:3,M:3,score:3.0,outcome:"follow_up_call_booked",well:"Relevant contact. Follow-up agreed.",wrong:"Very short. First scored call — baseline only."},
];

const DISCOVERY=[
  {title:"Kock+Hellmold / Aurel",rep:"Aurel",date:"2026-07-07",dur:"19m",CB:4,DA:4,CH:4,GE:4,NS:4,PC:3,score:3.8,outcome:"follow_up_call_booked",well:"Strong discovery — accounting firm, DATEV users, client base confirmed. Felix Kumpers (Solutions) added value. Demo booked.",wrong:"No explicit pre-call objective stated."},
  {title:"Ishant Sharma",rep:"Ezer",date:"2026-07-06",dur:"10m",CB:3,DA:3,CH:3,GE:5,NS:3,PC:2,score:3.2,outcome:"follow_up_call_booked",well:"Good rapport. UK confirmed. Partnership concept understood.",wrong:"No pre-call objective. Client base not fully explored. No demo booked."},
  {title:"Franz Salzmann",rep:"Nicola",date:"2026-07-03",dur:"7m",CB:3,DA:3,CH:3,GE:4,NS:3,PC:2,score:3.0,outcome:"follow_up_call_booked",well:"Contact engaged. AT market confirmed.",wrong:"Short. No deep qualification. No pre-call objective."},
  {title:"Bettina Kaiser Jul 3",rep:"Nicola",date:"2026-07-03",dur:"5m",CB:3,DA:3,CH:3,GE:4,NS:3,PC:2,score:3.0,outcome:"follow_up_call_booked",well:"Pape & Co follow-up. Relationship maintained.",wrong:"Short. Limited business depth."},
  {title:"Mark Zandbergen (Jul 3 AM)",rep:"Niels",date:"2026-07-03",dur:"3m",CB:3,DA:2,CH:3,GE:4,NS:2,PC:2,score:2.8,outcome:"follow_up_call_booked",well:"Contact engaged.",wrong:"Very short. No meaningful discovery."},
  {title:"Mark Zandbergen (Jul 3)",rep:"Niels",date:"2026-07-03",dur:"3m",CB:3,DA:2,CH:3,GE:4,NS:2,PC:2,score:2.8,outcome:"follow_up_call_booked",well:"Second touchpoint in same day.",wrong:"No discovery depth. No firm next step."},
  {title:"AccTax // Moss",rep:"Ezer",date:"2026-06-29",dur:"20m",CB:4,DA:3,CH:3,GE:5,NS:4,PC:3,score:3.5,outcome:"follow_up_call_booked",well:"Good discovery alongside Alex. UK accounting firm, client context understood.",wrong:"No pre-call objective. DM not fully confirmed."},
  {title:"Tina Edwards",rep:"Alex",date:"2026-06-29",dur:"7m",CB:3,DA:3,CH:3,GE:5,NS:3,PC:2,score:2.8,outcome:"follow_up_call_booked",well:"UK contact, partnership concept accepted.",wrong:"Short. No deep qualification. No pre-call objective."},
  {title:"Vertice x Moss",rep:"Alex",date:"2026-06-29",dur:"24m",CB:4,DA:4,CH:4,GE:5,NS:3,PC:3,score:3.5,outcome:"follow_up_call_booked",well:"Good cross-team call (Jara+Alex+Amelia). SaaS procurement angle interesting. DM engaged.",wrong:"No firm next step with date. Partnership model not fully defined."},
  {title:"Joy Chakraborty",rep:"Ezer",date:"2026-06-29",dur:"23m",CB:4,DA:3,CH:3,GE:5,NS:4,PC:3,score:3.5,outcome:"follow_up_call_booked",well:"Good rapport. UK accounting context. Follow-up agreed.",wrong:"No pre-call objective. Access to decision moment not validated."},
  {title:"Shuffle x Moss",rep:"Jara",date:"2026-07-02",dur:"19m",CB:4,DA:4,CH:4,GE:5,NS:3,PC:3,score:3.8,outcome:"follow_up_call_booked",well:"Interesting fintech angle. Christina engaged. Partnership model explored.",wrong:"No firm next step with date. Christina declined Tue follow-up."},
  {title:"Jack Grant / PMM Alliance",rep:"Alex",date:"2026-07-02",dur:"12m",CB:3,DA:3,CH:4,GE:5,NS:4,PC:3,score:3.5,outcome:"follow_up_call_booked",well:"DM confirmed. UK event/marketing angle. Next step agreed.",wrong:"ICP alignment unclear. No pre-call objective."},
  {title:"AAT Partnership",rep:"Alex",date:"2026-07-02",dur:"54m",CB:4,DA:4,CH:5,GE:5,NS:4,PC:3,score:4.0,outcome:"follow_up_call_booked",well:"Strong 54-min discovery. AAT is a major UK accounting body. Both DMs present. Partnership model thoroughly explored.",wrong:"No pre-call objective. Next step not fully time-bound."},
  {title:"Blue People IT",rep:"Niels",date:"2026-07-01",dur:"32m",CB:4,DA:4,CH:4,GE:4,NS:4,PC:3,score:4.0,outcome:"follow_up_call_booked",well:"Strong discovery. IT service firm, good ICP fit. Workflow discussed. Next step agreed.",wrong:"No explicit pre-call objective."},
  {title:"Paul Howarth CFO",rep:"Alex",date:"2026-07-01",dur:"33m",CB:4,DA:3,CH:4,GE:5,NS:4,PC:3,score:3.8,outcome:"follow_up_call_booked",well:"CFO recruitment angle interesting. Paul Howarth engaged. UK confirmed.",wrong:"Access to decision moment not fully validated. No pre-call objective."},
  {title:"Leandro Binder (Jun 30)",rep:"Aurel",date:"2026-06-30",dur:"7m",CB:3,DA:2,CH:3,GE:4,NS:2,PC:2,score:2.8,outcome:"no_next_step",well:"AT contact. Previous context from IG Immobilien.",wrong:"Short. No next step. Limited discovery."},
  {title:"Martin Hoogerbrugge",rep:"Niels",date:"2026-06-30",dur:"9m",CB:3,DA:3,CH:3,GE:4,NS:3,PC:2,score:3.2,outcome:"follow_up_call_booked",well:"NL accountant confirmed. Engagement good.",wrong:"Short. No deep qualification. No pre-call objective."},
  {title:"Glenn ten Bookum",rep:"Niels",date:"2026-06-30",dur:"6m",CB:3,DA:2,CH:3,GE:4,NS:3,PC:2,score:3.0,outcome:"follow_up_call_booked",well:"Contact qualified as accountant.",wrong:"Very short. No deep discovery."},
];

const DEMO=[
  {title:"taavas Advisor Portal",rep:"Nicola",date:"2026-07-03",dur:"61m",UC:5,VA:4,WF:4,CO:3,NS:4,PC:3,score:4.2,outcome:"follow_up_booked",well:"Excellent 61-min advisor portal demo with Milad Bazzaz (taavas) + solutions team. DATEV workflow mapped. Technical depth impressive.",wrong:"No explicit referral commitment. No pre-call objective stated."},
  {title:"Patrick Bodner Demo",rep:"Aurel",date:"2026-06-30",dur:"53m",UC:5,VA:4,WF:4,CO:4,NS:4,PC:3,score:4.3,outcome:"follow_up_booked",well:"Strong demo to Patrick Bodner (NorthBridge BI). Use case validated. Commitment signal positive. Follow-up agreed.",wrong:"No pre-call objective. Next step not time-bound."},
  {title:"alltax Demo",rep:"Nicola",date:"2026-06-30",dur:"47m",UC:4,VA:4,WF:4,CO:4,NS:4,PC:3,score:4.0,outcome:"follow_up_booked",well:"Strong demo with ADDISON Tse:nit integration context. Both DMs (Rebecca + Daniel) present.",wrong:"No explicit pre-call objective."},
  {title:"RG Finance Demo",rep:"Nicola",date:"2026-06-30",dur:"35m",UC:4,VA:4,WF:4,CO:3,NS:4,PC:3,score:3.8,outcome:"follow_up_booked",well:"Good demo. RG Finance engaged. Follow-up booked.",wrong:"No pre-call objective. Commitment signal moderate."},
  {title:"Creative Solutions Demo",rep:"Ezer",date:"2026-07-02",dur:"21m",UC:4,VA:3,WF:4,CO:3,NS:3,PC:2,score:3.5,outcome:"follow_up_booked",well:"Good demo with Fred joining. UK accounting firm. Xero integration discussed.",wrong:"No pre-call objective. No firm commitment. Shorter than ideal for a demo."},
  {title:"Tom Overwijn (demo)",rep:"Niels",date:"2026-07-02",dur:"30m",UC:4,VA:4,WF:4,CO:3,NS:4,PC:3,score:3.8,outcome:"follow_up_booked",well:"Good NL demo. Workflow fit confirmed. Follow-up agreed.",wrong:"No pre-call objective. Commitment signal not strong."},
  {title:"Casper/Niels Vervolg (demo)",rep:"Niels",date:"2026-07-01",dur:"29m",UC:5,VA:4,WF:4,CO:4,NS:4,PC:3,score:4.0,outcome:"follow_up_booked",well:"Strong Greyt demo — Casper engaged, workflow fit confirmed. Follow-up agreed.",wrong:"No pre-call objective."},
  {title:"Integral API Demo",rep:"Jara",date:"2026-06-29",dur:"22m",UC:4,VA:4,WF:4,CO:3,NS:3,PC:3,score:3.8,outcome:"follow_up_booked",well:"API integration demo with Murat Akkas (Integral). Technical fit confirmed.",wrong:"No pre-call objective. Commitment signal moderate. Next step not time-bound."},
  {title:"Greyt / Gerben Demo",rep:"Niels",date:"2026-06-29",dur:"43m",UC:5,VA:4,WF:4,CO:4,NS:4,PC:3,score:4.0,outcome:"follow_up_booked",well:"Excellent demo — Gerben new contact at Greyt, full product walkthrough. Greyt relationship deepening.",wrong:"No pre-call objective."},
  {title:"Friso / Niels Demo",rep:"Niels",date:"2026-06-29",dur:"40m",UC:4,VA:4,WF:4,CO:3,NS:3,PC:2,score:3.5,outcome:"follow_up_booked",well:"Good demo. Startup context. Solutions team present.",wrong:"No pre-call objective. Commitment signal soft."},
  {title:"Casper/Niels Greyt (Jun 29)",rep:"Niels",date:"2026-06-29",dur:"31m",UC:4,VA:4,WF:4,CO:4,NS:4,PC:3,score:3.8,outcome:"follow_up_booked",well:"Good demo. Mees joining as co-attendee — good for handover.",wrong:"No pre-call objective."},
];

const MANAGEMENT=[
  {title:"DRK // Moss 2026",rep:"Jara",date:"2026-07-07",dur:"28m",P:4,M:4,B:3,E:4,C:3,N:4,PC:3,score:3.5,well:"Pipeline reviewed. P.Müller engaged. Next step confirmed.",wrong:"MAP not formally reviewed. No explicit referral ask."},
  {title:"Leandro Binder (Jul 6)",rep:"Aurel",date:"2026-07-06",dur:"4m",P:2,M:2,B:2,E:3,C:2,N:3,PC:2,score:2.5,well:"Contact maintained.",wrong:"Very short. No MAP, no pipeline, no referral ask."},
  {title:"Roshan/Niels Greyt",rep:"Niels",date:"2026-07-06",dur:"23m",P:4,M:3,B:4,E:4,C:3,N:4,PC:3,score:3.5,well:"Good Greyt management. Roshan engaged. Case study discussed.",wrong:"No explicit referral ask. Pre-call objective not stated."},
  {title:"Jouke/Niels Greyt Case",rep:"Niels",date:"2026-07-06",dur:"22m",P:3,M:3,B:3,E:4,C:3,N:3,PC:2,score:3.2,well:"Case interview format interesting for partner content.",wrong:"No MAP review. No referral ask. No pre-call objective."},
  {title:"berenika.sterba DHK",rep:"Aurel",date:"2026-07-06",dur:"4m",P:2,M:2,B:2,E:2,C:2,N:2,PC:1,score:2.3,well:"Contact maintained.",wrong:"Very short. No substance. No MAP, pipeline, or referral ask."},
  {title:"ACFO Check-in",rep:"Niels",date:"2026-07-03",dur:"21m",P:4,M:3,B:3,E:4,C:3,N:4,PC:3,score:3.5,well:"ACFO partnership progressing. Eyal engaged. Case study opportunity explored.",wrong:"No explicit referral ask. MAP not formally reviewed."},
  {title:"Robin Meuldijk (mgmt)",rep:"Niels",date:"2026-07-03",dur:"4m",P:2,M:2,B:2,E:3,C:2,N:2,PC:2,score:2.5,well:"Contact maintained.",wrong:"Very short. No MAP, pipeline, or referral ask."},
  {title:"NA Media",rep:"Jara",date:"2026-07-03",dur:"18m",P:3,M:3,B:3,E:4,C:3,N:4,PC:3,score:3.4,well:"Good relationship. NA Media engaged. Follow-up agreed.",wrong:"No explicit referral ask. MAP not formally reviewed."},
  {title:"AMT Next Steps",rep:"Alex",date:"2026-07-02",dur:"47m",P:5,M:4,B:4,E:5,C:3,N:5,PC:4,score:4.0,well:"Excellent — AMT pipeline reviewed with Kate. Referral clients discussed. Marketing collab agreed. Strong partnership momentum.",wrong:"No explicit referral ask by name. Competitive signals not explored."},
  {title:"Done!Financials Jul 2",rep:"Nicola",date:"2026-07-02",dur:"25m",P:4,M:4,B:3,E:4,C:3,N:4,PC:3,score:3.8,well:"Good management. Pipeline reviewed. Follow-up confirmed.",wrong:"No explicit referral ask. Pre-call objective not stated."},
  {title:"CH4B Affiliate",rep:"Alex",date:"2026-07-01",dur:"32m",P:3,M:3,B:3,E:4,C:3,N:3,PC:2,score:3.2,well:"Good engagement with Kimberley. CH4B relationship maintained.",wrong:"No MAP review. No referral ask. No pre-call objective."},
  {title:"Robin Meuldijk (Jun 29)",rep:"Niels",date:"2026-06-29",dur:"13m",P:3,M:3,B:3,E:3,C:2,N:3,PC:2,score:3.0,well:"Contact maintained. NL partner.",wrong:"No MAP review. No referral ask. Short."},
];

const RPQ=[
  {title:"Yuko Nuijts",rep:"Niels",date:"2026-07-03",dur:"23m",MET:3,EB:3,DC:3,DP:3,PA:4,CH:3,PC:3,score:3.4,outcome:"follow_up_booked",ae_handoff:false,well:"Good qualification. Pain confirmed. NL context. Follow-up agreed.",wrong:"No AE handoff. Economic buyer not fully confirmed."},
  {title:"Stone & Bridges RPQ",rep:"Niels",date:"2026-07-02",dur:"12m",MET:3,EB:3,DC:3,DP:3,PA:3,CH:3,PC:2,score:3.2,outcome:"follow_up_booked",ae_handoff:false,well:"Contact engaging with Moss directly (not as referral partner).",wrong:"Short. No AE handoff. Economic buyer unclear."},
  {title:"Gurucharan Singh RPQ",rep:"Alex",date:"2026-06-29",dur:"12m",MET:3,EB:3,DC:3,DP:2,PA:3,CH:3,PC:2,score:3.2,outcome:"follow_up_booked",ae_handoff:false,well:"Guy Hobson present (AE). accubooks context. RPQ correctly identified.",wrong:"No formal AE handoff agreed. Decision process not mapped."},
];

const UPCOMING={
  sourcing:[
    {rep:"Fred",call:"Twigger Business Solutions intro",date:"Tue Jul 7, 10am",type:"prospect",prepFlag:"ok",prepNote:"Booked by Ezer. Fred attending with Ezer. hello@twigger.co.uk confirmed. Partnership intro — qualify client base, geography, decision access."},
  ],
  discovery:[
    {rep:"Jara",call:"Shuffle <> Moss",date:"Tue Jul 7, 10:30am",type:"prospect",prepFlag:"warn",prepNote:"Christina declined the invite. Clarify whether call is happening before joining."},
    {rep:"Jara",call:"Catalyst // Moss",date:"Tue Jul 7, 9:30am",type:"partner",prepFlag:"ok",prepNote:"Dave from Catalyst IT confirmed. API/NetSuite follow-up from Jun 16 demo."},
  ],
  demo:[],
  management:[
    {rep:"Jara",call:"DRK // Moss 2026",date:"Tue Jul 7, 9am (done)",type:"partner",prepFlag:"ok",prepNote:"P.Müller confirmed. Already happened today — scored 3.5/5."},
    {rep:"Nicola",call:"Advisor Portal: digit / Moss",date:"Wed Jul 8, 4pm",type:"partner",prepFlag:"ok",prepNote:"Ruediger Schulz + Gustaf confirmed. Portal demo for digit Berlin. Nicola OOO — confirm who is covering."},
    {rep:"Alex+Fred+Ezer+Jara",call:"XeroCon London",date:"Jul 8-9",type:"event",prepFlag:"ok",prepNote:"⭐ Major event. Jara, Ezer, Alex, Fred all attending. Partner drinks tonight (Jul 7). Biggest UK pipeline opportunity of Q3."},
  ]
};



function rpqExit(c){
  const issues=[];
  if(c.score<4.0)issues.push('Overall score below 4.0 — not fully qualified');
  if(c.EB<4)issues.push('Economic buyer not confirmed (EB<4)');
  if(c.PA<4)issues.push('Pain / business consequence not fully established (PA<4)');
  if(!c.ae_handoff)issues.push('No AE handoff agreed on the call');
  if(!issues.length) return{decision:'advance',label:'Ready for AE handoff',cls:'pill-green',missing:[]};
  if(!c.ae_handoff&&c.score>=4.0) return{decision:'hold',label:'Hold — handoff not agreed',cls:'pill-amber',missing:issues};
  return{decision:'hold',label:'Hold — incomplete qualification',cls:'pill-red',missing:issues};
}

function getRPQ(){const from=document.getElementById('rpqf-from').value,to=document.getElementById('rpqf-to').value,rep=document.getElementById('rpqf-rep').value;return RPQ.filter(c=>{if(from&&c.date<from)return false;if(to&&c.date>to)return false;if(rep!=='all'&&c.rep!==rep)return false;return true;});}

function renderRPQ(){
  const data=getRPQ(),rep=document.getElementById('rpqf-rep').value;
  const handoffs=data.filter(c=>c.ae_handoff).length;
  const pcAvg=data.length?avg(data.map(c=>c.PC)):0;

  // Commentary
  const noHandoff=data.filter(c=>!c.ae_handoff).length;
  document.getElementById('rpq-commentary').innerHTML=`
    <div class="commentary-card win"><div class="commentary-label">What this tab tracks</div><div class="commentary-text">Calls where a PM was speaking with someone evaluating Moss for their own business — not as a referral partner. These should result in a qualified AE handoff. Score reflects how well the PM qualified the opportunity before handing off.</div></div>
    <div class="commentary-card gap"><div class="commentary-label">Current period</div><div class="commentary-text">${data.length} call${data.length!==1?'s':''} labelled Referral Partner Qualification. ${handoffs} AE handoff${handoffs!==1?'s':''} confirmed. ${noHandoff>0?`${noHandoff} call${noHandoff!==1?'s':''} had no handoff agreed — opportunity at risk of going cold.`:''} As the new label rolls out, expect more calls to appear here.</div></div>
    <div class="commentary-card focus"><div class="commentary-label">The standard</div><div class="commentary-text">A well-run RPQ call confirms: the pain and business consequence, the economic buyer, the decision criteria, and ends with a confirmed AE handoff. Score 4+ = warm handoff. Score below 3 = the AE is going in cold.</div></div>`;

  if(!data.length){
    document.getElementById('rpq-kpis').innerHTML=`<div class="kpi"><div class="kpi-label">Calls</div><div class="kpi-value">0</div></div><div class="kpi"><div class="kpi-label">Note</div><div class="kpi-value amber" style="font-size:13px">Label live</div></div>`;
    document.getElementById('rpq-insights').innerHTML='<div class="insight-card" style="grid-column:1/-1"><div class="insight-title blue">No calls yet</div><div class="insight-row">The Referral Partner Qualification label is now live in Attention. Calls will appear here automatically as reps have them and Attention classifies them.</div></div>';
    document.getElementById('rpq-reps').innerHTML='';
    document.getElementById('rpq-calls').innerHTML='';
    return;
  }

  const panel=document.getElementById('rpq-rep-panel');
  if(rep!=='all'){panel.innerHTML=repPanelHtml(rep);panel.classList.add('visible');}else panel.classList.remove('visible');

  document.getElementById('rpq-kpis').innerHTML=`
    <div class="kpi"><div class="kpi-label">Calls</div><div class="kpi-value">${data.length}</div></div>
    <div class="kpi"><div class="kpi-label">Avg score</div><div class="kpi-value ${cls(avg(data.map(c=>c.score)))}">${avg(data.map(c=>c.score)).toFixed(1)}</div></div>
    <div class="kpi"><div class="kpi-label">AE handoffs</div><div class="kpi-value ${handoffs>0?'green':'red'}">${handoffs}/${data.length}</div></div>
    <div class="kpi"><div class="kpi-label">Scored 4+</div><div class="kpi-value green">${data.filter(c=>c.score>=4).length}</div></div>
    <div class="kpi"><div class="kpi-label">Pre-call avg</div><div class="kpi-value ${cls(pcAvg)}">${pcAvg.toFixed(1)}</div></div>`;

  mkChart('rpq-dist','bar',{labels:DL,datasets:[{data:distBands(data),backgroundColor:DC,borderWidth:0,borderRadius:3}]},{...base,scales:{y:{beginAtZero:true,ticks:{stepSize:1,font:{size:10}},grid:{color:gc}},x:{ticks:{font:{size:10}},grid:{display:false}}}},'rpqd');
  const cV=[avg(data.map(c=>c.MET)),avg(data.map(c=>c.EB)),avg(data.map(c=>c.DC)),avg(data.map(c=>c.DP)),avg(data.map(c=>c.PA)),avg(data.map(c=>c.CH)),avg(data.map(c=>c.PC))].map(v=>+v.toFixed(1));
  mkChart('rpq-crit','bar',{labels:['Metrics (w3)','Econ buyer (w3)','Dec criteria (w3)','Dec process (w2)','Pain (w3)','Champion (w2)','Pre-call (w2)'],datasets:[{data:cV,backgroundColor:['#52b788','#4a8ec2','#c05c3a','#c07a14','#7c5cbf','#0e7490','#2c5f7a'],borderWidth:0,borderRadius:3}]},{...base,indexAxis:'y',scales:{x:{min:0,max:5,ticks:{stepSize:1,font:{size:10}},grid:{color:gc}},y:{ticks:{font:{size:10}},grid:{display:false}}}},'rpqc');

  document.getElementById('rpq-insights').innerHTML=insightsHtml(data,RPQ_WELL,RPQ_WRONG);

  const reps={};data.forEach(c=>{if(!reps[c.rep])reps[c.rep]={n:0,s:0,MET:0,EB:0,DC:0,DP:0,PA:0,CH:0,PC:0};reps[c.rep].n++;reps[c.rep].s+=c.score;['MET','EB','DC','DP','PA','CH','PC'].forEach(k=>reps[c.rep][k]+=c[k]);});
  document.getElementById('rpq-reps').innerHTML=Object.entries(reps).sort((a,b)=>b[1].n-a[1].n).map(([name,d],i)=>{const a=d.s/d.n;return`<tr><td class="td-muted">${i+1}</td><td style="font-weight:600">${name}</td><td style="font-weight:600">${d.n}</td><td><span class="td-score ${cls(a)}">${a.toFixed(1)}</span></td>${['MET','EB','DC','DP','PA','CH','PC'].map(k=>`<td style="color:${sc(d[k]/d.n)};font-family:var(--mono);font-size:12px">${(d[k]/d.n).toFixed(1)}</td>`).join('')}</tr>`;}).join('');

  document.getElementById('rpq-calls').innerHTML=[...data].sort((a,b)=>b.score-a.score).map(c=>{const ex=rpqExit(c);return`<tr><td style="font-weight:500;max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.title}</td><td class="td-muted">${c.rep}</td><td class="td-muted">${c.date.slice(5)}</td><td class="td-muted">${c.dur}</td>${['MET','EB','DC','DP','PA','CH'].map(k=>`<td style="color:${sc(c[k])};font-family:var(--mono);font-size:12px">${c[k]}</td>`).join('')}<td style="font-family:var(--mono);font-size:12px;color:${sc(c.PC)}">${c.PC}</td><td><span class="td-score ${cls(c.score)}">${c.score.toFixed(1)}</span></td><td>${c.ae_handoff?'<span class="pill pill-green">AE handoff</span>':'<span class="pill pill-red">No handoff</span>'}</td><td>${exitPill(ex)}</td><td>${barHtml(c.score)}</td></tr>`;}).join('');
}

/* ══════ PIPELINE ══════ */
function renderPipeline(){
  mkChart('p-vol','bar',{
    labels:['Jara','Nicola','Ezer','Alex','Aurel','Niels','Fred','Mees'],
    datasets:[
      {label:'Mgmt calls',data:[7,6,0,0,0],backgroundColor:'#52b788',borderWidth:0,borderRadius:3},
      {label:'Jun SQLs',data:[9,8,2,1,4],backgroundColor:'#4a8ec2',borderWidth:0,borderRadius:3}
    ]
  },{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:true,labels:{font:{size:10},boxWidth:10}}},scales:{y:{beginAtZero:true,ticks:{font:{size:10}},grid:{color:gc}},x:{ticks:{font:{size:10}},grid:{display:false}}}},'pv');
  mkChart('p-map','bar',{
    labels:['Jara','Nicola'],
    datasets:[{data:[3.7,3.1],backgroundColor:['#c07a14','#c05c3a'],borderWidth:0,borderRadius:3}]
  },{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{min:0,max:5,ticks:{stepSize:1,font:{size:10}},grid:{color:gc}},x:{ticks:{font:{size:10}},grid:{display:false}}}},'pm');
  mkChart('p-sql','bar',{
    labels:['Jan','Feb','Mar','Apr','May','Jun'],
    datasets:[
      {label:'DE',data:[16,23,28,24,21,29,19,24],backgroundColor:'#52b788',borderWidth:0,borderRadius:3},
      {label:'GB',data:[7,3,5,5,1,10,7,6],backgroundColor:'#c05c3a',borderWidth:0,borderRadius:3},
      {label:'NL',data:[5,8,15,9,9,21,7,6],backgroundColor:'#4a8ec2',borderWidth:0,borderRadius:3}
    ]
  },{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:true,labels:{font:{size:10},boxWidth:10}}},scales:{y:{beginAtZero:true,ticks:{font:{size:10}},grid:{color:gc}},x:{ticks:{font:{size:10}},grid:{display:false}}}},'ps');
  mkChart('p-pre','bar',{
    labels:['Jara','Nicola'],
    datasets:[{data:[3.4,2.5],backgroundColor:['#c07a14','#c05c3a'],borderWidth:0,borderRadius:3}]
  },{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{min:0,max:5,ticks:{stepSize:1,font:{size:10}},grid:{color:gc}},x:{ticks:{font:{size:10}},grid:{display:false}}}},'pp');
}

/* ══════ INIT ══════ */
function populateFilter(sel,data,key){[...new Set(data.map(c=>c[key]))].sort().forEach(r=>{const o=document.createElement('option');o.value=r;o.textContent=r;document.getElementById(sel).appendChild(o);});}
populateFilter('sf-rep',SOURCING,'rep');
populateFilter('df-rep',DISCOVERY,'rep');
populateFilter('emf-rep',DEMO,'rep');
populateFilter('mf-rep',MANAGEMENT,'rep');
document.querySelectorAll('.nav-tab').forEach(tab=>{tab.addEventListener('click',()=>{
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.section').forEach(s=>s.classList.remove('active'));
  tab.classList.add('active');document.getElementById('tab-'+tab.dataset.tab).classList.add('active');
  if(tab.dataset.tab==='sourcing')renderSourcing();
  if(tab.dataset.tab==='discovery')renderDiscovery();
  if(tab.dataset.tab==='demo')renderDemo();
  if(tab.dataset.tab==='management')renderMgmt();
  if(tab.dataset.tab==='rpq')renderRPQ();
  if(tab.dataset.tab==='pipeline')renderPipeline();
});});
['sf-from','sf-to','sf-country','sf-rep'].forEach(id=>document.getElementById(id).addEventListener('change',renderSourcing));
['df-from','df-to','df-rep'].forEach(id=>document.getElementById(id).addEventListener('change',renderDiscovery));
['emf-from','emf-to','emf-rep'].forEach(id=>document.getElementById(id).addEventListener('change',renderDemo));
['mf-from','mf-to','mf-rep'].forEach(id=>document.getElementById(id).addEventListener('change',renderMgmt));
['rpqf-from','rpqf-to','rpqf-rep'].forEach(id=>document.getElementById(id).addEventListener('change',renderRPQ));
populateFilter('rpqf-rep',RPQ,'rep');
renderSourcing();
