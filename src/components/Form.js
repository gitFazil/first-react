import React, { Component } from 'react'

export default class Form extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			firstName: '',
			lastName: ''

		}
	}
	handleSubmit = (e) => {
		e.preventDefault()
		console.log(this.state.email, this.state.firstName, this.state.lastName)
	}
	render() {
		const { email, firstName, lastName } = this.state;
		return (
			<form>
				<div>
					<label>Email</label>
					<input type='text' value={email} onChange={(e) => this.setState({ email: e.target.value })} />
					<label>FirstName</label>
					<input type='text' value={firstName} onChange={(e) => this.setState({ firstName: e.target.value })} />
					<label>LastName</label>
					<input type='text' value={lastName} onChange={(e) => this.setState({ lastName: e.target.value })} />
				</div>
				<div>
					<button onClick={this.handleSubmit}>Submit</button>
				</div>
			</form>

		)
	}
}
