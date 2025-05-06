import type { DashboardResponse, InteraccionResponse } from "../interfaces/dashboardInterface"
import { getDashboardData } from "../mocks/dashboardMock"
import { getInteraccionesList } from "../mocks/interaccionesMock"

export const fetchDashboard = async (): Promise<DashboardResponse> => {
  const response = await getDashboardData()
  return response
}

export const fetchInteracciones = async (): Promise<InteraccionResponse[]> => {
  const response = await getInteraccionesList()
  return response
}