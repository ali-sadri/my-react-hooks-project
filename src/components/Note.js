import React, { useContext, useEffect } from 'react'
import NotesContext from '../context/NotesContext'
import { useHistory } from 'react-router-dom'
import _ from 'lodash'

const Note = (props) => {
	let { notes } = useContext(NotesContext)
	//If The only place that we get the data from localStorage
	// is the root component (App component in our app), then going
	// directly to other component (not through the root component),
	// would cause the error, because there is no data available.
	// Thats why when we directly go to one of react router paths,
	// we need to have this piece of code.
	if (notes.length === 0) {
		console.log('getting notes from local storage')
		notes = JSON.parse(localStorage.getItem('notes'))
	}
	const history = useHistory()
	let note = _.find(notes, { title: props.match.params.title })
	return (
		<div>
			<div>Note Title: {note.title}</div>
			<div>Note Body: {note.body}</div>
			<div>Note Category: {note.category}</div>
			<button onClick={() => history.push('/')}>Home</button>
		</div>
	)
}

export { Note as default }
