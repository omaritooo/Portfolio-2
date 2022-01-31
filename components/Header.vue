<template>
  <div
    :class="{ '': $store.state.mode, dark: !$store.state.mode }"
    class="relative h-screen transition duration-200 ease-in-out lg:py-32 lg:px-64 dark:text-site-white dark:bg-site-black bg-site-blue"
  >
    <Sv />
    <div class="absolute left-16 top-12">
      <div class="wrapper">
        <div class="line bg-site-white"></div>
        <div class="wordwrapper">
          <div
            class="flex flex-col transition duration-200 ease-in-out gap-y-3 word dark:bg-site-black bg-site-blue"
          >
            <div>
              <font-awesome-icon
                :icon="['fab', 'linkedin-in']"
                size="lg"
                class="transition duration-500 ease-in-out transform text-site-white text-md hover:-translate-y-1 hover:shadow-xl"
              />
            </div>
            <div>
              <font-awesome-icon
                :icon="['fab', 'github']"
                size="lg"
                class="transition duration-500 ease-in-out transform text-site-white text-md hover:-translate-y-1 hover:shadow-xl"
              />
            </div>
            <div>
              <font-awesome-icon
                :icon="['fab', 'behance']"
                size="lg"
                class="transition duration-500 ease-in-out transform text-site-white text-md hover:-translate-y-1 hover:shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto mt-32">
      <div class="z-30 lg:w-3/4">
        <!-- <p class="text-xl text-justify text-site-blue dark:text-site-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et massa
          tincidunt, dapibus arcu ac, laoreet neque. Etiam vehicula blandit
          pulvinar. Praesent turpis enim, porta at venenatis ut, consectetur
          facilisis arcu. Proin ipsum elit, dictum a tristique a, suscipit a
          felis. Nulla condimentum lacus a libero ultrices dictum. Aliquam
          venenatis.
        </p>-->
        <div class="flex flex-col gap-y-5">
          <h1 class="lg:text-xl text-site-white dark:text-site-blue">Hi, my name is</h1>
          <h2 class="lg:text-7xl ] font-semibold text-[#Ecf3f9]">Omar Ashraf</h2>
          <h3 class="lg:text-7xl font-bold text-[#E0E2DB]">I build things on the web</h3>
          <p class="lg:text-2xl text-[#E1D9D1]">
            I'm a software engineer specializing in building responsive web applications to provide a satisfying digital experience. Currently, I'm working remotly as a
            <span
              class="under"
            >front end developer</span>.
          </p>
          <a class="w-max" href="/resume.pdf" download="resume">
            <button
              class="w-full p-4 transition duration-100 ease-in-out rounded-lg shadow-xl text-site-white bg-site-blue dark:bg-site-grey hover:-translate-y-2 lg:mr-auto"
            >Download Resume</button>
          </a>
        </div>
      </div>
      <div></div>
    </div>
    <nuxt-link :to="{ path: '/', hash: '#skills' }">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="absolute w-10 h-10 mx-auto bottom-24 left-1/2 text-site-blue dark:text-white animate-bounce"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
        />
      </svg>
    </nuxt-link>
  </div>
</template>

<script>
import Sv from "../components/SVG.vue";
export default {
  components: {
    Sv,
  },
}
</script>



<style>
.wrapper {
  position: relative;
  width: 20px;
  height: 80vh;
  margin: 10px;
}

.line {
  position: absolute;
  left: 49%;
  top: 0;
  bottom: 0;
  width: 1px;
  z-index: 1;
}

.wordwrapper {
  text-align: center;
  height: 12px;
  position: absolute;
  left: 0;
  right: 0;
  top: 80%;
  margin-top: -12px;
  z-index: 2;
}

.word {
  color: #ccc;
  letter-spacing: 1px;
  padding: 3px;
}

.shapes {
  opacity: 0.3;
}
.underd {
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.underd:hover::after {
  width: 100%;
  right: 0;
}

.underd::after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  right: 0;
  position: absolute;
  background: linear-gradient(to right top, #cdd0d1, #158bda, #279ce0);
  transition: width 0.5s ease 0s, right 0.5s ease 0s;
  width: 0;
}
.under {
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.under:hover::after {
  width: 100%;
  right: 0;
}

.under::after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 2px;
  right: 0;
  position: absolute;
  background: linear-gradient(
    to right top,
    #f4fcfe,
    #f1fafa,
    #f0f8f5,
    #eff5f0,
    #f0f2eb
  );
  transition: width 0.5s ease 0s, right 0.5s ease 0s;
  width: 0;
}
.shapes .sqare {
  position: absolute;
  top: 100px;
  left: 300px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 3px solid #fdc0b6;
  transition: border-color 0.4s ease;
  -webkit-transition: border-color 0.4s ease;
}

.shapes .sqarre {
  position: absolute;
  top: 100px;
  left: 300px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 3px solid #000000;
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

.shapes .circlee {
  position: absolute;
  top: 300px;
  left: 700px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: transparent;
  border: 3px solid #000000;
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
  -webkit-animation-duration: 9s;
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
.bg {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    to right top,
    #f4fcfe,
    #f1fafa,
    #f0f8f5,
    #eff5f0,
    #f0f2eb
  );
  backdrop-filter: blur(5px);
}
.darkbg {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    to bottom,
    #3d3a50,
    #434058,
    #48475f,
    #4e4d67,
    #54546f
  );
  backdrop-filter: blur(5px);
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