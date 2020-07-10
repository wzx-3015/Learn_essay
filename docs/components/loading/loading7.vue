<template>
  <div class="container loading-spinner6">
    <div class="shape shape1"></div>
    <div class="shape shape2"></div>
    <div class="shape shape3"></div>
    <div class="shape shape4"></div>
  </div>
</template>

<style lang="less">
.container.loading-spinner6 {
  transform: rotate(45deg);
  width: 30px;
  height: 30px;
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);
  .shape {
    position: absolute;
    border-radius: 1px;
    width: 15px;
    height: 15px;
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

  @keyframes animation5shape1 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(0, 15px);
    }
    50% {
      transform: translate(15px, 15px);
    }
    75% {
      transform: translate(15px, 0);
    }
  }

  @keyframes animation5shape2 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(-15px, 0);
    }
    50% {
      transform: translate(-15px, 15px);
    }
    75% {
      transform: translate(0, 15px);
    }
  }

  @keyframes animation5shape3 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(15px, 0);
    }
    50% {
      transform: translate(15px, -15px);
    }
    75% {
      transform: translate(0, -15px);
    }
  }

  @keyframes animation5shape4 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(0, -15px);
    }
    50% {
      transform: translate(-15px, -15px);
    }
    75% {
      transform: translate(-15px, 0);
    }
  }

  .shape1 {
    animation: animation5shape1 2s ease 0s infinite reverse;
  }

  .shape2 {
    animation: animation5shape2 2s ease 0s infinite reverse;
  }

  .shape3 {
    animation: animation5shape3 2s ease 0s infinite reverse;
  }

  .shape4 {
    animation: animation5shape4 2s ease 0s infinite reverse;
  }
}
</style>
