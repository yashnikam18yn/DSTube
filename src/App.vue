<template>

 <HeaderComponent @search="searchfunction" />
 <!-- <ViewHomePage/> -->
 <!-- <HomeMainPage/> -->
 <!-- <Profile/> -->
 <router-view  :search="searchQuery"></router-view>
 <FooterComponent/>
</template>


<script setup>

import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponents.vue';
import ViewHomePage from './components/View/ViewHomePage.vue';
import HomeMainPage from './components/Home/HomeMainPage.vue';
import Profile from './components/Profile/Profile.vue'

import { ref } from 'vue';

const searchQuery=ref('');
const searchfunction=(searchValue)=>{
    console.log("inside App js",searchValue);
    searchQuery.value=searchValue;
}
</script>


<style scoped>

</style>
