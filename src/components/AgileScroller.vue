<template>
	<div class="prodslides" v-if="products && products.length > 1">
		<!-- <agile class="thumbnails" :nav-buttons="true">
			<div class="slide" v-for="item in products">
				<v-lazy-image :src="item.picUrl" />
				<div class="ab">
					<div class="vc1">
						<h1>How Do You Solve This Problem?</h1>
					</div>
			  </div>
			  <div>{{ item.title }}</div>
			</div>

			<template slot="prevButton"><i class="fal fa-chevron-left fa-4x"></i></template>
    	<template slot="nextButton"><i class="fal fa-chevron-right fa-4x"></i></template>
		</agile> -->

		<agile class="thumbnails" ref="thumbnails" :options="optionsAgile">
      <div class="slide slide--thumbnail card" v-for="(item, index) in products" :key="index" :class="`slide--${index}`" @click="goTo(item)">
      	<img :src="item.picUrl"/>
      	<h4 class="card__title--link">{{item.title}} &#8594</h4>
      </div>
      <template slot="prevButton"><i class="fad fa-chevron-left fa-3x"></i></template>
      <template slot="nextButton"><i class="fad fa-chevron-right fa-3x"></i></template>
    </agile>
  </div>
</template>

<style scoped>

/*.prodslides .agile .slide {
	display: block;
	height: 88vh;
	max-height: 88vh !important;
	object-fit: cover;
	
	align-items: center;
	color: #fff;
	display: flex;
	justify-content: center;
}
.prodslides .agile .slide img {
	height: 88vh;
	max-height: 88vh !important;
	width: 100%;
	object-fit: cover;
	filter: brightness(0.8) grayscale(0);
}*/



/*.agile .agile__nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}*/

/*.prodslides .agile .agile__nav-button--next {
   right: -45px;
}*/
</style>


<script>
import { mapState } from 'vuex'
import Loader from '@/components/Loader.vue'
import {VueAgile} from 'vue-agile'

	export default {
		data () {
      return {
      	optionsAgile: {
        autoplay: false,
        centerMode: true,
        dots: false,
        navButtons: false,
        slidesToShow: 3,
        responsive: [
        	{
            breakpoint: 200,
            settings: {
              slidesToShow: 2,
              navButtons: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              navButtons: true
            }
          },
          
          {
            breakpoint: 1000,
            settings: {
            	slidesToShow: 2,
              navButtons: true
            }
          }
        ],
      },
			}
		},
		computed: {
	    ...mapState(['products']),
	  },
		components: {
			agile: VueAgile,
			Loader
		},
		methods: {
			goTo(item) {
				console.log(item)
				let url = `/products/` + item.to
				console.log(url)
      	this.$router.push(url)
			}

		}
	}
</script>