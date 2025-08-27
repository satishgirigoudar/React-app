<template>
  <div>
    <h2>Counter</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrment">Decrment</button>
    <button @click="reset">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 100
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrment() {
      this.count > 0 ? this.count-- : this.count = 0
    },
    reset() {
      this.count = 0
    }
  }

};
</script>
