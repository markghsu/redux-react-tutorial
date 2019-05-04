import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions/index'

function mapDispatchToProps(dispatch/*optionally could get ownprops here*/) {
	//FUNCTIONAL FORM OF mapDispatchToProps

	//need to return an object
	//where every property is the name of a prop in our component
	//since this prop is a function
	//we return a function that calls DISPATCH (which will be passed from `connect`)
	//along with the action (created using our actionCreator from the action js folder)
	//we want to explicitly state the param we need and forward that param to the action creator.
	return {
		addArticle: article => dispatch(addArticle(article))//by convention, name prop same as action creator
	};
}

function mapStateToProps(state) {
	return {
		error: state.error
	}
}

class ConnectedForm extends Component {
	constructor() {
		super();
		this.num = 0;
		this.state = {
			title: ''
		};

		//bind our `this` so we can use the handleChange and handleSubmit
		//functions to handle our changing and submitting
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	nextNumber(){
		this.num++;
		return this.num;
	}
	handleChange(event) {
		//our state contains all of the fields of the form
		//each field is it's own property, with the value of the field as the value
		this.setState({ [event.target.id]:event.target.value });
	}

	handleSubmit(event){
		event.preventDefault();//DON'T ALLOw ACTUAL EVENT SUBMISSION
		const { title } = this.state;
		const id = this.nextNumber();
		//THE ACTION WILL BE PASSED TO US AS A PROP, FROM mapDispatchToProps
		this.props.addArticle({title, id});
		this.setState({title: ''}); //reset our state to empty
		//@TODO: can we auto clear all fields?
	}

	render() {
		const { title } = this.state;
		const error = (this.props.error)?(<div className="has-error"><span className="help-block">The following forbidden words were submitted: {this.props.error.toString()}</span></div>):"";
		return (
			<form onSubmit={this.handleSubmit}>
				{error}
				<div className="form-group">
					<label htmlFor="title">Title</label>
					<input 
						type="text"
						className="form-control"
						id="title"
						value={title}
						onChange={this.handleChange}
					/>
				</div>
				<button type="submit" className="btn btn-success btn-lg">
					SAVE
				</button>
			</form>
		);
	}
}

const Form = connect(mapStateToProps,mapDispatchToProps)(ConnectedForm);

export default Form;