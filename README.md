<!DOCTYPE html>

<html lang="es">

<head>

  <meta charset="UTF-8">

  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <title>Makeup Girl’s</title>

  <style>

   

    body {

      font-family: Arial, sans-serif;

      margin: 0;

      padding: 0;

      background-color: #f9f9f9;

    }

    header {

      background-color: #e91e63;

      color: white;

      padding: 15px 0;

      text-align: center;

    }

    nav {

      display: flex;

      justify-content: center;

      background-color: #333;

    }

    nav a {

      color: white;

      padding: 14px 20px;

      text-decoration: none;

      text-align: center;

    }

    nav a:hover {

      background-color: #ddd;

      color: blue;

    }

    .container {

      max-width: 1200px;

      margin: 20px auto;

      padding: 20px;

      background-color: white;

      box-shadow: 0 0 10px rgba(0,0,0,0.1);

    }

    .section-title {

      text-align: center;

      color: #e91e63;

    }

    .gallery {

      display: flex;

      justify-content: space-around;

      flex-wrap: wrap;

    }

    .product {

      display: inline-block;

      width: 30%;

      text-align: center;

      margin-bottom: 20px;

      border: solid 2px pink;

      border-radius: 8px;

      padding: 10px;

      background-color: white;

    }

    .product img {

      width: 100%;

      height: auto;

      border-radius: 8px;

    }

    .product h3 {

      color: pink;

    }

    .product p {

      color: black;

    }

    .product button {

      background-color: #e91e63;

      color: white;

      border: none;

      padding: 10px;

      cursor: pointer;

      border-radius: 5px;

    }

    .product button:hover {

      background-color: #d81b60;

    }

    

    .modal {

      display: none;

      position: fixed;

      z-index: 10;

      top: 0;

      width: 100%;

      height: 100%;

      overflow: auto;

      background-color: rgba(0, 0, 0, 0.5);

    }

    .modal-content {

      background-color: #fff;

      margin: 10% auto;

      padding: 20px;

      border: 2px solid #e91e63;

      width: 60%;

      border-radius: 10px;

    }

    .close {

      color: #e91e63;

      float: right;

      font-size: 28px;

      font-weight: bold;

      cursor: pointer;

    }

    

    #carrito {

      margin-top: 20px;

      background-color: #fff;

      padding: 20px;

      border-radius: 8px;

      box-shadow: 0 0 10px rgba(0,0,0,0.1);

    }

    #carrito ul {

      list-style: none;

      padding: 0;

    }

    #carrito li {

      margin-bottom: 10px;

    }

    #carrito button {

      background-color: #e91e63;

      color: white;

      border: none;

      padding: 10px;

      cursor: pointer;

      border-radius: 5px;

    }

    #carrito button:hover {

      background-color: #d81b60;

    }

    footer {

      background-color: #333;

      color: white;

      text-align: center;

      padding: 10px 0;

      position: fixed;

      width: 100%;

      bottom: 0;

    }

  </style>

</head>

<body>

  <header>

    <h1>Bienvenidos a Makeup Girl’s</h1>

    <p>Consejos y productos recomendados para realzar tu belleza.</p>

  </header>

  <nav>

    <a href="#productos">Productos</a>

    <a href="#contacto">Contacto</a>

  </nav>

  <div class="container">

    <section id="productos">

      <h2 class="section-title">Productos Recomendados</h2>

      <div class="gallery">

        <!-- Producto 1 -->

        <div class="product">
h
          <img src="https://bellisima.mx/cdn/shop/products/flawleess-stay-concealer-c4-beauty-creations.jpg?v=1740078135" alt="Corrector liquido - Beauty Creations">

          <h3>Corrector líquido - Beauty Creations</h3>

          <p>MXN$100.00</p>

          <button onclick="verDetalles('Corrector liquido - Beauty Creations', 'MXN$100.00')">Ver detalles</button>

          <button onclick="agregarAlCarrito('Corrector liquido - Beauty Creations', 100)">Agregar al carrito</button>

        </div>

        <!-- Producto 2 -->

        <div class="product">

          <img src="https://www.bellequeencosmetics.com/cdn/shop/products/3050108_1_800x600.jpg?v=1643998203" alt="Corrector líquido - Bissu">

          <h3>Corrector líquido - Bissu</h3>

          <p>MXN$65.00</p>

          <button onclick="verDetalles('Corrector liquido - Bissu', 'MXN$65.00')">Ver detalles</button>

          <button onclick="agregarAlCarrito('Corrector liquido - Bissu', 65)">Agregar al carrito</button>

        </div>

        <!-- Producto 3 -->

        <div class="product">

          <img src="https://dubellay.mx/cdn/shop/products/SAN-CORR1072-03_1000x.jpg?v=1657314185" alt="Corrector líquido - Saniye">

          <h3>Corrector líquido - Saniye</h3>

          <p>MXN$50.00</p>
         
          <button onclick="verDetalles('Corrector liquido - Saniye', 'MXN$50.00')">Ver detalles</button>

          <button onclick="agregarAlCarrito('Corrector liquido - Saniye', 50)">Agregar al carrito</button>


        </div>

        <div class="product">

          <img src="https://bissu.com/media/catalog/product/3/0/3056500_1_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700" alt="Polvo Fijador - Bissu">

          <h3>Polvo Fijador - Bissu</h3>

          <p>MXN$150.00</p>

          <button onclick="verDetalles('Polvo Fijador - Bissu', 'MXN$150.00')">Ver detalles</button>

          <button onclick="agregarAlCarrito('Polvo Fijador - Bissu', 150)">Agregar al carrito</button>

        </div>

        <div class="product">

          <img src="https://maimakeup.mx/cdn/shop/files/MousseMatteLipstick-2024-07-22T121048.629.png?v=1721692883" alt="Lip Gloss - Italia">

          <h3>Lip Gloss - Italia Deluxe</h3>

          <p>MXN$69.00</p>

          <button onclick="verDetalles('Lip Gloss - Italia Deluxe', 'MXN$69.00')">Ver detalles</button>

          <button onclick="agregarAlCarrito('Lip Gloss - Italia Deluxe', 69)">Agregar al carrito</button>


        </div>

        <div class="product">

          <img src="https://cdn.shoplightspeed.com/shops/665477/files/60317912/1652x1652x2/italia-deluxe-lipgloss-plumping-italia-deluxe-fill.jpg" alt="Plumping Gloss - Italia">

          <h3>Plumping Gloss - Italia Deluxe</h3>

          <p>MXN$69.00</p>

          <button onclick="verDetalles('Plumping Gloss - Italia Deluxe', 'MXN$69.00')">Ver detalles</button>

          <button onclick="agregarAlCarrito('Plumping Gloss - Italia Deluxe', 69)">Agregar al carrito</button>


        </div>

        <div class="product">

          <img src="https://mayoreo.zelarshop.com/img/p/1/0/0/7/1007-large_default.jpg" alt="Rimel - Prosa">

          <h3>Rimel - Prosa</h3>

          <p>MXN$85.00</p>

          <button onclick="verDetalles('Rimel - Prosa', 'MXN$85.00')">Ver detalles</button>

          <button onclick="agregarAlCarrito('Rimel - Prosa', 85)">Agregar al carrito</button>

        </div>

        <div class="product">

          <img src="https://exotik.store/cdn/shop/files/016806_580x.jpg?v=1724446101" alt="Rubor - Bissu">

          <h3>Rubor - Bissu</h3>

          <p>MXN$60.00</p>

           <button onclick="verDetalles('Rubor - Bissu', 'MXN$60.00')">Ver detalles</button>

           <button onclick="agregarAlCarrito('Rubor - Bissu', 60)">Agregar al carrito</button>


        </div>

        <div class="product">

          <img src="https://dcdn-us.mitiendanube.com/stores/001/733/557/products/enchinador11-12781765525ac8b2ab16288745134995-640-0.jpeg" alt="Rizador - By Apple">

          <h3>Rizador de Pestañas - By Apple</h3>

          <p>MXN$120.00</p>

          <button onclick="verDetalles('Rizador de Pestañas - By Apple', 'MXN$120.00')">Ver detalles</button>

          <button onclick="agregarAlCarrito('Rizador de Pestañas - By Apple', 120)">Agregar al carrito</button>

        </div>

      <script>
         function verDetalles(nombre, precio) {
           alert("Poducto: " + nombre + "\nPrecio: " + precio);
        }
      </script>

      <a href="carrito.html">Ir al carrito</a>

      <script src="script.js"></script>

    </section>

    <section id="contacto">

      <h2 class="section-title">Contáctanos</h2>

      <form action="#" method="POST">

        <label for="nombre">Nombre:</label><br>

        <input type="text" id="nombre" name="nombre" required><br><br>

        <label for="email">Correo Electrónico:</label><br>

        <input type="email" id="email" name="email" required><br><br>

        <label for="mensaje">Mensaje:</label><br>

        <textarea id="mensaje" name="mensaje" rows="4" required></textarea><br><br>

        <input type ="submit" value="Enviar">

      </form>

    </section>

  </div>

  <footer>

    <p>2025 Makeup Girl´s</p>

  </footer>

</body>

</html>
