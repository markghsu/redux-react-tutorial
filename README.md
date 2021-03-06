Follows the tutorial from https://www.valentinog.com/blog/redux/
__To Run, use command `node ./node_modules/react-scripts/bin/react-scripts.js start`__ (due to project creation while offline, didn't have access to react-create-app)
3 main parts to redux library
- Store
- Reducer
- Action

#### Store
- Keeps track of state of entire application
- 3 main functions:
	- getState: get the current state
	- dispatch: dispatch a specific action
	- subscribe: listen for state changes

#### Reducer
- Takes Actions and uses them to change state
- Must be PURE functions - deterministic with no side effects.
- Don't modify existing state, use ...spread,concat,Object.assign,etc. to make shallow copies of exising state.
- Should be idemopotent?

#### Action
- Simple JS Object, with 'type' property
- ActionCreators are functions that return actions


### react-redux
- library to link together react/redux in an efficient way: Takes care of binding of dispatch, subscribe, getState.
- Main method is `connect`
- takes two argument functions: `mapStateToProps`,`mapDispatchToProps`
- Also use __Provider__: wrapper for the entire application that gives it knowledge of the Redux Store.

#### connect
- curries `mapStateToProps`,`mapDispatchToProps` and then a component
-`const myConnectedComponent = connect(mapStateToProps,mapDispatchToProps)(myComponent)`

#### mapStateToProps
- connects part of state in the store to props of a component so they will have exact access to the part of the store they need.
- binds subscribe/getState so that the props of the component will change as the state changes, forcing react to redraw as needed.
- function returns an obj where each property is a prop name, and the value is what it's accessing in the store

#### mapDispatchToProps
- By default, if we don't use mapDispatchToProps, our component will automatically get `this.props.dispatch`, which lets us dispatch actions from the component directly.
- Connects actions that need to be dispatched to components, again through props, but DECLARATIVELY: `<button onClick={doSomething} />` is better than having button explicitly dispatch an action.
- Once we have mapDispatch, we no longer get dispatch as a prop.
- mapDispatchToProps will be give the `dispatch` function of the Store. we need to take that, and for every prop we need, we list them in the return object. each prop will then map to a function that actually calls the dispatch with the correct action as needed.
- Two styles: function, and object shorthand.
- function lets us define more stuff (pass args, interact with other props, etc.) can also use bindActionCreators to do boilerplate things.
- 

### Middleware
- Middleware allows us to do things with actions PRIOR to the reducer being called.
- We can do data-validation, including dispatching different actions, changing data-flow, logging, etc.
- We could have done this in our view layer (i.e., inside react), but that muddies our separation of concerns. We should instead do this inside of Redux.
- Middlewares are reusable, testable in isolation
- Middleware relies on Currying functions - we can then chain middleware calls together.

#### redux-thunk
- a __Thunk__ is a function that's wrapped in another function. e.g.
````javascript
function wrapper_function() {
	return function thunk(){
		console.log('do stuff now');
	};
}
````
This lets us pass the inner function around, delay execution, etc. to actually DO the thunk, we use: `wrapper_function()()`.
- redux-thunk is a middleware that looks at every "action" passed to it, and if the action is actually a function instead of an action, it calls the function.
- redux will pass `dispatch` and `getState` to each "thunk", so they can dispatch new actions and use getState as needed.
- So our action creators can now pass a "thunk" which does some side effect type work - promises/async/api calls, which will then be executed by the middleware. Then, once the promise is completed we can dispatch our actual action.
- Our api calls (using fetch) can be written as a set of 3 actions: 1. BEGIN (before API is called, this action will be thunked to call the API) 2. SUCCESS (after API promise successfully resolves) 3. FAILURE (after API promise resolves in error/failure).
