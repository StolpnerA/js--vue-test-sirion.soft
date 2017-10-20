<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/authorization">Авторизация</router-link>
        <router-link to="/registration">Регистрация</router-link>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {

    }
  }
}
</script>

<style>

</style>
