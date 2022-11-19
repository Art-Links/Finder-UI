import React from 'react'

const Footer = () => {
    return (

        <footer>
            {/* <div class="footer-content upper-footer">
            <p>New Zealand</p>
        </div> */}
            <div id="footer" className="footer-content lower-footer">
                <ul className="lower-left-footer">
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contect us</a>
                    </li>
                    <li>
                        <a href="">Privacy</a>
                    </li>
                </ul>
                <ul className="lower-right-footer">
                    <li>
                        <a id='By' href="">Created By @ArtLinks</a>
                    </li>
                    <a id="go-up" href="#"><span className="material-icons">expand_less</span></a>
                </ul>
            </div>
        </footer>
    )
}

export default Footer