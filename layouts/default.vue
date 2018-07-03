<template>
    <div>
        <main-navigation/>
        <nuxt/>
    </div>
</template>



<style lang="sass">
html
	-ms-text-size-adjust: 100%
	-webkit-text-size-adjust: 100%
	-moz-osx-font-smoothing: grayscale
	-webkit-font-smoothing: antialiased
	box-sizing: border-box
 
*, *:before, *:after, *:focus
	box-sizing: border-box
	margin: 0
	text-decoration: none
    outline: (none !important)
    

.container
    margin: auto
    max-width: 100%
    @include mobile 
        max-width: $mobile-width
    @include tablet 
        max-width: calc(#{$tablet-width} - 4%)
    @include laptop 
        max-width: calc(#{$laptop-width} - 6%)
    @include desktop 
        max-width: calc(#{$desktop-width} - 8%)
    @include ultra-wide 
        max-width: calc(#{$ultra-wide-width} - 20%)  

.header
    height: 75vh
    min-height: 600px
    background-position: center
    background-repeat: no-repeat
    background-size: 240%
    margin-bottom: -20%
    @include mobile
        background-size: 160%
        
    @include tablet
        background-size: 120%
        margin-bottom: -10%
    @include desktop
        height: 87.5vh
        background-size: cover
</style>
