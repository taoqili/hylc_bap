import React, { useCallback, useState } from 'react'
import { Outlet, useNavigate, useLocation, useSearchParams } from "react-router-dom"
import { isQiankun, menus, rootPath } from "@/config"
import type { MenuProps } from '@/config'
import { Layout, Menu } from "antd"
import Filter from './Filter'
import './index.less'
import { getLastDate, params2Str } from "@/utils";
import type { SearchParamsProps } from "@/types";

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
  const lastDate = getLastDate()
  const [params] = useSearchParams()
  const [collapsed, setCollapsed] = useState(false)
  const [searchParams, setSearchParams] = useState<SearchParamsProps>({
    products: params.get('products') || '',
    startDate: params.get('startDate') || lastDate,
    endDate: params.get('endDate') || lastDate
  })

  const handleMenuChange = useCallback((menu: any) => {
    const {item} = menu
    navigate(item?.props?.path + '?' +  params2Str(searchParams), {replace: false})
  }, [searchParams])

  const onFilterChange = useCallback((value = {}) => {
    setSearchParams(value)
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
        <Sider style={{margin: '16px 0 16px 16px', borderRadius: 8, height: '100%', paddingBottom: 200}} theme={'light'} collapsible={false} collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
          {/*<div className="logo">*/}
          {/*  经营分析平台*/}
          {/*</div>*/}
          <div className={'lc-bap-filter'}>
            <Filter params={searchParams} onChange={onFilterChange} />
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
