<template>
    <div class="nav nav-style absolute">
        <div class="flex container">

            <!-- Logo -->
            <div class="logo">
                <nuxt-link  to="/">
                    <img src="~/assets/images/logo.png" width="180px">
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
                    <li @click="toggleNav()">
                        <nuxt-link to="/" exact>Home</nuxt-link>
                    </li>
                    <span></span>
                    <li @click="toggleNav()">
                        <nuxt-link to="/about" exact>About</nuxt-link>
                    </li>
                    <span></span>
                    <li @click="toggleNav()">
                        <nuxt-link to="/gallery" exact>Gallery</nuxt-link>
                    </li>
                    <span></span>
                    <li @click="toggleNav()">
                        <nuxt-link to="/weddings" exact>Weddings</nuxt-link>
                    </li>
                    <span></span>
                    <li @click="toggleNav()">
                        <nuxt-link to="/faq" exact>FAQ</nuxt-link>
                    </li>
                    <span></span>
                    <li @click="toggleNav()">
                        <nuxt-link to="/bookings" exact>Bookings</nuxt-link>
                    </li>
                </ul>
            </transition>


            <!-- Desktop Navigation List -->
            <ul class="desktop-nav" v-if="screenWidth > 1025">
                <li><nuxt-link to="/" exact>Home</nuxt-link></li>
                <span></span>
                <li><nuxt-link to="/about" exact>About</nuxt-link></li>
                <span></span>
                <li><nuxt-link to="/gallery" exact>Gallery</nuxt-link></li>
                <span></span>
                <li><nuxt-link to="/weddings" exact>Weddings</nuxt-link></li>
                <span></span>
                <li><nuxt-link to="/faq" exact>FAQ</nuxt-link></li>
                <span></span>
                <li><nuxt-link to="/bookings" exact>Bookings</nuxt-link></li>
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
            if (this.screenWidth > 1025) {
                this.showNav = false;
            }
        });
    }
}
</script>


<style lang="sass" scoped>
.nav
    width: 100%

.nav-style
    background: url("~/assets/images/menu-background.png") repeat-x bottom center
    background-size: cover

.logo
    padding: 2rem 0 3rem 3rem

.nav ul
    list-style-type: none
    width: 100%
    display: flex
    position: absolute
    background: $light
    padding-bottom: 2rem
    li
        text-align: center
        text-transform: uppercase
        a 
            color: #666a75
            font-weight: 700
            &.nuxt-link-active
                color: $primary
    &.mobile-nav
        padding-top: 5rem
        margin-top: -3rem
        flex-flow: column
        left: 0
        li 
            z-index: 10
            padding: 1.2rem
            a 
                padding: 1rem 4rem
            a:hover
                background-color: lighten($light, 5%)
                color: $primary

#burger
    flex: 1
    text-align: right
    padding: 1.8rem 3rem
    z-index: 10
    .hamburger:focus
        outline: none
        .hamburger-inner
            &, &::before, &::after
                background-color: #666a75
    button
        cursor: pointer

.nav ul span
    margin-top: 2.4rem
    width: 5px
    height: 5px
    background: url("~/assets/images/bullet.png")
    background-size: cover
    display: none

@media (min-width: 1025px)
    #burger
        display: none
    .nav ul.desktop-nav
        display: flex
        justify-content: flex-end
        position: static
        background: none
        padding: 0
        li
        padding: 0 1.4rem
        padding-top: 2rem
        width: auto
        flex-flow: row
        span
        display: inline-block


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
