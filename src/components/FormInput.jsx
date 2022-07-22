import { useState } from "react";
import "../styles/introScreen.css"

const FormInput = (props) => {
    const [focused,setFocused] = useState(false);
    const {onChange, errorMessage, id, ...inputProps} = props;
    const handleFocus = (e) => {
        setFocused(true);
    };

    return(
        <div className="formInput">
            <input defaultValue="Ivy" {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput