import Vue from 'vue';
import Vuetify from 'vuetify/lib';
//import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: "#3f51b5",
            secondary: "#03a9f4",
            accent: "#f44336",
            error: "#e91e63",
            warning: "#9c27b0",
            info: "#00bcd4",
            success: "#2196f3"
          },
          dark: {
            primary: "#3f51b5",
            secondary: "#03a9f4",
            accent: "#f44336",
            error: "#e91e63",
            warning: "#9c27b0",
            info: "#00bcd4",
            success: "#2196f3"
          },
        },
      },
    });
