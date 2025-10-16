<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      token: state => state.user.token,
    }),
  }
}
</script>

<template>
  <div>子组件</div>
  {{ $store.state.str }}
  {{ token }}
</template>

<style></style>