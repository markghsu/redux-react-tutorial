import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
	return { articles: state.articles };
}

//Functional stateless component
const ConnectedList = ({ articles }) => (
	<ul className="list-group list-group-flush">
	{articles.map(el => (
		<li className="list-group-item" key={el.id}>
			{el.title}
		</li>
		))}
	</ul>
);

//Connect Curries the mapStateToProps and connects it to the ConnectedList component
const List = connect(mapStateToProps)(ConnectedList);

export default List;