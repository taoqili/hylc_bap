import React from "react";
import { Radio } from "antd";
import './index.less'

export interface ButtonProps {
  label: string;
  value: string;
}

export interface ButtonGroupProps {
  defaultActivated?: string;
  items?: ButtonProps[];
  onChange?: (e?:any) => void
}

export default (props: ButtonGroupProps) => {
  const {defaultActivated, items = [], onChange = () => {}} = props
  return (
    <div className={'lc-bap-action-group'}>
      <Radio.Group size='small' defaultValue={defaultActivated} onChange={onChange}>
        {
          items.map(item => {
            const {value, label} = item
            return <Radio.Button value={value}>{label}</Radio.Button>
          })
        }
      </Radio.Group>
    </div>
  )
}
