<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/authorization">Авторизация</router-link>
        <router-link to="/registration">Регистрация</router-link>
      </nav>
    </header>
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>

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
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity .3s ease;
}

.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
