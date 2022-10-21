import React from "react";

const LoginForm= () =>{
    const[email,setEmail] = React.useState("");
    const[password, setPassword] = React.useState("");

    const HandleSubmit=(event) =>{
        event.preventDefault();
        console.log(email);
        console.log(password);
        setEmail("");
    };
    return(
       <form onSubmit={HandleSubmit}>
           <input
           type="email"
           name="email"
           value={email}
           placeholder="Enter email"
           onChange={(event) =>{
               setEmail(event.target.value);

           }} 
           />
           <br />
           <br />
           <input
           type="password"
           name="password"
           value={password}
           placeholder="Enter password"
           onChange={(event) =>{
               setPassword(event.target.value);

           }}
           />
           <br />
           <br />
           <button type="submit">Login</button>
           </form>
           
    );
};
export default LoginForm;
