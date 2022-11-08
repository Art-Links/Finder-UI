import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import mainLogo from '../myimages/mainLogo.png'

const SearchSection = () => {
const navigate = useNavigate()
navigate('/category')

    return (
        <section class="content-section">
            <div class="content-wrapper">
                <img class="main-logo" src={mainLogo} alt="" />
                <div class="search-bar">
                    <i id="search-icon" class="fas fa-search"></i>
                    <input id="search-input" class="search-input" type="text" placeholder="Finder Search" />
                    <i id="key-icon" class="fas fa-keyboard"></i>
                    {/* <i id="mic-icon" class="fas fa-microphone"></i> */}
                </div>

                <div class="search-btns ">
                    <button id='btnCat'to='/category' class="google-search-btn">I Found this</button>
                </div>

                {/* <div class="search-btns">
                    <button id='btnCat1'> <Link  to='/category' class="google-search-btn"> Go and FInde</Link></button>
                </div> */}

                {/* <div class="language">
            <p>Google Offered in: <a href="">Maori</a></p>
        </div> */}
            </div>
        </section>

    )
}

export default SearchSection