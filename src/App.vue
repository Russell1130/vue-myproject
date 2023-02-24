<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Slideshow from './components/Slideshow.vue'
</script>

<template>
  <div>
    <HelloWorld msg="Vite + Vue" />
    <div class="flex flex-row bg-gray-200 rounded-3 px-20 mx-9">
      <div class="w-3/4 self-center pt-32 pb-8">
        <img src="../public/human.png" class="py-5"/>
        <button class="bg-white rounded-md p-2">Learn More</button>
      </div>
      <div class="w-2/4 self-center">
        <img src="../public/right.png"/>
      </div>
    </div>
    <div class="flex flex-row px-20">
      <div class="w-2/4 self-center pt-32 pb-8">
        <img src="hmt.png" class="py-5"/>
      </div>
      <div class="w-2/5 self-center text-3xl text-purple-800 pt-28">
        <nobr class=" text-purple-600">HMT</nobr> funds the processing of digitized work, and rewards workers for their contributions.
      </div>
    </div>
    <div class="bg-violet-50 w-full flex flex-col">
      <div class="w-2/3 self-center">
        <div class="text-purple-800 text-4xl pt-5 pl-5">Token Details</div>
        <img src="token.png" />
        <img src="tokentype.png" class="pl-5"/>
        <img src="smart.png" class="pl-7 pb-10"/>
        <img src="exchanges.png" class="pl-7"/>
      </div>
    </div>
    <div class="flex flex-col bg-violet-50 rounded-3xl px-20 m-20">
      <div class="self-center p-10 text-purple-800 text-4xl">HUMAN in the media</div>
      <div class="self-center">
        <img src="bitcoin.png"/>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="self-center w-9/12 p-10">
        <img src="tokenallocation.png"/>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="self-center w-9/12 p-10">
        <img src="supply.png"/>
      </div>
    </div>
    <div class="flex flex-col bg-violet-50 rounded-3xl m-20 pb-12">
      <div class="self-center p-10 text-purple-800 text-4xl">How do i get HMT?</div>
      <div class="self-center flex flex-row h-12">
        <img src="complete.png" class="px-5 py-10 bg-white w-1/6 m-auto"/>
        <img src="grants.png" class="px-5 py-10 bg-white w-1/6 m-auto"/>
        <img src="ambassador.png" class="px-5 py-10 bg-white w-1/6 m-auto"/>
        <img src="refer.png" class="px-5 py-10 bg-white w-1/6 m-auto"/>
        <img src="validator.png" class="px-5 py-10 bg-white w-1/6 m-auto"/>
      </div>
    </div>
    <br/>
    <div class="flex flex-col bg-violet-50 rounded-3xl m-20 h-72 pb-6">
      <div class="self-center p-10 text-purple-800 text-4xl">Utility of the HUMAN Token</div>
      <div class="self-center flex flex-row absolute m-20 h-1/5">
        <img src="job.png" class="w-1/3 m-auto"/>
        <img src="worker.png" class="w-1/3 m-auto"/>
        <img src="validators.png" class="w-1/3 m-auto"/>
      </div>
    </div><br/><br/><br/><br/><br/><br/><br/>
    <div class="flex flex-col h-72">
      <div class="px-40 text-purple-800 text-4xl">Disclaimer</div>
      <div class="px-40 pt-10 text-purple-800 text-base">The HUMAN Protocol Foundation makes no representation, warranty, or undertaking, express or implied, as to the accuracy, reliability, completeness, or reasonableness of the Information. Any assumptions, opinions, and estimates expressed in the information on this page constitutes the HUMAN Protocol Foundation’s judgment as of 18/11/21 and are subject to change without notice. The HUMAN Protocol Foundation does not accept any liability for any direct, consequential or other loss arising from reliance on the contents of the information in this graphic.
</div>
    </div>
    <div class="flex flex-col">
      <div class="flex self-center w-4/5">
        <div class="w-5/6 text-purple-800 font-bold text-2xl">Recent Entries</div>
        <button class="border-purple-800 border-2 p-2 rounded-lg w-1/12 mr-0">Go to blog</button>
      </div>
      <Slideshow />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
