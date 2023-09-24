import { Link } from 'react-router-dom';
import './homepage_global.css';
import './homepage_index.css';
import { useDispatch, useSelector } from 'react-redux';
import { loggingOut } from '../../redux/apiCalls';
import { logOut } from '../../redux/userRedux';
export const Homepage = () => {
  const user = useSelector(state => state.user.currentUser);
  const dispatch = useDispatch();
 


  const handleLogout = () =>{
    loggingOut(dispatch);
  }

  return (
    <div className="desktop-1">
      <div className="component-1">
        <div className="section-hero">
          <img className="group-icon" alt="" src="../../Assets/group_hp.svg" />

          <Link to={'/'}><img className="group-icon1" alt="" src="../../Assets/group1.svg" /></Link>

          <div className="collaborate-share-innovate-parent">
            <div className="collaborate-share-innovate">
              Collaborate, Share, Innovate!
            </div>
            <div className="your-one-stop-platform">
              Your one-stop platform for university students to showcase their
              innovations, collaborate with peers, and unlock endless
              possibilities.
            </div>
            <div className="group">
              <div className="rectangle"></div>
              <div className="find-a-project">Find a project</div>
              <div className="frame">
                <div className="search">search</div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="image-home-page-icon"
          alt=""
          src="../../Assets/image-home-page@2x.png"
        />
        <div className="navigation">
          <div className="navigation-child"></div>
          <div className="connections">Connections</div>
          <div className="projects">Projects</div>
          <div className="collaboration">Collaboration</div>
          {user ? <button style={{ marginLeft: '30px' }} onClick={handleLogout} className="frame1">
            <div  className="sign-up">Log Out</div>
          </button> :
            <Link to={'/register'}>
              <div className="frame1">
                <div className="sign-up">Sign Up</div>
              </div>
            </Link>
          }

          {!user ? <Link to={'/login'} style={{ textDecoration: 'none', color: 'white' }}>

            <div className="login">Login</div>
          </Link> :
            <div style={{ width: '200px' }} className="login">Hello, {user.name}</div>}

          <div className="plagarism-checker">Plagarism checker</div>
          <img className="favicon-1" alt="" src="../../Assets/favicon-1@2x.png" />

          {/* <div className="notifications-none">notifications_none</div> */}
        </div>
      </div>
    </div>
  )
}

export default Homepage;