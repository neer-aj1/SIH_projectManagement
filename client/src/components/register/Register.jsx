import { useState } from 'react';
import './register_index.css';
import './register_global.css';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [institute, setInstitute] = useState("");
  const [department, setDepartment] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === cpassword) {
      const res = axios.post('http://localhost:5000/api/register', {
        username: username,
        email: email,
        fname: name,
        lname:name,
        password: password,
        institute:institute,
        domain:department,
        userType:"Student",
      }).then((result) => {
        if (result.status === 201) {
          <Navigate to={'/login'} />
          alert('Succesful');
        }
      }).catch(err => {
        alert(err);
        console.log(err);
      });


    }
    else {
      alert('Conform Password is not same as the Password');
    }
  }
  return (
    <div className="registration_desktop-2">
      <div className="registration_torus2-parent">
        <div className="registration_torus2">
          <img className="registration_saly-23-icon" alt="" src="../../Assets/saly23@2x.png" />
        </div>
        <form>
          <div className="registration_form">
            <div className="registration_form2">
              <div className="registration_title">
                <div className="registration_welcome">Welcome</div>
              </div>
              <div className="registration_inputs">
                <div className="registration_password">
                  <div className="registration_input-content">
                    <div className="registration_user-alt-parent">
                      <img
                        className="registration_user-alt-icon"
                        alt=""
                        src="../../Assets/user-alt.svg"
                      />
                      <input
                        type="text"
                        name='name'
                        className="registration_placeholder"
                        placeholder="Name"
                        onChange={(e) => {
                          setName(e.target.value);

                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="registration_password">
                  <div className="registration_input-content">
                    <div className="registration_user-alt-parent">
                      <img className="registration_lock-icon" alt="" src="../../Assets/lock.svg" />
                      <input
                        type="text"
                        name='username'
                        className="registration_placeholder"
                        placeholder="Username"
                        onChange={(e) => {
                          setUsername(e.target.value);
                          console.log(username);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="registration_password">
                  <div className="registration_input-content">
                    <div className="registration_user-alt-parent">
                      <img className="registration_lock-icon" alt="" src="../../Assets/icon.svg" />
                      <input
                        type="email"
                        name='email'
                        className="registration_placeholder"
                        placeholder="Email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                          console.log(email);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="registration_password">
                  <div className="registration_input-content">
                    <div className="registration_user-alt-parent">
                      <img
                        className="registration_lock-icon1"
                        alt=""
                        src="../../Assets/lock1.svg"
                      />
                      <input
                        type="text"
                        name='institute'
                        className="registration_placeholder"
                        placeholder="Institution"
                        onChange={(e) => {
                          setInstitute(e.target.value);
                          console.log(institute);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="registration_input-content4">
                  <div className="registration_user-alt-parent">
                    <div className="registration_lock-icon"></div>
                    <input
                      type="text"
                      name='domain'
                      className="registration_placeholder"
                      placeholder="Department"
                      onChange={(e) => {
                        setDepartment(e.target.value);
                        console.log(department);
                      }}
                    />
                  </div>
                  <img
                    className="registration_input-content-child"
                    alt=""
                    src="../../Assets/vector-441.svg"
                  />

                  <img
                    className="registration_input-content-item"
                    alt=""
                    src="../../Assets/vector-443.svg"
                  />

                  <img
                    className="registration_input-content-inner"
                    alt=""
                    src="../../Assets/vector-442.svg"
                  />
                </div>
                <div className="registration_password">
                  <div className="registration_input-content">
                    <div className="registration_user-alt-parent">
                      <img
                        className="registration_lock-icon"
                        alt=""
                        src="../../Assets/lock2.svg"
                      />
                      <input
                        type="password"
                        name='password'
                        className="registration_placeholder"
                        placeholder="Password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                          console.log(password);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="registration_password">
                  <div className="registration_input-content">
                    <div className="registration_user-alt-parent">
                      <img
                        className="registration_lock-icon"
                        alt=""
                        src="../../Assets/lock2.svg"
                      />
                      <input
                        type="password"
                        name='cpassword'
                        className="registration_placeholder"
                        placeholder="Confirm Password"
                        onChange={(e) => {
                          setCPassword(e.target.value);
                          console.log(cpassword);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="registration_buttons">
                <div className="registration_buttons-stack">
                  <div className="registration_button-parent">
                    <div className="registration_button">
                      <div className="registration_button1">
                        <div className="registration_content">
                          <button type="submit" className="registration_placeholder" onClick={handleSubmit}>
                            Registration
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="registration_have-account-parent">
                      <div className="registration_placeholder">Have an account?</div>
                      <div className="registration_jnt-button">
                        <div className="registration_button2">
                          <div className="registration_content">
                            <div className="registration_placeholder">Log in</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="registration_back-color"></div>
            <div className="registration_back"></div>
            <div className="registration_art">
              <img className="registration_group-icon" alt="" src="../../Assets/group.svg" />
            </div>
            <div className="registration_welcome-aboard-friend-container">
              <span className="registration_welcome-aboard-friend-container1">
                <p className="registration_welcome-aboard-friend">Welcome aboard friend</p>
                <p className="registration_register-to-find-your-dream-pr">
                  <span>
                    <span className="registration_register">Register</span>
                    <span> to find your dream project</span>
                  </span>
                </p>
              </span>
            </div>
          </div>
        </form>

        <img className="registration_torus-icon" alt="" src="../../Assets/torus@2x.png" />
      </div>
    </div>
  );
}

export default Register;
