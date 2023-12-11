import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class Contact extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent constructor called");
    }

    componentDidMount(){
        this.timer = setInterval(()=>{
            console.log("hello Salam Hyder")
        },1000);
        console.log("parent component did mount called");
           
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("child component will unmount");
    }
    render(){
        console.log("parent rendr called")
       return (
            <div>
                <h1> Hello contact us for any query!!</h1>
                <UserClass name={"Ghulam Hyder dar(class)"} address={"Bagh Wodder ward no6 Bandipore"}/>
            </div>
       ) 
    }
}

// const Contact = ()=>{
//     return (
//         <div>
//             <h1> Hello contact us for any query!!</h1>
//             <User name={"Ghulam Hyder Dar(function)"} />
//             <UserClass name={"Ghulam Hyder dar(class)"} address={"Bagh Wodder ward no6 Bandipore"}/>
//         </div>
//     )
// }

export default Contact;