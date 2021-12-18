<template>
  <div id="app">
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
                    <a class="navbar-item">
                            Team
                        </a>
                    <a class="navbar-item">
                            Archives
                        </a>
                    <a class="navbar-item">
                            Help
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
    <!-- END NAV -->

    <section class="hero is-info is-medium is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br>sed eiusmod tempor incididunt ut labore et dolore magna aliqua</h1>
            </div>
        </div>
    </section>


    <div class="container">
        <!-- START ARTICLE FEED -->
        <section class="articles">
            <div class="column is-8 is-offset-2">
                <!-- START ARTICLE -->
                <div class="card article">
                    <div class="card-content">
                        <div class="media">
                            <div class="media-content has-text-centered">
                                <p class="title article-title">Introducing a new feature for paid subscribers</p>
                                <div class="tags has-addons level-item">
                                    <span class="tag is-rounded is-info">@skeetskeet</span>
                                    <span class="tag is-rounded">May 10, 202X</span>
                                </div>
                            </div>
                        </div>
                        <div class="content article-body">
                            <p>Non arcu risus quis varius quam quisque. Dictum varius duis at consectetur lorem. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. </p>
                            <p>Metus aliquam eleifend mi in nulla ps neque sodales ut etiam.
                                Est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus.</p>
                            <h3 class="has-text-centered">How to properly center tags in bulma?</h3>
                            <p> Proper centering of tags in bulma is done with class: <pre>level-item</pre>
                                Voluptat ut farmacium tellus in metus vulputate. Feugiat in fermeum leo vel orci porta. Faucibus interdum posuere lorem ipsum.</p>
                        </div>
                    </div>
                </div>
                <!-- END ARTICLE -->
              </div>

        </section>
  </div>
  </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                isActive: false
            }
        },
        methods: {
            toggleNav: function() {
                this.isActive = !this.isActive;
            },
        }
    }
</script>

<style>
#app {
}
</style>
