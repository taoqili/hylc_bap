import React, { useCallback, useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { isQiankun, menus, rootPath } from "@/config"
import { Layout, Menu } from "antd"
import './index.less'

const {Sider, Content} = Layout

const realMenus = menus.map(item => {
  item.path = `${rootPath}${item.path}`.replace('//', '/')
  return item
})

export default () => {
  const defaultMenu = menus[0].key
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
