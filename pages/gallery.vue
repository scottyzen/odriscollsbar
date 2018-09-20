<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
        class="image"
        v-for="image, imageIndex in images"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image.href + ')', width: '300px', height: '200px' }"
    ></div>
</div>
</template>

<script>
// import galleryImages from "~/assets/js/gallery-images.js";
export default {
    data: function () {
      return {
        images: [
          {
            title: '400x400',
            description: '400 x 400 White',
            href: 'https://dummyimage.com/400/ffffff/000000',
          },
          {
            title: '400x400',
            description: '400 x 400 White',
            href: 'https://dummyimage.com/400/ffffff/000000',
          },
          {
            title: '400x400',
            description: '400 x 400 Black',
            href: 'https://dummyimage.com/400/000000/ffffff',
          },
          {
            title: '400x400',
            description: '400 x 400 Black',
            href: 'https://dummyimage.com/400/000000/ffffff',
          },
        ],
        index: null
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
