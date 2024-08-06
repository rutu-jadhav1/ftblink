import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import toast,{Toaster} from 'react-hot-toast'
import './Navbar.css'

function Navbar() {
    const logoutbt = async ()=>{
        localStorage.clear()
        toast.success('Logged out Successfully')
     setTimeout(()=>{
        window.location.href = '/login'
     }, 3000)
        
    }
  return (
    <div>
         <nav className="navbar navbar-expand-lg shadow p-3 mb-5 bg-white rounded">
                <a className="navbar-brand web-nm" href="#">ShortenMe</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-sec">
                        <li className="nav-item">
                            <a className="nav-link web-direc" href="/main">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link web-direc" href="/login">Login</a>
                        </li>
                        <li className="nav-item">
                        <span className='nav-link logot web-direc' onClick={logoutbt}>
                            Logout
                        </span>
                        </li>
                       
                    </ul>
                </div>
            </nav>
        <Toaster/>
    </div>
  )
}

export default Navbar