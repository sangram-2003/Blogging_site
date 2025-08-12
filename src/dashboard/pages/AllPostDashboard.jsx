import { useNavigate } from "react-router-dom";
import service from "../../appwrite/config";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Item } from "../component";
import { Query } from "appwrite";
import { getPostsByQuery } from "../../store/postSlice";

const AllPostDashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.auth.userData) || {};
  const { posts } = useSelector((state) => state.posts);
  const userID = userData.userData?.$id;

  const [localPosts, setLocalPosts] = useState([]);

  useEffect(() => {
    if (userID) {
      dispatch(
        getPostsByQuery([
          Query.equal("userID", userID),
          Query.orderDesc("$createdAt"),
        ])
      );
    }
  }, [userID, dispatch]);

  // Keep localPosts in sync with Redux whenever posts change
  useEffect(() => {
    setLocalPosts(posts);
  }, [posts]);

  const handleDelete = (id) => {
    dispatch(
        getPostsByQuery([
          Query.equal("userID", userID),
          Query.orderDesc("$createdAt"),
        ])
      );
  };

  return (
    <div className="w-full h-auto">
      <h1 className="text-2xl pt-2 pb-8 font-semibold">All Posts</h1>
      {
        localPosts.length == 0 ? (<h1>no available post </h1>):(
          <ul className="flex-col space-y-3">
        {localPosts.map((item) => (
          <Item posts={item} key={item.$id} onDelete={handleDelete} />
        ))}
      </ul>
        )
      }
    </div>
  );
};

export default AllPostDashboard;
