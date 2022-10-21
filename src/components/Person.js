import React from "react"

class PersonInfo extends React .Component {
    constructor(props){
        super(props);
        this.state = {
            personName:"",
            personResident:"",
            personSkills:"",
            personReligion:"",
            personQualifications:"",
        };

    }
    handleChange=(event) =>{
        this.setState({
            [event.target.name]: event.target.value,

        });
        console.log(this.start);
    }
    addPerson=(event)=>{
        event.preventDefault();
        console.log(this.state)
        this.setState({
            personName:"",
            personresResident:"",
            quantityskills:"",
            categoryseReligion:"",
            utilityQualification:"",
        });
    };
    render(){
        return( 
            <form onSubmit={this.addPerson}>
        <input 
        type="text"
        name="personName"
        value={this.state.personName}
        placeholder="Enter person name"
        onChange={this.handleChange}
        />
        <br/>
        <br/>

        <input 
        type="text"
        name="person Resident"
        value={this.state.personresResident}
        placeholder="Enter person Ressident"
        onChange={this.handleChange}
        />
        <br/>
        <br/>
        <input 
        name="person skills"
        type="text"
        value={this.state.personSkills}
        placeholder="Enter person Skills"
        onChange={this.handleChange}
        />
        <br/>
        <br/>
        <input
        type="text" 
        name="person Qualification"
        value={this.state.personQualifications}
        placeholder="Enter person Qualification"
        onChange={this.handleChange}
        />
        <br/>
        <br/>

        <button type="submit">add PersonInfo</button>
        </form>
          )
        
    }
};
export default PersonInfo