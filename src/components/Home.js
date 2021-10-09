import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import NotesList from './NotesList'
import NotesCategories from './NotesCategories'

import './App.css'

const Home = () => {
	const history = useHistory()

	//example of using useCallback
	const printCallback = useCallback(() =>
		console.log('print callback invoked as prop of NotesList'),
	)

	return (
		<div>
			Home component
			<div>
				<NotesList
					printCallback={printCallback}					
				/>
				<button
					className='add-button'
					onClick={() => history.push('/notes/new')}
				>
					Add Note
				</button>
			</div>
			<br />
			<br />
			<div>
				<NotesCategories />
			</div>
		</div>
	)
}

export { Home as default }
