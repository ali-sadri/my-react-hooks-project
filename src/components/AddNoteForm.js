import React, { useContext, useState } from 'react'
import NotesContext from '../context/NotesContext'
import Dropdown from 'react-dropdown'
import { useHistory } from 'react-router-dom'

const AddNoteForm = () => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [category, setCategory] = useState('')
	const { notesDispatch, categories } = useContext(NotesContext)
	const history = useHistory()

	const addNote = (e) => {
		e.preventDefault()
		notesDispatch({ type: 'ADD_NOTE', payload: { title, body, category } })
		setTitle('')
		setBody('')
		history.push('/')
	}

	const categoryOnChange = (selectedCategory) => {
		console.log('****', selectedCategory.value)
		setCategory(selectedCategory.value)
	}
	return (
		<form onSubmit={addNote}>
			<label>Title: </label>
			<input value={title} onChange={(e) => setTitle(e.target.value)} />
			{'\u00a0'}

			<Dropdown
				className='dropdownMenu'
				options={categories}
				onChange={categoryOnChange}
				//value={defaultOption}
				placeholder='Select Note categories'
			/>

			<label>Body: </label>
			<textarea value={body} onChange={(e) => setBody(e.target.value)} />

			<button>Add Note</button>
		</form>
	)
}

export { AddNoteForm as default }
