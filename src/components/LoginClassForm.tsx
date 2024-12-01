import React, { SyntheticEvent } from "react";
class LoginFormClass extends React.Component {
    state = {
        email: '',
        password: '',
    }
     LoginClassSubmit(ev: SyntheticEvent) {
        ev.preventDefault();
        console.log(this.state.email, this.state.password)
        console.log(ev.target)
    }
    render(): React.ReactNode {
        return(
            <>
            <h1 className="text-xl mt-8 mb-5">Login Class Form</h1>
            <form className="flex flex-col" onSubmit={this.LoginClassSubmit.bind(this)}>
                <input onChange={(ev)=> {this.setState({email: ev.target.value})}} className="border-spacing-2 rounded-md p-2 mb-2" type="email" name="email" placeholder="email" />
                <input onChange={(ev)=> {this.setState({password: ev.target.value})}} className="border-spacing-2 rounded-md p-2 mb-2" type="password" placeholder="password" />
                <button className="border-spacing-2 rounded-md p-2 bg-slate-200 text-black text-1xl font-semibold">Submit</button>
            </form>
            </>
        );
    }
}

export default LoginFormClass;