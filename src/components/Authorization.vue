<template>
  <singLogIn>
    <form>
      <label for="email">Логин или e-mail</label>
      <input id="email" type="input" name="email" v-model="email" placeholder="Введите Ваш логин или e-mail">
      <label for="password">Пароль</label>
      <input id="password" type="text" name="password" v-model="password" placeholder="Пароль"><br>

      <button @click.prevent="sendingData()" class="btnRegistration">Войти</button>
      <button @click.prevent="moveToRegistration()" class="btnBack">Зарегистрироваться</button>
      <span class="errorInfo">{{errorInfo}}</span>
    </form>
  </singLogIn>
</template>

<script>
export default {
  name: 'authorization',
  data() {
    return {
      email: '',
      password: '',
      errorInfo: ''
    }
  },
  methods: {
    sendingData: function() {
      fetch(' https://test-task-api.insirion.ru/user/authorization', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password
        })
      }).then((r) => {
        if (r.ok) {
          return r.json()
        } else if (r.status === 401) {
          throw new Error(`Ошибка -- Вероятнее всего ввели неверный пароль`)
        }
        throw new Error(`Ошибка -- ${r.status} ${r.statusText} (Зарегестрируйтесь)`)
      }).then((data) => {
        localStorage.setItem('jwt', data.token);
      })
        .then(() => this.$router.replace('/cabinet'))
        .catch((error) => {
          console.log(error.message);
          this.errorInfo = `${error.message}`
        })
    },
    moveToRegistration: function() {
      this.$router.replace('/registration');
    }
  }

}
</script>

<style src="../style/singLogIn.css"></style>
