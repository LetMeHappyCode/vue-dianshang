<template>
  <div>
      <!-- 三级联动已经是全局组件，不需要再次注册，能够直接使用 -->
      <TypeNav></TypeNav>
      <ListContainer></ListContainer>
      <Recommend></Recommend>
      <Rank></Rank>
      <Like></Like>
      <Floor></Floor>
      <Brank></Brank>
  </div>
</template>

<script>
import ListContainer from "./ListContainer"
import Recommend from "./Recommend"
import Rank from "./Rank"
import Like from "./Like"
import Floor from "./Floor"
import Brank from "./Brand"
export default {
  components:{
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brank
  }

}
</script>

<style>

</style>