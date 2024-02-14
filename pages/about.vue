<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint
      voluptatem officia itaque, vero soluta sed temporibus accusamus in ipsum!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sint
      voluptatem officia itaque, vero soluta sed temporibus accusamus in ipsum!
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  const { data } = await useFetch("/api/ninja")
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }
  p {
    margin: 20px 0;
  }
</style>
