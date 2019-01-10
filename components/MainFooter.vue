<template>
  <footer class="wrapper">
    <div class="container">
      <div class="contact-info w-full z-10 p-8 sm:p-10 md:p-12 xl:p-16 lg:w-11/20">
        <h2 class="text-underline">Get in Touch</h2>
        <div class="flex flex-wrap">
          <div class="w-full flex flex-wrap md:w-1/2">
            <p class="heading w-1/3 md:w-full">Address</p>
            <p class="w-2/3 md:w-full">O' Driscolls Bar,
              <br>Tinnahinch,
              <br>Graiguenanagh,
              <br>Co. Kilkenny
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
    <div class="bottom-footer text-grey-light text-sm">
      <div class="container pt-6 px-4 md:px-0">
        <div class="flex flex-wrap justify-between">
          <div class="w-full mb-6 lg:flex-1 lg:mr-10">
            <div class="text-base text-orange">Heading</div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut nihil non sint quod, ullam cumque blanditiis error est voluptates excepturi, omnis hic pariatur sunt, autem ducimus voluptate. Blanditiis, minima repellat.</p>
          </div>

          <div class="w-1/3 md:w-1/4 lg:w-32 lg:ml-4">
            <div class="text-base text-orange mb-1">Navigation</div>
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

          <div class="w-1/3 md:w-1/4 lg:w-32 lg:ml-4">
            <div class="text-base text-orange mb-1">Community links</div>
            <ul class="list-reset">
              <li>
                <a class="text-grey-light hover:text-white">Discover Graig</a>
              </li>
              <li>
                <a
                  class="text-grey-light hover:text-white"
                  href="http://villageofthemonks.com/duiskeabbey"
                  target="_blank"
                >Duiske Abbey</a>
              </li>
            </ul>
          </div>

          <div class="w-1/3 md:w-1/4 lg:w-32 lg:ml-4">
            <img src="~/assets/images/tripadvisor.png" alt>
          </div>
        </div>

        <!-- copyright Information -->
        <div
          class="copyright mt-10 text-sm w-full flex justify-between border-t border-grey-darkest py-3 pt-6 lg:px-0"
        >
          <p>© O' Driscolls Bar 2018</p>
          <!-- <p>by Scott Kennedy</p> -->
        </div>
      </div>
      <!-- Back to top button -->
      <a href="#" class="back-to-top">
        <svg
          width="28px"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g id="Page-1" stroke="none" stroke-width="1" fill="#172639" fill-rule="evenodd">
            <g id="icon-shape">
              <polygon id="Combined-Shape" points="7 10 7 18 13 18 13 10 18 10 10 2 2 10 7 10"></polygon>
            </g>
          </g>
        </svg>
      </a>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      markers: [
        {
          position: {
            lat: 52.538673,
            lng: -6.952916
          }
        }
      ],
      map: {
        position: {
          lat: 52.538673,
          lng: -6.982807
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
            elementType: "geometry",
            stylers: [
              {
                color: "#242f3e"
              }
            ]
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#746855"
              }
            ]
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#242f3e"
              }
            ]
          },
          {
            featureType: "administrative.locality",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#d59563"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#d59563"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#263c3f"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#6b9a76"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#38414e"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#212a37"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels",
            stylers: [
              {
                visibility: "simplified"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text",
            stylers: [
              {
                color: "#38414e"
              },
              {
                visibility: "simplified"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#9ca5b3"
              },
              {
                visibility: "simplified"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [
              {
                visibility: "simplified"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "labels",
            stylers: [
              {
                weight: 3
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#746855"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#1f2835"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#f3d19c"
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
              {
                color: "#2f3948"
              }
            ]
          },
          {
            featureType: "transit.station",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#d59563"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#17263c"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#515c6d"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#17263c"
              }
            ]
          }
        ]
      }
    };
  },
  mounted() {
    // Change Map position when screen is smaller to center it
    if (window.innerWidth < 960) {
      this.map.position = {
        lat: 52.542673,
        lng: -6.956916
      };
    }
  }
};
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
.copyright
    border-color: transparentize($white, 0.9)

    // absolute pin-b pin-r mb-6 mr-6 bg-white p-4 rounded-full
.back-to-top
    position: absolute
    bottom: 30px
    right: 30px
    height: 48px
    width: 48px
    background: #fff
    border-radius: 50%
    padding: 10px
    box-shadow: $shadow
    opacity: 0.95
    &:hover
        background: #D49568


</style>
