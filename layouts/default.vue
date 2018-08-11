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
    +modifier('first')
        transform: translateY(-100px)
        margin-bottom: -100px
        +tablet
            transform: translateY(-150px)
            margin-bottom: -150px
        +desktop
            transform: translateY(-200px)
            margin-bottom: calc(-200px - 4rem)
        +ultra-wide
            transform: translateY(-350px)
            margin-bottom: -350px
    +modifier('bottom-gap')
        margin-bottom: 100px

.header
    margin-bottom: -100px
    +mobile
        margin-bottom: -100px
    +tablet
        margin-bottom: -15%
    +desktop
        margin-bottom: -10% 
</style>
