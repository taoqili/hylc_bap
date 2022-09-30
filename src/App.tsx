import React, { useEffect } from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import Layout from '@/layouts'
import NotFound from "@/pages/NotFound"
import Home from '@/pages/Home'
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
          {
            routes.map((item) => {
              const { element, ...rest } = item || {}
              return (
                <Route
                  {...rest}
                  element={
                    <React.Suspense fallback={<>loading...</>}>
                      {element}
                    </React.Suspense>}
                />
              )
            })
          }
          <Route path={'*'} element={<NotFound/>}/>
        </Route>
      </Routes>
    </div>
  )
}
