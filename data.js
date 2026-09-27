// Generado automáticamente. Categorías y catálogo de productos de HugoShop.
const CATEGORIES = [
  {
    "key": "tecnologia",
    "name": "Tecnología",
    "icon": "💻"
  },
  {
    "key": "ropa",
    "name": "Ropa",
    "icon": "👕"
  },
  {
    "key": "hogar",
    "name": "Hogar",
    "icon": "🏠"
  },
  {
    "key": "deportes",
    "name": "Deportes",
    "icon": "⚽"
  },
  {
    "key": "belleza",
    "name": "Belleza",
    "icon": "💄"
  },
  {
    "key": "juguetes",
    "name": "Juguetes",
    "icon": "🧸"
  },
  {
    "key": "libros",
    "name": "Libros",
    "icon": "📚"
  },
  {
    "key": "mascotas",
    "name": "Mascotas",
    "icon": "🐾"
  },
  {
    "key": "automotriz",
    "name": "Automotriz",
    "icon": "🚗"
  },
  {
    "key": "herramientas",
    "name": "Herramientas",
    "icon": "🔧"
  }
];

const PRODUCTS = [
  {
    "id": 1,
    "name": "Laptop Pro X15",
    "category": "tecnologia",
    "price": 14999,
    "description": "Potencia y portabilidad en un solo equipo: procesador de última generación, pantalla de 15.6\" Full HD y batería para todo el día de trabajo o estudio.",
    "rating": 4.6,
    "reviews": 24,
    "badge": null,
    "variants": [
      {
        "label": "Negro Grafito",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Laptop%20Pro%20X15",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Laptop%20Pro%20X15%20-%20Detalle"
        ]
      },
      {
        "label": "Plata Estelar",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Laptop%20Pro%20X15%20%28Plata%20Estelar%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Laptop%20Pro%20X15%20-%20Detalle%20%28Plata%20Estelar%29"
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Smartphone Nova 12",
    "category": "tecnologia",
    "price": 8999,
    "description": "Cámara triple de alta resolución, pantalla AMOLED vibrante y carga rápida para que nunca te quedes sin batería en pleno día.",
    "rating": 4.2,
    "reviews": 126,
    "badge": "Nuevo",
    "variants": [
      {
        "label": "Negro Medianoche",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Smartphone%20Nova%2012",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Smartphone%20Nova%2012%20-%20Detalle"
        ]
      },
      {
        "label": "Azul Aurora",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Smartphone%20Nova%2012%20%28Azul%20Aurora%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Smartphone%20Nova%2012%20-%20Detalle%20%28Azul%20Aurora%29"
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "Auriculares BassMax",
    "category": "tecnologia",
    "price": 1299,
    "description": "Sonido envolvente con graves profundos, cancelación de ruido activa y hasta 30 horas de batería en un diseño ultra cómodo.",
    "rating": 4.7,
    "reviews": 358,
    "badge": null,
    "variants": [
      {
        "label": "Negro Ónix",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Auriculares%20BassMax",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Auriculares%20BassMax%20-%20Detalle"
        ]
      },
      {
        "label": "Blanco Perla",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Auriculares%20BassMax%20%28Blanco%20Perla%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Auriculares%20BassMax%20-%20Detalle%20%28Blanco%20Perla%29"
        ]
      }
    ]
  },
  {
    "id": 4,
    "name": "Smartwatch PulseFit",
    "category": "tecnologia",
    "price": 2499,
    "description": "Monitorea tu ritmo cardíaco, tus pasos y tu sueño mientras recibes notificaciones directo en tu muñeca, resistente al agua.",
    "rating": 4.9,
    "reviews": 56,
    "badge": null,
    "variants": [
      {
        "label": "Correa Negra",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Smartwatch%20PulseFit",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Smartwatch%20PulseFit%20-%20Detalle"
        ]
      },
      {
        "label": "Correa Verde Lima",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Smartwatch%20PulseFit%20%28Correa%20Verde%20Lima%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Smartwatch%20PulseFit%20-%20Detalle%20%28Correa%20Verde%20Lima%29"
        ]
      }
    ]
  },
  {
    "id": 5,
    "name": "Tablet AirView 10",
    "category": "tecnologia",
    "price": 5499,
    "description": "Pantalla de 10 pulgadas ideal para series, lectura y trabajo ligero, con un chasis delgado que cabe en cualquier mochila.",
    "rating": 4.4,
    "reviews": 27,
    "badge": "Más vendido",
    "variants": [
      {
        "label": "Gris Espacial",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Tablet%20AirView%2010",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Tablet%20AirView%2010%20-%20Detalle"
        ]
      },
      {
        "label": "Plata",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Tablet%20AirView%2010%20%28Plata%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Tablet%20AirView%2010%20-%20Detalle%20%28Plata%29"
        ]
      }
    ]
  },
  {
    "id": 6,
    "name": "Sudadera Urban Flow",
    "category": "ropa",
    "price": 649,
    "description": "Corte oversize, tela afelpada por dentro y capucha ajustable: la sudadera perfecta para el frío sin sacrificar estilo.",
    "rating": 4.1,
    "reviews": 270,
    "badge": null,
    "variants": [
      {
        "label": "Talla M",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Sudadera%20Urban%20Flow",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Sudadera%20Urban%20Flow%20-%20Detalle"
        ]
      },
      {
        "label": "Talla L",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Sudadera%20Urban%20Flow%20%28Talla%20L%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Sudadera%20Urban%20Flow%20-%20Detalle%20%28Talla%20L%29"
        ]
      }
    ]
  },
  {
    "id": 7,
    "name": "Playera BasicWear",
    "category": "ropa",
    "price": 249,
    "description": "Algodón 100% suave al tacto, corte recto y costuras reforzadas para que te acompañe lavada tras lavada.",
    "rating": 3.9,
    "reviews": 113,
    "badge": null,
    "variants": [
      {
        "label": "Negro",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Playera%20BasicWear",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Playera%20BasicWear%20-%20Detalle"
        ]
      },
      {
        "label": "Blanco",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Playera%20BasicWear%20%28Blanco%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Playera%20BasicWear%20-%20Detalle%20%28Blanco%29"
        ]
      }
    ]
  },
  {
    "id": 8,
    "name": "Chaqueta StormGuard",
    "category": "ropa",
    "price": 1199,
    "description": "Impermeable, ligera y con forro térmico: ideal para días lluviosos o de viento sin perder movilidad.",
    "rating": 4.6,
    "reviews": 291,
    "badge": null,
    "variants": [
      {
        "label": "Talla M",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Chaqueta%20StormGuard",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Chaqueta%20StormGuard%20-%20Detalle"
        ]
      },
      {
        "label": "Talla L",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Chaqueta%20StormGuard%20%28Talla%20L%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Chaqueta%20StormGuard%20-%20Detalle%20%28Talla%20L%29"
        ]
      }
    ]
  },
  {
    "id": 9,
    "name": "Pantalón FlexFit Jogger",
    "category": "ropa",
    "price": 549,
    "description": "Tela elástica que se mueve contigo, bolsillos con cierre y un ajuste moderno para el día a día o el gimnasio.",
    "rating": 4.1,
    "reviews": 313,
    "badge": "Oferta",
    "variants": [
      {
        "label": "Gris",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Pantal%C3%B3n%20FlexFit%20Jogger",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Pantal%C3%B3n%20FlexFit%20Jogger%20-%20Detalle"
        ]
      },
      {
        "label": "Negro",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Pantal%C3%B3n%20FlexFit%20Jogger%20%28Negro%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Pantal%C3%B3n%20FlexFit%20Jogger%20-%20Detalle%20%28Negro%29"
        ]
      }
    ]
  },
  {
    "id": 10,
    "name": "Vestido Noche Elegance",
    "category": "ropa",
    "price": 899,
    "description": "Silueta entallada, tela con caída perfecta y detalles delicados para esa noche especial que no se repite.",
    "rating": 4.8,
    "reviews": 15,
    "badge": "Nuevo",
    "variants": [
      {
        "label": "Talla S",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Vestido%20Noche%20Elegance",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Vestido%20Noche%20Elegance%20-%20Detalle"
        ]
      },
      {
        "label": "Talla M",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Vestido%20Noche%20Elegance%20%28Talla%20M%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Vestido%20Noche%20Elegance%20-%20Detalle%20%28Talla%20M%29"
        ]
      }
    ]
  },
  {
    "id": 11,
    "name": "Licuadora PowerBlend 900",
    "category": "hogar",
    "price": 899,
    "description": "Motor de 900W que muele hielo, frutas congeladas y semillas en segundos, con vaso de vidrio resistente.",
    "rating": 4.7,
    "reviews": 186,
    "badge": "Oferta",
    "variants": [
      {
        "label": "Negro",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Licuadora%20PowerBlend%20900",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Licuadora%20PowerBlend%20900%20-%20Detalle"
        ]
      },
      {
        "label": "Rojo",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Licuadora%20PowerBlend%20900%20%28Rojo%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Licuadora%20PowerBlend%20900%20-%20Detalle%20%28Rojo%29"
        ]
      }
    ]
  },
  {
    "id": 12,
    "name": "Cafetera AromaPress",
    "category": "hogar",
    "price": 1349,
    "description": "Prepara café de filtro con el aroma y sabor de cafetería, con jarra térmica que mantiene la temperatura por horas.",
    "rating": 4.1,
    "reviews": 402,
    "badge": "Oferta",
    "variants": [
      {
        "label": "Acero",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Cafetera%20AromaPress",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Cafetera%20AromaPress%20-%20Detalle"
        ]
      },
      {
        "label": "Negro Mate",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Cafetera%20AromaPress%20%28Negro%20Mate%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Cafetera%20AromaPress%20-%20Detalle%20%28Negro%20Mate%29"
        ]
      }
    ]
  },
  {
    "id": 13,
    "name": "Set de Sábanas CloudSoft",
    "category": "hogar",
    "price": 599,
    "description": "Tela microfibra ultra suave, transpirable y resistente a arrugas, para noches de descanso como en hotel.",
    "rating": 4.0,
    "reviews": 206,
    "badge": "Más vendido",
    "variants": [
      {
        "label": "Individual",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Set%20de%20S%C3%A1banas%20CloudSoft",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Set%20de%20S%C3%A1banas%20CloudSoft%20-%20Detalle"
        ]
      },
      {
        "label": "Queen",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Set%20de%20S%C3%A1banas%20CloudSoft%20%28Queen%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Set%20de%20S%C3%A1banas%20CloudSoft%20-%20Detalle%20%28Queen%29"
        ]
      }
    ]
  },
  {
    "id": 14,
    "name": "Lámpara LumaGlow",
    "category": "hogar",
    "price": 429,
    "description": "Luz cálida regulable con tres niveles de intensidad y control táctil, ideal para el buró o el escritorio.",
    "rating": 4.3,
    "reviews": 188,
    "badge": null,
    "variants": [
      {
        "label": "Blanca",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=L%C3%A1mpara%20LumaGlow",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=L%C3%A1mpara%20LumaGlow%20-%20Detalle"
        ]
      },
      {
        "label": "Negra",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=L%C3%A1mpara%20LumaGlow%20%28Negra%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=L%C3%A1mpara%20LumaGlow%20-%20Detalle%20%28Negra%29"
        ]
      }
    ]
  },
  {
    "id": 15,
    "name": "Aspiradora CycloneMax",
    "category": "hogar",
    "price": 2199,
    "description": "Succión potente sin pérdida de fuerza, sin bolsa y con filtro lavable para limpiar toda la casa en minutos.",
    "rating": 4.2,
    "reviews": 34,
    "badge": null,
    "variants": [
      {
        "label": "Gris",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Aspiradora%20CycloneMax",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Aspiradora%20CycloneMax%20-%20Detalle"
        ]
      },
      {
        "label": "Azul",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Aspiradora%20CycloneMax%20%28Azul%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Aspiradora%20CycloneMax%20-%20Detalle%20%28Azul%29"
        ]
      }
    ]
  },
  {
    "id": 16,
    "name": "Balón ProStrike",
    "category": "deportes",
    "price": 449,
    "description": "Superficie de contacto suave, cámara de aire de alta retención y costuras termoselladas para un vuelo estable.",
    "rating": 4.4,
    "reviews": 75,
    "badge": null,
    "variants": [
      {
        "label": "Talla 5 Blanco",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Bal%C3%B3n%20ProStrike",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Bal%C3%B3n%20ProStrike%20-%20Detalle"
        ]
      },
      {
        "label": "Talla 5 Verde Neón",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Bal%C3%B3n%20ProStrike%20%28Talla%205%20Verde%20Ne%C3%B3n%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Bal%C3%B3n%20ProStrike%20-%20Detalle%20%28Talla%205%20Verde%20Ne%C3%B3n%29"
        ]
      }
    ]
  },
  {
    "id": 17,
    "name": "Bicicleta TrailRider X",
    "category": "deportes",
    "price": 4999,
    "description": "Rodada 29, suspensión delantera y cambios de 21 velocidades para dominar cualquier terreno, de la ciudad al cerro.",
    "rating": 4.0,
    "reviews": 162,
    "badge": null,
    "variants": [
      {
        "label": "Negro/Verde",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Bicicleta%20TrailRider%20X",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Bicicleta%20TrailRider%20X%20-%20Detalle"
        ]
      },
      {
        "label": "Gris/Naranja",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Bicicleta%20TrailRider%20X%20%28Gris/Naranja%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Bicicleta%20TrailRider%20X%20-%20Detalle%20%28Gris/Naranja%29"
        ]
      }
    ]
  },
  {
    "id": 18,
    "name": "Mancuernas IronCore (set)",
    "category": "deportes",
    "price": 799,
    "description": "Recubrimiento de neopreno antideslizante, agarre ergonómico y peso ideal para entrenar en casa sin equipo extra.",
    "rating": 4.6,
    "reviews": 453,
    "badge": "Oferta",
    "variants": [
      {
        "label": "Par 3kg",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Mancuernas%20IronCore%20%28set%29",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Mancuernas%20IronCore%20%28set%29%20-%20Detalle"
        ]
      },
      {
        "label": "Par 5kg",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Mancuernas%20IronCore%20%28set%29%20%28Par%205kg%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Mancuernas%20IronCore%20%28set%29%20-%20Detalle%20%28Par%205kg%29"
        ]
      }
    ]
  },
  {
    "id": 19,
    "name": "Tenis RunFast Elite",
    "category": "deportes",
    "price": 1099,
    "description": "Suela con retorno de energía, malla transpirable y amortiguación que se siente en cada zancada.",
    "rating": 4.5,
    "reviews": 372,
    "badge": "Más vendido",
    "variants": [
      {
        "label": "Talla 26",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Tenis%20RunFast%20Elite",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Tenis%20RunFast%20Elite%20-%20Detalle"
        ]
      },
      {
        "label": "Talla 27",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Tenis%20RunFast%20Elite%20%28Talla%2027%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Tenis%20RunFast%20Elite%20-%20Detalle%20%28Talla%2027%29"
        ]
      }
    ]
  },
  {
    "id": 20,
    "name": "Raqueta SmashPro",
    "category": "deportes",
    "price": 699,
    "description": "Marco de grafito ligero, mayor punto dulce y encordado de fábrica listo para tu primer partido.",
    "rating": 4.0,
    "reviews": 128,
    "badge": "Oferta",
    "variants": [
      {
        "label": "Peso Ligero",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Raqueta%20SmashPro",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Raqueta%20SmashPro%20-%20Detalle"
        ]
      },
      {
        "label": "Peso Medio",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Raqueta%20SmashPro%20%28Peso%20Medio%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Raqueta%20SmashPro%20-%20Detalle%20%28Peso%20Medio%29"
        ]
      }
    ]
  },
  {
    "id": 21,
    "name": "Perfume Essence Noir",
    "category": "belleza",
    "price": 899,
    "description": "Notas amaderadas y cítricas con una estela que dura todo el día, en un frasco elegante para regalar o llevar contigo.",
    "rating": 5.0,
    "reviews": 449,
    "badge": "Nuevo",
    "variants": [
      {
        "label": "50ml",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Perfume%20Essence%20Noir",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Perfume%20Essence%20Noir%20-%20Detalle"
        ]
      },
      {
        "label": "100ml",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Perfume%20Essence%20Noir%20%28100ml%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Perfume%20Essence%20Noir%20-%20Detalle%20%28100ml%29"
        ]
      }
    ]
  },
  {
    "id": 22,
    "name": "Set de Maquillaje GlowKit",
    "category": "belleza",
    "price": 749,
    "description": "Paleta de sombras, rubor y labial en tonos versátiles para un look natural o de noche en minutos.",
    "rating": 4.9,
    "reviews": 206,
    "badge": "Oferta",
    "variants": [
      {
        "label": "Tonos Cálidos",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Set%20de%20Maquillaje%20GlowKit",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Set%20de%20Maquillaje%20GlowKit%20-%20Detalle"
        ]
      },
      {
        "label": "Tonos Fríos",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Set%20de%20Maquillaje%20GlowKit%20%28Tonos%20Fr%C3%ADos%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Set%20de%20Maquillaje%20GlowKit%20-%20Detalle%20%28Tonos%20Fr%C3%ADos%29"
        ]
      }
    ]
  },
  {
    "id": 23,
    "name": "Secadora de Cabello AirStyle",
    "category": "belleza",
    "price": 549,
    "description": "Tecnología iónica que reduce el frizz y seca más rápido cuidando el brillo natural de tu cabello.",
    "rating": 4.4,
    "reviews": 439,
    "badge": "Oferta",
    "variants": [
      {
        "label": "Negro",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Secadora%20de%20Cabello%20AirStyle",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Secadora%20de%20Cabello%20AirStyle%20-%20Detalle"
        ]
      },
      {
        "label": "Rosa",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Secadora%20de%20Cabello%20AirStyle%20%28Rosa%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Secadora%20de%20Cabello%20AirStyle%20-%20Detalle%20%28Rosa%29"
        ]
      }
    ]
  },
  {
    "id": 24,
    "name": "Crema Facial HydraGlow",
    "category": "belleza",
    "price": 399,
    "description": "Hidratación profunda con ácido hialurónico, textura ligera que se absorbe rápido sin dejar sensación grasosa.",
    "rating": 4.1,
    "reviews": 193,
    "badge": "Nuevo",
    "variants": [
      {
        "label": "Piel Normal",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Crema%20Facial%20HydraGlow",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Crema%20Facial%20HydraGlow%20-%20Detalle"
        ]
      },
      {
        "label": "Piel Seca",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Crema%20Facial%20HydraGlow%20%28Piel%20Seca%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Crema%20Facial%20HydraGlow%20-%20Detalle%20%28Piel%20Seca%29"
        ]
      }
    ]
  },
  {
    "id": 25,
    "name": "Plancha SilkStraight",
    "category": "belleza",
    "price": 499,
    "description": "Placas de cerámica que alisan parejo desde la primera pasada, con calentamiento rápido y control de temperatura.",
    "rating": 4.6,
    "reviews": 371,
    "badge": null,
    "variants": [
      {
        "label": "Negro",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Plancha%20SilkStraight",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Plancha%20SilkStraight%20-%20Detalle"
        ]
      },
      {
        "label": "Dorado",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Plancha%20SilkStraight%20%28Dorado%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Plancha%20SilkStraight%20-%20Detalle%20%28Dorado%29"
        ]
      }
    ]
  },
  {
    "id": 26,
    "name": "Dron SkyExplorer Mini",
    "category": "juguetes",
    "price": 1299,
    "description": "Cámara HD integrada, estabilización automática y hasta 15 minutos de vuelo, ideal para grabar desde las alturas.",
    "rating": 4.6,
    "reviews": 323,
    "badge": null,
    "variants": [
      {
        "label": "Negro",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Dron%20SkyExplorer%20Mini",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Dron%20SkyExplorer%20Mini%20-%20Detalle"
        ]
      },
      {
        "label": "Blanco",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Dron%20SkyExplorer%20Mini%20%28Blanco%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Dron%20SkyExplorer%20Mini%20-%20Detalle%20%28Blanco%29"
        ]
      }
    ]
  },
  {
    "id": 27,
    "name": "Set de Bloques MegaBuild",
    "category": "juguetes",
    "price": 649,
    "description": "350 piezas compatibles con las marcas más populares para construir vehículos, casas y lo que la imaginación permita.",
    "rating": 4.1,
    "reviews": 385,
    "badge": "Nuevo",
    "variants": [
      {
        "label": "Ciudad",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Set%20de%20Bloques%20MegaBuild",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Set%20de%20Bloques%20MegaBuild%20-%20Detalle"
        ]
      },
      {
        "label": "Espacial",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Set%20de%20Bloques%20MegaBuild%20%28Espacial%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Set%20de%20Bloques%20MegaBuild%20-%20Detalle%20%28Espacial%29"
        ]
      }
    ]
  },
  {
    "id": 28,
    "name": "Muñeca DreamStyle",
    "category": "juguetes",
    "price": 399,
    "description": "Articulaciones móviles, cabello para peinar y accesorios intercambiables para horas de juego creativo.",
    "rating": 4.1,
    "reviews": 206,
    "badge": "Oferta",
    "variants": [
      {
        "label": "Look Casual",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Mu%C3%B1eca%20DreamStyle",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Mu%C3%B1eca%20DreamStyle%20-%20Detalle"
        ]
      },
      {
        "label": "Look Fiesta",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Mu%C3%B1eca%20DreamStyle%20%28Look%20Fiesta%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Mu%C3%B1eca%20DreamStyle%20-%20Detalle%20%28Look%20Fiesta%29"
        ]
      }
    ]
  },
  {
    "id": 29,
    "name": "Carro a Control ThunderRacer",
    "category": "juguetes",
    "price": 799,
    "description": "Velocidad todo terreno, batería recargable incluida y control de largo alcance para carreras sin límites.",
    "rating": 5.0,
    "reviews": 339,
    "badge": null,
    "variants": [
      {
        "label": "Rojo",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Carro%20a%20Control%20ThunderRacer",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Carro%20a%20Control%20ThunderRacer%20-%20Detalle"
        ]
      },
      {
        "label": "Azul",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Carro%20a%20Control%20ThunderRacer%20%28Azul%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Carro%20a%20Control%20ThunderRacer%20-%20Detalle%20%28Azul%29"
        ]
      }
    ]
  },
  {
    "id": 30,
    "name": "Rompecabezas GalaxyPuzzle 1000",
    "category": "juguetes",
    "price": 299,
    "description": "Piezas de corte preciso y una imagen que atrapa a cualquier edad, perfecto para armar en familia.",
    "rating": 4.5,
    "reviews": 362,
    "badge": "Oferta",
    "variants": [
      {
        "label": "Diseño Nebulosa",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Rompecabezas%20GalaxyPuzzle%201000",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Rompecabezas%20GalaxyPuzzle%201000%20-%20Detalle"
        ]
      },
      {
        "label": "Diseño Vía Láctea",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Rompecabezas%20GalaxyPuzzle%201000%20%28Dise%C3%B1o%20V%C3%ADa%20L%C3%A1ctea%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Rompecabezas%20GalaxyPuzzle%201000%20-%20Detalle%20%28Dise%C3%B1o%20V%C3%ADa%20L%C3%A1ctea%29"
        ]
      }
    ]
  },
  {
    "id": 31,
    "name": "Novela El Eco del Silencio",
    "category": "libros",
    "price": 299,
    "description": "Un thriller psicológico que no sueltas hasta la última página, sobre secretos familiares que salen a la luz.",
    "rating": 4.8,
    "reviews": 409,
    "badge": "Más vendido",
    "variants": [
      {
        "label": "Pasta Blanda",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Novela%20El%20Eco%20del%20Silencio",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Novela%20El%20Eco%20del%20Silencio%20-%20Detalle"
        ]
      },
      {
        "label": "Pasta Dura",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Novela%20El%20Eco%20del%20Silencio%20%28Pasta%20Dura%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Novela%20El%20Eco%20del%20Silencio%20-%20Detalle%20%28Pasta%20Dura%29"
        ]
      }
    ]
  },
  {
    "id": 32,
    "name": "Libro de Cocina Sabores del Mundo",
    "category": "libros",
    "price": 349,
    "description": "Más de 80 recetas explicadas paso a paso, de la cocina callejera a los platillos de autor.",
    "rating": 4.2,
    "reviews": 28,
    "badge": "Oferta",
    "variants": [
      {
        "label": "Pasta Blanda",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Libro%20de%20Cocina%20Sabores%20del%20Mundo",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Libro%20de%20Cocina%20Sabores%20del%20Mundo%20-%20Detalle"
        ]
      },
      {
        "label": "Edición Ilustrada",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Libro%20de%20Cocina%20Sabores%20del%20Mundo%20%28Edici%C3%B3n%20Ilustrada%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Libro%20de%20Cocina%20Sabores%20del%20Mundo%20-%20Detalle%20%28Edici%C3%B3n%20Ilustrada%29"
        ]
      }
    ]
  },
  {
    "id": 33,
    "name": "Manual Programación desde Cero",
    "category": "libros",
    "price": 399,
    "description": "Aprende lógica y tu primer lenguaje de programación con ejercicios prácticos pensados para principiantes.",
    "rating": 4.3,
    "reviews": 45,
    "badge": "Nuevo",
    "variants": [
      {
        "label": "Pasta Blanda",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Manual%20Programaci%C3%B3n%20desde%20Cero",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Manual%20Programaci%C3%B3n%20desde%20Cero%20-%20Detalle"
        ]
      },
      {
        "label": "Pasta Dura",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Manual%20Programaci%C3%B3n%20desde%20Cero%20%28Pasta%20Dura%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Manual%20Programaci%C3%B3n%20desde%20Cero%20-%20Detalle%20%28Pasta%20Dura%29"
        ]
      }
    ]
  },
  {
    "id": 34,
    "name": "Cómic Guardianes del Vacío Vol.1",
    "category": "libros",
    "price": 249,
    "description": "Arte a todo color y una historia de héroes improbables que empieza fuerte y no baja el ritmo.",
    "rating": 4.9,
    "reviews": 302,
    "badge": null,
    "variants": [
      {
        "label": "Edición Estándar",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=C%C3%B3mic%20Guardianes%20del%20Vac%C3%ADo%20Vol.1",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=C%C3%B3mic%20Guardianes%20del%20Vac%C3%ADo%20Vol.1%20-%20Detalle"
        ]
      },
      {
        "label": "Edición Coleccionista",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=C%C3%B3mic%20Guardianes%20del%20Vac%C3%ADo%20Vol.1%20%28Edici%C3%B3n%20Coleccionista%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=C%C3%B3mic%20Guardianes%20del%20Vac%C3%ADo%20Vol.1%20-%20Detalle%20%28Edici%C3%B3n%20Coleccionista%29"
        ]
      }
    ]
  },
  {
    "id": 35,
    "name": "Diario Reflexiones Diarias",
    "category": "libros",
    "price": 199,
    "description": "Espacio en blanco y prompts breves para escribir cada noche, con pasta acolchada y cinta separadora.",
    "rating": 4.2,
    "reviews": 347,
    "badge": null,
    "variants": [
      {
        "label": "Verde",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Diario%20Reflexiones%20Diarias",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Diario%20Reflexiones%20Diarias%20-%20Detalle"
        ]
      },
      {
        "label": "Negro",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Diario%20Reflexiones%20Diarias%20%28Negro%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Diario%20Reflexiones%20Diarias%20-%20Detalle%20%28Negro%29"
        ]
      }
    ]
  },
  {
    "id": 36,
    "name": "Cama Ortopédica PetCloud",
    "category": "mascotas",
    "price": 899,
    "description": "Espuma de memoria que se adapta al cuerpo de tu mascota, funda lavable y base antideslizante.",
    "rating": 4.3,
    "reviews": 480,
    "badge": null,
    "variants": [
      {
        "label": "Chica",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Cama%20Ortop%C3%A9dica%20PetCloud",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Cama%20Ortop%C3%A9dica%20PetCloud%20-%20Detalle"
        ]
      },
      {
        "label": "Grande",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Cama%20Ortop%C3%A9dica%20PetCloud%20%28Grande%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Cama%20Ortop%C3%A9dica%20PetCloud%20-%20Detalle%20%28Grande%29"
        ]
      }
    ]
  },
  {
    "id": 37,
    "name": "Rascador FelineTower",
    "category": "mascotas",
    "price": 1199,
    "description": "Varios niveles para trepar, descansar y afilar uñas, forrado en sisal resistente para gatos de todas las edades.",
    "rating": 4.4,
    "reviews": 147,
    "badge": "Nuevo",
    "variants": [
      {
        "label": "Gris",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Rascador%20FelineTower",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Rascador%20FelineTower%20-%20Detalle"
        ]
      },
      {
        "label": "Beige",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Rascador%20FelineTower%20%28Beige%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Rascador%20FelineTower%20-%20Detalle%20%28Beige%29"
        ]
      }
    ]
  },
  {
    "id": 38,
    "name": "Comedero Automático SmartFeed",
    "category": "mascotas",
    "price": 799,
    "description": "Programa horarios y porciones desde tu celular para que tu mascota coma puntual aunque tú no estés en casa.",
    "rating": 4.2,
    "reviews": 299,
    "badge": null,
    "variants": [
      {
        "label": "Blanco",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Comedero%20Autom%C3%A1tico%20SmartFeed",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Comedero%20Autom%C3%A1tico%20SmartFeed%20-%20Detalle"
        ]
      },
      {
        "label": "Negro",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Comedero%20Autom%C3%A1tico%20SmartFeed%20%28Negro%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Comedero%20Autom%C3%A1tico%20SmartFeed%20-%20Detalle%20%28Negro%29"
        ]
      }
    ]
  },
  {
    "id": 39,
    "name": "Correa RetractPro",
    "category": "mascotas",
    "price": 349,
    "description": "Extensión suave hasta 5 metros, freno instantáneo y mango ergonómico para paseos sin jalones.",
    "rating": 4.2,
    "reviews": 311,
    "badge": null,
    "variants": [
      {
        "label": "Talla M",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Correa%20RetractPro",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Correa%20RetractPro%20-%20Detalle"
        ]
      },
      {
        "label": "Talla L",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Correa%20RetractPro%20%28Talla%20L%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Correa%20RetractPro%20-%20Detalle%20%28Talla%20L%29"
        ]
      }
    ]
  },
  {
    "id": 40,
    "name": "Juguete InteractPaw",
    "category": "mascotas",
    "price": 249,
    "description": "Estimula el instinto de juego con movimiento automático y luces, ideal para cuando tu mascota se queda sola.",
    "rating": 4.9,
    "reviews": 216,
    "badge": "Oferta",
    "variants": [
      {
        "label": "Ratón",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Juguete%20InteractPaw",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Juguete%20InteractPaw%20-%20Detalle"
        ]
      },
      {
        "label": "Pluma",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Juguete%20InteractPaw%20%28Pluma%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Juguete%20InteractPaw%20-%20Detalle%20%28Pluma%29"
        ]
      }
    ]
  },
  {
    "id": 41,
    "name": "Cargador USB CarVolt",
    "category": "automotriz",
    "price": 249,
    "description": "Carga dos dispositivos a la vez a máxima velocidad sin desviarte de la carretera, se conecta al encendedor.",
    "rating": 4.1,
    "reviews": 82,
    "badge": null,
    "variants": [
      {
        "label": "Negro",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Cargador%20USB%20CarVolt",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Cargador%20USB%20CarVolt%20-%20Detalle"
        ]
      },
      {
        "label": "Gris",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Cargador%20USB%20CarVolt%20%28Gris%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Cargador%20USB%20CarVolt%20-%20Detalle%20%28Gris%29"
        ]
      }
    ]
  },
  {
    "id": 42,
    "name": "Cubre Asientos ComfortDrive",
    "category": "automotriz",
    "price": 599,
    "description": "Tela transpirable resistente a manchas, fácil de instalar y compatible con la mayoría de los autos.",
    "rating": 4.4,
    "reviews": 398,
    "badge": "Más vendido",
    "variants": [
      {
        "label": "Negro",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Cubre%20Asientos%20ComfortDrive",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Cubre%20Asientos%20ComfortDrive%20-%20Detalle"
        ]
      },
      {
        "label": "Negro/Gris",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Cubre%20Asientos%20ComfortDrive%20%28Negro/Gris%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Cubre%20Asientos%20ComfortDrive%20-%20Detalle%20%28Negro/Gris%29"
        ]
      }
    ]
  },
  {
    "id": 43,
    "name": "Set de Luces LED NightBeam",
    "category": "automotriz",
    "price": 449,
    "description": "Iluminación blanca intensa que mejora la visibilidad nocturna, instalación plug and play sin modificaciones.",
    "rating": 4.8,
    "reviews": 90,
    "badge": null,
    "variants": [
      {
        "label": "H4",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Set%20de%20Luces%20LED%20NightBeam",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Set%20de%20Luces%20LED%20NightBeam%20-%20Detalle"
        ]
      },
      {
        "label": "H7",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Set%20de%20Luces%20LED%20NightBeam%20%28H7%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Set%20de%20Luces%20LED%20NightBeam%20-%20Detalle%20%28H7%29"
        ]
      }
    ]
  },
  {
    "id": 44,
    "name": "Aromatizante FreshRide",
    "category": "automotriz",
    "price": 149,
    "description": "Fragancia de larga duración con intensidad ajustable, se sujeta a la rejilla de ventilación sin derrames.",
    "rating": 4.1,
    "reviews": 360,
    "badge": null,
    "variants": [
      {
        "label": "Aroma Cítrico",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Aromatizante%20FreshRide",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Aromatizante%20FreshRide%20-%20Detalle"
        ]
      },
      {
        "label": "Aroma Madera",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Aromatizante%20FreshRide%20%28Aroma%20Madera%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Aromatizante%20FreshRide%20-%20Detalle%20%28Aroma%20Madera%29"
        ]
      }
    ]
  },
  {
    "id": 45,
    "name": "Kit de Herramientas AutoFix",
    "category": "automotriz",
    "price": 699,
    "description": "Todo lo necesario para emergencias en el camino: llaves, pinzas, cables pasacorriente y estuche resistente.",
    "rating": 4.6,
    "reviews": 209,
    "badge": null,
    "variants": [
      {
        "label": "Kit 40 pzas",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Kit%20de%20Herramientas%20AutoFix",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Kit%20de%20Herramientas%20AutoFix%20-%20Detalle"
        ]
      },
      {
        "label": "Kit 60 pzas",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Kit%20de%20Herramientas%20AutoFix%20%28Kit%2060%20pzas%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Kit%20de%20Herramientas%20AutoFix%20-%20Detalle%20%28Kit%2060%20pzas%29"
        ]
      }
    ]
  },
  {
    "id": 46,
    "name": "Taladro PowerDrill X200",
    "category": "herramientas",
    "price": 1499,
    "description": "Motor de alto torque, batería de litio incluida y maletín con puntas para cualquier proyecto en casa.",
    "rating": 4.6,
    "reviews": 251,
    "badge": null,
    "variants": [
      {
        "label": "Versión Estándar",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Taladro%20PowerDrill%20X200",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Taladro%20PowerDrill%20X200%20-%20Detalle"
        ]
      },
      {
        "label": "Versión Pro",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Taladro%20PowerDrill%20X200%20%28Versi%C3%B3n%20Pro%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Taladro%20PowerDrill%20X200%20-%20Detalle%20%28Versi%C3%B3n%20Pro%29"
        ]
      }
    ]
  },
  {
    "id": 47,
    "name": "Set de Destornilladores PrecisionKit",
    "category": "herramientas",
    "price": 349,
    "description": "32 puntas intercambiables e imantadas guardadas en un estuche compacto que resiste años de uso.",
    "rating": 4.2,
    "reviews": 295,
    "badge": "Más vendido",
    "variants": [
      {
        "label": "32 piezas",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Set%20de%20Destornilladores%20PrecisionKit",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Set%20de%20Destornilladores%20PrecisionKit%20-%20Detalle"
        ]
      },
      {
        "label": "58 piezas",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Set%20de%20Destornilladores%20PrecisionKit%20%2858%20piezas%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Set%20de%20Destornilladores%20PrecisionKit%20-%20Detalle%20%2858%20piezas%29"
        ]
      }
    ]
  },
  {
    "id": 48,
    "name": "Sierra Circular CutMaster",
    "category": "herramientas",
    "price": 1899,
    "description": "Corte limpio en madera y laminado con guía láser incluida para líneas rectas sin esfuerzo.",
    "rating": 4.6,
    "reviews": 70,
    "badge": null,
    "variants": [
      {
        "label": "Disco 7 1/4\"",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Sierra%20Circular%20CutMaster",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Sierra%20Circular%20CutMaster%20-%20Detalle"
        ]
      },
      {
        "label": "Disco 10\"",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Sierra%20Circular%20CutMaster%20%28Disco%2010%22%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Sierra%20Circular%20CutMaster%20-%20Detalle%20%28Disco%2010%22%29"
        ]
      }
    ]
  },
  {
    "id": 49,
    "name": "Multímetro VoltCheck Pro",
    "category": "herramientas",
    "price": 449,
    "description": "Mide voltaje, corriente y resistencia con pantalla digital clara y protección contra sobrecarga.",
    "rating": 4.9,
    "reviews": 396,
    "badge": "Oferta",
    "variants": [
      {
        "label": "Básico",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Mult%C3%ADmetro%20VoltCheck%20Pro",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Mult%C3%ADmetro%20VoltCheck%20Pro%20-%20Detalle"
        ]
      },
      {
        "label": "Avanzado",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Mult%C3%ADmetro%20VoltCheck%20Pro%20%28Avanzado%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Mult%C3%ADmetro%20VoltCheck%20Pro%20-%20Detalle%20%28Avanzado%29"
        ]
      }
    ]
  },
  {
    "id": 50,
    "name": "Caja de Herramientas ProOrganizer 200",
    "category": "herramientas",
    "price": 599,
    "description": "Compartimentos ajustables y cierre reforzado para transportar y organizar todo tu equipo sin perder ni un tornillo.",
    "rating": 4.7,
    "reviews": 186,
    "badge": "Más vendido",
    "variants": [
      {
        "label": "200 piezas",
        "images": [
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Caja%20de%20Herramientas%20ProOrganizer%20200",
          "https://placehold.co/700x700/0B0B0B/39FF14?font=poppins&text=Caja%20de%20Herramientas%20ProOrganizer%20200%20-%20Detalle"
        ]
      },
      {
        "label": "300 piezas",
        "images": [
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Caja%20de%20Herramientas%20ProOrganizer%20200%20%28300%20piezas%29",
          "https://placehold.co/700x700/39FF14/0B0B0B?font=poppins&text=Caja%20de%20Herramientas%20ProOrganizer%20200%20-%20Detalle%20%28300%20piezas%29"
        ]
      }
    ]
  }
];
