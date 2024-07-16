import React, { useState } from 'react';
import './Login.css'; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [otpEnabled, setOtpEnabled] = useState(false);
    const [submitEnabled, setSubmitEnabled] = useState(false);

    const validateLogin = (e) => {
        e.preventDefault();
        if (email && password) {
            // Add your login validation logic here
            console.log('Validating login...');
            // Perform API call or form submission
        } else {
            console.log('Please fill in all fields');
        }
    };

    const enableOtpBtn = () => {
        if (email) {
            setOtpEnabled(true);
        } else {
            setOtpEnabled(false);
        }
    };

    const enableSubmitBtn = () => {
        if (otp.length === 6) {
            setSubmitEnabled(true);
        } else {
            setSubmitEnabled(false);
        }
    };

    const resetOTPFun = () => {
        // Logic to generate and send OTP
        console.log('Generating OTP...');
        // Perform API call to send OTP to the email
    };

    const validateSignIn = (e) => {
        e.preventDefault();
        if (otp.length === 6) {
            // Add your OTP validation logic here
            console.log('Validating OTP...');
            // Perform API call or form submission
        } else {
            console.log('Please enter a valid OTP');
        }
    };

    return (
        <div className="bg-greylight bg-greylight-FFFFFF">
            <div className="container">
                <div className="d-flex mainDiv">
                    <div className="col-md-4 d-none d-md-block">
                        <div className="signin-bg">
                            <h2 className="head2 pt-5">Welcome Back to Semikart</h2>
                            <p className="regular-16">
                                All Your Electronic Need Is Here And Classified!
                            </p>
                        </div>
                    </div>
                    <div className="col-md-8 p-3 d-flex flex-column mt-md-4 align-items-center">
                        <div>
                            <h1 className="signInText mb-0">
                                Log in to continue to your account.
                            </h1>
                            <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        id="password-tab"
                                        data-toggle="tab"
                                        href="#pass"
                                        role="tab"
                                        aria-controls="password"
                                        aria-selected="true"
                                    >
                                        via Password
                                    </a>
                                </li>
                                <li className="nav-item ml-3">
                                    <a
                                        className="nav-link"
                                        id="otp-tab"
                                        data-toggle="tab"
                                        href="#otp"
                                        role="tab"
                                        aria-controls="otp"
                                        aria-selected="false"
                                    >
                                        via OTP
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div
                                    className="tab-pane fade show active"
                                    id="pass"
                                    role="tabpanel"
                                    aria-labelledby="password-tab"
                                >
                                    <form
                                        name="login-form"
                                        action="/userLogin"
                                        id="login-form"
                                        method="post"
                                    >
                                        <input type="hidden" name="flag" id="flag" value="" />
                                        <span
                                            className="error-white"
                                            id="status"
                                            style={{ display: 'none' }}
                                        ></span>
                                        <div className="form-group inputDiv">
                                            <label htmlFor="email" className="mb-1">
                                                Enter Email
                                            </label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-addon bgWhite">
                                                    <i className="fas fa-envelope pencil-dashboard"></i>
                                                </div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    maxLength="70"
                                                    className="form-control inputField"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group inputDiv padding-bottom4px">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <label htmlFor="password" className="mb-1">
                                                    Password
                                                </label>
                                                <p className="fPass mb-0">
                                                    <a href="/forgotPassword">Forgot Password?</a>
                                                </p>
                                            </div>
                                            <div className="input-group mb-3" id="passwordGroup">
                                                <div className="input-group-addon bgWhite">
                                                    <i className="fas fa-lock pencil-dashboard"></i>
                                                </div>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    maxLength="50"
                                                    className="form-control inputField border-right-0"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <div className="input-group-addon eyeSlash">
                                                    <i className="fas fa-eye-slash pencil-dashboard showPassword"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                onClick={validateLogin}
                                                className="btnSignIn text-center w-100"
                                            >
                                                Log In
                                            </button>
                                        </div>
                                        <input
                                            name="csrfToken"
                                            type="hidden"
                                            value="6YWZ-SCDZ-49OE-1X4M-YFZX-RNGD-QMEA-GFHL"
                                        />
                                    </form>
                                </div>
                                <div
                                    className="tab-pane fade"
                                    id="otp"
                                    role="tabpanel"
                                    aria-labelledby="otp-tab"
                                >
                                    <form
                                        name="otpLoginForm"
                                        action="/useOTPLogin"
                                        id="otpLoginForm"
                                        method="post"
                                    >
                                        <input type="hidden" name="flag" id="flag" value="" />
                                        <span
                                            className="error-white"
                                            id="status"
                                            style={{ display: 'none' }}
                                        ></span>
                                        <input type="hidden" name="eid" id="eid" />
                                        <div className="form-group inputDiv">
                                            <label htmlFor="emailfield" className="mb-1">
                                                Enter Email
                                            </label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-addon bgWhite">
                                                    <i className="fas fa-envelope pencil-dashboard"></i>
                                                </div>
                                                <input
                                                    type="email"
                                                    name="emailfield"
                                                    id="emailfield"
                                                    maxLength="70"
                                                    className="form-control inputField"
                                                    value={email}
                                                    onChange={(e) => {
                                                        setEmail(e.target.value);
                                                        enableOtpBtn();
                                                    }}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group inputDiv">
                                            <label htmlFor="otpfield" className="mb-1">
                                                Enter OTP
                                            </label>
                                            <input
                                                type="number"
                                                name="otpfield"
                                                id="otpfield"
                                                required="required"
                                                className="form-control inputField"
                                                maxLength="6"
                                                readOnly={!otpEnabled}
                                                value={otp}
                                                onChange={(e) => {
                                                    setOtp(e.target.value);
                                                    enableSubmitBtn();
                                                }}
                                            />
                                        </div>
                                        <div id="timer_div"></div>
                                        <div>
                                            <button
                                                id="generateOTPBtn"
                                                type="button"
                                                disabled={!otpEnabled}
                                                onClick={resetOTPFun}
                                                className="btnSignIn text-center w-100 has-spinner"
                                            >
                                                Generate OTP
                                            </button>
                                        </div>
                                        <div>
                                            <button
                                                id="submitOTPBtn"
                                                type="button"
                                                disabled={!submitEnabled}
                                                className="btnSignIn text-center w-100 mt-3"
                                                onClick={validateSignIn}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                        <input
                                            name="csrfToken"
                                            type="hidden"
                                            value="6YWZ-SCDZ-49OE-1X4M-YFZX-RNGD-QMEA-GFHL"
                                        />
                                    </form>
                                </div>
                                <div className="mt-2 pt-1 text-center">
                                    <p className="subHeading mb-2 pencil-dashboard">OR</p>
                                </div>
                                <div
                                    id="g_id_onload"
                                    data-client_id="980941377745-9kql4p6ttbtnujaoo5o3bo0v0b5dmd9n.apps.googleusercontent.com"
                                    data-context="signin"
                                    data-ux_mode="popup"
                                    data-callback="handleCredentialResponse"
                                    data-auto_prompt="false"
                                ></div>
                                <div
                                    className="g_id_signin"
                                    data-type="standard"
                                    data-shape="rectangular"
                                    data-theme="filled_blue"
                                    data-text="continue_with"
                                    data-size="large"
                                    data-logo_alignment="left"
                                    data-width="358"
                                ></div>
                                <div className="customGPlusSignIn">
                                    <div
                                        id="my-signin2"
                                        data-width="358"
                                        data-height="43"
                                        data-longtitle="true"
                                    >
                                        <iframe
                                            title="Sign in with Google Button"
                                            id="gsi_754921_291375"
                                            src="https://accounts.google.com/gsi/button?type=standard&shape=rectangular&theme=outline&text=signin_with&size=large&logo_alignment=left&width=364&height=43&client_id=980941377745-9kql4p6ttbtnujaoo5o3bo0v0b5dmd9n.apps.googleusercontent.com&iframe_id=gsi_754921_291375&as=CSmR4XPZrXWhdvsAZFayCA&sp=1667481380589&origin=https%3A%2F%2Fwww.semikart.com&iframe=0&sub=AKmDc6WxTVHRWaTuMxGmMewPDeCddIg0pUdbjHVmdFTJtMCJZ7eyuN7_cxa_D8G_gFtyAKbByAZxwTVG_ixtz7eeqMClZxepUn_W7AkDRg"
                                            title1="Sign in with Google Button"
                                            aria-hidden="true"
                                            style={{
                                                position: 'absolute',
                                                top: '0px',
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        ></iframe>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <p className="signInText">
                                        Don't have an account?
                                        <a href="/signup" className="signInLink">
                                            {' '}
                                            Sign Up{' '}
                                        </a>
                                    </p>
                                </div>
                                <div className="text-center">
                                    <p className="fPass">
                                        <a href="/resendEmailToken">Resend Activation Link?</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="modal fade manufacturerModalDialogMain"
                            id="registerModalSuccess"
                            tabIndex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog manufacturerModalDialog">
                                <div className="modal-content manufacturerModalDialogModalContent p-2 col-md-12 registerDivModal">
                                    <button
                                        type="button"
                                        className="close text-right"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true" className="close-times2">
                                            ×
                                        </span>
                                    </button>
                                    <div className="modal-body pt-0">
                                        <h4 className="text-center mt-0">Registration Success</h4>
                                        <p className="register-pop-up-p text-center mb-0">
                                            You have successfully registered for Semikart market place.{' '}
                                            <br />
                                            Verify your email id to activate your account
                                        </p>
                                        <div className="d-flex justify-content-center align-items-center registerSuccessPageDiv">
                                            <img
                                                className="img-register-success"
                                                src="img/new2018/home/bom/rfq-successful.png"
                                                alt="rfq-successful"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="modal fade manufacturerModalDialogMain"
                            id="registerActModalSuccess"
                            tabIndex="-1"
                            aria-labelledby="exampleModalLabel"
                            aria-hidden="true"
                        >
                            <div className="modal-dialog manufacturerModalDialog">
                                <div className="modal-content manufacturerModalDialogModalContent p-2 col-md-12 registerDivModal">
                                    <button
                                        type="button"
                                        className="close text-right"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                    >
                                        <span aria-hidden="true" className="close-times2">
                                            ×
                                        </span>
                                    </button>
                                    <div className="modal-body pt-0">
                                        <h4 className="text-center mt-0">Congratulations</h4>
                                        <p className="register-pop-up-p text-center">
                                            Your account has been successfully activated!
                                        </p>
                                        <div className="d-flex justify-content-center align-items-center registerSuccessPageDiv">
                                            <img
                                                className="img-register-success"
                                                src="img/new2018/home/bom/register-congratulations-new.png"
                                                alt="register-congratulations"
                                            />
                                        </div>
                                        <p className="register-pop-up-pB text-center">
                                            <a href="/login">Login here</a> to start your journey as a
                                            customer on Semikart.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
