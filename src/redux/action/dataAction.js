import axios from 'axios';

import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE,
    POST_DATA_REQUEST,
    POST_DATA_SUCCESS,
    POST_DATA_FAILURE,
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


const API_URL = 'https://reqres.in/api/';
export const fetchPosts = () => {
    return (dispatch) => {
        dispatch(fetchPostsRequest());
        return axios.get(API_URL + 'users?page=2')
            .then((response) => {
                dispatch(fetchPostsSuccess(response.data));
            })
            .catch((error) => {
                dispatch(fetchPostsFailure(error.message));
            });
    };
};


const PostDataRequest = () => ({
    type: POST_DATA_REQUEST,
});

const PostDataSuccess = (data) => ({
    type: POST_DATA_SUCCESS,
    payload: data,
});

const PostDataFailure = (error) => ({
    type: POST_DATA_FAILURE,
    payload: error,
});
export const postData = (dataPost) => {
    return (dispatch) => {
        dispatch(PostDataRequest());
        return axios.post(API_URL + "users", dataPost)
            .then((response) => {
                dispatch(fetchPosts())
                // dispatch(PostDataSuccess(response.data));
            })
            .catch((error) => {
                dispatch(PostDataFailure(error.message));
            });
    };
};