<template>
  <div class="cards">
    <cards v-for="(card, key) in arrInsurance" :key="card.id" :img="card.img" :title="card.title" :description="card.description">
    </cards>
  </div>
</template>

<script>
import cards from './CardsInsurance.vue';
export default {
  name: 'cabinet',
  components: {
    cards
  },
  data() {
    return {
      arrInsurance: [],
      objForCards: {
        img: '',
        title: '',
        description: ''
      }
    }
  },
  created() {
    this.sendingData();
  },
  watch: {
    '$route': 'sendingData'
  },
  methods: {
    sendingData: function() {
      fetch(' http://test-task-api.insirion.ru/user/insurance', {
        method: 'GET',
        headers: {
          'token-sirion': localStorage.getItem('jwt')
        }
      }).then(r => r.json()).then((data) => {
        this.arrInsurance = data;
        console.log(this.arrInsurance);
        this.workWithArr();
      })
    },
    workWithArr() {
      this.objForCards.img = this.arrInsurance[0].img;
      this.objForCards.title = this.arrInsurance[0].title;
      this.objForCards.description = this.arrInsurance[0].description;
    }
  }

}
</script>

<style>
.cards {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
