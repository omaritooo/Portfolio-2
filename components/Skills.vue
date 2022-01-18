<template>
    <div id="skills" class="flex flex-col justify-center p-52 bg-site-blue dark:bg-site-black">
        <h1 id="test" class="mx-auto mb-6 text-5xl text-left test text-site-white">About Me</h1>
        <div class="flex justify-center gap-x-20">
            <div
                class="rounded-xl mt-10 bg-gradient-to-r p-[6px] group from-[#6EE7B7] via-[#b4caee] to-[#9333EA] dark:from-[#6EE7B7] dark:via-[#3B82F6] dark:to-[#9333EA]"
            >
                <div
                    class="flex flex-col justify-between h-full p-4 text-white rounded-lg bg-site-blue dark:bg-site-black"
                >
                    <img
                        class="transition duration-500 ease-in-out -translate-x-32 -translate-y-32 group-hover:translate-x-0 group-hover:translate-y-0 w-96 h-96"
                        src="undraw.svg"
                        alt
                    />
                </div>
            </div>
            <div class="flex flex-col w-1/3 my-auto text-lg text-site-white">
                Hello! My name is Omar and I enjoy creating things that live on the internet.
                I'm a 23 year old fresh graduate from the
                <em>Arab Academy of Science and Technology.</em> I'm a fast learner, adaptable and can work well with other. I'm currently working remotly as a front end developer but I'm open to freelance work.
                <br />Here are a few technologies I’ve been working with recently:
                <div class="flex mt-4 justify-evenly">
                    <div>
                        <ul>
                            <li>Node.js</li>
                            <li>Nuxt.js</li>
                            <li>Three.js</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>Typescript</li>
                            <li>REST API</li>
                            <li class="flex">TailwindCSS</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#test {
    padding: 30px 0 8px;
    position: relative;
    z-index: 10;
}

#test::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 10%;
    width: 100%;
    height: 8px;
    transform: skew(-12deg) translateX(-50%);
    background: #75e6da;
    z-index: -1;
}

#testd {
    padding: 30px 0 8px;
    position: relative;
    z-index: 10;
}

#testd::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 10%;
    width: 100%;
    height: 8px;
    transform: skew(-12deg) translateX(-50%);
    background: #095988;
    z-index: -1;
}
</style>