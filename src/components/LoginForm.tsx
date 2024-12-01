import { SyntheticEvent, useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   const  LoginSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
        console.log(email, password)
        console.log(ev.target)
    }
    return (
        <>
        <h1 className="text-xl mb-5">Login Form</h1>
        <form className="flex flex-col" onSubmit={LoginSubmit}>
            <input onChange={(ev)=> {setEmail(ev.target.value)}} className="border-spacing-2 rounded-md p-2 mb-2" type="email" name="email" placeholder="email" />
            <input onChange={(ev)=> {setPassword(ev.target.value)}} className="border-spacing-2 rounded-md p-2 mb-2" type="password" placeholder="password" />
            <button className="border-spacing-2 rounded-md p-2 bg-slate-200 text-black text-1xl font-semibold">Submit</button>
        </form>
        </>
    )
}
export default LoginForm;