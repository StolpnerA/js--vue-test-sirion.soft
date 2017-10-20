<template>
  <div class="singLogIn" id="authorization">
    <div class="leftForm">
      <div class="logo"></div>
      <form>
        <label for="email">Логин или e-mail</label>
        <input id="email" type="input" name="email" v-model="email" placeholder="Введите Ваш логин или e-mail">
        <label for="password">Пароль</label>
        <input id="password" type="password" name="password" v-model="password" placeholder="Пароль"><br>

        <button @click.prevent="sendingData()" class="btnRegistration">Войти</button>
        <button class="btnBack">Зарегистрироваться</button>
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
      password: ''
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
      }).then((r) => r.json()).then((data) => {
        console.log(data);
        localStorage.setItem('jwt', data.token);
      })
        .then(() => this.$router.replace('/registration'))
    }
  }

}
</script>

<style src="../style/singLogIn.css"></style>
