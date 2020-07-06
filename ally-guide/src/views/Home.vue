<template>
  <div class="Home">
<div class="buffer">
</div>
  <div style = "background-image: linear-gradient(90deg, #892819, black);" class = "tiles border-bottom border-white">
    <h1 class="message-title"> Black Lives Matter.</h1>
    <div class="text-center">
      <div class="action-div border-bottom text-center">
        <a class="elevate" href = "/elevate">Elevate  </a>
      </div>
      <div class="action-div border-bottom">
        <a class="distribute" href = "/contribute"> Distribute </a>
      </div>
      <div class="action-div border-bottom">
        <a class="educate" href = "/educate">Educate </a>
      </div>
      <div class="action-div ">
        <a class="collaborate" href = "/collaborate">Collaborate </a>
      </div>
    </div>
  </div>
</div>

</template>
<style>

.action-div{
   height:250px;
   width:100%;
   text-align:center;
}

.tiles{
  padding-top: 20px;
  padding-bottom: 20px;
}

</style>


<script>


export default {
  name: "Home",
  components: {

  }
}
</script>
