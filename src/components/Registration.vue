<template>
  <singLogIn>
    <form @submit.prevent="validateBeforeSubmit">
      <label for="login">
        Введите логин</label>
      <input id="login" type="text" name="login" v-model="login" placeholder="Введите логин"><br>
      <label for="password">Придумайте пароль</label>
      <input v-validate="'required|confirmed:repeatPassword'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('password') }" id="password" type="password" name="password" v-model="password" placeholder="Придумайте пароль"><br>
      <label for="repeatPassword">Повторите пароль</label>
      <input v-validate="'required'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('repeatPassword') }" id="repeatPassword" name="repeatPassword" type="password" v-model="repeatPassword" placeholder="Повторите пароль"><br>
      <label for="phone">Введите телефон</label>
      <masked-input v-validate="'required'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('phone') }" id="phone" type="text" name="phone" v-model="phone" :mask="['+', '3', '7', '5', ' ', '(', /[2-4]/, /[3,4,5,9]/, ')', ' ', /[1-9]/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]" :guide="true" placeholderChar="X" placeholder="+375 (XX) XXX-XX-XX"></masked-input> <br>
      <label for="email">Введите Ваш e-mail</label>
      <input v-validate="'required|email'" data-vv-delay="500" :class="{'input': true, 'is-danger': errors.has('email') }" id="email" type="text" name="email" v-model="email" placeholder="Введите Ваш e-mail"><br>

      <button class="btnRegistration">Регистрация</button>
      <button @click.prevent="moveToAuthorization()" class="btnBack">У меня есть аккаунт</button>
      <span class="errorInfo">{{errors.first('password') || errors.first('repeatPassword') || errors.first('phone') || errors.first('email') || errorInfo}}</span>
    </form>
  </singLogIn>
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
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.sendingData();
          return;
        }

        alert('Исправьте ошибки');
      });
    },
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
          this.$router.replace('/authorization');
        }
        throw new Error(`Ошибка -- ${response.status} ${response.statusText}`)
      }).catch(error => {
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
