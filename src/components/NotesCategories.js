import React, { useContext } from 'react'
import Dropdown from 'react-dropdown'
import NotesContext from '../context/NotesContext'
import { useHistory } from 'react-router-dom'
import 'react-dropdown/style.css'
import './App.css'

const NotesCategories = () => {
	const { categories } = useContext(NotesContext)
	const history = useHistory()

	return (
		<div>
			<Dropdown
				className='dropdownMenu'
				options={categories}
				//onChange={this._onSelect}
				//value={defaultOption}
				placeholder='Note categories'
			/>
			<br />
			<button
				className='add-button'
				onClick={() => history.push('/categories/new')}
			>
				Add Category
			</button>
		</div>
	)
}

export { NotesCategories as default }
