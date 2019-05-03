import { ADD_ARTICLE, FOUND_BAD_WORD } from '../constants/action-types';

const initialState = {
	articles: []
}

//REDUCERS ARE THE ONLY WAY TO CHANGE STATE (WHAT IS IN THE STORE) IN REDUX.
//REDUCERS MUST BE PURE FUNCTIONS -- NO SIDE EFFECTS, NO NON-DETERMINISM
//DO NOT AFFECT STATE IN PLACE -- MAKE COPIES AS NEEDED
function rootReducer(state = initialState, action){
	switch(action.type){
		case ADD_ARTICLE:
			//DON'T MUTATE STATE
			//USE OBJECT.ASSIGN TO CREATE NEW COPY
			//THEN INSIDE STATE CONCAT OLD ARTICLES WITH NEW ARTICLES (I.E, the payload of the action)
			//SHOULD USE concat(), slice(), ...spread for arrays
			//Object.assign(), ...spread for objects
			return Object.assign({}, state, {
				articles: state.articles.concat(action.payload),
				error: null
			});
			//SAME AS:
			/*
			return {
				...state,
				articles: state.articles.concat(action.payload)
			}
			*/
			break;
		case FOUND_BAD_WORD:
			return {
				...state,
				error: action.words.slice()
			}
			break;
	}
	return state; //RETURN OUR INITIAL STATE
}

export default rootReducer;