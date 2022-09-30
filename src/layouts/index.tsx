import React, { useCallback, useState } from 'react'
import { Outlet, useNavigate } from "react-router-dom"
import { isQiankun, menus } from "@/config"
import { Layout, Menu } from "antd"
import './index.less'

const {Sider, Content} = Layout

export default () => {
  const defaultMenu = menus[0].key
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)

  const handleMenuChange = useCallback((menu: any) => {
    const {item} = menu
    navigate(item?.props?.path)
  }, [])

  return (
    <div className={'lc-bap-layout-wrapper'}>
      {
        !isQiankun
          ? <Layout className={'lc-bap-layout'}>
            <Sider theme={'light'} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
              <div className="logo">
                经营分析平台
              </div>
              <Menu
                defaultSelectedKeys={[defaultMenu]}
                mode="inline"
                theme={'light'}
                items={menus}
                onSelect={(item) => handleMenuChange(item)}
              />
            </Sider>
            <Layout>
              <Content>
                <div className={'lc-bap-content'}>
                  <Outlet/>
                </div>
              </Content>
            </Layout>
          </Layout>
          : <Outlet/>
      }
    </div>
  )
}
