<template>
  <div class="container">
      <div class="header header--style p-8 mx-auto">

      </div>
  </div>
</template>

<style>
.header {
	height: 100vh;
	min-height: 600px;
	background-position: center;
	background-position-y: 20%;
	background-size: 220%;
	background-repeat: no-repeat;
}
.header--style {
	background-image: url("~/assets/images/garden.jpg");
}
@media (min-width: 769px) {
	.header {
		background-size: 125%;
	}
}
@media (min-width: 1200px) {
	.header {
		background-size: cover;
	}
}
</style>

