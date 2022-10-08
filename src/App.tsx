import React, { useEffect } from 'react'
import { Route, Routes, useLocation, Navigate } from "react-router-dom"
import Layout from '@/layouts'
import NotFound from "@/pages/NotFound"
import Home from '@/pages/Home'
import { routes, rootPath } from '@/config'

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
        <Route path={'/'} element={<Navigate to={rootPath} replace />} />
        <Route path={rootPath} element={<Layout/>}>
          <Route index element={<Home/>}/>
          {
            routes.map((item) => {
              const { path, element, ...rest } = item || {}
              if (!path || !element) {
                return (
                  <Route {...rest} />
                )
              }
              return (
                <Route
                  {...rest}
                  path={path.replace(/^\//, '')}
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
