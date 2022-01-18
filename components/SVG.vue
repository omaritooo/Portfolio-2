<template>
  <div
    :class="{ '': $store.state.mode, dark: !$store.state.mode }"
    class="bg-site-white dark:bg-site-grey"
  >
    <div class="shapes float">
      <div class="sqare spin"></div>
      <div class="circle"></div>
      <svg
        class="triangle spin"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        width="30px"
        height="30px"
        viewBox="0 0 30 30"
        enable-background="new 0 0 30 30"
        xml:space="preserve"
        style="transform: matrix3d(0.17364, 0.98481, 0, 0, -0.98481, 0.17364, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);"
      >
        <polygon
          fill="none"
          stroke-width="2px"
          stroke="#000000"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          points="14.921,2.27 28.667,25.5 1.175,25.5 "
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
}

.shapes .sqare {
  position: absolute;
  top: 100px;
  left: 500px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 3px solid #fdc0b6;
  transition: border-color 0.4s ease;
  -webkit-transition: border-color 0.4s ease;
}

.shapes .circle {
  position: absolute;
  top: 300px;
  left: 700px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 3px solid #fdc0b6;
  transition: border-color 0.4s ease;
  -webkit-transition: border-color 0.4s ease;
}

.shapes .triangle {
  position: absolute;
  width: 60px;
  height: 60px;
  top: 150px;
  left: 1200px;
}

.float {
  -webkit-animation-name: Floating;
  -webkit-animation-duration: 6s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
}

@-webkit-keyframes Floating {
  from {
    -webkit-transform: translate(0, 0px);
  }
  65% {
    -webkit-transform: translate(0, 50px);
  }
  to {
    -webkit-transform: translate(0, -0px);
  }
}

.spin {
  -webkit-animation-name: Spinning;
  -webkit-animation-duration: 12s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease-in-out;
}

@-webkit-keyframes Spinning {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>