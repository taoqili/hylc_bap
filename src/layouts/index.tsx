import React, { useCallback, useState } from 'react'
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import { isQiankun, menus, rootPath } from "@/config"
import type { MenuProps } from '@/config'
import { Layout, Menu } from "antd"
import './index.less'

const {Sider, Content} = Layout

const realMenus = menus.map((item:MenuProps) => {
  item.path = `${rootPath}${item.path}`.replace('//', '/')
  return item
})

const getMenuKey = (menus: MenuProps[], path: string) => {
  const ret = menus.filter(item => item.path === path)
  return ret && ret.length ? ret[0].key : menus[0].key
}

export default () => {
  const {pathname} = useLocation()
  const defaultMenu = getMenuKey(menus, pathname)
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)

  const handleMenuChange = useCallback((menu: any) => {
    const {item} = menu
    navigate(item?.props?.path)
  }, [])

  if (isQiankun) {
    return (
      <div className={'lc-bap-main'}>
        <Outlet/>
      </div>
    )
  }

  return (
    <div className={'lc-bap-layout-wrapper'}>
      <Layout className={'lc-bap-layout'}>
        <Sider theme={'light'} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
          <div className="logo">
            经营分析平台
          </div>
          <Menu
            defaultSelectedKeys={[defaultMenu]}
            mode="inline"
            theme={'light'}
            items={realMenus}
            onSelect={(item) => handleMenuChange(item)}
          />
        </Sider>
        <Layout>
          <Content>
            <div className={'lc-bap-single-main'}>
              <Outlet/>
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}
