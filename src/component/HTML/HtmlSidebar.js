import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import HtmlAttr from './HtmlAttr';
import HtmlBoilerPlate from './HtmlBoilerPlate';
import HtmlElements from './HtmlElements';
import HtmlIntroduction from './HtmlIntroduction';
import HtmlHeading from './HtmlHeading';
import HtmlTextAttribute from './HtmlTextAttribute';
import HtmlComments from './HtmlComments';
import HtmlLi from './HtmlLi';
import HtmlSymbols from './HtmlSymbols';
import HtmlForms from './HtmlForms';
import HtmlFormsAttribute from './HtmlFormsAttribute';
import HtmlFormElement from './HtmlFormElement';
import HtmlMedia from './HtmlMedia';

export default function HtmlSidebar() {
    return (
        <Router>
        <div>
            <div class="w3-sidebar w3-light-grey w3-bar-block" style={{width:"20%",overflow:"scroll"}}>
                <h3 class="w3-bar-item">HTML</h3>
                <Link to="/html" class="w3-bar-item w3-button">HTML Introduction</Link>
                <Link to="/html-boilerplate" class="w3-bar-item w3-button">HTML Boilerplate</Link>
                <Link to="/html-elements" class="w3-bar-item w3-button">HTML Elements</Link>
                <Link to="/html-attr" class="w3-bar-item w3-button">HTML Attribute</Link>
                <Link to="/html-heading" class="w3-bar-item w3-button">HTML Heading and Paragraph</Link>
                <Link to="/html-txt-attr" class="w3-bar-item w3-button">HTML Text Types</Link>
                <Link to="/html-comments" class="w3-bar-item w3-button">HTML Comments</Link>
                <Link to="/html-li" class="w3-bar-item w3-button">HTML Links, Images, List and Tables</Link>
                <Link to="/html-symbol" class="w3-bar-item w3-button">HTML Symbols</Link>
                <h3 class="w3-bar-item">Forms</h3>
                <Link to="/html-forms" class="w3-bar-item w3-button">HTML Forms</Link>
                <Link to="/html-forms-attr" class="w3-bar-item w3-button">HTML Forms Attribute</Link>
                <Link to="/html-forms-ele" class="w3-bar-item w3-button">HTML Forms Elements</Link>
                <h3 class="w3-bar-item">HTML Media</h3>
                <Link to="/html-media" class="w3-bar-item w3-button">HTML Media</Link>
                <h3 class="w3-bar-item">.</h3>
            </div>
            <Switch>
                {/* Introduction */}
            <Route path="/html">
            <HtmlIntroduction/>
            </Route>
            {/* Boilerplate */}
            <Route path="/html-boilerplate">
            <HtmlBoilerPlate/>
            </Route>
            {/* Elements */}
            <Route path="/html-elements">
            <HtmlElements/>
            </Route>
            {/* Attribute */}
            <Route path="/html-attr">
            <HtmlAttr/>
            </Route>
            {/* Heading */}
            <Route path="/html-heading">
            <HtmlHeading/>
            </Route>
            {/* Text Attribute */}
            <Route path="/html-txt-attr">
            <HtmlTextAttribute/>
            </Route>
            {/* Comments */}
            <Route path="/html-comments">
            <HtmlComments/>
            </Route>
            {/* Links, Images, List and Tables */}
            <Route path="/html-li">
            <HtmlLi/>
            </Route>
            {/* Symbols */}
            <Route path="/html-symbol">
            <HtmlSymbols/>
            </Route>
            {/* Forms */}
            <Route path="/html-forms">
            <HtmlForms/>
            </Route>
            {/* Forms  Attribute*/}
            <Route path="/html-forms-attr">
            <HtmlFormsAttribute/>
            </Route>
            {/* Forms  Elements*/}
            <Route path="/html-forms-ele">
            <HtmlFormElement/>
            </Route>
            {/* Forms  Media*/}
            <Route path="/html-media">
            <HtmlMedia/>
            </Route>
            </Switch>
        </div>
        </Router>
    )
}
