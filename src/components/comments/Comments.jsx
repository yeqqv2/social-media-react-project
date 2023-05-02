import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
  const { currentUser } = useContext(AuthContext);
  const comments = [
    {
      id: 1,
      name: "Yunus Emre",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1682704786539-c5de60e43a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, consequatur?",
    },
    {
      id: 2,
      name: "Yunus Emre",
      userId: 2,
      profilePic:
        "https://images.unsplash.com/photo-1682704786539-c5de60e43a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, consequatur?",
    },
  ];
  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Bir yorum yazın..." />
        <button>Gönder</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">1 saat önce</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
