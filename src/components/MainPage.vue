<template>
    <div id="main-page">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item" href="../">
                        <!-- <img src="../images/bulma.png" alt="Logo"> -->
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
    </div>
</template>

<script>
    import {API} from './api/Common.js';
    export default {
        name: 'main-page',
        data: function() {
            return {
                isActive: false,
            searchText: ''
            }
        },
        methods: {
            toggleNav: function() {
                this.isActive = !this.isActive;
            },
            search: function() {
                console.log(this.searchText);
                API.getRequest('PublicFacility?名称.表記=東京文化会館')
                    .then(data => {
                        console.log(data)
                });
            }
        }
    }
</script>