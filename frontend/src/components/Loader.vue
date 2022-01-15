<template>
    <div id="loader" v-if="isDisplayed"></div>
</template>

<script>
    export default {
        name: 'loader',
        data() {
            return {
                isDisplayed: false
            }
        },
        methods: {
            // loading animation helper
			startLoad: function() {
			    this.isDisplayed = true;
			},
			stopLoad: function() {
                this.isDisplayed = false;
			}
        }
    }
</script>

<style src="../assets/loader.css"></style>