<template>
    <div id="main-page">
        <loader ref="loader"></loader>
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="../">
                    </a>
                    <span class="navbar-burger burger" data-target="navbarMenu" v-on:click="toggleNav">
                    <span></span>
                    <span></span>
                    <span></span>
                    </span>
                </div>
                <div id="navbarMenu" class="navbar-menu" v-bind:class="{'is-active':isActive}">
                    <div class="navbar-end">
                        <a class="navbar-item is-active">
                            Home
                        </a>
                        <a class="navbar-item">
                            Examples
                        </a>
                        <a class="navbar-item">
                            Features
                        </a>
                        <div class="navbar-item has-dropdown is-hoverable">
                            <a class="navbar-link">
                                Account
                            </a>
                            <div class="navbar-dropdown">
                                <a class="navbar-item">
                                    Dashboard
                                </a>
                                <a class="navbar-item">
                                    Profile
                                </a>
                                <a class="navbar-item">
                                    Settings
                                </a>
                                <hr class="navbar-divider">
                                <div class="navbar-item">
                                    Logout
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="hero">
            <div class="hero-body">
                <div class="container">
                    <div class="field has-addons">
                        <div class="control is-expanded">
                          <input type="text" class="input" placeholder="Search here" v-model="searchText">
                        </div>
                        <div class="control">
                            <a class="button is-info" v-on:click="search">Go</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <result-list :facilityList="facilityList" :searchText="searchText" :isDisplayed="isDisplayed"/>
    </div>
</template>

<script>
    import ResultList from './ResultList.vue'
    import API from './api/Common.js';

    export default {
        name: 'main-page',
        components: {
            ResultList
        },
        data: function() {
            return {
                facilityList: [],
                isActive: false,
                searchText: '',
                isDisplayed: false,
            }
        },
        methods: {
            toggleNav: function() {
                this.isActive = !this.isActive;
            },
            search: function() {
                this.$refs.loader.startLoad();
                API.getRequest('PublicFacility/search?q=' + this.searchText)
                    .then(data => {
                        this.facilityList = data.data;
                        this.isDisplayed = true;
                        this.$refs.loader.stopLoad();
                    });
            }
        }
    }
</script>