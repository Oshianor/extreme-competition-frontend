const initialstate = {
	headerScrollUp: false
}

export default (state = initialstate, action) => {
	switch (action.type) {
		case "HEADER_SCROLL_UP":
			return Object.assign({}, state, {
				headerScrollUp: action.payload,
			})
		default:
			return state;
	}
}