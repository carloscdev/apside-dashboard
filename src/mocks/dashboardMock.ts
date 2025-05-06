export const getDashboardData = () => Promise.resolve({
  totalInteracciones: 100,
  totalInvertido: 120.50,
  interaccionesPorCanal: [
    { canal: 'WhatsApp', cantidad: 20 },
    { canal: 'Teléfono', cantidad: 30 },
    { canal: 'Email', cantidad: 50 }
  ],
  interaccionesPorTipo: [
    { tipo: 'Cobranza', cantidad: 20 },
    { tipo: 'Notificación', cantidad: 40 },
    { tipo: 'Soporte', cantidad: 12 }
  ]
})