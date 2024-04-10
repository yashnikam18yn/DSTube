<template>
<header class="header">
    <div class="logo">
      <img @click="$router.push('/')"  src="https://www.freeiconspng.com/uploads/hd-youtube-logo-png-transparent-background-20.png" alt="Logo">
    </div>
    <div class="search-bar">
      <input v-model="search" @input="searchdata" type="text" placeholder="Search">
      <button @click="searchdata"> <Icon icon="bi:search" /> Search</button>
    </div>
    <div class="buttons">
      <button @click="$router.push('/')"><Icon icon="bi:house-door-fill" /> Home</button>
      
      <button @click="$router.push('/profile')"><Icon icon="bi:person-circle" /> Profile</button>
    </div>
  </header>
</template>

<script setup>
import {ref} from 'vue';

const emit=defineEmits(['search'])
const search = ref('');




const searchdata=()=>{
  console.log("Search",search.value);
  emit('search',search.value);
}
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
}

.logo img {
  height: 40px; 
}

.search-bar input {
  padding: 5px;
  margin-right: 10px;
  border-radius: 20px;
}

.search-bar button {
  padding: 5px 10px;
  background-color: #34e434;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 20px;
}

.buttons button {
  padding: 5px 10px;
  margin-left: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 10px;
}
</style>