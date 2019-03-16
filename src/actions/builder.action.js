// action for dropped item
// *type, uid
export const setCurrentFieldType = (obj) => {
  return {
    type: "SET_CURRENT_FIELD_TYPE",
    payload: obj
  }
}


// add new page
export const addNewPage = (obj) => {
  return {
    type: "ADD_NEW_PAGE",
    payload: obj
  }
}

// add new field to page
export const addNewField = (obj) => {
  return {
    type: "ADD_NEW_FIELD",
    payload: obj
  }
}

// add new field to page
export const handleHeader = (obj) => {
  return {
    type: "HANDLE_HEADER",
    payload: obj
  }
}

// edit fields
export const handleFieldEdit = (obj) => {
  return {
    type: "HANDLE_FIELD_EDIT",
    payload: obj
  }
}