<template>
  <div id="app"> 
    <nav>
      <router-link :to="`/`">
        <img class="inline-block" src="@/assets/images/upc.png" alt="UPC">  Inteligencia Artificial
      </router-link>
    </nav>
    <div class="container mx-auto mt-10 px-5 pb-10">
      <router-view/>
    </div>
  </div>
</template>

<style scoped>
  nav {
    background: #000000;
    color: #ffffff;
  }
  img {
    width: 64px;
    height: 64px;
  } 
</style>