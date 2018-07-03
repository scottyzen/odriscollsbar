<template>
  <div>
      <div class="header header--style">
      </div>
      <div class="container flex flex-wrap">
        <div class="intro">
            <p><span class="first-letter">W</span>elcome ipsum dolor sit amet, consectetur adipisicing elit. Officiis accusamus iste temporibus optio provident amet facere consequuntur dolorem porro tempora. Pblanditiis laudantium, perspiciatis ullam porro. Maiores impedit accusantium non saepe. Quibusdam, porro eligendi facere harum molestiae error. Consectetur, quaerat praesentium.</p>
            <img src="~/assets/images/fireplace.jpg" alt="O' Driscolls Bar on a snowy day">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, veritatis a illum praesentium excepturi iste? Perferendis veritatis quae non assumenda quibusdam, dolores hic, blanditiis laudantium, perspiciatis ullam porro. Maiores impedit accusantium non saepe deserunt, illo velit veritatis minus optio! Voluptatibus maiores accusantium veniam ex velit reprehenderit saepe quibusdam debitis provident.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eum optio inventore incidunt perspiciatis, assumenda, nesciunt debitis nostrum dolorum reprehenderit ea ipsam, aliquid beatae hic.</p>
            <img src="~/assets/images/niamh-and-richard.jpg" alt="">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, pariatur?</p>
        </div>
        <div class="sidebar">


            <span class="title">
                Heading
            </span>
            <p>Amet consectetur adipisicing elit. Quibusdam, porro eligendi facere harum molestiae error. Consectetur, quaerat praesentium.</p>

            <br><hr>

            <span class="title">Opening Hours</span>
            <p>Monday 11:30 - 11:30
            <br>Tuesday 11:30 - 11:30
            <br>Wednesday 11:30 - 11:30
            <br>Thursday 11:30 - 11:30
            <br>Friday 11:30 - 12:30
            <br>Saturday 11:30 - 12:30
            <br>Sunday 12:00 - 11:00</p>

            <br><hr>

            <span class="title">Instagram</span>
            <p>Tag your photo with <strong>#odriscolls</strong> to see them here</p>
        </div>
      </div>
  </div>
</template>

<style lang="sass">
.header--style
    background-image: linear-gradient(to top, $light 0%,rgba(125,185,232,0) 10%), url("~/assets/images/garden.jpg")
    background-position: 0 20%

.intro
    background: $white
    padding: 6rem 4rem
    width: 100%
    box-shadow: 0 15px 30px rgba(76, 112, 132, 0.1)
    margin-bottom: 600px // To Be Deleted
    @include laptop
        width: 70%
    p 
        padding: 0 3rem
        margin-top: 1rem
    img 
        padding: 3rem 0

.sidebar
    width: 30%
    padding: 4rem
    margin-top: 20%
    color: #4b6473
    .title 
        font-size: 2rem
        font-family: $heading-font
        font-weight: 700
</style>

