import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faXmark,
  faFile,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBars, faXmark, faFile, faBlog, faGithub);
const app = createApp(App);
app.use(router);
app.component("fa", FontAwesomeIcon);
app.mount("#app");
