import React from 'react'

export const LogIn = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div className="container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input-container">
                    <span>
                        <label htmlFor="Email">Name</label>
                    </span>
                    <input type="email" id='email' name='email' placeholder='Enter your email' />
                </div>
                <div className="input-container">
                    <span>
                        <label htmlFor="password">Password</label>
                    </span>
                    <input type="password" id='password' name='password' placeholder='Enter your password' />
                </div>
                <button type='submit' className='btn submit-btn'>Log In</button>
            </form>
        </div>
    )
}
