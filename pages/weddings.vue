<template>
  <div>
    <div class="header">
        <picture>
            <source srcset="~/assets/images/garden-extra-large.jpg" media="(min-width: 2000px)">
            <source srcset="~/assets/images/garden-large.jpg" media="(min-width: 1200px)">
            <source srcset="~/assets/images/garden-medium.jpg" media="(min-width: 576px)">
            <img src="~/assets/images/garden.jpg" alt="Beer garden ready for a wedding">
        </picture>
    </div>
    
    <div class="container container--style p-8 sm:p-10 md:p-12 xl:p-16">
        <div class="row m-auto my-8 md:px-12">
            <p class="font-bold text-2xl text-center">Let us make your day even more special</p>
            <div>
                <p>When you picture a London pub wedding does your imagination immediately take you to The Queen Vic or The Nags Head?!  No longer synonymous with the Trotters, Mitchells and Slaters of the TV world, pub weddings are one of the fastest growing trends in the wedding industry. Couples are eschewing the more formal conventions to make their big day a chance to really express who they are as a couple. The flexibility of our venues can see them offer every kind of day imaginable but putting them and their family and friends at the centre of it. With a focus firmly centred on everyone having a great time – pub weddings are the relaxed and informal choice that continues to grow in popularity.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, numquam minus dolorum voluptates porro id nostrum sequi sit blanditiis! Aliquam officiis error distinctio minima perferendis rem consequatur ex ipsa sequi at, quam quisquam, atque pariatur.</p>
            </div>
            <div class="flex flex-wrap mt-16">
                <div class="w-full">
                    <ul class="list-reset flex flex-wrap">

                        <li class="w-1/2 mb-4 lg:w-1/4">
                            <div class="m-2 p-3 h-full bg-white text-center rounded shadow">
                                <img class="w-12" src="~/assets/images/icons/champagne.svg">
                                <p class="m-0">Champagne on arrival</p>
                            </div>
                        </li>
        
                        <li class="w-1/2 mb-4 lg:w-1/4">
                            <div class="m-2 p-3 h-full bg-white text-center rounded shadow">
                                <img class="w-12" src="~/assets/images/icons/bbq.svg">
                                <p class="m-0">BBQ’s & Buffet style food</p>
                            </div>
                        </li>

                        <li class="w-1/2 mb-4 lg:w-1/4">
                            <div class="m-2 p-3 h-full bg-white text-center rounded shadow">
                                <img class="w-12" src="~/assets/images/icons/wine.svg">
                                <p class="m-0">Wine corkage</p>
                            </div>
                        </li>
                        
                        <li class="w-1/2 mb-4 lg:w-1/4">
                            <div class="m-2 p-3 h-full bg-white text-center rounded shadow">
                                <img class="w-12" src="~/assets/images/icons/parking.svg">
                                <p class="m-0">Ample parking</p>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="image-divider">
        <picture>
            <source srcset="~/assets/images/candle-large.jpg" media="(min-width: 1200px)">
            <source srcset="~/assets/images/candle-medium.jpg" media="(min-width: 576px)">
            <img src="~/assets/images/candle.jpg" alt="Candle on bench in beer garden">
        </picture>  
    </div><!-- End on Image Divider -->

    <div class="container container--style mb-16">
        <div class="row">
            <div class="testimonials py-16 p-8 sm:p-10 md:p-12 xl:p-16">
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

<style lang="sass">

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
