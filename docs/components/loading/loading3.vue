<template>
  <div class="loading-spinner2">
    <div class="rect1 rect-item"></div>
    <div class="rect2 rect-item"></div>
    <div class="rect3 rect-item"></div>
    <div class="rect4 rect-item"></div>
    <div class="rect5 rect-item"></div>
  </div>
</template>

<style lang="less">
.loading-spinner2{
  width: 50px;
  height: 60px;
  text-align: center;
  font-size: 10px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  .rect-item{
    background-color: #F44336;
    height: 100%;
    width: 6px;
    display: inline-block;
    animation: stretchdelay 1.2s infinite ease-in-out;
  }

  .rect2 {
    animation-delay: -1.1s;
  }
  
  .rect3 {
    animation-delay: -1.0s;
  }
  
  .rect4 {
    animation-delay: -0.9s;
  }
  
  .rect5 {
    animation-delay: -0.8s;
  }
  
  @keyframes stretchdelay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
    }  20% {
      transform: scaleY(1.0);
    }
  }
}
</style>

