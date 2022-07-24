import { useState } from "react";
import "../styles/introScreen.css"

const FormInput = (props) => {
    const [focused,setFocused] = useState(false);
    const {onChange, errorMessage, id, ...inputProps} = props;
    const handleFocus = (e) => {
        setFocused(true);
        alert ('hi')
    };

    return(
        <div className="formInput">
            <input {...inputProps} onChange={onChange} onBlur={handleFocus}  onFocus={() => inputProps.name === "password" && setFocused(true)} focused={focused.toString()}/>
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput