<template>

 <HeaderComponent/>
 <!-- <ViewHomePage/> -->
 <!-- <HomeMainPage/> -->
 <!-- <Profile/> -->
 <router-view></router-view>
 <FooterComponent/>
</template>


<script setup>

import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponents.vue';
import ViewHomePage from './components/View/ViewHomePage.vue';
import HomeMainPage from './components/Home/HomeMainPage.vue';
import Profile from './components/Profile/Profile.vue'



</script>


<style scoped>

</style>
