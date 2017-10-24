<template>
  <div tabindex="0" class="card">
    <div class="img">
      <img :src="img" alt=" ">
    </div>
    <div class="aboutInsu ">
      <h3> {{title}} </h3>
      <p> {{description}} </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  props: ["img", "title", "description"]
}
</script>

<style src="../style/cardsInsurance.css"></style>


