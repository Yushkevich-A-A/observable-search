export const serviceFetchRequest = () => {
    return { type: 'SKILLS_REQUEST' };
}

export const serviceFetchError = ( message ) => {
    return { type: 'SKILLS_ERROR', payload: { message } };
}

export const serviceFetchSuccess = ( items ) => {
    return { type: 'SKILLS_ERROR', payload: { items } };
}

export const serviceFetchSearch = ( search ) => {
    return { type: 'CHANGE_SEARCH_FIELD', payload: { search } };
}

export const fetchSkills = () => {};