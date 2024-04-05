<template>
  <div>
    <router-link v-for="item in videoList" :key="item.id" :to="'/video/' + item.id" class="card-link">
      <div class="card">
        <img :src="item.imgSrc">
        <div class="card-details">
          <h3 class="card-title">{{ item.title }}</h3>
          <p style="color: blue;" class="card-views">Views:{{ item.views }}</p>
          <p class="card-disc"> {{ item.desc }}</p>
          <p>Creator:-{{ item.creator.firstname }},{{ item.creator.lastname }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import {ref} from 'vue'

import Data from '../../assets/config/data.json';

const videoList = ref(Data);

const datalist=()=>{
    console.log(videoList);
}

</script>

<style scoped>
.card {
    display: flex;
    margin: 20px;
    border-radius: 4px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
  
  .card-image {
    width: 400px;
    height: auto;
  }
  
  .card-details {
    flex: 1;
    padding: 20px;
  }
  
  .card-title {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .card-views {
    font-size: 14px;
    color:black;
    margin-bottom: 5px;
  }
  .card-link {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  }
</style>