// functional component are javascript functions that takes in props and returns jsx elements.

function First({name,lastname}){
    // let firstname = props.name;
    // let lastname = props.lastname;
    return(
        <h1>My name is {name} and my last name is {lastname}</h1>
    )
}

export default First;