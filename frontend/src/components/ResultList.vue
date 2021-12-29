<template>
    <div id="result-list" class="hero">
        <div class="hero-body">
            <div class="container">
                <transition name="fade">
                <div class="result-list-container">
                    <div class="card" v-for="f in facilityList" :key="f.id">
                      <div class="card-content">
                        <div class="content">
                          {{f.nameKanji}}
                        </div>
                      </div>
                    </div>
                </div>
                 </transition>
            </div>
        </div>
    </div>
</template>


<script>
    import API from './api/Common.js';

    export default{
        props: ['searchText'],
        data: {
            facilityList: []
        },
        created() {
            
        },
        data() {
            return {
                facilityList: []
            }
        },
        methods: {
            search: function() {
                API.getRequest('PublicFacility/search?q=' + this.searchText)
                    .then(data => {
                        this.facilityList = data.data;
                });
            }
        }
    }
</script>