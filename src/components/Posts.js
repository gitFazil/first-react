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
				<ul >{isLoading ?
					<h2>Loading............</h2>
					: posts.map((post, i) => {
						return (
							<li key={post.id}>
								<h1>{post.title}</h1>
								<p >{post.body}</p>
							</li>
						)
					})}</ul></div>
		)
	}
}
