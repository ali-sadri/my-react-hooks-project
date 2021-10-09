import React, { useContext, useEffect } from 'react'
import NotesContext from '../context/NotesContext'
import { useHistory } from 'react-router-dom'

const NotesList = (props) => {
	const { notes, notesDispatch } = useContext(NotesContext)
	const history = useHistory()
	useEffect(() => props.printCallback(), [])
	console.log('***** Rendering NotesList *****')
	return (
		<div>
			<ul>
				{notes.map((note) => (
					<li key={note.title}>
						<span
							onClick={() => history.push(`/notes/${note.title}`)}
							style={{
								cursor: 'pointer',
								borderStyle: 'dashed',
								borderWidth: '1px',
							}}
						>
							Title: {'\u00a0'}
							{note.title}
						</span>
						{'\u00a0'}
						{'\u00a0'}
						<button
							style={{ cursor: 'pointer' }}
							onClick={() => {
								notesDispatch({
									type: 'REMOVE_NOTE',
									payload: note.title,
								})
							}}
						>
							Delete This Note
						</button>
					</li>
				))}
			</ul>
		</div>
	)
}

export { NotesList as default }
