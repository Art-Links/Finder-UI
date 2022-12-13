import '../styles/Map.css'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useRef, useState, useEffect, useContext, useCallback } from 'react';
import { AppContext } from '../AuthContext/AppContext';
import SearchSection from '../components/SearchSection';
import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker, InfoWindow } from "@react-google-maps/api";
import { MarkerF } from '@react-google-maps/api'
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption, } from "@reach/combobox";
import "@reach/combobox/styles.css";
import dayjs from 'dayjs'
import { Link, useNavigate } from 'react-router-dom';
import relativTime from 'dayjs/plugin/relativeTime'
import Des from './Des';

const google = window.google

export default function Places() {
    const [selected, setSelected] = useState({ lat: 41.015137, lng: 28.979530 });
    return (<Map selected={selected} >
        <PlacesAutocomplete setSelected={setSelected} selected={selected} />
    </Map >)
}

export function Map({ children, selected, setSelected }) {

    const [Items, setItems] = useState()
    const [activeMarker, setActiveMarker] = useState(null)
    const Navigate = useNavigate()
    useEffect(() => {

        const getItems = async () => {
            const Item = await fetch('http://localhost:3000/items', {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const json = await Item.json()
            // console.log(json)
            if (json?.success) {
                setItems(json?.data)
            }
        }
        getItems()
    }, [])

    const Time = (date) => {
        dayjs.extend(relativTime)
        return dayjs(date).fromNow()
    }

    const { isLoaded, data } = useLoadScript({
        googleMapsApiKey: process.env.apiKey = 'AIzaSyCYOS72gqy9Hubh0rz6MU6lLg6Zjo7DSEw',
        libraries: ["places"],
    });

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <>
            <div className="places-container">
                {children}
            </div>
            <GoogleMap
                zoom={10}
                center={selected || { lat: 41.015137, lng: 28.979530 }}
                mapContainerClassName="map-container"
            >

                <MarkerF position={selected} />

                {/* icon:"http://maps.google.com/mapfiles/ms/icons/blue-dot.png" */}
                {Items?.length > 0 && Items?.map((item) => (
                        <Marker
                            onClick={() => Navigate(`/item/${item?.id}`)}
                            onMouseOver={() => setActiveMarker(item.id)}
                            position={{ lat: parseFloat(item?.latX), lng: parseFloat(item?.longY) }}
                            icon={{
                                url: item?.Category?.icon,
                                // scale: 1,
                                scaledSize: new google.maps.Size(40)
                            }}
                        >
                            {
                                activeMarker == item.id &&
                                <InfoWindow onCloseClick={() => setActiveMarker(0)}>
                                    <Link to={`/item/${item?.id}`}>
                                        <div id='des'>
                                            <img id='imgg' src={item?.img} />
                                            <div>
                                                <div className="times">
                                                    <p>{Time(item?.createdAt)}</p>
                                                </div>
                                                <div id='nema'>{item?.name}</div>
                                            </div>
                                        </div>
                                    </Link>
                                </InfoWindow>
                            }
                        </Marker>
                ))}
            </GoogleMap>

        </>
    );
}

export const PlacesAutocomplete = ({ setSelected, selected }) => {
    let {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete({
        initOnMount: true, // Disable initializing when the component mounts, default is true
    });


    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);


        setSelected({ lat, lng });
    };
    const handleChange = (e) => {
        setValue(e.target.value)

    }
    return (
        <Combobox onSelect={handleSelect} className='hus' >
            <ComboboxInput
                value={value}
                onChange={(e) => handleChange(e)}
                disabled={!ready}
                className="combobox-input"
                placeholder="Finder Search"
            />
            <ComboboxPopover className="222" style={{ zIndex: 9999999999 }}>
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