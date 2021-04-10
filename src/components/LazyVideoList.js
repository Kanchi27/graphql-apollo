import gql from 'graphql-tag';
import React from 'react';
import { useLazyQuery } from '@apollo/react-hooks';

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

const LazyVideoList = () => {

    const [ getVideos, { loading, data } ] = useLazyQuery(GET_VIDEOS);

    if (loading) {
        return <div class="loading-msg"><h1>Loading...</h1></div>;
    };
    
    return  !data ? 
        (
            <button onClick={() => getVideos()}>
                Get Videos!
            </button>        
        ): (
            <div className="lazy-list">            
                <table className="pure-table pure-table-horizontal center">
                    <thead>
                        <tr>
                            <th colSpan="4">Lazy Video List</th>
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

export default LazyVideoList;
