<template>
  <div>
    <div class="header header--style">
    </div>
    <div class="container flex flex-wrap">
        <div class="intro">
            <div class="row">
                <p><span class="first-letter">W</span>elcome ipsum dolor sit amet, consectetur adipisicing elit. Officiis accusamus iste temporibus optio provident amet facere consequuntur dolorem porro tempora. Pblanditiis laudantium, perspiciatis ullam porro. Maiores impedit accusantium non saepe. Quibusdam, porro eligendi facere harum molestiae error. Consectetur, quaerat praesentium.</p>
                <img class="intro__image" src="~/assets/images/pub-front.jpg" alt="O' Driscolls Bar on a snowy day">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, veritatis a illum praesentium excepturi iste? Perferendis veritatis quae non assumenda quibusdam, dolores hic, blanditiis laudantium, perspiciatis ullam porro. Maiores impedit accusantium non saepe deserunt, illo velit veritatis minus optio! Voluptatibus maiores accusantium veniam ex velit reprehenderit saepe quibusdam debitis provident.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eum optio inventore incidunt perspiciatis, assumenda, nesciunt debitis nostrum dolorum reprehenderit ea ipsam, aliquid beatae hic.</p>
                <img class="intro__image" src="~/assets/images/niamh-and-richard.jpg" alt="">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, pariatur?</p>
            </div>
        <div class="sidebar">
            <span class="sidebar__title">Heading</span>
            <p>Amet consectetur adipisicing elit. Quibusdam, porro eligendi facere harum molestiae error. Consectetur, quaerat praesentium.</p>

            <br><hr>

            <span class="sidebar__title">Opening Hours</span>
            <p>Monday 11:30 - 11:30
            <br>Tuesday 11:30 - 11:30
            <br>Wednesday 11:30 - 11:30
            <br>Thursday 11:30 - 11:30
            <br>Friday 11:30 - 12:30
            <br>Saturday 11:30 - 12:30
            <br>Sunday 12:00 - 11:00</p>

            <br><hr>

            <span class="sidebar__title">Instagram</span>
            <p>Tag your photo with <strong>#odriscolls</strong> to see them here</p>
        </div>

        </div>
        
    </div>
    <!-- <div class="container">
        <div class="newsletter">
            <div class="newsletter__description">
                <p>Never miss a thing</p>
                <small>Recieve the latest blog posts, news and upcoming events.</small>
            </div>
            <form class="newsletter-form">
                <small>SIGN UP</small>
                <br>
                <input class="newsletter-form__input" type="text" placeholder="Email">
            </form>
            <div class="button">Send</div>
        </div>
    </div> -->
  </div>
</template>

<style lang="sass">
.header--style
    background-image: linear-gradient(to top, $light 0%,rgba(125,185,232,0) 10%), url("~/assets/images/garden.jpg")
    background-position: 0 20%

.intro
    background: $white
    padding: 3rem 1rem
    width: 100%
    display: flex
    justify-content: space-between
    box-shadow: $shadow
    border: 6px solid $light
    +tablet
        padding: 4rem
    +laptop
        padding: 5rem
        .row
            width: 65%
    +desktop
        .row
            width: 65%
    p 
        padding: 0 2rem
        margin-top: 1rem
    +element('image')
        margin: 3rem 0
        border: 10px solid #fff

.sidebar
    width: 30%
    padding-left: 3rem
    border-left: 2px solid #E4E5E9
    p 
        padding: 0
    +element('title') 
        font-size: 1.8rem
        display: inline-block
        padding: 1rem 0
        font-family: $heading-font
        font-weight: 700

.newsletter
    background: $white
    margin-bottom: 3rem
    display: flex
    border-left: solid 5px $primary
    align-items: center
    +element('description')
        padding-left: 4rem
    .button 
        background: $primary
        padding: 4rem 2rem

.newsletter-form
    margin-left: 5rem
    flex: 1
    +element('input')
        padding: .5rem
        margin: .5rem 1rem .5rem 0

</style>

