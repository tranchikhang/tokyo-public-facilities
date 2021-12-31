<template>
    <div id="result-list" class="hero" v-if="isDisplayed">
        <transition name="fade">
            <div class="hero-body result-list-container">
                <div class="card mb-5" v-for="f in pagingData" :key="f.id">
                    <header class="card-header">
                        <p class="card-header-title">
                            {{f.nameKanji}}
                        </p>
                    </button>
                </header>
                <div class="card-content">
                    <div class="content">
                      {{f.address}}
                      <br>
                      {{f.tel}}
                    </div>
                </div>
                <footer class="card-footer">
                    <a class="card-footer-item">Map</a>
                    <a class="card-footer-item">Guide</a>
                    <a class="card-footer-item">Save</a>
                </footer>
            </div>
            <pagination :total="facilityList.length" @showPagingData="showPagingData">
            </pagination>
        </div>
        </transition>
    </div>
</template>


<script>
    import API from './api/Common.js';
    import Pagination from './Pagination.vue'

    export default{
        components: {
            Pagination
        },
        props: ['searchText'],
        data: {
            facilityList: [],
            pagingData: [],
            isDisplayed: false,
        },
        created() {

        },
        data() {
            return {
                facilityList: [],
                pagingData: [],
                isDisplayed: false,
            }
        },
        methods: {
            search: function() {
                API.getRequest('PublicFacility/search?q=' + this.searchText)
                    .then(data => {
                        this.facilityList = data.data;
                        // this.$refs.pagination.total = this.facilityList.length;
                        this.isDisplayed = true;
                    });
            },
            showPagingData: function(val) {
                this.pagingData = this.facilityList.slice(val.from, val.to);
                this.scrollToTop();
            },
            scrollToTop: function() {
                window.scrollTo(0,0);
            }
        }
    }
</script>