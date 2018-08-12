<template>
    <div>
        <main-navigation/>
        <nuxt/>
        <main-footer/>
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
    

.container
    margin: auto
    width: calc(100% - 1rem)
    position: relative
    +mobile 
        max-width: calc(#{$mobile-width} - 2%)
    
    +tablet 
        max-width: calc(#{$tablet-width} - 2%)
    
    +laptop 
        max-width: calc(#{$laptop-width} - 4rem)
    
    +desktop 
        max-width: calc(#{$desktop-width} - 10%)
    
    +ultra-wide 
        max-width: 1200px

    +modifier('style')
        background: $white
        border: $border
        box-shadow: $shadow
        z-index: 1
    +modifier('style-dark')
        background: $dark
        border: 6px solid lighten($dark, 5%)
    +modifier('bottom-gap')
        margin-bottom: 100px

.header
    text-align: center
    margin-bottom: -100px
    +mobile
        margin-bottom: -100px
    +tablet
        margin-bottom: -25%
    +desktop
        margin-bottom: -25% 
</style>
