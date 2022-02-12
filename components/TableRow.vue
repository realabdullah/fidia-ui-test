<template>
  <tr>
      <td class="company__identity">
        <div class="check__box">
          <input type="checkbox" :id="company.id" :checked="company.checked" />
          <label :for="company.id"></label>
        </div>
        <img :src="company.logo" alt="company">
        <div class="__company">
          <p>{{ company.name }}</p>
          <span>{{ company.site }}</span>
        </div>
      </td>
      <td class="catalog__progress">
        <progress max="100" :value="company.progress">
          <div class="progress-bar">
            <span style="width: 80%">{{ company.progress }}</span>
          </div>
        </progress>
      </td>
      <td>
        <span class="__customer">
          {{ company.status }}
        </span>
      </td>
      <td class="avatars">
        <span class="avatar" v-for="avatar in company.avatars">
          <img :src="avatar" alt="avatar">
        </span>
        <span class="avatar avatar__no" v-if="company.other">{{ company.other }}</span>
      </td>
      <td class="__about">
        <p>{{ company.about }}</p>
        <span>{{ company.about_info }}</span>
      </td>
      <td class="__action">
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.5 5.00001H3.16667M3.16667 5.00001H16.5M3.16667 5.00001V16.6667C3.16667 17.1087 3.34226 17.5326 3.65482 17.8452C3.96738 18.1577 4.39131 18.3333 4.83333 18.3333H13.1667C13.6087 18.3333 14.0326 18.1577 14.3452 17.8452C14.6577 17.5326 14.8333 17.1087 14.8333 16.6667V5.00001H3.16667ZM5.66667 5.00001V3.33334C5.66667 2.89131 5.84226 2.46739 6.15482 2.15483C6.46738 1.84227 6.89131 1.66667 7.33333 1.66667H10.6667C11.1087 1.66667 11.5326 1.84227 11.8452 2.15483C12.1577 2.46739 12.3333 2.89131 12.3333 3.33334V5.00001M7.33333 9.16667V14.1667M10.6667 9.16667V14.1667"
            stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </td>
      <td class="__action">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.1667 2.5C14.3855 2.28113 14.6454 2.10752 14.9313 1.98906C15.2173 1.87061 15.5238 1.80965 15.8333 1.80965C16.1429 1.80965 16.4493 1.87061 16.7353 1.98906C17.0213 2.10752 17.2811 2.28113 17.5 2.5C17.7189 2.71887 17.8925 2.97871 18.0109 3.26468C18.1294 3.55064 18.1903 3.85714 18.1903 4.16667C18.1903 4.4762 18.1294 4.7827 18.0109 5.06866C17.8925 5.35463 17.7189 5.61447 17.5 5.83334L6.24999 17.0833L1.66666 18.3333L2.91666 13.75L14.1667 2.5Z"
            stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </td>
    </tr>
</template>

<script>
export default {
  props: ['company']
}
</script>
<style>

</style>