
<template>
  <div class="loading-spinner">
    <div class="double-bounce1"></div>
    <div class="double-bounce2"></div>
  </div>
</template>

<style lang="less">
.loading-spinner {
  width: 60px;
  height: 60px; 
  position: relative;
  left: 50%;
  transform: translate(-50%, 0);

  .double-bounce1, .double-bounce2 {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #F44336;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: bounce 2.0s infinite ease-in-out;
  }
  
  .double-bounce2 {
    animation-delay: -1.0s;
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: scale(0.0);
    } 50% {
      transform: scale(1.0);
    }
  }
}
</style>

