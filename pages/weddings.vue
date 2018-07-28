<template>
  <div>
    <div class="header header--style">
    </div>
    <div class="container">
        <div class="row flex flex-wrap z-10">

            <div class="text-container">
                <p><span class="first-letter">W</span>elcome ipsum dolor sit amet, consectetur adipisicing elit. Officiis accusamus iste temporibus optio provident amet facere consequuntur dolorem porro tempora. Pblanditiis laudantium, perspiciatis ullam porro. Maiores impedit accusantium non saepe. Quibusdam, porro eligendi facere harum molestiae error. Consectetur, quaerat praesentium.</p>
                <p>Lorem ipsum dolor sit amet, cmaxime consectetur corrupti id quo fuga ut nam error adipisicing elit! Ab quia voluptatibus, deserunt, illo velit veritatis minus optio! Voluptatibus maiores accusantium veniam ex velit reprehenderit saepe quibusdam.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos temporibus, saepe doloribus fugiat non, maiores sequi quas quod velit inventore, maxime consectetur corrupti id quo fuga ut nam error adipisicing elit maxime consectetur corrupti id quo fuga ut nam error adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quia impedit, culpa modi iure voluptatibus maxime consectetur corrupti id quo fuga ut nam error adipisicing elitm axime consectetur corrupti id quo fuga ut nam?</p>
            </div>
            
            <!-- Right Image -->
            <div class="showcase-image">
                <img class="showcase-image__right" src="~/assets/images/bike.jpg" alt="">
            </div>

            <!-- Left Image -->
            <div class="showcase-image">
                <img class="showcase-image__left" src="~/assets/images/first-wedding.jpg" alt="">
            </div>

            <div class="text-container text-container--last">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, veritatis a illum praesentium excepturi iste? Perferendis veritatis quae non assumenda quibusdam, dolores hic, blanditiis laudantium, perspiciatis ullam porro. Maiores impedit accusantium non saepe deserunt, illo velit veritatis minus optio! Voluptatibus maiores accusantium veniam ex velit reprehenderit saepe quibusdam debitis provident.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eum optio inventore incidunt perspiciatis, assumenda, nesciunt debitis .</p>
            </div>
            
        </div>
        
    </div><!-- End on Container -->

    <div class="breaker"></div><!-- End on breaker -->

    <div class="container">
        <div class="row">
            <div class="testimonials">
                <h2 class="text-underline">Testimonials</h2>

                <ul>
                    <li>
                        <p>Hi Niamh,
                            I just wanted to write you this email to thank not only yourself and Richard but EVERY single person from Graiguenamangh who helped out or contributed in some way to make Saturday the most amazing day of our lives!<br>We had an idea in our heads of what we wanted our wedding day to be like but we also felt we had to be realistic, clearly ye didn't feel the same! No matter what we wanted the answer was 'yes' and whatever we requested was done/sourced/built within a few days! When we arrived down on Wednesday we couldn't believe the amount of lads there who seemed more than happy to help us do whatever was needed to get the venue ready and those same lads were still there working away on Friday night!</p>
                            <p>Thank you to all the BnB's, guest houses, self catering cottages etc for accommodating everyone for the weekend, all our guests were well looked after, especially my cousin Aoife who some how ended up staying with the very kind Dominic! Thank you to Mark in Daisy Chain for sourcing the beloved milk churns and Bridget for providing the milk churns! Thank you to David in Duiske Abbey who was there to help us Wednesday evening, Friday evening and Saturday morning, we even had him downloading songs and burning cd's 'til all hours Friday night! Thank you to Olivia and her team for helping Fergus out with the food, the service was incredible and the food on Sunday certainly cleared the hangovers!</p>
                            <p>Thank you to Scott and Shauna and the rest of the bar staff (the real hero's this weekend!) who made jager bomb after jager bomb and worked til all hours without complaining! Thank you the very patient taxi drivers for getting everyone home safe Saturday night. Thank you to Johnny and Eddie for providing the entertainment on Sunday and Damo for leading 'rock the boat' and starting the sing song and lastly thank you to the chairman of the GAA club for the hurls!</p>
                            <p>If i have forgotten anyone I do apologies, there are just so many people to thank! Everyone in Graiguenamanagh should be so proud of themselves and the village and we will be forever grateful for what they have done for us.</p>
                        <p class="testimonials__author">Ciara, David, yer fellow Cats, the Rebels and the Dubs</p>
                    </li>
                </ul>
            </div>
        </div>
    </div><!-- End on Container -->

  </div>
</template>

<style lang="sass" scoped>
.header--style
    background-image: linear-gradient(to top, $light 0%,rgba(125,185,232,0) 10%), url("~/assets/images/garden.jpg")
    background-position: 0 20%

.container
    background: $white
    border: 6px solid $light
    width: 100%
    box-shadow: $shadow
    .row
        padding: 3rem 1rem
        +tablet
            padding: 4rem 3rem
        +laptop
            padding: 6rem
            .row
                width: 65%
        +desktop
            .row
                width: 65%

.text-container
    width: 60%
    margin-bottom: 4rem
    +modifier('last')
        margin-bottom: 0

.showcase-image
    width: 40%
    +element('left')
        box-shadow: $shadow
        border: 6px solid $white
        transform: translateX(-7rem) scale(1.1)
        margin-bottom: -8rem

    +element('right')
        box-shadow: $shadow
        border: 6px solid $white
        margin-top: -8rem
        margin-bottom: 6rem
        transform: translateX(7rem) scale(1.1)

.breaker
    background: url('~/assets/images/candle.jpg') center
    background-size: cover
    background-position: 0 35%
    margin: -4rem 0
    min-height: 550px
    position: relative
    z-index: -10

.testimonials
    text-align: center
    ul
        list-style: none
        margin: 4rem 0
        padding: 0 4rem
        // column-count: 2
        // column-gap: 5rem
        text-align: left
        // padding: 3rem 2rem
        li
            break-inside: avoid
    +element('author')
        margin-top: 2rem
        font-weight: bold
        float: right
</style>
