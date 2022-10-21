import react from "react";

class RegisterForm extends react.Component {
    constructor(props) {
        super(props);
        this.state={
            firstName:"",
            lastname:"",
            age:0,
            email:"",
            password:"",
        };
    }
    handleChange =(event) =>{
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(this.state);
    };
    handleSubmit=(event) =>{
        event.preventDefault();
         
        //make api request to submit data

        this.setState({ 
            firstName:"",
        lastname:"" ,
        age:0,
        email:"" ,
        password:"" , 
        });
    };
    render() {
        return(
            <form onSubmit={this.handleSubmit}>
<input
name="lastName"
value={this.state.lastname}
placeholder="Enter last Name"
onChange={this.handleChange}
/>
<br/>
<br/>
<input
type="number"
value={this.state.age}
name="age"
placeholder="enter your age"
onChange={this.handleChange}
/>
<br/>
<br/>
<input
type="email"
name="email"
value={this.state.email}
placeholder="enter your email"
onChange={this.handleChange}
/>
<br/>
<br/>
<input
type="password"
name="password"
value={this.state.password}
placeholder="Enter your password"
onChange={this.handleChange}
/>
<br />
<br />
<button type ="submit">Register</button>
     </form>
        );
    }
}
export default RegisterForm;