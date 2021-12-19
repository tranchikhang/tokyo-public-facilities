<template>
    <div id="loader"></div>
</template>

<script>
	import './assets/loader.css'
    export default {
        name: 'loader',
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            // loading animation helper
			startLoad: function() {
			    document.getElementById('loader').style.display = null;
			},
			stopLoad: function() {
			    document.getElementById('loader').style.display = 'none';
			}
        }
    }
</script>