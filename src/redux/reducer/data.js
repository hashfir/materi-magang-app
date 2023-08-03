import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
} from '../type/dataType'

const initialState = {
    dataTable: [],
    posts: [],
    meta: {},
    error: false
}

export const DataReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_POSTS_SUCCESS:
            return {
                loading: false,
                dataTable: action.payload.data,
                meta: action.payload,
                error: '',
            };
        case FETCH_POSTS_FAILURE:
            return {
                loading: false,
                dataTable: [],
                error: action.payload,
            };
        default:
            return state
    }
}