<template>
  <singLogIn>
    <form @submit.prevent="validateBeforeSubmit">
      <label for="email">Логин или e-mail</label>
      <input v-validate="'required|email'" data-vv-delay="250" :class="{'input': true, 'is-danger': errors.has('email') }" id="email" type="text" name="email" v-model="email" placeholder="Введите Ваш логин или e-mail">
      <label for="password">Пароль</label>
      <input v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('password') }" id="password" type="text" name="password" v-model="password" placeholder="Пароль"><br>

      <button class="btnRegistration">Войти</button>
      <button @click.prevent="moveToRegistration()" class="btnBack">Зарегистрироваться</button>
      <span class="errorInfo">{{ errors.first('email') || errors.first('password') || errorInfo}}</span>
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
