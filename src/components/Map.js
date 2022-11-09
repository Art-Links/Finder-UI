import '../styles/Map.css'
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import React, { useRef, useState, useEffect, useContext } from 'react';
import { AppContext } from '../AuthContext/AppContext';
import SearchSection from '../components/SearchSection';

const PlacesMap = ({ center, zoom, children }) => {
    const mapRef = useRef(null)
    const [map, setMap] = useState()
    useEffect(() => {
        setMap(new window.google.maps.Map(mapRef.current, {
            center,
            zoom,
            styles: [
                {
                    "featureType": "all",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "weight": "2.00"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#9c9c9c"
                        }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 45
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#eeeeee"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#7b7b7b"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#46bcec"
                        },
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#c8d7d4"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "color": "#070707"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        }
                    ]
                }
            ]
            
        }));
    }, []);
    return <>
        <div ref={mapRef} id='map' />
        {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, { map });
            }
        })}
    </>
}

const Marker = (options) => {
    const [marker, setMarker] = useState();

    const infowindow = new window.google.maps.InfoWindow({
        content: options.title,
    });

    useEffect(() => {
        if (!marker) {
            setMarker(new window.google.maps.Marker());
        }
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);
    useEffect(() => {
        if (marker) {
            marker.setOptions(options);
            marker.addListener("click", () => {
                infowindow.open({
                    anchor: marker,
                    shouldFocus: false,
                });
            });
        }
    }, [marker, options]);
    return null;
};

const Map = () => {
    const appCtx = useContext(AppContext)
    console.log(appCtx)
    return (

        <div className='map-container'>
            <SearchSection />
            <div className='map-wrapper'>
                <Wrapper apiKey='AIzaSyCYOS72gqy9Hubh0rz6MU6lLg6Zjo7DSEw'>
                    <PlacesMap center={{ lat: 40.9, lng: 28.5 }} zoom={9}>
                        {
                            appCtx.places.map((place, i) => {
                                return <Marker title={place.title} position={{ lat: place.latitude, lng: place.longitude }} key={i} />
                            })
                        }
                    </PlacesMap>
                </Wrapper>
            </div>
        </div>
    )
}

export default Map