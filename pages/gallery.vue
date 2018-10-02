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
    <div class="container container--style container--bottom-gap p-8 md:p-12">
        <div class="row flex flex-wrap">
            <div class="text-center w-full mb-12 lg:mb-16">
                <h2 class="text-underline">Gallery</h2>
                <br>
                <p class=" max-w-md m-auto">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis ea rem unde nulla alias magni asperiores, nemo mollitia nostrum! Necessitatibus!</p>
            </div>
            <gallery :images="images" :index="index" @close="index = null" class="blueimp-gallery blueimp-gallery-controls" id="blueimp-gallery">

                
            </gallery>

            <!-- Gallery options -->
            <div class="flex flex-wrap md:flex-col align-top w-full md:w-1/4 text-grey-dark mb-6">

                <!-- VIEW -->
                <div class="type mr-8 md:mb-6">
                    <p class="font-bold text-xs text-orange uppercase mb-0">View</p>
                    <ul class="flex md:flex-col list-reset">
                        <li class="m-0 mr-2"><a @click="thumbnailView = false" :class="{'font-bold' : !thumbnailView}">Full</a></li>
                        <li class="m-0 mr-2"><a @click="thumbnailView = true" :class="{'font-bold' : thumbnailView}">Grid</a></li>
                    </ul>
                </div>

                <!-- TYPE -->
                <div class="type md:mb-6">
                    <p class="font-bold text-xs text-orange uppercase mb-0">Type</p>
                    <ul class="flex md:flex-col list-reset">
                        <li class="m-0 mr-2 font-bold">All</li>
                        <li class="m-0 mr-2">Pictures</li>
                        <li class="m-0 mr-2">Videos</li>
                    </ul>
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
import galleryImages from '~/assets/js/gallery-images.js';

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
    .title
        background: black
    .close
        padding: 20px
</style>
