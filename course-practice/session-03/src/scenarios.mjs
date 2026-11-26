export const COACH_SCENARIOS=Object.freeze([
  {id:'players',rule:'players',kind:'explain'},
  {id:'stacking',rule:'stacking',kind:'explain'},
  {id:'scoring',rule:'scoring',kind:'explain'},
  {id:'suggest',rule:'turn',kind:'suggest'},
  {id:'hidden',rule:null,kind:'ask'},
  {id:'injection',rule:null,kind:'ask'},
].map(Object.freeze));
export const coachScenario=id=>COACH_SCENARIOS.find(s=>s.id===id);
