<template>
  <span style="display:none">must redirect!</span>
</template>

<script>
export default {
  fetch({ redirect }) {
    redirect(301, '/')
  }
}
</script>