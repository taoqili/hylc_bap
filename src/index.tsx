import './public-path';
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom"
import { isQiankun } from "@/config"
import App from './App'
import './global.less'

const render = (props: Record<any, any> = {}) => {
  const {container} = props
  const target = container? container.querySelector('#app') : document.querySelector('#app')
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>,
    target
  )
}

if (!isQiankun) {
  render()
}


export async function bootstrap() {
  console.log('bootstrap');
}

let initProps: Record<any, any> = {}

export async function mount(props: Record<any, any>) {
  initProps = props
  render(props)
}

export async function unmount() {
}

export async function update(props: Record<any, any>) {
  render({
    ...initProps,
    pageConfig: {
      route: props.fullPath,
    },
  })
}

