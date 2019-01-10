<template>
  <div>
    <div class="header">
      <picture>
        <source srcset="~/assets/images/pub-front-snow-extra-large.jpg" media="(min-width: 2000px)">
        <source srcset="~/assets/images/pub-front-snow-large.jpg" media="(min-width: 1200px)">
        <source srcset="~/assets/images/pub-front-snow-medium.jpg" media="(min-width: 576px)">
        <img
          src="~/assets/images/pub-front-snow.jpg"
          alt="O' Driscolls bar cover in snow durning the winter of 2018"
        >
      </picture>
    </div>

    <!-- Gallery -->
    <div class="container container--style container--bottom-gap p-8 md:p-12">
      <div class="row flex flex-wrap">
        <div class="text-center w-full mb-12 lg:mb-16">
          <h2 class="text-underline">Gallery</h2>
          <br>
          <p
            class="max-w-md m-auto"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ea rem unde nulla alias magni asperiores, nemo mollitia nostrum! Necessitatibus!</p>
        </div>
        <gallery
          :images="images"
          :index="index"
          @close="index = null"
          class="blueimp-gallery blueimp-gallery-controls"
          id="blueimp-gallery"
        ></gallery>

        <!-- Gallery options -->
        <div class="flex flex-wrap md:flex-col align-top w-full md:w-1/4 text-grey-dark mb-6">
          <!-- VIEW -->
          <div class="type mr-8 md:mb-10">
            <p class="font-bold text-sm text-orange uppercase mb-2">View</p>
            <ul class="flex md:flex-col list-reset">
              <li class="m-0 mb-1 mr-3">
                <a
                  @click="thumbnailView = false"
                  :class="{'font-bold border-b-2' : !thumbnailView}"
                >Full</a>
              </li>
              <li class="m-0 mb-1 mr-3">
                <a
                  @click="thumbnailView = true"
                  :class="{'font-bold border-b-2' : thumbnailView}"
                >Grid</a>
              </li>
            </ul>
          </div>

          <!-- Albums -->
          <div class="type mr-8 md:mb-10">
            <p class="font-bold text-sm text-orange uppercase mb-2">Albums</p>
            <ul class="flex md:flex-col list-reset">
              <li class="m-0 mb-1 mr-3">
                <a
                  @click="selectedFolder = 'all'"
                  :class="{'font-bold border-b-2' : selectedFolder == 'all'}"
                >All</a>
              </li>
              <li v-for="(album, index) in albums" :key="index" class="m-0 mb-1 mr-3">
                <a
                  @click="selectedFolder = album.title"
                  :class="{'font-bold border-b-2' : selectedFolder == album.title}"
                >{{album.title}}</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="flex flex-wrap justify-between w-full md:w-3/4">
          <div
            v-show="selectedFolder == image.belongTo || selectedFolder == 'all'"
            class="image mb-6 shadow"
            v-for="(image, imageIndex) in images"
            :key="imageIndex"
            @click="index = imageIndex"
            :style="{ backgroundImage: 'url(' + image.href + ')' }"
            :class="{'thumbnailView': thumbnailView}"
          >
            <span class="text-hidden">{{image.title}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
const axios = require("axios");
const config = {
  headers: {
    Authorization: "Bearer e9ed442f33622928db91a53253fdf1e7e8db7ff2"
  }
};

export default {
  data() {
    return {
      images: [],
      index: null,
      thumbnailView: true,
      albums: [],
      selectedFolder: "all"
    };
  },
  created() {
    //   Get list of albums
    axios
      .get("https://api.imgur.com/3/account/scottyzen/albums/", config)
      .then(res => {
        var albums = res.data.data;
        console.log(albums);

        this.albums = albums;

        albums.forEach(album => {
          // Get images from each album
          axios
            .get("https://api.imgur.com/3/album/" + album.id, config)
            .then(res => {
              res.data.data.images.forEach(img => {
                this.images.push({
                  href: img.link,
                  description: img.description,
                  belongTo: album.title
                });
              });
            });
        });
      });
  }
};
</script>

<style lang="sass">
.image
    background-size: cover
    background-repeat: no-repeat
    background-position: 0% 20%, center;
    min-height: 16rem
    border: $border
    width: 100%
    cursor: pointer
    +tablet
        min-height: 20rem
    +laptop
        min-height: 25rem
            

.thumbnailView
    min-height: 150px
    width: 47.5%
    +laptop
        width: 30%

.blueimp-gallery
    .close
        padding: 20px
    
.text-hidden
    font-size: 0

svg 
    margin-right: 5px

</style>
