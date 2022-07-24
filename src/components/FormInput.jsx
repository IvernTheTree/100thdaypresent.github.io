import { useState } from "react";
import "../styles/introScreen.css"

const FormInput = (props) => {
    const [focused,setFocused] = useState(false);
    const {onChange, errorMessage, id, ...inputProps} = props;
    const handleFocus = (e) => {
        setFocused(true);
        alert ('hi')
    };
    const checking =(e) =>{
    var check = e.target.value;
    if (check == 160422){
        alert ('Chờ một chút món quà sẽ xuất hiện')
        var websiteButton = document.querySelector(".wrap");
        websiteButton.classList.remove("hide");
    }else{

    }   
    };
    return(
        <div className="formInput">
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} onBlurCapture={checking} focused={focused.toString()}/>
            <span>{errorMessage}</span>
        </div>
    )
}

export default FormInput