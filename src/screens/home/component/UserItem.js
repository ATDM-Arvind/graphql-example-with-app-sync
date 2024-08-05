import './UserItem.css'

import { DELETE_USER, GET_USERS } from '../../../utility/queries';

import deleteIcon  from '../../../assets/delete.png'
import { useMutation } from '@apollo/client';

export const ListItem = ({id,name,city})=>{

    const [deleteUser, { data: deleteData, loading: deleteLoading, error: deleteError }] = useMutation(DELETE_USER, {
        refetchQueries: [{ query: GET_USERS }]
    });

    const deleteUserHandle= ()=>{
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (confirmDelete) {
            deleteUser({ variables: { deleteusersinput:{Id:id} } })
        }
    }


    return(
        <div className="container">
            <div className='left-view'> 
                <label className="userName">{name}</label>
                <label style={{textAlign:'left'}}>{city}</label>
            </div>
          <div>
                <img  className='delete-icon' src={deleteIcon} onClick={deleteUserHandle}/>
          </div>
            
        </div>
    )
}