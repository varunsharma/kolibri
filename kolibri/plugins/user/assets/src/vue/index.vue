<template>

  <div>
    <h1>Temporarily disabled</h1>
    <p>
      Please develop on the
      <a href="https://github.com/fle-internal/kolibri-instant-schools-plugin">
        external plugin
      </a>
    </p>
  </div>
  <!--
  <core-base v-if="navBarNeeded" :topLevelPageName="topLevelPageName">
    <component
      slot="content"
      class="user page"
      :is="currentPage"
    />
  </core-base>

  <component
    v-else
    slot="content"
    class="user page"
    :is="currentPage"
    />
  -->

</template>


<script>

  const store = require('../state/store');
  const PageNames = require('../state/constants').PageNames;
  const TopLevelPageNames = require('kolibri.coreVue.vuex.constants').TopLevelPageNames;

  module.exports = {
    name: 'User-Plugin',
    components: {
      'core-base': require('kolibri.coreVue.components.coreBase'),
      'sign-in-page': require('./sign-in-page'),
      'sign-up-page': require('./sign-up-page'),
      'profile-page': require('./profile-page'),
    },
    computed: {
      topLevelPageName: () => TopLevelPageNames.USER,
      currentPage() {
        if (this.pageName === PageNames.SIGN_IN) {
          return 'sign-in-page';
        }
        if (this.pageName === PageNames.SIGN_UP) {
          return 'sign-up-page';
        }
        if (this.pageName === PageNames.PROFILE) {
          return 'profile-page';
        }
        return null;
      },
      navBarNeeded() {
        if (this.pageName === PageNames.SIGN_IN) {
          return false;
        }
        if (this.pageName === PageNames.SIGN_UP) {
          return false;
        }
        return true;
      },
    },
    vuex: {
      getters: {
        pageName: state => state.pageName,
      },
    },
    store, // make this and all child components aware of the store
  };

</script>


<style lang="stylus" scoped>

  @require '~kolibri.styles.definitions'

</style>
