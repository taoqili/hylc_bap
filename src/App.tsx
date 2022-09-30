import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import Layout from '@/layouts'
import NotFound from "@/pages/NotFound"
import Home from '@/pages/Home'
import Renderer from '@/pages/Render'
import { routes } from '@/config'
import { rootPath } from "@/config"

export default (props: Record<any, any>) => {
  const location = useLocation()

  // 子应用路由内跳转更改浏览器地址url
  useEffect(() => {
    const {pathname, search} = location
    const fullPath = `${pathname}${search}`
    props.setGlobalState && props.setGlobalState({
      ROUTE_CHANGE: fullPath,
    })
  }, [location.pathname, location.search])

  return (
    <div className={'lc-bap-view-wrapper'}>
      <Routes>
        <Route path={rootPath} element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path={':module/:page'} element={<Renderer  {...props}/>}/>
          {
            routes.map((item) => {
              return <Route {...item} />
            })
          }
          <Route path={'*'} element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
}
