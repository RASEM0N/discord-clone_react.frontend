import React from 'react'
import './Login.scss'
import { Button } from '@material-ui/core'
import { fbAuth, providerGoogle } from '../../firebase'

const Login = () => {
    const signIn = () => {
        // do google login...
        fbAuth.signInWithPopup(providerGoogle).catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://i.pinimg.com/736x/6d/cb/58/6dcb58c96bb5e52e43d613c246ca094c.jpg" alt="" />
            </div>
            <Button onClick={signIn} variant="outlined">
                Sign In
            </Button>
        </div>
    )
}

export default Login
