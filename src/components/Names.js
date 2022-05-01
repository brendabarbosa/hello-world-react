import React from "react";

import Name from "./Name.js"

function Names({ names }){
    const listNames =  names.map(name => (
        <Name name={name}/>
    ))
    return (
       <ul>{listNames}</ul>
    );
}

export default Names;