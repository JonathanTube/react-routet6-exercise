import { HashRouter, Link, Route, Routes, Navigate } from "react-router-dom"
import styled from "styled-components"
import From from "./from"
import To from "./to"
const NavBox = styled.nav`
  a {
    margin: 20px 10px;
  }
`

export default function Main() {
  return (
    <HashRouter>
      <NavBox>
        <Link to="/from">from component</Link>
        <Link to="/to">to component</Link>
        <Link to="/test">test</Link>
      </NavBox>
      <div>
        {/* 相对于v5版本：Switch => Routes */}
        <Routes>
          {/* 相对于v5版本：Redirect => Navigator */}
          {/* 遇到Navigate就会跳转 */}
          {/* 匹配路径如果是/root,调到/from */}
          <Route path="/" element={<Navigate to="/from" />} />
          {/* 相对于v5版本：component => element ，也不需要exact精确匹配 */}
          <Route path="/from" element={<From />} />
          <Route path="/to" element={<To />} />
          {/* 可以给<Navigate />传递参数 */}
          <Route
            path="/test"
            element={
              <Navigate
                to={{
                  pathname: "/to",
                  search: "param=x"
                }}
              />
            }
          />
          {/* 匹配其他路径，跳转到to，replace是替换当前路由地址 */}
          {/* 必须写在最后一个 */}
          <Route path="*" element={<Navigate to="/to" replace />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
