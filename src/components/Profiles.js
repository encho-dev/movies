import{Link} from "react-router-dom"

const Profiles =() =>{
    const profiles = [
     {
         profilesId:1,
         name:"mark",
         email: "mac@mail.com",
         username:"mac",
    }, 
    {
        profilesId:2,
        name:"Jonh",
        email: "jon@mail.com",
        username:"Jon",
   },
   {
    profilesId:3,
    name:"Luck",
    email: "luck@mail.com",
    username:"luck",
},
    ]
return (
    <>
    {profiles.map ((profile)=>{
        return(
            <Link key={profile.profilesId} to={`/profile/${profile.username}`}>,
                <div
                style={{
                    backgroundColor:"gray",
                    width:"200px",
                    height:"300px",
                    borderRadius:"10px",
                    margin: "10px"
                }}
                >
                    <h3>{profile.name}</h3>
                    <p>{profile.email}</p>
                    </div>
            </Link>
        );
    })}
    </>

)
}
export default Profiles;
