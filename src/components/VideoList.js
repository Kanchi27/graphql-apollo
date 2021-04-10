import gql from 'graphql-tag';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';

const GET_VIDEOS = gql`
    query videos {
        videos {    
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

const VideoList = () => {
    const { loading, error, data } = useQuery(GET_VIDEOS, {
        pollInterval: 100
    });

    if (loading) {
        return <div className="loading-msg"><h1>Loading...</h1></div>;
    };
    
    if (error) {
       return <div>Error! {error.message}</div>;
    };

    return (
        <div className="list">            
            <table className="pure-table pure-table-horizontal center">
                <thead>
                    <tr>
                        <th colSpan="4">Video List</th>
                    </tr>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>URL</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {data.videos.map(video => (
                        <tr key={video.id}>
                            <td>{video.id}</td>
                            <td>{video.title}</td>
                            <td>{video.url}</td>
                            <td>{video.author.name}</td>
                        </tr>
                    ))}    
                </tbody>
            </table>
        </div>
    );
}

export default VideoList;
