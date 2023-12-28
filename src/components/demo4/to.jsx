import { Link, Outlet } from "react-router-dom"
// 这里直接可以从注入的属性中获取路由相关hooks
export default function To({ location, usp, params }) {
  let param0, param1
  // 2.获取url参数-通过useSearchParams
  if (usp) {
    param0 = usp.get("param0")
    param1 = usp.get("param1")
  }

  // 3.获取路由地址参数
  if (params) {
    param0 = params.param0
    param1 = params.param1
  }

  // 4.获取hide方式参数
  const { state } = location
  if (state) {
    param0 = state.param0
    param1 = state.param1
  }
  return (
    <>
      <h1>From Component</h1>
      <div>param0={param0}</div>
      <div>param1={param1}</div>

      <br />

      <div>
        <Link to="/to/to_0">to 0</Link>
        &nbsp;
        <Link to="/to/to_1">to 1</Link>
        <Outlet />
      </div>
    </>
  )
}
