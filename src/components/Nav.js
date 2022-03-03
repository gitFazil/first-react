import React, { Component } from 'react'

export default class nav extends Component {
	componentWillUnmount() {
		alert("user deleted")
	}
	render() {
		const { name, contact, email } = this.props;
		return (
			<div>
				<h2>Hi i am Nav. {name}</h2>
				<p>Email :{email}</p>
				<p>Phone :{contact}</p>
			</div>
		)
	}
}
