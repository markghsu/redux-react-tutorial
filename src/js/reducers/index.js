const initialState = {
	articles: []
}

//REDUCERS ARE THE ONLY WAY TO CHANGE STATE (WHAT IS IN THE STORE) IN REDUX.
//REDUCERS MUST BE PURE FUNCTIONS -- NO SIDE EFFECTS, NO NON-DETERMINISM
//DO NOT AFFECT STATE IN PLACE -- MAKE COPIES AS NEEDED
function rootReducer(state = initialState, action){
	return state; //RETURN OUR INITIAL STATE
}

export default rootReducer;