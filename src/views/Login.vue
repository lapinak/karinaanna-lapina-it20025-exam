<script>
import { auth } from '../stores/auth';

export default {
  data() {
    return {
      email: '',
      password: '',
      auth
    }
  },
  computed: {
    isDisabled() {
        return this.email.length < 1 || this.password.length < 6;
    }
  }
}

</script>

<template>
    <div id="login-view">
        <form class="login-form">
            <div class="wrapper-logo">
                <img src="@/assets/logo.svg" />
                <div>KRAKEN.FM</div>
            </div>
            <input type="text" id="input-email" placeholder="Email" v-model="email" />
            <input type="password" id="input-password" placeholder="Password" v-model="password" />
            <button id="btn-submit" :disabled="isDisabled" @click="auth.authenticate(email, password)">LOGIN</button>
        </form>
    </div>
</template>