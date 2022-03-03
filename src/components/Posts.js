import React, { Component } from 'react'

export default class Posts extends Component {
	constructor() {
		super();
		this.state = { posts: [], isLoading: true }
	}
	async componentDidMount() {
		try {
			await fetch('https://jsonplaceholder.typicode.com/posts')
				.then(response => response.json())
				.then(data => this.setState({ posts: data, isLoading: false }))
				.catch(err => console.log(err))
		} catch (error) {
			console.log(error)
		}
	}
	render() {
		const { posts, isLoading } = this.state;
		return (

			<div>
				<ul >{isLoading ? <li>Lodding....</li> : posts.map((post, i) => {
					return (
						<>
							<h1>{post.title}</h1>
							<li>{post.body}</li>
						</>
					)
				})}</ul></div>
		)
	}
}
