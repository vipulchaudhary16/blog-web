import React from 'react'
import "../styles/SignUp.css"

export const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="container">

        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input-container">
                <span>
                    <label htmlFor="name">Name</label>
                </span>
                <input type="text" id='name' name='name' placeholder='Enter your name' />
            </div>
            <div className="input-container">
                <span>
                    <label htmlFor="email">Email</label>
                </span>
                <input type="email" id='email' name='email' placeholder='Enter your email' />
            </div>
            <div className="input-container">
                <span>
                    <label htmlFor="password">Password</label>
                </span>
                <input type="password" id='password' name='password' placeholder='Enter your password' />
            </div>
            <button type='submit' className='btn submit-btn'>Sign up</button>
        </form>
        </div>
    )
}
