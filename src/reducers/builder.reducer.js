const initialstate = {
	form: {
		name: '',
		description: '',
	},
	header: {
		name: '',
		uid: "header-uid",
		id: 'header-id',
		description: '',
		backgroundColor: "#000",
		nameColor: "#fff",
		descriptionColor: "#fff"
	},
	page: [
		[]
	],
	type: 'header',
	uid: "header-uid",
	id: 'header-id'
}

export default (state = initialstate, action) => {
	switch (action.type) {
		case "FORM_FIELDS":
			return Object.assign({}, state, {
				form: action.payload,
			});
		case "CHANGE_TYPE":
			return Object.assign({}, state, {
				type: action.payload.type,
				uid: action.payload.uid,
				id: action.payload.id
			});
		default:
			return state;
	}
}