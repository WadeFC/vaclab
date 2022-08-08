import{
    Buttons
} from "./button.styles";

const Button =({children, type})=>{
    return(
        <Buttons type={type}>{children}</Buttons>
    )
}
export {Button}