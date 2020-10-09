<template>
	<div>
		<agile :nav-buttons="false" autoplay infinite :autoplaySpeed="2000" :speed="0" centerMode>
			<div class="slide">
				<img src="@/assets/styrofoambox.jpg" alt="">
			</div>
			<div class="slide">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Carousel%2FAdobeStock_200674965-min.jpeg?alt=media&token=ecc75c3e-a299-427f-aaf9-40d06fa725d2" alt="">
			</div>
			<div class="slide">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Carousel%2FAdobeStock_316733482-min.jpeg?alt=media&token=8526160d-feaf-445e-af82-26e44bddf082" alt="">
			</div>
			<div class="slide">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Carousel%2FAdobeStock_286156442-min.jpeg?alt=media&token=f829b688-48a4-4517-a253-8c65b048f705" alt="">
			</div>
			<div class="slide">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Carousel%2FAdobeStock_246274572-min.jpeg?alt=media&token=cd739814-7841-4415-b12c-9df1c618879d" alt="">
			</div>
			<div class="slide">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Carousel%2FAdobeStock_247584328-min.jpeg?alt=media&token=a2c7078f-ab21-4c6b-83df-b09bfdbbb518" alt="">
			</div>

		</agile>
		<div class="ab">
			<div class="vc1">
				<h1>How do you solve this problem?</h1>
			</div>
	  </div>
  </div>
</template>

<style scoped>
.slide {
	display: block;
	height: 100vh;
	object-fit: cover;
	width: 100vw !important;
	min-width: 100vw;
	align-items: center;
	color: #fff;
	display: flex;
	justify-content: center;
}
.slide img {
	height:100vh;
	width: 100%;
	object-fit: cover;
	filter: brightness(0.6) grayscale(0);
}

</style>


<script>
	import {VueAgile} from 'vue-agile'

	export default {
		data () {
      return {
				showH1:true,
			}
		},
		components: {
			agile: VueAgile
		}
	}
</script>