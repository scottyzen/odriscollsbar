<template>
	<div>
		<img class="w-full featured-image" :src="blogPost.thumbnail" />
		<div class="container container--style p-8 md:p-12">
			<article>
				<h1 class="text-5xl mb-10 leading-none">
					{{ blogPost.title }}
				</h1>
				<div v-html="$md.render(`${blogPost.body}`)"></div>
			</article>
		</div>
	</div>
</template>

<script>
export default {
	async asyncData({ params, payload }) {
		if (payload) return { blogPost: payload };
		else
			return {
				blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
			};
	}
};
</script>

<style>
.featured-image {
	object-fit: cover;
	object-position: center;
	height: 600px;
	margin-bottom: -200px;
}
</style>
