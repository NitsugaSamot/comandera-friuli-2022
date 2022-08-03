const productos = [
    {
        nombre: "Café Chico",
        precio: 180,
        imagen: "cafe_01",
        categoriaId: 1
      },
      {
        nombre: "Café Doble",
        precio: 200,
        imagen: "cafe_02",
        categoriaId: 1
      },
      {
        nombre: "Cortado",
        precio: 180,
        imagen: "cafe_03",
        categoriaId: 1
      },
      {
        nombre: "Cafe con Grapa",
        precio: 500,
        imagen: "cafe_04",
        categoriaId: 1
      },
      {
        nombre: "Cafe en jarro",
        precio: 54.9,
        imagen: "cafe_05",
        categoriaId: 1
      },
      {
        nombre: "Cortado Chico",
        precio: 39.9,
        imagen: "cafe_06",
        categoriaId: 1
      },
      {
        nombre: "Te (Varios sabores)",
        precio: 59.9,
        imagen: "cafe_07",
        categoriaId: 1
      },
      {
        nombre: "Café Caliente Capuchino Grande",
        precio: 59.9,
        imagen: "cafe_08",
        categoriaId: 1
      },
      {
        nombre: "Café Mocha Caliente Mediano",
        precio: 49.9,
        imagen: "cafe_09",
        categoriaId: 1
      },
      {
        nombre: "Café Mocha Frio con Caramelo Mediano",
        precio: 49.9,
        imagen: "cafe_10",
        categoriaId: 1
      },
      {
        nombre: "Café Mocha Frio con Chocolate Mediano",
        precio: 49.9,
        imagen: "cafe_11",
        categoriaId: 1
      },
      {
        nombre: "Café Espresso",
        precio: 29.9,
        imagen: "cafe_12",
        categoriaId: 1
      },
      {
        nombre: "Café Capuchino Grande con Caramelo",
        precio: 59.9,
        imagen: "cafe_13",
        categoriaId: 1
      },
      {
        nombre: "Café Caramelo Grande",
        precio: 59.9,
        imagen: "cafe_14",
        categoriaId: 1
      },
      {
        nombre: "Tallarin de Huevo",
        precio: 700,
        imagen: "donas_01",
        categoriaId: 6
      },
      {
        nombre: "Tallarin de Espinaca",
        precio: 700,
        imagen: "donas_02",
        categoriaId: 6
      },
      {
        nombre: "Ñoquis de Papa ",
        precio: 700,
        imagen: "donas_03",
        categoriaId: 6
      },
      {
        nombre: "Ñonquis de Espinaca",
        precio: 700,
        imagen: "donas_04",
        categoriaId: 6
      },
      {
        nombre: "Sorrentinos de Jamon y Queso",
        precio: 900,
        imagen: "donas_05",
        categoriaId: 6
      },
      {
        nombre: "Ravioles de Ternera",
        precio: 850,
        imagen: "donas_06",
        categoriaId: 6
      },
      {
        nombre: "Ravioles de Pescado",
        precio: 850,
        imagen: "donas_07",
        categoriaId: 6
      },
      {
        nombre: "Ravioles de Ricota y Espinaca",
        precio: 850,
        imagen: "donas_08",
        categoriaId: 6
      },
      {
        nombre: "Lasagna",
        precio: 900,
        imagen: "donas_09",
        categoriaId: 6
      },
      {
        nombre: "Sorrentinos de Osobuco",
        precio: 950,
        imagen: "donas_10",
        categoriaId: 6
      },
      {
        nombre: "Sorrentinos de Cerdo",
        precio: 950,
        imagen: "donas_11",
        categoriaId: 6
      },
      {
        nombre: "Sorrentinos Vegetariano",
        precio: 800,
        imagen: "donas_12",
        categoriaId: 6
      },
      {
        nombre: "Malfattis rellenps de Muzzarella",
        precio: 950,
        imagen: "donas_13",
        categoriaId: 6
      },
      {
        nombre: "Canelon de Pollo",
        precio: 800,
        imagen: "donas_14",
        categoriaId: 6
      },
      {
        nombre: "Canelon de Choclo",
        precio: 800,
        imagen: "donas_14",
        categoriaId: 6
      },
      {
        nombre: "Canelon de Verdura",
        precio: 800,
        imagen: "donas_14",
        categoriaId: 6
      },
      {
        nombre: "Costeleta con Guarnicion",
        precio: 1000,
        imagen: "galletas_01",
        categoriaId: 9
      },
      {
        nombre: "Bife de Pollo con Guarnicion",
        precio: 900,
        imagen: "galletas_02",
        categoriaId: 9
      },
      {
        nombre: "Pollo a la Pizza",
        precio: 1000,
        imagen: "galletas_03",
        categoriaId: 9
      },
      {
        nombre: "Lomo a la friulana",
        precio: 1300,
        imagen: "galletas_04",
        categoriaId: 9
      },
      {
        nombre: "Costeleta a la Riojana",
        precio: 1100,
        imagen: "galletas_05",
        categoriaId: 9
      },
      {
        nombre: "Trucha Rellena",
        precio: 2500,
        imagen: "galletas_06",
        categoriaId: 9
      },
      {
        nombre: "Ciabatta de Pollo",
        precio: 800,
        imagen: "hamburguesas_01",
        categoriaId: 7
      },
      {
        nombre: "Lomo Completo",
        precio: 1000,
        imagen: "hamburguesas_02",
        categoriaId: 7
      },
      {
        nombre: "Hamburguesa Friuli",
        precio: 900,
        imagen: "hamburguesas_03",
        categoriaId: 7
      },
      {
        nombre: "Vegetariano",
        precio: 800,
        imagen: "hamburguesas_04",
        categoriaId: 7
      },
      {
        nombre: "Muzzarella",
        precio: 800,
        imagen: "pastel_01",
        categoriaId: 8
      },
      {
        nombre: "Especial",
        precio: 900,
        imagen: "pastel_02",
        categoriaId: 8
      },
      {
        nombre: "Del Bosque",
        precio: 1000,
        imagen: "pastel_03",
        categoriaId: 8
      },
      {
        nombre: "Napolitana",
        precio: 900,
        imagen: "pastel_04",
        categoriaId: 8
      },
      {
        nombre: "Fugazzeta",
        precio: 900,
        imagen: "pastel_05",
        categoriaId: 8
      },
      {
        nombre: "Palmito y Salsa Golf",
        precio: 1000,
        imagen: "pastel_06",
        categoriaId: 8
      },
      {
        nombre: "Salteado de Pollo",
        precio: 1000,
        imagen: "pizzas_01",
        categoriaId: 5
      },
      {
        nombre: "Salame Caroyence",
        precio: 1000,
        imagen: "pizzas_02",
        categoriaId: 8
      },
      {
        nombre: "Roquefort y Nueces",
        precio: 1000,
        imagen: "pizzas_03",
        categoriaId: 8
      },
      {
        nombre: "Especial con Anchoa",
        precio: 1000,
        imagen: "pizzas_04",
        categoriaId: 8
      },
      {
        nombre: "Tabla de Fiambres",
        precio: 2500,
        imagen: "pizzas_05",
        categoriaId: 4
      },
      {
        nombre: "Tabla de Mar",
        precio: 3000,
        imagen: "pizzas_06",
        categoriaId: 4
      },
      {
        nombre: "Tabla de Appetizer",
        precio: 2000,
        imagen: "pizzas_08",
        categoriaId: 4
      },
      {
        nombre: "Papas Con Cheddar",
        precio: 600,
        imagen: "pizzas_08",
        categoriaId: 2
      },
      {
        nombre: "Papas Gratinadas",
        precio: 600,
        imagen: "pizzas_08",
        categoriaId: 2
      },
      {
        nombre: "Porcion de Papas Fritas",
        precio: 500,
        imagen: "pizzas_08",
        categoriaId: 2
      },
      {
        nombre: "Papas Con Huevo",
        precio: 600,
        imagen: "pizzas_08",
        categoriaId: 2
      },
      {
        nombre: "Cubos Crocantes de Queso",
        precio: 700,
        imagen: "pizzas_08",
        categoriaId: 2
      },
      {
        nombre: "Porcion de Rabas",
        precio: 1200,
        imagen: "pizzas_08",
        categoriaId: 2
      },
      {
        nombre: "Aros de Cebolla",
        precio: 600,
        imagen: "pizzas_08",
        categoriaId: 2
      },
      {
        nombre: "Cazuela de Pejerrey",
        precio: 1100,
        imagen: "pizzas_08",
        categoriaId: 2
      },
      {
        nombre: "Cazuela de Langostinos",
        precio: 1300,
        imagen: "pizzas_08",
        categoriaId: 2
      },
      {
        nombre: "Cazuela de Cornalitos",
        precio: 1100,
        imagen: "pizzas_08",
        categoriaId: 2
      },
      {
        nombre: "Triangulos de Pescado",
        precio: 800,
        imagen: "pizzas_08",
        categoriaId: 2
      },
      {
        nombre: "Tomates Empanizados",
        precio: 800,
        imagen: "pizzas_08",
        categoriaId: 2
      },
      {
        nombre: "Empanadas",
        precio: 130,
        imagen: "pizzas_08",
        categoriaId: 3
      },
      {
        nombre: "Frico",
        precio: 800,
        imagen: "pizzas_08",
        categoriaId: 3
      },
      {
        nombre: "Rognosa",
        precio: 900,
        imagen: "pizzas_08",
        categoriaId: 3
      },
      {
        nombre: "Lidric con Chinchin",
        precio: 700,
        imagen: "pizzas_08",
        categoriaId: 3
      },
      {
        nombre: "Ensalada Cesar",
        precio: 800,
        imagen: "pizzas_08",
        categoriaId: 10
      },
      {
        nombre: "Ensalada de Mar",
        precio: 1000,
        imagen: "pizzas_08",
        categoriaId: 10
      },
      {
        nombre: "Arma tu Ensalada",
        precio: 800,
        imagen: "pizzas_08",
        categoriaId: 10
      },
      {
        nombre: "Costeleta con guarnición",
        precio: 1000,
        imagen: "pizzas_08",
        categoriaId: 11
      },
      {
        nombre: "Bife de Pollo con guarnicion",
        precio: 900,
        imagen: "pizzas_08",
        categoriaId: 11
      },
      {
        nombre: "Pollo a la pizza",
        precio: 1000,
        imagen: "pizzas_08",
        categoriaId: 11
      },
      {
        nombre: "Lomo a la Friulana",
        precio: 1300,
        imagen: "pizzas_08",
        categoriaId: 11
      },
      {
        nombre: "Costeleta a la Riojana",
        precio: 1100,
        imagen: "pizzas_08",
        categoriaId: 11
      },
      {
        nombre: "Trucha Rellena",
        precio: 2500,
        imagen: "pizzas_08",
        categoriaId: 11
      },
      {
        nombre: "Patitas de pollo con fritas",
        precio: 900,
        imagen: "pizzas_08",
        categoriaId: 5
      },
      {
        nombre: "Trianulos de jamon y queso con fritas",
        precio: 800,
        imagen: "pizzas_08",
        categoriaId: 5
      }



]

export {
    productos 
}