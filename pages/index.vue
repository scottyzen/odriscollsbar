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
        </div>
        
    </div>
    <div class="container">
        <div class="row">
            <div class="quick-info">
                <div class="quick-info__item">
                    <span class="quick-info__title">Opening Hours</span>
                    <div class="flex">
                        <span class="flex-1">Monday - Thursday</span>
                        <span>11:30 - 11:30</span>
                    </div>
                    <div class="flex">
                        <span class="flex-1">Friday - Saturday</span>
                        <span>11:30 - 12:30</span>
                    </div>
                    <div class="flex">
                        <span class="flex-1">Sunday</span>
                        <span>12:00 - 11:00</span>
                    </div>
                </div>
                <div class="quick-info__item">
                    <span class="quick-info__title">Follow Us</span>
                    <div class="icons flex">
                        <div class="icon">
                            <img src="~/assets/images/icons/Facebook.svg">
                        </div>
                        <div class="icon">
                            <img src="~/assets/images/icons/Twitter.svg">
                        </div>
                        <div class="icon">
                            <img src="~/assets/images/icons/Instagram.svg">
                        </div>
                    </div>
                </div>
                <div class="quick-info__item">
                    <span class="quick-info__title">Instagram</span>
                    <p>Tag your photo with <strong>#odriscolls</strong> to see them here</p>
                </div>
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
    p 
        padding: 0 2rem
        margin-top: 1rem
    +element('image')
        margin: 3rem 0
        border: 10px solid #fff

svg
  width: 100%

.quick-info
    margin-top: 4rem
    +element('item')
        padding: 2rem
    +element('title')
        font-family: $heading-font
        font-weight: 600
        font-size: 1.875rem
        line-height: 2
    +laptop
        column-count: 3
        +element('item')
            break-inside: avoid
            padding: 2rem
    .icons
        .icon
            width: 60px
            margin-right: 2rem

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

