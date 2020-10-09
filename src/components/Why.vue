<template>
	<div class="why">
		<div class="container">
			<div class="pullquote pullquote__lead-text">
				<em>"Let your products, not your packaging pollution, be your legacy"</em>
			</div>
		</div>
		<div class="grid__container">
			<div class="item grid__container--item--1">
				<video class="bg-video__content" autoplay muted loop>
          <source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/AdobeStock_282043525_Video_HD_Preview.mp4?alt=media&token=e9fb168f-4355-47d5-9bbc-613fd8efae8a" type="video/mp4">
        </video>
        <div class="item__overlay">
        	<h2>Why We Do It</h2>
        	<p>Vegan biodiesel four loko, lumbersexual subway tile cliche organic jean shorts meh keffiyeh.</p>
        </div>
			</div>
			<div class="item grid__container--item--2">
				2
			</div>
			<div class="item grid__container--item--3">
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/pollution.jpg?alt=media&token=34fb5a3d-93e8-4f7a-997d-16176f906e89" alt="">
				<router-link :to="{ name: 'mission' }">
					<div class="item__overlay--motion">
						<h3>Learn More About EPS Pollution  &#8594</h3>
					</div>
				</router-link>
			</div>
			<div class="item grid__container--item--4">4</div>
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
			<div class="item grid__container--item--6 grid__container--item--text pa-3"><router-link :to="{ name: 'mission' }"><strong>Vericool’s mission is to deliver environmentally-friendly cold chain coolers that protect products, people, and the planet. <br>Learn More &#8594</strong></router-link></div>
		</div>
	</div>
</template>