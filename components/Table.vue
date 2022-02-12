<template>
  <section class="__table">
    <div class="table__div">
      <table class="__companies">
        <thead>
          <tr>
            <th class="company__">
              <div class="check__box">
                <input class="th_check" type="checkbox" id="th" checked />
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
            v-for="(company, i) in companies"
            :key="i"
            :company="company" />
          <!-- <tr>
            <td class="company__identity">
              <div class="check__box">
                <input type="checkbox" id="two" checked />
                <label for="two"></label>
              </div>
              <img src="~/assets/img/circloos.png" alt="company">
              <div class="__company">
                <p>Circooles</p>
                <span>getcirooles.com</span>
              </div>
            </td>
            <td class="catalog__progress">
              <progress max="100" value="70">
                <div class="progress-bar">
                  <span style="width: 70%">70%</span>
                </div>
              </progress>
            </td>
            <td>
              <span class="__churned">
                Churned
              </span>
            </td>
            <td class="avatars">
              <span class="avatar">
                <img src="~/assets/img/av6.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av7.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av8.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av9.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av10.png" alt="avatar">
              </span>
              <span class="avatar avatar__no">+8</span>
            </td>
            <td class="__about">
              <p>Design software</p>
              <span>Super lightweight design app.</span>
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
          <tr>
            <td class="company__identity">
              <div class="check__box">
                <input type="checkbox" id="three" checked />
                <label for="three"></label>
              </div>
              <img src="~/assets/img/commandr.png" alt="company">
              <div class="__company">
                <p>Command+R</p>
                <span>cmdr.ai</span>
              </div>
            </td>
            <td class="catalog__progress">
              <progress max="100" value="50">
                <div class="progress-bar">
                  <span style="width: 50%">50%</span>
                </div>
              </progress>
            </td>
            <td>
              <span class="__customer">
                Customer
              </span>
            </td>
            <td class="avatars">
              <span class="avatar">
                <img src="~/assets/img/av10.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av11.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av12.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av9.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av13.png" alt="avatar">
              </span>
              <span class="avatar avatar__no">+2</span>
            </td>
            <td class="__about">
              <p>Data prediction</p>
              <span>AI and machine learning data</span>
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
          <tr>
            <td class="company__identity">
              <div class="check__box">
                <input type="checkbox" id="four" />
                <label for="four"></label>
              </div>
              <img src="~/assets/img/hourglass.png" alt="company">
              <div class="__company">
                <p>Hourglass</p>
                <span>hourglass.app</span>
              </div>
            </td>
            <td class="catalog__progress">
              <progress max="100" value="90">
                <div class="progress-bar">
                  <span style="width: 90%">90%</span>
                </div>
              </progress>
            </td>
            <td>
              <span class="__customer">
                Customer
              </span>
            </td>
            <td class="avatars">
              <span class="avatar">
                <img src="~/assets/img/av5.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av2.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av6.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av7.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av11.png" alt="avatar">
              </span>
            </td>
            <td class="__about">
              <p>Productivity app</p>
              <span>Time management and productivity</span>
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
          <tr>
            <td class="company__identity">
              <div class="check__box">
                <input type="checkbox" id="five" />
                <label for="five"></label>
              </div>
              <img src="~/assets/img/layers.png" alt="company">
              <div class="__company">
                <p>Layers</p>
                <span>getlayers.io</span>
              </div>
            </td>
            <td class="catalog__progress">
              <progress max="100" value="30">
                <div class="progress-bar">
                  <span style="width: 30%">30%</span>
                </div>
              </progress>
            </td>
            <td>
              <span class="__churned">
                Churned
              </span>
            </td>
            <td class="avatars">
              <span class="avatar">
                <img src="~/assets/img/av3.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av6.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av11.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av9.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av10.png" alt="avatar">
              </span>
              <span class="avatar avatar__no">+1</span>
            </td>
            <td class="__about">
              <p>Web app integrations</p>
              <span>Connect web apps seamlessly</span>
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
          <tr>
            <td class="company__identity">
              <div class="check__box">
                <input type="checkbox" id="six" checked />
                <label for="six"></label>
              </div>
              <img src="~/assets/img/quotient.png" alt="company">
              <div class="__company">
                <p>Quotient</p>
                <span>quotient.co</span>
              </div>
            </td>
            <td class="catalog__progress">
              <progress max="100" value="10">
                <div class="progress-bar">
                  <span style="width: 10%">10%</span>
                </div>
              </progress>
            </td>
            <td>
              <span class="__customer">
                Customer
              </span>
            </td>
            <td class="avatars">
              <span class="avatar">
                <img src="~/assets/img/av5.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av3.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av11.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av6.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av12.png" alt="avatar">
              </span>
              <span class="avatar avatar__no">+6</span>
            </td>
            <td class="__about">
              <p>Sales CRM</p>
              <span>Web-based sales doc management</span>
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
          <tr>
            <td class="company__identity">
              <div class="check__box">
                <input type="checkbox" id="seven" checked />
                <label for="seven"></label>
              </div>
              <img src="~/assets/img/sisyphus.png" alt="company">
              <div class="__company">
                <p>Sisyphus</p>
                <span>sisyphus.com</span>
              </div>
            </td>
            <td class="catalog__progress">
              <progress max="100" value="50">
                <div class="progress-bar">
                  <span style="width: 50%">50%</span>
                </div>
              </progress>
            </td>
            <td>
              <span class="__customer">
                Customer
              </span>
            </td>
            <td class="avatars">
              <span class="avatar">
                <img src="~/assets/img/av7.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av12.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av8.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av11.png" alt="avatar">
              </span>
              <span class="avatar">
                <img src="~/assets/img/av4.png" alt="avatar">
              </span>
              <span class="avatar avatar__no">+4</span>
            </td>
            <td class="__about">
              <p>Automation and workflow</p>
              <span>Time tracking, invoicing and expenses</span>
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
          </tr> -->
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
  computed: {
    companies () {
      console.log(this.$store.state.companies)
      return this.$store.state.companies
    }
  }
}
</script>

<style>

</style>