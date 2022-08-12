const productos = [
  {
      nombre: "Café Chico",
      precio: 180,
      imagen: "cafe_chico",
      categoriaId: 1
    },
    {
      nombre: "Café Doble",
      precio: 200,
      imagen: "cafe_doble",
      categoriaId: 1
    },
    {
      nombre: "Cortado",
      precio: 180,
      imagen: "cafe_cortado",
      categoriaId: 1
    },
    {
      nombre: "Cafe con Grapa",
      precio: 500,
      imagen: "cafe_doble",
      categoriaId: 1
    },
    {
      nombre: "Cafe en jarro",
      precio: 180,
      imagen: "cafe_jarro",
      categoriaId: 1
    },
    {
      nombre: "Cortado Chico",
      precio: 170,
      imagen: "cortado_chico",
      categoriaId: 1
    },
    {
      nombre: "Te (Varios sabores)",
      precio: 180,
      imagen: "te",
      categoriaId: 1
    },
    {
      nombre: "Capuchino Grande",
      precio: 250,
      imagen: "capuchino",
      categoriaId: 1
    },
    {
      nombre: "Tallarin de Huevo",
      precio: 700,
      imagen: "tallarin_huevo",
      categoriaId: 6
    },
    {
      nombre: "Tallarin de Espinaca",
      precio: 700,
      imagen: "tallarin_espinaca",
      categoriaId: 6
    },
    {
      nombre: "Ñoquis de Papa ",
      precio: 700,
      imagen: "ñoqui_papa",
      categoriaId: 6
    },
    {
      nombre: "Ñonquis de Espinaca",
      precio: 700,
      imagen: "ñoqui_espinaca",
      categoriaId: 6
    },
    {
      nombre: "Sorrentinos de Jamon y Queso",
      precio: 900,
      imagen: "sorrentino_jyq",
      categoriaId: 6
    },
    {
      nombre: "Ravioles de Ternera",
      precio: 850,
      imagen: "ravioles_ternera",
      categoriaId: 6
    },
    {
      nombre: "Ravioles de Pescado",
      precio: 850,
      imagen: "ravioles_pescado",
      categoriaId: 6
    },
    {
      nombre: "Ravioles de Ricota y Espinaca",
      precio: 850,
      imagen: "Ravioles_espinaca",
      categoriaId: 6
    },
    {
      nombre: "Lasagna",
      precio: 900,
      imagen: "lasagna",
      categoriaId: 6
    },
    {
      nombre: "Sorrentinos de Osobuco",
      precio: 950,
      imagen: "sorrentino_osobuco",
      categoriaId: 6
    },
    {
      nombre: "Sorrentinos de Cerdo",
      precio: 950,
      imagen: "sorrentino_jyq",
      categoriaId: 6
    },
    {
      nombre: "Sorrentinos Vegetariano",
      precio: 800,
      imagen: "sorrentino_vegetariano",
      categoriaId: 6
    },
    {
      nombre: "Malfattis rellenps de Muzzarella",
      precio: 950,
      imagen: "manfatti",
      categoriaId: 6
    },
    {
      nombre: "Canelon de Pollo",
      precio: 800,
      imagen: "canelon_pollo",
      categoriaId: 6
    },
    {
      nombre: "Canelon de Choclo",
      precio: 800,
      imagen: "canelon_choclo",
      categoriaId: 6
    },
    {
      nombre: "Canelon de Verdura",
      precio: 800,
      imagen: "canelon_verdura",
      categoriaId: 6
    },
    {
      nombre: "Costeleta con Guarnicion",
      precio: 1000,
      imagen: "costeleta_guarnicion",
      categoriaId: 9
    },
    {
      nombre: "Bife de Pollo con Guarnicion",
      precio: 900,
      imagen: "bife_con_guarnicion",
      categoriaId: 9
    },
    {
      nombre: "Pollo a la Pizza",
      precio: 1000,
      imagen: "pollo_a_la_pizza",
      categoriaId: 9
    },
    {
      nombre: "Lomo a la friulana",
      precio: 1300,
      imagen: "lomo-a-la-friulana",
      categoriaId: 9
    },
    {
      nombre: "Costeleta a la Riojana",
      precio: 1100,
      imagen: "costeleta_riojana",
      categoriaId: 9
    },
    {
      nombre: "Trucha Rellena",
      precio: 2500,
      imagen: "trucha_relllena",
      categoriaId: 9
    },
    {
      nombre: "Ciabatta de Pollo",
      precio: 800,
      imagen: "ciabatta",
      categoriaId: 7
    },
    {
      nombre: "Lomo Completo",
      precio: 1000,
      imagen: "lomo",
      categoriaId: 7
    },
    {
      nombre: "Hamburguesa Friuli",
      precio: 900,
      imagen: "hamburguesa",
      categoriaId: 7
    },
    {
      nombre: "Vegetariano",
      precio: 800,
      imagen: "vegetariano",
      categoriaId: 7
    },
    {
      nombre: "Muzzarella",
      precio: 800,
      imagen: "pizza_muzzarela",
      categoriaId: 8
    },
    {
      nombre: "Especial",
      precio: 900,
      imagen: "pizza_especial",
      categoriaId: 8
    },
    {
      nombre: "Del Bosque",
      precio: 1000,
      imagen: "pizza_muzzarela",
      categoriaId: 8
    },
    {
      nombre: "Napolitana",
      precio: 900,
      imagen: "pizza_napolitana",
      categoriaId: 8
    },
    {
      nombre: "Fugazzeta",
      precio: 900,
      imagen: "pizza_fugazzeta",
      categoriaId: 8
    },
    {
      nombre: "Palmito y Salsa Golf",
      precio: 1000,
      imagen: "pizza_palmito_y_salsa_golf",
      categoriaId: 8
    },
    {
      nombre: "Salteado de Pollo",
      precio: 1000,
      imagen: "pizza_salteado",
      categoriaId: 5
    },
    {
      nombre: "Salame Caroyence",
      precio: 1000,
      imagen: "pizza_salame_caroyence",
      categoriaId: 8
    },
    {
      nombre: "Roquefort y Nueces",
      precio: 1000,
      imagen: "pizza_roquefort",
      categoriaId: 8
    },
    {
      nombre: "Especial con Anchoa",
      precio: 1000,
      imagen: "pizza_especial",
      categoriaId: 8
    },
    {
      nombre: "Tabla de Fiambres",
      precio: 2500,
      imagen: "tabla-de-fiambre",
      categoriaId: 4
    },
    {
      nombre: "Tabla de Mar",
      precio: 3000,
      imagen: "tabla-de-mar",
      categoriaId: 4
    },
    {
      nombre: "Tabla de Appetizer",
      precio: 2000,
      imagen: "tabla-de-mar",
      categoriaId: 4
    },
    {
      nombre: "Papas Con Cheddar",
      precio: 600,
      imagen: "papas-con-chedar",
      categoriaId: 2
    },
    {
      nombre: "Papas Gratinadas",
      precio: 600,
      imagen: "papas_gratinadas",
      categoriaId: 2
    },
    {
      nombre: "Porcion de Papas Fritas",
      precio: 500,
      imagen: "papas_fritas",
      categoriaId: 2
    },
    {
      nombre: "Papas Con Huevo",
      precio: 600,
      imagen: "papas_gratinadas",
      categoriaId: 2
    },
    {
      nombre: "Cubos Crocantes de Queso",
      precio: 700,
      imagen: "cubos_crocamtes",
      categoriaId: 2
    },
    {
      nombre: "Porcion de Rabas",
      precio: 1200,
      imagen: "rabas",
      categoriaId: 2
    },
    {
      nombre: "Aros de Cebolla",
      precio: 600,
      imagen: "aros_cebolla",
      categoriaId: 2
    },
    {
      nombre: "Cazuela de Pejerrey",
      precio: 1100,
      imagen: "pejerrey",
      categoriaId: 2
    },
    {
      nombre: "Cazuela de Langostinos",
      precio: 1300,
      imagen: "langostinos",
      categoriaId: 2
    },
    {
      nombre: "Cazuela de Cornalitos",
      precio: 1100,
      imagen: "cornalitos",
      categoriaId: 2
    },
    {
      nombre: "Triangulos de Pescado",
      precio: 800,
      imagen: "triangulos_pescado",
      categoriaId: 2
    },
    {
      nombre: "Tomates Empanizados",
      precio: 800,
      imagen: "tomates_empanizados",
      categoriaId: 2
    },
    {
      nombre: "Empanadas Criollas",
      precio: 130,
      imagen: "criolla_salada",
      categoriaId: 3
    },
    {
      nombre: "Empanadas Criollas Dulces",
      precio: 130,
      imagen: "criolla_salada",
      categoriaId: 3
    },
    {
      nombre: "Empanadas Árabes",
      precio: 130,
      imagen: "empanadas_arabes",
      categoriaId: 3
    },
    {
      nombre: "Empanadas de Jamon y Queso",
      precio: 130,
      imagen: "empanada_jamon_y_queso",
      categoriaId: 3
    },
    {
      nombre: "Frico",
      precio: 800,
      imagen: "frico",
      categoriaId: 3
    },
    {
      nombre: "Rognosa",
      precio: 900,
      imagen: "prognosa",
      categoriaId: 3
    },
    {
      nombre: "Lidric con Chinchin",
      precio: 700,
      imagen: "salsa_pescado",
      categoriaId: 3
    },
    {
      nombre: "Ensalada Cesar",
      precio: 800,
      imagen: "Ensalada_cesar",
      categoriaId: 10
    },
    {
      nombre: "Ensalada de Mar",
      precio: 1000,
      imagen: "ensalada-de-mar",
      categoriaId: 10
    },
    {
      nombre: "Arma tu Ensalada",
      precio: 800,
      imagen: "ensalada_arma",
      categoriaId: 10
    },
    {
      nombre: "Costeleta con guarnición",
      precio: 1000,
      imagen: "costeleta_guarnicion",
      categoriaId: 11
    },
    {
      nombre: "Bife de Pollo con guarnicion",
      precio: 900,
      imagen: "bife_con_guarnicion",
      categoriaId: 11
    },
    {
      nombre: "Pollo a la pizza",
      precio: 1000,
      imagen: "pollo_a_la_pizza",
      categoriaId: 11
    },
    {
      nombre: "Lomo a la Friulana",
      precio: 1300,
      imagen: "lomo-a-la-friulana",
      categoriaId: 11
    },
    {
      nombre: "Costeleta a la Riojana",
      precio: 1100,
      imagen: "costeleta_riojana",
      categoriaId: 11
    },
    {
      nombre: "Trucha Rellena",
      precio: 2500,
      imagen: "trucha_relllena",
      categoriaId: 11
    },
    {
      nombre: "Patitas de pollo con fritas",
      precio: 900,
      imagen: "patitas_pollo",
      categoriaId: 5
    },
    {
      nombre: "Trianulos de jamon y queso con fritas",
      precio: 800,
      imagen: "triangulos_pescado",
      categoriaId: 5
    }



]

export {
  productos 
}