export type Genero = 'Caballero' | 'Dama' | 'Juvenil' | 'Niño' | 'Bebé' | 'Unisex';
export type Talla = 'CH' | 'MD' | 'GR' | 'XG' | 'XXG' | 'CH (4 A)' | 'MD (6 A)' | 'GD (8 A)' | 'XG (10 A)' | 'T1' | 'T2' | 'T3';
export type Categoria = 'Playeras' | 'Polos' | 'Deportiva' | 'Sudaderas' | 'Camisas' | 'Gorras' | 'Accesorios';

export interface Producto {
  id: string;
  genero: Genero;
  nombre: string;
  precios: { base: number; XXG: number };
  imagen: string; 
  imagenes: string[]; 
  unitalla?: boolean;
  descripcion?: string;
  colores: string[];
}

// --- Listas de tallas por tipo de producto ---
export const TALLAS_ADULTO: Talla[] = ['CH', 'MD', 'GR', 'XG', 'XXG'];
export const TALLAS_NINO: Talla[] = ['CH (4 A)', 'MD (6 A)', 'GD (8 A)', 'XG (10 A)'];
export const TALLAS_BEBE: Talla[] = ['T1', 'T2', 'T3'];

// --- Listas Maestras de Colores Oficiales Yazbek ---
const COLORES_C0300_CUSTOM = [
  "Blanco", "Gris Jaspe", "Beige", "Celeste", "Caribe", "Plata", 
  "Azul Claro", "Rosa Pastel", "Lavanda", "Aqua", "Coral", "Salmón", 
  "Mango", "Delfín", "Canario", "Lima", "Morado", "Ocre", "Fucsia", 
  "Naranja", "Turquesa", "Rojo", "Marino", "Negro", "Olivo", "Ladrillo", 
  "Jade", "Royal (Azul Rey)", "Chocolate", "Carbón", "Marrón", 
  "Verde Bosque", "Amarillo", "Fiusha", "Azul Eléctrico", "Arena"
];

const COLORES_ALGODON_GENERAL = [
  "Blanco", "Negro", "Gris Jaspe", "Marino", "Royal", "Rojo", 
  "Turquesa", "Jade", "Carbon", "Morado", "Naranja", "Fucsia", 
  "Lima", "Arena", "Rosa Pastel", "Celeste"
];

const COLORES_POLIESTER_DRY = [
  "Blanco", "Negro", "Marino", "Rojo", "Azul Rey", "Gris Oxford", 
  "Neon Verde", "Neon Naranja", "Neon Amarillo", "Neon Rosa", "Vino", "Turquesa", "Plata"
];

const COLORES_CAMISAS = [
  "Blanco", "Negro", "Marino", "Azul Cielo", "Gris", "Rosa", "Kaki", 
  "Rojo", "Vino", "Verde Olivo", "Francia"
];

const COLORES_GORRAS = [
  "Negro", "Marino", "Blanco", "Rojo", "Azul Rey", "Gris", "Kaki", 
  "Verde", "Vino", "Negro/Blanco", "Marino/Blanco", "Rojo/Blanco"
];

const COLORES_ACCESORIOS = [
  "Negro", "Marino", "Blanco"
];

export const productosPlayeras: Producto[] = [
  {
    id: 'C0300',
    genero: 'Caballero',
    nombre: 'PLAYERA CABALLERO',
    precios: { base: 120, XXG: 140 },
    imagen: 'https://www.moplayeras.com/cdn/shop/products/92233_MF_720x.jpg?v=1682367230',
    imagenes: [
      'https://www.moplayeras.com/cdn/shop/products/92233_MF_720x.jpg?v=1682367230',
      'https://secuenciasolutions.com.mx/2020/wp-content/uploads/2024/08/PLAYERA-ADULTO-MampO-MOD.-4800-COLORES-COLORES.png'
    ],
    colores: COLORES_C0300_CUSTOM
  },
  {
    id: 'D0300',
    genero: 'Dama',
    nombre: 'PLAYERA DAMA',
    precios: { base: 120, XXG: 140 },
    imagen: 'https://www.moplayeras.com/cdn/shop/files/92018M_O4513FineTurquoise10_720x.jpg?v=1682378054',
    imagenes: [
      'https://www.moplayeras.com/cdn/shop/files/92018M_O4513FineTurquoise10_720x.jpg?v=1682378054',
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=600&auto=format&fit=crop&q=80'
    ],
    colores: [
      "Blanco", "Negro", "Gris Jaspe", "Marino", "Royal", "Rojo", 
      "Turquesa", "Jade", "Carbon", "Morado", "Canario", "Coral", 
      "Aqua", "Rosa Pastel", "Azul Claro", "Fucsia", "Lima", "Naranja"
    ]
  },
  {
    id: 'J0300',
    genero: 'Juvenil',
    nombre: 'PLAYERA PARA JOVEN',
    precios: { base: 100, XXG: 120 },
    imagen: 'https://www.moplayeras.com/cdn/shop/files/91931_MF_1_720x.png?v=1682376996',
    imagenes: [
      'https://www.moplayeras.com/cdn/shop/files/91931_MF_1_720x.png?v=1682376996',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_ALGODON_GENERAL
  },
  {
    id: 'N0300',
    genero: 'Niño',
    nombre: 'PLAYERA NIÑO',
    precios: { base: 90, XXG: 110 },
    imagen: 'https://www.moplayeras.com/cdn/shop/files/4850Gold_720x.jpg?v=1708553951',
    imagenes: [
      'https://www.moplayeras.com/cdn/shop/files/4850Gold_720x.jpg?v=1708553951',
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_ALGODON_GENERAL
  },
  {
    id: 'B0300',
    genero: 'Bebé',
    nombre: 'PLAYERA BEBE',
    precios: { base: 90, XXG: 110 },
    imagen: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&auto=format&fit=crop&q=60',
    imagenes: [
      'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&auto=format&fit=crop&q=60',
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ["Blanco", "Negro", "Marino", "Royal", "Rojo", "Rosa Pastel", "Celeste", "Amarillo Canario", "Aqua"]
  },
  {
    id: 'C0304',
    genero: 'Caballero',
    nombre: 'PLAYERA CABALLERO MANGA LARGA',
    precios: { base: 160, XXG: 180 },
    imagen: 'https://www.moplayeras.com/cdn/shop/files/4501_-_FINE_CHARCOAL_3_268852bc-584a-4dbb-ab72-0ef00e862bbc_720x.png?v=1746549825',
    imagenes: [
      'https://www.moplayeras.com/cdn/shop/files/4501_-_FINE_CHARCOAL_3_268852bc-584a-4dbb-ab72-0ef00e862bbc_720x.png?v=1746549825',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ["Blanco", "Negro", "Marino", "Gris Oxford", "Gris Jaspe", "Rojo", "Azul Rey", "Vino", "Verde Militar"]
  },
  {
    id: 'D0304',
    genero: 'Dama',
    nombre: 'PLAYERA DAMA MANGA LARGA',
    precios: { base: 160, XXG: 180 },
    imagen: 'https://allmade.com/cdn/shop/files/womens-tri-blend-long-sleeve-tee-653451_900x.jpg?v=1714411225',
    imagenes: [
      'https://allmade.com/cdn/shop/files/womens-tri-blend-long-sleeve-tee-653451_900x.jpg?v=1714411225',
      'https://images.unsplash.com/photo-1551799517-eb8f03cb5e6a?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ["Blanco", "Negro", "Marino", "Gris Oxford", "Rojo", "Azul Rey", "Vino", "Fucsia", "Coral"]
  },
  {
    id: 'N0304',
    genero: 'Niño',
    nombre: 'PLAYERA NIÑO MANGA LARGA',
    precios: { base: 130, XXG: 150 },
    imagen: 'https://cdn.shopify.com/s/files/1/0304/3013/4331/files/the-classic-long-sleeve-t-shirt_sunflower_main.jpg?v=1751400689',
    imagenes: [
      'https://cdn.shopify.com/s/files/1/0304/3013/4331/files/the-classic-long-sleeve-t-shirt_sunflower_main.jpg?v=1751400689',
      'https://images.shopify.com/photo-1602810318383-e386cc2a3ccf?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ["Blanco", "Negro", "Marino", "Rojo", "Azul Rey", "Amarillo Huevo", "Gris Jaspe"]
  },
  {
    id: 'TSUAOVER',
    genero: 'Unisex',
    nombre: 'PLAYERA OVERSIZE UNISEX',
    precios: { base: 250, XXG: 250 },
    imagen: 'https://s3-eu-west-1.amazonaws.com/resources.jhktshirt.com/pictures/catalogue/jhktshirt_tsuaover240_0.jpg',
    imagenes: [
      'https://s3-eu-west-1.amazonaws.com/resources.jhktshirt.com/pictures/catalogue/jhktshirt_tsuaover240_0.jpg',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ["Negro", "Blanco", "Kaki", "Verde Militar", "Chocolate", "Gris Oxford", "Azul Acero", "Vino"]
  }
];

export const productosPolos: Producto[] = [
  {
    id: 'C0550',
    genero: 'Caballero',
    nombre: 'POLO CABALLERO',
    precios: { base: 180, XXG: 200 },
    imagen: 'https://www.moplayeras.com/cdn/shop/files/92516_MF_720x.jpg?v=1682368564',
    imagenes: [
      'https://www.moplayeras.com/cdn/shop/files/92516_MF_720x.jpg?v=1682368564',
      'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_ALGODON_GENERAL
  },
  {
    id: 'D0550',
    genero: 'Dama',
    nombre: 'POLO DAMA',
    precios: { base: 180, XXG: 200 },
    imagen: 'https://www.moplayeras.com/cdn/shop/products/92550_MF-MARINOBRILLANTE_c1607e52-e427-4708-aa8a-ee9beafaf406_720x.jpg?v=1682368767',
    imagenes: [
      'https://www.moplayeras.com/cdn/shop/products/92550_MF-MARINOBRILLANTE_c1607e52-e427-4708-aa8a-ee9beafaf406_720x.jpg?v=1682368767',
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&auto=format&fit=crop&q=80'
    ],
    colores: [
      "Blanco", "Negro", "Gris Jaspe", "Marino", "Royal", "Rojo", 
      "Turquesa", "Jade", "Carbon", "Morado", "Canario", "Coral", "Fucsia", "Lima"
    ]
  },
  {
    id: 'N0501',
    genero: 'Niño',
    nombre: 'POLO NIÑO',
    precios: { base: 150, XXG: 170 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/N0501-playera-polo-mc-unisex-nino-100algodon-marino_3_1200x1200.jpg?v=1736278237',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/N0501-playera-polo-mc-unisex-nino-100algodon-marino_3_1200x1200.jpg?v=1736278237',
      'https://images.unsplash.com/photo-1611428813653-aa606c998586?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ["Blanco", "Negro", "Marino", "Rojo", "Azul Rey", "Gris Jaspe", "Verde Bandera", "Amarillo Huevo", "Celeste"]
  },
  {
    id: '9005C',
    genero: 'Caballero',
    nombre: 'POLO PREMIUM CABALLERO',
    precios: { base: 200, XXG: 220 },
    imagen: 'https://eurocotton.vtexassets.com/arquivos/ids/164197/TPOLPRCROJ-2.jpg?v=638855482051430000',
    imagenes: [
      'https://eurocotton.vtexassets.com/arquivos/ids/164197/TPOLPRCROJ-2.jpg?v=638855482051430000',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_ALGODON_GENERAL
  },
  {
    id: '9005D',
    genero: 'Dama',
    nombre: 'POLO PREMIUM DAMA',
    precios: { base: 200, XXG: 220 },
    imagen: 'https://www.moplayeras.com/cdn/shop/products/92530_MF-AZULREYBRILLANTE_fec322f9-4e1f-4ccb-b58a-1a059f3fa0cb_2048x.jpg?v=1682368687',
    imagenes: [
      'https://www.moplayeras.com/cdn/shop/products/92530_MF-AZULREYBRILLANTE_fec322f9-4e1f-4ccb-b58a-1a059f3fa0cb_2048x.jpg?v=1682368687',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_ALGODON_GENERAL
  },
  {
    id: '9008C',
    genero: 'Caballero',
    nombre: 'POLO PREMIUM CABALLERO POLIESTER',
    precios: { base: 220, XXG: 240 },
    imagen: 'https://eurocotton.vtexassets.com/arquivos/ids/163461/TPOLPLCREY-2.jpg?v=638855479294670000',
    imagenes: [
      'https://eurocotton.vtexassets.com/arquivos/ids/163461/TPOLPLCREY-2.jpg?v=638855479294670000',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_POLIESTER_DRY
  },
  {
    id: '9008D',
    genero: 'Dama',
    nombre: 'POLO PREMIUM DAMA POLIESTER',
    precios: { base: 220, XXG: 240 },
    imagen: 'https://eurocotton.vtexassets.com/arquivos/ids/164072/TPOLPRDBAN-2.jpg?v=638856923595370000',
    imagenes: [
      'https://eurocotton.vtexassets.com/arquivos/ids/164072/TPOLPRDBAN-2.jpg?v=638856923595370000',
      'https://images.unsplash.com/photo-1534126511673-b6899657816a?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_POLIESTER_DRY
  },
  {
    id: '9008ML',
    genero: 'Caballero',
    nombre: 'POLO PREMIUM POLIESTER CABALLERO MANGA LARGA',
    precios: { base: 250, XXG: 270 },
    imagen: 'https://playerasnovara.com/files/polo-ML-dry-wear-9008ML-b.jpg',
    imagenes: [
      'https://playerasnovara.com/files/polo-ML-dry-wear-9008ML-b.jpg',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Blanco', 'Negro', 'Marino', 'Rojo', 'Azul Rey', 'Gris Oxford', 'Royal', 'Plata']
  }
];

export const productosDeportiva: Producto[] = [
  {
    id: 'C1302',
    genero: 'Caballero',
    nombre: 'PLAYERA DRY FIT CABALLERO',
    precios: { base: 160, XXG: 180 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/N1302-playera-cr-mc-unisex-nino-100poliester-negro_3_1200x1200.jpg?v=1736268172',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/C0300-playera-pc-cr-mc-caballero-100algodon-negro_3_1200x1200.jpg?v=1734391050',
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_POLIESTER_DRY
  },
  {
    id: 'D1302',
    genero: 'Dama',
    nombre: 'PLAYERA DRY FIT DAMA',
    precios: { base: 160, XXG: 180 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/D1302-playera-cr-mc-silueta-dama-100poliester-marino_3.jpg?v=1734474943',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/D1302-playera-cr-mc-silueta-dama-100poliester-marino_3.jpg?v=1734474943',
      'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_POLIESTER_DRY
  },
  {
    id: 'N1302',
    genero: 'Niño',
    nombre: 'PLAYERA DRY FIT NIÑO',
    precios: { base: 130, XXG: 150 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/N1302-playera-cr-mc-unisex-nino-100poliester-marino_3.jpg?v=1736268151',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/N1302-playera-cr-mc-unisex-nino-100poliester-marino_3.jpg?v=1736268151',
      'https://images.unsplash.com/photo-1471286174243-e85afc3cbdc3?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_POLIESTER_DRY
  },
  {
    id: 'C1304',
    genero: 'Caballero',
    nombre: 'PLAYERA DRY FIT CABALLERO MANGA LARGA',
    precios: { base: 180, XXG: 200 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/C1304-playera-cr-ml-caballero-100poliester-gris_3.jpg?v=1734464037',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/C1304-playera-cr-ml-caballero-100poliester-gris_3.jpg?v=1734464037',
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Blanco', 'Negro', 'Marino', 'Rojo', 'Azul Rey', 'Gris Oxford', 'Neon Amarillo', 'Neon Verde']
  },
  {
    id: 'D1304',
    genero: 'Dama',
    nombre: 'PLAYERA DRY FIT DAMA MANGA LARGA',
    precios: { base: 180, XXG: 200 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/D1304-playera-cr-ml-silueta-dama-100poliester-royal_3.jpg?v=1734476091',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/D1304-playera-cr-ml-silueta-dama-100poliester-royal_3.jpg?v=1734476091',
      'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Blanco', 'Negro', 'Marino', 'Rojo', 'Azul Rey', 'Neon Rosa', 'Neon Amarillo', 'Turquesa']
  },
  {
    id: 'N1304',
    genero: 'Niño',
    nombre: 'PLAYERA DRY FIT NIÑO MANGA LARGA',
    precios: { base: 150, XXG: 170 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/N0304-playera-pc-cr-ml-unisex-nino-100algodon-royal_3.jpg?v=1736277953',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/N0304-playera-pc-cr-ml-unisex-nino-100algodon-royal_3.jpg?v=1736277953',
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Blanco', 'Negro', 'Marino', 'Rojo', 'Azul Rey', 'Neon Verde', 'Neon Naranja']
  },
  {
    id: 'C1502',
    genero: 'Caballero',
    nombre: 'POLO DRY FIT CABALLERO',
    precios: { base: 230, XXG: 250 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/C1502-playera-polo-mc-caballero-100poliester-negro_3.jpg?v=1734464300',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/C1502-playera-polo-mc-caballero-100poliester-negro_3.jpg?v=1734464300',
      'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_POLIESTER_DRY
  },
  {
    id: 'D1502',
    genero: 'Dama',
    nombre: 'POLO DRY FIT DAMA',
    precios: { base: 230, XXG: 250 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/D1502-playera-polo-mc-silueta-dama-100poliester-blanco_3.jpg?v=1734476232',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/D1502-playera-polo-mc-silueta-dama-100poliester-blanco_3.jpg?v=1734476232',
      'https://images.unsplash.com/photo-1502224562085-639556652f33?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_POLIESTER_DRY
  },
  {
    id: 'C1504',
    genero: 'Caballero',
    nombre: 'POLO DRY FIT CABALLERO MANGA LARGA',
    precios: { base: 260, XXG: 280 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/C1504-playera-polo-ml-caballero-100poliester-marino_3_1200x1200.jpg?v=1762382067',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/C1504-playera-polo-ml-caballero-100poliester-marino_3_1200x1200.jpg?v=1762382067',
      'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Blanco', 'Negro', 'Marino', 'Rojo', 'Azul Rey', 'Gris Oxford']
  },
  {
    id: 'D1504',
    genero: 'Dama',
    nombre: 'POLO DRY FIT DAMA MANGA LARGA',
    precios: { base: 260, XXG: 280 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/D1504-playera-polo-ml-dama-100poliester-marino_3.jpg?v=1762384392',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/D1504-playera-polo-ml-dama-100poliester-marino_3.jpg?v=1762384392',
      'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Blanco', 'Negro', 'Marino', 'Rojo', 'Azul Rey', 'Vino']
  }
];

export const productosSudaderas: Producto[] = [
  {
    id: 'C0700',
    genero: 'Unisex',
    nombre: 'SUDADERA CUELLO REDONDO',
    precios: { base: 240, XXG: 260 },
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWl1KGPrJno9-v27QgdC2DpQPrkNLcqbLlg&s',
    imagenes: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDWl1KGPrJno9-v27QgdC2DpQPrkNLcqbLlg&s',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ["Blanco", "Negro", "Marino", "Gris Oxford", "Gris Jaspe", "Rojo", "Azul Rey", "Vino", "Verde Bandera"]
  },
  {
    id: 'C0701',
    genero: 'Unisex',
    nombre: 'SUDADERA CAPUCHA Y CANGURERA',
    precios: { base: 300, XXG: 320 },
    imagen: 'https://passionpromocional.com/cdn/shop/products/Diapositiva10_e1c3de1f-f19a-4203-9583-3cb2b784601a_800x.jpg?v=1628981233',
    imagenes: [
      'https://passionpromocional.com/cdn/shop/products/Diapositiva10_e1c3de1f-f19a-4203-9583-3cb2b784601a_800x.jpg?v=1628981233',
      'https://images.unsplash.com/photo-1544441893-675973e31985?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ["Blanco", "Negro", "Marino", "Gris Oxford", "Gris Jaspe", "Rojo", "Azul Rey", "Vino", "Naranja", "Fucsia", "Verde Bandera"]
  },
  {
    id: 'C0702',
    genero: 'Unisex',
    nombre: 'SUDADERA CAPUCHA CANGURERA Y CIERRE',
    precios: { base: 320, XXG: 340 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/C0702-sudadera-cap-cie-unisex-adulto-50algodon-50poliester-marino_4.jpg?v=1734463371',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/C0702-sudadera-cap-cie-unisex-adulto-50algodon-50poliester-marino_4.jpg?v=1734463371',
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Negro', 'Blanco', 'Marino', 'Gris Oxford', 'Gris Jaspe', 'Rojo', 'Azul Rey', 'Vino', 'Verde Bandera']
  },
  {
    id: 'C0703',
    genero: 'Unisex',
    nombre: 'SUDADERA 1/4 CIERRE',
    precios: { base: 240, XXG: 260 },
    imagen: 'https://www.clicheuniformes.com/cdn/shop/files/CO703A.png?v=1749235972&width=1946',
    imagenes: [
      'https://www.clicheuniformes.com/cdn/shop/files/CO703A.png?v=1749235972&width=1946',
      'https://images.unsplash.com/photo-1519985176271-adb1088fa94c?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Negro', 'Marino', 'Gris Oxford', 'Gris Jaspe', 'Rojo', 'Azul Rey', 'Grafito']
  },
  {
    id: 'N0700',
    genero: 'Niño',
    nombre: 'SUDADERA CUELLO REDONDO NIÑO',
    precios: { base: 200, XXG: 220 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/N0700-sudadera-cr-unisex-nino-50algodon-50poliester-blanco_3.jpg?v=1734533694',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/N0700-sudadera-cr-unisex-nino-50algodon-50poliester-blanco_3.jpg?v=1734533694',
      'https://images.unsplash.com/photo-1611106211090-8f3c79ee8552?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Blanco', 'Negro', 'Marino', 'Rojo', 'Azul Rey', 'Gris Jaspe', 'Amarillo Huevo', 'Rosa Pastel', 'Celeste']
  },
  {
    id: 'N0701',
    genero: 'Niño',
    nombre: 'SUDADERA CAPUCHA Y CANGURERA NIÑO',
    precios: { base: 260, XXG: 280 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/N0701-sudadera-cap-can-ninos-50algodon-50poliester-rojo_3.jpg?v=1753127504',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/N0701-sudadera-cap-can-ninos-50algodon-50poliester-rojo_3.jpg?v=1753127504',
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Blanco', 'Negro', 'Marino', 'Rojo', 'Azul Rey', 'Gris Jaspe', 'Vino']
  }
];

export const productosCamisas: Producto[] = [
  {
    id: 'C604',
    genero: 'Caballero',
    nombre: 'CAMISA OXFORD MANGA CORTA',
    precios: { base: 290, XXG: 310 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/C0604-camisa-oxford-liso-mc-caballero-75algodon-25poliester-blanco_3_1200x1200.jpg?v=1734451685',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/C0604-camisa-oxford-liso-mc-caballero-75algodon-25poliester-blanco_3_1200x1200.jpg?v=1734451685',
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Blanco', 'Azul Cielo', 'Gris', 'Rosa', 'Kaki']
  },
  {
    id: 'D604',
    genero: 'Dama',
    nombre: 'CAMISA OXFORD MANGA CORTA',
    precios: { base: 290, XXG: 310 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/D0604-camisa-oxford-liso-mc-silueta-dama-75algodon-25poliester-azul-cielo_3_1200x1200.jpg?v=1734467305',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/D0604-camisa-oxford-liso-mc-silueta-dama-75algodon-25poliester-azul-cielo_3_1200x1200.jpg?v=1734467305',
      'https://images.unsplash.com/photo-1548142813-c348350df52b?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Blanco', 'Azul Cielo', 'Gris', 'Rosa', 'Kaki']
  },
  {
    id: 'C605',
    genero: 'Caballero',
    nombre: 'CAMISA OXFORD MANGA LARGA',
    precios: { base: 330, XXG: 350 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/C0605-camisa-oxford-liso-ml-caballero-75algodon-25poliester-gris_3.jpg?v=1734454179',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/C0605-camisa-oxford-liso-ml-caballero-75algodon-25poliester-gris_3.jpg?v=1734454179',
      'https://images.unsplash.com/photo-1621072156002-e2fcc103e81e?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Blanco', 'Azul Cielo', 'Gris', 'Rosa', 'Kaki', 'Marino']
  },
  {
    id: 'D605',
    genero: 'Dama',
    nombre: 'CAMISA OXFORD MANGA LARGA',
    precios: { base: 330, XXG: 350 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/D0605-camisa-oxford-liso-ml-silueta-dama-75algodon-25poliester-rosa_3.jpg?v=1734467948',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/D0605-camisa-oxford-liso-ml-silueta-dama-75algodon-25poliester-rosa_3.jpg?v=1734467948',
      'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Blanco', 'Azul Cielo', 'Gris', 'Rosa', 'Kaki', 'Marino']
  },
  {
    id: 'C606',
    genero: 'Caballero',
    nombre: 'CAMISA GABARDINA MANGA CORTA',
    precios: { base: 290, XXG: 310 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/C0606-camisa-gabardina-mc-caballero-50algodon-50poliester-negro_3_1200x1200.jpg?v=1734454942',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/C0606-camisa-gabardina-mc-caballero-50algodon-50poliester-negro_3_1200x1200.jpg?v=1734454942',
      'https://images.unsplash.com/photo-1505632951757-3f3910fdf44b?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_CAMISAS
  },
  {
    id: 'D606',
    genero: 'Dama',
    nombre: 'CAMISA GABARDINA MANGA CORTA',
    precios: { base: 290, XXG: 310 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/D0606-camisa-gabardina-mc-silueta-dama-50algodon-50poliester-azul-francia_3.jpg?v=1734472540',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/D0606-camisa-gabardina-mc-silueta-dama-50algodon-50poliester-azul-francia_3.jpg?v=1734472540',
      'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_CAMISAS
  },
  {
    id: 'C607',
    genero: 'Caballero',
    nombre: 'CAMISA GABARDINA MANGA LARGA',
    precios: { base: 330, XXG: 350 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/C0607-camisa-gabardina-ml-caballero-50algodon-50poliester-blanco_3.jpg?v=1734455905',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/C0607-camisa-gabardina-ml-caballero-50algodon-50poliester-blanco_3.jpg?v=1734455905',
      'https://images.unsplash.com/photo-1569422508323-918cf3aa3bc6?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_CAMISAS
  },
  {
    id: 'D607',
    genero: 'Dama',
    nombre: 'CAMISA GABARDINA MANGA LARGA',
    precios: { base: 330, XXG: 350 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/D0607-camisa-gabardina-ml-silueta-dama-50algodon-50poliester-marino_3_1200x1200.jpg?v=1734473075',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/D0607-camisa-gabardina-ml-silueta-dama-50algodon-50poliester-marino_3_1200x1200.jpg?v=1734473075',
      'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_CAMISAS
  },
  {
    id: 'C600',
    genero: 'Caballero',
    nombre: 'CAMISA MEZCLILLA MANGA CORTA',
    precios: { base: 350, XXG: 370 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/C0600-camisa-mezclilla-mc-caballero-100algodon-indigo-claro_3.jpg?v=1734451524',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/C0600-camisa-mezclilla-mc-caballero-100algodon-indigo-claro_3.jpg?v=1734451524',
      'https://images.unsplash.com/photo-1588359348347-9bc6cbaa689e?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Indigo Claro', 'Indigo Oscuro']
  },
  {
    id: 'D600',
    genero: 'Dama',
    nombre: 'CAMISA MEZCLILLA MANGA CORTA',
    precios: { base: 350, XXG: 370 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/D0600-camisa-mezclilla-mc-silueta-dama-100algodon-indigo-claro_3_1200x1200.jpg?v=1734467210',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/D0600-camisa-mezclilla-mc-silueta-dama-100algodon-indigo-claro_3_1200x1200.jpg?v=1734467210',
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Indigo Claro', 'Indigo Oscuro']
  },
  {
    id: 'C601',
    genero: 'Caballero',
    nombre: 'CAMISA MEZCLILLA MANGA LARGA',
    precios: { base: 360, XXG: 380 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/C0601-camisa-mezclilla-ml-caballero-100algodon-indigo-claro_3_1200x1200.jpg?v=1734451627',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/C0601-camisa-mezclilla-ml-caballero-100algodon-indigo-claro_3_1200x1200.jpg?v=1734451627',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Indigo Claro', 'Indigo Oscuro']
  },
  {
    id: 'D601',
    genero: 'Dama',
    nombre: 'CAMISA MEZCLILLA MANGA LARGA',
    precios: { base: 360, XXG: 380 },
    imagen: 'https://yazbek.com.mx/cdn/shop/files/D0601-camisa-mezclilla-ml-silueta-dama-100algodon-indigo-claro_3.jpg?v=1734467243',
    imagenes: [
      'https://yazbek.com.mx/cdn/shop/files/D0601-camisa-mezclilla-ml-silueta-dama-100algodon-indigo-claro_3.jpg?v=1734467243',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Indigo Claro', 'Indigo Oscuro']
  }
];

export const productosGorras: Producto[] = [
  {
    id: 'G001',
    genero: 'Unisex',
    nombre: 'GORRA 6 PANELES',
    precios: { base: 60, XXG: 60 },
    imagen: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRsFnUp62jHymbEioNQUgCE3OYCKHrZjZvujQJnaBgvbcaGTR1ArYyrFSx3Y7IrcZrxD6IV_ufLszw5aSbkLifldei9SKShmAsXvy3epC6-fYA0VK6ZWXC4zFEBjdWsuzddM7yKBQ&usqp=CAc',
    unitalla: true,
    descripcion: 'Gorra acrilico de 6 paneles ajustable.',
    imagenes: [
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRsFnUp62jHymbEioNQUgCE3OYCKHrZjZvujQJnaBgvbcaGTR1ArYyrFSx3Y7IrcZrxD6IV_ufLszw5aSbkLifldei9SKShmAsXvy3epC6-fYA0VK6ZWXC4zFEBjdWsuzddM7yKBQ&usqp=CAc',
      'https://images.unsplash.com/photo-1534215754734-18e55d13ce3a?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_GORRAS
  },
  {
    id: 'G002',
    genero: 'Unisex',
    nombre: 'GORRA TIPO TRUCKER',
    precios: { base: 80, XXG: 80 },
    imagen: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQi-e9nW2rmPJvUqXqZvgykAVdkvW9-as6Uh6u1CvUv8nzy3n1R9HkNRhcSVn_fivIwQGPgCz_pR4rwikB0RJWECNgWvBTkC87heR_ve-9NyM1A5BbXdhRsRQ&usqp=CAc',
    unitalla: true,
    descripcion: 'Gorra acrilico con malla en la parte posterior (Trucker).',
    imagenes: [
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQi-e9nW2rmPJvUqXqZvgykAVdkvW9-as6Uh6u1CvUv8nzy3n1R9HkNRhcSVn_fivIwQGPgCz_pR4rwikB0RJWECNgWvBTkC87heR_ve-9NyM1A5BbXdhRsRQ&usqp=CAc',
      'https://images.unsplash.com/photo-1576871337622-98d48d4aa53e?w=600&auto=format&fit=crop&q=80'
    ],
    colores: COLORES_GORRAS
  },
  {
    id: 'G003',
    genero: 'Unisex',
    nombre: 'GORRA YUPOONG',
    precios: { base: 250, XXG: 250 },
    imagen: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTONhAixdX6I150q_qRxoHZbClaR7bQ6wMDs9NTd4cttZrT1MLwEGZyGBSXTQZq8mT2GvgwCIzTN4Q9J7OLfpjSW9wVAFMreYqrqE0H0Q23ySR8Mp4AXnEeGmnoA38qbKWSF0944f4&usqp=CAc',
    unitalla: true,
    descripcion: 'Gorra acrilico rigido con malla en la parte posterior.',
    imagenes: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTONhAixdX6I150q_qRxoHZbClaR7bQ6wMDs9NTd4cttZrT1MLwEGZyGBSXTQZq8mT2GvgwCIzTN4Q9J7OLfpjSW9wVAFMreYqrqE0H0Q23ySR8Mp4AXnEeGmnoA38qbKWSF0944f4&usqp=CAc',
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Negro', 'Marino', 'Rojo', 'Azul Rey', 'Gris', 'Kaki']
  },
  {
    id: 'G004',
    genero: 'Unisex',
    nombre: 'GORRA BICOLOR',
    precios: { base: 250, XXG: 250 },
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UnwmUB8qm46bVwfwQT8iNTvcl4FH9fLBGQ&s',
    unitalla: true,
    descripcion: 'Gorra acrilico con visera diferene color.',
    imagenes: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UnwmUB8qm46bVwfwQT8iNTvcl4FH9fLBGQ&s',
      'https://images.unsplash.com/photo-1622445262465-2481c4574875?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Negro/Blanco', 'Marino/Blanco', 'Rojo/Blanco', 'Azul/Blanco', 'Negro/Rojo', 'Gris/Negro']
  },
  {
    id: 'G005',
    genero: 'Unisex',
    nombre: 'GORRA GABARDINA',
    precios: { base: 120, XXG: 120 },
    imagen: 'https://i.pinimg.com/1200x/34/1e/ac/341eac6866a3958654c1548da79a88c4.jpg',
    unitalla: true,
    descripcion: 'Gorra gabardina con ajuste corredizo.',
    imagenes: [
      'https://i.pinimg.com/1200x/34/1e/ac/341eac6866a3958654c1548da79a88c4.jpg',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=600&auto=format&fit=crop&q=80'
    ],
    colores: ['Blanco', 'Negro', 'Marino', 'Kaki', 'Rojo', 'Verde Botella', 'Vino']
  }
];

export const productosAccesorios: Producto[] = [
  {
    id: 'TOTE',
    genero: 'Unisex',
    nombre: 'TOTEBAG',
    precios: { base: 150, XXG: 150 },
    imagen: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  },
  {
    id: 'PANECO',
    genero: 'Unisex',
    nombre: 'PAÑALERO ECONÓMICO',
    precios: { base: 150, XXG: 150 },
    imagen: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  },
  {
    id: 'COBMSU',
    genero: 'Unisex',
    nombre: 'COBIJAS MUSELINA',
    precios: { base: 250, XXG: 250 },
    imagen: 'https://images.unsplash.com/photo-1584290867415-527a8475726d?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1584290867415-527a8475726d?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  },
  {
    id: 'COBTJD',
    genero: 'Unisex',
    nombre: 'COBIJAS TEJIDAS',
    precios: { base: 250, XXG: 250 },
    imagen: 'https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  },
  {
    id: 'PANMSL',
    genero: 'Unisex',
    nombre: 'PAÑALERO MUSELINA',
    precios: { base: 250, XXG: 250 },
    imagen: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  },
  {
    id: 'BABMSL',
    genero: 'Unisex',
    nombre: 'BABERO MUSELINA',
    precios: { base: 50, XXG: 50 },
    imagen: 'https://images.unsplash.com/photo-1617331140180-e8262094733a?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1617331140180-e8262094733a?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  },
  {
    id: 'SAB',
    genero: 'Unisex',
    nombre: 'SABANITAS CUALQUIER TELA',
    precios: { base: 250, XXG: 250 },
    imagen: 'https://images.unsplash.com/photo-1543294001-f7cbfe92237e?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1543294001-f7cbfe92237e?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  },
  {
    id: 'MANPER',
    genero: 'Unisex',
    nombre: 'MANTA PERSONALIZADA',
    precios: { base: 800, XXG: 800 },
    imagen: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  },
  {
    id: 'ESTU',
    genero: 'Unisex',
    nombre: 'ESTUCHE',
    precios: { base: 50, XXG: 50 },
    imagen: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  },
  {
    id: 'MINITOTE',
    genero: 'Unisex',
    nombre: 'MINITOTEBAG',
    precios: { base: 80, XXG: 80 },
    imagen: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  },
  {
    id: 'COBMINK',
    genero: 'Unisex',
    nombre: 'COBIJA MINK',
    precios: { base: 200, XXG: 200 },
    imagen: 'https://images.unsplash.com/photo-1584290867415-527a8475726d?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1584290867415-527a8475726d?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  },
  {
    id: 'TERM20',
    genero: 'Unisex',
    nombre: 'TERMO 20 OZ',
    precios: { base: 180, XXG: 180 },
    imagen: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  },
  {
    id: 'TERM30',
    genero: 'Unisex',
    nombre: 'TERMO 30 OZ',
    precios: { base: 200, XXG: 200 },
    imagen: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  },
  {
    id: 'MANDTAQ',
    genero: 'Unisex',
    nombre: 'MANDIL TAQUERO',
    precios: { base: 120, XXG: 120 },
    imagen: 'https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  },
  {
    id: 'MANDEDU',
    genero: 'Unisex',
    nombre: 'MANDIL EDUCADORA',
    precios: { base: 160, XXG: 160 },
    imagen: 'https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1581622558663-b2e33377dfb2?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  },
  {
    id: 'BATAMED',
    genero: 'Unisex',
    nombre: 'BATA MÉDICA',
    precios: { base: 250, XXG: 250 },
    imagen: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80',
    imagenes: ['https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&auto=format&fit=crop&q=80'],
    unitalla: true,
    colores: COLORES_ACCESORIOS
  }
];

export const productosPorCategoria: Record<Categoria, Producto[]> = {
  Playeras: productosPlayeras,
  Polos: productosPolos,
  Deportiva: productosDeportiva,
  Sudaderas: productosSudaderas,
  Camisas: productosCamisas,
  Gorras: productosGorras,
  Accesorios: productosAccesorios,
};

export const categorias: Categoria[] = ['Playeras', 'Polos', 'Deportiva', 'Sudaderas', 'Camisas', 'Gorras'];

export const generosPorCategoria: Record<Categoria, string[]> = {
  Playeras: ['Todos', 'Caballero', 'Dama', 'Juvenil', 'Niño', 'Bebé', 'Unisex'],
  Polos: ['Todos', 'Caballero', 'Dama', 'Niño'],
  Deportiva: ['Todos', 'Caballero', 'Dama', 'Niño'],
  Sudaderas: ['Todos', 'Unisex', 'Niño'],
  Camisas: ['Todos', 'Caballero', 'Dama'],
  Gorras: ['Todos'],
  Accesorios: ['Unisex']
};

export const productos = productosPlayeras;
export const filtros = generosPorCategoria.Playeras as unknown as readonly string[];
export type Filtro = string;