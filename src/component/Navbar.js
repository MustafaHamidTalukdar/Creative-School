import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <div className="container-fluid" style={{backgroundColor:"black"}}><Link to="/" style={{textDecoration:"none"}}><h3 className="text-center py-2" style={{color:"white"}}>Creative <span style={{fontWeight:"800",color:"red"}}>School</span></h3></Link></div>
        </div>
    )
}
