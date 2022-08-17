import{
    Buttons
} from "./button.styles";

const Button =({children, buttonType,...otherProps})=>{
    return(
        <Buttons buttonType={buttonType} {...otherProps}>{children}</Buttons>
    )
}
export {Button}