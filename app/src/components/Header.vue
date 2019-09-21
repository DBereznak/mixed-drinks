<template>
    <div class="top-nav">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/find-drink">Find Drink</router-link>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.top-nav{
  background: #050259;
  margin-bottom: 50px;
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #7c05f2;
    padding: 10px 0;
    &.router-link-exact-active {
      color: #f23827;
    }
  }
}
}

</style>