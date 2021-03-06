<template>
  <nav class="nav nav--style relative shadow-lg">
    <div class="flex container">
      <!-- Logo -->
      <div class="logo self-center">
        <nuxt-link to="/">
          <img src="~/assets/images/logo.png" width="150">
        </nuxt-link>
      </div>

      <!-- Burger -->
      <div id="burger">
        <a @click="toggleNav()">
          <button
            class="hamburger hamburger--collapse"
            :class="{ 'is-active': showNav }"
            type="button"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </a>
      </div>

      <!--  Mobile Navigation List -->
      <transition name="slide">
        <ul class="mobile-nav" v-if="showNav">
          <li class="mobile-nav__item mobile-nav__item--first" @click="toggleNav()">
            <nuxt-link class="mobile-nav__link pt-16" to="/" exact>Home</nuxt-link>
          </li>
          <li class="mobile-nav__item" @click="toggleNav()">
            <nuxt-link class="mobile-nav__link" to="/gallery">Gallery</nuxt-link>
          </li>
          <li class="mobile-nav__item" @click="toggleNav()">
            <nuxt-link class="mobile-nav__link" to="/weddings" exact>Weddings</nuxt-link>
          </li>
          <li class="mobile-nav__item" @click="toggleNav()">
            <nuxt-link class="mobile-nav__link" to="/faq" exact>FAQ</nuxt-link>
          </li>
          <li class="mobile-nav__item" @click="toggleNav()">
            <nuxt-link class="mobile-nav__link" to="/bookings" exact>Bookings</nuxt-link>
          </li>
        </ul>
      </transition>

      <!-- Desktop Navigation List -->
      <ul class="desktop-nav" v-if="screenWidth > 992">
        <li class="desktop-nav__item desktop-nav__item--first">
          <nuxt-link to="/" exact>Home</nuxt-link>
        </li>
        <li class="desktop-nav__item">
          <nuxt-link to="/gallery" exact>Gallery</nuxt-link>
        </li>
        <li class="desktop-nav__item">
          <nuxt-link to="/weddings" exact>Weddings</nuxt-link>
        </li>
        <li class="desktop-nav__item">
          <nuxt-link to="/faq" exact>FAQ</nuxt-link>
        </li>
        <li class="desktop-nav__item">
          <nuxt-link to="/bookings" exact>Bookings</nuxt-link>
        </li>
        <li class="desktop-nav__item desktop-nav__item--last">
          <ul class="inline-flex social-icons">
            <li class="social-icons__icon">
              <a href="https://www.facebook.com/ODriscollsBarBeerGarden" target="_blank">
                <img src="~/assets/images/icons/Facebook.svg" alt="facebook logo">
              </a>
            </li>
            <li class="social-icons__icon">
              <img src="~/assets/images/icons/Instagram.svg" alt="instagram logo">
            </li>
            <!-- <li class="social-icons__icon">
                            <img src="~/assets/images/icons/Twitter.svg" alt="">
            </li>-->
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showNav: false,
      screenWidth: ""
    };
  },
  methods: {
    toggleNav() {
      this.showNav = !this.showNav;
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      this.screenWidth = window.innerWidth;
      if (this.screenWidth > 992) {
        this.showNav = false;
      }
    });
  }
};
</script>


<style lang="sass" scoped>
.nav
    width: 100%
    +modifier('style')
        background: $dark-gradient
        background-size: cover

.logo
    padding-left: 2rem
    +tablet 
        padding-left: 1rem
    +laptop 
        padding-left: 0

#burger
    flex: 1
    text-align: right
    padding: 1.5rem 2rem
    z-index: 9999
    
    +laptop
        display: none
        
    .hamburger
        padding: (5px 0 !important)
        opacity: 1
        .hamburger-inner
            &, &::before, &::after
                background-color: $yellow
    .hamburger:focus
        outline: none
        cursor: pointer


.desktop-nav
    list-style-type: none
    display: flex
    flex: 1
    justify-content: flex-end
    font-weight: 700
    font-size: .875rem

    // Element
    +element('item')
        padding: 2rem 1.5rem
        width: auto
        flex-flow: row
        a 
            color: $light
            padding-bottom: 2rem
            &:hover
                color: $yellow                
        .nuxt-link-active
            color: $yellow
            border-bottom: 2px solid $yellow
        &::before
            content: "•"
            color: lighten(#242F3D, 5%)
            display: inline-block
            width: 1.75em
            margin-left: -1.75em


        // Modifier
        +modifier('first')
            &::before
                content: ""
        +modifier('last')
            padding-right: 0

.social-icons
    list-style-type: none
    margin-top: -2rem
    margin-left: -1rem
    +element('icon')
        width: 2rem
        transform: translateY(.65rem)
        padding-bottom: 0


.mobile-nav
    list-style-type: none
    width: 100%
    display: flex
    flex-flow: column
    position: absolute
    left: 0
    background: $dark
    border: 6px solid lighten($dark, 5%)
    padding: 5rem 0 2rem
    margin-top: -3rem
    font-weight: 700
    z-index: 999

    // Element
    +element('item')
        text-align: center
        text-transform: uppercase
        z-index: 10
        max-width: 300px
        margin: auto
        +modifier('first')
            margin-top: 2rem
    +element('link')
        padding: 1.5rem 0 .5rem
        margin-top: .5rem 
        display: block
        color: darken($white, 10%)
        &:hover
            color: $white
            
    .nuxt-link-active, .nuxt-link-active:hover
        color: $yellow
        border-bottom: 3px solid $yellow


// Animation and Transitions
.slide-enter-active
    animation: slide-out 0.5s reverse
    transform-origin: top

.slide-leave-active
    animation: slide-out 600ms ease
    transform-origin: top

@keyframes slide-out
    0%
        transform: translateY(0)

    50%
        transform: translateY(5%)

    100%
        transform: translateY(-110%)
</style>
