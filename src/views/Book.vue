<template>
    <div>
        <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-10">
            <div class="text-center">
                <img class="mx-auto" :src="book.image_link" :alt="book.title">
                <h1 class="mt-5" v-if="book">{{ book.title }}</h1>
                <hr class="my-5">                
                <strong>Género:</strong> {{ book.genre }} <br>
                <strong>Autor:</strong> {{ book.author }} <br>
                <a class="hidden inline-flex items-center h-10 px-6 m-5 text-sm text-white transition-colors duration-150 bg-green-500 rounded-lg focus:shadow-outline hover:bg-green-700" target="_blank" :href="'https://www.amazon.com/s?k=' + book.title">
                    Buy Now
                </a>
            </div>
            <div>
                {{ book.description }}
            </div>
        </div>        
        <hr class="my-5">

        <h2 v-if="!recommendations">Cargando libros similares...</h2>
        <h2 v-if="recommendations">Libros similares</h2>
        <div class="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
            <recommended-book-component v-for="book in recommendations" :key="book.id" :book="book"></recommended-book-component>
        </div>
    </div>
</template>

<script>
import RecommendedBookComponent from '@/components/RecommendedBookComponent.vue'
import BookService from '@/services/BookService.js'

export default {
    name: 'Book',
    components: {
        RecommendedBookComponent
    },
    data() {
        return {
            book: null,
            recommendations: null
        }
    },
    async mounted () {
        this.book = await BookService.getBookById(this.$route.params.id)
        this.recommendations = await BookService.getRecommendationsByBookId(this.$route.params.id)
    },
    watch: {
        async $route(to) {
            this.book = null
            this.recommendations = null
            this.book = await BookService.getBookById(to.params.id)
            this.recommendations = await BookService.getRecommendationsByBookId(to.params.id)            
        }
    }
}
</script>

<style scoped>
    h1 {
        font-size: 20px;    
        font-weight: bold;
    }
    h2 {
        font-weight: bold;
        font-size: 30px;
    }
</style>