<template>
  <section class="__filters">
    <div class="filters">
      <div class="fd">
        <div class="all__time">
          <span>All time</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L1 11M1 1L11 11" stroke="#6941C6" stroke-width="1.67" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
        <div class="more__filter">
          <span>US, AU, +4</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L1 11M1 1L11 11" stroke="#6941C6" stroke-width="1.67" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </div>
      </div>
      <button class="more__filters">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H14M1.5 1H16.5M6.5 11H11.5" stroke="#344054" stroke-width="1.67" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        <span>More filters</span>
      </button>
      <button class="edit__filters">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6H14M1.5 1H16.5M6.5 11H11.5" stroke="#344054" stroke-width="1.67" stroke-linecap="round"
            stroke-linejoin="round" />
        </svg>
        <span>Edit filters</span>
      </button>
    </div>
    <div class="__search">
      <form @submit.prevent="searchCompany">
        <label for="search">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
            stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </label>
        <input v-model="search" type="search" id="search" placeholder="Search">
      </form>  
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  methods: {
    searchCompany () {
      this.$store.dispatch('QUERY_TABLE', this.search)
    }
  },
  mounted () {
    this.$store.dispatch('QUERY_TABLE', this.search)
  }
}
</script>

<style>

</style>