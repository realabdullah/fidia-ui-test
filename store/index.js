const state = () => ({
  companies: [
    {
      'id': 1,
      'checked': true,
      'logo': require('~/assets/img/catalog.png'),
      'name': 'Catalog',
      'site': 'catalogapp.io',
      'progress': 80,
      'status': 'Customer',
      'avatars': [
        require('~/assets/img/av1.png'),
        require('~/assets/img/av2.png'),
        require('~/assets/img/av3.png'),
        require('~/assets/img/av4.png'),
        require('~/assets/img/av5.png')
      ],
      'other': 5,
      'about': 'Content curating app',
      'about_info': 'Brings all your needs into one place.'
    },
    {
      'id': 2,
      'checked': true,
      'logo': require('~/assets/img/circloos.png'),
      'name': 'Circooles',
      'site': 'getcirooles.co',
      'progress': 70,
      'status': 'Churned',
      'avatars': [
        require('../assets/img/av6.png'),
        require('../assets/img/av7.png'),
        require('../assets/img/av8.png'),
        require('../assets/img/av9.png'),
        require('../assets/img/av10.png')
      ],
      'other': 8,
      'about': 'Design software',
      'about_info': 'Super lightweight design app.'
    },
    {
      'id': 3,
      'checked': true,
      'logo': require('~/assets/img/commandr.png'),
      'name': 'Command+R',
      'site': 'cmdr.ai',
      'progress': 50,
      'status': 'Customer',
      'avatars': [
        require('~/assets/img/av10.png'),
        require('~/assets/img/av11.png'),
        require('~/assets/img/av12.png'),
        require('~/assets/img/av9.png'),
        require('~/assets/img/av13.png')
      ],
      'other': 2,
      'about': 'Data prediction',
      'about_info': 'AI and machine learning data'
    },
    {
      'id': 4,
      'checked': false,
      'logo': require('~/assets/img/hourglass.png'),
      'name': 'Hourglass',
      'site': 'hourglass.app',
      'progress': 90,
      'status': 'Customer',
      'avatars': [
        require('~/assets/img/av5.png'),
        require('~/assets/img/av2.png'),
        require('~/assets/img/av6.png'),
        require('~/assets/img/av7.png'),
        require('~/assets/img/av11.png')
      ],
      'about': 'Productivity app',
      'about_info': 'Time management and productivity'
    },
    {
      'id': 5,
      'checked': false,
      'logo': require('~/assets/img/layers.png'),
      'name': 'Layers',
      'site': 'getlayers.io',
      'progress': 30,
      'status': 'Churned',
      'avatars': [
        require('~/assets/img/av3.png'),
        require('~/assets/img/av6.png'),
        require('~/assets/img/av11.png'),
        require('~/assets/img/av9.png'),
        require('~/assets/img/av10.png')
      ],
      'other': '+1',
      'about': 'Web app integrations',
      'about_info': 'Connect web apps seamlessly'
    },
    {
      'id': 6,
      'checked': true,
      'logo': require('~/assets/img/quotient.png'),
      'name': 'Quotient',
      'site': 'quotient.io',
      'progress': 10,
      'status': 'Customer',
      'avatars': [
        require('~/assets/img/av5.png'),
        require('~/assets/img/av3.png'),
        require('~/assets/img/av11.png'),
        require('~/assets/img/av6.png'),
        require('~/assets/img/av12.png')
      ],
      'other': '+6',
      'about': 'Sales CRM',
      'about_info': 'Web-based sales doc management'
    },
    {
      'id': 7,
      'checked': true,
      'logo': require('~/assets/img/sisyphus.png'),
      'name': 'Sisyphus',
      'site': 'sisyphus.com',
      'progress': 50,
      'status': 'Customer',
      'avatars': [
        require('~/assets/img/av7.png'),
        require('~/assets/img/av12.png'),
        require('~/assets/img/av8.png'),
        require('~/assets/img/av11.png'),
        require('~/assets/img/av4.png')
      ],
      'other': '+4',
      'about': 'Automation and workflow',
      'about_info': 'Time tracking, invoicing and expenses'
    }
  ],
  filteredList: []
})

const actions = {
  QUERY_TABLE({commit, state}, searchQuery) {
    const searchResult = state.companies.filter((company) => {
      return company.name.toLowerCase().match(searchQuery.toLowerCase())
    })
    commit('SEARCH_RESULTS', searchResult)
  }
}

const mutations = {
  SEARCH_RESULTS(state, payload) {
    state.filteredList = payload
  }
}

export default {
  state,
  mutations,
  actions
}