<template>
  <div>
    <div class="flex overflow-hidden">
      <img class="inline-block h-6 w-6 rounded-full text-white shadow-solid" :src="images" alt />
      <img
        class="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
        :src="images"
        alt
      />
      <img
        class="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
        :src="images"
        alt
      />
      <img
        class="-ml-1 inline-block h-6 w-6 rounded-full text-white shadow-solid"
        :src="images"
        alt
      />
    </div>

    <div class="flex overflow-hidden">
      <img class="inline-block h-8 w-8 rounded-full text-white shadow-solid" :src="images" alt />
      <img
        class="-ml-2 inline-block h-8 w-8 rounded-full text-white shadow-solid"
        :src="images"
        alt
      />
      <img
        class="-ml-2 inline-block h-8 w-8 rounded-full text-white shadow-solid"
        :src="images"
        alt
      />
      <img
        class="-ml-2 inline-block h-8 w-8 rounded-full text-white shadow-solid"
        :src="images"
        alt
      />
    </div>

    <div class="flex overflow-hidden">
      <img class="inline-block h-10 w-10 rounded-full text-white shadow-solid" :src="images" alt />
      <img
        class="-ml-2 inline-block h-10 w-10 rounded-full text-white shadow-solid"
        :src="images"
        alt
      />
      <img
        class="-ml-2 inline-block h-10 w-10 rounded-full text-white shadow-solid"
        :src="images"
        alt
      />
      <img
        class="-ml-2 inline-block h-10 w-10 rounded-full text-white shadow-solid"
        :src="images"
        alt
      />
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            images: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        }
    }
}
</script>