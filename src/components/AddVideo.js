import gql from 'graphql-tag';
import React from 'react';
import { useMutation } from '@apollo/react-hooks';

const ADD_VIDEO_MUTATION = gql`
    mutation createVideo($title: String!, $url: String!, $userId: String!) {
        createVideo( input: { title: $title, url: $url, userId: $userId } ) {
            id
            title
            url
            author {
                id
                name
            }
        }
    }
`;

const AddVideo = () => {
    let title,url,userId;
    const [createVideo] = useMutation(ADD_VIDEO_MUTATION);
  
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            createVideo({ variables: { title: title.value, url: url.value, userId: userId.value } });
          }}
          className="pure-form pure-form-aligned form"
        >
            <fieldset>
                <div className="pure-control-group">
                    <label htmlFor="title">Title</label>
                    <input
                        ref={value => title = value}
                        id="title"
                        placeholder="Enter a Title"
                    />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="url">URL</label>
                    <input
                        ref={value => url = value}
                        id="url"
                        placeholder="Enter a URL"
                    />
                </div>
                <div className="pure-control-group">
                    <label htmlFor="userId">User ID</label>
                    <input
                        ref={value => userId = value}
                        id="userId"
                        placeholder="Enter a number"
                    />
                </div>
                <div className="pure-controls">
                    <button type="submit">Add Video</button>
                </div>
            </fieldset>
        </form>
      </div>
    );    
}

export default AddVideo;
