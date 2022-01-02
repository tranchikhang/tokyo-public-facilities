<template>
    <div id="pagination">
        <nav class="pagination is-centered" role="navigation" aria-label="pagination">
            <a class="pagination-previous" v-if="current > 1" @click="onChange(current - 1)">Previous</a>
            <a class="pagination-next" v-if="size > 1 && current < size" @click="onChange(current + 1)">Next</a>
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
                size: 0,
                items: [],
                current: 1,
                itemsPerPage: 10,
                step: 3
            }
        },
        mounted() {
            this.paginate();Object.keys(this._props).forEach(event => {
      this.$watch(event, (val, oldVal) => {
        this.paginate()
      });
    })
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
                //
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
                    page: this.size
                }, )
            },
            paginate() {
                this.elements = [];
                this.size = Math.ceil(this.total / this.itemsPerPage)
                if (this.size < this.step) {
                    // Case without any breaks
                    this.add(1, this.size);
                } else if (this.current >= this.size - this.step) {
                    // Case with breaks at beginning
                    this.first();
                    this.addBreak();
                    this.add(this.current - this.step, this.size);
                } else if (this.current <= this.step + 1) {
                    // Case with breaks at end
                    this.add(1, this.current + this.step);
                    this.addBreak();
                    this.last();
                } else {
                    // Case with breaks at beginning and end
                    this.first();
                    this.addBreak();
                    this.add(this.current - this.step, this.current + this.step);
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