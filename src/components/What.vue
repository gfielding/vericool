<template>
	<div class="what">
		<div class="grid__container">
			<div class="item grid__container--item--1">
				<video class="bg-video__content" autoplay muted loop>
          <source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/AdobeStock_282043525_Video_HD_Preview.mp4?alt=media&token=e9fb168f-4355-47d5-9bbc-613fd8efae8a" type="video/mp4">
        </video>
        <div class="item__overlay">
        	<h2>What we do</h2>
        	<p>Vegan biodiesel four loko, lumbersexual subway tile cliche organic jean shorts meh keffiyeh.</p>
        </div>
			</div>
			<div class="item grid__container--item--2">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/VC-fusion.png?alt=media&token=8552e58a-5bb6-435b-ae4c-6bfec8239e64" alt="" style="object-fit: contain;">
			</div>
			<div class="item grid__container--item--3">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/pollution.jpg?alt=media&token=34fb5a3d-93e8-4f7a-997d-16176f906e89" alt="">
				<div class="item__overlay--motion">
					<h3>Learn More About EPS</h3>
				</div>
			</div>
			<div class="item grid__container--item--4"><img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/vericooler-viles.png?alt=media&token=cbb9a245-a271-4a4c-8f85-66c030c1f9f2" alt="" style="object-fit: contain;"></div>
			<div class="item grid__container--item--5">
				<video class="bg-video__content--sm" autoplay muted loop>
					<source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/SwanPreview.mp4?alt=media&token=7255d8a1-f158-470b-9a0d-3c9b073fd505" type="video/mp4">
				</video>
				<router-link :to="{ name: 'environmental-impact' }">
					<div class="item__overlay--motion">
						<h3>EPS Environmental Impact  &#8594</h3>
					</div>
				</router-link>
			</div>
			<div class="item grid__container--item--6 grid__container--item--text pa-3"><router-link :to="{ name: 'second-chance' }"><strong>Vericool is committed to protecting our global landscape while giving formerly incarcerated men, women, and youth a second chance to live productive lives. <br>Learn More &#8594</strong></router-link></div>
		</div>
	</div>
</template>