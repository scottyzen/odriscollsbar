<template>
  <div>
    <div>
        
        <picture>
            <source srcset="~/assets/images/garden-large.jpg" media="(min-width: 1200px)">
            <source srcset="~/assets/images/garden-medium.jpg" media="(min-width: 576px)">
            <img src="~/assets/images/garden.jpg" alt="Beer garden ready for a wedding">
        </picture>
    </div>
    
    <div class="container container--first">
            <div class="row content flex flex-wrap mt-16">
                <div class="w-1/2 pr-10 my-16 text-area">
                    <p class="mt-8"><span class="first-letter">F</span>orem ipsum dolor sit amet, consectetur adipisicing elit. Officiis accusamus iste temporibus optio provident amet facere consequuntur dolorem porro tempora. Pblanditiis laudantium, perspiciatis ullam porro. Maiores impedit accusantium non saepe. Quibusdam, porro eligendi facere harum molestiae error. Consectetur, quaerat praesentium.</p>
                    <p>Lorem ipsum dolor sit amet, cmaxime consectetur corrupti id quo fuga ut nam error adipisicing elit! Ab quia voluptatibus, deserunt, illo velit veritatis minus optio! Voluptatibus maiores accusantium veniam ex velit reprehenderit saepe quibusdam.</p>
                    <p>Dignissimos temporibus, saepe doloribus fugiat non, maiores sequi quas quod velit inventore, maxime consectetur corrupti id quo fuga ut nam error adipisicing elit maxime consectetur corrupti id quo fuga ut nam error adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quia impedit, culpa modi iure voluptatibus maxime consectetur corrupti id quo fuga ut nam error adipisicing elitm axime consectetur corrupti id quo fuga ut nam?</p>
                </div>

                <div class="w-1/2 pl-10">
                    <img class="" src="~/assets/images/bike.jpg" alt="">
                </div>

                <div class="w-1/2 pr-10">
                <img class="" src="~/assets/images/first-wedding.jpg" alt="">
                </div>

                <div class="w-1/2 pl-10 mt-8 text-area">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, is a veritatis a illum praesentium excepturi iste? Perferendis veritatis quae non assumenda quibusdam, dolores hic, blanditiis laudantium, perspiciatis ullam porro. Maiores impedit accusantium non saepe deserunt, illo velit veritatis minus optio! Voluptatibus maiores accusantium veniam ex velit reprehenderit saepe quibusdam debitis provident.</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eum optio inventore incidunt perspiciatis, assumenda, nesciunt debitis .</p> 
                </div>
                
            </div>
        
        
    </div><!-- End on Container -->

    <div class="image-divider">
        <picture>
            <source srcset="~/assets/images/candle-large.jpg" media="(min-width: 1200px)">
            <source srcset="~/assets/images/candle-medium.jpg" media="(min-width: 576px)">
            <img src="~/assets/images/candle.jpg" alt="Candle on bench in beer garden">
        </picture>  
    </div><!-- End on Image Divider -->

    <div class="container container--style mb-16">
        <div class="row">
            <div class="testimonials px-16 py-16">
                <h2 class="text-underline mt-4">Testimonials</h2>

                <ul class="">
                    <li class="testimonials__list-item">
                        <p>Hi Niamh,<br>I just wanted to write you this email to thank not only yourself and Richard but EVERY single person from Graiguenamangh who helped out or contributed in some way to make Saturday the most amazing day of our lives! We had an idea in our heads of what we wanted our wedding day to be like but we also felt we had to be realistic, clearly ye didn't feel the same! No matter what we wanted the answer was 'yes' and whatever we requested was done/sourced/built within a few days! When we arrived down on Wednesday we couldn't believe the amount of lads there who seemed more than happy to help us do whatever was needed to get the venue ready and those same lads were still there working away on Friday night!</p>
                        <p>Thank you to all the BnB's, guest houses, self catering cottages etc for accommodating everyone for the weekend, all our guests were well looked after, especially my cousin Aoife who some how ended up staying with the very kind Dominic! Thank you to Mark in Daisy Chain for sourcing the beloved milk churns and Bridget for providing the milk churns! Thank you to David in Duiske Abbey who was there to help us Wednesday evening, Friday evening and Saturday morning, we even had him downloading songs and burning cd's 'til all hours Friday night! Thank you to Olivia and her team for helping Fergus out with the food, the service was incredible and the food on Sunday certainly cleared the hangovers!</p>
                        <p>Thank you to Scott and Shauna and the rest of the bar staff (the real hero's this weekend!) who made jager bomb after jager bomb and worked til all hours without complaining! Thank you the very patient taxi drivers for getting everyone home safe Saturday night. Thank you to Johnny and Eddie for providing the entertainment on Sunday and Damo for leading 'rock the boat' and starting the sing song and lastly thank you to the chairman of the GAA club for the hurls!</p>
                        <p>If i have forgotten anyone I do apologies, there are just so many people to thank! Everyone in Graiguenamanagh should be so proud of themselves and the village and we will be forever grateful for what they have done for us.</p>
                        <p class="testimonials__author">Ciara & David Herity</p>
                    </li>
                    <li class="testimonials__list-item">
                        <p>Niamh and Richard were so welcoming and went out of their way to accommodate all of us .It was a pleasure holding our party there and would highly recommend their premises for your special occasion</p>
                        <p class="testimonials__author">Sandra Proctor</p>
                    </li>
                </ul>
            </div>
        </div>
    </div><!-- End on Container -->

  </div>
</template>

<style lang="sass" scoped>
.content
    img
        border: $border
        box-shadow: $shadow

.text-area
    p
        padding: 0 2rem

.image-divider
    margin: -2rem 0
    position: relative
    z-index: -10
    +tablet
        margin: -3rem 0
    +laptop
        margin: -4rem 0

.testimonials
    text-align: center
    padding-bottom: 4rem
    ul
        list-style: none
        margin: 1rem 0
        text-align: left

    +element('list-item')
        background: url('~/assets/images/quote.png') no-repeat
        padding: 1rem
        +tablet
            padding: 5rem

    +element('author')
        margin-top: 2rem
        width: 100%
        text-align: right
        font-weight: bold
        &::before
            content: '——— '
            margin-right: 10px
            letter-spacing: -5px
            color: $yellow
</style>
