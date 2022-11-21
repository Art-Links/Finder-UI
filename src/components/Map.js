import '../styles/Map.css'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useRef, useState, useEffect, useContext, useCallback } from 'react';
import { AppContext } from '../AuthContext/AppContext';
import SearchSection from '../components/SearchSection';

// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {MarkerF} from '@react-google-maps/api'
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";

import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

export default function Places() {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.apiKey = 'AIzaSyCYOS72gqy9Hubh0rz6MU6lLg6Zjo7DSEw',
        libraries: ["places"],
    });

    if (!isLoaded) return <div>Loading...</div>;
    return <Map />;
}

function Map() {
    // const center = useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);
    const [selected, setSelected] = useState({ lat: 43.45, lng: -80.49 });
    const [center, setCenter] = useState({ lat:  41.0082376, lng: 25.2798 });
    const refMap = useRef(null);

//   const handleBoundsChanged = () => {
//     const mapCenter = refMap.current.getCenter(); //get map center
//     setCenter(selected);
//   };
    return (
        <>
            <div className="places-container">
                <PlacesAutocomplete setSelected={setSelected} selected={selected}/>
            </div>
        {selected && <div  className="places-container">{selected.lat}</div>}
            <GoogleMap
            ref={refMap}
                zoom={15}
                center={selected}
                mapContainerClassName="map-container"
                // onBoundsChanged={useCallback(handleBoundsChanged)}
            >
                {selected && <MarkerF position={selected} />}
            </GoogleMap>
        </>
    );
}

const PlacesAutocomplete = ({ setSelected, selected }) => {
    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
        console.log(address, '1111')
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        console.log('results: ', results)
        const { lat, lng } = await getLatLng(results[0]);
        console.log('lat: ', lat)
        console.log('lng: ', lng)

        setSelected({ lat, lng });
        console.log(selected)
    };
const handleChange = (e) => {
    // console.log('change fired')
    // console.log(status, "status")
    // console.log(e.target.value)z
    // console.log('#'.repeat(10))
    setValue(e.target.value)

}
    return (
        <Combobox onSelect={handleSelect} className='1111' >
            <ComboboxInput
                value={value}
                onChange={(e) => handleChange(e)}
                disabled={!ready}
                className="combobox-input"
                placeholder="Search an address"
            />
            <ComboboxPopover className="222" style={{zIndex: 9999999999}}>
                <ComboboxList apiKey='AIzaSyCYOS72gqy9Hubh0rz6MU6lLg6Zjo7DSEw'>
                    {status === "OK" &&
                        data.map(({ place_id, description }) => (
                            <ComboboxOption key={place_id} value={description} />
                        ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
};













// const PlacesMap = ({ center, zoom, children }) => {
//     const mapRef = useRef(null)
//     const [map, setMap] = useState()
//     useEffect(() => {
//         setMap(new window.google.maps.Map(mapRef.current, {
//             center,
//             zoom,
//             styles:[
//                 {
//                     "featureType": "all",
//                     "elementType": "geometry.fill",
//                     "stylers": [
//                         {
//                             "weight": "2.00"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "all",
//                     "elementType": "geometry.stroke",
//                     "stylers": [
//                         {
//                             "color": "#9c9c9c"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "all",
//                     "elementType": "labels.text",
//                     "stylers": [
//                         {
//                             "visibility": "on"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "landscape",
//                     "elementType": "all",
//                     "stylers": [
//                         {
//                             "color": "#f2f2f2"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "landscape",
//                     "elementType": "geometry.fill",
//                     "stylers": [
//                         {
//                             "color": "#ffffff"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "landscape.man_made",
//                     "elementType": "geometry.fill",
//                     "stylers": [
//                         {
//                             "color": "#ffffff"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "poi",
//                     "elementType": "all",
//                     "stylers": [
//                         {
//                             "visibility": "off"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "road",
//                     "elementType": "all",
//                     "stylers": [
//                         {
//                             "saturation": -100
//                         },
//                         {
//                             "lightness": 45
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "road",
//                     "elementType": "geometry.fill",
//                     "stylers": [
//                         {
//                             "color": "#eeeeee"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "road",
//                     "elementType": "labels.text.fill",
//                     "stylers": [
//                         {
//                             "color": "#7b7b7b"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "road",
//                     "elementType": "labels.text.stroke",
//                     "stylers": [
//                         {
//                             "color": "#ffffff"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "road.highway",
//                     "elementType": "all",
//                     "stylers": [
//                         {
//                             "visibility": "simplified"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "road.arterial",
//                     "elementType": "labels.icon",
//                     "stylers": [
//                         {
//                             "visibility": "off"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "transit",
//                     "elementType": "all",
//                     "stylers": [
//                         {
//                             "visibility": "off"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "water",
//                     "elementType": "all",
//                     "stylers": [
//                         {
//                             "color": "#46bcec"
//                         },
//                         {
//                             "visibility": "on"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "water",
//                     "elementType": "geometry.fill",
//                     "stylers": [
//                         {
//                             "color": "#c8d7d4"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "water",
//                     "elementType": "labels.text.fill",
//                     "stylers": [
//                         {
//                             "color": "#070707"
//                         }
//                     ]
//                 },
//                 {
//                     "featureType": "water",
//                     "elementType": "labels.text.stroke",
//                     "stylers": [
//                         {
//                             "color": "#ffffff"
//                         }
//                     ]
//                 }
//             ]
//         }));
//     }, []);
//     return <>
//         <div ref={mapRef} id='map' />
//         {React.Children.map(children, (child) => {
//             if (React.isValidElement(child)) {
//                 return React.cloneElement(child, { map });
//             }
//         })}
//     </>
// }

// const Marker = (options) => {
//     const [marker, setMarker] = useState();

//     const infowindow = new window.google.maps.InfoWindow({
//         content: options.title,
//     });

//     useEffect(() => {
//         if (!marker) {
//             setMarker(new window.google.maps.Marker());
//         }
//         return () => {
//             if (marker) {
//                 marker.setMap(null);
//             }
//         };
//     }, [marker]);
//     useEffect(() => {
//         if (marker) {
//             marker.setOptions(options);
//             marker.addListener("click", () => {
//                 infowindow.open({
//                     anchor: marker,
//                     shouldFocus: false,
//                 });
//             });
//         }
//     }, [marker, options]);
//     return null;
// };

// const Map = ({}) => {
//     const appCtx = useContext(AppContext)
//     return (
//         <div className='map-container'>
//             <SearchSection />
//             <div className='map-wrapper'>
//                 <Wrapper apiKey='AIzaSyCYOS72gqy9Hubh0rz6MU6lLg6Zjo7DSEw'>
//                     <PlacesMap center={{ lat: 40.9, lng: 28.5 }} zoom={9}>
//                         {
//                             appCtx.places.map((place, i) => {
//                                 return <Marker title={place.title} position={{ lat: place.latitude, lng: place.longitude }} key={i} />
//                             })
//                         }
//                     </PlacesMap>
//                 </Wrapper>
//             </div>
//         </div>
//     )
// }

// export default Map