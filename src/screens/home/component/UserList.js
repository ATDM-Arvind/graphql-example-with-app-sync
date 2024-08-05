import { GET_USERS } from '../../../utility/queries'; // Ensure this is the correct path to your query
import { ListItem } from './UserItem';
import React from 'react';
import { useQuery } from '@apollo/client';

const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;
console.log(data)
  return (
    <ul>
      {data.listUsers.items.map((item) => (
        <li key={item.id}> 
        <ListItem id={item.Id} name={item.name} city={item.city}/></li>
      ))}
    </ul>
  );
};

export default UserList;