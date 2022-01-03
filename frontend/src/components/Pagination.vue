<template>
    <div id="pagination">
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <a class="pagination-previous" v-if="current > 1" @click="onChange(current - 1)">Previous</a>
            <a class="pagination-next" v-if="totalPages > 1 && current < totalPages" @click="onChange(current + 1)">Next</a>
            <ul class="pagination-list">
                <li v-for="element in elements" :key="element.page" :current="current">
                    <template v-if="element.type=='page'">
                        <a :class="['pagination-link', { 'is-current': current === element.page }]" v-on:click="onChange(element.page)">
                            {{ element.page }}
                        </a>
                    </template>
                    <template v-else>
                        <li><span class="pagination-ellipsis">&hellip;</span></li>
                    </template>
                </li>
            </ul>
        </nav>
    </div>
</template>


<script>
    export default {
        name: 'pagination',
        props: {
            total: {
                type: Number,
                default: 0
            },
        },
        data() {
            return {
                elements: [],
                totalPages: 0,
                current: 1,
                itemsPerPage: 10,
                pageCount: 5
            }
        },
        mounted() {
            this.onChange(1);
        },
        methods: {
            add(s, f) {
                for (var i = s; i <= f; i++) {
                    this.elements.push({
                        type: 'page',
                        page: i
                    })
                }
            },
            addBreak() {
                this.elements.push({
                    type: 'ellipse-break'
                });
            },
            first() {
                // Add first page
                this.elements.push({
                    type: 'page',
                    page: 1
                });
            },
            last() {
                // Add last page
                this.elements.push({
                    type: 'page',
                    page: this.totalPages
                }, )
            },
            paginate() {
                this.elements = [];
                this.totalPages = Math.ceil(this.total / this.itemsPerPage);
                let t = Math.floor(this.pageCount/2);
                if (this.totalPages < t) {
                    // Case without any breaks
                    this.add(1, this.totalPages);
                } else if (this.current >= this.totalPages - t) {
                    // Case with breaks at beginning
                    this.first();
                    this.addBreak();
                    this.add(this.current - t, this.totalPages);
                } else if (this.current <= t + 1) {
                    // Case with breaks at end
                    this.add(1, this.current + t);
                    this.addBreak();
                    this.last();
                } else {
                    // Case with breaks at beginning and end
                    this.first();
                    this.addBreak();
                    this.add(this.current - t, this.current + t);
                    this.addBreak();
                    this.last();
                }
            },
            onChange: function(page) {
                this.current = page;
                this.paginate();
                let from = (this.current * this.itemsPerPage) - this.itemsPerPage;
                let to = (this.current * this.itemsPerPage);
                this.$emit('showPagingData', {
                    from: from,
                    to: to
                });
            }
        }
    }
</script>