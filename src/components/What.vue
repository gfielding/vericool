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
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/mailerAsset%2011%404x.png?alt=media&token=9c0461bd-e06d-42d6-a7f6-47de573f6f4e" alt="" style="width:100%;">
				<router-link :to="{ name: 'data' }">
					<div class="item__overlay--motion">
						<h3>Performance  &#8594</h3>
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
			<div class="item grid__container--item--5"  style="display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/logoPics%2F8LW5AL3EWOVC1F6I6DQLUT?alt=media&token=bfef4f68-d605-44a9-9f55-aebb07058b65" alt="" style="object-fit: contain; width:80%; min-width:80%; margin:auto; height:auto;">
				<router-link :to="{ name: 'customers' }">
					<div class="item__overlay--motion">
						<h3>Our Customers  &#8594</h3>
					</div>
				</router-link>
			</div>
			<div class="item grid__container--item--6">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVC3%2FVC3-wines-min.png?alt=media&token=2d87f7d8-3fe7-454d-b54d-581fcf327585" alt="" style="object-fit: contain; width:100%; height:auto;">
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