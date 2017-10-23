<template>
  <div class="singLogIn" id="authorization">
    <div class="leftForm">
      <div class="logo"><img src="./../assets/logo.png" alt="azur"></div>
      <slot>

      </slot>
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
