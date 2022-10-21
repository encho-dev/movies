import{ useParams } from "react-router";

const Profile =() => {
    const {username} = useParams();
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
        let profile = profiles.filter((pro) => {
            return pro.username == username;
        });

        return(
            <div>
                <h1>{profile[0].name}</h1>
                <p>{profile[0].email}</p>
                <p>{profile[0].username}</p>
            </div>
        );
};
export default Profile;