const LoginComps = () => {

    return (

        <>
        
            <div id="sectionLogin">
                <div id="loginCtn" className="container">
                    <div className="loginTitle">
                        <h2>Login to dashboard</h2>
                        <p>Only admin!</p>
                    </div>
                    <div className="loginBox">
                        <ul>
                            <li>
                                <label htmlFor="username">Username:</label>
                            </li>
                            <li>
                                <input type="text" id="username" placeholder="Enter your username..." />
                            </li>
                            <li>
                                <label htmlFor="password">Password:</label>
                            </li>
                            <li>
                                <input type="text" id="password" placeholder="Enter your password.." />
                            </li>
                            <li>
                                <div className="buttonWr">
                                    <a href="#">Login now!</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        
        </>

    )

}

export default LoginComps;