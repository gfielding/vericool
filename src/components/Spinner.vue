<template>
	<div class="relative" style="height:100%;" v-if="images && images.length > 0">
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
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup_1.jpg?alt=media&token=ac46d75a-5cd8-4646-b766-cdef88ce3714',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup_2.jpg?alt=media&token=ccc69568-b2f9-4360-8654-ff203d85abf7',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup_3.jpg?alt=media&token=fea565d1-60c3-476c-8a58-c0d13b883530',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup_5.jpg?alt=media&token=47ec9024-118b-430f-87a2-d1c0f83d0e5b',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%206.jpg.jpg?alt=media&token=8a5ee1ce-362f-4235-915b-b08695383adb',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%207.jpg.jpg?alt=media&token=7d635dd9-693e-448c-9f1c-2fc069e93d48',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%208.jpg.jpg?alt=media&token=643fcf48-2cd5-4561-ba4e-4deb82ecaa3f',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%209.jpg.jpg?alt=media&token=4921a6f1-05e0-4bdc-bcf5-c015d2c02667',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2010.jpg.jpg?alt=media&token=e96b6951-99fd-413c-8e93-7ad50f3ee35c',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2011.jpg.jpg?alt=media&token=39e8c6b2-00dc-49cf-b0a2-b50afb5ae563',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2012.jpg.jpg?alt=media&token=1c9a6edd-62dd-4f80-a348-8f3fecd3b5f9',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2013.jpg.jpg?alt=media&token=ed892fa6-750e-4df7-947e-75f95935675e',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2014.jpg.jpg?alt=media&token=a8a8fdeb-0a16-4218-8c37-802b4555755b',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2015.jpg.jpg?alt=media&token=ba7a9833-0fb1-4941-8c69-c3fcb37bd743',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2016.jpg.jpg?alt=media&token=539b4741-1eeb-4d4d-bd15-04a05fc5bdad',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2017.jpg.jpg?alt=media&token=c115a61b-3725-40cc-afae-f5c1cbbeb602',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2018.jpg.jpg?alt=media&token=11d0c26d-cae3-44a5-9ff8-a37d6a85194b',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2019.jpg.jpg?alt=media&token=9b757ff4-3dc0-48a3-85f9-f2533b51fd30',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2020.jpg.jpg?alt=media&token=ce92a0e2-0eff-4c21-b161-e35d89a69014',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2021.jpg.jpg?alt=media&token=ba36c118-0a5d-49c5-b1ad-eab199c7879a',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2022.jpg.jpg?alt=media&token=1aab1508-4fa4-45dc-b7e1-bab396668d65',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2023.jpg.jpg?alt=media&token=647764ac-3c9a-4da8-9d5b-0ceb616a04f2',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2024.jpg.jpg?alt=media&token=27b6484d-2dd1-40da-b546-e49f53aa8789',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2025.jpg.jpg?alt=media&token=fbf501b3-ac61-4197-a471-b2abdbc499eb',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2026.jpg.jpg?alt=media&token=51269955-9652-4da5-aca5-41cfcccb7b8b',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2027.jpg.jpg?alt=media&token=c585e159-05a3-4d56-a6bb-e17a4dc7457c',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2028.jpg.jpg?alt=media&token=b1d4da7c-a832-4d5b-803e-14567edfda22',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2029.jpg.jpg?alt=media&token=f19ecf23-a422-40f0-8127-b89cd406d784',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2030.jpg.jpg?alt=media&token=e50b1ac5-7249-47ef-a9e9-8bc548ef6307',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2031.jpg.jpg?alt=media&token=75c4ba5f-8ed4-4422-9b82-64399bbd4e20',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2032.jpg.jpg?alt=media&token=8d60d2ec-2dc5-493a-aa4d-e6a3ebb6a8d6',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2033.jpg.jpg?alt=media&token=edbf10b9-f2cb-4010-a1d8-edd09c3d70c9',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup%2034.jpg.jpg?alt=media&token=570c6f89-2cdd-4970-8518-75c77dd042b6',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/360%2FGroup_1.jpg?alt=media&token=ac46d75a-5cd8-4646-b766-cdef88ce3714'
      ]
    }
  },
	components: {
      VueProductSpinner,
      Loader
    }
}


</script>