const notesReducer = (state, action) => {
	switch (action.type) {
		case 'POPULATE_NOTES':
			return action.payload
		case 'ADD_NOTE':
			return [
				...state,
				{
					title: action.payload.title,
					body: action.payload.body,
					category: action.payload.category,
				},
			]
		case 'REMOVE_NOTE':
			return state.filter((note) => note.title !== action.payload)
		default:
			return state
	}
}

const categoriesReducer = (state, action) => {
	switch (action.type) {
		case 'POPULATE_CATEGORIES':
			return action.payload
		case 'ADD_CATEGORY':
			return [...state, action.payload]
		default:
			return state
	}
}

export { notesReducer, categoriesReducer }
