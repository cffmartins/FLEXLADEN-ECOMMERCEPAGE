// importing react and necessary hooks
import React, { useEffect, useState } from "react";
//importing icons from react-icons
import { FaUser, FaStar, FaHeart } from "react-icons/fa";
//importing styles
import "./commentssection.scss";

function CommentsSection() {
  const [comments, setComments] = useState([]);
  const [likedIds, setLikedIds] = useState(new Set());

  // fetch comments
  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((data) => {
        const filteredComments = data.comments.filter(
          (comment) => comment.id >= 9 && comment.id <= 12
        );
        setComments(filteredComments);
      })
      .catch((error) => console.error("Error loading comments:", error));
  }, []);

  // toggle like status
  function toggleLike(id) {
    setLikedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }

  return (
    <div className="comments-section">
      <h2>OUR HAPPY AND STYLISH CUSTOMERS</h2>
      <div className="comments-list">
        {comments.map((comment) => {
          const isLiked = likedIds.has(comment.id);
          const totalLikes = isLiked ? comment.likes + 1 : comment.likes;

          return (
            <div key={comment.id} className="comment">
              <div className="comment-user">
                <FaUser className="user-icon" />
                <span className="username">
                  <strong>{comment.user.username}</strong>
                </span>
              </div>
              <div className="comment-stars">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="star-icon" />
                ))}
              </div>
              <p className="comment-body">
                <i>&quot;{comment.body}&quot;</i>
              </p>
              <p
                className="comment-likes"
                onClick={() => toggleLike(comment.id)}
                style={{ cursor: "pointer" }}
                aria-label={isLiked ? "Remove like" : "Add like"}
              >
                <FaHeart
                  className="heart-icon"
                  style={{ color: isLiked ? "#ff6600" : "#ccc" }}
                />{" "}
                <strong>{totalLikes}</strong>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CommentsSection;
