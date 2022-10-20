import React, { useEffect, useRef } from 'react'
import EChartsReact, { EChartsReactProps } from "echarts-for-react";

export default (props: EChartsReactProps) => {
  const renderProps = {
    ...props
  }
  const echarts: any = useRef(null)
  useEffect(() => {
    echarts.current && echarts.current.resize()
  }, [])
  return <EChartsReact ref={echarts} {...renderProps} />
}
