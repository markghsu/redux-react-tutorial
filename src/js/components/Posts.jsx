import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData } from '../actions/index'
//getData is the name of the "action creator". This action creator will be passed dispatch
//when it is connected via the mapDispatchToProps. Then inside the action creator
//we make a 

export class Post extends Component {

	//API CALLS GO IN componentDidMount
	componentDidMount() {
		this.props.getData();
	}
	render(){
		return (<div>{this.props.error && <div className="error">Error with api call: {this.props.error}</div>}
			{this.props.loading?<div>Loading...</div>:(
			<ul className="list-group list-group-flush">
				{this.props.articles.map(article => (
					<li className="list-group-item" key={article.id}>
						{article.title}
					</li>
					))}
				</ul>
			)}
		</div>);
	}
}

function mapStateToProps(state){
	return {
		loading: state.loading,
		error: state.webError,
		articles: state.webArticles.slice(0,10)//get first 10 articles only.
	}
}

export default connect(
	mapStateToProps, { getData }
)(Post);
//WE USE THE "Object shorthand form" of mapDispatch here
//utilizes react-redux's bindActionCreators to automatically create the necessary bindings
//each field is assumed to be an actioncreator name.