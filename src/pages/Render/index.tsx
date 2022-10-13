import { useParams, useSearchParams } from "react-router-dom"
import React from "react"

export default () => {
  const params = useParams()
  const [searchParams] = useSearchParams()
  return (
    <div>
      <h1>Hello, world!!! </h1>
      <p>路由参数：{JSON.stringify(params)}</p>
      <p>查询参数：{searchParams.toString()}</p>
    </div>
  )
}
