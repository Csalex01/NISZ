<template>
  <article 
    class="message mb-3 box p-0"
    :class="classes"
  >
		<div class="message-header">
			<p>{{ title }}</p>
		</div>
		<div class="message-body">
			{{ msg }}
		</div>
	</article>
</template>

<script>
export default {
	name: "Message",
	props: ["msg", "type", "title", "size"],
	data() {
		return {
			show: false,
			classes: {
				// Theme
				'is-primary': this.type == "primary",
				'is-danger': this.type == "danger",
				'is-link': this.type == "link",
				'is-info': this.type == "info",
				'is-success': this.type == "success",
				'is-warning': this.type == "warning",
				'is-danger': this.type == "danger",

				// Size
				'is-small': this.size == 'small',
				'is-normal': this.size == 'normal',
				'is-medium': this.size == 'medium',
				'is-large': this.size == 'large',
			}
		}
	}
}
</script>

<style>
</style>