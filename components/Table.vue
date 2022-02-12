<template>
  <section class="__table">
    <div class="table__div">
      <table class="__companies">
        <thead>
          <tr>
            <th class="company__">
              <div class="check__box">
                <input class="th_check" type="checkbox" id="th" @click="showTable" checked />
                <label for="th"></label>
              </div>
              <span>Company</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.99998 1.33333V10.6667M5.99998 10.6667L10.6666 6M5.99998 10.6667L1.33331 6"
                  stroke="#667085" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </th>
            <th>
              License use
            </th>
            <th>
              Status
            </th>
            <th>Users</th>
            <th>About</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            v-if="shown"
            v-for="(company, i) in filteredCompany"
            :key="i"
            :company="company" />
        </tbody>
      </table>
      <div class="table__footer">
        <div class="table__btns">
          <div class="t__btns">
            <button class="__previous" aria-label="previous page">
              Previous
            </button>
            <button class="__next" aria-label="next page">
              Next
            </button>
          </div>
          <div class="__page">
            <p>Page 1 of 10</p><!-- </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="mobile__footer">
      <button class="previous__arrow">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.8334 7.00002H1.16669M1.16669 7.00002L7.00002 12.8334M1.16669 7.00002L7.00002 1.16669"
            stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <div class="__page">
        <p>Page 1 of 10</p>
      </div>
      <button class="next__arrow">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.16669 7.00002H12.8334M12.8334 7.00002L7.00002 1.16669M12.8334 7.00002L7.00002 12.8334"
            stroke="#667085" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      shown: true
    }
  },
  methods: {
    showTable () {
      this.shown = !this.shown
      console.log('shiw')
    }
  },
  computed: {
    filteredCompany () {
      return this.$store.state.filteredList
    }
  }
}
</script>

<style>

</style>