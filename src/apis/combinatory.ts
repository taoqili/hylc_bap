import { request } from "@/utils";

export const getOverviewInfo = (params?: Record<string, any>) => {
  return request.get(
    '/combMngAnaly/selectOverView',
    {params}
  )
}

export const getCashflowInfo = (params?: Record<string, any>) => {
  return request.get(
    '/combMngAnaly/selectCashFlowAnaly',
    {params}
  )
}

export const getPositioningInfo = (params?: Record<string, any>) => {
  return request.get(
    '/combMngAnaly/selectPositionAnaly',
    {params}
  )
}
