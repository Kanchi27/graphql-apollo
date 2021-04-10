import gql from 'graphql-tag';
import React from 'react';
import { useSubscription } from '@apollo/react-hooks';

const SUBSCRIBE_VIDEO_ADDED = gql`
      subscription onVideoAdded($title: String!){
        videoAdded(title: $title) {
          id
          title
          url
        }
      }
`;

const NewVideoNotification = () => {
  const { data, error, loading } = useSubscription(SUBSCRIBE_VIDEO_ADDED, {
    variables: {
      title: "My New Video"
    }
  });

  if (loading) {
    return <div className="loading-msg"><h1>Loading...</h1></div>;
  };

  if (error) {
    return <div>Error! {error.message}</div>;
  };
  
  return (
    <div className="notification">
      <h2>New Video!</h2>
      <p>        
      ID: <strong> {!loading && data.videoAdded.id} </strong>
      </p>
      <p>
      TITLE: <strong> {!loading && data.videoAdded.title} </strong>
      </p>
      <p>
      URL: <strong> {!loading && data.videoAdded.url} </strong>
      </p>
    </div>
  );
}

export default NewVideoNotification;
