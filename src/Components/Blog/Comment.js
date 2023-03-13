import React, { useState } from "react";
import "./Comment.css";
const Comment = ({ title, content, postid, addcomment }) => {
  const [isActive, setIsActive] = useState(false);
  const [newcomment, setnewcomment] = useState("");
  console.log("shshsh", content);
  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <span>
              Hide Comment <i className="fa fa-angle-up"></i>
              <small> {content.length} comments</small>
            </span>
          ) : (
            <span>
              View Comment <i className="fa fa-angle-down"></i>
              <small> {content.length} comments</small>
            </span>
          )}
        </div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {content.map((comment) => (
            // <div className="cardflex" key={comment.id}>
            //   <div className="flexcontainer">
            //     <div className="email">
            //       <b>{comment.email}</b>
            //     </div>

            //     <div>{comment.body}</div>
            //   </div>
            // </div>
            <>
              <div class="col-md-8">
                <div class="d-flex flex-column comment-section">
                  <div class="bg-white p-2">
                    <div class="d-flex flex-row user-info">
                      <img
                        class="rounded-circle"
                        src="https://i.imgur.com/RpzrMR2.jpg"
                        width="40"
                      />
                      <div class="d-flex flex-column justify-content-start ml-2">
                        <span class="d-block font-weight-bold name">
                          {comment.email}
                        </span>
                      </div>
                    </div>
                    <div class="mt-2">
                      <p class="comment-text">{comment.body}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
          {/* <div className="addcomment">
            <input
              type="text"
              className="newcommentinput"
              placeholder="Enter your comment"
              value={newcomment}
              onChange={(e) => setnewcomment(e.target.value)}
            />
            <button
              className="postcomment"
              onClick={() => {
                addcomment(newcomment, postid);
                setnewcomment("");
              }}
            >
              Comment
            </button>
          </div> */}

          <div class="bg-light p-2">
            <div class="d-flex flex-row align-items-start">
              <img
                class="rounded-circle"
                src="https://i.imgur.com/RpzrMR2.jpg"
                width="40"
              />
              <textarea
                class="newcommentinput form-control ml-1 shadow-none textarea"
                type="text"
                placeholder="Enter your comment"
                value={newcomment}
                onChange={(e) => setnewcomment(e.target.value)}
              ></textarea>
            </div>
            <div class="mt-2 text-right">
              <button
                class="postcomment btn btn-primary btn-sm shadow-none"
                type="button"
                onClick={() => {
                  addcomment(newcomment, postid);
                  setnewcomment("");
                }}
              >
                Post comment
              </button>
              <button
                class="btn btn-outline-primary btn-sm ml-1 shadow-none"
                type="button"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Comment;
