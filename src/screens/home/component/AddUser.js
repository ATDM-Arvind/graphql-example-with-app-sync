import { ADD_USER, GET_USERS } from '../../../utility/queries'; // Ensure this is the correct path to your query
import React, { useEffect, useState } from 'react';

import { useMutation } from '@apollo/client';

const AddUser = () => {
    const [addUser, { data, loading, error }] = useMutation(ADD_USER, {
        refetchQueries: [{ query: GET_USERS }]});
        
    const [name,setName] = useState("")
    const [city,setCity] = useState("")
   
    useEffect(() => {
        // clear the state if data is saved successfully
        if (data) {
            setName("");
            setCity("");
        }
    }, [data]);
    
    if (loading) return <p> Creating user ...</p>;
    if (error) return <p>{error.message}</p>;

    const createUser= ()=>{
        addUser({ variables: {createusersinput: {
            Id: Math.random().toString(),
            name: name,
            city: city
        }} });
    }
    const handleNameInputChange=(event)=>{
        setName(event.target.value)
    }

    const handleCityInputChange=(event)=>{
        setCity(event.target.value)
    }

  return (
    <>
     <label> Name </label>
     <input onChange={handleNameInputChange}/>
     <label> City </label>
     <input onChange={handleCityInputChange}/>
     <button onClick={createUser}>Add User</button>
    </>
  );
};

export default AddUser;