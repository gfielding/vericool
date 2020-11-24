<template>
	<div class="greyback">
    <Nav />
    <div class="page legal pt-5 pb-5">
      <div class="container">
        <h1 class="mb-0">Terms & Conditions</h1>
        <hr>
        <p>Vaporware shaman keffiyeh, letterpress salvia crucifix everyday carry. Selvage semiotics small batch, food truck gentrify pug crucifix meh jianbing VHS lo-fi put a bird on it sustainable. Austin meggings single-origin coffee fingerstache pork belly. Drinking vinegar hashtag photo booth church-key. Keffiyeh fanny pack YOLO cold-pressed beard hashtag cardigan tote bag occupy typewriter. Lomo small batch cardigan chicharrones. Stumptown quinoa biodiesel copper mug vaporware wolf pork belly direct trade helvetica cray vexillologist jean shorts vinyl venmo gentrify.</p>

        <p>Copper mug mustache hashtag blog, gentrify lomo hexagon snackwave whatever trust fund. Prism kinfolk freegan, vinyl street art etsy chicharrones fingerstache. Tattooed chia deep v messenger bag, synth cronut ramps. Vice roof party mixtape hammock, selfies fam bicycle rights butcher locavore kickstarter pabst church-key kale chips artisan typewriter. Messenger bag enamel pin intelligentsia, PBR&B microdosing small batch four dollar toast you probably haven't heard of them flannel bushwick kombucha. Bushwick locavore neutra franzen.</p>

        <p>Echo park poutine tousled, subway tile meditation prism bitters brunch synth gochujang godard salvia skateboard chartreuse farm-to-table. Poutine microdosing hot chicken pabst ennui disrupt. Cardigan kale chips locavore, 8-bit meh jianbing hexagon microdosing lo-fi fixie leggings iPhone. Chia af intelligentsia craft beer farm-to-table kombucha iPhone 8-bit pickled tattooed. VHS schlitz quinoa poutine. Lumbersexual cornhole tbh cronut.</p>

        <p>Shaman palo santo master cleanse quinoa single-origin coffee activated charcoal. Tofu kitsch selfies, mumblecore helvetica ugh 8-bit. Wolf umami kitsch DIY, skateboard art party trust fund edison bulb. Swag godard austin tumeric, hexagon adaptogen fam. Street art fixie trust fund cray prism viral.</p>

        <p>Dummy text? More like dummy thicc text, amirite?</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'terms',
  components: {
    Nav,
    Footer
  },
  metaInfo: {
    title: 'Terms and Conditions',
    meta: [
      { name: 'description', content: 'Vericool Packaging' }
    ],
  },
}
</script>