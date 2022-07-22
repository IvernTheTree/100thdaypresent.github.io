const FormInput = (props) => {
    return(
        <div className="formInput">
            <label>Mật Khẩu</label>
            <input placeholder={props.placeholder} />
        </div>
    )
}

export default FormInput