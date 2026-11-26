// Intentional separate learner bug. The supplied adapter does not use this.
// Input is untrusted JSON text; return true only for the exact scenario contract.
import {coachScenario} from '../src/scenarios.mjs';

export function acceptAnswer(text,scenarioId){
  const scenario=coachScenario(scenarioId);
  if(!scenario)return false;
  try {
    const answer=JSON.parse(text);
    if(!answer||typeof answer!=='object'||Array.isArray(answer))return false;
    const fields=Object.keys(answer);
    if(fields.length!==4||!['kind','ruleId','cardId','explanation'].every(field=>fields.includes(field)))return false;
    return answer.kind===scenario.kind&&answer.ruleId===scenario.rule&&
      answer.cardId===(scenario.kind==='suggest'?'practice-red-3':null)&&
      typeof answer.explanation==='string'&&answer.explanation.length>=10&&answer.explanation.length<=1200;
  }
  catch{return false;}
}
