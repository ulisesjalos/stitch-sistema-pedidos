export type Genero = 'Caballero' | 'Dama' | 'Juvenil' | 'Niño' | 'Bebé' | 'Unisex';
export type Talla = 'CH' | 'MD' | 'GR' | 'XG' | 'XXG';
export type Categoria = 'Playeras' | 'Polos' | 'Deportiva' | 'Sudaderas' | 'Camisas' | 'Gorras';

export interface Producto {
  id: string;
  genero: Genero;
  nombre: string;
  precios: { base: number; XXG: number };
  imagen: string;
  unitalla?: boolean;
  descripcion?: string;
}

export const productosPlayeras: Producto[] = [
  {
    id: 'C0300',
    genero: 'Caballero',
    nombre: 'PLAYERA CABALLERO',
    precios: { base: 120, XXG: 140 },
    imagen: 'https://plus.unsplash.com/premium_photo-1690366911099-0c0e170c9a51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgxfHx0c2hpcnR8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 'D0300',
    genero: 'Dama',
    nombre: 'PLAYERA DAMA',
    precios: { base: 120, XXG: 140 },
    imagen: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 'J0300',
    genero: 'Juvenil',
    nombre: 'PLAYERA PARA JOVEN',
    precios: { base: 100, XXG: 120 },
    imagen: 'https://plus.unsplash.com/premium_photo-1707816501388-6030b9f3eee8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hpcnQlMjB0ZWVuYWdlfGVufDB8fDB8fHww',
  },
  {
    id: 'N0300',
    genero: 'Niño',
    nombre: 'PLAYERA NIÑO',
    precios: { base: 90, XXG: 110 },
    imagen: 'https://plus.unsplash.com/premium_photo-1691367782367-2bd37f646abc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHNoaXJ0JTIweW91bmd8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 'B0300',
    genero: 'Bebé',
    nombre: 'PLAYERA BEBE',
    precios: { base: 90, XXG: 110 },
    imagen: 'https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hpcnQlMjBiYWJ5fGVufDB8fDB8fHww',
  },
  {
    id: 'C0304',
    genero: 'Caballero',
    nombre: 'PLAYERA CABALLERO MANGA LARGA',
    precios: { base: 160, XXG: 180 },
    imagen: 'https://http2.mlstatic.com/D_NQ_NP_2X_898240-MLM97787918996_112025-F-playera-manga-larga-camiseta-hombre-gildan-negra-5400.webp',
  },
  {
    id: 'D0304',
    genero: 'Dama',
    nombre: 'PLAYERA DAMA MANGA LARGA',
    precios: { base: 160, XXG: 180 },
    imagen: 'https://images.pexels.com/photos/5698857/pexels-photo-5698857.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'N0304',
    genero: 'Niño',
    nombre: 'PLAYERA NIÑO MANGA LARGA',
    precios: { base: 130, XXG: 150 },
    imagen: 'https://images.pexels.com/photos/5698856/pexels-photo-5698856.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'TSUAOVER',
    genero: 'Unisex',
    nombre: 'PLAYERA OVERSIZE UNISEX',
    precios: { base: 250, XXG: 250 },
    imagen: 'https://media.istockphoto.com/id/1491056555/photo/woman-in-a-white-t-shirt-poses-near-a-white-wall-hand-gestures-and-emotions-studio.jpg?s=2048x2048&w=is&k=20&c=qu6zGAhhaEyoLe4VWejb1LaZku2saNR-M09Wp_OmxNQ=',
  },
];

export const productosPolos: Producto[] = [
  {
    id: 'C0550',
    genero: 'Caballero',
    nombre: 'POLO CABALLERO',
    precios: { base: 180, XXG: 200 },
    imagen: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'D0550',
    genero: 'Dama',
    nombre: 'POLO DAMA',
    precios: { base: 180, XXG: 200 },
    imagen: 'https://images.pexels.com/photos/5698854/pexels-photo-5698854.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'N0501',
    genero: 'Niño',
    nombre: 'POLO NIÑO',
    precios: { base: 150, XXG: 170 },
    imagen: 'https://images.pexels.com/photos/5698852/pexels-photo-5698852.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '9005C',
    genero: 'Caballero',
    nombre: 'POLO PREMIUM CABALLERO',
    precios: { base: 200, XXG: 220 },
    imagen: 'https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '9005D',
    genero: 'Dama',
    nombre: 'POLO PREMIUM DAMA',
    precios: { base: 200, XXG: 220 },
    imagen: 'https://images.pexels.com/photos/5698857/pexels-photo-5698857.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '9008C',
    genero: 'Caballero',
    nombre: 'POLO PREMIUM CABALLERO POLIESTER',
    precios: { base: 220, XXG: 240 },
    imagen: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '9008D',
    genero: 'Dama',
    nombre: 'POLO PREMIUM DAMA POLIESTER',
    precios: { base: 220, XXG: 240 },
    imagen: 'https://images.pexels.com/photos/5698854/pexels-photo-5698854.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: '9008ML',
    genero: 'Caballero',
    nombre: 'POLO PREMIUM POLIESTER CABALLERO MANGA LARGA',
    precios: { base: 250, XXG: 270 },
    imagen: 'https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const productosDeportiva: Producto[] = [
  {
    id: 'C1302',
    genero: 'Caballero',
    nombre: 'PLAYERA DRY FIT CABALLERO',
    precios: { base: 160, XXG: 180 },
    imagen: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'D1302',
    genero: 'Dama',
    nombre: 'PLAYERA DRY FIT DAMA',
    precios: { base: 160, XXG: 180 },
    imagen: 'https://images.pexels.com/photos/5698854/pexels-photo-5698854.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'N1302',
    genero: 'Niño',
    nombre: 'PLAYERA DRY FIT NIÑO',
    precios: { base: 130, XXG: 150 },
    imagen: 'https://images.pexels.com/photos/5698852/pexels-photo-5698852.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'C1304',
    genero: 'Caballero',
    nombre: 'PLAYERA DRY FIT CABALLERO MANGA LARGA',
    precios: { base: 180, XXG: 200 },
    imagen: 'https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'D1304',
    genero: 'Dama',
    nombre: 'PLAYERA DRY FIT DAMA MANGA LARGA',
    precios: { base: 180, XXG: 200 },
    imagen: 'https://images.pexels.com/photos/5698857/pexels-photo-5698857.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'N1304',
    genero: 'Niño',
    nombre: 'PLAYERA DRY FIT NIÑO MANGA LARGA',
    precios: { base: 150, XXG: 170 },
    imagen: 'https://images.pexels.com/photos/5698856/pexels-photo-5698856.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'C1502',
    genero: 'Caballero',
    nombre: 'POLO DRY FIT CABALLERO',
    precios: { base: 230, XXG: 250 },
    imagen: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'D1502',
    genero: 'Dama',
    nombre: 'POLO DRY FIT DAMA',
    precios: { base: 230, XXG: 250 },
    imagen: 'https://images.pexels.com/photos/5698854/pexels-photo-5698854.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'C1504',
    genero: 'Caballero',
    nombre: 'POLO DRY FIT CABALLERO MANGA LARGA',
    precios: { base: 260, XXG: 280 },
    imagen: 'https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'D1504',
    genero: 'Dama',
    nombre: 'POLO DRY FIT DAMA MANGA LARGA',
    precios: { base: 260, XXG: 280 },
    imagen: 'https://images.pexels.com/photos/5698857/pexels-photo-5698857.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const productosSudaderas: Producto[] = [
  {
    id: 'C0700',
    genero: 'Unisex',
    nombre: 'SUDADERA CUELLO REDONDO',
    precios: { base: 240, XXG: 260 },
    imagen: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    id: 'C0701',
    genero: 'Unisex',
    nombre: 'SUDADERA CAPUCHA Y CANGURERA',
    precios: { base: 300, XXG: 320 },
    imagen: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'C0702',
    genero: 'Unisex',
    nombre: 'SUDADERA CAPUCHA CANGURERA Y CIERRE',
    precios: { base: 320, XXG: 340 },
    imagen: 'https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'C0703',
    genero: 'Unisex',
    nombre: 'SUDADERA 1/4 CIERRE',
    precios: { base: 240, XXG: 260 },
    imagen: 'https://images.pexels.com/photos/5698854/pexels-photo-5698854.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'N0700',
    genero: 'Niño',
    nombre: 'SUDADERA CUELLO REDONDO NIÑO',
    precios: { base: 200, XXG: 220 },
    imagen: 'https://images.pexels.com/photos/5698852/pexels-photo-5698852.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'N0701',
    genero: 'Niño',
    nombre: 'SUDADERA CAPUCHA Y CANGURERA NIÑO',
    precios: { base: 260, XXG: 280 },
    imagen: 'https://images.pexels.com/photos/5698856/pexels-photo-5698856.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const productosCamisas: Producto[] = [
  {
    id: 'C604',
    genero: 'Caballero',
    nombre: 'CAMISA OXFORD MANGA CORTA',
    precios: { base: 290, XXG: 310 },
    imagen: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'D604',
    genero: 'Dama',
    nombre: 'CAMISA OXFORD MANGA CORTA',
    precios: { base: 290, XXG: 310 },
    imagen: 'https://images.pexels.com/photos/5698854/pexels-photo-5698854.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'C605',
    genero: 'Caballero',
    nombre: 'CAMISA OXFORD MANGA LARGA',
    precios: { base: 330, XXG: 350 },
    imagen: 'https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'D605',
    genero: 'Dama',
    nombre: 'CAMISA OXFORD MANGA LARGA',
    precios: { base: 330, XXG: 350 },
    imagen: 'https://images.pexels.com/photos/5698857/pexels-photo-5698857.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'C606',
    genero: 'Caballero',
    nombre: 'CAMISA GABARDINA MANGA CORTA',
    precios: { base: 290, XXG: 310 },
    imagen: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'D606',
    genero: 'Dama',
    nombre: 'CAMISA GABARDINA MANGA CORTA',
    precios: { base: 290, XXG: 310 },
    imagen: 'https://images.pexels.com/photos/5698854/pexels-photo-5698854.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'C607',
    genero: 'Caballero',
    nombre: 'CAMISA GABARDINA MANGA LARGA',
    precios: { base: 330, XXG: 350 },
    imagen: 'https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'D607',
    genero: 'Dama',
    nombre: 'CAMISA GABARDINA MANGA LARGA',
    precios: { base: 330, XXG: 350 },
    imagen: 'https://images.pexels.com/photos/5698857/pexels-photo-5698857.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'C600',
    genero: 'Caballero',
    nombre: 'CAMISA MEZCLILLA MANGA CORTA',
    precios: { base: 350, XXG: 370 },
    imagen: 'https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'D600',
    genero: 'Dama',
    nombre: 'CAMISA MEZCLILLA MANGA CORTA',
    precios: { base: 350, XXG: 370 },
    imagen: 'https://images.pexels.com/photos/5698854/pexels-photo-5698854.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'C601',
    genero: 'Caballero',
    nombre: 'CAMISA MEZCLILLA MANGA LARGA',
    precios: { base: 360, XXG: 380 },
    imagen: 'https://images.pexels.com/photos/5698853/pexels-photo-5698853.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    id: 'D601',
    genero: 'Dama',
    nombre: 'CAMISA MEZCLILLA MANGA LARGA',
    precios: { base: 360, XXG: 380 },
    imagen: 'https://images.pexels.com/photos/5698857/pexels-photo-5698857.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export const productosGorras: Producto[] = [
  {
    id: 'G001',
    genero: 'Unisex',
    nombre: 'GORRA 6 PANELES',
    precios: { base: 60},
    imagen: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRsFnUp62jHymbEioNQUgCE3OYCKHrZjZvujQJnaBgvbcaGTR1ArYyrFSx3Y7IrcZrxD6IV_ufLszw5aSbkLifldei9SKShmAsXvy3epC6-fYA0VK6ZWXC4zFEBjdWsuzddM7yKBQ&usqp=CAc',
    unitalla: true,
    descripcion: 'Gorra acrilico de 6 paneles ajustable.',
  },
  {
    id: 'G002',
    genero: 'Unisex',
    nombre: 'GORRA TIPO TRUCKER',
    precios: { base: 80},
    imagen: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQi-e9nW2rmPJvUqXqZvgykAVdkvW9-as6Uh6u1CvUv8nzy3n1R9HkNRhcSVn_fivIwQGPgCz_pR4rwikB0RJWECNgWvBTkC87heR_ve-9NyM1A5BbXdhRsRQ&usqp=CAc',
    unitalla: true,
    descripcion: 'Gorra acrilico con malla en la parte posterior (Trucker).',
  },
  {
    id: 'G003',
    genero: 'Unisex',
    nombre: 'GORRA YUPOONG',
    precios: { base: 250},
    imagen: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTONhAixdX6I150q_qRxoHZbClaR7bQ6wMDs9NTd4cttZrT1MLwEGZyGBSXTQZq8mT2GvgwCIzTN4Q9J7OLfpjSW9wVAFMreYqrqE0H0Q23ySR8Mp4AXnEeGmnoA38qbKWSF0944f4&usqp=CAc',
    unitalla: true,
    descripcion: 'Gorra acrilico rigido con malla en la parte posterior.',
  },
   {
    id: 'G004',
    genero: 'Unisex',
    nombre: 'GORRA BICOLOR',
    precios: { base: 250},
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4UnwmUB8qm46bVwfwQT8iNTvcl4FH9fLBGQ&s',
    unitalla: true,
    descripcion: 'Gorra acrilico con visera diferene color.',
  },
  {
    id: 'G005',
    genero: 'Unisex',
    nombre: 'GORRA GABARDINA',
    precios: { base: 120},
    imagen: 'https://i.pinimg.com/1200x/34/1e/ac/341eac6866a3958654c1548da79a88c4.jpg',
    unitalla: true,
    descripcion: 'Gorra gabardina con ajuste corredizo.',
  },
];

export const productosPorCategoria: Record<Categoria, Producto[]> = {
  Playeras: productosPlayeras,
  Polos: productosPolos,
  Deportiva: productosDeportiva,
  Sudaderas: productosSudaderas,
  Camisas: productosCamisas,
  Gorras: productosGorras,
};

export const categorias: Categoria[] = ['Playeras', 'Polos', 'Deportiva', 'Sudaderas', 'Camisas', 'Gorras'];

export const generosPorCategoria: Record<Categoria, string[]> = {
  Playeras: ['Todos', 'Caballero', 'Dama', 'Juvenil', 'Niño', 'Bebé', 'Unisex'],
  Polos: ['Todos', 'Caballero', 'Dama', 'Niño'],
  Deportiva: ['Todos', 'Caballero', 'Dama', 'Niño'],
  Sudaderas: ['Todos', 'Unisex', 'Niño'],
  Camisas: ['Todos', 'Caballero', 'Dama'],
  Gorras: ['Todos'],
};

export const tallas: Talla[] = ['CH', 'MD', 'GR', 'XG', 'XXG'];

// Backward compat
export const productos = productosPlayeras;
export const filtros = generosPorCategoria.Playeras as unknown as readonly string[];
export type Filtro = string;
