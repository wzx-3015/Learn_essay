<template>
  <div class="container animation-6">
    <div class="shape shape1"></div>
    <div class="shape shape2"></div>
    <div class="shape shape3"></div>
    <div class="shape shape4"></div>
  </div>
</template>

<style lang="less">
.container.animation-6 {
  width: 30px;
  height: 30px;
  position: relative;
  animation: rotation 1s infinite;
  left: 47%;
  transform: translate(-50%, 0);

  .shape {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 2px;
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

  @keyframes animation6shape1 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(0, 18px);
    }
    50% {
      transform: translate(18px, 18px);
    }
    75% {
      transform: translate(18px, 0);
    }
  }

  @keyframes animation6shape2 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(-18px, 0);
    }
    50% {
      transform: translate(-18px, 18px);
    }
    75% {
      transform: translate(0, 18px);
    }
  }

  @keyframes animation6shape3 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(18px, 0);
    }
    50% {
      transform: translate(18px, -18px);
    }
    75% {
      transform: translate(0, -18px);
    }
  }

  @keyframes animation6shape4 {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(0, -18px);
    }
    50% {
      transform: translate(-18px, -18px);
    }
    75% {
      transform: translate(-18px, 0);
    }
  }

  .shape1 {
    animation: animation6shape1 2s linear 0s infinite normal;
  }
  .shape2 {
    animation: animation6shape2 2s linear 0s infinite normal;
  }
  .shape3 {
    animation: animation6shape3 2s linear 0s infinite normal;
  }
  .shape4 {
    animation: animation6shape4 2s linear 0s infinite normal;
  }
}
</style>
