import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: "#6A1B9A",
            secondary: "#CE93D8",
            light: "#F3E5F5",
          },
        },
      },
});
