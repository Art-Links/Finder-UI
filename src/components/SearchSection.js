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
















// import React, { useEffect, useState } from 'react'
// import PlacesAutocomplete, {
//     geocodeByAddress,
//     getLatLng
// } from 'react-places-autocomplete';

// // import { Country, State, City } from 'country-state-city';

// const SearchSection = () => {
//     const [address, setAddress] = React.useState("")
//     // const [coordinates, setcoordinates] = React.useState({
//     //     lat: null,
//     //     lng: null
//     // });
//     const handleSelect = async value => {};

//     //  useEffect (()=>{
//     //     console.log(City.getCitiesOfState("TR", "34"))
//     //  },[])


//     return (
//         <PlacesAutocomplete
//             value={address}
//             onChange={setAddress}
//             onSelect={handleSelect}
//         >
//             <section class="content-section">
//                 <div class="content-wrapper">
//                     <div class="search-bar">
//                         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//                             <div>


//                                 <input {...getInputProps({ placeholder: "type" })} id="search-input" class="search-input" type="text" placeholder="Finder Search" />

//                                 <div>
//                                     {loading ? <div>...loading</div> : null}
//                                     {suggestions.map(suggestions => {
//                                         // const style = {
//                                         //     backgroundColor: suggestions.active? "#41b6e6" : "#fff"
//                                         // }
//                                         return (
//                                          <div {...getSuggestionItemProps()}>{suggestions.description}</div>);
//                                     })}
//                                 </div>
//                             </div>
//                         )}

//                     </div>
//                 </div>
//             </section>
//         </PlacesAutocomplete>

//     )
// }

// export default SearchSection