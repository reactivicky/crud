import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
	const [state, setstate] = useState([])
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [putTitle, setPutTitle] = useState('')
	const [putBody, setPutBody] = useState('')

	const handleClick = async () => {
		try {
			const res = await axios.get(
				'https://jsonplaceholder.typicode.com/posts?_limit=10'
			)
			console.log(res.data)
			setstate(res.data)
		} catch (e) {
			console.log(e)
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		if (title && body) {
			try {
				const res = await axios.post(
					'https://jsonplaceholder.typicode.com/posts',
					{
						title,
						body,
						userId: 1,
					}
				)
				console.log(res.data)
			} catch (e) {
				console.log(e)
			}
		}
	}

	const handlePutSubmit = async (e) => {
		e.preventDefault()
		if (putTitle && putBody) {
			try {
				const res = await axios.put(
					'https://jsonplaceholder.typicode.com/posts/1',
					{
						putTitle,
						putBody,
						userId: 1,
					}
				)
				console.log(res.data)
			} catch (e) {
				console.log(e)
			}
		}
	}

	const handleDelete = async (e) => {
		try {
			const res = await axios.delete(
				'https://jsonplaceholder.typicode.com/posts/1'
			)
			console.log(res)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div className='App'>
			<h1>Crud Operations</h1>
			<p>Please open the console to see the posts.</p>
			<br />
			<p>Get Operation:</p>
			<p>There are {state.length} posts that i got from database.</p>
			<button onClick={handleClick}>Get Posts</button>
			<br />
			<p>Post Operation:</p>
			<p>
				This will create a new post with id = 101. We can see the new post
				values in the console.
			</p>
			<form onSubmit={handleSubmit}>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					id='title'
					placeholder='Please insert a title'
					value={title}
					onChange={(e) => {
						setTitle(e.target.value)
					}}
				/>
				<label htmlFor='body'>Body</label>
				<input
					type='text'
					id='body'
					placeholder='Please insert a body'
					value={body}
					onChange={(e) => {
						setBody(e.target.value)
					}}
				/>
				<button type='submit'>Create a Post</button>
			</form>
			<br />
			<p>Put Operation:</p>
			<p>
				This will modify the post with id = 1. We can see the new post values in
				the console.
			</p>
			<form onSubmit={handlePutSubmit}>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					id='title'
					placeholder='Please insert a title'
					value={putTitle}
					onChange={(e) => {
						setPutTitle(e.target.value)
					}}
				/>
				<label htmlFor='body'>Body</label>
				<input
					type='text'
					id='body'
					placeholder='Please insert a body'
					value={putBody}
					onChange={(e) => {
						setPutBody(e.target.value)
					}}
				/>
				<button type='submit'>Change a Post</button>
			</form>
			<br />
			<p>Delete Operation:</p>
			<p>
				Clicking the button below will delete the post with id = 1. We can check
				the response status in console.
			</p>
			<button onClick={handleDelete}>Delete Post</button>
		</div>
	)
}

export default App
