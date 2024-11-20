<template>
  <Swiper
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :loop="true"
    navigation
    pagination
    class="my-swiper"
  >
    <SwiperSlide v-for="(item, index) in items" :key="index">
      <img :src="item.image" :alt="item.title" class="carousel-image" />
      <div class="slide-content">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
      </div>
    </SwiperSlide>
  </Swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

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
  }
};
</script>

<style scoped>
.my-swiper {
  width: 100%;
  height: 100%;
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
