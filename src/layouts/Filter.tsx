import React, { useCallback, useState } from 'react'
import { DatePicker, Select, Button } from 'antd'
import type { SearchParamsProps } from "@/types";
import moment from 'moment'
import { getLastDate, params2Str } from "@/utils";
import { useLocation, useNavigate } from "react-router-dom";

const {Option} = Select

interface ProductProps {
  prod_nm: string;
  prod_cd: string;
  status?: string
}

const mockProductList = [
  {
    prod_nm: '产品1',
    prod_cd: '1',
    status: 'E'
  },
  {
    prod_nm: '产品2',
    prod_cd: '2',
    status: 'E'
  },
  {
    prod_nm: '产品3',
    prod_cd: '3',
    status: 'E'
  },
  {
    prod_nm: '产品4',
    prod_cd: '4',
    status: 'E'
  },{
    prod_nm: '产品5',
    prod_cd: '5',
    status: 'E'
  },
  {
    prod_nm: '产品6',
    prod_cd: '6',
    status: 'E'
  }
]

interface FilterProps {
  params?: SearchParamsProps;
  onChange?: (value: Record<string, any>) => void
}

export default (props: FilterProps) => {
  const lastDate = getLastDate()
  const location = useLocation()
  const navigate = useNavigate()

  const { params = {}, onChange = () => {} } = props
  const { startDate, endDate, products = '' } = params
  const [selectKey, setSelectKey] = useState('select_0000')
  const [tmpSearchParams, setTmpSearchParams] = useState<SearchParamsProps>(params)
  const [confirmSearchParams, setConfirmSearchParams] = useState<SearchParamsProps>({})
  const [productList, setProductList] = useState<ProductProps[]>(mockProductList)
  const [defaultProducts, setDefaultProducts] = useState(products ? products.split(',') : [])
  const [defaultDate, setDefaultDate] = useState([startDate, endDate])

  // 变更产品
  const handleChangeProduct = useCallback((value = []) => {
    setTmpSearchParams({
      ...tmpSearchParams,
      products: value.join(',')
    })
  }, [tmpSearchParams])

  // 变更开始日
  const handleChangeStartDate = useCallback((value) => {
    setTmpSearchParams({
      ...tmpSearchParams,
      startDate: value.format('YYYY-MM-DD')
    })
    setDefaultDate([value, defaultDate[1]])
  }, [tmpSearchParams, defaultDate])

  // 变更结束日
  const handleChangeEndDate = useCallback((value) => {
    setTmpSearchParams({
      ...tmpSearchParams,
      endDate: value.format('YYYY-MM-DD')
    })
    setDefaultDate([defaultDate[0], value])
  }, [tmpSearchParams, defaultDate])

  // 确认变更
  const handleConfirmParams = useCallback(() => {
    setConfirmSearchParams(tmpSearchParams)
    onChange(tmpSearchParams)
    navigate(location.pathname + '?' + params2Str(tmpSearchParams), { replace:true })
  }, [tmpSearchParams])

  // 重置
  const handleResetConfirmParams = useCallback(() => {
    const reset = {
      products: '',
      startDate: lastDate,
      endDate: lastDate
    }
    setConfirmSearchParams(reset)
    setTmpSearchParams(reset)
    // 产品清除
    setSelectKey('select_' + setTimeout(() => 0))
    setDefaultDate([lastDate, lastDate])
    onChange(reset)
    navigate(location.pathname + '?' + params2Str(reset), {replace: true})
  }, [selectKey])

  return (
    <div className={'filter-wrapper'}>
      <div className={'filter-item'}>
        <Select
          // key={Math.random()}
          key={selectKey}
          placeholder="选择产品"
          mode={ 'multiple'}
          maxTagCount={'responsive'}
          optionFilterProp="children"
          clearIcon={false}
          defaultValue={defaultProducts}
          onChange={handleChangeProduct}
        >
          {
            productList.map((item) => {
              return (
                <Option value={item['prod_cd']}>{item.prod_nm}</Option>
              )
            })
          }
        </Select>
      </div>
      <div className={'filter-item'}>
        <div className={'label'}>开始日：</div>
        <DatePicker
          placeholder={'开始日'}
          value={moment(defaultDate[0])}
          clearIcon={false}
          onChange={handleChangeStartDate}
        />
      </div>
      <div className={'filter-item'}>
        <div className={'label'}>结束日：</div>
        <DatePicker
          placeholder={'结束日'}
          clearIcon={false}
          value={moment(defaultDate[1])}
          onChange={handleChangeEndDate}
        />
      </div>
      <div className={'filter-confirm'}>
        <Button size={'small'} type={"primary"} onClick={handleConfirmParams}>确认</Button>
        <Button size={"small"} onClick={handleResetConfirmParams} >重置</Button>
      </div>
    </div>
  )
}
