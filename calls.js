/* ══════════════════════ DATA ══════════════════════ */
const SOURCING=[
  {title:"APA <> Moss",rep:"Ezer",country:"UK",date:"2026-06-08",dur:"20m",O:5,Q:5,H:3,M:5,score:4.7,outcome:"follow_up_call_booked",well:"Strong qualification, clear ICP fit, next meeting booked.",wrong:null},
  {title:"BizAway intro",rep:"Jara",country:"UK",date:"2026-06-04",dur:"29m",O:5,Q:5,H:4,M:3,score:4.5,outcome:"follow_up_call_booked",well:"Identified mutual ICP and market fit clearly.",wrong:"Did not secure a concrete follow-up meeting date."},
  {title:"Ideas Community",rep:"Alex",country:"UK",date:"2026-06-03",dur:"21m",O:5,Q:5,H:3,M:3,score:4.3,outcome:"follow_up_call_booked",well:"Clear mutual fit, strong qualification, next steps agreed.",wrong:null},
  {title:"CCA // Moss intro",rep:"Jara",country:"UK",date:"2026-06-09",dur:"22m",O:4,Q:4,H:3,M:3,score:3.7,outcome:"demo_booked",well:"Clear qualification, pain points discussed, demo agreed.",wrong:"No specific demo time confirmed."},
  {title:"Wußler & Schmid",rep:"Nicola",country:"DE",date:"2026-06-08",dur:"15m",O:4,Q:4,H:3,M:3,score:3.7,outcome:"follow_up_call_booked",well:"Clear qualification, partnership discussed, next steps agreed.",wrong:"No specific demo time confirmed."},
  {title:"Ronnie Patel",rep:"Ezer",country:"UK",date:"2026-06-05",dur:"3m",O:4,Q:2,H:3,M:3,score:2.9,outcome:"referred_to_contact",well:"Polite, got direct referral to decision maker.",wrong:"No qualification, no meeting confirmed."},
  {title:"Aalia Rangrez",rep:"Ezer",country:"UK",date:"2026-06-01",dur:"7m",O:4,Q:4,H:3,M:1,score:2.7,outcome:"info_sent_no_meeting",well:"Clear explanation, good rapport, permission for info.",wrong:"No meeting booked, limited qualification depth."},
  {title:"Ryan Harris / Sansa Solutions",rep:"Jara",country:"UK",date:"2026-06-12",dur:"4m",O:5,Q:4,H:3,M:4,score:3.5,outcome:"follow_up_call_booked",well:"Strong existing relationship, clear ICP understanding, intro to Catalyst facilitated.",wrong:"No direct conversation with end decision maker yet."},
  {title:"Peter Connon / Colin Associates",rep:"Ezer",country:"UK",date:"2026-06-12",dur:"2m",O:3,Q:2,H:3,M:1,score:2.1,outcome:"no_next_step",well:"Polite intro, explained Moss briefly.",wrong:"Wrong contact — Peter not the user. No qualification, no next step confirmed."},
];

const DISCOVERY=[
  {title:"IBB Ventures x Moss",rep:"Jara",date:"2026-06-03",dur:"19m",CB:5,DA:4,CH:5,GE:5,NS:5,PC:4,score:4.8,outcome:"follow_up_call_booked",well:"Strong qualification, clear next steps. Agenda set, outcome matched.",wrong:"Competitor mentioned."},
  {title:"Stephan Grad | Q2 Lead",rep:"Aurel",date:"2026-06-09",dur:"25m",CB:4,DA:5,CH:5,GE:4,NS:5,PC:5,score:4.6,outcome:"demo_booked",well:"Clear ICP, direct DM access. Agenda set, outcome matched exactly.",wrong:"Austria conversion rate lower."},
  {title:"Argus Search GmbH",rep:"Nicola",date:"2026-06-09",dur:"31m",CB:4,DA:5,CH:4,GE:5,NS:5,PC:4,score:4.5,outcome:"agreement_sent",well:"Clear next steps, decision maker engaged, strong fit.",wrong:"No deep product pain surfaced yet."},
  {title:"Patrick Schreiner",rep:"Nicola",date:"2026-06-01",dur:"6m",CB:4,DA:4,CH:5,GE:5,NS:5,PC:3,score:4.4,outcome:"follow_up_call_booked",well:"Clear next steps, strong champion, pricing alignment.",wrong:"No agenda set — outcome partially matched."},
  {title:"Bitesize x Moss",rep:"Jara",date:"2026-06-08",dur:"20m",CB:4,DA:4,CH:5,GE:5,NS:4,PC:3,score:4.1,outcome:"demo_booked",well:"Clear qualification, strong champion, next steps agreed.",wrong:"No explicit agenda — some uncertainty on features."},
  {title:"Miro | Moss Ambassador",rep:"Nicola",date:"2026-06-02",dur:"19m",CB:4,DA:4,CH:4,GE:5,NS:4,PC:4,score:4.1,outcome:"agreement_sent",well:"Clear partnership model, mutual interest, next steps defined.",wrong:"Customer not ready to switch from Pleo yet."},
  {title:"Justis Vercoe",rep:"Ezer",date:"2026-06-11",dur:"5m",CB:4,DA:3,CH:4,GE:5,NS:5,PC:3,score:3.9,outcome:"demo_booked",well:"Identified champion, booked demo, clear next steps.",wrong:"No pre-call objective set. Decision maker not on next call."},
  {title:"Hotglue Partnership",rep:"Ezer",date:"2026-06-01",dur:"34m",CB:3,DA:4,CH:4,GE:5,NS:3,PC:2,score:3.4,outcome:"info_sent_no_meeting",well:"Clear value prop, good champion, product intro.",wrong:"No agenda, no objective. Outcome did not match — no next meeting."},
  {title:"Org // Moss intro",rep:"Jara",date:"2026-06-10",dur:"25m",CB:4,DA:3,CH:3,GE:5,NS:3,PC:2,score:3.1,outcome:"follow_up_call_booked",well:"Good fit identified, pain points discussed.",wrong:"No DM confirmed, unclear client needs. No agenda set."},
  {title:"Klostermann Gruppe // Moss",rep:"Jara",date:"2026-06-11",dur:"20m",CB:4,DA:4,CH:4,GE:5,NS:5,PC:4,score:4.2,outcome:"demo_booked",well:"Good qualification, pain points surfaced, demo booked Tue 16 13:00.",wrong:"No deep dive into integration requirements yet."},
  {title:"Norman Sadlo / DHPG",rep:"Nicola",date:"2026-06-11",dur:"9m",CB:3,DA:4,CH:3,GE:5,NS:4,PC:3,score:3.8,outcome:"demo_booked",well:"Advisor portal demo booked Jul 17. DATEV interface discussed, pricing shared.",wrong:"No DM champion confirmed. Gustav not on the call."},
  {title:"Chris Barnard / Collective Concepts",rep:"Ezer",date:"2026-06-05",dur:"8m",CB:4,DA:3,CH:3,GE:5,NS:3,PC:2,score:3.3,outcome:"follow_up_call_booked",well:"ICP fit discussed, CRM integration need surfaced, next call with Rupert agreed.",wrong:"No specific meeting time. CRM dependency is a potential blocker."},
  {title:"Vulkan Benelux x Moss",rep:"Niels",date:"2026-06-01",dur:"24m",CB:4,DA:3,CH:4,GE:4,NS:2,PC:4,score:3.4,outcome:"no_next_step",well:"Strong business model discovery, clear fit assessment, good rapport. Named stakeholders (Andries + Kars).",wrong:"No demo booked. Next step is 6 months away — product fit gap. No competitive landscape explored."},
  {title:"Michelle Bycraft / MB Accounting",rep:"Ezer",date:"2026-06-02",dur:"4m",CB:3,DA:2,CH:2,GE:5,NS:2,PC:2,score:2.7,outcome:"info_sent_no_meeting",well:"Clear intro, explained Moss value prop.",wrong:"Clients too small — no meeting confirmed, one-pager sent only."},
  {title:"Chris Chan / Leap Accounts",rep:"Ezer",date:"2026-06-12",dur:"5m",CB:3,DA:3,CH:3,GE:5,NS:4,PC:4,score:3.8,outcome:"follow_up_call_booked",well:"Good rapport, Moss value prop explained clearly, follow-up booked Thu 10:30am.",wrong:"No deep discovery into client base or decision process. Pricing explanation vague."},
  {title:"Lucy Cardew / Greenstones",rep:"Ezer",date:"2026-06-12",dur:"27m",CB:4,DA:3,CH:4,GE:5,NS:4,PC:3,score:3.9,outcome:"follow_up_call_booked",well:"Strong rapport, detailed pain point discovery (multi-currency, mileage, VAT), demo booked Tue 2-3pm.",wrong:"No explicit pre-call agenda. Several unresolved product gaps surfaced — Ezer needs product support before demo."},
];

const DEMO=[
  {title:"Beke Kratzmann | Plattform Demo",rep:"Aurel",date:"2026-06-11",dur:"61m",UC:5,VA:5,WF:5,CO:4,NS:5,PC:5,score:4.9,outcome:"agreement_sent",well:"Full product demo, clear agenda, all modules covered. Outcome matched exactly.",wrong:null},
  {title:"AMT / Moss Commercials",rep:"Alex",date:"2026-06-05",dur:"40m",UC:5,VA:4,WF:4,CO:4,NS:5,PC:4,score:4.6,outcome:"agreement_sent",well:"Clear use cases, strong value, next steps agreed. Agenda partially set.",wrong:"Some uncertainty on supplier communication feature."},
  {title:"Supy x Moss",rep:"Jara",date:"2026-06-03",dur:"45m",UC:5,VA:4,WF:4,CO:3,NS:4,PC:3,score:4.1,outcome:"follow_up_call_booked",well:"Clear product walkthrough, mutual fit, next steps discussed.",wrong:"No explicit agenda. Integration details unclear, petty cash workflow unresolved."},
  {title:"Zedra // Moss Demo",rep:"Alex",date:"2026-06-04",dur:"64m",UC:5,VA:4,WF:4,CO:3,NS:3,PC:2,score:3.9,outcome:"info_sent_no_meeting",well:"Deep use case fit, strong workflow discussion, pricing covered.",wrong:"No agenda set. No clear next meeting — outcome did not match."},
  {title:"EY AT x Moss Demo",rep:"Aurel",date:"2026-06-11",dur:"64m",UC:4,VA:4,WF:4,CO:3,NS:4,PC:4,score:4.3,outcome:"follow_up_call_booked",well:"Full platform walkthrough, clear agenda, technical questions addressed.",wrong:"Some technical questions deferred. No explicit referral commitment made."},
];

const MANAGEMENT=[
  {title:"Arthur Liebrecht",rep:"Jara",date:"2026-06-11",dur:"37m",P:4,M:4,B:4,E:5,C:4,N:3,PC:3,score:4.0,well:"Consultative, referral opportunity surfaced (franchise client), information shared.",wrong:"No specific date for follow-up demo. Summary to send."},
  {title:"score business x Moss",rep:"Jara",date:"2026-06-09",dur:"35m",P:4,M:4,B:4,E:5,C:4,N:5,PC:4,score:4.4,well:"Clear next steps, strong engagement, competitive insights.",wrong:"No explicit customer commitment captured."},
  {title:"WOW Company x Moss",rep:"Jara",date:"2026-06-08",dur:"11m",P:4,M:4,B:4,E:5,C:4,N:5,PC:3,score:4.2,well:"Clear next steps, strong engagement, competitor discussed.",wrong:"No agenda set. No explicit close on all blockers."},
  {title:"One Company x Moss",rep:"Jara",date:"2026-06-03",dur:"42m",P:4,M:4,B:5,E:5,C:3,N:4,PC:4,score:4.2,well:"Thorough updates, blockers discussed, resources shared.",wrong:null},
  {title:"Alina Nauen",rep:"Nicola",date:"2026-06-01",dur:"6m",P:4,M:4,B:4,E:5,C:3,N:5,PC:3,score:4.1,well:"Clear opportunity, strong engagement, next steps agreed.",wrong:"No agenda set. Uncertainty due to scheduling conflict."},
  {title:"n.a. (Marjan)",rep:"Nicola",date:"2026-06-11",dur:"4m",P:4,M:3,B:3,E:5,C:3,N:5,PC:3,score:4.0,well:"Clear next steps, high engagement, discount offered.",wrong:"No agenda — MAP not reviewed."},
  {title:"WS x Moss",rep:"Jara",date:"2026-06-03",dur:"15m",P:4,M:4,B:3,E:5,C:3,N:4,PC:3,score:3.9,well:"Clear next steps, strong engagement, event planning advanced.",wrong:"No agenda. Blockers not deeply explored."},
  {title:"ESER Capital",rep:"Jara",date:"2026-06-08",dur:"20m",P:4,M:4,B:3,E:5,C:3,N:4,PC:3,score:3.8,well:"Clear structure, pain points and next steps discussed.",wrong:"No pre-call objective. No explicit competitor, some data missing."},
  {title:"Felix Schmitt",rep:"Nicola",date:"2026-06-02",dur:"7m",P:4,M:3,B:4,E:4,C:3,N:4,PC:2,score:3.7,well:"Clear blockers, next steps, mutual follow-up agreed.",wrong:"No agenda. No explicit competitor discussion, pipeline limited."},
  {title:"+491776",rep:"Nicola",date:"2026-06-03",dur:"4m",P:4,M:3,B:3,E:4,C:3,N:4,PC:2,score:3.5,well:"Clear follow-up, good engagement, blockers discussed.",wrong:"No agenda. No explicit competitive discussion, vagueness on MAP."},
  {title:"Buesra Karadag",rep:"Nicola",date:"2026-06-08",dur:"12m",P:3,M:3,B:3,E:5,C:3,N:4,PC:2,score:3.5,well:"Engaged discussion, clear next steps, feedback requested.",wrong:"No agenda. No explicit pipeline or MAP details shared."},
  {title:"Poool x Moss",rep:"Jara",date:"2026-06-09",dur:"21m",P:2,M:3,B:4,E:4,C:3,N:4,PC:3,score:3.2,well:"Clear next steps, blockers identified.",wrong:"No new pipeline, slow customer response."},
  {title:"Alta Via x Moss",rep:"Jara",date:"2026-06-11",dur:"39m",P:3,M:2,B:3,E:4,C:3,N:3,PC:2,score:3.4,well:"Open discussion, partner tiering reviewed.",wrong:"No MAP review. No pre-call objective. Next steps pushed to July — at risk of going cold."},
  {title:"ba tax / Nicola",rep:"Nicola",date:"2026-06-03",dur:"12m",P:3,M:3,B:4,E:4,C:3,N:4,PC:2,score:3.5,well:"Feature clarification, demo with Nils planned, next steps agreed.",wrong:"No agenda. No explicit pipeline or MAP review."},
  {title:"Done!Financials",rep:"Nicola",date:"2026-06-09",dur:"5m",P:3,M:2,B:3,E:4,C:3,N:4,PC:2,score:3.3,well:"Partner planning call, action plan discussed, next meeting scheduled.",wrong:"No agenda. MAP not reviewed."},
  {title:"n.a. (Sue / Lunar X)",rep:"Ezer",date:"2026-06-11",dur:"8m",P:3,M:3,B:3,E:5,C:3,N:3,PC:3,score:3.6,well:"Positive feedback on RPC, referral opportunity uncovered.",wrong:"No specific follow-up date set for partnership call."},
];

const UPCOMING={
  sourcing:[
    {rep:"Markus",call:"Moss Partnership (22ug.de)",date:"Mon Jun 15, 11am",type:"prospect",prepFlag:"missing",prepNote:"No agenda — info@22ug.de attending. Set ICP qualification objective before joining. Not yet in Attention."},
    {rep:"Markus+Aurel",call:"Adina Stampa / game.de",date:"Mon Jun 15, 11:30am",type:"prospect",prepFlag:"missing",prepNote:"30 min sourcing meeting. No agenda. Define ICP objective and partnership model before joining."},
    {rep:"Ezer",call:"Sam @ Incorpwise",date:"Mon Jun 15, 10:15am",type:"prospect",prepFlag:"missing",prepNote:"No prep noted. Set ICP qualification objective before joining."},
    {rep:"Ezer",call:"Bethnal Green Ventures // Moss",date:"Mon Jun 15, 4pm",type:"prospect",prepFlag:"warn",prepNote:"Ezer optional attendee. New prospect — define your role and ICP qualification objective."},
    {rep:"Ezer+Alex",call:"MW Finman // Moss intro",date:"Mon Jun 15, 3:30pm",type:"prospect",prepFlag:"missing",prepNote:"No agenda. First contact with Mike Wong. Set ICP objective and talking points before joining."},
    {rep:"Nicola",call:"Limetax // Moss",date:"Tue Jun 16, 11am",type:"prospect",prepFlag:"missing",prepNote:"No prep. Set ICP qualification objective — what does qualified look like for Limetax?"},
    {rep:"Ezer",call:"Lucy Cardew / Greenstones follow-up",date:"Tue Jun 16, 2-3pm",type:"prospect",prepFlag:"warn",prepNote:"Product gaps flagged (multi-currency, mileage, VAT). Resolve with product team before joining."},
    {rep:"Ezer",call:"Chris Chan / Leap Accounts",date:"Thu Jun 18, 10:30am",type:"prospect",prepFlag:"warn",prepNote:"Discovery shallow. Prep ICP qualification and pricing clarity before joining."},
  ],
  discovery:[
    {rep:"Nicola",call:"sonnenschutz.de - B1 AG",date:"Tue Jun 16, 9am",type:"prospect",prepFlag:"ok",prepNote:"AE (Alexander van der Hoff) + Felix Schmitt attending. Define DM and ICP objective before joining."},
  ],
  demo:[
    {rep:"Ezer",call:"AAT x Moss Demo",date:"Mon Jun 15, 10:15am",type:"prospect",prepFlag:"ok",prepNote:"Anish Tailor (AAT) + Charlotte Lenman (Redactive) confirmed. Agenda set."},
    {rep:"Ezer",call:"APA // Moss demo",date:"Mon Jun 15, 2pm",type:"partner",prepFlag:"warn",prepNote:"Ross Batten (tentative). Define use case and explicit commitment ask before joining — which client will Ross refer first?"},
    {rep:"Aurel",call:"Nico Doehrn / Tax-Automate Demo",date:"Tue Jun 16, 11am",type:"prospect",prepFlag:"warn",prepNote:"NEW demo not in previous analysis. n.doehrn@tax-automate.com confirmed. Define use case and commitment ask before joining."},
    {rep:"Markus",call:"Moss Plattform Demo / CFO Lab",date:"Wed Jun 17, 9:30am",type:"prospect",prepFlag:"warn",prepNote:"alexis@cfo-lab.com confirmed, AE Malte Kaehne attending. New demo — not yet in Attention. Define use case and commitment ask."},
    {rep:"Jara",call:"Moss Demo & Nachste Schritte",date:"Mon Jun 15, 2pm",type:"prospect",prepFlag:"missing",prepNote:"No agenda. ilias.baltzis@outlook.com attending. Define use case and commitment ask before joining."},
    {rep:"Jara",call:"Klostermann Gruppe",date:"Tue Jun 16, 1pm",type:"prospect",prepFlag:"warn",prepNote:"Booked from Jun 11 discovery (4.2/5). David Hilpert also attending. Prep use case and integration requirements."},
  ],
  management:[
    {rep:"Jara",call:"Niedling & Partner Monthly",date:"Mon Jun 15, 11:30am",type:"partner",prepFlag:"ok",prepNote:"Agenda set (referrals, clients, webinar, commissions). Confirm MAP review is first item."},
    {rep:"Jara",call:"Poool GTM",date:"Mon Jun 15, 4pm",type:"partner",prepFlag:"missing",prepNote:"Scored 3.2 last time. No agenda. Set objective: which client will they refer this month?"},
    {rep:"Nicola",call:"Pape & Co. Monthly",date:"Tue Jun 16, 9:30am",type:"partner",prepFlag:"warn",prepNote:"Monthly recurring. MAP missing last call. Add MAP + specific client ask."},
    {rep:"Nicola",call:"Done!Financials",date:"Tue Jun 16, 10:15am",type:"partner",prepFlag:"missing",prepNote:"Scored 3.3 last time. No agenda. Define MAP review and pipeline ask."},
    {rep:"Nicola",call:"ba tax Session",date:"Wed Jun 17, 10am",type:"partner",prepFlag:"ok",prepNote:"30+ ba-group.de attendees on Teams. Enablement = management. Define referral commitment ask for end."},
    {rep:"Nicola",call:"Roedl Weekly CheckIn",date:"Mon Jun 15, 5:15pm",type:"partner",prepFlag:"warn",prepNote:"Weekly with AE. MAP review first, then which client to refer next."},
    {rep:"Markus+Aurel",call:"iwoca / Nikolai von Stempel",date:"Tue Jun 16, 1:30pm",type:"prospect",prepFlag:"warn",prepNote:"15 min catchup with Head of Partner Acquisition at iwoca. Define partnership objective and next step before joining."},
  ]
};

const COMMENTARY={
  sourcing:{win:"3 of 9 calls resulted in a confirmed next step — APA (Ezer, 4.7), BizAway (Jara, 4.5) and Ideas Community (Alex, 4.3) all showed strong mutual fit.",gap:"Meeting lock rate is the biggest gap: 6 of 9 calls ended without a confirmed time. Pre-call objectives were missing on most calls.",focus:"Every sourcing call should end with a proposed time in the calendar before hanging up. Set a single-sentence objective before joining: what does success look like for this call?"},
  discovery:{win:"IBB Ventures (4.8) and Stephan Grad (4.6) are standout calls. Aurel and Jara set clear agendas and outcomes matched. Pre-call clarity above 4 directly correlated with better outcomes.",gap:"Hotglue (3.4) and Org // Moss intro (3.1) both had no agenda and outcomes didn't match. Pre-call clarity of 2 = no objective = no commitment.",focus:"Before every discovery call: write one sentence — 'The outcome of this call should be X.' If you can't write it, you are not ready to join."},
  demo:{win:"Beke Kratzmann (Aurel, 4.9) had a clear agenda, full product demo, and the outcome matched exactly — agreement sent. Pre-call clarity of 5 was the differentiator.",gap:"Zedra (Alex, 3.9) had no agenda and ended with info sent rather than a next meeting. Pre-call clarity of 2 = no commitment ask prepared.",focus:"Before every demo: define the commitment ask — 'Which client would you refer first?' If you haven't prepared that answer, the call will end without a commitment."},
  management:{win:"Engagement is strong team-wide (4.5 avg). Jara's pipeline reviews are consistently detailed. Arthur Liebrecht and score business had clear agendas and outcomes matched.",gap:"Pre-call clarity below 3 on 8 of 13 management calls. MAP below 3 on the same calls. Partners are being checked in on, not managed.",focus:"Add MAP review as the standing first agenda item on every management call: 'Last time we agreed X — has that happened?' That one question is the difference between a management call and a catch-up."}
};

const REP_NEXT={
  Jara:[{p:"IBB Ventures",a:"Send lunch slots to Cindy",od:true},{p:"CCA",a:"Prep and send demo",od:false},{p:"BizAway",a:"Send API docs and SFTP integration roadmap",od:false},{p:"Bitesize",a:"Send freemium link; check prepayment handling",od:false},{p:"Supy",a:"Send summary; DATEV response timeline",od:false},{p:"score business",a:"Send API docs; confirm Jun 22 14:00",od:false},{p:"ESER Capital",a:"Send summary for Latif",od:false},{p:"WOW Company",a:"Lunch & learn walkthrough",od:false},{p:"One Company",a:"Send invoice; confirm API timeline",od:false},{p:"Poool",a:"Send calendar link for Clemens/Markus meeting",od:false},{p:"Arthur Liebrecht",a:"Send discussion summary",od:false}],
  Nicola:[{p:"Wussler & Schmid",a:"Speak with Raphael; schedule setup call",od:false},{p:"Argus Search",a:"Send NDA; check affiliate link",od:false},{p:"Miro Schmiedt",a:"Awaiting Umsatzsteuer-ID for contract",od:false},{p:"Patrick Schreiner",a:"Align next week once Patrick speaks with customer",od:false}],
  Ezer:[{p:"APA / Ross Batten",a:"Send calendar invite for Friday follow-up",od:false},{p:"Justis Vercoe",a:"Demo Wednesday 1:15pm — confirm attendees",od:false},{p:"Hotglue",a:"Follow up with clear next meeting proposal",od:true}],
  Alex:[{p:"Zedra",a:"Send costing and partnership tier details to Rahul",od:false},{p:"AMT / Kate",a:"Send short contract with commercials",od:false},{p:"Ideas Community",a:"Review deck Francesca sent",od:false}],
  Aurel:[{p:"Stephan Grad",a:"Confirm by email which companies are in contact",od:false},{p:"Beke Kratzmann",a:"Send Partner-Agreement and Marketing materials",od:false}]
};

const REP_COACH={
  Jara:{focus:"Pre-call clarity below 3 on most management calls. IBB Ventures lunch overdue.",strength:"Most active rep. Best management pipeline depth on the team."},
  Nicola:{focus:"MAP review and pre-call objectives missing on all management calls.",strength:"Discovery qualification is strong — Argus Search and Patrick Schreiner both 4.5+."},
  Ezer:{focus:"Hotglue has no confirmed next step. APA demo today — set commitment ask before joining.",strength:"Best sourcing call this month (APA, 4.7). Strong opener."},
  Alex:{focus:"Pre-call objectives missing on sourcing and demo calls. Zedra pricing still unsent.",strength:"AMT demo resulted in agreement sent. Ideas Community well-run."},
  Aurel:{focus:"Volume is low — 4 calls but highest avg score. Need more sourcing for Q3.",strength:"Best demo of the month (Beke 4.9). Pre-call clarity of 5 — best on team."}
};

/* ══════ HELPERS ══════ */
const OUT_LABELS={demo_booked:"Demo booked",discovery_booked:"Discovery booked",follow_up_call_booked:"Follow-up booked",referred_to_contact:"Referred",info_sent_no_meeting:"Info sent",disqualified:"Disqualified",no_next_step:"No next step",agreement_sent:"Agreement sent"};
const OUT_COLORS={demo_booked:"#2d6a4f",discovery_booked:"#52b788",follow_up_call_booked:"#74c69d",referred_to_contact:"#c07a14",info_sent_no_meeting:"#8a5c0a",disqualified:"#8b2e2e",no_next_step:"#6b2020",agreement_sent:"#1b4d36"};
const DC=['#c05c3a','#e8a99a','#c07a14','#74c69d','#2d6a4f'];
const DL=['<2','2-3','3-4','4-5','5'];
const gc='rgba(0,0,0,0.05)';
const base={responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}}};
const charts={};

function sc(v){return v>=4?'var(--accent)':v>=3?'var(--warn)':'var(--danger)';}
function bc(v){return v>=4?'#52b788':v>=3?'#c07a14':'#c05c3a';}
function cls(v){return v>=4?'green':v>=3?'amber':'red';}
function avg(arr){return arr.length?arr.reduce((a,b)=>a+b,0)/arr.length:0;}
function getWeek(d){const dt=new Date(d),day=dt.getDay(),diff=dt.getDate()-day+(day===0?-6:1);return new Date(dt.setDate(diff)).toISOString().slice(0,10);}
function distBands(data){const b=[0,0,0,0,0];data.forEach(c=>{if(c.score<2)b[0]++;else if(c.score<3)b[1]++;else if(c.score<4)b[2]++;else if(c.score<5)b[3]++;else b[4]++;});return b;}
function mkChart(id,type,data,opts,key){if(charts[key]){charts[key].data=data;charts[key].update();}else charts[key]=new Chart(document.getElementById(id),{type,data,options:opts});}
function outPill(o){return`<span class="pill" style="background:${OUT_COLORS[o]||'#888'}22;color:${OUT_COLORS[o]||'#888'}">${OUT_LABELS[o]||o}</span>`;}
function barHtml(s){return`<div class="bar-wrap"><div class="bar-fill" style="width:${(s/5*100).toFixed(0)}%;background:${bc(s)}"></div></div>`;}
function pcPill(v){if(!v)return'';const c=v>=4?'pill-green':v>=3?'pill-amber':'pill-red';const l=v>=4?'Ready':v>=3?'Partial':'No prep';return`<span class="pill ${c}">${l}</span>`;}
function kpiRow(data,extra){const as=avg(data.map(c=>c.score)),hi=data.filter(c=>c.score>=4).length,lo=data.filter(c=>c.score<3).length;return`<div class="kpi"><div class="kpi-label">Calls</div><div class="kpi-value">${data.length}</div></div><div class="kpi"><div class="kpi-label">Avg score</div><div class="kpi-value ${cls(as)}">${as.toFixed(1)}</div></div><div class="kpi"><div class="kpi-label">Scored 4+</div><div class="kpi-value green">${hi}</div></div><div class="kpi"><div class="kpi-label">Needs review</div><div class="kpi-value ${lo>0?'red':'green'}">${lo}</div></div>${extra}`;}
function commentaryHtml(tab){const c=COMMENTARY[tab];return`<div class="commentary-card win"><div class="commentary-label">Biggest win</div><div class="commentary-text">${c.win}</div></div><div class="commentary-card gap"><div class="commentary-label">Main gap</div><div class="commentary-text">${c.gap}</div></div><div class="commentary-card focus"><div class="commentary-label">Focus this week</div><div class="commentary-text">${c.focus}</div></div>`;}
function upcomingHtml(calls,repFilter){
  const filtered=repFilter&&repFilter!=='all'?calls.filter(c=>c.rep===repFilter||c.rep.includes(repFilter)):calls;
  if(!filtered.length)return'<div style="grid-column:1/-1;color:var(--text-tertiary);font-size:13px">No upcoming calls found for this week.</div>';
  const partner=filtered.filter(c=>c.type==='partner'),prospect=filtered.filter(c=>c.type==='prospect');
  const row=c=>`<div class="upcoming-row"><div class="call-info"><strong>${c.call}</strong> &middot; ${c.rep} &middot; ${c.date}<br><span style="color:var(--text-tertiary)">${c.prepNote}</span></div><span class="prep-flag ${c.prepFlag}">${c.prepFlag==='ok'?'Prepped':c.prepFlag==='warn'?'Check':'No prep'}</span></div>`;
  let html='';
  if(partner.length)html+=`<div class="upcoming-card"><div class="upcoming-title">Existing partners (${partner.length})</div>${partner.map(row).join('')}</div>`;
  if(prospect.length)html+=`<div class="upcoming-card"><div class="upcoming-title">New prospects (${prospect.length})</div>${prospect.map(row).join('')}</div>`;
  return html;
}
function repPanelHtml(rep){
  const ns=REP_NEXT[rep]||[];
  const coach=REP_COACH[rep];
  if(!coach)return'';
  const od=ns.filter(n=>n.od),up=ns.filter(n=>!n.od);
  return`<div class="rep-panel-title">${rep} - this week</div><div class="rep-panel-grid"><div><div class="rep-section-title">Next steps (${up.length})</div>${up.map(n=>`<div class="rep-item"><div class="rep-dot green"></div><div><strong>${n.p}:</strong> ${n.a}</div></div>`).join('')}</div><div><div class="rep-section-title">Overdue ${od.length?`<span class="overdue-badge">${od.length}</span>`:''}</div>${od.length?od.map(n=>`<div class="rep-item"><div class="rep-dot red"></div><div><strong>${n.p}:</strong> ${n.a}</div></div>`).join(''):'<div class="rep-item" style="color:var(--text-tertiary)">Nothing overdue</div>'}</div><div><div class="rep-section-title">Coaching</div><div class="rep-item"><div class="rep-dot amber"></div><div><strong>Focus:</strong> ${coach.focus}</div></div><div class="rep-item"><div class="rep-dot green"></div><div><strong>Strength:</strong> ${coach.strength}</div></div></div></div>`;
}
function insightsHtml(data,wBuckets,rBuckets){
  function bucket(t,bs){if(!t)return null;const tx=t.toLowerCase();for(const b of bs)if(b.k.some(k=>tx.includes(k)))return b.l;return null;}
  const wm={},rm={};
  data.forEach(c=>{const w=bucket(c.well,wBuckets);if(w)wm[w]=(wm[w]||0)+1;const r=bucket(c.wrong,rBuckets);if(r)rm[r]=(rm[r]||0)+1;});
  return`<div class="insight-card"><div class="insight-title green">What went well</div>${Object.entries(wm).sort((a,b)=>b[1]-a[1]).map(([t,n])=>`<div class="insight-row"><span class="badge green">${n}x</span>${t}</div>`).join('')||'<div class="insight-row" style="color:var(--text-tertiary)">No data</div>'}</div><div class="insight-card"><div class="insight-title red">What went wrong</div>${Object.entries(rm).sort((a,b)=>b[1]-a[1]).map(([t,n])=>`<div class="insight-row"><span class="badge red">${n}x</span>${t}</div>`).join('')||'<div class="insight-row" style="color:var(--text-tertiary)">No issues flagged</div>'}</div>`;
}

const S_WELL=[{l:"Strong qualification/ICP fit",k:["qualification","icp","fit","mutual"]},{l:"Meeting or referral secured",k:["booked","meeting","referral","next steps agreed"]},{l:"Clear value proposition",k:["explained","clear","proposition","rapport"]}];
const S_WRONG=[{l:"Meeting not locked on the call",k:["no meeting","not confirmed","not specific","no concrete","date"]},{l:"Weak qualification/poor research",k:["no qualification","limited qualification","not relevant"]},{l:"No agenda/pre-call objective",k:["no agenda","no pre-call","no objective"]}];
const D_WELL=[{l:"Agenda set, outcome matched",k:["agenda set","outcome matched","exactly"]},{l:"Strong ICP/client base confirmed",k:["qualification","icp","fit","client","segment"]},{l:"DM/champion identified",k:["decision maker","champion","dm","seniority"]},{l:"Demo or agreement locked",k:["booked","demo","agreement","confirmed"]}];
const D_WRONG=[{l:"No agenda/pre-call objective",k:["no agenda","no pre-call","no objective"]},{l:"DM not confirmed",k:["no direct","not confirmed","unclear","not ready","not on next call"]},{l:"Next step not locked",k:["no next","unclear next","not locked","no demo","no meeting"]}];
const E_WELL=[{l:"Agenda set, outcome matched",k:["agenda set","outcome matched","exactly"]},{l:"Use case validated",k:["use case","workflow","specific","validated","walkthrough"]},{l:"Agreement or commitment confirmed",k:["agreement","agreed","booked","confirmed"]}];
const E_WRONG=[{l:"No agenda/pre-call objective",k:["no agenda","no explicit","no objective","no clear"]},{l:"Commitment signal weak",k:["not ready","commitment","unclear","uncertainty","unresolved"]},{l:"Next step not confirmed",k:["no clear next","no next meeting","not confirmed"]}];
const M_WELL=[{l:"Agenda set, outcome matched",k:["agenda set","outcome matched","exactly","clear agenda"]},{l:"MAP reviewed - commitments checked",k:["map","MAP","commitments","agreed vs"]},{l:"Specific pipeline reviewed by name",k:["clients","pipeline","accounts","specific","named"]},{l:"Referral ask made",k:["refer","referral","which client","commitment"]}];
const M_WRONG=[{l:"No agenda/pre-call objective",k:["no agenda","no pre-call","no objective","no explicit"]},{l:"MAP not reviewed",k:["map not","MAP not","missing"]},{l:"No explicit referral ask",k:["no referral","no explicit","no commitment","no pipeline"]}];

/* ══════ EXIT CRITERIA ══════ */
// Sourcing → advance to Engaged?
function sourcingExit(c){
  const issues=[];
  if(c.score<3.5)issues.push('Overall score below 3.5 — qualification incomplete');
  if(c.Q<3)issues.push('Qualification weak — ICP not confirmed');
  if(c.M<3)issues.push('No meeting confirmed — cannot advance without a booked next step');
  if(c.O<3)issues.push('Opening score low — context not established');
  if(!issues.length&&['demo_booked','follow_up_call_booked','discovery_booked'].includes(c.outcome)){
    return{decision:'advance',label:'Advance to Engaged',cls:'pill-green',missing:[]};
  }
  if(issues.length){
    return{decision:'hold',label:'Hold — criteria not met',cls:'pill-red',missing:issues};
  }
  return{decision:'hold',label:'Hold — review needed',cls:'pill-amber',missing:['Outcome unclear — check next step']};
}

// Discovery → advance to Demo Booked?
function discoveryExit(c){
  const issues=[];
  if(c.score<4.0)issues.push('Overall score below 4.0');
  if(c.CH<4)issues.push('Champion / DM not confirmed (CH<4)');
  if(c.NS<4)issues.push('Next step not locked — demo not booked with date and right people');
  if(c.DA<3)issues.push('Access to decision moment too low (DA<3)');
  if(c.CB<3)issues.push('Customer base not confirmed (CB<3)');
  if(c.PC<3)issues.push('No pre-call objective — outcome match unclear');
  if(!issues.length){
    return{decision:'advance',label:'Advance to Demo Booked',cls:'pill-green',missing:[]};
  }
  // Hard block: NS<4 means no demo booked regardless of score
  if(c.NS<4){
    return{decision:'flag',label:'Flag — demo not locked',cls:'pill-red',missing:issues};
  }
  return{decision:'hold',label:'Hold — missing criteria',cls:'pill-amber',missing:issues};
}

// Demo → advance to Partnership Validation?
function demoExit(c){
  const issues=[];
  // UC<4 is a hard block per skill — use case is the foundation
  if(c.UC<4)issues.push('HARD BLOCK: Use case not confirmed (UC<4) — do not advance regardless of other signals');
  if(c.CO<3)issues.push('Commitment signal too low — partner has not signalled willingness to refer');
  if(c.VA<3)issues.push('Value recognition not confirmed — partner did not explicitly confirm relevance');
  if(c.WF<3)issues.push('Workflow fit unclear — activation may be hard');
  if(c.NS<3)issues.push('Next step not concrete — no clear path toward MAP or agreement');
  if(c.PC<3)issues.push('No pre-call objective — outcome match unclear');
  if(c.score<4.0)issues.push('Overall score below 4.0');
  if(!issues.length){
    return{decision:'advance',label:'Advance to Validation',cls:'pill-green',missing:[]};
  }
  if(c.UC<4){
    return{decision:'flag',label:'Flag — hard block on use case',cls:'pill-red',missing:issues};
  }
  return{decision:'hold',label:'Hold — missing criteria',cls:'pill-amber',missing:issues};
}

function exitPill(result){
  const tip=result.missing.length?`title="${result.missing.join(' | ')}"` :'';
  return`<span class="pill ${result.cls}" ${tip} style="cursor:${result.missing.length?'help':'default'}">${result.label}</span>`;
}

/* ══════ SOURCING ══════ */
function getSourcing(){const from=document.getElementById('sf-from').value,to=document.getElementById('sf-to').value,ctry=document.getElementById('sf-country').value,rep=document.getElementById('sf-rep').value;return SOURCING.filter(c=>{if(from&&c.date<from)return false;if(to&&c.date>to)return false;if(ctry!=='all'&&c.country!==ctry)return false;if(rep!=='all'&&c.rep!==rep)return false;return true;});}
function renderSourcing(){
  const data=getSourcing(),rep=document.getElementById('sf-rep').value;
  document.getElementById('s-commentary').innerHTML=commentaryHtml('sourcing');
  const panel=document.getElementById('s-rep-panel');
  if(rep!=='all'){panel.innerHTML=repPanelHtml(rep);panel.classList.add('visible');}else panel.classList.remove('visible');
  const mtg=data.filter(c=>['demo_booked','discovery_booked','follow_up_call_booked'].includes(c.outcome)).length;
  document.getElementById('s-kpis').innerHTML=kpiRow(data,`<div class="kpi"><div class="kpi-label">Meetings booked</div><div class="kpi-value green">${mtg}</div></div>`);
  mkChart('s-dist','bar',{labels:DL,datasets:[{data:distBands(data),backgroundColor:DC,borderWidth:0,borderRadius:3}]},{...base,scales:{y:{beginAtZero:true,ticks:{stepSize:1,font:{size:10}},grid:{color:gc}},x:{ticks:{font:{size:10}},grid:{display:false}}}},'sd');
  const cV=[avg(data.map(c=>c.O)),avg(data.map(c=>c.Q)),avg(data.map(c=>c.H)),avg(data.map(c=>c.M))].map(v=>+v.toFixed(1));
  mkChart('s-crit','bar',{labels:['Opening (w2)','Qualification (w3)','Objection (w2)','Meeting (w3)'],datasets:[{data:cV,backgroundColor:['#4a8ec2','#52b788','#c07a14','#c05c3a'],borderWidth:0,borderRadius:3}]},{...base,indexAxis:'y',scales:{x:{min:0,max:5,ticks:{stepSize:1,font:{size:10}},grid:{color:gc}},y:{ticks:{font:{size:10}},grid:{display:false}}}},'sc');
  const oc={};data.forEach(c=>{oc[c.outcome]=(oc[c.outcome]||0)+1;});const ok=Object.keys(oc).sort((a,b)=>oc[b]-oc[a]);
  mkChart('s-out','bar',{labels:ok.map(k=>OUT_LABELS[k]||k),datasets:[{data:ok.map(k=>oc[k]),backgroundColor:ok.map(k=>OUT_COLORS[k]||'#888'),borderWidth:0,borderRadius:3}]},{...base,indexAxis:'y',scales:{x:{beginAtZero:true,ticks:{stepSize:1,font:{size:10}},grid:{color:gc}},y:{ticks:{font:{size:10}},grid:{display:false}}}},'so');
  const wk={};data.forEach(c=>{const w=getWeek(c.date);if(!wk[w])wk[w]=[];wk[w].push(c.score);});const weeks=Object.keys(wk).sort();
  mkChart('s-trend','line',{labels:weeks.map(w=>w.slice(5)),datasets:[{data:weeks.map(w=>+avg(wk[w]).toFixed(1)),borderColor:'#2d6a4f',backgroundColor:'rgba(45,106,79,0.08)',tension:.35,fill:true,pointRadius:4,pointBackgroundColor:'#2d6a4f',borderWidth:2}]},{...base,scales:{y:{min:1,max:5,ticks:{stepSize:1,font:{size:10}},grid:{color:gc}},x:{ticks:{font:{size:10}},grid:{display:false}}}},'st');
  document.getElementById('s-insights').innerHTML=insightsHtml(data,S_WELL,S_WRONG);
  document.getElementById('s-upcoming').innerHTML=upcomingHtml(UPCOMING.sourcing,rep);
  const reps={};data.forEach(c=>{if(!reps[c.rep])reps[c.rep]={n:0,s:0,O:0,Q:0,H:0,M:0,country:c.country};reps[c.rep].n++;reps[c.rep].s+=c.score;reps[c.rep].O+=c.O;reps[c.rep].Q+=c.Q;reps[c.rep].H+=c.H;reps[c.rep].M+=c.M;});
  document.getElementById('s-reps').innerHTML=Object.entries(reps).sort((a,b)=>b[1].n-a[1].n).map(([name,d],i)=>{const a=d.s/d.n,v=[d.O/d.n,d.Q/d.n,d.H/d.n,d.M/d.n];const cr=['Opening','Qualification','Objection','Meeting'];return`<tr><td class="td-muted">${i+1}</td><td style="font-weight:600">${name}</td><td class="td-muted">${d.country}</td><td style="font-weight:600">${d.n}</td><td><span class="td-score ${cls(a)}">${a.toFixed(1)}</span></td><td><span class="pill pill-green">${cr[v.indexOf(Math.max(...v))]}</span></td><td><span class="pill pill-red">${cr[v.indexOf(Math.min(...v))]}</span></td>${v.map(x=>`<td style="color:${sc(x)};font-family:var(--mono);font-size:12px">${x.toFixed(1)}</td>`).join('')}</tr>`;}).join('');
  document.getElementById('s-calls').innerHTML=[...data].sort((a,b)=>b.score-a.score).map(c=>{const ex=sourcingExit(c);return`<tr><td style="font-weight:500;max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.title}</td><td class="td-muted">${c.rep}</td><td class="td-muted">${c.date.slice(5)}</td><td class="td-muted">${c.dur}</td><td style="color:${sc(c.O)};font-family:var(--mono);font-size:12px">${c.O}</td><td style="color:${sc(c.Q)};font-family:var(--mono);font-size:12px">${c.Q}</td><td style="color:${sc(c.H)};font-family:var(--mono);font-size:12px">${c.H}</td><td style="color:${sc(c.M)};font-family:var(--mono);font-size:12px">${c.M}</td><td><span class="td-score ${cls(c.score)}">${c.score.toFixed(1)}</span></td><td>${outPill(c.outcome)}</td><td>${exitPill(ex)}</td><td>${barHtml(c.score)}</td></tr>`;}).join('');
}

/* ══════ DISCOVERY ══════ */
function getDiscovery(){const from=document.getElementById('df-from').value,to=document.getElementById('df-to').value,rep=document.getElementById('df-rep').value;return DISCOVERY.filter(c=>{if(from&&c.date<from)return false;if(to&&c.date>to)return false;if(rep!=='all'&&c.rep!==rep)return false;return true;});}
function renderDiscovery(){
  const data=getDiscovery(),rep=document.getElementById('df-rep').value;
  document.getElementById('d-commentary').innerHTML=commentaryHtml('discovery');
  const panel=document.getElementById('d-rep-panel');
  if(rep!=='all'){panel.innerHTML=repPanelHtml(rep);panel.classList.add('visible');}else panel.classList.remove('visible');
  const pcAvg=avg(data.map(c=>c.PC));
  document.getElementById('d-kpis').innerHTML=`<div class="kpi"><div class="kpi-label">Calls</div><div class="kpi-value">${data.length}</div></div><div class="kpi"><div class="kpi-label">Avg score</div><div class="kpi-value ${cls(avg(data.map(c=>c.score)))}">${avg(data.map(c=>c.score)).toFixed(1)}</div></div><div class="kpi"><div class="kpi-label">Scored 4+</div><div class="kpi-value green">${data.filter(c=>c.score>=4).length}</div></div><div class="kpi"><div class="kpi-label">Demo/agreement</div><div class="kpi-value green">${data.filter(c=>['demo_booked','agreement_sent'].includes(c.outcome)).length}</div></div><div class="kpi"><div class="kpi-label">Pre-call avg</div><div class="kpi-value ${cls(pcAvg)}">${pcAvg.toFixed(1)}</div></div>`;
  mkChart('d-dist','bar',{labels:DL,datasets:[{data:distBands(data),backgroundColor:DC,borderWidth:0,borderRadius:3}]},{...base,scales:{y:{beginAtZero:true,ticks:{stepSize:1,font:{size:10}},grid:{color:gc}},x:{ticks:{font:{size:10}},grid:{display:false}}}},'dd');
  const cV=[avg(data.map(c=>c.CB)),avg(data.map(c=>c.DA)),avg(data.map(c=>c.CH)),avg(data.map(c=>c.GE)),avg(data.map(c=>c.NS)),avg(data.map(c=>c.PC))].map(v=>+v.toFixed(1));
  mkChart('d-crit','bar',{labels:['Cust base (w3)','Dec access (w3)','Champion (w3)','Geography (w2)','Next step (w3)','Pre-call (w2)'],datasets:[{data:cV,backgroundColor:['#52b788','#4a8ec2','#c05c3a','#c07a14','#7c5cbf','#2c5f7a'],borderWidth:0,borderRadius:3}]},{...base,indexAxis:'y',scales:{x:{min:0,max:5,ticks:{stepSize:1,font:{size:10}},grid:{color:gc}},y:{ticks:{font:{size:10}},grid:{display:false}}}},'dc');
  document.getElementById('d-insights').innerHTML=insightsHtml(data,D_WELL,D_WRONG);
  document.getElementById('d-upcoming').innerHTML=upcomingHtml(UPCOMING.discovery,rep);
  const reps={};data.forEach(c=>{if(!reps[c.rep])reps[c.rep]={n:0,s:0,CB:0,DA:0,CH:0,GE:0,NS:0,PC:0};reps[c.rep].n++;reps[c.rep].s+=c.score;['CB','DA','CH','GE','NS','PC'].forEach(k=>reps[c.rep][k]+=c[k]);});
  document.getElementById('d-reps').innerHTML=Object.entries(reps).sort((a,b)=>b[1].n-a[1].n).map(([name,d],i)=>{const a=d.s/d.n;return`<tr><td class="td-muted">${i+1}</td><td style="font-weight:600">${name}</td><td style="font-weight:600">${d.n}</td><td><span class="td-score ${cls(a)}">${a.toFixed(1)}</span></td>${['CB','DA','CH','GE','NS','PC'].map(k=>`<td style="color:${sc(d[k]/d.n)};font-family:var(--mono);font-size:12px">${(d[k]/d.n).toFixed(1)}</td>`).join('')}</tr>`;}).join('');
  document.getElementById('d-calls').innerHTML=[...data].sort((a,b)=>b.score-a.score).map(c=>{const ex=discoveryExit(c);return`<tr><td style="font-weight:500;max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.title}</td><td class="td-muted">${c.rep}</td><td class="td-muted">${c.date.slice(5)}</td><td class="td-muted">${c.dur}</td>${['CB','DA','CH','GE','NS'].map(k=>`<td style="color:${sc(c[k])};font-family:var(--mono);font-size:12px">${c[k]}</td>`).join('')}<td style="font-family:var(--mono);font-size:12px;color:${sc(c.PC)}">${c.PC}</td><td><span class="td-score ${cls(c.score)}">${c.score.toFixed(1)}</span></td><td>${outPill(c.outcome)}</td><td>${exitPill(ex)}</td><td>${barHtml(c.score)}</td></tr>`;}).join('');
}

/* ══════ DEMO ══════ */
function getDemo(){const from=document.getElementById('emf-from').value,to=document.getElementById('emf-to').value,rep=document.getElementById('emf-rep').value;return DEMO.filter(c=>{if(from&&c.date<from)return false;if(to&&c.date>to)return false;if(rep!=='all'&&c.rep!==rep)return false;return true;});}
function renderDemo(){
  const data=getDemo(),rep=document.getElementById('emf-rep').value;
  document.getElementById('em-commentary').innerHTML=commentaryHtml('demo');
  const panel=document.getElementById('em-rep-panel');
  if(rep!=='all'){panel.innerHTML=repPanelHtml(rep);panel.classList.add('visible');}else panel.classList.remove('visible');
  const pcAvg=avg(data.map(c=>c.PC));
  document.getElementById('em-kpis').innerHTML=`<div class="kpi"><div class="kpi-label">Calls</div><div class="kpi-value">${data.length}</div></div><div class="kpi"><div class="kpi-label">Avg score</div><div class="kpi-value ${cls(avg(data.map(c=>c.score)))}">${avg(data.map(c=>c.score)).toFixed(1)}</div></div><div class="kpi"><div class="kpi-label">Scored 4+</div><div class="kpi-value green">${data.filter(c=>c.score>=4).length}</div></div><div class="kpi"><div class="kpi-label">Agreements sent</div><div class="kpi-value green">${data.filter(c=>c.outcome==='agreement_sent').length}</div></div><div class="kpi"><div class="kpi-label">Pre-call avg</div><div class="kpi-value ${cls(pcAvg)}">${pcAvg.toFixed(1)}</div></div>`;
  mkChart('em-dist','bar',{labels:DL,datasets:[{data:distBands(data),backgroundColor:DC,borderWidth:0,borderRadius:3}]},{...base,scales:{y:{beginAtZero:true,ticks:{stepSize:1,font:{size:10}},grid:{color:gc}},x:{ticks:{font:{size:10}},grid:{display:false}}}},'emd');
  const cV=[avg(data.map(c=>c.UC)),avg(data.map(c=>c.VA)),avg(data.map(c=>c.WF)),avg(data.map(c=>c.CO)),avg(data.map(c=>c.NS)),avg(data.map(c=>c.PC))].map(v=>+v.toFixed(1));
  mkChart('em-crit','bar',{labels:['Use case (w4)','Value (w3)','Workflow (w3)','Commitment (w3)','Next step (w2)','Pre-call (w2)'],datasets:[{data:cV,backgroundColor:['#2d6a4f','#4a8ec2','#c07a14','#7c5cbf','#c05c3a','#2c5f7a'],borderWidth:0,borderRadius:3}]},{...base,indexAxis:'y',scales:{x:{min:0,max:5,ticks:{stepSize:1,font:{size:10}},grid:{color:gc}},y:{ticks:{font:{size:10}},grid:{display:false}}}},'emc');
  document.getElementById('em-insights').innerHTML=insightsHtml(data,E_WELL,E_WRONG);
  document.getElementById('em-upcoming').innerHTML=upcomingHtml(UPCOMING.demo,rep);
  const reps={};data.forEach(c=>{if(!reps[c.rep])reps[c.rep]={n:0,s:0,UC:0,VA:0,WF:0,CO:0,NS:0,PC:0};reps[c.rep].n++;reps[c.rep].s+=c.score;['UC','VA','WF','CO','NS','PC'].forEach(k=>reps[c.rep][k]+=c[k]);});
  document.getElementById('em-reps').innerHTML=Object.entries(reps).sort((a,b)=>b[1].n-a[1].n).map(([name,d],i)=>{const a=d.s/d.n;return`<tr><td class="td-muted">${i+1}</td><td style="font-weight:600">${name}</td><td style="font-weight:600">${d.n}</td><td><span class="td-score ${cls(a)}">${a.toFixed(1)}</span></td>${['UC','VA','WF','CO','NS','PC'].map(k=>`<td style="color:${sc(d[k]/d.n)};font-family:var(--mono);font-size:12px">${(d[k]/d.n).toFixed(1)}</td>`).join('')}</tr>`;}).join('');
  document.getElementById('em-calls').innerHTML=[...data].sort((a,b)=>b.score-a.score).map(c=>{const ex=demoExit(c);return`<tr><td style="font-weight:500;max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.title}</td><td class="td-muted">${c.rep}</td><td class="td-muted">${c.date.slice(5)}</td><td class="td-muted">${c.dur}</td>${['UC','VA','WF','CO','NS'].map(k=>`<td style="color:${sc(c[k])};font-family:var(--mono);font-size:12px">${c[k]}</td>`).join('')}<td style="font-family:var(--mono);font-size:12px;color:${sc(c.PC)}">${c.PC}</td><td><span class="td-score ${cls(c.score)}">${c.score.toFixed(1)}</span></td><td>${outPill(c.outcome)}</td><td>${exitPill(ex)}</td><td>${barHtml(c.score)}</td></tr>`;}).join('');
}

/* ══════ MANAGEMENT ══════ */
function getMgmt(){const from=document.getElementById('mf-from').value,to=document.getElementById('mf-to').value,rep=document.getElementById('mf-rep').value;return MANAGEMENT.filter(c=>{if(from&&c.date<from)return false;if(to&&c.date>to)return false;if(rep!=='all'&&c.rep!==rep)return false;return true;});}
function renderMgmt(){
  const data=getMgmt(),rep=document.getElementById('mf-rep').value;
  document.getElementById('m-commentary').innerHTML=commentaryHtml('management');
  const panel=document.getElementById('m-rep-panel');
  if(rep!=='all'){panel.innerHTML=repPanelHtml(rep);panel.classList.add('visible');}else panel.classList.remove('visible');
  const mapLow=data.filter(c=>c.M<3).length,pcLow=data.filter(c=>c.PC<3).length,pcAvg=avg(data.map(c=>c.PC));
  document.getElementById('m-alert').innerHTML=mapLow>0||pcLow>0?`<div class="alert-card"><p class="alert-title">${mapLow} calls with weak MAP + ${pcLow} calls with no pre-call objective</p><p class="alert-body">These are the two main drivers of whether a partner will refer. No MAP = no accountability. No pre-call objective = no commitment ask.</p></div>`:'';
  document.getElementById('m-kpis').innerHTML=`<div class="kpi"><div class="kpi-label">Calls</div><div class="kpi-value">${data.length}</div></div><div class="kpi"><div class="kpi-label">Avg score</div><div class="kpi-value ${cls(avg(data.map(c=>c.score)))}">${avg(data.map(c=>c.score)).toFixed(1)}</div></div><div class="kpi"><div class="kpi-label">MAP reviewed</div><div class="kpi-value ${mapLow>0?'amber':'green'}">${data.length-mapLow}/${data.length}</div></div><div class="kpi"><div class="kpi-label">Pre-call set</div><div class="kpi-value ${pcLow>0?'red':'green'}">${data.length-pcLow}/${data.length}</div></div><div class="kpi"><div class="kpi-label">Pre-call avg</div><div class="kpi-value ${cls(pcAvg)}">${pcAvg.toFixed(1)}</div></div>`;
  mkChart('m-dist','bar',{labels:DL,datasets:[{data:distBands(data),backgroundColor:DC,borderWidth:0,borderRadius:3}]},{...base,scales:{y:{beginAtZero:true,ticks:{stepSize:1,font:{size:10}},grid:{color:gc}},x:{ticks:{font:{size:10}},grid:{display:false}}}},'md');
  const cV=[avg(data.map(c=>c.P)),avg(data.map(c=>c.M)),avg(data.map(c=>c.B)),avg(data.map(c=>c.E)),avg(data.map(c=>c.C)),avg(data.map(c=>c.N)),avg(data.map(c=>c.PC))].map(v=>+v.toFixed(1));
  mkChart('m-crit','bar',{labels:['Pipeline (w3)','MAP (w3)','Blocker (w3)','Engagement (w2)','Competitive (w2)','Next step (w2)','Pre-call (w2)'],datasets:[{data:cV,backgroundColor:cV.map((v,i)=>i===6?'#2c5f7a':v>=4?'#52b788':v>=3?'#c07a14':'#c05c3a'),borderWidth:0,borderRadius:3}]},{...base,indexAxis:'y',scales:{x:{min:0,max:5,ticks:{stepSize:1,font:{size:10}},grid:{color:gc}},y:{ticks:{font:{size:10}},grid:{display:false}}}},'mc');
  document.getElementById('m-insights').innerHTML=insightsHtml(data,M_WELL,M_WRONG);
  document.getElementById('m-upcoming').innerHTML=upcomingHtml(UPCOMING.management,rep);
  const reps={};data.forEach(c=>{if(!reps[c.rep])reps[c.rep]={n:0,s:0,P:0,M:0,B:0,E:0,C:0,N:0,PC:0};reps[c.rep].n++;reps[c.rep].s+=c.score;['P','M','B','E','C','N','PC'].forEach(k=>reps[c.rep][k]+=c[k]);});
  document.getElementById('m-reps').innerHTML=Object.entries(reps).sort((a,b)=>b[1].n-a[1].n).map(([name,d],i)=>{const a=d.s/d.n;return`<tr><td class="td-muted">${i+1}</td><td style="font-weight:600">${name}</td><td style="font-weight:600">${d.n}</td><td><span class="td-score ${cls(a)}">${a.toFixed(1)}</span></td>${['P','M','B','E','C','N','PC'].map(k=>`<td style="color:${sc(d[k]/d.n)};font-family:var(--mono);font-size:12px">${(d[k]/d.n).toFixed(1)}</td>`).join('')}</tr>`;}).join('');
  document.getElementById('m-calls').innerHTML=[...data].sort((a,b)=>b.score-a.score).map(c=>`<tr><td style="font-weight:500;max-width:130px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.title}</td><td class="td-muted">${c.rep}</td><td class="td-muted">${c.date.slice(5)}</td><td class="td-muted">${c.dur}</td>${['P','M','B','E','C','N'].map(k=>`<td style="color:${sc(c[k])};font-family:var(--mono);font-size:12px">${c[k]}</td>`).join('')}<td style="font-family:var(--mono);font-size:12px;color:${sc(c.PC)}">${c.PC}</td><td><span class="td-score ${cls(c.score)}">${c.score.toFixed(1)}</span></td><td>${barHtml(c.score)}</td></tr>`).join('');
}

/* ══════ PIPELINE ══════ */
function renderPipeline(){
  mkChart('p-vol','bar',{
    labels:['Jara','Nicola','Ezer','Alex','Aurel'],
    datasets:[
      {label:'Mgmt calls',data:[7,6,0,0,0],backgroundColor:'#52b788',borderWidth:0,borderRadius:3},
      {label:'Jun SQLs',data:[9,8,1,1,4],backgroundColor:'#4a8ec2',borderWidth:0,borderRadius:3}
    ]
  },{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:true,labels:{font:{size:10},boxWidth:10}}},scales:{y:{beginAtZero:true,ticks:{font:{size:10}},grid:{color:gc}},x:{ticks:{font:{size:10}},grid:{display:false}}}},'pv');
  mkChart('p-map','bar',{
    labels:['Jara','Nicola'],
    datasets:[{data:[3.7,3.1],backgroundColor:['#c07a14','#c05c3a'],borderWidth:0,borderRadius:3}]
  },{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{min:0,max:5,ticks:{stepSize:1,font:{size:10}},grid:{color:gc}},x:{ticks:{font:{size:10}},grid:{display:false}}}},'pm');
  mkChart('p-sql','bar',{
    labels:['Jan','Feb','Mar','Apr','May','Jun'],
    datasets:[
      {label:'DE',data:[25,34,36,28,25,11],backgroundColor:'#52b788',borderWidth:0,borderRadius:3},
      {label:'GB',data:[4,4,5,4,1,2],backgroundColor:'#c05c3a',borderWidth:0,borderRadius:3},
      {label:'NL',data:[9,9,15,9,9,7],backgroundColor:'#4a8ec2',borderWidth:0,borderRadius:3}
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
  if(tab.dataset.tab==='pipeline')renderPipeline();
});});
['sf-from','sf-to','sf-country','sf-rep'].forEach(id=>document.getElementById(id).addEventListener('change',renderSourcing));
['df-from','df-to','df-rep'].forEach(id=>document.getElementById(id).addEventListener('change',renderDiscovery));
['emf-from','emf-to','emf-rep'].forEach(id=>document.getElementById(id).addEventListener('change',renderDemo));
['mf-from','mf-to','mf-rep'].forEach(id=>document.getElementById(id).addEventListener('change',renderMgmt));
renderSourcing();
