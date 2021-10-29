const initialState = {
    items: [],
    loading: false,
    error: null,
    search: '',
}
export default skillsServiceReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'SKILLS_REQUEST': 
            return {...state, loading: true};
        case 'SKILLS_ERROR':
            const { message } = action.payload;
            return {...state, loading: false, error: message};
        case 'SKILLS_SUCCESS':
            const { items } = action.payload;
            return {...state, items, loading: false, error: null};
        case 'CHANGE_SEARCH_FIELD':
                const { search } = action.payload;
                return {...state, search};
        default:
            return {...state};
    }
}