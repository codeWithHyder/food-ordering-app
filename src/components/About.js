const About=() => {
    return(
        <div className="w-6/12 mx-auto bg-slate-400 h-52 my-10 p-5">
            <h1 className="text-center">Want to know about us !!</h1>
            <h3 className="text-center">Fill this form then </h3>
            <form>
                <input type="text" placeholder="Name" className="bg-slate-200 border border-cyan-400 m-5 h-10 p-3" />
                <input type="text" placeholder="Write your message" className="bg-slate-200 border border-cyan-400 m-5 h-10 p-3"/>
                <button className="w-20 rounded-lg bg-orange-400 h-10">Submit</button>
            </form>
        </div>
    )
}

export default About;