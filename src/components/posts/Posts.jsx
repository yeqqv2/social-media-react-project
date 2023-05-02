import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
  //Temporary
  const posts = [
    {
      id: 1,
      name: "Yunus Emre",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1682704786539-c5de60e43a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, consequatur?",
      img: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 2,
      name: "Yunus Emre",
      userId: 1,
      profilePic:
        "https://images.unsplash.com/photo-1682704786539-c5de60e43a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, consequatur?",
      img: "https://images.unsplash.com/photo-1561065270-5c2af775b542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    },
  ];

  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
