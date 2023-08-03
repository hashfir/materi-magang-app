import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    POST_DATA_REQUEST,
    POST_DATA_SUCCESS,
    POST_DATA_FAILURE,

} from '../type/dataType'

const initialState = {
    dataTable: [],
    posts: [],
    meta: {},
    errorPost: false,
    error: false,
    successPost: false
}

export const DataReducer = (state = initialState, action) => {
    console.log(action.type);
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
                error: false,
            };
        case FETCH_POSTS_FAILURE:
            return {
                loading: false,
                dataTable: [],
                error: action.payload,
            };
        case POST_DATA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case POST_DATA_SUCCESS:
            return {
                loading: false,
                errorPost: false,
                successPost: true
            };
        case POST_DATA_FAILURE:
            return {
                loading: false,
                errorPost: true,
                successPost: false
            };
        default:
            return state
    }
}