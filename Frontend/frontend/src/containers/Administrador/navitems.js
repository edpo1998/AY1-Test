
// Menus del modulo del administrador
export const menus = [
    "Usuarios", 
    "Renta de autos", 
    "Hoteles", 
    "Vuelos", 
 ]
 
// Rutas del menu del modulo de administracion 
export const sidebarItems = [
    {
      title: '👤 Usuarios',
      itemId: '/admin/usuarios',
      subNav: [
        {
          title: 'Agregar',
          itemId: '/admin/usuarios/add',
        },
        {
          title: 'Listar',
          itemId: '/admin/usuarios/list',
        },
      ],
    },
    {
      title: '🛫 Aerolinea',
      itemId: '/admin/vuelo',
      subNav: [
        {
          title: 'Crear ',
          itemId: '/admin/vuelo/add',
        },
        {
          title: 'Listar',
          itemId: '/admin/vuelo/list',
        }
      ],
    },
    {
      title: '🏬 Hotel',
      itemId: '/admin/hotel',
      subNav: [
        {
          title: 'Crear ',
          itemId: '/admin/hotel/add',
        },
        {
          title: 'Listar',
          itemId: '/admin/hotel/list',
        }
      ],
    },
    {
      title: '🚗 Renta de Autos',
      itemId: '/admin/vehiculos',
      subNav: [
        {
          title: 'Crear ',
          itemId: '/admin/vehiculos/add',
        },
        {
          title: 'Listar',
          itemId: '/admin/vehiculos/list',
        }
      ],
    },
    {
      title: '🗾 Pais',
      itemId: '/admin/pais',
      subNav: [
        {
          title: 'Crear ',
          itemId: '/admin/pais/add',
        },
        {
          title: 'Listar',
          itemId: '/admin/pais/list',
        }
      ],
    },
    {
      title: '🌆 Ciudad',
      itemId: '/admin/ciudad',
      subNav: [
        {
          title: 'Crear ',
          itemId: '/admin/ciudad/add',
        },
        {
          title: 'Listar',
          itemId: '/admin/ciudad/list',
        }
      ],
    },

  ]
