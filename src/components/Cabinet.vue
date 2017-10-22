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
      arrInsurance: []
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
      }).then(r => {
        if (r.status === 401) {
          throw new Error(`Ошибка -- ${r.status} ( Не авторизован )`)
        } else if (r.status === 200) {
          return r.json();
        }
      }).then((data) => {
        this.arrInsurance = data;
        console.log(this.arrInsurance);
      }).catch(error => {
        confirm(error);
        this.$router.replace('/authorization');
      })
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
