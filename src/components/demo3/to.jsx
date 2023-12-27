import { useLocation, useSearchParams, useParams } from "react-router-dom"
export default function B() {
  // 1.获取url参数
  const location = useLocation()
  const usp0 = new URLSearchParams(location.search)
  let param0 = usp0.get("param0")
  let param1 = usp0.get("param1")

  // 2.获取url参数-通过useSearchParams
  const [usp] = useSearchParams()
  param0 = usp.get("param0")
  param1 = usp.get("param1")

  // 3.获取路由地址参数
  const params = useParams()
  param0 = params.param0
  param1 = params.param1

  // 4.获取hide方式参数
  const { state } = location
  param0 = state.param0
  param1 = state.param1
  return (
    <>
      <h1>From Component</h1>
      <div>param0={param0}</div>
      <div>param1={param1}</div>
    </>
  )
}
