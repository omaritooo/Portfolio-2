<template>
    <div class="lg:px-64 bg-site-blue dark:bg-site-black">
        <h1 class="mx-auto text-5xl text-center underline--magical text-site-white">Portfolio</h1>
        <div></div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            test: []
        }
    },
    mounted() {
        axios
            .get(
                'https://api.spotify.com/v1/me/player/currently-playing', {
                params: { limit: 50, offset: 0 },
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + 'BQAdHKFQpUbSM7gR2ym7-s_4kXqJV7j0PbPVtMR1q2UqyiuByZz7wZtVaXhQbXoLMPMU2EfSepWAGJzdfKKBwPENm7EhqPB_XdIlKFxL7fsr5vdOoFzm4XgL2XqijoPZZjxy9CZZki5UC-1wQKEDdw',
                    'Content-Type': 'application/json',
                },
            }).then((data) => this.test = data.data)


    },

}
</script>

<style>
</style>
<style lang="scss">
.underline--magical {
    background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);
    background-repeat: no-repeat;
    background-size: 20% 0.2em;
    background-position: 50% 90%;
    transition: background-size 0.25s ease-in;
    &:hover {
        background-size: 20% 70%;
    }
}
</style>