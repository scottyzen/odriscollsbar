<template>
  <div>
    <div class="header">
      <!-- <picture>
            <source srcset="~/assets/images/garden-extra-large.jpg" media="(min-width: 2000px)">
            <source srcset="~/assets/images/garden-large.jpg" media="(min-width: 1200px)">
            <source srcset="~/assets/images/garden-medium.jpg" media="(min-width: 576px)">
            <img src="~/assets/images/garden.jpg" alt="Beer garden ready for a wedding">
      </picture>-->
      <lazy-image imageName="garden" description="Beer garden ready for a wedding"/>
    </div>

    <div class="container container--style container--bottom-gap p-8 sm:p-10 md:p-12 xl:p-16">
      <div class="row m-auto mt-0 mb-8">
        <div class="text-center">
          <h2 class="text-underline text-5xl mt-0 mb-12">O' Driscolls Bar & Beer Garden</h2>
        </div>
        <p
          class="text-lg max-w-lg m-auto mb-16"
        >Ballyduff House, as well as hosting weddings, is also the perfect settings for private parties, events, conferences, and social gatherings of any kind. Depending on the season, the use of the House together with the extensive and beautifully kept grounds and walled garden can make for a highly successful and memorable social engagement. Marquees, catering, floral display and transport to suit your needs for any occasion can be provided by prior arrangement.</p>
      </div>

      <div class="row flex flex-wrap py-24">
        <div class="w-full lg:mb-0 lg:w-1/2 lg:pr-8">
          <img class="image--style" src="~/assets/images/hobys-party.jpg" alt>
        </div>
        <div class="w-full lg:w-1/2 lg:pl-8 mt-12">
          <p class="title">Parties and Events</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus animi quod voluptas temporibus debitis est accusamus similique corrupti.</p>

          <nuxt-link
            to="/bookings"
            class="inline-block bg-orange hover:bg-orange-dark text-white font-semibold py-2 px-4 rounded"
          >Book an Event</nuxt-link>
        </div>
      </div>

      <div class="row flex flex-wrap flex-col-reverse lg:flex-row py-24">
        <div class="w-full lg:w-1/2 lg:pr-8 mt-12">
          <p class="title">Weddings</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus animi quod voluptas temporibus debitis est accusamus similique corrupti! Fuga deleniti cum alias et eos recusandae perferendis odio vitae dicta a ad, voluptatibus officia voluptatum praesentium, aliquid id. Nemo minima accusamus sint, illum doloribus aliquam minus voluptatem harum, nisi nulla aspernatur?</p>

          <nuxt-link
            to="/weddings"
            class="inline-block bg-orange hover:bg-orange-dark text-white font-semibold py-2 px-4 rounded"
          >More info</nuxt-link>
        </div>
        <div class="w-full lg:mb-0 lg:w-1/2 lg:pl-8">
          <img class="image--style" src="~/assets/images/bike.jpg" alt>
        </div>
      </div>

      <!-- Facebook Messenger -->
      <div class="row max-w-md m-auto my-16 text-center text-xl leading-loose">
        <p>
          Have a quick question? Get in touch via
          <a
            href="#"
            style="white-space: nowrap"
            class="bg-blue hover:bg-blue-dark text-blue-lightest mt-2 inline-block ml-4 font-semibold py-2 px-4 rounded shadow"
          >
            <img
              id="facebook-messenger-icon"
              width="24"
              height="24"
              src="~/assets/images/icons/messenger.svg"
              alt="facebook messenger icon"
            > Messenger
          </a>
        </p>
      </div>
      <!-- Facebook Messenger -->
    </div>

    <br>

    <div class="container container--style container--style-dark">
      <div class="row p-8 md:py-0">
        <div class="quick-info">
          <div class="quick-info__item">
            <span class="quick-info__title">Opening Hours</span>
            <div class="flex">
              <span class="flex-1">Monday - Thursday</span>
              <span class="font-bold text-orange">11:30 - 11:30</span>
            </div>
            <div class="flex">
              <span class="flex-1">Friday - Saturday</span>
              <span class="font-bold text-orange">11:30 - 12:30</span>
            </div>
            <div class="flex">
              <span class="flex-1">Sunday</span>
              <span class="font-bold text-orange">12:00 - 11:00</span>
            </div>
          </div>

          <div class="quick-info__item">
            <span class="quick-info__title">Instagram</span>
            <p>
              Tag your photo with
              <strong class="text-orange">#odriscollsbar</strong> to see them displayed below.
            </p>
          </div>

          <div class="quick-info__item">
            <span class="quick-info__title">Find Us</span>
            <div class="icons flex">
              <div class="icon">
                <img src="~/assets/images/icons/Facebook-round.svg">
              </div>
              <div class="icon">
                <img src="~/assets/images/icons/Twitter-round.svg">
              </div>
              <div class="icon">
                <img src="~/assets/images/icons/Instagram-round.svg">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-32">
      <div class="container">
        <ul class="flex flex-wrap list-reset">
          <li
            v-for="(image, index) in odriscollsInstagram"
            :key="index"
            class="w-1/2 h-48 md:w-1/3 md:h-64 lg:w-1/4"
          >
            <a
              :href="'https://www.instagram.com/p/' + image.id"
              target="_blank"
              :style="{ 'background-image': 'url(' + image.url + ')' }"
              class="insta-a"
              :alt="image.description"
              :title="image.description"
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      odriscollsInstagram: [],
      hashtag: "odriscollsbar",
      numberOfImagesToDisplay: 8
    };
  },
  mounted() {
    axios
      .get("https://www.instagram.com/explore/tags/" + this.hashtag + "/?__a=1")
      .then(response => {
        const images =
          response.data.graphql.hashtag.edge_hashtag_to_media.edges;

        for (let i = 0; i < images.length; i++) {
          const img = images[i];
          if (i < this.numberOfImagesToDisplay) {
            var newObj = {
              url: img.node.display_url,
              id: img.node.shortcode,
              description: img.node.edge_media_to_caption.edges[0].node.text
            };
            this.odriscollsInstagram.push(newObj);
          }
        }
      });
  }
};
</script>


<style lang="sass">

.quick-info
    color: darken($white, 15%)
    +element('item')
        padding: 1rem 0
        // color: lighten($dark, 50%)
    +element('title')
        color: $white
        font-family: $heading-font
        font-weight: 600
        font-size: 1.5rem
        line-height: 2
        
    +laptop
        column-count: 3
        +element('item')
            break-inside: avoid
            padding: 2rem 1rem
    .icons
        .icon
            width: 50px
            margin: 1rem 1rem 0 0

#facebook-messenger-icon
    margin-bottom: -5px
    margin-right: 10px

.insta-a
    width: 100%
    height: 100%
    display: block
    overflow: hidden
    background-size: cover
    background-position: center
</style>

