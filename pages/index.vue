<template>
  <div>
    <div class="header header--style mb-8">
        <picture>
            <source srcset="~/assets/images/garden-large.jpg" media="(min-width: 1200px)">
            <source srcset="~/assets/images/garden-medium.jpg" media="(min-width: 576px)">
            <img src="~/assets/images/garden.jpg" alt="Beer garden ready for a wedding">
        </picture>
    </div>

    <div class="container container--style container--first container--bottom-gap p-10 md:p-16">
        <div class="row max-w-md m-auto my-8">
            <p><span class="first-letter">W</span>elcome ipsum dolor sit amet, consectetur adipisicing elit. Officiis accusamus iste temporibus optio provident amet facere consequuntur dolorem porro tempora. Pblanditiis laudantium, perspiciatis ullam porro. Maiores impedit accusantium non saepe. Quibusdam, porro eligendi facere harum molestiae error. Consectetur, quaerat praesentium.</p>
            <p class="font-bold text-xl">"Yeipsum dolor, sit amet consectetur adipisicing elit. Consectetur optio, nesciunt debitis nostrum dolorum  ea ipsam, aliquid beatae hic."</p>
            <p>Ballyduff House, as well as hosting weddings, is also the perfect settings for private parties, events, conferences, and social gatherings of any kind. Depending on the season, the use of the House together with the extensive and beautifully kept grounds and walled garden can make for a highly successful and memorable social engagement. Marquees, catering, floral display and transport to suit your needs for any occasion can be provided by prior arrangement.</p>
            <br>
            <a href="#" class="bg-orange hover:bg-orange-dark text-orange-lightest font-semibold py-2 px-4 rounded shadow">Find out more</a>
        </div>
    </div>

    <div class="container intro">
        <div class="row">
            <h2>Quick History</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat necessitatibus ducimus quam repudiandae recusandae vero consequuntur rem voluptates laudantium architecto ad ex, veritatis similique impedit fugiat quidem deserunt? Facilis non totam voluptates, sit ratione quidem sunt quod fugit debitis ipsam accusamus dolorem beatae accusantium error nostrum doloremque perferendis numquam praesentium sed! Voluptatem cum, veritatis architecto impedit nisi laborum. Repellendus totam possimus ab reprehenderit aliquam voluptatibus expedita corrupti natus provident excepturi nesciunt ad labore recusandae animi commodi vitae obcaecati temporibus iusto, tenetur ratione rerum sed. Laudantium.</p>
        </div>
    </div>
    
    <div class="container">
        <div class="row mb-8">
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
                    <span class="quick-info__title">Instagram</span>
                    <p>Tag your photo with <strong class=" text-orange">#odriscollsbar</strong> to see them displayed here</p>
                </div>

                <div class="quick-info__item">
                    <span class="quick-info__title">Find Us</span>
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

            </div>
        </div>
    </div>

    
  </div>
</template>

<style lang="sass">
.container
    +modifier('bottom-gap')
        margin-bottom: 150px

.quick-info
    margin-top: 4rem
    +element('item')
        padding: 2rem
    +element('title')
        font-family: $heading-font
        font-weight: 600
        font-size: 1.75rem
        line-height: 2
    +laptop
        column-count: 3
        +element('item')
            break-inside: avoid
            padding: 2rem
    .icons
        .icon
            width: 50px
            margin: 1rem 1rem 0 0


</style>

