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
          "https://loremflickr.com/700/700/laptop?lock=11",
          "https://loremflickr.com/700/700/laptop?lock=12"
        ]
      },
      {
        "label": "Plata Estelar",
        "images": [
          "https://loremflickr.com/700/700/laptop?lock=13",
          "https://loremflickr.com/700/700/laptop?lock=14"
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
          "https://loremflickr.com/700/700/smartphone?lock=21",
          "https://loremflickr.com/700/700/smartphone?lock=22"
        ]
      },
      {
        "label": "Azul Aurora",
        "images": [
          "https://loremflickr.com/700/700/smartphone?lock=23",
          "https://loremflickr.com/700/700/smartphone?lock=24"
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
          "https://loremflickr.com/700/700/headphones?lock=31",
          "https://loremflickr.com/700/700/headphones?lock=32"
        ]
      },
      {
        "label": "Blanco Perla",
        "images": [
          "https://loremflickr.com/700/700/headphones?lock=33",
          "https://loremflickr.com/700/700/headphones?lock=34"
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
          "https://loremflickr.com/700/700/smartwatch?lock=41",
          "https://loremflickr.com/700/700/smartwatch?lock=42"
        ]
      },
      {
        "label": "Correa Verde Lima",
        "images": [
          "https://loremflickr.com/700/700/smartwatch?lock=43",
          "https://loremflickr.com/700/700/smartwatch?lock=44"
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
          "https://loremflickr.com/700/700/tablet?lock=51",
          "https://loremflickr.com/700/700/tablet?lock=52"
        ]
      },
      {
        "label": "Plata",
        "images": [
          "https://loremflickr.com/700/700/tablet?lock=53",
          "https://loremflickr.com/700/700/tablet?lock=54"
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
          "https://loremflickr.com/700/700/hoodie?lock=61",
          "https://loremflickr.com/700/700/hoodie?lock=62"
        ]
      },
      {
        "label": "Talla L",
        "images": [
          "https://loremflickr.com/700/700/hoodie?lock=63",
          "https://loremflickr.com/700/700/hoodie?lock=64"
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
          "https://loremflickr.com/700/700/tshirt?lock=71",
          "https://loremflickr.com/700/700/tshirt?lock=72"
        ]
      },
      {
        "label": "Blanco",
        "images": [
          "https://loremflickr.com/700/700/tshirt?lock=73",
          "https://loremflickr.com/700/700/tshirt?lock=74"
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
          "https://loremflickr.com/700/700/jacket?lock=81",
          "https://loremflickr.com/700/700/jacket?lock=82"
        ]
      },
      {
        "label": "Talla L",
        "images": [
          "https://loremflickr.com/700/700/jacket?lock=83",
          "https://loremflickr.com/700/700/jacket?lock=84"
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
          "https://loremflickr.com/700/700/sweatpants?lock=91",
          "https://loremflickr.com/700/700/sweatpants?lock=92"
        ]
      },
      {
        "label": "Negro",
        "images": [
          "https://loremflickr.com/700/700/sweatpants?lock=93",
          "https://loremflickr.com/700/700/sweatpants?lock=94"
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
          "https://loremflickr.com/700/700/dress?lock=101",
          "https://loremflickr.com/700/700/dress?lock=102"
        ]
      },
      {
        "label": "Talla M",
        "images": [
          "https://loremflickr.com/700/700/dress?lock=103",
          "https://loremflickr.com/700/700/dress?lock=104"
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
          "https://loremflickr.com/700/700/blender?lock=111",
          "https://loremflickr.com/700/700/blender?lock=112"
        ]
      },
      {
        "label": "Rojo",
        "images": [
          "https://loremflickr.com/700/700/blender?lock=113",
          "https://loremflickr.com/700/700/blender?lock=114"
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
          "https://loremflickr.com/700/700/coffee?lock=121",
          "https://loremflickr.com/700/700/coffee?lock=122"
        ]
      },
      {
        "label": "Negro Mate",
        "images": [
          "https://loremflickr.com/700/700/coffee?lock=123",
          "https://loremflickr.com/700/700/coffee?lock=124"
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
          "https://loremflickr.com/700/700/bedding?lock=131",
          "https://loremflickr.com/700/700/bedding?lock=132"
        ]
      },
      {
        "label": "Queen",
        "images": [
          "https://loremflickr.com/700/700/bedding?lock=133",
          "https://loremflickr.com/700/700/bedding?lock=134"
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
          "https://loremflickr.com/700/700/lamp?lock=141",
          "https://loremflickr.com/700/700/lamp?lock=142"
        ]
      },
      {
        "label": "Negra",
        "images": [
          "https://loremflickr.com/700/700/lamp?lock=143",
          "https://loremflickr.com/700/700/lamp?lock=144"
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
          "https://loremflickr.com/700/700/vacuum?lock=151",
          "https://loremflickr.com/700/700/vacuum?lock=152"
        ]
      },
      {
        "label": "Azul",
        "images": [
          "https://loremflickr.com/700/700/vacuum?lock=153",
          "https://loremflickr.com/700/700/vacuum?lock=154"
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
          "https://loremflickr.com/700/700/soccer?lock=161",
          "https://loremflickr.com/700/700/soccer?lock=162"
        ]
      },
      {
        "label": "Talla 5 Verde Neón",
        "images": [
          "https://loremflickr.com/700/700/soccer?lock=163",
          "https://loremflickr.com/700/700/soccer?lock=164"
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
          "https://loremflickr.com/700/700/bicycle?lock=171",
          "https://loremflickr.com/700/700/bicycle?lock=172"
        ]
      },
      {
        "label": "Gris/Naranja",
        "images": [
          "https://loremflickr.com/700/700/bicycle?lock=173",
          "https://loremflickr.com/700/700/bicycle?lock=174"
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
          "https://loremflickr.com/700/700/dumbbell?lock=181",
          "https://loremflickr.com/700/700/dumbbell?lock=182"
        ]
      },
      {
        "label": "Par 5kg",
        "images": [
          "https://loremflickr.com/700/700/dumbbell?lock=183",
          "https://loremflickr.com/700/700/dumbbell?lock=184"
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
          "https://loremflickr.com/700/700/sneakers?lock=191",
          "https://loremflickr.com/700/700/sneakers?lock=192"
        ]
      },
      {
        "label": "Talla 27",
        "images": [
          "https://loremflickr.com/700/700/sneakers?lock=193",
          "https://loremflickr.com/700/700/sneakers?lock=194"
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
          "https://loremflickr.com/700/700/tennis?lock=201",
          "https://loremflickr.com/700/700/tennis?lock=202"
        ]
      },
      {
        "label": "Peso Medio",
        "images": [
          "https://loremflickr.com/700/700/tennis?lock=203",
          "https://loremflickr.com/700/700/tennis?lock=204"
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
          "https://loremflickr.com/700/700/perfume?lock=211",
          "https://loremflickr.com/700/700/perfume?lock=212"
        ]
      },
      {
        "label": "100ml",
        "images": [
          "https://loremflickr.com/700/700/perfume?lock=213",
          "https://loremflickr.com/700/700/perfume?lock=214"
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
          "https://loremflickr.com/700/700/makeup?lock=221",
          "https://loremflickr.com/700/700/makeup?lock=222"
        ]
      },
      {
        "label": "Tonos Fríos",
        "images": [
          "https://loremflickr.com/700/700/makeup?lock=223",
          "https://loremflickr.com/700/700/makeup?lock=224"
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
          "https://loremflickr.com/700/700/hairdryer?lock=231",
          "https://loremflickr.com/700/700/hairdryer?lock=232"
        ]
      },
      {
        "label": "Rosa",
        "images": [
          "https://loremflickr.com/700/700/hairdryer?lock=233",
          "https://loremflickr.com/700/700/hairdryer?lock=234"
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
          "https://loremflickr.com/700/700/skincare?lock=241",
          "https://loremflickr.com/700/700/skincare?lock=242"
        ]
      },
      {
        "label": "Piel Seca",
        "images": [
          "https://loremflickr.com/700/700/skincare?lock=243",
          "https://loremflickr.com/700/700/skincare?lock=244"
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
          "https://loremflickr.com/700/700/hair?lock=251",
          "https://loremflickr.com/700/700/hair?lock=252"
        ]
      },
      {
        "label": "Dorado",
        "images": [
          "https://loremflickr.com/700/700/hair?lock=253",
          "https://loremflickr.com/700/700/hair?lock=254"
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
          "https://loremflickr.com/700/700/drone?lock=261",
          "https://loremflickr.com/700/700/drone?lock=262"
        ]
      },
      {
        "label": "Blanco",
        "images": [
          "https://loremflickr.com/700/700/drone?lock=263",
          "https://loremflickr.com/700/700/drone?lock=264"
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
          "https://loremflickr.com/700/700/lego?lock=271",
          "https://loremflickr.com/700/700/lego?lock=272"
        ]
      },
      {
        "label": "Espacial",
        "images": [
          "https://loremflickr.com/700/700/lego?lock=273",
          "https://loremflickr.com/700/700/lego?lock=274"
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
          "https://loremflickr.com/700/700/doll?lock=281",
          "https://loremflickr.com/700/700/doll?lock=282"
        ]
      },
      {
        "label": "Look Fiesta",
        "images": [
          "https://loremflickr.com/700/700/doll?lock=283",
          "https://loremflickr.com/700/700/doll?lock=284"
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
          "https://loremflickr.com/700/700/car?lock=291",
          "https://loremflickr.com/700/700/car?lock=292"
        ]
      },
      {
        "label": "Azul",
        "images": [
          "https://loremflickr.com/700/700/car?lock=293",
          "https://loremflickr.com/700/700/car?lock=294"
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
          "https://loremflickr.com/700/700/puzzle?lock=301",
          "https://loremflickr.com/700/700/puzzle?lock=302"
        ]
      },
      {
        "label": "Diseño Vía Láctea",
        "images": [
          "https://loremflickr.com/700/700/puzzle?lock=303",
          "https://loremflickr.com/700/700/puzzle?lock=304"
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
          "https://loremflickr.com/700/700/book?lock=311",
          "https://loremflickr.com/700/700/book?lock=312"
        ]
      },
      {
        "label": "Pasta Dura",
        "images": [
          "https://loremflickr.com/700/700/book?lock=313",
          "https://loremflickr.com/700/700/book?lock=314"
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
          "https://loremflickr.com/700/700/cookbook?lock=321",
          "https://loremflickr.com/700/700/cookbook?lock=322"
        ]
      },
      {
        "label": "Edición Ilustrada",
        "images": [
          "https://loremflickr.com/700/700/cookbook?lock=323",
          "https://loremflickr.com/700/700/cookbook?lock=324"
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
          "https://loremflickr.com/700/700/book?lock=331",
          "https://loremflickr.com/700/700/book?lock=332"
        ]
      },
      {
        "label": "Pasta Dura",
        "images": [
          "https://loremflickr.com/700/700/book?lock=333",
          "https://loremflickr.com/700/700/book?lock=334"
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
          "https://loremflickr.com/700/700/comic?lock=341",
          "https://loremflickr.com/700/700/comic?lock=342"
        ]
      },
      {
        "label": "Edición Coleccionista",
        "images": [
          "https://loremflickr.com/700/700/comic?lock=343",
          "https://loremflickr.com/700/700/comic?lock=344"
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
          "https://loremflickr.com/700/700/notebook?lock=351",
          "https://loremflickr.com/700/700/notebook?lock=352"
        ]
      },
      {
        "label": "Negro",
        "images": [
          "https://loremflickr.com/700/700/notebook?lock=353",
          "https://loremflickr.com/700/700/notebook?lock=354"
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
          "https://loremflickr.com/700/700/dog?lock=361",
          "https://loremflickr.com/700/700/dog?lock=362"
        ]
      },
      {
        "label": "Grande",
        "images": [
          "https://loremflickr.com/700/700/dog?lock=363",
          "https://loremflickr.com/700/700/dog?lock=364"
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
          "https://loremflickr.com/700/700/cat?lock=371",
          "https://loremflickr.com/700/700/cat?lock=372"
        ]
      },
      {
        "label": "Beige",
        "images": [
          "https://loremflickr.com/700/700/cat?lock=373",
          "https://loremflickr.com/700/700/cat?lock=374"
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
          "https://loremflickr.com/700/700/petfood?lock=381",
          "https://loremflickr.com/700/700/petfood?lock=382"
        ]
      },
      {
        "label": "Negro",
        "images": [
          "https://loremflickr.com/700/700/petfood?lock=383",
          "https://loremflickr.com/700/700/petfood?lock=384"
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
          "https://loremflickr.com/700/700/leash?lock=391",
          "https://loremflickr.com/700/700/leash?lock=392"
        ]
      },
      {
        "label": "Talla L",
        "images": [
          "https://loremflickr.com/700/700/leash?lock=393",
          "https://loremflickr.com/700/700/leash?lock=394"
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
          "https://loremflickr.com/700/700/cat?lock=401",
          "https://loremflickr.com/700/700/cat?lock=402"
        ]
      },
      {
        "label": "Pluma",
        "images": [
          "https://loremflickr.com/700/700/cat?lock=403",
          "https://loremflickr.com/700/700/cat?lock=404"
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
          "https://loremflickr.com/700/700/charger?lock=411",
          "https://loremflickr.com/700/700/charger?lock=412"
        ]
      },
      {
        "label": "Gris",
        "images": [
          "https://loremflickr.com/700/700/charger?lock=413",
          "https://loremflickr.com/700/700/charger?lock=414"
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
          "https://loremflickr.com/700/700/carseat?lock=421",
          "https://loremflickr.com/700/700/carseat?lock=422"
        ]
      },
      {
        "label": "Negro/Gris",
        "images": [
          "https://loremflickr.com/700/700/carseat?lock=423",
          "https://loremflickr.com/700/700/carseat?lock=424"
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
          "https://loremflickr.com/700/700/headlight?lock=431",
          "https://loremflickr.com/700/700/headlight?lock=432"
        ]
      },
      {
        "label": "H7",
        "images": [
          "https://loremflickr.com/700/700/headlight?lock=433",
          "https://loremflickr.com/700/700/headlight?lock=434"
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
          "https://loremflickr.com/700/700/airfreshener?lock=441",
          "https://loremflickr.com/700/700/airfreshener?lock=442"
        ]
      },
      {
        "label": "Aroma Madera",
        "images": [
          "https://loremflickr.com/700/700/airfreshener?lock=443",
          "https://loremflickr.com/700/700/airfreshener?lock=444"
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
          "https://loremflickr.com/700/700/tools?lock=451",
          "https://loremflickr.com/700/700/tools?lock=452"
        ]
      },
      {
        "label": "Kit 60 pzas",
        "images": [
          "https://loremflickr.com/700/700/tools?lock=453",
          "https://loremflickr.com/700/700/tools?lock=454"
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
          "https://loremflickr.com/700/700/drill?lock=461",
          "https://loremflickr.com/700/700/drill?lock=462"
        ]
      },
      {
        "label": "Versión Pro",
        "images": [
          "https://loremflickr.com/700/700/drill?lock=463",
          "https://loremflickr.com/700/700/drill?lock=464"
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
          "https://loremflickr.com/700/700/screwdriver?lock=471",
          "https://loremflickr.com/700/700/screwdriver?lock=472"
        ]
      },
      {
        "label": "58 piezas",
        "images": [
          "https://loremflickr.com/700/700/screwdriver?lock=473",
          "https://loremflickr.com/700/700/screwdriver?lock=474"
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
          "https://loremflickr.com/700/700/saw?lock=481",
          "https://loremflickr.com/700/700/saw?lock=482"
        ]
      },
      {
        "label": "Disco 10\"",
        "images": [
          "https://loremflickr.com/700/700/saw?lock=483",
          "https://loremflickr.com/700/700/saw?lock=484"
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
          "https://loremflickr.com/700/700/multimeter?lock=491",
          "https://loremflickr.com/700/700/multimeter?lock=492"
        ]
      },
      {
        "label": "Avanzado",
        "images": [
          "https://loremflickr.com/700/700/multimeter?lock=493",
          "https://loremflickr.com/700/700/multimeter?lock=494"
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
          "https://loremflickr.com/700/700/toolbox?lock=501",
          "https://loremflickr.com/700/700/toolbox?lock=502"
        ]
      },
      {
        "label": "300 piezas",
        "images": [
          "https://loremflickr.com/700/700/toolbox?lock=503",
          "https://loremflickr.com/700/700/toolbox?lock=504"
        ]
      }
    ]
  }
];
