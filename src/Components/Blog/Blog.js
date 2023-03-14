import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addBlogSucessfull,
  addComment,
  addUserBlog,
  addUserComment,
  addNewBlog,
  addCommentApi,
} from "../../Redux/blog/blogActionCreators";
import "bootstrap/dist/css/bootstrap.css";
import "./Blog.css";
import Comment from "./Comment";


// const mapDispatchToProps = (dispatch) => {
//   return {
//     addUserBlog: (data) => dispatch(addUserBlog(data)),
//     addUserComment: (data) => dispatch(addUserComment(data)),
//     addBlogApi: () => dispatch(addBlogApi()),
//     addCommentApi: () => dispatch(addCommentApi()),
//   };
// };


const Blog = (props) => {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [userPost, setuserPost] = useState([]);
  const [userComment, setuserComment] = useState([]);
  const [createBlog, setcreateBlog] = useState(false);

  const navigate = useNavigate();
  var loggedInUser = useSelector((state) => state.loginReducer.userName);
  var blog = useSelector((state) => state.blogReducer.blog);
  var comment = useSelector((state) => state.blogReducer.comment);

  const dispatch = useDispatch();
  console.log(
    "inside blog component logged in user",
    loggedInUser,
    blog,
    comment
  );
  if (!loggedInUser) {
    loggedInUser = JSON.parse(window.localStorage.getItem("Login")).username;
  }

  useEffect(() => {
    dispatch(addNewBlog());
    console.log("props in  blog", blog);

    // TODO calling the comment API here

    dispatch(addCommentApi(1));

    return () => {
      window.localStorage.clear();
    };
  }, []);

  let handlePost = (event) => {
    event.preventDefault();
    let blogdata = {
      userId: loggedInUser,
      id: blog.length + userPost.length + 1,
      title: title,
      body: body,
    };
    // User custom blog post
     dispatch(addUserBlog(blogdata)) ;
    setuserPost((prev) => {
      window.localStorage.setItem(
        "userpost",
        JSON.stringify([blogdata, ...prev])
      );

      return [blogdata, ...prev];
    });
    settitle("");
    setbody("");
  };
  let handleLogout = () => {
    navigate("/Login");
  };
  let addComment = (newcomment, postid) => {
    let comment1 = {
      postId: postid,
      id: comment.length + userComment.length + 1,
      name: "",
      email: loggedInUser ? loggedInUser : "DefaultUser",
      body: newcomment,
    };
    dispatch(addUserComment(comment1));
    setuserComment((prev) => {
      window.localStorage.setItem(
        "usercomment",
        JSON.stringify([...prev, comment1])
      );
      return [...prev, comment1];
    });
  };
  return (
    <div>
      <div className="heading text-center">
        <h1 className="main-heading text-center lg-4 md-4">
          Welcome To Blog {loggedInUser}
        </h1>
        <button className="btn-Logout" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="container">
        <div className="text-center lg-2 md-2">
          {!createBlog ? (
            <button
              className="createBlog btn btn-primary md-2 lg-2"
              onClick={() => setcreateBlog(true)}
            >
              Create New Blog
            </button>
          ) : (
            ""
          )}
          {createBlog ? (
            <div className="col-md-12">
              <form>
                <div className="form-group">
                  <i
                    className="fa fa-close"
                    id="closeBlog"
                    onClick={() => setcreateBlog(false)}
                  ></i>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control bcontent"
                    name="content"
                    value={body}
                    placeholder="Add blog description"
                    onChange={(e) => setbody(e.target.value)}
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    name="Submit"
                    value="Publish"
                    className="btn btn-primary form-control"
                    onClick={handlePost}
                  />
                </div>
              </form>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="card border-0">
        {blog.map((e) => (
          <>
            <div className="container">
              <div className="list-group">
                <p className="list-group-item ">
                  <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{e.title}</h5>
                  </div>
                  <p className="mb-1">{e.body}</p>
                </p>
                <div className="container">
                  <div className="list-group">
                    <p className="list-group-item ">
                      <Comment
                        title=""
                        postid={e.id}
                        addComment={addComment}
                        content={comment.filter((e1) => e1.postId === e.id)}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};


export default Blog;
