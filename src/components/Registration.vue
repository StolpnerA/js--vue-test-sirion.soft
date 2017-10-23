<template>
  <div class="singLogIn" id="registration">
    <div class="leftForm">
      <div class="logo"><img src="./../assets/logo.png" alt="azur"></div>
      <form>
        <label for="login">
          Введите логин</label>
        <input id="login" type="text" name="login" v-model="login" placeholder="Введите логин"><br>
        <label for="password">Придумайте пароль</label>
        <input id="password" type="password" name="password" v-model="password" placeholder="Придумайте пароль"><br>
        <label for="repeatPassword">Повторите пароль</label>
        <input id="repeatPassword" type="password" v-model="repeatPassword" placeholder="Повторите пароль"><br>
        <label for="phone">Введите телефон</label>
        <masked-input id="phone" type="text" name="phone" v-model="phone" :mask="['+', '3', '7', '5', ' ', '(', /[2-4]/, /[3,4,5,9]/, ')', ' ', /[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]" :guide="true" placeholderChar="X" placeholder="+375 (XX) XXX-XX-XX"></masked-input> <br>
        <label for="email">Введите Ваш e-mail</label>
        <input id="email" type="email" name="email" v-model="email" placeholder="Введите Ваш e-mail"><br>

        <button @click.prevent="sendingData()" class="btnRegistration">Регистрация</button>
        <button @click.prevent="moveToAuthorization()" class="btnBack">У меня есть аккаунт</button>
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
  name: 'registration',
  data() {
    return {
      login: '',
      password: '',
      repeatPassword: '',
      phone: '',
      email: '',
      errorInfo: ''
    }
  },
  methods: {
    sendingData: function() {
      fetch(' https://test-task-api.insirion.ru/user/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
          phone: this.phone
        })
      }).then((response) => {
        if (response.ok) {
          console.log(response);
          this.$router.replace('/authorization');
        }
        throw new Error(`Ошибка -- ${response.status} ${response.statusText}`)
      }).catch(error => {
        console.log(error.message);
        this.errorInfo = `${error.message}`

      })
    },
    moveToAuthorization: function() {
      this.$router.replace('/authorization');
    }
  }

}
</script>

<style src="../style/singLogIn.css"></style>
