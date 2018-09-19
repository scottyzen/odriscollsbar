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
            <gallery id="blueimp-gallery" :images="images" :index="index" @close="index = null"></gallery>

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
// import galleryImages from "~/assets/js/gallery-images.js";
export default {
    data () {
      return {
        images: [
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/39008928_1824819147611376_6330601676260507648_o.jpg?_nc_cat=0&oh=609d82072bea8b905a735bcd6f17c141&oe=5BECC843',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/37211960_1778924895534135_6118067199597871104_o.jpg?_nc_cat=0&oh=ab1607669b815e83c0467db955adbc07&oe=5BEDF3C6',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/37173676_1778924608867497_1652228143009759232_n.jpg?_nc_cat=0&oh=50e493460163e64babac267f7a79a416&oe=5BFAB732',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/37199434_1778919512201340_8598332408409882624_n.jpg?_nc_cat=0&oh=910154911817f3a99bf2e2fbbb02aaae&oe=5BF4628C',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/37127949_1778916625534962_6598511076076158976_n.jpg?_nc_cat=0&oh=d30068d593093a5747a3d91694ac49af&oe=5BFC81A5',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/37154558_1778917345534890_3677751757938622464_o.jpg?_nc_cat=0&oh=5cc398c35567064c96c1db643ca16943&oe=5C1057F7',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/37161642_1778915098868448_8378884473214730240_o.jpg?_nc_cat=0&oh=9f925e725a34fc26294de63738164717&oe=5C0278C5',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/36047714_1745967968829828_2162744074824581120_o.jpg?_nc_cat=0&oh=749d1bd1f1e615c9fc5e223e7c1db8d1&oe=5BF29DB9',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/35546592_1745967078829917_5418480261882970112_o.jpg?_nc_cat=0&oh=03e4ff7bedd1a1acdec140be0b14c7b8&oe=5BF0E01C',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/36177418_1745964842163474_5990278247366000640_n.jpg?_nc_cat=0&oh=a056f021dcc6e20269ae066687395527&oe=5C0E63E1',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/34536459_1721726877920604_4505237869631111168_n.jpg?_nc_cat=0&oh=a57c4eb97b4b6ab54fb03dd3299d79d1&oe=5C0CC813',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/34530419_1721725114587447_6175814044209905664_n.jpg?_nc_cat=0&oh=c2073492ed0ad66cca0403e899f8cb56&oe=5C0D1AC2',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/34746423_1721714927921799_5957957939858767872_n.jpg?_nc_cat=0&oh=4020ab5c8eac72c26be760e1e83b2a2e&oe=5BED1D68',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/34699461_1721704057922886_1319632412547743744_n.jpg?_nc_cat=0&oh=b1d604a2d6e35bfd495f368a8dcf57dc&oe=5C077FA2',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/34512506_1721689887924303_1128469899308433408_n.jpg?_nc_cat=0&oh=b6f64de2fe5e2013a45bb96d13990a12&oe=5C0BA32C',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/34507502_1721681974591761_1271472231293124608_o.jpg?_nc_cat=0&oh=740d489d84379210deaecc893b9ebd17&oe=5C01B230',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/34502218_1721685267924765_2723419160162861056_o.jpg?_nc_cat=0&oh=bb34a9872dc764cbcb4c2cf65594d5ec&oe=5C046C25',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/34535880_1721656654594293_7691902311030849536_n.jpg?_nc_cat=0&oh=bbf1938d9d60a8e26c4f7bca05e48d0c&oe=5C0C01D6',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t1.0-9/34469333_1720067894753169_6176279421096296448_n.jpg?_nc_cat=0&oh=18d096c9f0ea7001fd5c508095a16f66&oe=5C0297DB',
            'https://scontent.fdub2-1.fna.fbcdn.net/v/t31.0-8/28514670_1625533234206636_8335570396976788223_o.jpg?_nc_cat=0&oh=94e1b267810330dbdf21a58a86149848&oe=5BFE1935',
            {
                title: 'Candle',
                href: '~/assets/images/candle-large.jpg',
                type: 'image/jpeg',
                thumbnail: '~/assets/images/candle.jpg'
            }
        ],
        index: null,
        thumbnailView: true,
        options: {
            container: '#blueimp-gallery',
        }
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
