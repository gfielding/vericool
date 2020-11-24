<template>
	<div class="relative spinbox" v-if="images && images.length > 0">
		<VueProductSpinner 
	      :images="images" 
	      :slider="true"
	    >
	    	<Loader />
	   </VueProductSpinner>
   </div>
</template>

<script>
import VueProductSpinner from 'vue-product-spinner'
import Loader from '@/components/Loader.vue'

export default {
	data () {
    return {
      images: [
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%201.jpg.jpg?alt=media&token=1c5ef29e-581e-4949-b257-be0aa462497c',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%202.jpg.jpg?alt=media&token=cd108214-9bc4-446c-82a2-dd7841007fb1',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%203.jpg.jpg?alt=media&token=ad244e0c-fb15-4dbb-b327-68e048fb2470',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%204.jpg.jpg?alt=media&token=5b12fe8e-6611-423d-9665-9edc1dfbd4d4',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%205.jpg.jpg?alt=media&token=98d4bb63-86cc-445a-adb1-07dd0d3e96ce',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%206.jpg.jpg?alt=media&token=8a57725c-cdf7-42a2-a78f-8e89ebd2b67e',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%207.jpg.jpg?alt=media&token=334a702c-72de-4d3d-8b8d-19ebc3be7c90',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%208.jpg.jpg?alt=media&token=92a27da3-5f89-44e7-a63d-a91566c9a873',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%209.jpg.jpg?alt=media&token=562f9e37-ee21-4a23-a522-86a43b3484ab',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2010.jpg.jpg?alt=media&token=f6a5acd5-3888-4b59-915a-317b2ad075d4',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2011.jpg.jpg?alt=media&token=d2793b5e-f8bf-4bdf-aa09-a17a2460957a',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2012.jpg.jpg?alt=media&token=39e203bd-4f35-4622-91b7-d603162f955a',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2013.jpg.jpg?alt=media&token=069e1f56-7c4f-4181-9733-78a6e8ec0d61',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2014.jpg.jpg?alt=media&token=3fb4b8e7-8739-4fff-9bb2-f31a33da3f7f',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2015.jpg.jpg?alt=media&token=2e7b41c6-2acb-45ea-8df1-0b4de8ebb206',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2016.jpg.jpg?alt=media&token=a4187fb4-dcce-4167-b842-80861cda5d7b',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2017.jpg.jpg?alt=media&token=10420ffd-8ee9-46ab-8d0e-041a4b6b5bfe',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2018.jpg.jpg?alt=media&token=01942b3b-7058-428d-b3a6-fe40741475df',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2019.jpg.jpg?alt=media&token=dad4d98c-0f1d-4f49-aa6b-a14c2da2c244',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2020.jpg.jpg?alt=media&token=e05da19a-e449-48aa-a351-4fc41e6f8796',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2021.jpg.jpg?alt=media&token=9a1731a9-9bfb-4654-8de2-ab23e2c94a3c',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2022.jpg.jpg?alt=media&token=e1b38251-9e5a-4fea-b118-0f899152b173',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2023.jpg.jpg?alt=media&token=1f1becd8-1a9f-4242-9d55-e67d21741658',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2024.jpg.jpg?alt=media&token=f7558bd9-b1b1-4346-9e38-03b03d44e723',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2025.jpg.jpg?alt=media&token=f304fcbb-f7d1-41cb-a160-c90ae1f4ff97',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2026.jpg.jpg?alt=media&token=2c0d5d66-05a9-4972-a398-0cfff1a74780',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2027.jpg.jpg?alt=media&token=3722da25-cf4a-4687-89d1-cfb36df32f27',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2028.jpg.jpg?alt=media&token=1d03d722-f643-4cfa-9609-264730bce449',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2029.jpg.jpg?alt=media&token=c2c19d00-1baf-4b4d-a1b5-9be63fa835a5',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2030.jpg.jpg?alt=media&token=d300b8d9-7dff-48a0-8883-a7e1b04258c9',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2031.jpg.jpg?alt=media&token=030e62d2-a5e5-423b-8926-81e519c955f7',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2032.jpg.jpg?alt=media&token=9a9cebad-cc2b-45f6-9d70-25b7c2a7b307',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2033.jpg.jpg?alt=media&token=e257bc77-05ee-439b-8b82-c0b6c4793e25',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360V2%2FGroup%2034.jpg.jpg?alt=media&token=12da4c26-c569-42ef-b918-ddb8faf3242b'
      ]
    }
  },
	components: {
      VueProductSpinner,
      Loader
    }
}


</script>