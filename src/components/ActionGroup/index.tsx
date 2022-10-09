import React from "react";
import { Radio } from "antd";
import './index.less'

export interface ActionProps {
  label: string;
  value: string;
}

export interface ActionGroupProps {
  defaultAction?: string;
  actions?: ActionProps[];
  onChange?: (e?:any) => void
}

export default (props: ActionGroupProps) => {
  const {defaultAction, actions = [], onChange = () => {}} = props
  return (
    <div className={'lc-bap-action-group'}>
      <Radio.Group size='small' defaultValue={defaultAction} onChange={onChange}>
        {
          actions.map(action => {
            const {value, label} = action
            return <Radio.Button value={value}>{label}</Radio.Button>
          })
        }
      </Radio.Group>
    </div>
  )
}
