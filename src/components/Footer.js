import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <>
            {/* <div class="footer-content upper-footer">
            <p>New Zealand</p>
        </div> */}
            <div id="footer" className="footer-content lower-footer">
                <div id='footerContent' className="lower-left-footer">

                    <Link className='footercontent' href="">About</Link >

                    <Link className='footercontent' href="">ContectUs</Link >

                    <Link className='footercontent' href="">Privacy</Link >
                </div>

                <div className="lower-right-footer">

                    <Link id='By' href="">Created By @ArtLinks</Link >

                    <a id="go-up" href="#"><span className="material-icons">expand_less</span></a>
                </div>
            </div>
        </>
    )
}

export default Footer