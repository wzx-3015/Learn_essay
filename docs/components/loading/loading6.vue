<template>
  <div class="container loading-spinner5">
    <div class="shape shape1"></div>
    <div class="shape shape2"></div>
    <div class="shape shape3"></div>
    <div class="shape shape4"></div>
  </div>
</template>

<style lang="less">
.container.loading-spinner5{
  transform: rotate(45deg);
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

  .shape.shape1 {
    left: 0;
    background-color: #5C6BC0;
  }

  .shape.shape2 {
    right: 0;
    background-color: #8BC34A;
  }

  .shape.shape3 {
    bottom: 0;
    background-color: #FFB74D;
  }

  .shape.shape4 {
    bottom: 0;
    right: 0;
    background-color: #F44336;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes animation4shape1 {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(5px, 5px);
    }
  }

  @keyframes animation4shape2 {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-5px, 5px);
    }
  }

  @keyframes animation4shape3 {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(5px, -5px);
    }
  }

  @keyframes animation4shape4 {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(-5px, -5px);
    }
  }

  .shape1 {
    animation: animation4shape1 0.3s ease 0s infinite alternate;
  }

  .shape2 {
    animation: animation4shape2 0.3s ease 0.3s infinite alternate;
  }

  .shape3 {
    animation: animation4shape3 0.3s ease 0.3s infinite alternate;
  }

  .shape4 {
    animation: animation4shape4 0.3s ease 0s infinite alternate;
  }
}
</style>
