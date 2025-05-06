export const getInteraccionesList = () => Promise.resolve([
  {
    canal: 'WhatsApp',
    tipo: 'Cobranza',
    fecha: '01/05/2025',
    hora: '09:30',
    estado: 'Finalizado',
    costo: {
      canal: 0.40,
      ia: 0.30,
      total: 0.70
    },
    contenido: 'Mensaje enviado por WhatsApp sobre deuda pendiente'
  },
  {
    canal: 'Teléfono',
    tipo: 'Soporte',
    fecha: '02/05/2025',
    hora: '10:00',
    estado: 'En Proceso',
    costo: {
      canal: 0.50,
      ia: 0.40,
      total: 0.90
    },
    contenido: 'Llamada para asistencia técnica'
  },
  {
    canal: 'Email',
    tipo: 'Notificación',
    fecha: '03/05/2025',
    hora: '11:00',
    estado: 'Finalizado',
    costo: {
      canal: 0.30,
      ia: 0.20,
      total: 0.50
    },
    contenido: 'Notificación enviada por correo electrónico'
  },
  {
    canal: 'WhatsApp',
    tipo: 'Cobranza',
    fecha: '04/05/2025',
    hora: '14:00',
    estado: 'En Proceso',
    costo: {
      canal: 0.60,
      ia: 0.50,
      total: 1.10
    },
    contenido: 'Recordatorio de pago por WhatsApp'
  },
  {
    canal: 'WhatsApp',
    tipo: 'Cobranza',
    fecha: '13/05/2025',
    hora: '14:00',
    estado: 'Rechazado',
    costo: {
      canal: 0.60,
      ia: 0.50,
      total: 1.10
    },
    contenido: 'El cliente rechazó el mensaje de cobranza por WhatsApp'
  },
  {
    canal: 'Teléfono',
    tipo: 'Soporte',
    fecha: '14/05/2025',
    hora: '15:00',
    estado: 'Finalizado',
    costo: {
      canal: 0.50,
      ia: 0.40,
      total: 0.90
    },
    contenido: 'Llamada para soporte técnico finalizada'
  },
  {
    canal: 'Email',
    tipo: 'Cobranza',
    fecha: '15/05/2025',
    hora: '16:00',
    estado: 'Cancelado',
    costo: {
      canal: 0.70,
      ia: 0.60,
      total: 1.30
    },
    contenido: 'Fue cancelada la cobranza por email'
  }
])
