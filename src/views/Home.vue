<template>
    <div>
        <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
            <book-component v-for="book in pageOfItems" :key="book.id" :book="book"></book-component>      
        </div>
        <div class="mx-auto text-center">
            <jw-pagination v-if="books" :items="books" @changePage="onChangePage" :labels="customLabels"></jw-pagination>
        </div>
    </div>
</template>

<script>
import BookComponent from '@/components/BookComponent.vue'
import BookService from '@/services/BookService.js'

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};

export default {
    name: 'Home',
    components: {
        BookComponent
    },
    data() {
        return {
            pageOfItems: null,
            books: null,
            customLabels
        }
    },
    async mounted () {      
        this.books = await BookService.getBooks()
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    }
}
</script>

<style scoped>

</style>
