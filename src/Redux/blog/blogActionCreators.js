import {
  ADD_BLOG,
  ADD_USER_BLOG,
  ADD_USER_COMMENT,
  ADD_COMMENT,
  ADD_NEW_BLOG_FAILED,
  ADD_COMMENT_FAILED,
} from "./blogActionTypes";
import axios from "axios";

// TODO the adblog here is actually just fetching the blog from the api these naming convention needs to change
export const addBlogSucessfull = (blog) => {
  return {
    type: ADD_BLOG,
    payload: blog,
  };
};

export const addNewBlogFailed = (error) => {
  return {
    type: ADD_NEW_BLOG_FAILED,
    payload: error,
  };
};

// Thunk to add new Blog

export const addNewBlog = () => {
  return (dispatch) => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // res.data.quote
        console.log(res);
        dispatch(addBlogSucessfull(res.data));
      })
      .catch((error) => {
        console.log(error.response);
        dispatch(
          addNewBlogFailed(
            `Error ${error.response.status}: ${error.response.data} `
          )
        );
      });
  };
};


export const addCommentFailed = (error) => {
    return {
      type: ADD_COMMENT_FAILED,
      payload: error,
    };
  };
  
// Thunk to add new Comment

export const addCommentApi = (id) => {
    return (dispatch) => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((res) => {
          // res.data.quote
          console.log(res);
          dispatch(addComment(res.data));
        })
        .catch((error) => {
          console.log(error.response);
          dispatch(
            addCommentFailed(
              `Error ${error.response.status}: ${error.response.data} `
            )
          );
        });
    };
  };



// export const addCommentApi = () => {
//   return function (dispatch) {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts/1/comments")
//       .then((result) => {
//         dispatch(addComment(result.data));
//       });
//   };
// };
export const addUserBlog = (blog) => {
  return {
    type: ADD_USER_BLOG,
    payload: blog,
  };
};
export const addComment = (comments) => {
    console.log('add commment api called')
  return {
    type: ADD_COMMENT,
    payload: comments,
  };
};
export const addUserComment = (comment) => {
  return {
    type: ADD_USER_COMMENT,
    payload: comment,
  };
};
