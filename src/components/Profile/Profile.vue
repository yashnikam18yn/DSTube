<template>

<div class="profile-container">
    <h1>Profile</h1>
    <div  class="profile-form">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name"  v-model="name"  class="form-control">
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email"   class="form-control">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password"  class="form-control">
      </div>
      <button  @click="showData" class="btn btn-primary">Save</button>
    </div>
    <hr>
    <div class="data-container" v-if="dataDisplayed">
      <h2>User Data:</h2>
      <p>Name: {{ name }}</p>
      <p>Email: {{ email }}</p>
      <p>Password: {{ password }}</p>
    </div>
  </div>
  
  
  
</template>

<script setup>


import { ref } from 'vue'

let name = ref('');
let email = ref('');
let password = ref('');
let dataDisplayed = ref(false);

const showData = () => {
  dataDisplayed.value = true;
};


const fullName = computed(() => {
  return name.value + ' ' + email.value;
});


</script>

<style scoped>
.profile-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
}

h1 {
  text-align: center;
}

.profile-form {
  width: 100%;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
}

label {
  font-weight: bold;
}

.form-control {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.btn {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>