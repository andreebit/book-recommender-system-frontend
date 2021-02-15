<template>
    <div>
        <div class="my-5">
            <input placeholder="Buscar título..." class="inline-block mr-5 w-1/3" v-model="search_text" type="text" v-on:keyup.enter="search"/>
            <button class="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-on:click="search">Buscar</button>
        </div>
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
            customLabels,
            booksAux: null,
            search_text: ''
        }
    },
    async mounted () {      
        this.books = await BookService.getBooks();
        this.booksAux = {...this.books};
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        },

        search() {
            this.books = this.booksAux;

            if (this.search_text.length > 0) {
                let filteredBooks = []            
                Object.entries(this.books).forEach(([key, book]) => {
                    if (book.title.toLowerCase().includes(this.search_text.toLowerCase())) {
                        console.log(key);
                        filteredBooks.push(book);
                    }
                });
                console.log(filteredBooks);
                this.books = filteredBooks;
            }
        }
    }
}
</script>

<style scoped>
    input[type="text"] {
        border: 1px solid black;
        outline: none;
        padding: 5px;
        border-radius: 5px;
    }
</style>
