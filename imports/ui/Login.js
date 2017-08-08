import React from 'react';
import { Link } from 'react-router';
import { Meteor } from 'meteor/meteor';


export default class Login extends React.Component{

    constructor(props){
        super(props);
        this.state={
            error : ''
        };
    }


    onSubmit(e){
        e.preventDefault();
        Accounts.createUser({email: '', password: ''}, () => {
            let email = this.refs.email.value.trim();
            let password =  this.refs.password.value.trim();

            Meteor.loginWithPassword({email},password, (err)=> {
                if(err){
                    this.setState({error: 'Unable to Login. Check email or password.'});
                }
                else{
                    this.setState({error: ''});

                }

            });

        });

    }

    render(){
        return (
            <div>
                <h1>Short Lnk </h1>

                {this.state.error ? <p>{this.state.error}</p> : undefined}


                <form onSubmit= {this.onSubmit.bind(this)} noValidate>
                    <input type= "email" ref= "email" name="email" placeholder="Email"/>
                    <input type= "password" ref= "password" name= "password" placeholder= "Password"/>
                    <button>Login</button>


                </form>



                <Link to ="/signup"> Create an account</Link>
            </div>
        )
    }
}
