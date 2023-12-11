const User = (props)=>{
    const {name}=props;
    return(
        <div className="user">
            <h1>Name:{name}</h1>
            <h3>Address:Bandipora Jammu and Kashmir</h3>
            <h3>Contact: hyderali400@gmail.com</h3>
        </div>
    )
}

export default User;