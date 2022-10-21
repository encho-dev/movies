import React from "react"

class ProductForm extends React .Component {
    constructor(props){
        super(props);
        this.state = {
            productName:"",
            productPrice:"",
            quantity:"",
            category:"",
            utility:"",
        };

    }
    handleChange=(event) =>{
        this.setState({
            [event.target.name]: event.target.value,

        });
        console.log(this.start);
    }
    addProduct=(event)=>{
        event.preventDefault();
        ///at this level, make api requset to submit data////
        console.log(this.state)
        this.setState({
            productName:"",
            productPrice:"",
            quantity:"",
            category:"",
            utility:"",
        });
    };
    render(){
        return( 
            <form onSubmit={this.addProduct}>
        <input 
        type="text"
        name="productName"
        value={this.state.productName}
        placeholder="Enter product name"
        onChange={this.handleChange}
        />
        <br/>
        <br/>

        <input 
        type="number"
        name="quantity"
        value={this.state.quantity}
        placeholder="Enter product quantity"
        onChange={this.handleChange}
        />
        <br/>
        <br/>
        <input 
        name="category"
        type="text"
        value={this.state.category}
        placeholder="Enter product category"
        onChange={this.handleChange}
        />
        <br/>
        <br/>
        <input
        type="text" 
        name="utility"
        value={this.state.utility}
        placeholder="Enter product product"
        onChange={this.handleChange}
        />
        <br/>
        <br/>

        <button type="submit">add product</button>
        </form>
          )
        
    }
};
export default ProductForm
///this fill is compatabel with login.js /component////