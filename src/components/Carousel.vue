<template>
	<div class="relative">
		<agile :nav-buttons="false" :autoplay-speed="4000" :speed="1000" autoplay fade>
			<div class="slide">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Carousel%2FAdobeStock_316733482-min.jpeg?alt=media&token=8526160d-feaf-445e-af82-26e44bddf082" alt="">
				<div class="ab">
					<div class="vc1">
						<h1>How Do You Solve This Problem?</h1>
					</div>
			  </div>
			</div>
			<div class="slide">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Carousel%2Fstyrofoambox.jpg?alt=media&token=c38f2471-29a9-46d6-9b42-d9596f189ee7" alt="">
				<div class="ab">
					<div class="vc1">
						<h1>How Do You Solve This Problem?</h1>
					</div>
			  </div>
			</div>
			<div class="slide">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Carousel%2FAdobeStock_200674965-min.jpeg?alt=media&token=ecc75c3e-a299-427f-aaf9-40d06fa725d2" alt="">
				<div class="ab">
					<div class="vc1">
						<h1>How Do You Solve This Problem?</h1>
					</div>
			  </div>
			</div>
			
			<div class="slide">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Carousel%2FAdobeStock_286156442-min.jpeg?alt=media&token=f829b688-48a4-4517-a253-8c65b048f705" alt="">
				<div class="ab">
					<div class="vc1">
						<h1>How Do You Solve This Problem?</h1>
					</div>
			  </div>
			</div>

			<div class="slide">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Carousel%2Fsean-o-KMn4VEeEPR8-unsplash-min.jpg?alt=media&token=0fa75bff-0d73-4be9-95c2-8da9c6ac1553" alt="">
				<div class="ab">
					<div class="vc1">
						<h1>Be Vericool</h1>
					</div>
			  </div>
			</div>
			<div class="slide">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Carousel%2Fshutterstock_208368145-min%20(1).jpg?alt=media&token=d460b697-678e-487d-940f-1aa35b5c1e24" alt="">
				<div class="ab">
					<div class="vc1">
						<h1>Be Vericool</h1>
					</div>
			  </div>
			</div>

			<div class="slide">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Carousel%2Fsalmen-bejaoui-Sb1P6kpRL8I-unsplash-min.jpg?alt=media&token=19938ec0-667b-4dc1-a329-4ef0a391a797" alt="">
				<div class="ab">
					<div class="vc1">
						<h1>Be Vericool</h1>
					</div>
			  </div>
			</div>



			
			<!-- <div class="slide">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Carousel%2FAdobeStock_246274572-min.jpeg?alt=media&token=cd739814-7841-4415-b12c-9df1c618879d" alt="">
			</div>
			<div class="slide">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Carousel%2FAdobeStock_247584328-min.jpeg?alt=media&token=a2c7078f-ab21-4c6b-83df-b09bfdbbb518" alt="">
			</div> -->

		</agile>
		<!-- <div class="ab">
			<div class="vc1">
				<h1>How Do You Solve This Problem?</h1>
			</div>
	  </div> -->
  </div>
</template>

<style scoped>
.slide {
	display: block;
	height: 100vh;
	object-fit: cover;
	
	align-items: center;
	color: #fff;
	display: flex;
	justify-content: center;
}
.slide img {
	height:100vh;
	width: 100%;
	object-fit: cover;
	filter: brightness(0.8) grayscale(0);
}

</style>


<script>
import Loader from '@/components/Loader.vue'
import {VueAgile} from 'vue-agile'

	export default {
		data () {
      return {
				showH1:true,
			}
		},
		components: {
			agile: VueAgile,
			Loader
		}
	}
</script>