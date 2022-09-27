import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../store/actions/Posts.action';
import Card from './Card';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.postsReducer);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (error !== null) {
    return <p>{`Ups! ocurrió un error. Error: ${error}`}</p>;
  }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((item) => (
          <div key={item.id}>
            <Card item={item} />
          </div>
        ))
      )}
      <Link to="/about">About</Link>
      <br />
    </>
  );
};

export default Posts;
