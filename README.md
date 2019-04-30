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
- connects actions that need to be dispatched to components, again through props
- Component can then dispatch actions to Store.
- mapDispatchToProps will be give the `dispatch` function of the Store. we need to take that, and for every prop we need, we list them in the return object. each prop will then map to a function that actually calls the dispatch with the correct action as needed.