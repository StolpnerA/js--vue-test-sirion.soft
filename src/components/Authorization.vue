<template>
  <div class="singLogIn" id="authorization">
    <div class="leftForm">
      <div class="logo"><img src="./../assets/logo.png" alt="azur"></div>
      <form>
        <label for="email">Логин или e-mail</label>
        <input id="email" type="input" name="email" v-model="email" placeholder="Введите Ваш логин или e-mail">
        <label for="password">Пароль</label>
        <input id="password" type="password" name="password" v-model="password" placeholder="Пароль"><br>

        <button @click.prevent="sendingData()" class="btnRegistration">Войти</button>
        <button @click.prevent="moveToRegistration()" class="btnBack">Зарегистрироваться</button>
        <span class="errorInfo">{{errorInfo}}</span>
      </form>
      <div class="phone">
        Единый номер Azur:
        <span>+375 (29) 123-45-67</span>
      </div>
    </div>
    <div class="rightForm">
      <div class="welcom">
        Добро пожаловать в Azur.
      </div>
      <div class="infoRegis">Для доступа в Ваш аккаунт, авторизируйтесь.</div>
      <img src="../assets/big-logo-singin.png" alt="Azur">
    </div>
  </div>
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
        }
        throw new Error(`Ошибка -- ${r.status} ${r.statusText}`)
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
