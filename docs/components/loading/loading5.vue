<template>
  <div class="container loading-spinner4">
    <div class="shape shape1"></div>
    <div class="shape shape2"></div>
    <div class="shape shape3"></div>
    <div class="shape shape4"></div>
  </div>
</template>

<style lang="less">
.container.loading-spinner4 {
  transform: rotate(10deg);
  animation: rotation 1s infinite;
  width: 30px;
  height: 30px;
  position: relative;
  left: 48%;
  transform: translate(-50%, 0);
  .shape{
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 5px;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes animation2shape1 {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(20px, 20px);
    }
  }

  @keyframes animation2shape2 {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-20px, 20px);
    }
  }


  @keyframes animation2shape3 {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(20px, -20px);
    }
  }

  @keyframes animation2shape4 {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-20px, -20px);
    }
  }

  .shape1{
    left: 0;
    background-color: #5C6BC0;
    animation: animation2shape1 0.5s ease 0s infinite alternate;
  }
  .shape2 {
    right: 0;
    background-color: #8BC34A;
    animation: animation2shape2 0.5s ease 0s infinite alternate;
  }
  .shape3 {
    bottom: 0;
    background-color: #FFB74D;
    animation: animation2shape3 0.5s ease 0s infinite alternate;
  }

  .shape4 {
    bottom: 0;
    right: 0;
    background-color: #F44336;
    animation: animation2shape4 0.5s ease 0s infinite alternate;
  }
}
</style>
