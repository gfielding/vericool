<template>
	<div class="why">
		<div class="grid__container">
			<div class="item grid__container--item--1">
				<video class="bg-video__content" autoplay muted loop playsinline>
          <source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/AdobeStock_275579402_Video_HD_Preview.mov?alt=media&token=1c9673b7-98b2-411e-bd94-43264e46653a" type="video/mp4">
        </video>
        <div class="item__overlay">
        	<!-- <h2>Why We Do It</h2> -->
        	<p class="lead">We replace detrimental petroleum based products with our groundbreaking environmentally friendly packaging.</p>
        </div>
			</div>
			<div class="item grid__container--item--2  grid__container--item--text pl-4 pr-4">
				<h2 class="mt-2">re·cid·i·vism</h2>
        <p class="light">/rəˈsidəˌvizəm/</p>
        <!-- <p class="light"><em>-noun</em></p> -->
        <p class="mb-0">"a tendency to relapse into previous condition or mode of behavior; <strong>especially criminal behavior.</strong>"</p>
        <router-link :to="{name: 'second-chance'}" class="mt-3"><strong><span class="underline--magical">Learn More &#8594</span></strong></router-link>
			</div>
			<div class="item grid__container--item--3">
				<v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Polystyrene-foam-and-ocean-pollution-1.jpg?alt=media&token=e01adaad-3139-418b-ae0f-3573bccf9c7a" alt="" />
				<router-link :to="{ name: 'environmental-impact' }">
					<div class="item__overlay--motion">
						<h3>Learn More About EPS Pollution  &#8594</h3>
					</div>
				</router-link>
			</div>
			<div class="item grid__container--item--4 grid__container--item--text">
				<v-lazy-image src="https://images.unsplash.com/photo-1509233725247-49e657c54213?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=387&q=80" alt="" />
				<router-link to="/environmental-impact#enviro">
					<div class="item__overlay--motion">
						<h3 class="pl-3">Environmental Data  &#8594</h3>
					</div>
				</router-link>
			</div>

			<div class="item grid__container--item--5">
				<v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/articlePics%2F19WVSEWM766WEFC6NHYR0G?alt=media&token=fa01ed91-4a69-482d-8330-e75570984c84" alt="" />
				<router-link to="/news/wCc3SONvLdPdKEW8oCwQ">
					<div class="item__overlay--motion">
						<h3>A Home of Second Chances  &#8594</h3>
					</div>
				</router-link>
			</div>


			<!-- <div class="item grid__container--item--5">
				<v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/team2.jpg?alt=media&token=fc9a9184-2265-4156-a00c-2a6a6c3c79f6" alt="" />
				<router-link :to="{ name: 'team' }">
					<div class="item__overlay--motion">
						<h3>Meet the Team  &#8594</h3>
					</div>
				</router-link>
			</div> -->
			<!-- <div class="item grid__container--item--6">
				<video class="bg-video__content--sm" autoplay muted loop>
        	<source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/workers.mp4?alt=media&token=d612af60-e553-49e9-90f3-42a285997ccf" type="video/mp4">
      	</video>
      	<router-link :to="{ name: 'second-chance' }">
					<div class="item__overlay--motion">
						<h3>Second-Chance Program  &#8594</h3>
					</div>
				</router-link>
			</div -->


			<div class="item grid__container--item--6">
				<!-- <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/inmates.jpg?alt=media&token=dfd09094-d5bf-4f5b-bd8d-6b60a8dad0ea" alt=""> -->
				<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/profilePics%2FDEN1F7DZWAY8VZIFNB3AH?alt=media&token=d45ceaa2-ca8c-48f5-a80e-65a98138fb00" alt="" style="object-position: top center;" />
      	<router-link :to="{ name: 'second-chance' }">
					<div class="item__overlay--motion">
						<h3>Second-Chance Program  &#8594</h3>
					</div>
				</router-link>
			</div>





			
		</div>
	</div>
</template>