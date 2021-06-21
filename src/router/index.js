import Vue from "vue"
import Router from "vue-router"

// Routes
import paths from "./paths"

function route(path, view, name, ps) {
  return {
    name: name || view,
    path,
    component: (resovle) => import(`@/views/${view}.vue`).then(resovle),
    props: ps
  }
}

Vue.use(Router)

// Create a new router
export default new Router({
  mode: "history",
  routes: paths.map((path) => route(path.path, path.view, path.name, path.props))
})