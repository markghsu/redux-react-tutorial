//ACTIONS ARE JUST OBJECTS WITH TYPE:
/*
{
  type: 'ADD_ARTICLE',
  payload: { title: 'React Redux Tutorial', id: 1 }
}
*/
//THEY DEFINE SOMETHING PARAMETERS THAT A REDUCER CAN USE TO CHANGE STATE.
//ACTION CREATORS ARE FUNCTIONS THAT CREATE ACTION. MAKE IT MORE MODULAR

import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types';
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