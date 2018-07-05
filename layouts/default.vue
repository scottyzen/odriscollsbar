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
    width: 100%
    
    +mobile 
        max-width: $mobile-width
    
    +tablet 
        max-width: calc(#{$tablet-width} - 2%)
    
    +laptop 
        max-width: calc(#{$laptop-width} - 6%)
    
    +desktop 
        max-width: calc(#{$desktop-width} - 10%)
    
    +ultra-wide 
        max-width: calc(#{$ultra-wide-width} - 25%)  

.header
    height: 75vh
    min-height: 600px
    background-position: center
    background-repeat: no-repeat
    background-size: 240%
    margin-bottom: -20%

    +mobile
        background-size: 170%
        
    +tablet
        background-size: 140%
        margin-bottom: -10%
        
    +desktop
        height: 87.5vh
        background-size: cover
</style>
