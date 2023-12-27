import { Outlet, Link } from "react-router-dom"
export default function A() {
  return (
    <>
      <h1>A Component</h1>
      <Link to="/a/b">b Component</Link>
      {/* 这里嵌入子路由组件 */}
      <Outlet />
    </>
  )
}
