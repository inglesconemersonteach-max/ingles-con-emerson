export default {
  async fetch(request) {
    const url = new URL(request.url);
if (url.pathname === "/metodo") {
  return new Response(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Método | Inglés con Emerson</title>
      <style>
        body {
          font-family: Arial, Helvetica, sans-serif;
          max-width: 900px;
          margin: 0 auto;
          padding: 60px 25px;
          line-height: 1.7;
          color: #172033;
        }

        h1 {
          font-size: 48px;
          line-height: 1.1;
        }

        h2 {
          font-size: 32px;
          margin-top: 55px;
        }

        p {
          font-size: 18px;
          color: #566174;
        }

        .quote {
          margin: 35px 0;
          padding: 25px;
          border-left: 5px solid #172033;
          font-size: 24px;
          font-weight: bold;
        }

        .button {
          display: inline-block;
          margin-top: 25px;
          padding: 14px 25px;
          background: #172033;
          color: white;
          text-decoration: none;
          border-radius: 8px;
        }
      </style>
    </head>

    <body>

      <p><strong>EL MÉTODO INGLÉS CON EMERSON</strong></p>

      <h1>No empieces por la gramática. Empieza por el inglés.</h1>

      <p>
        Aprende inglés de una manera natural, práctica y progresiva,
        comenzando por lo que realmente quieres decir y necesitas comunicar.
      </p>

      <div class="quote">
        Primero usa el inglés. Después entiende por qué funciona.
      </div>

      <h2>¿Te imaginas aprender inglés sin comenzar memorizando reglas?</h2>

      <p>
        Sin pasar horas preguntándote por qué una estructura funciona
        de una manera y no de otra. Sin memorizar listas interminables
        de palabras. Sin aprender frases que nunca utilizarías en una
        conversación real.
      </p>

      <p>
        Cuando aprendiste tu primer idioma, primero escuchaste,
        comprendiste, imitaste, repetiste, experimentaste y poco a poco
        empezaste a comunicarte.
      </p>

      <p>
        En Inglés con Emerson llevamos esa idea al aprendizaje del inglés.
      </p>

      <h2>Primero: aprende lo que realmente quieres decir.</h2>

      <p>
        No comenzamos con una explicación gramatical. Comenzamos con algo
        que realmente necesitas expresar.
      </p>

      <p>
        <strong>Quiero salir.</strong><br>
        <strong>Tengo ganas de comer.</strong><br>
        <strong>Voy a comprar algo.</strong><br>
        <strong>Déjame revisar.</strong><br>
        <strong>Acabo de llegar.</strong><br>
        <strong>Necesito que me ayudes.</strong>
      </p>

      <h2>Después: descubre las plantillas.</h2>

      <p>
        En lugar de memorizar miles de frases aisladas, aprendes
        estructuras naturales que puedes reutilizar.
      </p>

      <div class="quote">
        I feel like going out.
      </div>

      <p>
        I feel like eating something.<br>
        I feel like watching a movie.<br>
        I feel like taking a walk.<br>
        I feel like staying home.
      </p>

      <p><strong>Una estructura. Decenas de posibilidades.</strong></p>

      <h2>Después: llévalo a situaciones reales.</h2>

      <p>
        Porque saber una frase no significa saber desenvolverte.
      </p>

      <p>
        🍽️ Restaurante<br>
        ✈️ Viajes<br>
        👕 Compras<br>
        ⛽ Gasolinera<br>
        🏨 Hotel<br>
        💼 Trabajo<br>
        🏠 Vida cotidiana
      </p>

      <div class="quote">
        No estudias inglés para hablar de inglés.<br>
        Aprendes inglés para vivir en inglés.
      </div>

      <h2>Y finalmente: haz que suene natural.</h2>

      <p>
        Trabajamos pronunciación, ritmo, linking, reductions, schwa,
        flap T, entonación y connected speech.
      </p>

      <h2>¿Y qué pasa con la gramática?</h2>

      <p>
        La gramática deja de ser el protagonista.
      </p>
<p>
        Puedes aprender una estructura, utilizarla cientos de veces
        y comunicarte antes de conocer el nombre de la regla que hay detrás.
      </p>

      <p>
        Y cuando necesites entender por qué funciona de determinada
        manera, te lo explicamos de forma sencilla y práctica.
      </p>

      <div class="quote">
        Primero: USAR.<br>
        Después: ENTENDER.<br><br>
        No al revés.
      </div>

      <h2>Tu camino hacia la comunicación real.</h2>

      <p>
        <strong>Acciones → Plantillas → Situaciones reales → 
        Pronunciación natural → Conversación → Comunicación real</strong>
      </p>

      <h2>El inglés no tiene que sentirse como una materia.</h2>

      <p>
        Puede convertirse en una herramienta para hablar, trabajar,
        viajar, comprar, conversar, resolver problemas y desenvolverte.
      </p>

      <h2>Aprende inglés para usarlo.</h2>

      <a href="/" class="button">VOLVER AL INICIO</a>

    </body>
    </html>
  `, {
    headers: {
      "content-type": "text/html;charset=UTF-8"
    }
  });
}
if (url.pathname === "/unete") {
  return new Response(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title>Únete | Inglés con Emerson</title>

      <style>
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          color: #172033;
          background: #ffffff;
          line-height: 1.6;
        }

        a {
          color: inherit;
        }

        .container {
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px;
        }

        header {
          border-bottom: 1px solid #e5e7eb;
          background: #ffffff;
        }

        nav {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .brand {
          text-decoration: none;
          font-size: 21px;
          font-weight: 800;
          line-height: 1.2;
        }

        .brand small {
          display: block;
          font-size: 10px;
          letter-spacing: 1.5px;
          font-weight: 600;
          margin-top: 5px;
        }

        .menu {
          display: flex;
          align-items: center;
          gap: 22px;
          font-size: 14px;
          font-weight: 600;
        }

        .menu a {
          text-decoration: none;
        }

        .hero {
          padding: 90px 0;
          background: linear-gradient(135deg, #f5f7fb, #ffffff);
        }

        .eyebrow {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        h1 {
          max-width: 850px;
          margin: 0 0 24px;
          font-size: clamp(42px, 7vw, 72px);
          line-height: 1.05;
        }

        h2 {
          margin: 0 0 18px;
          font-size: clamp(32px, 5vw, 48px);
          line-height: 1.1;
        }

        h3 {
          margin: 0 0 12px;
          font-size: 25px;
        }

        p {
          font-size: 18px;
          color: #596273;
        }

        .hero p {
          max-width: 780px;
          font-size: 21px;
        }

        section {
          padding: 85px 0;
        }

        .center {
          text-align: center;
        }

        .premium {
  background: #ffd43b;
  color: #172033;
}

        .premium p {
  color: #172033;
}

        .premium-card {
          max-width: 820px;
          margin: 42px auto 0;
          padding: 45px;
          border: 1px solid rgba(255,255,255,.15);
          border-radius: 20px;
          background: rgba(255,255,255,.06);
        }

        .features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin: 30px 0;
          text-align: left;
        }

        .feature {
          padding: 17px;
          border-radius: 10px;
          background: rgba(255,255,255,.07);
        }

        .button {
          display: inline-block;
          margin-top: 20px;
          padding: 15px 28px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 800;
        }

        .button-light {
  background: #172033;
  color: #ffffff;
  font-size: 16px;
  padding: 17px 32px;
}

        .button-dark {
          background: #172033;
          color: #ffffff;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 42px;
        }

        .card {
          padding: 35px;
          border: 1px solid #e2e6ec;
          border-radius: 18px;
          text-align: left;
        }

        .icon {
          font-size: 38px;
          margin-bottom: 15px;
        }

        .books {
          background: #f5f7fa;
        }

        .final {
          padding: 95px 0;
        }
footer {
          padding: 40px 24px;
          background: #111827;
          color: #ffffff;
          text-align: center;
        }

        footer p {
          color: #b9c1cd;
          font-size: 14px;
        }

        @media (max-width: 900px) {
          nav {
            flex-direction: column;
            justify-content: center;
            padding: 18px 0;
          }

          .menu {
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            width: 100%;
          }
        }

        @media (max-width: 600px) {
          .container {
            padding: 0 18px;
          }

          .hero {
            padding: 65px 0;
          }

          section {
            padding: 65px 0;
          }

          .features,
          .cards {
            grid-template-columns: 1fr;
          }

          .premium-card,
          .card {
            padding: 27px;
          }

          .menu {
            font-size: 13px;
          }
        }
      </style>
    </head>

    <body>

      <header>
        <div class="container">
          <nav>

            <a href="/" class="brand">
              Inglés con Emerson
              <small>INGLÉS REAL · NATURAL · PRÁCTICO</small>
            </a>

            <div class="menu">
              <a href="/">Inicio</a>
              <a href="/aprende">Aprende</a>
              <a href="/metodo">Método</a>
              <a href="/unete">Únete</a>
              <a href="/libros">Libros</a>
            </div>

          </nav>
        </div>
      </header>


      <main>

        <section class="hero">
          <div class="container">

            <div class="eyebrow">
              ÚNETE A INGLÉS CON EMERSON
            </div>

            <h1>
              Aprende inglés de una manera natural, práctica y real.
            </h1>

            <p>
              Obtén acceso premium a todo el contenido, todos los niveles
              y aprende a tu propio ritmo.
            </p>

            <p>
              Aprende mediante acciones reales, plantillas naturales,
              situaciones cotidianas y pronunciación auténtica.
            </p>

          </div>
        </section>


        <section class="premium">

          <div class="container center">

            <h2>
              🎬 Acceso Premium
            </h2>

            <p>
              Todo el contenido. Todos los niveles. Tu propio ritmo.
            </p>

            <div class="premium-card">

              <h3>
                Un solo acceso para avanzar a tu manera.
              </h3>

              <p>
                Accede progresivamente a contenido creado para ayudarte
                a utilizar el inglés en situaciones reales, sin depender
                de explicaciones gramaticales interminables.
              </p>

              <div class="features">

                <div class="feature">
                  🎬 Videos y contenido práctico
                </div>

                <div class="feature">
                  📚 Todos los niveles
                </div>

                <div class="feature">
                  🎯 Acciones específicas del día a día
                </div>

                <div class="feature">
                  🧩 Plantillas naturales
                </div>

                <div class="feature">
                  🌎 Situaciones reales
                </div>

                <div class="feature">
                  🗣️ Pronunciación natural
                </div>

              </div>

              <p>
                Aprende, practica y repasa cuando quieras.
                Tú decides el ritmo.
              </p>

              <a href="#acceso" class="button button-light">
                OBTENER ACCESO PREMIUM
              </a>

            </div>

          </div>

        </section>


        <section>

          <div class="container center">

            <h2>
              ¿Quieres aprender conmigo en vivo?
            </h2>
<p>
              Si prefieres acompañamiento directo, también puedes
              aprender mediante clases personalizadas o grupales.
            </p>

            <div class="cards">

              <div class="card">

                <div class="icon">👨‍🏫</div>

                <h3>
                  Clases personalizadas
                </h3>

                <p>
                  Trabaja directamente conmigo y recibe un proceso
                  adaptado a tus objetivos, necesidades y nivel.
                </p>

                <a href="#" class="button button-dark">
                  💬 QUIERO UNA CLASE PERSONALIZADA
                </a>

              </div>


              <div class="card">

                <div class="icon">👥</div>

                <h3>
                  Clases grupales
                </h3>

                <p>
                  Aprende con otros estudiantes, practica y desarrolla
                  tu comunicación en un entorno guiado.
                </p>

                <a href="#" class="button button-dark">
                  CONOCER LOS GRUPOS
                </a>

              </div>

            </div>

          </div>

        </section>


        <section class="books">

          <div class="container center">

            <h2>
              📚 Libros y materiales
            </h2>

            <p>
              Próximamente encontrarás una colección de libros y
              materiales creados para acompañar este método.
            </p>

            <a href="/libros" class="button button-dark">
              VER LIBROS
            </a>

          </div>

        </section>


        <section class="final" id="acceso">

          <div class="container center">

            <h2>
              Deja de estudiar inglés como una materia.
            </h2>

            <p>
              Empieza a usarlo como un idioma.
            </p>

            <a href="#" class="button button-dark">
              OBTENER ACCESO PREMIUM
            </a>

          </div>

        </section>

      </main>


      <footer>

        <strong>Inglés con Emerson</strong>

        <p>
          Inglés real · Natural · Práctico
        </p>

      </footer>
<a
  href="https://wa.me/573184428084?text=Hola%20Emerson%2C%20estoy%20interesado%2Fa%20en%20tus%20cursos%20de%20ingl%C3%A9s.%20Quisiera%20recibir%20m%C3%A1s%20informaci%C3%B3n."
  class="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Contactar por WhatsApp"
>
  💬 WhatsApp
</a>

<style>
  .whatsapp-float {
    position: fixed;
    right: 22px;
    bottom: 22px;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 20px;
    border-radius: 50px;
    background: #25D366;
    color: #ffffff;
    text-decoration: none;
    font-size: 15px;
    font-weight: 800;
    box-shadow: 0 6px 20px rgba(0,0,0,.22);
  }

  .whatsapp-float:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 600px) {
    .vtwhatsapp-float {
      right: 15px;
      bottom: 15px;
      padding: 13px 17px;
      font-size: 14px;
    }
  }
</style>
    </body>
    </html>
  `, {
    headers: {
      "content-type": "text/html;charset=UTF-8"
    }
  });
}
if (url.pathname === "/aprende") {
  return new Response(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Aprende | Inglés con Emerson</title>

      <style>
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: Arial, Helvetica, sans-serif;
          color: #172033;
          background: #ffffff;
          line-height: 1.7;
        }

        .container {
          max-width: 1050px;
          margin: auto;
          padding: 0 24px;
        }

        header {
          border-bottom: 1px solid #e8ebf0;
          background: #ffffff;
        }

        nav {
          min-height: 76px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand {
          font-size: 21px;
          font-weight: 800;
        }

        .brand small {
          display: block;
          font-size: 10px;
          letter-spacing: 1.5px;
          font-weight: 500;
        }

        .menu {
          display: flex;
          gap: 22px;
          font-size: 14px;
          font-weight: 600;
          position: relative;
          z-index: 9999;
        }

        .hero {
          padding: 100px 0;
          background: linear-gradient(135deg, #f5f8ff, #ffffff);
        }

        .eyebrow {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        h1 {
          font-size: clamp(42px, 7vw, 72px);
          line-height: 1.05;
          margin: 0 0 25px;
        }

        h2 {
          font-size: clamp(30px, 5vw, 46px);
          line-height: 1.15;
          margin-bottom: 20px;
        }

        h3 {
          font-size: 23px;
          margin-bottom: 10px;
        }

        p {
          font-size: 18px;
          color: #566174;
        }

        .hero p {
          max-width: 780px;
          font-size: 21px;
        }

        section {
          padding: 85px 0;
        }

        .center {
          text-align: center;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
          margin-top: 40px;
        }

        .card {
          padding: 32px;
          border: 1px solid #e3e7ee;
          border-radius: 16px;
          background: #ffffff;
        }

        .icon {
          font-size: 36px;
          margin-bottom: 15px;
        }

        .dark {
          background: #172033;
          color: #ffffff;
        }

        .dark p {
          color: #d6dbe4;
        }

        .dark .card {
          background: rgba(255,255,255,.05);
          border-color: rgba(255,255,255,.15);
        }

        .quote {
          margin: 35px 0;
          padding: 22px 25px;
          border-left: 5px solid #172033;
          font-size: 25px;
          font-weight: 700;
        }

        .dark .quote {
          border-color: #ffffff;
        }

        .premium {
          background: #f4f6fa;
        }

        .button {
          display: inline-block;
          margin-top: 18px;
          padding: 15px 28px;
          border-radius: 8px;
          background: #172033;
          color: #ffffff;
          text-decoration: none;
          font-weight: 800;
        }

        .secondary {
          margin-left: 10px;
          background: transparent;
          color: #172033;
          border: 1px solid #172033;
        }

        footer {
          background: #111827;
          color: #ffffff;
          text-align: center;
          padding: 40px 24px;
        }

        footer p {
          color: #b9c0cc;
          font-size: 14px;
        }

        @media (max-width: 700px) {
          .menu {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px;
            padding: 12px 0;
            width: 100%;
          }

          .grid {
            grid-template-columns: 1fr;
           }

          section,
          .hero {
            padding: 65px 0;
          }
.secondary {
            margin-left: 0;
            margin-top: 10px;
          }
        }
      </style>
    </head>

    <body>

      <header>
        <div class="container">
          <nav>
            <a href="/" class="brand">
              Inglés con Emerson
              <small>INGLÉS REAL · NATURAL · PRÁCTICO</small>
            </a>

            <div class="menu">
              <a href="/">Inicio</a>
              <a href="/aprende">Aprende</a>
              <a href="/metodo">Método</a>
              <a href="/#unete">Únete</a>
              <a href="/libros">Libros</a>
            </div>
          </nav>
        </div>
      </header>

      <main>

        <section class="hero">
          <div class="container">

            <div class="eyebrow">APRENDE INGLÉS CON EMERSON</div>

            <h1>
              Aprende inglés real, práctico y natural.
            </h1>

            <p>
              Accede a un método diseñado para ayudarte a comunicarte
              mediante acciones reales, plantillas naturales, situaciones
              cotidianas y pronunciación auténtica.
            </p>

            <p>
              <strong>
                Aprende a tu ritmo. Practica cuando quieras. Avanza paso a paso.
              </strong>
            </p>

            <a href="/unete" class="button">
              OBTENER ACCESO PREMIUM
            </a>

          </div>
        </section>


        <section>
          <div class="container">

            <div class="center">
              <h2>
                No se trata de memorizar inglés.
                Se trata de aprender a usarlo.
              </h2>

              <p>
                El contenido está organizado para que puedas aprender
                progresivamente y llevar inmediatamente lo aprendido
                a situaciones reales.
              </p>
            </div>

            <div class="grid">

              <div class="card">
                <div class="icon">🎯</div>
                <h3>Acciones reales</h3>
                <p>
                  Aprende a expresar lo que haces, necesitas, quieres
                  y dices en tu vida cotidiana.
                </p>
              </div>

              <div class="card">
                <div class="icon">🧩</div>
                <h3>Plantillas naturales</h3>
                <p>
                  Aprende estructuras que puedes reutilizar para construir
                  muchas ideas diferentes.
                </p>
              </div>

              <div class="card">
                <div class="icon">🎬</div>
                <h3>Situaciones reales</h3>
                <p>
                  Aprende mediante situaciones como restaurantes, compras,
                  viajes, hoteles, trabajo y muchas más.
                </p>
              </div>

              <div class="card">
                <div class="icon">🗣️</div>
                <h3>Pronunciación natural</h3>
                <p>
                  Trabaja ritmo, linking, reductions, schwa, flap T
                  y connected speech.
                </p>
              </div>

            </div>

          </div>
        </section>


        <section class="dark">
          <div class="container">

            <h2>
              Aprende lo que realmente necesitas decir.
            </h2>

            <p>
              En lugar de empezar por largas explicaciones gramaticales,
              comenzamos por acciones, ideas y situaciones que forman
              parte de tu vida.
            </p>

            <div class="quote">
              Una acción → una estructura → muchas posibilidades.
            </div>

            <p>
              Así vas construyendo tu capacidad de comunicarte de una
              manera progresiva y natural.
            </p>

          </div>
        </section>


        <section>
          <div class="container">

            <div class="center">
              <h2>
                Aprende a tu propio ritmo.
              </h2>
<p>
                No necesitas esperar a que empiece un curso.
                No tienes que avanzar al ritmo de otras personas.
              </p>

              <p>
                Entras, eliges el contenido que necesitas, practicas,
                repasas y continúas avanzando.
              </p>
            </div>

            <div class="grid">

              <div class="card">
                <h3>📚 Todos los niveles</h3>
                <p>
                  Contenido organizado progresivamente para que puedas
                  avanzar desde los fundamentos hacia niveles más avanzados.
                </p>
              </div>

              <div class="card">
                <h3>🔄 Aprende y repasa</h3>
                <p>
                  Vuelve a las lecciones cuando quieras y refuerza
                  aquello que todavía necesitas practicar.
                </p>
              </div>

            </div>

          </div>
        </section>


        <section class="premium">
          <div class="container center">

            <h2>
              Obtén acceso premium a todo el contenido.
            </h2>

            <p>
              Todos los niveles. Un solo acceso.
              Aprende a tu ritmo.
            </p>

            <p>
              Accede progresivamente al contenido de Inglés con Emerson
              y desarrolla las habilidades que realmente necesitas
              para comunicarte.
            </p>

            <a href="/unete" class="button">
              OBTENER ACCESO PREMIUM
            </a>

          </div>
        </section>


        <section>
          <div class="container center">

            <h2>
              ¿Prefieres aprender acompañado?
            </h2>

            <p>
              También puedes complementar tu aprendizaje con clases
              en vivo, personalizadas o grupales.
            </p>

            <a href="/unete" class="button secondary">
              CONOCER LAS OPCIONES
            </a>

          </div>
        </section>

      </main>

      <footer>
        <strong>Inglés con Emerson</strong>
        <p>Inglés real · Natural · Práctico</p>
      </footer>

    </body>
    </html>
  `, {
    headers: {
      "content-type": "text/html;charset=UTF-8"
    }
  });
}
    const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inglés con Emerson | Inglés real, natural y práctico</title>
  <meta name="description" content="Aprende inglés real, natural y práctico con el método de Inglés con Emerson.">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      font-family: Arial, Helvetica, sans-serif;
      color: #172033;
      background: #ffffff;
      line-height: 1.6;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    header {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: rgba(255,255,255,0.97);
      border-bottom: 1px solid #e8ebf0;
    }

    .nav {
      max-width: 1200px;
      margin: auto;
      min-height: 76px;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .brand {
      font-size: 22px;
      font-weight: 800;
      white-space: nowrap;
    }

    .brand span {
      display: block;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 1.5px;
      text-transform: uppercase;
    }

    .menu {
      display: flex;
      align-items: center;
      gap: 22px;
      font-size: 14px;
      font-weight: 600;
    }

    .menu a:hover {
      opacity: 0.65;
    }

    .nav-buttons {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .btn {
      display: inline-block;
      padding: 12px 20px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 14px;
      border: 1px solid #172033;
      cursor: pointer;
    }

    .btn-primary {
      background: #172033;
      color: white;
    }

    .btn-secondary {
      background: white;
      color: #172033;
    }

    .hero {
      min-height: 650px;
      display: flex;
      align-items: center;
      background: linear-gradient(135deg, #f5f8ff 0%, #ffffff 55%, #eef4ff 100%);
    }

    .hero-content {
      max-width: 1200px;
      width: 100%;
      margin: auto;
      padding: 90px 24px;
    }

    .eyebrow {
      font-size: 13px;
      font-weight: 800;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 18px;
    }

    h1 {
      max-width: 800px;
      font-size: clamp(42px, 7vw, 78px);
      line-height: 1.02;
      margin-bottom: 24px;
    }

    .hero p {
      max-width: 700px;
      font-size: 21px;
      color: #4b5568;
      margin-bottom: 34px;
    }

    .section {
      max-width: 1200px;
      margin: auto;
      padding: 90px 24px;
    }

    .section-header {
      max-width: 720px;
      margin-bottom: 45px;
    }

    h2 {
      font-size: clamp(32px, 5vw, 48px);
      line-height: 1.1;
      margin-bottom: 16px;
    }

    .section-header p {
      color: #5b6475;
      font-size: 18px;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 18px;
    }

    .card {
      border: 1px solid #e4e8ef;
      border-radius: 14px;
      padding: 28px;
      background: white;
      min-height: 190px;
    }

    .card h3 {
      margin: 12px 0 8px;
      font-size: 21px;
    }

    .card p {
      color: #5b6475;
    }

    .icon {
      font-size: 30px;
    }

    .dark-section {
      background: #172033;
      color: white;
    }

    .dark-section .section-header p,
    .dark-section .card p {
      color: #d5dae3;
    }

    .dark-section .card {
      background: rgba(255,255,255,0.06);
      border-color: rgba(255,255,255,0.14);
    }

    .two-column {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }

    .list {
      display: grid;
      gap: 18px;
    }

    .list-item {
      display: flex;
      gap: 16px;
      align-items: flex-start;
    }
.number {
      min-width: 38px;
      height: 38px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-weight: 800;
      background: #172033;
      color: white;
    }

    .cta {
      text-align: center;
      background: #f4f6fa;
    }

    .cta p {
      max-width: 650px;
      margin: 0 auto 28px;
      color: #5b6475;
      font-size: 18px;
    }

    footer {
      background: #111827;
      color: white;
      padding: 45px 24px;
    }

    .footer-inner {
      max-width: 1200px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      gap: 30px;
    }

    .footer-inner p {
      color: #b9c0cc;
      font-size: 14px;
    }

    @media (max-width: 900px) {
      .menu {
        display: flex;
      }

      .grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .two-column {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 560px) {
      .nav {
        min-height: 68px;
        padding: 0 16px;
      }

      .brand {
        font-size: 18px;
      }

      .nav-buttons .btn-secondary {
        display: none;
      }

      .hero-content {
        padding: 70px 20px;
      }

      .hero p {
        font-size: 18px;
      }

      .section {
        padding: 65px 20px;
      }

      .grid {
        grid-template-columns: 1fr;
      }

      .footer-inner {
        flex-direction: column;
      }
    }
  </style>
</head>

<body>

<header>
  <nav class="nav">
    <a href="#inicio" class="brand">
      Inglés con Emerson
      <span>Inglés real · Natural · Práctico</span>
    </a>

    <div class="menu">
      <a href="/metodo">Método</a>
      <a href="/aprende">Aprende</a>
      <a href="#clases">Clases</a>
      <a href="#libro">Libro</a>
    </div>

    <div class="nav-buttons">
      <a href="#login" class="btn btn-secondary">Iniciar sesión</a>
      <a href="#empezar" class="btn btn-primary">Empezar ahora</a>
    </div>
  </nav>
</header>

<main>

<section class="hero" id="inicio">
  <div class="hero-content">
    <div class="eyebrow">INGLÉS CON EMERSON</div>
    <h1>Deja de estudiar inglés. Empieza a usarlo.</h1>
    <p>
      Aprende inglés real, natural y práctico a través de situaciones,
      acciones, plantillas y pronunciación.
    </p>
    <a href="#empezar" class="btn btn-primary">Empezar ahora</a>
  </div>
</section>

<section class="section" id="metodo">
  <div class="section-header">
    <h2>Una manera diferente de aprender inglés.</h2>
    <p>
      El objetivo no es memorizar reglas innecesarias. Es aprender a
      comprender, construir y utilizar el inglés en situaciones reales.
    </p>
  </div>

  <div class="grid">
    <article class="card">
      <div class="icon">🗣️</div>
      <h3>Inglés natural</h3>
      <p>Aprende expresiones y formas de hablar que realmente puedes utilizar.</p>
    </article>

    <article class="card">
      <div class="icon">🎯</div>
      <h3>Acciones reales</h3>
      <p>Aprende a expresar las acciones y situaciones de tu vida cotidiana.</p>
    </article>

    <article class="card">
      <div class="icon">🧩</div>
      <h3>Plantillas prácticas</h3>
      <p>Aprende estructuras que puedes reutilizar en diferentes contextos.</p>
    </article>

    <article class="card">
      <div class="icon">👂</div>
      <h3>Pronunciación natural</h3>
      <p>Trabaja ritmo, linking, reductions y los sonidos del inglés hablado.</p>
    </article>
  </div>
</section>

<section class="dark-section" id="aprende">
  <div class="section">
    <div class="section-header">
      <h2>Aprende lo que realmente necesitas.</h2>
      <p>
        Explora diferentes caminos de aprendizaje y encuentra el contenido
        que más se adapta a tus objetivos.
      </p>
    </div>

    <div class="grid">
      <article class="card">
        <div class="icon">🎬</div>
        <h3>Situaciones reales</h3>
        <p>Inglés para restaurantes, viajes, compras, trabajo y vida cotidiana.</p>
      </article>
<article class="card">
        <div class="icon">🎯</div>
        <h3>Acciones</h3>
        <p>Aprende a expresar las acciones que realizas todos los días.</p>
      </article>

      <article class="card">
        <div class="icon">🧩</div>
        <h3>Plantillas</h3>
        <p>Construye nuevas ideas utilizando estructuras prácticas y reutilizables.</p>
      </article>

      <article class="card">
        <div class="icon">🗣️</div>
        <h3>Pronunciación</h3>
        <p>Descubre cómo suena realmente el inglés cuando se habla de forma natural.</p>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="two-column">
    <div>
      <div class="eyebrow">TU APRENDIZAJE</div>
      <h2>Tú decides cuánto quieres avanzar.</h2>
      <p>
        Puedes seguir una ruta estructurada o entrar directamente al contenido
        que necesitas. Aprende a tu ritmo y continúa desde donde lo dejaste.
      </p>
    </div>

    <div class="list">
      <div class="list-item">
        <div class="number">1</div>
        <div>
          <h3>Explora</h3>
          <p>Encuentra situaciones, acciones, plantillas y cursos.</p>
        </div>
      </div>

      <div class="list-item">
        <div class="number">2</div>
        <div>
          <h3>Aprende</h3>
          <p>Estudia mediante videos y materiales prácticos.</p>
        </div>
      </div>

      <div class="list-item">
        <div class="number">3</div>
        <div>
          <h3>Practica</h3>
          <p>Lleva lo aprendido a situaciones reales de comunicación.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section" id="clases">
  <div class="section-header">
    <div class="eyebrow">CLASES EN VIVO</div>
    <h2>¿Prefieres aprender conmigo directamente?</h2>
    <p>
      También puedes acceder a clases personalizadas o participar en clases
      grupales.
    </p>
  </div>

  <div class="grid">
    <article class="card">
      <div class="icon">👨‍🏫</div>
      <h3>Clases personalizadas</h3>
      <p>Un proceso adaptado a tus objetivos y necesidades.</p>
      <br>
      <a href="#empezar" class="btn btn-secondary">Ver clases</a>
    </article>

    <article class="card">
      <div class="icon">👥</div>
      <h3>Clases grupales</h3>
      <p>Aprende y practica con otros estudiantes.</p>
      <br>
      <a href="#empezar" class="btn btn-secondary">Ver grupos</a>
    </article>
  </div>
</section>

<section class="section" id="libro">
  <div class="two-column">
    <div>
      <div class="eyebrow">LIBRO</div>
      <h2>DILO COMO UN NATIVO</h2>
      <p>
        Un recurso para aprender a expresar acciones, ideas y situaciones
        cotidianas de una manera más natural.
      </p>
      <br>
      <a href="#empezar" class="btn btn-primary">Conocer el libro</a>
    </div>

    <div class="card">
      <div class="icon">📖</div>
      <h3>Próximamente</h3>
      <p>
        Aquí podrás conocer el libro y acceder a la plataforma de compra
        cuando esté disponible.
      </p>
    </div>
  </div>
</section>

<section class="section cta" id="empezar">
  <h2>Tu inglés empieza aquí.</h2>
  <p>
    Aprende a tu ritmo. Aprende inglés real. Empieza a usarlo.
  </p>
  <a href="#login" class="btn btn-primary">Empezar ahora</a>
</section>

<section class="section" id="login">
  <div class="section-header">
    <div class="eyebrow">MI ESPACIO</div>
    <h2>Tu aprendizaje, en un solo lugar.</h2>
    <p>
      Próximamente podrás crear tu cuenta, acceder a tus contenidos,
      guardar tus clases y seguir tu progreso.
    </p>
  </div>
</section>

</main>

<footer>
  <div class="footer-inner">
    <div>
      <strong>Inglés con Emerson</strong>
      <p>Inglés real · Natural · Práctico</p>
    </div>
    <p>© 2026 Inglés con Emerson. Todos los derechos reservados.</p>
  </div>
</footer>

</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });
  }
};
