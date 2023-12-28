import { Suspense } from "react"
import {
  Routes,
  Route,
  useLocation,
  useSearchParams,
  useParams,
  useNavigate
} from "react-router-dom"
import routers from "./routers"
export default function AutoRoutes() {
  /**
   * 统一渲染的组件:在这里可以做一些事情下例如: 权限/登录态校验，传递路由信息的属性...J
   */
  const Element = (props) => {
    // 解构出需要渲染的组件
    let { component: Component } = props
    // 注入路由钩子函数
    const location = useLocation(),
      navigate = useNavigate(),
      [usp] = useSearchParams(),
      params = useParams()
    return (
      <Component
        navigate={navigate}
        usp={usp}
        params={params}
        location={location}
      />
    )
  }

  /**
   * 递归构建路由表
   *
   * @param {*} routers
   * @returns
   */
  const buildRoutes = (routers) => {
    return routers.map((item, key) => {
      let { path, children = [] } = item
      return (
        // 将router map中的参数全部传入Element中
        <Route key={key} path={path} element={<Element {...item} />}>
          {buildRoutes(children)}
        </Route>
      )
    })
  }
  return (
    <Suspense>
      <Routes>{buildRoutes(routers)}</Routes>
    </Suspense>
  )
}

/**
 * 在react-router-dom v6版本中，路由全部只支持hooks方式获取，导致classComponent无法获取相关路由对象
 * 在V5中可以使用withRouter，但在V6中没有，所以自定义一个高阶函数
 */
export const withRouter = (Component) => {
  return function HOC(props) {
    // 注入路由钩子函数
    const location = useLocation(),
      navigate = useNavigate(),
      [usp] = useSearchParams(),
      params = useParams()
    return (
      <Component
        {...props}
        navigate={navigate}
        usp={usp}
        params={params}
        location={location}
      />
    )
  }
}
