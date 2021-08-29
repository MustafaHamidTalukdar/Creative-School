import React from 'react'
import logo from '../../assests/Boilerplate.PNG'

export default function HtmlBoilerPlate() {
    return (
        <div>
                        <div style={{marginLeft:"25%"}}>

<div class="w3-container w3-teal">
    <h1 className="text-center">HTML Boilerplate</h1>
</div>

<div class="w3-container my-5">
    <h1 style={{fontWeight:"bold"}}>How Does HTML Documents Looks Like?</h1>
    <img src={logo} alt="Logo" />
    <h1>Explanation</h1>
    <ul>
<li>The <code class="w3-codespan">&lt;!DOCTYPE html&gt;</code> declaration defines 
that this document is an HTML5 document</li>
<li>The <code class="w3-codespan">&lt;html&gt;</code> element is the root element of an HTML 
page</li>
 <li>The <code class="w3-codespan">&lt;head&gt;</code> element contains meta information about the 
 HTML page</li>
 <li>The <code class="w3-codespan">&lt;title&gt;</code> element specifies a title for the 
 HTML page (which is shown in the browser's title bar or in the page's tab)</li>
 <li>The <code class="w3-codespan">&lt;body&gt;</code> element defines the 
 document's body, and is a container for all the visible contents, such as 
 headings, paragraphs, images, hyperlinks, tables, lists, etc.</li>
</ul>
</div>

</div>
        </div>
    )
}
