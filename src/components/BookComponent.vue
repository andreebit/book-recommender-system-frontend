<template>
    <div class="book-item text-center p-5 rounded-lg">
        <router-link :to="`/book/${book.id}`">
            <img class="mx-auto object-cover" :src="book.image_link" :alt="book.title">
        </router-link>
        <hr class="my-5">
        <span><strong>Genre:</strong> {{ book.genre }}</span>
        <span><strong>Author:</strong> {{ book.author }}</span>
    </div>
</template>

<script>
export default {
    name: 'BookComponent',
    props: ['book']
}
</script>

<style scoped>
    .book-item {
        border: 1px solid black;
    }
    img {
        width: 150px;
        height: 229px;
    }
    a {
        color: #000000;
        text-decoration: none;
    }
    span {
        display: block;
    }
</style>