import './login_index.css';
import './login_global.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from '../../redux/apiCalls';
const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(dispatch, { username:username, password:password });
  }

  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  return (
    <form className="login_desktop-1">
      <div className="login_torus2">
        <img className="login_saly-23-icon" alt="" src="../../Assets/saly23@2x.png" />
      </div>
      <div className="login_form">
        <div className="login_back-color"></div>
        <div className="login_form2">
          <div className="login_title">
            <div className="login_welcome-back">Welcome Back</div>
          </div>
          <div className="login_inputs">
            <div className="login_email">
              <div className="login_input-content">
                <div className="login_icontext">
                  <img className="login_icon-small" alt="" src="../../Assets/iconsmall.svg" />
                  <img className="login_icon" alt="" src="../../Assets/icon.svg" />
                  <input
                    type="text"
                    name='email'
                    className="login_placeholder"
                    placeholder="Email"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="login_email">
              <div className="login_input-content">
                <div className="login_icontext">
                  <img className="login_icon" alt="" src="../../Assets/lock.svg" />
                  <input
                    type="password"
                    name='password'
                    className="login_placeholder"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="login_buttons">
            <div className="login_buttons-stack">
              <div className="login_frame-parent">
                <div className="login_frame-wrapper">
                  <div className="login_jnt-button-wrapper">
                    <div className="login_jnt-button">
                      <div className="login_button">
                        <div className="login_content">
                          <img
                            className="login_warning-icon"
                            alt=""
                            src="../../Assets/warning.svg"
                          />
                          <button type="submit" className="login_placeholder" onClick={handleSubmit}>
                            <div className="login_placeholder" style={{ "color": "white" }}>Log In</div>
                          </button>
                          <div className="login_bage">
                            <img
                              className="login_arrow-top-icon"
                              alt=""
                              src="../../Assets/arrow-top.svg"
                            />
                            <div className="login_label-body">
                              <img
                                className="login_arrow-top-icon"
                                alt=""
                                src="../../Assets/arrow-left.svg"
                              />
                              <div className="login_label-text-icon">
                                <img
                                  className="login_icon-small"
                                  alt=""
                                  src="../../Assets/warning1.svg"
                                />
                                <div className="login_textspacer">
                                  <div className="login_placeholder">44</div>
                                  <div className="login_spacer-2px"></div>
                                </div>
                              </div>
                              <img
                                className="login_arrow-top-icon"
                                alt=""
                                src="../../Assets/arrow-right.svg"
                              />
                            </div>
                            <img
                              className="login_arrow-top-icon"
                              alt=""
                              src="../../Assets/arrow-bot.svg"
                            />
                          </div>
                          <img
                            className="login_warning-icon"
                            alt=""
                            src="../../Assets/warning.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="login_have-no-account-yet-parent">
                  <div className="login_placeholder">Have no account yet?</div>
                  <div className="login_button1">
                    <div className="login_button2">
                      <div className="login_content">
                        <img
                          className="login_warning-icon"
                          alt=""
                          src="../../Assets/warning2.svg"
                        />
                        <div className="login_placeholder">Register Here</div>
                        <div className="login_bage1">
                          <img
                            className="login_arrow-top-icon"
                            alt=""
                            src="../../Assets/arrow-top1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="login_back"></div>
        <div className="login_art">
          <img className="login_group-icon" alt="" src="../../Assets/group.svg" />
        </div>
        <div className="login_welcome-back-my-container">
          <span className="login_welcome-back-my-container1">
            <p className="login_welcome-back-my">Welcome back my friend</p>
            <p className="login_login-to-find-your-dream-proje">
              <span>
                <span className="login_login">Login</span>
                <span> to find your dream project</span>
              </span>
            </p>
          </span>
        </div>
      </div>
      <img className="login_torus-icon" alt="" src="../../Assets/torus@2x.png" />
    </form>
  );
}

export default Login;
