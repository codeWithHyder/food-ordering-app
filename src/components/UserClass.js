import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        
        this.state={
            name: "name",
            location: "location",
            avatar_url: "default",
            bio: "default"
        };
        console.log("child constructor called");
    }
    async componentDidMount(){
        console.log("child component did mount called");
        const data= await fetch("https://api.github.com/users/codeWithHyder?");
        const json = await data.json();
        console.log(json);
        this.setState(json);
        
    }

    componentDidUpdate(){
        console.log("child component did update");
    }

    componentWillUnmount(){
        console.log("child component will unmount");
    }

    render(){
        console.log("child render called");
        const{name, location, avatar_url,bio}=this.state;
        return(
        <div className="user">
            <h1>Name:{name}</h1>
            <h3>Location:{location}</h3>
            <h3><img src={avatar_url}/></h3>
            <h3>BioData:{bio}</h3>
        </div>
        )
    }
}

export default UserClass;