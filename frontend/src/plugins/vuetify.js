import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import ko from 'vuetify/es5/locale/ko';
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
        grey : "#EEEEEE",
        post_back : "#BDBDBD",
        politic : "#E1F5FE",
        economy : "#DCEDC8",
        society : "#FFF9C4",
        global : "#E1BEE7",
        tec : "#C5CAE9",
      },
    },
  },
    lang: {
      locales: { ko },
      current: 'ko',
    },
  icons: {
    iconfont: 'mdi',
  },
});
