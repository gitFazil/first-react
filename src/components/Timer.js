import React, { Component } from 'react'

export default class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			msg: 'click me'
		}
		console.log("constructor")
	}
	onclick = () => {
		console.log("clicked")
		this.setState({ count: this.state.count + 1, msg: 'clicked' })
	}
	render() {

		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={this.onclick}>{this.state.msg}</button>
				<Log time={this.state.count} />
			</div>
		)
	}
}

class Log extends Component {
	static getDerivedStateFromProps(newProps, state) {
		console.log("get drive  triggered")
		console.log(newProps.time, state)
	}
	shouldComponentUpdate(newProps, newState) {
		console.log("should update triggered")
		console.log(newProps, newState)
		if (newProps.time > 5) {
			if (newProps.time <= 6) {
				alert(" below counter will be stopped");
			} else {
				return false;
			}
		} else {
			return true
		}
	}
	render() {
		console.log("render")
		return <div>{this.props.time}</div>;
	}
}
