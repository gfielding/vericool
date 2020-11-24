<template>
	<div class="what">
		<div class="grid__container">
			<div class="item grid__container--item--1">
				<Spinner />
			</div>
			<div class="item grid__container--item--2 grid__container--item--text text-center">
				<span style="color: #00a4df;">
					<i class="fad fa-chart-line fa-5x" data-aos="flip-left" data-aos-delay="400" data-aos-once="true"></i>
				</span>
				<h3>Cost-Effective</h3>
        <p class="mb-0">Vericoolers™ are just as affordable as EPS alternatives.</p>
        <div class="mt-3">
        	<router-link :to="{name: 'products'}" class="mt-5"><strong><span class="underline--magical">Buying Options &#8594</span></strong></router-link>
        </div>
			</div>
			<div class="item grid__container--item--3" style="display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;">
				<v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Data%2FImage%2010-29-20%20at%209.10%20PM.jpeg?alt=media&token=d229b090-1701-4e93-a246-ca92da64dbd1" alt="" style="width:100%;" />
				<router-link :to="{ name: 'data' }">
					<div class="item__overlay--motion">
						<h3>Performance Data &#8594</h3>
					</div>
				</router-link>
			</div>
			<div class="item grid__container--item--4">
				<BeforeAfter />
				<router-link :to="{ name: 'light-test' }">
					<div class="item__overlay--motion">
						<h3>The Light Test  &#8594</h3>
					</div>
				</router-link>
			</div>

			<div class="item grid__container--item--5">
				<v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/articlePics%2F2BQ2L8YX7HE404LHN3YT83?alt=media&token=5d5517c2-9f4d-44d3-96ce-65b20f9b45ee" alt="" style="object-fit: cover;" />
				<router-link to="/news/WxynsBF8rcjvuw8BEWyb">
					<div class="item__overlay--motion">
						<h3>EPS & Our Food Chain  &#8594</h3>
					</div>
				</router-link>
			</div>


			<!-- <div class="item grid__container--item--5"  style="display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;">
				<v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Screen%20Shot%202020-10-28%20at%204.45.25%20PM.png?alt=media&token=01b33af3-6b49-4425-b78d-833ea3a6c84e" alt="" style="object-fit: cover;" />
				<router-link :to="{ name: 'customers' }">
					<div class="item__overlay--motion">
						<h3>Our Customers  &#8594</h3>
					</div>
				</router-link>
			</div> -->
			<div class="item grid__container--item--6">
				<v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVC3%2FVC3-wines-min.png?alt=media&token=2d87f7d8-3fe7-454d-b54d-581fcf327585" alt="" style="object-fit: contain; width:100%; height:auto;" />
				<router-link :to="{ name: 'products' }">
					<div class="item__overlay--motion">
						<h3>Explore Our Products &#8594</h3>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import Spinner from '@/components/Spinner.vue'
import BeforeAfter from '@/components/BeforeAfter.vue'

	export default {
		components: {
			Spinner,
			BeforeAfter
		}
	}
</script>