import '../styles/components/Details.scss';
import { useSelector } from 'react-redux';
import React from 'react';

const Details = ({ id }) => {
  //  //myArray.find(x => x.id === '45').foo;
  const { posts } = useSelector((state) => state.postsReducer);

  return (
    <div className="DetailContainer">
      {posts.map((item) => {
        console.log(item.id);
        if (item.id.toString() === id) {
          return (
            <div className="item" key={item.id}>
              <img src={item.image} alt="Product_Img" />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <p>{`rating: ${item.rating.rate}, ${item.rating.count}`}</p>
            </div>
          );
        }
        return <> </>;
      })}
    </div>
  );
};

export default Details;
