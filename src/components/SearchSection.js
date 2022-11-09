import React from 'react'
import { Link } from 'react-router-dom'

// import mainLogo from '../myimages/mainLogo.png'

const SearchSection = () => {
    // const dropList = useNavigate()
    // navigate('/category')
  

    // Close the dropdown if the user clicks outside of it


    return (
        <section class="content-section">
            <div class="content-wrapper">
                {/* <img class="main-logo" src={mainLogo} alt="" /> */}
                <div class="search-bar">
                    {/* <i id="search-icon" class="fas fa-search"></i> */}
                    <input id="search-input" class="search-input" type="text" placeholder="Finder Search" />
                    
                </div>
            </div>
        </section>

    )
}

export default SearchSection