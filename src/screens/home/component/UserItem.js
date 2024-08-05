import './UserItem.css'
export const ListItem = ({name,city})=>{

    return(
        <div className="List-Item">
            <label className="userName">{name}</label>
            <br/>
            <br/>
            <label style={{textAlign:"start"}}>{city} </label>
        </div>
    )
}