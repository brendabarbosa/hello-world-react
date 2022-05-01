import React, { useState } from "react";

import Button from "./Button.js";

import "./Form.css";

function Form({handleNameAddition}){
    const [inputName, setInputName] = useState('');

    const handleInputChange = (e) => {
        setInputName(e.target.value);
    }

    const handleNameAdditionClick = () => {
        if(!!!inputName){
            alert("Informe um nome");
            return false;
        }
        handleNameAddition(inputName);
        setInputName('');
    }

    return (
        <>
            <input onChange={handleInputChange} value={inputName} type='text'/>
            <Button onClick={handleNameAdditionClick}>SALVAR</Button>   
        </>
    );
}

export default Form;