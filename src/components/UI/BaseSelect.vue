<template>
  <select :value="selectedOption" @change="changeOption" class="select">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    selectedOption: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit('changeSelected', event.target.value);
    },
  },
};
</script>

<style scoped>
.select {
  width: 100%;
  padding: 7px 9px;
  background: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #485056;
}
</style>
