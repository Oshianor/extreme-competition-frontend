
const initialstate = {
	form: {
		name: '',
		description: '',
	},
	header: {
		name: 'Header',
		uid: "header-uid",
		description: '',
		backgroundColor: "#000",
		nameColor: "#fff",
		descriptionColor: "#fff"
	},
	page: [
		[]
	],
	type: 'header',
	uid: "header-uid"
}

export default (state = initialstate, action) => {
	switch (action.type) {
		case "FORM_DETAILS":
			return Object.assign({}, state, {
				form: action.payload,
			});
		case "SET_CURRENT_FIELD_TYPE":
			return Object.assign({}, state, {
				type: action.payload.type,
				uid: action.payload.uid
			});
		case "ADD_NEW_PAGE": 
			return Object.assign({}, state, {
				page: action.payload,
			});
		case "ADD_NEW_FIELD":
			return Object.assign({}, state, {
				page: action.payload,
			});
		case "HANDLE_HEADER":
			return Object.assign({}, state, {
				header: action.payload,
			});
		case "HANDLE_FIELD_EDIT": 
			return Object.assign({}, state, {
				page: action.payload
			})
		default:
			return state;
	}
}