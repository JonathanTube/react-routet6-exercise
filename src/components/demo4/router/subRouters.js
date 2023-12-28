import { lazy } from "react"
const subRouters = [
  {
    name: "to_0",
    path: "/to/to_0",
    // 自定义打包名称
    // component: lazy(() =>import(/* webpackChunkName:"Jonathan-A" */ "../to0"))
    component: lazy(() => import("../to0"))
  },
  {
    name: "to_1",
    path: "/to/to_1",
    component: lazy(() => import("../to1"))
  }
]

export default subRouters
