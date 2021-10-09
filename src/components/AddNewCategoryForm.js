import React, { useContext, useState } from 'react'
import NotesContext from '../context/NotesContext'

import { useHistory } from 'react-router-dom'

const AddNewCategoryForm = () => {
	const [category, setCategory] = useState('')
	const history = useHistory()
	const { categoriesDispatch } = useContext(NotesContext)
	const addCategory = (e) => {
		e.preventDefault()
		categoriesDispatch({ type: 'ADD_CATEGORY', payload: category })
		setCategory('')
		history.push('/')
	}
	return (
		<div>
			<div>
				<button onClick={() => history.push('/')}>Home</button>
			</div>
			<form onSubmit={addCategory}>
				<label>Category: </label>
				<input
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				/>
				{'\u00a0'}

				<button>Add Category</button>
			</form>
		</div>
	)
}

export { AddNewCategoryForm as default }
