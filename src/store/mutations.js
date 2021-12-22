export const SEARCH__RESULT = ( state, data) => {
    state.searchResult = data
}

export const MESSAGES__INIT = (state, data) => {
    state.messages = data
}

export const MESSAGE__RELOAD = ( state, data) => {
    state.messages.unshift(data)
}
