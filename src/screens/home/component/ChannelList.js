import { GET_CHANNELS, GET_LOCATIONS } from '../../../utility/queries'; // Ensure this is the correct path to your query

import { ListItem } from './ListItem';
import React from 'react';
import { useQuery } from '@apollo/client';

const ChannelsList = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <ul>
      {data.locations.map((ch) => (
        <li key={ch.id}> 
        <ListItem name={ch.name} desc={ch.description} photo= {ch.photo}/></li>
      ))}
    </ul>
  );
};

export default ChannelsList;