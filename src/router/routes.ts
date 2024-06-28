import { RouteRecordRaw } from "vue-router"
import IndexPage from "pages/IndexPage.vue"
import MainLayout from "layouts/MainLayout.vue"
import Card from "pages/CardPage.vue"
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: MainLayout,
    children: [{ path: "", component: IndexPage }],
  },
  {
    path: "/card",
    component: MainLayout,
    children: [{ path: "/card", component: Card }],
  },
]

export default routes
