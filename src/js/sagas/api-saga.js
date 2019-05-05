import {takeEvery, call, put} from 'redux-saga/effects';

//TAKE EVERY ACTION NAMED DATA_REQUESTED AND FOR EACH ACTION, CREATE A WORKER
//IN EACH WORKER, CALL GETDATA FUNCTION
//IF SUCCESS - DATA_LOADED
//IF FAILURE - API_ERRORED
//(PUT ~ DISPATCH)

export default function* watcherSaga() {
	yield takeEvery("DATA_REQUESTED",workerSaga);
}

function* workerSaga(){
	try {
		const payload = yield call(getData);
		yield put({type: "DATA_LOADING_SUCCESS",payload});
	} catch (e) {
		yield put({type: "DATA_LOADING_FAILURE", error:e});
	}
}

function getData(){
	return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
	    response.json()
	  );
}