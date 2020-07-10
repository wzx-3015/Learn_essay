<template>
  <div class="loading-spinner1"></div>
</template>

<style lang="less">
.loading-spinner1{
  width: 60px;
  height: 60px;
  background-color: #F44336;
  position: relative;
  left: 46%;
  transform: translate(-50%, 0);
  animation: rotateplane 1.2s infinite ease-in-out;
  
  @keyframes rotateplane {
    0% {
      transform: rotateX(0deg) rotateY(0deg);
    } 50% {
      transform: rotateX(-180.1deg) rotateY(0deg);
    } 100% {
      transform: rotateX(-180deg) rotateY(-179.9deg);
    }
  }
}
</style>

