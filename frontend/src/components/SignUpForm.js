import React from 'react';
import {Link} from 'react-router-dom';

const SignUpForm =()=>{
    return(
        <section className="sign_in_area bg_color sec_pad">
            <div className="container">
                <div className="sign_info">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="sign_info_content">
                                <h3 className="f_p f_600 f_size_24 t_color3 mb_40">Already have an account?</h3>
                                <h2 className="f_p f_400 f_size_30 mb-30">Login now and<br/> make a<br/><span className="f_700">difference</span> </h2>
                                <Link exact title="Faq" className="nav-link" to='/SignIn'><button type="submit" className="btn_three sign_btn_transparent">Sign In</button></Link> 
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="login_info">
                                <h2 className="f_p f_600 f_size_24 t_color3 mb_40">Sign Up</h2>
                                <form action="#" className="login-form sign-in-form">
                                <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Firstname</label>
                                        <input type="text" placeholder="Name"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Lastname</label>
                                        <input type="text" placeholder="Name"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Username</label>
                                        <input type="text" placeholder="Name"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Email Address</label>
                                        <input type="text" placeholder="saasland@gmail.com"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Contact Number</label>
                                        <input type="text" placeholder="999-999-9999"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Password</label>
                                        <input type="password" placeholder="******"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Confirm Password</label>
                                        <input type="password" placeholder="******"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Gender</label>
                                        <input type="radio" name='gender' value='male'/><label>Male</label>
                                        <input type="radio" name='gender' value='female'/><label>Female</label>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Blood Group</label>
                                        <input type="text" placeholder="Example: A+"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Age</label>
                                        <input type="text" placeholder="40"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Height</label>
                                        <input type="text" placeholder="165"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Weight</label>
                                        <input type="text" placeholder="65"/>
                                    </div>

                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Tested Covid+</label>
                                        <input type="radio" name='covid' value='yes'/><label>Yes</label>
                                        <input type="radio" name='covid' value='no'/><label>No</label>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Tested HIV</label>
                                        <input type="radio" name='hiv' value='yes'/><label>Yes</label>
                                        <input type="radio" name='hiv' value='no'/><label>No</label>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Last time blood donated on</label>
                                        <input type="date"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Any undergoing medications</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="form-group text_box">
                                        <label className="f_p text_c f_400">Any other health issue</label>
                                        <input type="text"/>
                                    </div>
                                    <div className="extra mb_20">
                                        <div className="checkbox remember">
                                            <label>
                                                <input type="checkbox"/> I agree to terms and conditions of this website
                                            </label>
                                        </div>
                                        
                                        <div className="forgotten-password">
                                            <a href="/#">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <button type="submit" className="btn_three">Sign Up</button>
                                        <div className="social_text d-flex ">
                                            <div className="lead-text">Or Sign up Using</div>
                                            <ul className="list-unstyled social_tag mb-0">
                                                <li><a href="/#"><i className="ti-facebook"></i></a></li>
                                                <li><a href="/#"><i className="ti-twitter-alt"></i></a></li>
                                                <li><a href="/#"><i className="ti-google"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default SignUpForm;