<template>
    <Swiper
      :autoplay="{ delay: 1000}"
      :loop="true"
      :modules="modules"
      navigation
      :pagination="{ clickable: true }"
      :slides-per-view="4"
      class="my-swiper"
    >
      <SwiperSlide v-for="(item, index) in items" :key="index">
        <img :src="item.image" :alt="item.title" class="carousel-image" />
        <div class="slide-content">
          <h3>{{ item.title }}</h3>
        </div>
      </SwiperSlide>
    </Swiper>
  </template>
  
  <script>
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';


  
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    props: {
      items: {
        type: Array,
        required: true
      }
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
        modules: [Navigation, Pagination, Scrollbar, A11y],
      };
    },

  };
  </script>
  
  <style scoped>
  .my-swiper {
    width: 50%;
    height: 50%;
  }
  
  .carousel-image {
    width: 100%;
    height: auto;
  }
  
  .slide-content {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
  }
  </style>
  