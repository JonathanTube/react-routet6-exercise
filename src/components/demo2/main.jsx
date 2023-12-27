import { HashRouter, Link, Route, Routes, Navigate } from "react-router-dom"
import styled from "styled-components"
import A from "./a"
import B from "./b"
const NavBox = styled.nav`
  a {
    margin: 20px 10px;
  }
`

export default function Main() {
  return (
    <HashRouter>
      <NavBox>
        <Link to="/a">A Component</Link>
        <Link to="/b">B Component</Link>
      </NavBox>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/a/b" />} />
          <Route path="/a" element={<A />}>
            {/* 嵌套子路由 */}
            <Route path="/a" element={<Navigate to="/a/b" />} />
            {/* index是默认加载的，好像没用 */}
            <Route index path="/a/b" element={<B />} />
          </Route>
          <Route path="/b" element={<B />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
