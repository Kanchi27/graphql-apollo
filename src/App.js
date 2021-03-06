import React from 'react';
import apolloClient from './apolloSetup';
import { ApolloProvider } from '@apollo/react-hooks';
import NewVideoNotification from './components/NewVideoNotification';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
import LazyVideoList from './components/LazyVideoList';

const App = () => (
  <ApolloProvider client={apolloClient}>
      <NewVideoNotification />
      <AddVideo />
      <VideoList />
      <LazyVideoList />
  </ApolloProvider>
);
 
export default App;
