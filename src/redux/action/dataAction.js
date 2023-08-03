import axios from 'axios';

import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
} from '../type/dataType'

// Action creators
const fetchPostsRequest = () => ({
    type: FETCH_POSTS_REQUEST,
});

const fetchPostsSuccess = (data) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: data,
});

const fetchPostsFailure = (error) => ({
    type: FETCH_POSTS_FAILURE,
    payload: error,
});


const API_URL = 'https://reqres.in/api/users?page=2';
export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        return axios.get(API_URL)
            .then((response) => {
                dispatch(fetchPostsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchPostsFailure(error.message));
            });
    };
};