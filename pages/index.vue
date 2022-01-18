<template  >
  <div
    :class="this.$store.state.mode ? '' : 'dark'"
    class="transition duration-200 ease-in-out dark:bg-site-black bg-site-white"
  >
    <!-- <div
      class="transition duration-200 p-96 dark:bg-site-black bg-site-blue"
    ></div>-->
    <Header />
    <Skills />
    <Portfolio />
    <Navbar class="absolute top-0 z-20 w-full" />
    <!-- <div
      class="transition duration-200 ease-in-out lg:p-96 dark:bg-site-black bg-site-white"
    ></div>-->
    <Modal @close="modelo">
      <form class="w-full max-w-lg text-site-blue dark:text-site-white">
        <div class="flex flex-wrap mb-6 -mx-3">
          <div class="w-full px-3 mb-6 md:w-1/2 md:mb-0">
            <label
              class="block mb-2 text-xs font-bold tracking-wide uppercase"
              for="grid-first-name"
            >First Name</label>
            <input
              class="block w-full px-4 py-3 leading-tight bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              v-model="firstname"
              name="firstname"
            />
          </div>
          <div class="w-full px-3 md:w-1/2">
            <label
              class="block mb-2 text-xs font-bold tracking-wide uppercase"
              for="grid-last-name"
            >Last Name</label>
            <input
              class="block w-full px-4 py-3 leading-tight bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              v-model="lastname"
              name="lastname"
            />
          </div>
        </div>
        <div class="flex flex-wrap mb-6 -mx-3">
          <div class="w-full px-3">
            <label
              class="block mb-2 text-xs font-bold tracking-wide uppercase"
              for="grid-password"
            >E-mail</label>
            <input
              class="block w-full px-4 py-3 mb-3 leading-tight bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              v-model="email"
              name="email"
            />
            <!-- <p class="text-xs italic text-gray-600">
              Some tips - as long as needed
            </p>-->
          </div>
        </div>
        <div class="flex flex-wrap mb-6 -mx-3">
          <div class="w-full px-3">
            <label
              class="block mb-2 text-xs font-bold tracking-wide uppercase"
              for="grid-password"
            >Message</label>
            <textarea
              class="block w-full h-48 px-4 py-3 mb-3 leading-tight bg-gray-200 border border-gray-200 rounded appearance-none resize-none no-resize focus:outline-none focus:bg-white focus:border-gray-500"
              id="message"
              v-model="message"
              name="message"
            ></textarea>
            <!-- <p class="text-xs italic text-gray-600">
              Re-size can be disabled by set by resize-none / resize-y /
              resize-x / resize
            </p>-->
          </div>
        </div>
        <div class="md:flex md:items-center">
          <div class="md:w-1/3">
            <button
              class="px-4 py-2 font-bold text-white bg-teal-400 rounded shadow bg-site-blue hover:bg-teal-400 focus:shadow-outline focus:outline-none"
              type="button"
              @click.prevent="sendEmail"
            >Send</button>
          </div>
          <div class="md:w-2/3"></div>
        </div>
      </form>
    </Modal>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import Skills from "~/components/Skills.vue";
import Portfolio from "~/components/Portfolio.vue";

export default {
  scrollToTop: true,

  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
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
    modelo() {
      this.$store.commit("modelo");
    },
    sendEmail() {
      emailjs.send("service_dw6pr37", "template_ek4z7wb", {
        from_name: this.firstname + " " + this.lastname,
        message: this.message,
        reply_to: this.email,
      }, "user_Yx5mVuk2Dm1UivD4OckH2");
      // Reset form field
      this.firstname = "";
      this.lastname = "";
      this.email = "";
      this.message = "";
    },
  },
  components: { Skills, Portfolio }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
html {
  font-family: "JetBrains Mono", monospace;
}
</style>
