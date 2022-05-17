import React, { Component } from 'react'

export default class nav extends Component {
	constructor(props) {
		super(props);
		this.state = { i: 0 };
	}

	interval = setInterval(() => {
		console.log(this.setState({ i: this.state.i++ }));
	}, 999)

	componentDidMount() {
       
	}
	componentWillUnmount() {
		alert("user deleted");
		clearInterval(this.interval)

	}
	render() {
		console.log(this.state.i)
		const { name, contact, email } = this.props;
		return (
			<div>
				{this.state.i}
				<h2>Hi i am Nav. {name}</h2>
				<p>Email :{email}</p>
				<p>Phone :{contact}</p>
			</div>
		)
	}
}
