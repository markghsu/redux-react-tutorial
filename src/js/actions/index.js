//ACTIONS ARE JUST OBJECTS WITH TYPE:
/*
{
  type: 'ADD_ARTICLE',
  payload: { title: 'React Redux Tutorial', id: 1 }
}
*/
//THEY DEFINE SOMETHING PARAMETERS THAT A REDUCER CAN USE TO CHANGE STATE.
//ACTION CREATORS ARE FUNCTIONS THAT CREATE ACTION. MAKE IT MORE MODULAR

import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED } from '../constants/action-types';
export function addArticle(payload){
	return {
		type:ADD_ARTICLE, //use constant to prevent typos
		payload //same as payload: payload
	}
}
export function foundBadWord(words){
	return {
		type:FOUND_BAD_WORD,
		words
	}
}
//RETURNS A "THUNK" INSTEAD OF AN ACTION. REDUX-THUNK WILL THEN EXECUTE THIS FUNCTION
//(AND PASS IT DISPATCH). BECAUSE WE HAVE AN ASYNC ACTION, WE DON'T ACTUALLY 
//RETURN AN ACTION. INSTEAD, THE EXISTING "ACTION" (getData) FINISHES
//AND THEN A NEW ACTION IS DISPATCHED WHEN THE PROMISE RESOLVES
//WE CAN ALSO HAVE AN ERROR ACTION THAT IS PASSED WHEN THE FUNCTION RESOLVES
export function getData() {
	//THIS THUNK IS CALLED BY THE redux-thunk middleware
	return function(dispatch) {
		return fetch("https://jsonplaceholder.typicode.com/posts")
		.then(response => response.json())
		.then(jsonresponse => {
			//WE WANT TO CALL DISPATCH HERE, AS OUR ASYNC ACTION REQUIRES US TO DISPATCH A NEW ACTION ON RESOLUTION
			dispatch({ type: DATA_LOADED, payload: jsonresponse });
		});
	}
}