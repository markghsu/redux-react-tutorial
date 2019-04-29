//ACTIONS ARE JUST OBJECTS WITH TYPE/PAYLOAD:
/*
{
  type: 'ADD_ARTICLE',
  payload: { title: 'React Redux Tutorial', id: 1 }
}
*/
//THEY DEFINE SOMETHING PARAMETERS THAT A REDUCER CAN USE TO CHANGE STATE.
//ACTION CREATORS ARE FUNCTIONS THAT CREATE ACTION. MAKE IT MORE MODULAR
export function addArticle(payload){
	return {
		type:'ADD_ARTICLE', //by convention this is all caps
		payload //same as payload: payload
	}
}