import React from "react";


const SignUpComponent = () => {


    return (
        <div className="sign-up-container"
            style={
                {
                    backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/classspace-eb69a.appspot.com/o/grass.svg?alt=media&token=cef3cb31-52e2-4095-85c4-51eeeab4b2ea)`
                }}
        >
            <div className="sign-item heading">Welcome to <span className="logohigh">Class</span>Space</div>

            <div className="sign-item description">Sign Up to get access to all the features and resources </div>
            <div className="sign-item">
                <button className="s-btn gbtn">Sign Up With Google</button>

            </div>
            <div className="sign-item ">
                <button className="s-btn fbtn">Sign Up With Facebook</button>

            </div>

        </div>
    )
}

export default SignUpComponent;