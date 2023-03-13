
import { ADD_BLOG,ADD_USER_BLOG,ADD_USER_COMMENT,ADD_COMMENT } from "./blogActionTypes"
import axios from 'axios';
export const addBlog=(blog)=>{
    return {
        type:ADD_BLOG,
        payload:blog
    }
}
export const addBlogApi=()=>{
    return function(dispatch)
    {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((result)=>{
             dispatch(addBlog(result.data));
             console.log("inside addblogapi",result.data)
            })
    }
}
export const addCommentApi=()=>{
    return function(dispatch)
    {
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then((result)=>{
             dispatch(addComment(result.data));
            })
    }
}
export const addUserBlog=(blog)=>{
    return {
        type:ADD_USER_BLOG,
        payload:blog
    }
}
export const addComment=(comments)=>{
    return {
        type:ADD_COMMENT,
        payload:comments
    }
}
export const addUserComment=(comment)=>{
    return {
        type:ADD_USER_COMMENT,
        payload:comment
    }
}