<template>
  <div class="container loading-spinner3">
    <div class="shape shape1"></div>
    <div class="shape shape2"></div>
    <div class="shape shape3"></div>
    <div class="shape shape4"></div>
  </div>
</template>

<style lang="less">
.container.loading-spinner3 {
  width: 30px;
  height: 30px;
  position: relative;
  transform: rotate(45deg);
  left: 50%;
  transform: translate(-50%, 0);

  @keyframes animation1shape1 {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(16px, 16px);
    }
  }

  @keyframes animation1shape2 {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-16px, 16px);
    }
  }

  @keyframes animation1shape3 {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(16px, -16px);
    }
  }

  @keyframes animation1shape4 {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-16px, -16px);
    }
  }

  .shape{
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 1px;
  }
  
  .shape1{
    left: 0;
    background-color: #5C6BC0;
    animation: animation1shape1 0.5s ease 0s infinite alternate;
  }

  .shape2 {
    right: 0;
    background-color: #8BC34A;
    animation: animation1shape2 0.5s ease 0s infinite alternate;
  }

  .shape3 {
    bottom: 0;
    background-color: #FFB74D;
    animation: animation1shape3 0.5s ease 0s infinite alternate;
  }
  .shape4 {
    bottom: 0;
    right: 0;
    background-color: #F44336;
    animation: animation1shape4 0.5s ease 0s infinite alternate;
  }
}
</style>

