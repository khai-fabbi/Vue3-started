<template>
  <h3 class="text-3xl font-bold text-center">About Page</h3>
  <div class="mt-5">
    <h4>
      I am
      <span class="italic font-semibold text-purple-600">{{ studentInfo.name }} -- {{ year }}</span>
    </h4>

    <div class="flex items-center justify-center gap-5">
      <button class="btn btn-ghost" @click="decement">Decrement</button>
      <span
        class="flex items-center justify-center w-20 text-4xl font-semibold text-center border border-gray-400 rounded-full aspect-square"
        >{{ count }}</span
      >
      <button class="btn btn-secondary" @click="increment">Increment</button>
    </div>
    <div>
      <span>Name : </span>
      <input v-model="studentInfo.name" type="text" class="input input-primary" placeholder="" />
    </div>
    <div class="mt-5">
      <span>Age : </span>
      <input v-model="studentInfo.age" type="number" class="input input-primary" placeholder="Age" />
    </div>

    <!-- test custom hook useToggle -->
    <div className="form-control w-32 mt-5">
      <label className="cursor-pointer label">
        <span className="label-text">Oke</span>
        <input type="checkbox" className="toggle toggle-primary" :value="isAccept" @change="toggleAccept" />
      </label>
    </div>
  </div>
</template>
<script>
  import { reactive, ref, computed, watch, watchEffect } from 'vue'
  import useToggle from '@/hooks/useToggle'
  export default {
    name: 'About',
    components: {},
    props: {
      theme: {
        type: String,
        required: false,
        default: 'light',
      },
    },
    setup() {
      const count = ref(1)
      const studentInfo = reactive({
        id: 1,
        name: 'Quang Khai',
        age: 25,
      })
      const { valueRef: isAccept, toggleValue: toggleAccept } = useToggle()
      function increment() {
        count.value++
      }
      function decement() {
        count.value--
      }
      const year = computed(() => {
        const yearCurrent = new Date().getFullYear()
        return yearCurrent - studentInfo.age
      })

      watch(count, (newValue, oldValue) => {
        console.log(newValue, oldValue)
      })

      watchEffect(() => {
        console.log(isAccept.value)
      })
      return {
        count,
        increment,
        decement,
        studentInfo,
        year,
        isAccept,
        toggleAccept,
      }
    },
  }
</script>
