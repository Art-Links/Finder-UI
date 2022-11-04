import React from 'react'
import logo2 from '../myimages/logo2.png'


const SearchSection = () => {
    return (
        <section class="content-section">
            <div class="content-wrapper">
                <img class="logo-img" src={logo2} alt="" />
                <div class="search-bar">
                    <i id="search-icon" class="fas fa-search"></i>
                    <input id="search-input" class="search-input" type="text" placeholder="Finder Search" />
                    <i id="key-icon" class="fas fa-keyboard"></i>
                    {/* <i id="mic-icon" class="fas fa-microphone"></i> */}
                </div>
                <div class="search-btns">
                    <button class="google-search-btn">I'm Looking For</button>
                    <button class="lucky-search-btn">I Found This</button>
                </div>
                {/* <div class="language">
            <p>Google Offered in: <a href="">Maori</a></p>
        </div> */}
            </div>
        </section>

    )
}

export default SearchSection