<template>
    <footer class="wrapper">
        <div class="container">
            <div class="contact-info w-full z-10 p-8 sm:p-10 md:p-12 xl:p-16 lg:w-11/20">
                <h2 class="text-underline">Get in Touch</h2>
                <div class="flex flex-wrap">
                    <div class="w-full flex flex-wrap md:w-1/2">
                        <p class="heading w-1/3 md:w-full">Address</p>
                        <p class="w-2/3 md:w-full">
                            O' Driscolls Bar,<br>
                            Tinnahinch,<br>
                            Graiguenanagh,<br>
                            Co. Kilkenny
                        </p>
                    </div>
                    <div class="w-full flex flex-wrap md:w-1/2 content-start">
                        <p class="heading w-1/3 md:w-full">Social</p>
                        <ul class="mb-4 list-reset w-2/3 md:w-full">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                        </ul>
                    </div>
                    <div class="w-full flex flex-wrap md:w-1/2">
                        <p class="heading w-1/3 md:w-full">Email</p>
                        <p class="w-2/3 md:w-full">odriscolls@gmail.com</p>
                    </div>
                    
                    <div class="w-full flex flex-wrap md:w-1/2">
                        <p class="heading w-1/3 md:w-full">Tel</p>
                        <p class="w-2/3 md:w-full">059 97 24 124</p>
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
        <div class="bottom-footer text-grey text-sm">
            <div class="container">

                <div class="flex flex-wrap justify-between my-10">

                    <div class="p-8 w-full md:py-10 md:pr-10 lg:pl-0 lg:flex-1">
                        <div class="text-base text-orange">Heading</div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nihil non sint quod, ullam cumque blanditiis error est voluptates excepturi, omnis hic pariatur sunt, autem ducimus voluptate. Blanditiis, minima repellat.</p>
                    </div>

                    <div class="p-8">
                        <div class="text-base text-orange">Navigation</div>
                        <ul class="list-reset">
                            <li>
                                <nuxt-link class="text-grey hover:text-white" to="/" exact>Home</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="text-grey hover:text-white" to="/gallery" exact>Gallery</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="text-grey hover:text-white" to="/history" exact>History</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="text-grey hover:text-white" to="/weddings" exact>Weddings</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="text-grey hover:text-white" to="/bookings" exact>Bookings</nuxt-link>
                            </li>
                            <li>
                                <nuxt-link class="text-grey hover:text-white" to="/FAQ" exact>FAQ</nuxt-link>
                            </li>
                        </ul>
                    </div>

                    <div class="p-8 pr-0">
                        <div class="text-base text-orange">Community links</div>
                        <ul class="list-reset">
                            <li class="hover:text-white">Discover Graig</li>
                            <li class="hover:text-white">Duiske Abbey</li>
                            <li class="hover:text-white">another link</li>
                            <li class="hover:text-white">another link</li>
                        </ul>
                    </div>

                    <div class="p-10 pt-8 pr-0 w-1/3 lg:w-1/5">
                        <img src="~/assets/images/tripadvisor.png" alt="">
                    </div>
                </div>

                <!-- copywright Information -->
                <div class="copywright text-sm w-full flex justify-between border-t border-grey-darkest p-8 py-3 pt-6 lg:px-0">
                    <p>© O' Driscolls Bar 2018</p>
                    <!-- <p>by Scott Kennedy</p> -->
                </div>
            </div>
        </div>
    </footer>
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
    margin-top: 8rem

.text-underline
    margin-bottom: 3rem

.contact-info
    background: $white
    border: $border
    box-shadow: $shadow
    position: relative
    h2 
        margin-top: 0
        font-size: 2.375rem
    .heading
        font-weight: bold
        font-size: 1.2rem
        margin-bottom: .2rem

.map
    margin-top: -8rem
    z-index: 0
    width: 120%
    height: 500px
    margin-left: -20%
    +laptop
        margin-top: -25rem

.bottom-footer
    background: $darkest
    padding-top: 15px
    margin-top: -15px
    position: relative
    z-index: 2
</style>
