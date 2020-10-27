<template>
	<div class="breadcrumb" v-if="crumbs && crumbs.length > 0">
		<div class="breadcrumb__container">
			<div class="breadcrumb__items">
				<div class="breadcrumb__items--item" v-for="item in crumbs">
					<router-link :to="item.to" v-if="item.to">
						<button class="btn" :key="item.title">
							{{item.title}}
						</button>
					</router-link>
					<button class="btn" :key="item.title" v-if="!item.to">
						{{item.title}}
					</button>
					<div class="arrow">
						/
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:['crumbs', 'productPage']
	}
</script>