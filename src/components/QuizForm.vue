<template>
  <div class="max-w-3xl mx-auto mt-10">
    <h3 class="text-3xl font-bold text-center text-purple-600">Learning Form Vue 3</h3>
    <form class="mt-4" @submit.prevent="onSubmitForm">
      <div class="grid grid-cols-2 gap-5">
        <!-- full name -->
        <div class="w-full max-w-xs form-control">
          <label class="label" for="fullname">
            <span class="label-text">What is your full name?</span>
          </label>
          <input
            id="fullname"
            v-model="quiz.fullName"
            type="text"
            placeholder="Enter yourname"
            class="w-full max-w-xs input input-primary"
          />
          <span class="label-text">{{ quiz.fullName }}</span>
        </div>

        <!-- email name -->
        <div class="w-full max-w-xs form-control">
          <label class="label" for="email-id">
            <span class="label-text">What is your email?</span>
          </label>
          <input
            id="email-id"
            v-model="quiz.email"
            type="email"
            placeholder="Enter Your Email"
            class="w-full max-w-xs input input-primary"
          />
          <span class="label-text">{{ quiz.email }}</span>
        </div>
        <div class="flex col-span-6 gap-10">
          <div v-for="item in jobList" :key="item.id" class="form-control">
            <label class="cursor-pointer label">
              <span class="mr-4 capitalize label-text" :class="{ 'text-red-600': quiz.job === item.value }">{{
                item.value
              }}</span>
              <input
                v-model="quiz.job"
                type="radio"
                name="radio-10"
                class="radio checked:bg-red-500"
                :value="item.value"
              />
            </label>
          </div>
        </div>
      </div>
      <div class="mt-6 text-center">
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        quiz: {
          fullName: '',
          email: '',
          job: 'student',
        },
        jobList: [
          {
            id: 1,
            value: 'customer',
          },
          {
            id: 2,
            value: 'student',
          },
          {
            id: 3,
            value: 'teacher',
          },
        ],
      }
    },
    methods: {
      onSubmitForm() {
        console.log(this.quiz)
      },
    },
  }
</script>
