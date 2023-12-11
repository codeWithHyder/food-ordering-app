import { useEffect } from "react";

const ContactFunction= ()=>{
    useEffect(()=>{
        const timer = setInterval(()=>{
            console.log("Hello Hyder here from useEffect setinterval");
        },1000);

        return () => {
            clearInterval(timer);
        }
    },[]);
    return(
        <div>
            <h3>Hello i amfom function</h3>
        </div>
    )
}

export default ContactFunction;