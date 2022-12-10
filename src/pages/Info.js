import React from 'react'
import '../styles/Info.css'

const Info = () => {
    return (
        <>
            <div>
                <h2 style="text-align:center">User Profile Card</h2>
                <div class="card">
                    <img src="H:\pictures\artwork_Alice__Madness_Returns_Cheshire_Cat_1920x1200.jpg" alt="John" />
                    <img id="avatar" src="H:\pictures\artwork_Alice__Madness_Returns_Cheshire_Cat_1920x1200.jpg" alt="John" />
                    <div id="information">
                        <h1>Emad & Abdullmalek</h1>
                        <p class="title">CEO & Founder, Example</p>
                        <p>Harvard University</p>
                    </div>
                    <div>
                        <a href="#">Hello<i class="fa fa-dribbble"></i></a>
                        <a href="#">We<i class="fa fa-twitter"></i></a>
                        <a href="#">Are<i class="fa fa-linkedin"></i></a>
                        <a href="#">The Finder<i class="fa fa-facebook"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Info