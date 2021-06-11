import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss'

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '',
            password: ''
         }
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = (event) => {
        const { value, name } = event.target
        this.setState({ [name]: value  })
    } 
    render() { 
        return ( 
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput type="email" name='email' label='email' value={this.state.email} handleChange={this.handleChange} required />
                    <FormInput type="password" name='password' label='password' value={this.state.password} handleChange={this.handleChange} required />

                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} >{' '} Sign in with Google</CustomButton>
                </form>
            </div>
         );
    }
}
 
export default SignIn;
