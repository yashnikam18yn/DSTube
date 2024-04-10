<template>
  <div class="container">
    <div class="small-card">
      <div class="card-header">
        <img :src="data.imgSrc" :alt="'Card Image' + data.id" class="card-image">
        <h3>{{ data.title }}</h3>
        <p class="views"><Icon icon="ic:baseline-visibility" /> {{ data.views }}</p>
        <v-chip class="tags">{{ tag }}</v-chip>
      <div class="card-content">
        <p>{{ data.desc }}</p>
        <div class="like-dislike">
          
          <button @click="incrementLikes" class="like-btn"><Icon style="color: red;" icon="bx:bx-like" /></button>
          <span style="color: red;" class="likes">{{ likes }}</span>
          <button @click="decrementLikes" class="dislike-btn"><Icon icon="bx:bx-dislike" /></button>
        </div>
        <input v-model="comment" type="text" placeholder="Enter your comment" class="comment-input">
        <div class="btnsubmit">
          <button @click="showData"><Icon icon="fa-solid:comment" /> Comment</button>
        </div>
        <div class="comments" v-if="dataDisplayed">
          <div class="comment">
            <div class="user">{{ comment }}</div>
          </div>
        </div>
        <button style="background-color: red;" @click="subscribe" :disabled="subscribed" class="subscribe-btn">
          <Icon icon="mdi:email-plus" /> {{ subscribed ? 'Subscribed' : 'Subscribe' }}
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue';
import { ref, onMounted, reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import VideoList from '../../assets/config/data.json';

let comment = ref('');
let dataDisplayed = ref(false);
let likes = ref(0);
let subscribed = ref(false)

const showData = () => {
  dataDisplayed.value = true;
};


//Likes Increment
const incrementLikes = () => {
  likes.value++;
};


//Likes Decrement
const decrementLikes = () => {
  if (likes.value > 0) {
    likes.value--;
  }
};


//Object 
const data = reactive({
  imgSrc: '',
  title: '',
  views: '',
  desc: ''
});

const route = useRoute();


onMounted(() => {
  const id = route.params.id;
  const newVideo = VideoList.find(item => item.id == id);
  Object.assign(data, newVideo);
});

const tag = computed(()=>{
  if(likes.value > 15){
    return "Trending";
  }else if(likes.value > 10)
  {
    return "Popular";
  }else if(likes.value>20)
  {
    return "Most Watched";
  }else{
    return "";
  }
})

const subscribe = () => {
  

  subscribed.value = true; 
};

</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.small-card {
  border: 2px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin-top: 20px;
}

.card-header {
  padding: 20px;
  border-bottom: 2px solid #ccc;
}

.card-header h3 {
  font-size: 24px;
  margin-bottom: 10px;
}

.views {
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
}

.like-dislike {
  display: flex;
  align-items: center;
}

.like-btn,
.dislike-btn {
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 5px 10px;
  margin-right: 10px;
}

.like-btn:hover,
.dislike-btn:hover {
  background-color: #f0f0f0;
  border-radius: 5px;
}

.likes {
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
}

.card-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 0 0 10px 10px;
}

.card-content {
  padding: 20px;
}

p {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}

.comment-input {
  width: calc(100% - 40px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.btnsubmit {
  text-align: center;
  margin-top: 20px;
}

.btnsubmit button {
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.comments {
  margin-top: 20px;
}

.comment {
  padding: 10px;
  margin-bottom: 10px;
}

.user {
  font-weight: bold;
  margin-bottom: 5px;
}
.tags{
  color: rgb(248, 0, 0);
}
</style>
