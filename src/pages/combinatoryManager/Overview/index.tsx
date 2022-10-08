import React, { useState, useEffect } from 'react'

interface CombinatoryOverviewProps {
  type?: 'multiple' | 'single'
}

export default (props: CombinatoryOverviewProps) => {
  const { type = 'multiple' } = props
  return (
    <div className={'overview-wrapper'}>
      {type === 'multiple' ? '多产品总览': '单产品总览'}
    </div>
  )
}
