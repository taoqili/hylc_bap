import React from 'react'
import EChartsReact, { EChartsReactProps } from "echarts-for-react";

export default (props: EChartsReactProps) => {
  const renderProps = {
    ...props
  }
  return <EChartsReact {...renderProps} />
}
