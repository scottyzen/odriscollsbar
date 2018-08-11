<template>
    <div>
        <picture>  
            <!-- Loaded Images -->
            <!-- <source v-if="imageTime" srcset="~/assets/images/garden-extra-large.jpg" media="(min-width: 2000px)">
            <source v-if="imageTime" srcset="~/assets/images/garden-large.jpg" media="(min-width: 1200px)">
            <source v-if="imageTime" srcset="~/assets/images/garden-medium.jpg" media="(min-width: 576px)"> -->

            <!-- Large image -->
            <source v-if="imageTime" :srcset="require('~/assets/images/'+ this.imageName+ '-large.jpg')" media="(min-width: 1200px)">
            <source v-else :srcset="require('~/assets/images/'+ this.imageName+ '-large-low.jpg')" media="(min-width: 1200px)">
            
            <!-- Meduim image -->
            <source v-if="imageTime" :srcset="require('~/assets/images/'+ this.imageName+ '-medium.jpg')" media="(min-width: 576px)">
            <source v-else :srcset="require('~/assets/images/'+ this.imageName+ '-medium-low.jpg')" media="(min-width: 576px)">

            <!-- Smallest image -->
            <img v-if="imageTime" :src="require('~/assets/images/'+ this.imageName+ '.jpg')" :alt="description" :title="description"/>
            <img v-else :src="require('~/assets/images/'+ this.imageName+ '-low.jpg')" :alt="description" :title="description"/>
        </picture>
        
    </div>
</template>

<script>

export default {
    data(){
        return {
            imageTime: false
        }
    },
  props: ['imageName', 'description'],
  beforeCreate() {
      setTimeout(() => {
		this.imageTime = true
	}, 50);
  }
}


// var lazyImages = document.querySelectorAll(".lazy");
// lazyImages.forEach((image) => {
// 	var bigImage = document.createElement("img");

// 	bigImage.onload = function () {
// 		image.src = this.src;
// 		image.className = "noblur";
// 	};

// 	setTimeout(() => {
// 		bigImage.src = [image.src.slice(0, -4), "_x2", image.src.slice(-4)].join("");
// 	}, 50);
// });


</script>

