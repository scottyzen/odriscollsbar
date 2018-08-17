<template>
  <div>
    <div class="header">
        <picture>
            <source srcset="~/assets/images/pub-front-snow-extra-large.jpg" media="(min-width: 2000px)">
            <source srcset="~/assets/images/pub-front-snow-large.jpg" media="(min-width: 1200px)">
            <source srcset="~/assets/images/pub-front-snow-medium.jpg" media="(min-width: 576px)">
            <img src="~/assets/images/pub-front-snow.jpg" alt="O' Driscolls bar cover in snow durning the winter of 2018">
        </picture>
    </div>

    <!-- Gallery -->
    <div class="container container--style container--bottom-gap p-10 md:p-12">
        <div class="row flex flex-wrap">
            <div class="text-center w-full mb-8 lg:mb-16">
                <h2 class="text-underline">Gallery</h2>
                <br>
                <p class=" max-w-md m-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ea rem unde nulla alias magni asperiores, nemo mollitia nostrum! Necessitatibus!</p>
            </div>
            <gallery :images="images" :index="index" @close="index = null"></gallery>

            <!-- Gallery options -->
            <div class="flex flex-wrap align-top w-full md:w-1/4">
                <div class="text-grey-dark">
                    <div class="type w-full">
                        <p class="font-bold text-xs text-orange uppercase">View mode</p>
                        <p class="m-0">
                            <a @click="thumbnailView = false" :class="{'font-bold' : !thumbnailView}">Full images</a>
                        </p>
                        <p class="m-0">
                            <a @click="thumbnailView = true" :class="{'font-bold' : thumbnailView}">Thumbnails</a>
                        </p>
                        
                        
                    </div>
                    <br>
                    <div class="type w-full">
                        <p class="font-bold text-xs text-orange uppercase">Type</p>
                        <p class="m-0">Popular</p>
                        <p class="m-0">Recent</p>
                        <p class="m-0">Videos</p>
                    </div>
                    <br>
                    <div class="type w-full">
                        <p class="font-bold text-xs text-orange uppercase">Tags</p>
                        <p class="m-0">BBQ</p>
                        <p class="m-0">Funny</p>
                        <p class="m-0">Music</p>
                        <p class="m-0">Weddings</p>
                    </div>
                </div>
            </div>

            <div class="flex flex-wrap justify-between w-full md:w-3/4">
                <div
                class="image mb-6 shadow"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image + ')' }"
                :class="{'thumbnailView': thumbnailView}"
                ><span>{{image.title}}</span></div>
            </div>
        </div>
    </div><!-- Gallery -->

    <div class="container container--style">
        <div class="row">
            <div class="text-center">
                <div class="text-underline">
                    <h3>#odriscollsbar</h3>
                </div>

            </div>
        </div>
    </div>

  </div>
</template>
<script>
import galleryImages from "~/assets/js/gallery-images.js";
export default {
    data () {
      return {
        images: galleryImages,
        index: null,
        thumbnailView: true
      };
    }
}
</script>
<style lang="sass">
.image
    background-size: cover
    background-repeat: no-repeat
    background-position: center center
    min-height: 15rem
    border: $border
    width: 100%
    +tablet
        min-height: 20rem
    +laptop
        min-height: 25rem
            

.thumbnailView
    min-height: 150px
    +tablet
        width: 47.5%
    +laptop
        width: 30%

.blueimp-gallery
    .title
        background: black
    .close
        margin: 0
        padding: 20px
        color: $yellow
    .slide-content
        max-width: 80%
        max-height: 80%
</style>
