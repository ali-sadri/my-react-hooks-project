import React, { useReducer, useEffect } from 'react'
import './App.css'

import { notesReducer, categoriesReducer } from '../reducer'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './Home'
import Note from './Note'
import AddNoteForm from './AddNoteForm'
import NotesContext from '../context/NotesContext'
import AddNewCategoryForm from './AddNewCategoryForm'
import './App.css'

const App = () => {
	const [notes, notesDispatch] = useReducer(notesReducer, [])
	const [categories, categoriesDispatch] = useReducer(categoriesReducer, [])
	useEffect(() => {
		const notes = JSON.parse(localStorage.getItem('notes'))
		if (notes) {
			notesDispatch({ type: 'POPULATE_NOTES', payload: notes })
		}
		const categories = JSON.parse(localStorage.getItem('categories'))
		if (categories) {
			categoriesDispatch({
				type: 'POPULATE_CATEGORIES',
				payload: categories,
			})
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes))
	}, [notes])

	useEffect(() => {
		localStorage.setItem('categories', JSON.stringify(categories))
	}, [categories])

	return (
		<NotesContext.Provider
			value={{ notes, categories, notesDispatch, categoriesDispatch }}
		>
			<BrowserRouter>
				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/notes/new' component={AddNoteForm} />
					<Route path='/categories/new' component={AddNewCategoryForm} />
					<Route path='/notes/:title' component={Note} />
				</Switch>
			</BrowserRouter>
		</NotesContext.Provider>
	)
}
export default App
