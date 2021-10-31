export const searchSkillsRequest = (search) => {
    return { type: 'SEARCH_SKILLS_REQUEST', payload: {search} };
}

export const searchSkillsError = ( message ) => {
    return { type: 'SEARCH_SKILLS_ERROR', payload: { message } };
}

export const searchSkillsSuccess = ( items ) => {
    return { type: 'SEARCH_SKILLS_SUCCESS', payload: { items } };
}

export const changeSerchField = ( search ) => {
    return { type: 'CHANGE_SEARCH_FIELD', payload: { search } };
}

export const searchSkillsReset = () => {
    return { type: 'SEARCH_SKILLS_RESET'};
}