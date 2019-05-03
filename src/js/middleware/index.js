//We need to take an object (dispatch object)
//and return a function that can accept another middleware
// then it will do your stuff, apply the other middleware to the object, and return that.
import { ADD_ARTICLE, FOUND_BAD_WORD} from '../constants/action-types';
//ADD A NEW ACTION TO HANDLE WHAT WE DO WHEN WE FIND BAD WORDS.

const forbiddenWords = ["spam","money"];

export function forbiddenWordsMiddleware({ dispatch }){
	//DISPATCH PARAM GIVES US ACCESS TO THE DISPATCH PART OF THE STORE OBJECT
	return function(next){
		return function(action){
			//WHEN THIS IS FINALLY CURRIED TOGETHER, WE WILL RECEIVE A SPECIFIC ACTION
			if(action.type === ADD_ARTICLE){
				//THE ACTION IS THE SAME AS THE ACTION THAT GETS PASSED TO THE REDUCER
				const foundWord = forbiddenWords.filter(word => 
					action.payload.title.toLowerCase().includes(word)
				);
				if(foundWord.length) {
					//INSTEAD OF CALLING NEXT, WE DISPATCH A DIFFERENT ACTION.
					return dispatch({type: FOUND_BAD_WORD,words:foundWord})
				};
			}
			//AFTER WE ARE DONE WITH ANY PROCESSING, CALL THE NEXT FUNCTION ON OUR ACTION
			//IF WE DON'T DO THIS, APP WILL STOP AND NO FURTHER ACTIONS WILL REACH REDUCER
			return next(action);
		}
	}
}
