import React from 'react'

export default function HtmlElements() {
    return (
        <div>
                        <div style={{marginLeft:"20%"}}>

                <div class="w3-container w3-teal">
                    <h1 className="text-center">HTML Introduction</h1>
                </div>

                <div class="w3-container">
                    <p>The HTML element is everything from the start tag to the end tag:</p>
                    <div style={{fontSize:"20px",padding:"10px",marginBottom:"10px"}}>
<span style={{color:"brown"}}><span style={{color:"mediumblue"}}>&lt;</span>tagname<span style={{color:"mediumblue"}}>&gt;</span></span>Content<span style={{color:"brown"}}><span style={{color:"mediumblue"}}>&lt;</span>/tagname<span style={{color:"mediumblue"}}>&gt;</span></span><br/><br/>
<span style={{color:"brown"}}><span style={{color:"mediumblue"}}>&lt;</span>h1<span style={{color:"mediumblue"}}>&gt;</span></span>Content<span style={{color:"brown"}}><span style={{color:"mediumblue"}}>&lt;</span>/h1<span style={{color:"mediumblue"}}>&gt;</span></span><br/>
<span style={{color:"brown"}}><span style={{color:"mediumblue"}}>&lt;</span>p<span style={{color:"mediumblue"}}>&gt;</span></span>Content<span style={{color:"brown"}}><span style={{color:"mediumblue"}}>&lt;</span>/p<span style={{color:"mediumblue"}}>&gt;</span></span><br/><br/>
</div>
<table class="ws-table-all notranslate table">
<tbody><tr>
<th>Start tag</th>
<th>Element content</th>
<th>End tag</th>
</tr>
<tr>
<td>&lt;h1&gt;</td>
<td>My First Heading</td>
<td>&lt;/h1&gt;</td>
</tr>
<tr>
<td>&lt;p&gt;</td>
<td>My first paragraph.</td>
<td>&lt;/p&gt;</td>
</tr>
<tr>
<td>&lt;br&gt;</td>
<td><em>none</em></td>
<td><em>none</em></td>
</tr>
</tbody></table>
                </div>

</div>
        </div>
    )
}
