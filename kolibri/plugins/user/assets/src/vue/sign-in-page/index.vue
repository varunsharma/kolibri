<template>

  <div>
    <img class="logo" alt="logo">
    <h1>{{ $tr('signIn') }}</h1>

    <form ref="form" @submit.prevent="signIn">
      <label for="username">{{ $tr('username') }}</label>
      <input
        id="username"
        type="text"
        :placeholder="$tr('enterUsername')"
        :aria-label="$tr('username')"
        v-model="username"
        autocomplete="username"
        required
        autofocus>
      <label for="password">{{ $tr('password') }}</label>
      <input
        id="password"
        type="password"
        :placeholder="$tr('enterPassword')"
        :aria-label="$tr('password')"
        v-model="password"
        autocomplete="current-password"
        required>
      <icon-button :text="$tr('signIn')" :primary="true" type="submit"></icon-button>

      <p v-if="loginError" class="sign-in-error">{{ $tr('signInError') }}</p>
    </form>

    <hr>

    <p>{{ $tr('noAccount') }}</p>
    <router-link :to="signUp">
      <icon-button :text="$tr('createAccount')" :primary="true"></icon-button>
    </router-link>

    <a href="/">
      <icon-button :text="$tr('accessAsGuest')" :primary="false"></icon-button>
    </a>
  </div>

</template>


<script>

  const actions = require('kolibri.coreVue.vuex.actions');
  const PageNames = require('../../state/constants').PageNames;

  module.exports = {
    $trNameSpace: 'signInPage',
    $trs: {
      signIn: 'Sign In',
      username: 'Username',
      enterUsername: 'Enter Username',
      password: 'Password',
      enterPassword: 'Enter Password',
      noAccount: `Don't have an account?`,
      createAccount: 'Create Account',
      accessAsGuest: 'Access as Guest',
      signInError: 'Incorrect username or password',
    },
    components: {
      'icon-button': require('kolibri.coreVue.components.iconButton'),
    },
    data: () => ({
      username: '',
      password: '',
    }),
    computed: {
      signUp() {
        return { name: PageNames.SIGN_UP };
      },
    },
    methods: {
      signIn() {
        this.kolibriLogin({
          username: this.username,
          password: this.password,
        });
      },
    },
    vuex: {
      getters: {
        loginError: state => state.core.loginError === 401,
      },
      actions: {
        kolibriLogin: actions.kolibriLogin,
      },
    },
  };

</script>


<style lang="stylus" scoped>

  @require '~kolibri.styles.definitions'

  input
    display: block

  .sign-in-error
    color: red

  input
    display: block

  .sign-in-error
    color: red

</style>
