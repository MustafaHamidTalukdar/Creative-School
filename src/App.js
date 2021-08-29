import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HtmlSidebar from "./component/HTML/HtmlSidebar";

function App() {
    return (
    <Router>
      <div className="App">
        
        <Switch>
            {/* Course Route */}
          <Route path="/Course">
          <Navbar/>
          <div className="container">
                <h5 className="text-center py-2" style={{color:"white",backgroundColor:"black",borderRadius:"80px"}}>Front-end Web Devlopment</h5>
                <div className="my-4" style={{backgroundColor:"lightcyan",width:"100%",height:"30vh",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"80px"}}>
                    <button className="btn btn-success mx-3"><Link to="/html" style={{textDecoration:"none",color:"white"}}>HTML</Link></button>
                    <button className="btn btn-success mx-3"><Link to="/css" style={{textDecoration:"none",color:"white"}}>CSS</Link></button>
                    <button className="btn btn-success mx-3"><Link to="/js" style={{textDecoration:"none",color:"white"}}>JavaScript</Link></button>
                    <button className="btn btn-success mx-3"><Link to="/react" style={{textDecoration:"none",color:"white"}}>React JS</Link></button>
                </div>
        </div>
          <Footer/>
          </Route>
          {/* Html */}
          <Route path="/html">
          <Navbar/>
          <HtmlSidebar/>
          </Route>
          {/* CSS */}
          <Route path="/css">
          <Navbar/>
          <Footer/>
          </Route>
          {/* JavaScript */}
          <Route path="/js">
          <Navbar/>
          <Footer/>
          </Route>
          {/* React JS */}
          <Route path="/react">
          <Navbar/>
          <Footer/>
          </Route>
          {/* Blog Route */}
          <Route path="/Blog">
          <Navbar/>

          <Footer/>
          </Route>
          {/* Home Route */}
          <Route path="/">
          <Navbar/>
          <div style={{backgroundColor:"lightgreen",width:"100%",height:"80vh",display:"flex",alignItems:"center",justifyContent:"center"}}>
          <button className="btn btn-warning"><Link to="/Course" style={{textDecoration:"none",color:"black"}}>Courses</Link></button>
          {/* <button className="btn btn-danger mx-3"><Link to="/Blog" style={{textDecoration:"none",color:"black"}}>Blogs</Link></button> */}
          </div>
          <Footer/>
          </Route>
        </Switch>   
             
      </div>
      </Router>
    );
  }
  
  export default App;