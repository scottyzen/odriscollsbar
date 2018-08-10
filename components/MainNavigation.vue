<template>
    <div class="nav nav--style relative shadow-lg">
        <div class="flex container">

            <!-- Logo -->
            <div class="logo self-center">
                <nuxt-link  to="/">
                    <img src="~/assets/images/logo.png" width="160px">
                </nuxt-link>
            </div>

            <!-- Burger -->
            <div id="burger">
                <a @click="toggleNav()">
                    <button class="hamburger hamburger--collapse" :class="{ 'is-active': showNav }" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </a>
            </div>

            <!--  Mobile Navigation List -->
            <transition name="slide">
                <ul class="mobile-nav" v-if="showNav">
                    <li class="mobile-nav__item" @click="toggleNav()">
                        <nuxt-link to="/" exact>Home</nuxt-link>
                    </li>
                    <li class="mobile-nav__item" @click="toggleNav()">
                        <nuxt-link to="/about" exact class="line-through">About</nuxt-link>
                    </li>
                    <li class="mobile-nav__item" @click="toggleNav()">
                        <nuxt-link to="/gallery" exact class="line-through">Gallery</nuxt-link>
                    </li>
                    <li class="mobile-nav__item" @click="toggleNav()">
                        <nuxt-link to="/weddings" exact>Weddings</nuxt-link>
                    </li>
                    <li class="mobile-nav__item" @click="toggleNav()">
                        <nuxt-link to="/faq" exact>FAQ</nuxt-link>
                    </li>
                    <li class="mobile-nav__item" @click="toggleNav()">
                        <nuxt-link to="/bookings" exact class="line-through">Bookings</nuxt-link>
                    </li>
                </ul>
            </transition>


            <!-- Desktop Navigation List -->
            <ul class="desktop-nav" v-if="screenWidth > 992">
                <li class="desktop-nav__item desktop-nav__item--first">
                    <nuxt-link to="/" exact>Home</nuxt-link>
                </li>
                <li class="desktop-nav__item">
                    <nuxt-link to="/about" exact>About</nuxt-link>
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
                <li class="desktop-nav__item desktop-nav__item--last">
                    <nuxt-link to="/bookings" exact>Bookings</nuxt-link>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            showNav: false,
            screenWidth: ''
        }
    },
    methods:{
        toggleNav(){
                this.showNav = !this.showNav;
        }
    },
    mounted() {
        this.screenWidth = window.innerWidth;
        window.addEventListener('resize',  () => {
            this.screenWidth = window.innerWidth;
            if (this.screenWidth > 992) {
                this.showNav = false;
            }
        });
    }
}
</script>


<style lang="sass" scoped>
.nav
    width: 100%
    +modifier('style')
        background: $dark
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
    z-index: 10
    
    +laptop
        display: none
        
    .hamburger
        padding: (5px 0 !important)
    .hamburger:focus
        outline: none
        cursor: pointer
        .hamburger-inner[data-v-42076448]
            &, &::before, &::after
                background-color: $yellow


.desktop-nav
    list-style-type: none
    display: flex
    flex: 1
    justify-content: flex-end
    font-weight: 700

    // Element
    +element('item')
        padding: 2.5rem 1.5rem
        width: auto
        flex-flow: row
        a 
            color: $light
            padding-bottom: 2.5rem
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


.mobile-nav
    list-style-type: none
    width: 100%
    display: flex
    flex-flow: column
    position: absolute
    left: 0
    background: $light
    padding: 5rem 0 2rem
    margin-top: -3rem
    font-weight: 700

    // Element
    +element('item')
        text-align: center
        text-transform: uppercase
        z-index: 10
        max-width: 300px
        margin: auto
        padding: 1.2rem
        a
            color: #666a75
            padding: 1rem 4rem
        a:hover
            background-color: lighten($light, 5%)
            color: $primary
        .nuxt-link-active
            color: $primary

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
