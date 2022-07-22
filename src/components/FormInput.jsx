import { useState } from "react";
import "../styles/introScreen.css"

const FormInput = (props) => {
    const [focused,setFocused] = useState(false);
    const {onChange, errorMessage, id, ...inputProps} = props;
    const handleFocus = (e) => {
        setFocused(true);
    };
    const checking =(e) =>{
    alert ('hello')
    console.log(e.target.value);
    };
    function showHideButton(){
        websiteButton = document.querySelector(".wrap");
        websiteButton.classList.remove("hide");
      }
    return(
        <div className="formInput">
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} onBlurCapture={checking()} focused={focused.toString()}/>
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput