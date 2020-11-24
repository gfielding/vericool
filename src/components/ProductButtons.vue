<template>
	<div class="product__buttons">
    <div class="product__buttons--item" data-aos="fade" data-aos-once="true">
      <router-link :to="{ name: 'testing' }" tag="button" class="btn product__buttons--item--btn btn__primary btn__xlarge ma-3">
        Testing & Design<i class="fad fa-chevron-right ml-3"></i>
      </router-link>
    </div>
    <div class="product__buttons--item" data-aos="fade" data-aos-once="true" >
      <router-link :to="{ name: 'data' }" tag="button" class="btn product__buttons--item--btn btn__primary btn__xlarge ma-3">
        Performance Data<i class="fad fa-chevron-right ml-3"></i>
      </router-link>
    </div>
    <div class="product__buttons--item" data-aos="fade" data-aos-once="true" >
      <router-link :to="{ name: 'light-test' }" tag="button" class="btn product__buttons--item--btn btn__primary btn__xlarge ma-3">
        The Light Test<i class="fad fa-chevron-right ml-3"></i>
      </router-link>
    </div>
  </div>
</template>