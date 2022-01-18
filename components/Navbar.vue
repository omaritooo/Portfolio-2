<template>
  <div
    class="transition duration-200 ease-in-out shadow-2xl shadow-inner bg-site-blue dark:bg-site-black"
  >
    <nav
      class="relative flex flex-wrap items-center justify-between px-2 py-2 transition duration-200 ease-in-out lg:w-1/2 lg:mx-auto lg:py-2 bg-site-white dark:bg-site-grey lg:rounded-b-lg lg:shadow-xl"
    >
      <div class="container flex flex-wrap items-center justify-between px-4">
        <div
          class="container relative flex justify-between w-full px-4 lg:w-auto lg:static lg:block lg:justify-start"
        >
          <nuxt-link
            to="/"
            class="inline-block mr-4 text-sm font-bold leading-relaxed text-white uppercase whitespace-nowrap"
          >
            <img
              v-if="!$store.state.mode"
              class="w-16 h-16 transition duration-500 rotate-0 md:w-12 md:h-12 hover:rotate-360 hover:transform"
              src="/logo.png"
              alt
            />
            <img
              v-if="$store.state.mode"
              class="w-16 h-16 transition duration-500 rotate-0 md:w-12 md:h-12 hover:rotate-360 hover:transform"
              src="/logo_black.png"
              alt
            />
          </nuxt-link>
          <div class="flex">
            <button class="flex lg:hidden" @click="invert">
              <transition name="fade" mode="out-in">
                <div>
                  <svg
                    v-if="!mode"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-[#e9a744]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <svg
                    v-if="mode"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-site-blue"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                </div>
              </transition>
            </button>
            <button
              class="block px-3 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
            >
              <button
                class="relative w-10 h-10 text-gray-500 focus:outline-none"
                @click="showMenu = !showMenu"
              >
                <span class="sr-only">Open main menu</span>
                <div
                  class="absolute block w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                >
                  <span
                    aria-hidden="true"
                    class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                    :class="{
                      'rotate-45': showMenu,
                      ' -translate-y-1.5': !showMenu,
                    }"
                  ></span>
                  <span
                    aria-hidden="true"
                    class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                    :class="{ 'opacity-0': showMenu }"
                  ></span>
                  <span
                    aria-hidden="true"
                    class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                    :class="{
                      '-rotate-45': showMenu,
                      ' translate-y-1.5': !showMenu,
                    }"
                  ></span>
                </div>
              </button>
              <!-- <font-awesome-icon  :icon="['fab', 'facebook']" size="lg" class="text-white transition duration-500 ease-in-out transform text-md hover:-translate-y-1 hover:shadow-xl"/> -->
            </button>
          </div>
        </div>
        <div
          v-bind:class="{ hidden: !showMenu, flex: showMenu }"
          class="items-center py-2 lg:flex lg:flex-grow lg:py-0"
        >
          <transition
            enter-active-class="transition ease-out duration-25"
            enter-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition ease-in duration-25"
            leave-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
          >
            <ul
              class="flex flex-col py-2 ml-auto list-none lg:py-2 text-site-blue dark:text-site-white gap-y-4 md:justify-end lg:flex-row"
            >
              <li class="nav-item">
                <nuxt-link
                  to
                  class="px-4 py-4 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 focus:outline-none focus:shadow-outline"
                  href="#"
                >Home</nuxt-link>
              </li>

              <li class="nav-item">
                <nuxt-link
                  to="#contact"
                  class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  href="#"
                >Portfolio</nuxt-link>
              </li>
              <li class="nav-item" @click="modalshow">
                <nuxt-link
                  to
                  class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                >Say Hello</nuxt-link>
              </li>
              <!-- <button
                class="px-4 py-2 text-sm font-bold tracking-wide text-white uppercase bg-blue-600 rounded-lg "
               
              >
                Show Modal
              </button>-->
              <li class="nav-item" @click="invert">
                <nuxt-link
                  to
                  class="hidden px-4 py-1 mt-2 text-sm font-semibold bg-transparent rounded-lg lg:flex focus:outline-none focus:shadow-outline md:mt-0"
                  href="#"
                >
                  <button class>
                    <transition name="fade" mode="out-in">
                      <div>
                        <svg
                          v-if="!mode"
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5 text-[#e9a744]"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        <svg
                          v-if="mode"
                          xmlns="http://www.w3.org/2000/svg"
                          class="w-5 h-5 text-site-blue"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                          />
                        </svg>
                      </div>
                    </transition>
                  </button>
                </nuxt-link>
              </li>
            </ul>
          </transition>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      showModal: false,
    };
  },
  computed: {
    mode() {
      return this.$store.getters.getMode;
    },
  },
  methods: {
    invert() {
      this.$store.commit("invert");
    },
    modalshow() {
      this.$store.commit("modelo");
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>