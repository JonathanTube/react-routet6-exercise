import { lazy } from "react"
import { Navigate } from "react-router-dom"
import From from "../from"
import subRouters from "./subRouters"

const config = [
  {
    name: "index",
    path: "/",
    // Navigate会直接被执行，所以要返回一个函数
    component: () => {
      return <Navigate to="/from" />
    }
  },
  {
    name: "from",
    path: "/from",
    component: From
  },
  {
    name: "to",
    path: "/to",
    // 延迟加载
    component: lazy(() => import("../to")),
    // 导入子路由
    children: subRouters
  },
  {
    name: "complex",
    path: "/to/:param0/:param1?",
    component: lazy(() => import("../to"))
  }
]

export default config
