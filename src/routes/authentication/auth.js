import {Button} from "../../components";
import "./auth.styles.css"
import {useState} from "react";


const asideSection = document.getElementById("main");
const mainSection = document.getElementById("aside");
export const Auth =()=>{

    const [addClass, setAddClass] = useState(false)
    const[signUp, setSignup] = useState({
        user_name:'',
        user_email:'',
        password:'',
        confirmPassword:''
    })
    const[login, setLogin] = useState({
        user_email:'',
        user_password:''
    })

    function slideAdd () {
        return( setAddClass(true))
    }
    function slideRemove () {
        return( setAddClass(false))
    }

    function submit(e){
        e.preventDefault()
    }

    return(
        <>
            <div className={"form-container"}>
                <div className={"second-form-container"}>
                    <main className={addClass ? "slideRight" : "slideLeft"}>
                        <div className="form signUp-form">
                            <h2>Create Account</h2>
                            <form>
                                <label>Name</label>
                                <input type="text" name="user_name" className={"input"}/>

                                <label>Email</label>
                                <input type="email" name="user_email" className={"input"}/>

                                <label>Password</label>
                                <input type="password" name={"password"} className={"input"}/>

                                <label>Confirm password</label>
                                <input type="password" name={"confirmPassword"} className={"input"}/>

                                <Button buttonType={"dark"} type="submit" onClick={submit}>Sign Up</Button>
                            </form>
                        </div>

                        <div className="form signIn-form">
                            <h2>Login</h2>
                            <form>
                                <label>Email</label>
                                <input type="email" name="user_email" className={"input"}/>

                                <label>Password</label>
                                <input type="password" name="user_password" className={"input"}/>

                                <Button buttonType={"dark"} type="submit">Sign In</Button>
                            </form>
                        </div>
                    </main>

                    <aside className={addClass ? "slideLeft" : "slideRight"}>
                        <div className="sign-in-block">
                            <h2>Already a User?</h2>

                            <Button type="submit" className={"button-adjustment"} buttonType={"outline"} onClick={slideAdd}>Sign In</Button>
                        </div>
                        <div className="sign-up-block">
                            <h2>New User?</h2>

                            <Button type="submit" className={"button-adjustment"} buttonType={"outline"} onClick={slideRemove}>Sign Up</Button>
                        </div>
                    </aside>
                </div>

            </div>

        </>
    )
}