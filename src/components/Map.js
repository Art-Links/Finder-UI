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
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#e9e9e9"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 17
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 29
                        },
                        {
                            "weight": 0.2
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 18
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f5f5f5"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#dedede"
                        },
                        {
                            "lightness": 21
                        }
                    ]
                },
                {
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        {
                            "visibility": "on"
                        },
                        {
                            "color": "#ffffff"
                        },
                        {
                            "lightness": 16
                        }
                    ]
                },
                {
                    "elementType": "labels.text.fill",
                    "stylers": [
                        {
                            "saturation": 36
                        },
                        {
                            "color": "#333333"
                        },
                        {
                            "lightness": 40
                        }
                    ]
                },
                {
                    "elementType": "labels.icon",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "color": "#f2f2f2"
                        },
                        {
                            "lightness": 19
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 20
                        }
                    ]
                },
                {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [
                        {
                            "color": "#fefefe"
                        },
                        {
                            "lightness": 17
                        },
                        {
                            "weight": 1.2
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