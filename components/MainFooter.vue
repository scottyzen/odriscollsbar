<template>
    <div class="wrapper">
        <div class="container">
            <div class="contact-info w-full p-8 sm:p-10 md:p-12 xl:p-16 lg:w-11/20">
                <h2 class="text-underline">Get in Touch</h2>
                <div class="columns">
                    <div>
                        <p class="title">Address</p>
                        <p>
                            O' Driscolls Bar,<br>
                            Tinnahinch, <br>
                            Graiguenanagh, <br>
                            Co. Kilkenny
                        </p>
                    </div>
                    <div>
                        <p class="title">Email</p>
                        <p>richardodris@gmail.com</p>
                    </div>
                    <div>
                        <p class="title">Phone</p>
                        <p>+353 59 97 24 124</p>
                    </div>
                    <div>
                        <p class="title">Social</p>
                        <ul>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <GmapMap 
            class="map"
            :center="map.position"
            :zoom="14"
            :options="mapOptions"
            :icon="{path:'M55.296 -56.375v40.32q0 1.8 -1.224 3.204t-3.096 2.178 -3.726 1.152 -3.474 0.378 -3.474 -0.378 -3.726 -1.152 -3.096 -2.178 -1.224 -3.204 1.224 -3.204 3.096 -2.178 3.726 -1.152 3.474 -0.378q3.78 0 6.912 1.404v-19.332l-27.648 8.532v25.524q0 1.8 -1.224 3.204t-3.096 2.178 -3.726 1.152 -3.474 0.378 -3.474 -0.378 -3.726 -1.152 -3.096 -2.178 -1.224 -3.204 1.224 -3.204 3.096 -2.178 3.726 -1.152 3.474 -0.378q3.78 0 6.912 1.404v-34.812q0 -1.116 0.684 -2.034t1.764 -1.278l29.952 -9.216q0.432 -0.144 1.008 -0.144 1.44 0 2.448 1.008t1.008 2.448z'}"
        >
        <GmapMarker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="false"
            @click="center=m.position"
        />
        </GmapMap>
        <div class="bottom-footer text-grey-dark">
            <div class="container">

                <!-- <div>
                    <div class="quick-links">
                        <div class="title">Quick Links</div>
                        <ul class="list-reset">
                            <li>Home</li>
                            <li>About</li>
                            <li>Gallery</li>
                            <li>Wedding</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                </div> -->

                <!-- copywright Information -->
                <div class="copywright w-full flex justify-between px-6">
                    <p>© O' Driscolls Bar 2018</p>
                    <p>by Scott Kennedy</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data () {
        return {
            markers: [{
                position: {
                    lat:52.538673,
                    lng:-6.952916
                }
            }],
            map:{
                position: {
                    lat:52.538673,
                    lng:-6.982807
                }
            },
            mapOptions: {
                // scrollwheel: false,
                navigationControl: false,
                mapTypeControl: false,
                scaleControl: false,
                // draggable: false,
                streetViewControl: false,
                // zoomControl: false,
                fullscreenControl: false,
                
                styles: [
                    {
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#242f3e"
                        }
                        ]
                    },
                    {
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#746855"
                        }
                        ]
                    },
                    {
                        "elementType": "labels.text.stroke",
                        "stylers": [
                        {
                            "color": "#242f3e"
                        }
                        ]
                    },
                    {
                        "featureType": "administrative.locality",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#d59563"
                        }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#d59563"
                        }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#263c3f"
                        }
                        ]
                    },
                    {
                        "featureType": "poi.park",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#6b9a76"
                        }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#38414e"
                        }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "geometry.stroke",
                        "stylers": [
                        {
                            "color": "#212a37"
                        }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels",
                        "stylers": [
                        {
                            "visibility": "simplified"
                        }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.icon",
                        "stylers": [
                        {
                            "visibility": "off"
                        }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text",
                        "stylers": [
                        {
                            "color": "#38414e"
                        },
                        {
                            "visibility": "simplified"
                        }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#9ca5b3"
                        },
                        {
                            "visibility": "simplified"
                        }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                        {
                            "visibility": "simplified"
                        }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels",
                        "stylers": [
                        {
                            "weight": 3
                        }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#746855"
                        }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [
                        {
                            "color": "#1f2835"
                        }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#f3d19c"
                        }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#2f3948"
                        }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#d59563"
                        }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "color": "#17263c"
                        }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.fill",
                        "stylers": [
                        {
                            "color": "#515c6d"
                        }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels.text.stroke",
                        "stylers": [
                        {
                            "color": "#17263c"
                        }
                        ]
                    }
                ]

            }
        }
    },
    mounted() {
        // Change Map position when screen is smaller to center it
        if (window.innerWidth < 960) {
            this.map.position = {
                    lat:52.542673,
                    lng:-6.956916
                }
        }
    }
}
</script>

<style lang="sass" scoped>
.wrapper 
    margin-top: 10rem

.columns
    column-count: 2
    column-gap: 8rem
    break-inside: avoid
    column-rule: 2px solid $light
    ul 
        list-style-type: none

.text-underline
    margin-bottom: 3rem

.contact-info
    background: $white
    border: $border
    display: inline-block
    box-shadow: $shadow
    z-index: 1
    position: relative
    h2 
        margin-top: 0
    .title
        font-weight: bold
        font-size: 1.4rem
        margin-bottom: .25rem

.map
    margin-top: -14rem
    z-index: 0
    width: 120%
    height: 500px
    margin-left: -20%
    +laptop
        margin-top: -25rem

.bottom-footer
    background-color: #17263B
    padding: 2rem 1rem 1rem
    margin-top: -15px
    position: relative
    z-index: 2
</style>
