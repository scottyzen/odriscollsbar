<template>
	<div class="container">
		<h1>Blog</h1>
		<ul class="list-reset">
			<li v-for="post in blogPosts" :key="post.id">
				<pre>{{ post }}</pre>
				<h2>
					<nuxt-link :to="'/blog/' + post.slug">
						{{ post.title }}
					</nuxt-link>
				</h2>
				<p>
					{{ post.description }}
				</p>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	computed: {
		blogPosts() {
			return this.$store.state.blogPosts;
		}
	}
};
</script>

<style></style>
