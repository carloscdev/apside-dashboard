export interface InteraccionPorCanal {
  canal: string
  cantidad: number
}

export interface InteraccionPorTipo {
  tipo: string
  cantidad: number
}

export interface DashboardResponse {
  totalInteracciones: number
  totalInvertido: number
  interaccionesPorCanal: InteraccionPorCanal[]
  interaccionesPorTipo: InteraccionPorTipo[]
}

export interface DesgloseCosto {
  canal: number
  ia: number
  total: number
}

export interface InteraccionResponse {
  canal: string
  tipo: string
  fecha: string
  hora: string
  estado: string
  costo: DesgloseCosto
  contenido: string
}


export type StatusType = 'Enviado' | 'Finalizado' | 'En Proceso' | 'Cancelado' | 'Pendiente' | 'Rechazado' | 'Aprobado' | 'En Espera'