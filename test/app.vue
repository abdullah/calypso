<template>
  <div>
    {{ $t('From vue file') }}
  </div>
</template>

<script>
export default {
  mounted() {
    this.$t('From vue script')
  }
}
</script>

<style>

</style>