import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (

        <footer>
            {/* <div class="footer-content upper-footer">
            <p>New Zealand</p>
        </div> */}
            <div id="footer" className="footer-content lower-footer">
                <ul className="lower-left-footer">
                    <li>
                        <Link href="">About</Link >
                    </li>
                    <li>
                        <Link href="">Contect us</Link >
                    </li>
                    <li>
                        <Link href="">Privacy</Link >
                    </li>
                </ul>
                <ul className="lower-right-footer">
                    <li>
                        <Link id='By' href="">Created By @ArtLinks</Link >
                    </li>
                    <a id="go-up" href="#"><span className="material-icons">expand_less</span></a>
                </ul>
            </div>
        </footer>
    )
}

export default Footer