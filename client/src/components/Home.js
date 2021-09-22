import Header from "./Header"


function Home({ user, setUser }) {

    return (
       <div>
           <Header user={user} setUser={setUser}/>
        <h1>{user? `This is Home. Welcome, ${user.username}`: "This is Home. No user in session"}</h1>
       </div>
    )
}

export default Home