export const ListItem = ({name,desc,photo})=>{

    return(
        <div className="List-Item">
            <label>{name}</label>
            <br/>
            <label style={{textAlign:"start"}}>{desc} </label>
            <br/>
            <img height={150}  src={photo}/>
        </div>
    )
}