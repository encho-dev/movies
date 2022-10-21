import React from "react";
import{
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import"./App.css";
import Home from "./components/Home";
import LoginForm from "./components/Display";
import Nav from "./components/Nav";
import Products from "./components/Products";
import RegisterForm from "./components/Register";
import ProductDetails from "./components/ProductDitails";
import Profiles from "./components/Profiles";
import Profile from "./components/Profile";
import Favorites from "./components/Favorites";
import Movies from "./components/Movies";
import Movie from "./components/Movie";

class App extends React.Component{
  constructor(props){
    super (props);
  }
  //this.start={count:0};

render(){
  return(
    <Router>
      <Nav/>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/register" element={<RegisterForm/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        <Route path="/profiles" element={<Profiles />} />
        <Route path= "/profile/:username" element={<Profile/>}/>
        <Route path="/favorites" element= {<Favorites/>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
}
}
export default App;

/* class App extends React.Component{
    constructor(props) {
        super(props);
        this.state ={count:0};
    };
    increase = () => {
this.setState({count:this.state.count + 1});
    };
    dicrease = () => {
      this.setState({count:this.state.count - 1});
          };
    render() {
     return(
       <div className="App">
         <div className="button-display">
           <Button task= "increase" increase={this.increase} color="green"/>{" "}
           <Button task="decrease" increase={this.dicrease} color="green"/>{" "}
           <Display count={this.state.count}/>
         </div>
       </div>
     )
    }
}

export default App;*/