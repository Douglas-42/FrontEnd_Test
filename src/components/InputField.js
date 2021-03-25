import "../style/InputField.css"

function InputField(props){
    const {iLabel,iName,iPattern} = props;
    const iPlaceholder = props.iPlaceholder ? props.iPlaceholder : "";
    return(
        <div className="inputComponent">
            <label htmlFor={iName}>{iLabel}</label>
            <input type="text" name={iName} placeholder={iPlaceholder} pattern={iPattern} required/>
        </div>
    )
}

export default InputField;