// workers.js

const HOTMART_CURSO_CHECKOUT = "https://go.hotmart.com/H107388636C?dp=1"; 
const HOTMART_LIBRO_CHECKOUT = "https://go.hotmart.com/J107433169I?dp=1"; 
const HOTMART_CLUB_URL = "https://hotmart.com/es/club/ingles-con-emerson"; 

const GITHUB_BANNER_URL = "https://raw.githubusercontent.com/inglesconemersonteach-max/ingles-con-emerson/main/banner-superior.jpg";
const GITHUB_ICON_TEST_URL = "https://raw.githubusercontent.com/inglesconemersonteach-max/ingles-con-emerson/main/icon-test.png";

const DATA_APRENDE = {
  "At the restaurant": [
    { "ingles": "Make a reservation", "espanol": "Hacer una reservación" },
    { "ingles": "Ask for the menu", "espanol": "Pedir el menú" },
    { "ingles": "Order the special", "espanol": "Pedir el plato del día" },
    { "ingles": "Ask for recommendations", "espanol": "Pedir recomendaciones" },
    { "ingles": "Check the ingredients", "espanol": "Revisar los ingredientes" },
    { "ingles": "Request extra napkins", "espanol": "Pedir servilletas extras" },
    { "ingles": "Ask for the bill / check", "espanol": "Pedir la cuenta" },
    { "ingles": "Leave a tip", "espanol": "Dejar propina" },
    { "ingles": "Split the bill", "espanol": "Dividir la cuenta" },
    { "ingles": "Call the waiter", "espanol": "Llamar al mesero" },
    { "ingles": "Order a refill", "espanol": "Pedir otra ronda / recarga" },
    { "ingles": "Ask for tap water", "espanol": "Pedir agua del grifo" },
    { "ingles": "Change a dish", "espanol": "Cambiar un plato" },
    { "ingles": "Report food allergy", "espanol": "Reportar alergia a la comida" },
    { "ingles": "Praise the chef", "espanol": "Felicitar al chef" },
    { "ingles": "Ask for takeout box", "espanol": "Pedir caja para llevar" },
    { "ingles": "Pay with credit card", "espanol": "Pagar con tarjeta de crédito" },
    { "ingles": "Wait for a table", "espanol": "Esperar una mesa" },
    { "ingles": "Cancel an order", "espanol": "Cancelar un pedido" },
    { "ingles": "Reserve the VIP area", "espanol": "Reservar la zona VIP" }
  ],
  "At the bank": [
    { "ingles": "Open a bank account", "espanol": "Abrir una cuenta bancaria" },
    { "ingles": "Deposit cash", "espanol": "Depositar efectivo" },
    { "ingles": "Withdraw money from ATM", "espanol": "Retirar dinero del cajero" },
    { "ingles": "Exchange currency", "espanol": "Cambiar divisa / moneda" },
    { "ingles": "Update my address", "espanol": "Actualizar mi dirección" },
    { "ingles": "Request a new debit card", "espanol": "Solicitar nueva tarjeta débito" },
    { "ingles": "Check account balance", "espanol": "Consultar saldo de cuenta" },
    { "ingles": "Talk to a customer service rep", "espanol": "Hablar con asesor de servicio" },
    { "ingles": "Activate credit card", "espanol": "Activar tarjeta de crédito" },
    { "ingles": "Report a lost card", "espanol": "Reportar tarjeta perdida" },
    { "ingles": "Transfer funds", "espanol": "Transferir fondos" },
    { "ingles": "Apply for a loan", "espanol": "Solicitar un préstamo" },
    { "ingles": "Sign bank forms", "espanol": "Firmar formularios bancarios" },
    { "ingles": "Reset online password", "espanol": "Restablecer contraseña en línea" },
    { "ingles": "Check exchange rates", "espanol": "Consultar tasas de cambio" },
    { "ingles": "Close a bank account", "espanol": "Cerrar una cuenta bancaria" },
    { "ingles": "Increase credit limit", "espanol": "Aumentar límite de crédito" },
    { "ingles": "Print a bank statement", "espanol": "Imprimir extracto bancario" },
    { "ingles": "Cash a check", "espanol": "Cobrar un cheque" },
    { "ingles": "Talk to the branch manager", "espanol": "Hablar con el gerente de sucursal" }
  ],
  "At the supermarket": [
    { "ingles": "Grab a shopping cart", "espanol": "Tomar un carrito de compras" },
    { "ingles": "Weigh the vegetables", "espanol": "Pesar los vegetales" },
    { "ingles": "Check the expiration date", "espanol": "Revisar fecha de vencimiento" },
    { "ingles": "Look for discounts", "espanol": "Buscar descuentos" },
    { "ingles": "Pay with contactless card", "espanol": "Pagar con tarjeta sin contacto" },
    { "ingles": "Ask for paper or plastic bags", "espanol": "Pedir bolsas de papel o plástico" },
    { "ingles": "Keep the receipt", "espanol": "Guardar el recibo / factura" },
    { "ingles": "Return a damaged item", "espanol": "Devolver un producto dañado" },
    { "ingles": "Find the dairy aisle", "espanol": "Buscar el pasillo de lácteos" },
    { "ingles": "Scan product barcode", "espanol": "Escanear código de barras" },
    { "ingles": "Use self checkout", "espanol": "Usar caja de auto cobro" },
    { "ingles": "Buy fresh bakery items", "espanol": "Comprar panadería fresca" },
    { "ingles": "Ask for a price check", "espanol": "Pedir verificación de precio" },
    { "ingles": "Redeem store coupons", "espanol": "Canjear cupones de la tienda" },
    { "ingles": "Take a basket", "espanol": "Tomar una cesta de mano" },
    { "ingles": "Look for organic products", "espanol": "Buscar productos orgánicos" },
    { "ingles": "Wait in line", "espanol": "Hacer fila" },
    { "ingles": "Check weekly specials", "espanol": "Revisar ofertas semanales" },
    { "ingles": "Buy frozen foods", "espanol": "Comprar alimentos congelados" },
    { "ingles": "Ask customer service", "espanol": "Preguntar en servicio al cliente" }
  ],
  "Driving a truck": [
    { "ingles": "Do a pre-trip inspection", "espanol": "Hacer inspección previa al viaje" },
    { "ingles": "Check tire pressure", "espanol": "Revisar presión de llantas" },
    { "ingles": "Adjust mirrors and seat", "espanol": "Ajustar espejos y asiento" },
    { "ingles": "Refuel the truck", "espanol": "Tanquear / poner combustible" },
    { "ingles": "Secure the cargo straps", "espanol": "Asegurar las correas de carga" },
    { "ingles": "Scale the load at a station", "espanol": "Pesar la carga en báscula" },
    { "ingles": "Check GPS navigation route", "espanol": "Revisar ruta de navegación GPS" },
    { "ingles": "Park at the loading dock", "espanol": "Estacionar en el muelle de carga" },
    { "ingles": "Turn on hazard lights", "espanol": "Encender luces de emergencia" },
    { "ingles": "Connect trailer air lines", "espanol": "Conectar mangueras de aire" },
    { "ingles": "Check brake fluid", "espanol": "Revisar líquido de frenos" },
    { "ingles": "Sign bill of lading", "espanol": "Firmar conocimiento de embarque" },
    { "ingles": "Log driving hours", "espanol": "Registrar horas de conducción" },
    { "ingles": "Inspect headlights", "espanol": "Inspeccionar luces delanteras" },
    { "ingles": "Tighten wheel lugs", "espanol": "Apretar tuercas de rueda" },
    { "ingles": "Check oil level", "espanol": "Revisar nivel de aceite" },
    { "ingles": "Fasten seatbelt", "espanol": "Abrochar cinturón de seguridad" },
    { "ingles": "Idle the engine", "espanol": "Dejar el motor en ralentí" },
    { "ingles": "Check windshield wipers", "espanol": "Revisar limpiaparabrisas" },
    { "ingles": "Contact dispatch", "espanol": "Contactar con despacho" }
  ],
  "As a manager": [
    { "ingles": "Lead the morning briefing", "espanol": "Liderar la reunión matutina" },
    { "ingles": "Delegate daily tasks", "espanol": "Delegar tareas diarias" },
    { "ingles": "Review performance reports", "espanol": "Revisar reportes de rendimiento" },
    { "ingles": "Conduct a job interview", "espanol": "Realizar una entrevista de trabajo" },
    { "ingles": "Handle a client complaint", "espanol": "Manejar una queja de cliente" },
    { "ingles": "Approve budget expenses", "espanol": "Aprobar gastos de presupuesto" },
    { "ingles": "Schedule team shifts", "espanol": "Programar turnos del equipo" },
    { "ingles": "Motivate the staff", "espanol": "Motivar al personal" },
    { "ingles": "Set weekly goals", "espanol": "Establecer metas semanales" },
    { "ingles": "Train new employees", "espanol": "Entrenar nuevos empleados" },
    { "ingles": "Evaluate team performance", "espanol": "Evaluar desempeño del equipo" },
    { "ingles": "Sign payroll documents", "espanol": "Firmar documentos de nómina" },
    { "ingles": "Resolve staff conflicts", "espanol": "Resolver conflictos de personal" },
    { "ingles": "Order office supplies", "espanol": "Pedir suministros de oficina" },
    { "ingles": "Lead project meetings", "espanol": "Liderar reuniones de proyecto" },
    { "ingles": "Update company policies", "espanol": "Actualizar políticas de empresa" },
    { "ingles": "Manage project deadlines", "espanol": "Gestionar plazos de proyectos" },
    { "ingles": "Provide constructive feedback", "espanol": "Dar retroalimentación constructiva" },
    { "ingles": "Host client meetings", "espanol": "Organizar reuniones con clientes" },
    { "ingles": "Check quality standards", "espanol": "Revisar estándares de calidad" }
  ]
};

const DATA_ACCIONES_ESPECIFICAS = {
  "Cocina y Mañana": [
    { "infinitive": "brew coffee", "espanol": "Preparar / colar café", "ejemplo": "I love to brew fresh coffee in the morning." },
    { "infinitive": "crack an egg", "espanol": "Romper / cascar un huevo", "ejemplo": "Careful when you crack an egg into the pan." },
    { "infinitive": "wipe the counter", "espanol": "Limpiar el mesón / encimera", "ejemplo": "Please wipe the counter after cooking." },
    { "infinitive": "slice the bread", "espanol": "Cortar el pan en rebanadas", "ejemplo": "Slice the bread before making toast." },
    { "infinitive": "pour some milk", "espanol": "Servir un poco de leche", "ejemplo": "Pour some milk into your cereal." },
    { "infinitive": "turn on the stove", "espanol": "Encender la estufa", "ejemplo": "Turn on the stove to cook dinner." },
    { "infinitive": "wash the dishes", "espanol": "Lavar los platos", "ejemplo": "Wash the dirty dishes in the sink." },
    { "infinitive": "take out trash", "espanol": "Sacar la basura", "ejemplo": "Take out the trash to the street." },
    { "infinitive": "make the bed", "espanol": "Hacer la cama", "ejemplo": "Make the bed before leaving." },
    { "infinitive": "lock the door", "espanol": "Cerrar con llave", "ejemplo": "Lock the door when you leave." },
    { "infinitive": "turn on lights", "espanol": "Encender luces", "ejemplo": "Turn on the living room lights." },
    { "infinitive": "boil water", "espanol": "Hervir agua", "ejemplo": "Boil water for the pasta." },
    { "infinitive": "fry an egg", "espanol": "Freír un huevo", "ejemplo": "Fry an egg for breakfast." },
    { "infinitive": "peel an orange", "espanol": "Pelar una naranja", "ejemplo": "Peel an orange for a snack." },
    { "infinitive": "set the table", "espanol": "Poner la mesa", "ejemplo": "Set the table for lunch." },
    { "infinitive": "clear the table", "espanol": "Recoger la mesa", "ejemplo": "Clear the table after eating." },
    { "infinitive": "load the dishwasher", "espanol": "Cargar el lavaplatos", "ejemplo": "Load the dishwasher properly." },
    { "infinitive": "preheat the oven", "espanol": "Precalentar el horno", "ejemplo": "Preheat the oven to 350 degrees." },
    { "infinitive": "grated cheese", "espanol": "Rallar queso", "ejemplo": "Grate some cheese on top." },
    { "infinitive": "stir the soup", "espanol": "Revolver la sopa", "ejemplo": "Stir the soup so it doesn't burn." }
  ],
  "Oficina y Negocios": [
    { "infinitive": "lead the meeting", "espanol": "Liderar la reunión", "ejemplo": "She will lead the meeting at 9 AM." },
    { "infinitive": "review reports", "espanol": "Revisar informes", "ejemplo": "I need to review financial reports today." },
    { "infinitive": "handle a complaint", "espanol": "Manejar una queja", "ejemplo": "As a manager, you must handle client complaints." },
    { "infinitive": "delegate tasks", "espanol": "Delegar tareas", "ejemplo": "It is important to delegate tasks effectively." },
    { "infinitive": "reply to emails", "espanol": "Responder correos electrónicos", "ejemplo": "I spend an hour to reply to emails." },
    { "infinitive": "print documents", "espanol": "Imprimir documentos", "ejemplo": "Print out the important files." },
    { "infinitive": "sign a contract", "espanol": "Firmar un contrato", "ejemplo": "Sign the lease agreement." },
    { "infinitive": "schedule meeting", "espanol": "Agendar reunión", "ejemplo": "Schedule a meeting for tomorrow." },
    { "infinitive": "scan receipts", "espanol": "Escanear recibos", "ejemplo": "Scan the purchase receipt." },
    { "infinitive": "call suppliers", "espanol": "Llamar a proveedores", "ejemplo": "Call the supplier on the phone." },
    { "infinitive": "answer calls", "espanol": "Contestar llamadas", "ejemplo": "Answer client calls promptly." },
    { "infinitive": "update spreadsheets", "espanol": "Actualizar hojas de cálculo", "ejemplo": "Update data in Excel." },
    { "infinitive": "attend webinars", "espanol": "Asistir a seminarios web", "ejemplo": "Attend the morning webinar." },
    { "infinitive": "prepare slides", "espanol": "Preparar diapositivas", "ejemplo": "Prepare slides for presentation." },
    { "infinitive": "submit reports", "espanol": "Enviar informes", "ejemplo": "Submit reports before Friday." },
    { "infinitive": "negotiate contracts", "espanol": "Negociar contratos", "ejemplo": "Negotiate with the new vendor." },
    { "infinitive": "organize files", "espanol": "Organizar archivos", "ejemplo": "Organize cabinet files." },
    { "infinitive": "check inventory", "espanol": "Revisar inventario", "ejemplo": "Check office supply inventory." },
    { "infinitive": "write memos", "espanol": "Escribir memorandos", "ejemplo": "Write internal memos." },
    { "infinitive": "hire staff", "espanol": "Contratar personal", "ejemplo": "Hire new marketing staff." }
  ],
  "Ruta y Conducción": [
    { "infinitive": "check tire pressure", "espanol": "Revisar presión de llantas", "ejemplo": "Always check tire pressure before driving." },
    { "infinitive": "refuel the truck", "espanol": "Tanquear camión", "ejemplo": "I need to refuel the truck at the station." },
    { "infinitive": "secure cargo straps", "espanol": "Asegurar correas", "ejemplo": "Secure cargo straps tightly." },
    { "infinitive": "adjust mirrors", "espanol": "Ajustar espejos", "ejemplo": "Adjust mirrors properly." },
    { "infinitive": "park at the dock", "espanol": "Estacionar en muelle", "ejemplo": "Park at the loading dock." },
    { "infinitive": "scale the load", "espanol": "Pesar la carga", "ejemplo": "Scale the load at a station." },
    { "infinitive": "check GPS route", "espanol": "Revisar ruta GPS", "ejemplo": "Check GPS navigation route." },
    { "infinitive": "stop at red light", "espanol": "Parar en semáforo", "ejemplo": "Stop completely at red light." },
    { "infinitive": "call dispatcher", "espanol": "Llamar despachador", "ejemplo": "Call dispatcher for updates." },
    { "infinitive": "fasten seatbelt", "espanol": "Abrochar cinturón", "ejemplo": "Fasten your seatbelt." },
    { "infinitive": "turn on blinker", "espanol": "Poner direccional", "ejemplo": "Turn on your blinker." },
    { "infinitive": "change flat tire", "espanol": "Cambiar llanta pinchada", "ejemplo": "Change a flat tire." },
    { "infinitive": "check oil level", "espanol": "Revisar nivel de aceite", "ejemplo": "Check the engine oil level." },
    { "infinitive": "pay toll", "espanol": "Pagar peaje", "ejemplo": "Pay the highway toll." },
    { "infinitive": "use wipers", "espanol": "Usar limpiaparabrisas", "ejemplo": "Turn on windshield wipers." },
    { "infinitive": "lock cab doors", "espanol": "Segurar puertas de cabina", "ejemplo": "Lock cab doors at night." },
    { "infinitive": "inspect brakes", "espanol": "Inspeccionar frenos", "ejemplo": "Inspect air brakes." },
    { "infinitive": "turn on headlights", "espanol": "Encender faros", "ejemplo": "Turn on headlights at dusk." },
    { "infinitive": "idle engine", "espanol": "Ralentizar motor", "ejemplo": "Idle engine safely." },
    { "infinitive": "clear windshield", "espanol": "Limpiar parabrisas", "ejemplo": "Clear windshield frost." }
  ],
  "Desbloqueo Mental": [
    { "infinitive": "feel like going out", "espanol": "Tener ganas de salir", "ejemplo": "I don't feel like going out tonight." },
    { "infinitive": "run out of time", "espanol": "Quedarse sin tiempo", "ejemplo": "We are going to run out of time!" },
    { "infinitive": "look forward to", "espanol": "Esperar algo con ilusión", "ejemplo": "I look forward to seeing you soon." },
    { "infinitive": "take your time", "espanol": "Tómate tu tiempo", "ejemplo": "Take your time, there is no rush." },
    { "infinitive": "make up your mind", "espanol": "Decidirse", "ejemplo": "You need to make up your mind now." },
    { "infinitive": "wish i could", "espanol": "Ojalá pudiera", "ejemplo": "I wish I could speak fluently." },
    { "infinitive": "turn out", "espanol": "Resultar ser", "ejemplo": "It turns out to be easy." },
    { "infinitive": "drop off", "espanol": "Dejar a alguien / algo", "ejemplo": "Drop off the kids at school." },
    { "infinitive": "pick up", "espanol": "Recoger", "ejemplo": "Pick up packages later." },
    { "infinitive": "grow up", "espanol": "Crecer", "ejemplo": "Grow up in the city." },
    { "infinitive": "figure out", "espanol": "Averiguar / resolver", "ejemplo": "Figure out the problem." },
    { "infinitive": "calm down", "espanol": "Calmarse", "ejemplo": "Calm down and listen." },
    { "infinitive": "hurry up", "espanol": "Apurarse", "ejemplo": "Hurry up or we'll be late." },
    { "infinitive": "give up", "espanol": "Rendirse", "ejemplo": "Never give up learning." },
    { "infinitive": "hold on", "espanol": "Esperar un momento", "ejemplo": "Hold on a second." },
    { "infinitive": "look after", "espanol": "Cuidar de", "ejemplo": "Look after your pets." },
    { "infinitive": "carry on", "espanol": "Continuar", "ejemplo": "Carry on with your work." },
    { "infinitive": "show up", "espanol": "Aparecer / presentarse", "ejemplo": "Show up on time." },
    { "infinitive": "break down", "espanol": "Vararse / descomponerse", "ejemplo": "The car broke down." },
    { "infinitive": "find out", "espanol": "Enterarse", "ejemplo": "Find out the truth." }
  ]
};

const DATA_JUEGOS = {
  "Verbos": [
    { "key": "run", "emoji": "🏃", "espanol": "Correr", "ingles": "Run" },
    { "key": "eat", "emoji": "🍎", "espanol": "Comer", "ingles": "Eat" },
    { "key": "sleep", "emoji": "😴", "espanol": "Dormir", "ingles": "Sleep" },
    { "key": "read", "emoji": "📖", "espanol": "Leer", "ingles": "Read" },
    { "key": "write", "emoji": "✍️", "espanol": "Escribir", "ingles": "Write" },
    { "key": "drink", "emoji": "🥤", "espanol": "Beber", "ingles": "Drink" },
    { "key": "jump", "emoji": "🦘", "espanol": "Saltar", "ingles": "Jump" },
    { "key": "cook", "emoji": "🍳", "espanol": "Cocinar", "ingles": "Cook" },
    { "key": "play", "emoji": "⚽", "espanol": "Jugar", "ingles": "Play" }
  ],
  "Cualidades": [
    { "key": "happy", "emoji": "😀", "espanol": "Feliz", "ingles": "Happy" },
    { "key": "sad", "emoji": "😢", "espanol": "Triste", "ingles": "Sad" },
    { "key": "fast", "emoji": "⚡", "espanol": "Rápido", "ingles": "Fast" },
    { "key": "slow", "emoji": "🐢", "espanol": "Lento", "ingles": "Slow" },
    { "key": "big", "emoji": "🐘", "espanol": "Grande", "ingles": "Big" },
    { "key": "small", "emoji": "🐁", "espanol": "Pequeño", "ingles": "Small" },
    { "key": "hot", "emoji": "🔥", "espanol": "Caliente", "ingles": "Hot" },
    { "key": "cold", "emoji": "❄️", "espanol": "Frío", "ingles": "Cold" },
    { "key": "smart", "emoji": "💡", "espanol": "Inteligente", "ingles": "Smart" }
  ],
  "Objetos": [
    { "key": "brain", "emoji": "🧠", "espanol": "Cerebro / Mente", "ingles": "Brain" },
    { "key": "coffee", "emoji": "☕", "espanol": "Café", "ingles": "Coffee" },
    { "key": "car", "emoji": "🚗", "espanol": "Carro", "ingles": "Car" },
    { "key": "money", "emoji": "💵", "espanol": "Dinero", "ingles": "Money" },
    { "key": "phone", "emoji": "📱", "espanol": "Teléfono", "ingles": "Phone" },
    { "key": "clock", "emoji": "⏰", "espanol": "Reloj", "ingles": "Clock" },
    { "key": "house", "emoji": "🏠", "espanol": "Casa", "ingles": "House" },
    { "key": "book", "emoji": "📘", "espanol": "Libro", "ingles": "Book" },
    { "key": "water", "emoji": "💧", "espanol": "Agua", "ingles": "Water" }
  ],
  "Banderas": [
    { "key": "usa", "emoji": "🇺🇸", "espanol": "Estados Unidos", "ingles": "USA" },
    { "key": "uk", "emoji": "🇬🇧", "espanol": "Reino Unido", "ingles": "UK" },
    { "key": "canada", "emoji": "🇨🇦", "espanol": "Canadá", "ingles": "Canada" },
    { "key": "colombia", "emoji": "🇨🇴", "espanol": "Colombia", "ingles": "Colombia" },
    { "key": "mexico", "emoji": "🇲🇽", "espanol": "México", "ingles": "Mexico" },
    { "key": "spain", "emoji": "🇪🇸", "espanol": "España", "ingles": "Spain" },
    { "key": "brazil", "emoji": "🇧🇷", "espanol": "Brasil", "ingles": "Brazil" },
    { "key": "japan", "emoji": "🇯🇵", "espanol": "Japón", "ingles": "Japan" },
    { "key": "france", "emoji": "🇫🇷", "espanol": "Francia", "ingles": "France" }
  ]
};

const DATA_TEST = [
  { "id": 1, "pregunta": "¿Cómo se expresa de forma natural 'Tengo ganas de salir' usando plantillas de uso diario?", "opciones": ["A) I want for go out", "B) I feel like going out", "C) I have desire of go"], "correcta": 1 },
  { "id": 2, "pregunta": "¿Cuál es la reducción nativa más común para la frase 'What are you going to do?'", "opciones": ["A) Whatcha gonna do?", "B) What do you going to do?", "C) Wat ar you do?"], "correcta": 0 },
  { "id": 3, "pregunta": "¿Qué significa la acción específica de cocina: 'Crack an egg'?", "opciones": ["A) Cocinar un huevo duro", "B) Batir la yema", "C) Romper / cascar un huevo"], "correcta": 2 },
  { "id": 4, "pregunta": "¿Cómo se traduce correctamente la acción cotidiana 'Drop off the kids at school'?", "opciones": ["A) Dejar a los niños en el colegio", "B) Recoger a los niños tarde", "C) Llevar almuerzo a la escuela"], "correcta": 0 },
  { "id": 5, "pregunta": "Completa la estructura de deseo cotidiano: 'I just _________ sleep early today'", "opciones": ["A) want for", "B) wanna", "C) would"], "correcta": 1 }
];

const MASSIVE_EJERCICIOS = [
  // --- Fase 1: Expresiones de supervivencia y calle (El primer contacto) ---
  { "categoria": "Fase 1", "pregunta": "¿Qué tal? / ¿Qué pasa?", "respuesta": "What's up?" },
  { "categoria": "Fase 1", "pregunta": "¿Cómo vas? / ¿Cómo estás?", "respuesta": "How are you doing?" },
  { "categoria": "Fase 1", "pregunta": "Ya voy", "respuesta": "I'm coming" },
  { "categoria": "Fase 1", "pregunta": "Me voy / Ya me marcho", "respuesta": "I'm leaving" },
  { "categoria": "Fase 1", "pregunta": "Nos vemos más tarde", "respuesta": "See you later" },
  { "categoria": "Fase 1", "pregunta": "Mucho gusto en conocerte", "respuesta": "Nice to meet you" },
  { "categoria": "Fase 1", "pregunta": "Es un gusto", "respuesta": "It's a pleasure" },
  { "categoria": "Fase 1", "pregunta": "Con gusto / Es un placer", "respuesta": "My pleasure" },
  { "categoria": "Fase 1", "pregunta": "¿Estás ocupado(a)?", "respuesta": "Are you busy?" },
  { "categoria": "Fase 1", "pregunta": "¿Estás listo(a)?", "respuesta": "Are you ready?" },

  // --- Fase 2: Mecanización básica (I need to / I want to) ---
  { "categoria": "Fase 2", "pregunta": "Necesito irme", "respuesta": "I need to go" },
  { "categoria": "Fase 2", "pregunta": "Necesito hablar contigo", "respuesta": "I need to talk to you" },
  { "categoria": "Fase 2", "pregunta": "Necesito comprar esto", "respuesta": "I need to buy this" },
  { "categoria": "Fase 2", "pregunta": "No quiero ir", "respuesta": "I don't want to go" },
  { "categoria": "Fase 2", "pregunta": "No quiero beber un refresco", "respuesta": "I don't want to drink a soda" },
  { "categoria": "Fase 2", "pregunta": "¿Quieres venir?", "respuesta": "Do you want to come?" },
  { "categoria": "Fase 2", "pregunta": "¿Qué quieres comer?", "respuesta": "What do you want to eat?" },
  { "categoria": "Fase 2", "pregunta": "¿A dónde quieres ir?", "respuesta": "Where do you want to go?" },
  { "categoria": "Fase 2", "pregunta": "Tengo que trabajar hoy", "respuesta": "I have to work today" },
  { "categoria": "Fase 2", "pregunta": "Tengo que levantarme temprano", "respuesta": "I have to get up early" },

  // --- Fase 3: Mecanización de Preguntas de Arranque y Supervivencia ---
  { "categoria": "Fase 3", "pregunta": "¿Dónde vives?", "respuesta": "Where do you live?" },
  { "categoria": "Fase 3", "pregunta": "¿De dónde eres?", "respuesta": "Where are you from?" },
  { "categoria": "Fase 3", "pregunta": "¿Cuántos años tienes?", "respuesta": "How old are you?" },
  { "categoria": "Fase 3", "pregunta": "Tengo 30 años", "respuesta": "I'm 30 years old" },
  { "categoria": "Fase 3", "pregunta": "¿A qué te dedicas?", "respuesta": "What do you do?" },
  { "categoria": "Fase 3", "pregunta": "¿Me puedes ayudar?", "respuesta": "Can you help me?" },
  { "categoria": "Fase 3", "pregunta": "¿Puedes repetir eso?", "respuesta": "Can you repeat that?" },
  { "categoria": "Fase 3", "pregunta": "No entiendo", "respuesta": "I don't understand" },
  { "categoria": "Fase 3", "pregunta": "¿Puedes hablar más despacio?", "respuesta": "Can you speak slower?" },
  { "categoria": "Fase 3", "pregunta": "¿Cómo se dice esto?", "respuesta": "How do you say this?" },

  // --- Fase 4: Mecanización profunda de Deseos (Would you like to...?) ---
  { "categoria": "Fase 4", "pregunta": "¿Te gustaría ir?", "respuesta": "Would you like to go?" },
  { "categoria": "Fase 4", "pregunta": "¿Te gustaría un café?", "respuesta": "Would you like a coffee?" },
  { "categoria": "Fase 4", "pregunta": "¿A qué hora te gustaría venir?", "respuesta": "What time would you like to come?" },
  { "categoria": "Fase 4", "pregunta": "¿Por qué te gustaría ir?", "respuesta": "Why would you like to go?" },
  { "categoria": "Fase 4", "pregunta": "¿No te gustaría quedarte?", "respuesta": "Wouldn't you like to stay?" },
  { "categoria": "Fase 4", "pregunta": "Me gustaría probarlo", "respuesta": "I would like to try it" },
  { "categoria": "Fase 4", "pregunta": "No me gustaría eso", "respuesta": "I wouldn't like that" },
  { "categoria": "Fase 4", "pregunta": "¿Te gustaría algo de beber?", "respuesta": "Would you like something to drink?" },
  { "categoria": "Fase 4", "pregunta": "¿Dónde te gustaría comer?", "respuesta": "Where would you like to eat?" },
  { "categoria": "Fase 4", "pregunta": "¿Te gustaría acompañarnos?", "respuesta": "Would you like to join us?" },

  // --- Fase 5: Obligaciones y constancia (You have to / You'll have to) ---
  { "categoria": "Fase 5", "pregunta": "Tienes que probar esto", "respuesta": "You have to try this" },
  { "categoria": "Fase 5", "pregunta": "Tienes que tener cuidado", "respuesta": "You have to be careful" },
  { "categoria": "Fase 5", "pregunta": "Tendrás que trabajar más duro", "respuesta": "You'll have to work harder" },
  { "categoria": "Fase 5", "pregunta": "Tendrás que esperar", "respuesta": "You'll have to wait" },
  { "categoria": "Fase 5", "pregunta": "No tengo que explicar", "respuesta": "I don't have to explain" },
  { "categoria": "Fase 5", "pregunta": "¿Tengo que pagar ahora?", "respuesta": "Do I have to pay now?" },
  { "categoria": "Fase 5", "pregunta": "Tenemos que irnos pronto", "respuesta": "We have to leave soon" },
  { "categoria": "Fase 5", "pregunta": "No tienes que hacer eso", "respuesta": "You don't have to do that" },
  { "categoria": "Fase 5", "pregunta": "¿Qué tengo que hacer?", "respuesta": "What do I have to do?" },
  { "categoria": "Fase 5", "pregunta": "Tendrás que confiar en mí", "respuesta": "You'll have to trust me" },

  // --- Fase 6: Mecanización total del "Can I get...?" y Servicio (Restaurante/Tienda) ---
  { "categoria": "Fase 6", "pregunta": "¿Me puede dar un refresco?", "respuesta": "Can I get a soda?" },
  { "categoria": "Fase 6", "pregunta": "¿Me puede dar un poco de agua?", "respuesta": "Can I get some water?" },
  { "categoria": "Fase 6", "pregunta": "¿Me puede dar unas papas fritas?", "respuesta": "Can I get some fries?" },
  { "categoria": "Fase 6", "pregunta": "¿Me puede dar un combo de alitas de pollo y papas fritas?", "respuesta": "Can I get a combo of chicken wings and fries?" },
  { "categoria": "Fase 6", "pregunta": "¿Qué le puedo ofrecer? / ¿Qué le traigo?", "respuesta": "What can I get you?" },
  { "categoria": "Fase 6", "pregunta": "¿Me puede dar el menú por favor?", "respuesta": "Can I get a menu, please?" },
  { "categoria": "Fase 6", "pregunta": "¿Me puede dar la cuenta por favor?", "respuesta": "Can I get the check, please?" },
  { "categoria": "Fase 6", "pregunta": "¿Me lo puede dar para llevar?", "respuesta": "Can I get this to go?" },
  { "categoria": "Fase 6", "pregunta": "¿Qué le puedo servir hoy?", "respuesta": "What can I get for you today?" },
  { "categoria": "Fase 6", "pregunta": "¿Me puede dar una taza de café negro?", "respuesta": "Can I get a cup of black coffee?" },

  // --- Fase 7: El choque de realidades "I don't want to... but I have to..." ---
  { "categoria": "Fase 7", "pregunta": "No quiero trabajar, pero me toca / tengo que hacerlo", "respuesta": "I don't want to work, but I have to" },
  { "categoria": "Fase 7", "pregunta": "No quiero levantarme temprano, pero tengo que hacerlo", "respuesta": "I don't want to get up early, but I have to" },
  { "categoria": "Fase 7", "pregunta": "No quiero limpiar, pero tengo que hacerlo", "respuesta": "I don't want to clean, but I have to" },
  { "categoria": "Fase 7", "pregunta": "No quiero salir, pero tengo que hacerlo", "respuesta": "I don't want to go out, but I have to" },
  { "categoria": "Fase 7", "pregunta": "No quiero estudiar, pero tengo que hacerlo", "respuesta": "I don't want to study, but I have to" },
  { "categoria": "Fase 7", "pregunta": "No quiero cocinar esta noche, pero tengo que hacerlo", "respuesta": "I don't want to cook tonight, but I have to" },
  { "categoria": "Fase 7", "pregunta": "No quiero esperar, pero tengo que hacerlo", "respuesta": "I don't want to wait, but I have to" },
  { "categoria": "Fase 7", "pregunta": "No quiero responder esto, pero tengo que hacerlo", "respuesta": "I don't want to answer this, but I have to" },
  { "categoria": "Fase 7", "pregunta": "No quiero pagar esto, pero tengo que hacerlo", "respuesta": "I don't want to pay this, but I have to" },
  { "categoria": "Fase 7", "pregunta": "No quiero hablar de eso, pero tengo que hacerlo", "respuesta": "I don't want to talk about it, but I have to" },

  // --- Fase 8: Opiniones cotidianas y valoraciones (It's important / It's necessary / It's different) ---
  { "categoria": "Fase 8", "pregunta": "Es importante aprender inglés", "respuesta": "It's important to learn English" },
  { "categoria": "Fase 8", "pregunta": "Es necesario practicar todos los días", "respuesta": "It's necessary to practice every day" },
  { "categoria": "Fase 8", "pregunta": "Es diferente hablar francés", "respuesta": "It's different to speak French" },
  { "categoria": "Fase 8", "pregunta": "Es diferente para mí hablar francés", "respuesta": "It's different for me to speak French" },
  { "categoria": "Fase 8", "pregunta": "Es difícil levantarse temprano", "respuesta": "It's hard to get up early" },
  { "categoria": "Fase 8", "pregunta": "Es fácil aprender con este método", "respuesta": "It's easy to learn with this method" },
  { "categoria": "Fase 8", "pregunta": "Es importante que sepas la verdad", "respuesta": "It's important for you to know the truth" },
  { "categoria": "Fase 8", "pregunta": "Es necesario que nos vayamos ahora", "respuesta": "It's necessary for us to leave now" },
  { "categoria": "Fase 8", "pregunta": "Es difícil entender a los nativos", "respuesta": "It's difficult to understand native speakers" },
  { "categoria": "Fase 8", "pregunta": "Es interesante aprender cosas nuevas", "respuesta": "It's interesting to learn new things" },

  // --- Fase 9: Influencia sobre otros (I need you to... / I want you to...) ---
  { "categoria": "Fase 9", "pregunta": "Necesito que tú trabajes ahora", "respuesta": "I need you to work now" },
  { "categoria": "Fase 9", "pregunta": "Necesito que él se quede aquí", "respuesta": "I need him to stay here" },
  { "categoria": "Fase 9", "pregunta": "Quiero que te levantes temprano", "respuesta": "I want you to get up early" },
  { "categoria": "Fase 9", "pregunta": "Quiero que ella entienda el plan", "respuesta": "I want her to understand the plan" },
  { "categoria": "Fase 9", "pregunta": "Necesito que me ayudes con esto", "respuesta": "I need you to help me with this" },
  { "categoria": "Fase 9", "pregunta": "Quiero que me escuches", "respuesta": "I want you to listen to me" },
  { "categoria": "Fase 9", "pregunta": "Necesito que ellos me llamen más tarde", "respuesta": "I need them to call me later" },
  { "categoria": "Fase 9", "pregunta": "Quiero que tengas cuidado", "respuesta": "I want you to be careful" },
  { "categoria": "Fase 9", "pregunta": "Necesito que firmes este papel", "respuesta": "I need you to sign this paper" },
  { "categoria": "Fase 9", "pregunta": "Quiero que lo intentes de nuevo", "respuesta": "I want you to try again" },

  // --- Fase 10: Deseos y Esperanzas con Estilo Nativo ("I wish I could..." / "I hope I can...") ---
  { "categoria": "Fase 10", "pregunta": "Ojalá pudiera ir a Nueva York", "respuesta": "I wish I could go to New York" },
  { "categoria": "Fase 10", "pregunta": "Ojalá pudiera hablar francés con fluidez", "respuesta": "I wish I could speak French fluently" },
  { "categoria": "Fase 10", "pregunta": "Ojalá pudiera quedarme más tiempo", "respuesta": "I wish I could stay longer" },
  { "categoria": "Fase 10", "pregunta": "Espero poder verte mañana / Ojalá pueda verte", "respuesta": "I hope I can see you tomorrow" },
  { "categoria": "Fase 10", "pregunta": "Ojalá ella pueda asistir / Ojalá lo logre", "respuesta": "I hope she can make it" },
  { "categoria": "Fase 10", "pregunta": "Ojalá puedan conseguir un nuevo trabajo", "respuesta": "I hope they can get a new job" },
  { "categoria": "Fase 10", "pregunta": "Espero poder terminar esto hoy", "respuesta": "I hope I can finish this today" },
  { "categoria": "Fase 10", "pregunta": "Ojalá pudiera ayudarte", "respuesta": "I wish I could help you" },
  { "categoria": "Fase 10", "pregunta": "Ojalá puedas arreglar esto", "respuesta": "I hope you can fix this" },
  { "categoria": "Fase 10", "pregunta": "Ojalá pudiera viajar más seguido", "respuesta": "I wish I could travel more often" },

  // --- Fase 11: Revelaciones y Sorpresas Diarias ("I thought..." + "Turns out...") ---
  { "categoria": "Fase 11", "pregunta": "Pensé que ella estaba casada", "respuesta": "I thought she was married" },
  { "categoria": "Fase 11", "pregunta": "Resulta que está soltera", "respuesta": "Turns out she's single" },
  { "categoria": "Fase 11", "pregunta": "Pensé que estaba lloviendo", "respuesta": "I thought it was raining" },
  { "categoria": "Fase 11", "pregunta": "Resulta que solo era una falsa alarma", "respuesta": "Turns out it was just a false alarm" },
  { "categoria": "Fase 11", "pregunta": "Pensé que estabas ocupado", "respuesta": "I thought you were busy" },
  { "categoria": "Fase 11", "pregunta": "Resulta que estabas libre", "respuesta": "Turns out you were free" },
  { "categoria": "Fase 11", "pregunta": "Pensé que él hablaba inglés", "respuesta": "I thought he spoke English" },
  { "categoria": "Fase 11", "pregunta": "Resulta que no entendía ni una palabra", "respuesta": "Turns out he didn't understand a word" },
  { "categoria": "Fase 11", "pregunta": "Pensé que esto era barato", "respuesta": "I thought this was cheap" },
  { "categoria": "Fase 11", "pregunta": "Resulta que costaba una fortuna", "respuesta": "Turns out it cost a fortune" },

  // --- Fase 12: Deducciones y Futuros Espontáneos ("I think I'll have to..." / "I think you'll have to...") ---
  { "categoria": "Fase 12", "pregunta": "Creo que tendré que trabajar hasta tarde", "respuesta": "I think I'll have to work late" },
  { "categoria": "Fase 12", "pregunta": "Creo que tendrás que esperar", "respuesta": "I think you'll have to wait" },
  { "categoria": "Fase 12", "pregunta": "Creo que tendré que llamarlo", "respuesta": "I think I'll have to call him" },
  { "categoria": "Fase 12", "pregunta": "Creo que tendremos que cambiar el plan", "respuesta": "I think we'll have to change the plan" },
  { "categoria": "Fase 12", "pregunta": "Creo que tendrás que disculparte", "respuesta": "I think you'll have to apologize" },
  { "categoria": "Fase 12", "pregunta": "Creo que tendré que cancelar la reunión", "respuesta": "I think I'll have to cancel the meeting" },
  { "categoria": "Fase 12", "pregunta": "Creo que ellos tendrán que pagar más", "respuesta": "I think they'll have to pay more" },
  { "categoria": "Fase 12", "pregunta": "Creo que tendré que comprar un teléfono nuevo", "respuesta": "I think I'll have to buy a new phone" },
  { "categoria": "Fase 12", "pregunta": "Creo que tendrás que intentarlo de nuevo", "respuesta": "I think you'll have to try again" },
  { "categoria": "Fase 12", "pregunta": "Creo que tendré que quedarme en casa", "respuesta": "I think I'll have to stay home" },

  // --- Fase 13: La duda natural y el manejo de escenarios inciertos ("I'm not sure if...") ---
  { "categoria": "Fase 13", "pregunta": "No estoy seguro si ella va a venir", "respuesta": "I'm not sure if she is coming" },
  { "categoria": "Fase 13", "pregunta": "No estoy seguro si estás trabajando hoy", "respuesta": "I'm not sure if you are working today" },
  { "categoria": "Fase 13", "pregunta": "No estoy seguro si a ellos les gusta la comida", "respuesta": "I'm not sure if they like the food" },
  { "categoria": "Fase 13", "pregunta": "No estoy seguro si podré asistir / lograrlo", "respuesta": "I'm not sure if I can make it" },
  { "categoria": "Fase 13", "pregunta": "No estoy seguro si esto es correcto", "respuesta": "I'm not sure if this is correct" },
  { "categoria": "Fase 13", "pregunta": "No estoy seguro si él sabe la verdad", "respuesta": "I'm not sure if he knows the truth" },
  { "categoria": "Fase 13", "pregunta": "No estoy seguro si tenemos tiempo", "respuesta": "I'm not sure if we have time" },
  { "categoria": "Fase 13", "pregunta": "No estoy seguro si ella quiere hablar", "respuesta": "I'm not sure if she wants to talk" },
  { "categoria": "Fase 13", "pregunta": "No estoy seguro si la tienda está abierta", "respuesta": "I'm not sure if the store is open" },
  { "categoria": "Fase 13", "pregunta": "No estoy seguro si debería comprarlo", "respuesta": "I'm not sure if I should buy it" },

  // --- Fase 14: Sugerencias elegantes y escenarios hipotéticos ("It would be nice/good/important if...") ---
  { "categoria": "Fase 14", "pregunta": "Sería lindo si me ayudaras", "respuesta": "It would be nice if you helped me" },
  { "categoria": "Fase 14", "pregunta": "Sería genial si vinieras mañana", "respuesta": "It would be nice if you came tomorrow" },
  { "categoria": "Fase 14", "pregunta": "Sería bueno si empezáramos temprano", "respuesta": "It would be good if we started early" },
  { "categoria": "Fase 14", "pregunta": "Sería importante si practicaras más", "respuesta": "It would be important if you practiced more" },
  { "categoria": "Fase 14", "pregunta": "Sería agradable si ella me llamara", "respuesta": "It would be nice if she called me" },
  { "categoria": "Fase 14", "pregunta": "Sería bueno si le echaras un vistazo a esto", "respuesta": "It would be good if you checked this out" },
  { "categoria": "Fase 14", "pregunta": "Sería importante si termináramos esta semana", "respuesta": "It would be important if we finished this week" },
  { "categoria": "Fase 14", "pregunta": "Sería lindo si nos acompañaras", "respuesta": "It would be nice if you joined us" },
  { "categoria": "Fase 14", "pregunta": "Sería bueno si ahorrabas algo de dinero", "respuesta": "It would be good if you saved some money" },
  { "categoria": "Fase 14", "pregunta": "Sería importante si mantuvieras la calma", "respuesta": "It would be important if you stayed calm" },

  // --- Fase 15: Preguntas cotidianas y de tiempo real (What time / How long / How far / Why are you) ---
  { "categoria": "Fase 15", "pregunta": "¿A qué hora te vas a ir?", "respuesta": "What time are you going to leave?" },
  { "categoria": "Fase 15", "pregunta": "¿A qué hora vas a llegar?", "respuesta": "What time are you going to arrive?" },
  { "categoria": "Fase 15", "pregunta": "¿Cuánto tiempo te vas a quedar aquí?", "respuesta": "How long are you going to stay here?" },
  { "categoria": "Fase 15", "pregunta": "¿Cuánto tiempo vas a esperar?", "respuesta": "How long are you going to wait?" },
  { "categoria": "Fase 15", "pregunta": "¿Qué tan lejos queda la estación de aquí?", "respuesta": "How far is the station from here?" },
  { "categoria": "Fase 15", "pregunta": "¿Qué tan lejos está tu casa?", "respuesta": "How far is your house?" },
  { "categoria": "Fase 15", "pregunta": "¿Cuándo vas a empezar a trabajar?", "respuesta": "When are you going to start working?" },
  { "categoria": "Fase 15", "pregunta": "¿Cuándo vas a terminar esto?", "respuesta": "When are you going to finish this?" },
  { "categoria": "Fase 15", "pregunta": "¿Por qué me llamas tan tarde?", "respuesta": "Why are you calling me so late?" },
  { "categoria": "Fase 15", "pregunta": "¿Por qué estás cambiando el plan?", "respuesta": "Why are you changing the plan?" },

  // --- Fase 16: Ofrecimientos y cortesía nativa con "Should I...?" (Acciones de casa y ayuda) ---
  { "categoria": "Fase 16", "pregunta": "¿Abro la puerta? / ¿Debería abrir la puerta?", "respuesta": "Should I open the door?" },
  { "categoria": "Fase 16", "pregunta": "¿Tapo la comida? / ¿Debería tapar la comida?", "respuesta": "Should I cover the food?" },
  { "categoria": "Fase 16", "pregunta": "¿Te caliento la cena? / ¿Debería calentar la cena?", "respuesta": "Should I heat up the dinner?" },
  { "categoria": "Fase 16", "pregunta": "¿Te pido un taxi? / ¿Debería llamarte un taxi?", "respuesta": "Should I call a cab for you?" },
  { "categoria": "Fase 16", "pregunta": "¿Espero afuera? / ¿Debería esperar afuera?", "respuesta": "Should I wait outside?" },
  { "categoria": "Fase 16", "pregunta": "¿Enciendo las luces? / ¿Debería encender las luces?", "respuesta": "Should I turn on the lights?" },
  { "categoria": "Fase 16", "pregunta": "¿Compro un poco de leche? / ¿Debería comprar leche?", "respuesta": "Should I buy some milk?" },
  { "categoria": "Fase 16", "pregunta": "¿Cancelo la reunión? / ¿Debería cancelar la reunión?", "respuesta": "Should I cancel the meeting?" },
  { "categoria": "Fase 16", "pregunta": "¿Limpio el mesón? / ¿Debería limpiar la encimera?", "respuesta": "Should I clean the counter?" },
  { "categoria": "Fase 16", "pregunta": "¿Te ayudo con eso? / ¿Debería ayudarte con eso?", "respuesta": "Should I help you with that?" },

  // --- Fase 17: Cortesía avanzada y peticiones elegantes ("I was wondering if...") ---
  { "categoria": "Fase 17", "pregunta": "Me estaba preguntando si estabas ocupado(a)", "respuesta": "I was wondering if you were busy" },
  { "categoria": "Fase 17", "pregunta": "Me estaba preguntando si podrías hacerme un favor", "respuesta": "I was wondering if you could do me a favor" },
  { "categoria": "Fase 17", "pregunta": "Me estaba preguntando si podría darme su número de teléfono", "respuesta": "I was wondering if I could get your phone number" },
  { "categoria": "Fase 17", "pregunta": "Me estaba preguntando si querías venir", "respuesta": "I was wondering if you wanted to come" },
  { "categoria": "Fase 17", "pregunta": "Me estaba preguntando si podríamos reprogramar", "respuesta": "I was wondering if we could reschedule" },
  { "categoria": "Fase 17", "pregunta": "Me pregunto si ella va a venir hoy", "respuesta": "I wonder if she is coming today" },
  { "categoria": "Fase 17", "pregunta": "Me pregunto qué le pasó a él", "respuesta": "I wonder what happened to him" },
  { "categoria": "Fase 17", "pregunta": "Me estaba preguntando si podrías echarme una mano", "respuesta": "I was wondering if you could help me out" },
  { "categoria": "Fase 17", "pregunta": "Me estaba preguntando si este asiento está ocupado", "respuesta": "I was wondering if this seat is taken" },
  { "categoria": "Fase 17", "pregunta": "Me pregunto si ellos saben la verdad", "respuesta": "I wonder if they know the truth" },

  // --- Fase 18: Sensaciones, matices y el arte de hablar relajado ("I feel like..." + "You know / kind of") ---
  { "categoria": "Fase 18", "pregunta": "Tengo ganas de / Siento como que quiero quedarme en casa esta noche", "respuesta": "I feel like staying home tonight" },
  { "categoria": "Fase 18", "pregunta": "Siento que algo anda mal", "respuesta": "I feel like something is wrong" },
  { "categoria": "Fase 18", "pregunta": "¿Sabes? Estoy un poco ocupado ahora mismo", "respuesta": "You know, I'm kind of busy right now" },
  { "categoria": "Fase 18", "pregunta": "¿Sabes? Quiero hablar contigo", "respuesta": "You know, I want to talk to you" },
  { "categoria": "Fase 18", "pregunta": "¿Sabes? Quizás podríamos hacerlo más tarde", "respuesta": "You know, maybe we could do it later" },
  { "categoria": "Fase 18", "pregunta": "Se me antoja / Siento ganas de comer algo dulce", "respuesta": "I feel like eating something sweet" },
  { "categoria": "Fase 18", "pregunta": "¿Sabes? Es un poco difícil", "respuesta": "You know, it's kind of difficult" },
  { "categoria": "Fase 18", "pregunta": "Quizás podríamos ir juntos", "respuesta": "Maybe we could go together" },
  { "categoria": "Fase 18", "pregunta": "¿Sabes? Tal vez deberías llamarlo", "respuesta": "You know, maybe you should call him" },
  { "categoria": "Fase 18", "pregunta": "Siento que necesitamos un descanso", "respuesta": "I feel like we need a break" },

  // --- Fase 19: El toque nativo de realidad con "Actually" y "To be honest" ---
  { "categoria": "Fase 19", "pregunta": "De hecho, estaba a punto de llamarte", "respuesta": "Actually, I was about to call you" },
  { "categoria": "Fase 19", "pregunta": "En realidad, no estoy de acuerdo con eso", "respuesta": "Actually, I don't agree with that" },
  { "categoria": "Fase 19", "pregunta": "Para ser honesto, la verdad no sé", "respuesta": "To be honest, I really don't know" },
  { "categoria": "Fase 19", "pregunta": "De hecho, es mucho más fácil de lo que crees", "respuesta": "Actually, it's much easier than you think" },
  { "categoria": "Fase 19", "pregunta": "Para ser sincero, estoy algo cansado hoy", "respuesta": "To be honest, I'm kind of tired today" },
  { "categoria": "Fase 19", "pregunta": "De hecho, nos conocimos hace unos años", "respuesta": "Actually, we met a few years ago" },
  { "categoria": "Fase 19", "pregunta": "Para ser honesto, no me gustó la película", "respuesta": "To be honest, I didn't like the movie" },
  { "categoria": "Fase 19", "pregunta": "En realidad, puedo hacerlo yo mismo", "respuesta": "Actually, I can do it myself" },
  { "categoria": "Fase 19", "pregunta": "Para ser sincero, se me olvidó", "respuesta": "To be honest, I forgot about it" },
  { "categoria": "Fase 19", "pregunta": "De hecho, esa es una idea brillante", "respuesta": "Actually, that's a brilliant idea" },

  // --- Fase 20: El dominio total de resolver y descifrar con "Figure out" ---
  { "categoria": "Fase 20", "pregunta": "Necesito averiguar cómo funciona esto", "respuesta": "I need to figure out how this works" },
  { "categoria": "Fase 20", "pregunta": "Tenemos que encontrar/resolver una solución", "respuesta": "We have to figure out a solution" },
  { "categoria": "Fase 20", "pregunta": "Déjame resolverlo / déjame ver cómo se hace", "respuesta": "Let me figure it out" },
  { "categoria": "Fase 20", "pregunta": "¿Cómo descifraste eso? / ¿Cómo te enteraste?", "respuesta": "How did you figure that out?" },
  { "categoria": "Fase 20", "pregunta": "Estoy tratando de organizar/cuadrar mi horario", "respuesta": "I'm trying to figure out my schedule" },
  { "categoria": "Fase 20", "pregunta": "Ella resolvió el problema en segundos", "respuesta": "She figured out the problem in seconds" },
  { "categoria": "Fase 20", "pregunta": "No te preocupes, resolveremos algo / se nos ocurrirá algo", "respuesta": "Don't worry, we'll figure something out" },
  { "categoria": "Fase 20", "pregunta": "¿Me puedes ayudar a descifrar/resolver esto?", "respuesta": "Can you help me figure this out?" },
  { "categoria": "Fase 20", "pregunta": "Él está tratando de resolver su vida", "respuesta": "He's trying to figure out his life" },
  { "categoria": "Fase 20", "pregunta": "Tenemos que averiguar quién es el responsable", "respuesta": "We need to figure out who is responsible" },

  // --- Fase 21: Mecanización total de accidentes y momentos con "I was about to..." ---
  { "categoria": "Fase 21", "pregunta": "Estaba a punto de llamarte", "respuesta": "I was about to call you" },
  { "categoria": "Fase 21", "pregunta": "Estaba a punto de botar / dejar caer mi teléfono", "respuesta": "I was about to drop my phone" },
  { "categoria": "Fase 21", "pregunta": "Estaba a punto de quedarme dormido", "respuesta": "I was about to fall asleep" },
  { "categoria": "Fase 21", "pregunta": "Estaba a punto de salir de la casa", "respuesta": "I was about to leave the house" },
  { "categoria": "Fase 21", "pregunta": "Estaba a punto de escribirte un mensaje", "respuesta": "I was about to text you" },
  { "categoria": "Fase 21", "pregunta": "Estaba a punto de comprarlo, pero era muy costoso", "respuesta": "I was about to buy it, but it was too expensive" },
  { "categoria": "Fase 21", "pregunta": "Estaba a punto de decir lo mismo", "respuesta": "I was about to say the same thing" },
  { "categoria": "Fase 21", "pregunta": "Estaba a punto de perder mi vuelo", "respuesta": "I was about to miss my flight" },
  { "categoria": "Fase 21", "pregunta": "Estaba a punto de empezar a trabajar", "respuesta": "I was about to start working" },
  { "categoria": "Fase 21", "pregunta": "Estaba a punto de rendirme", "respuesta": "I was about to give up" },

  // --- Fase 22: Acciones recién hechas con el poderoso "I just..." ---
  { "categoria": "Fase 22", "pregunta": "Acabo de llegar a casa", "respuesta": "I just got home" },
  { "categoria": "Fase 22", "pregunta": "Acabo de terminar mi trabajo", "respuesta": "I just finished my work" },
  { "categoria": "Fase 22", "pregunta": "Acabo de despertarme", "respuesta": "I just woke up" },
  { "categoria": "Fase 22", "pregunta": "Acabo de enviarte el archivo", "respuesta": "I just sent you the file" },
  { "categoria": "Fase 22", "pregunta": "Acabo de comprar un carro nuevo", "respuesta": "I just bought a new car" },
  { "categoria": "Fase 22", "pregunta": "Acabo de verlo en el pasillo", "respuesta": "I just saw him in the hallway" },
  { "categoria": "Fase 22", "pregunta": "Acabo de escuchar la noticia", "respuesta": "I just heard the news" },
  { "categoria": "Fase 22", "pregunta": "Acabo de darme cuenta de algo", "respuesta": "I just realized something" },
  { "categoria": "Fase 22", "pregunta": "Acabo de tomarme una taza de café", "respuesta": "I just drank a cup of coffee" },
  { "categoria": "Fase 22", "pregunta": "Acabo de cerrar la puerta con llave", "respuesta": "I just locked the door" },

  // --- Fase 23: Combinando el relato del día a día (Mezcla de sorpresas e inmediatez) ---
  { "categoria": "Fase 23", "pregunta": "Estaba a punto de llamarte cuando me escribiste", "respuesta": "I was about to call you when you text me" },
  { "categoria": "Fase 23", "pregunta": "Acabo de llegar a casa, ¿qué tal?", "respuesta": "I just got home, what's up?" },
  { "categoria": "Fase 23", "pregunta": "Estaba a punto de quedarme dormido, pero sonó mi teléfono", "respuesta": "I was about to fall asleep, but my phone rang" },
  { "categoria": "Fase 23", "pregunta": "Acabo de terminar de cocinar, ¿quieres un poco?", "respuesta": "I just finished cooking, do you want some?" },
  { "categoria": "Fase 23", "pregunta": "Estaba a punto de irme, resulta que llegaste", "respuesta": "I was about to leave, turns out you arrived" },
  { "categoria": "Fase 23", "pregunta": "Acabo de darme cuenta de que olvidé mis llaves", "respuesta": "I just realized I forgot my keys" },
  { "categoria": "Fase 23", "pregunta": "Estaba a punto de revisar mi agenda", "respuesta": "I was about to check my schedule" },
  { "categoria": "Fase 23", "pregunta": "Acabo de resolverlo / descifrarlo", "respuesta": "I just figured it out" },
  { "categoria": "Fase 23", "pregunta": "Estaba a punto de pedir comida", "respuesta": "I was about to order food" },
  { "categoria": "Fase 23", "pregunta": "Solo quería saludar / Acabo de querer saludar", "respuesta": "I just wanted to say hi" },

  // --- Fase 24: Conectores y muletillas de fluidez natural (You know, I mean, basically) ---
  { "categoria": "Fase 24", "pregunta": "O sea / Digo, no es para tanto", "respuesta": "I mean, it's not a big deal" },
  { "categoria": "Fase 24", "pregunta": "O sea, ¿me entiendes lo que quiero decir?", "respuesta": "You know what I mean?" },
  { "categoria": "Fase 24", "pregunta": "Básicamente, necesitamos cambiar todo el plan", "respuesta": "Basically, we need to change the whole plan" },
  { "categoria": "Fase 24", "pregunta": "O sea, no quería decir eso exactamente", "respuesta": "I mean, I didn't mean to say that" },
  { "categoria": "Fase 24", "pregunta": "Ya sabes, las cosas cambiaron muy rápido", "respuesta": "You know, things changed very fast" },
  { "categoria": "Fase 24", "pregunta": "Básicamente, se nos acabó el tiempo", "respuesta": "Basically, we ran out of time" },
  { "categoria": "Fase 24", "pregunta": "O sea, es un poco difícil de explicar", "respuesta": "I mean, it's kind of hard to explain" },
  { "categoria": "Fase 24", "pregunta": "Ya sabes cómo funciona este negocio", "respuesta": "You know how this business works" },
  { "categoria": "Fase 24", "pregunta": "Básicamente, él decidió renunciar", "respuesta": "Basically, he decided to quit" },
  { "categoria": "Fase 24", "pregunta": "O sea, fue un accidente total", "respuesta": "I mean, it was a total accident" },

  // --- Fase 25: Énfasis absoluto con "Totally", "Seriously" y "Honestly" ---
  { "categoria": "Fase 25", "pregunta": "En serio, no tenía idea de nada", "respuesta": "Seriously, I had no idea about anything" },
  { "categoria": "Fase 25", "pregunta": "Estoy totalmente de acuerdo contigo en esto", "respuesta": "I totally agree with you on this" },
  { "categoria": "Fase 25", "pregunta": "Honestamente, fue la mejor decisión de mi vida", "respuesta": "Honestly, it was the best decision of my life" },
  { "categoria": "Fase 25", "pregunta": "¿En serio vas a dejar tu trabajo?", "respuesta": "Seriously, are you going to quit your job?" },
  { "categoria": "Fase 25", "pregunta": "Estoy totalmente perdido con este programa", "respuesta": "I'm totally lost with this software" },
  { "categoria": "Fase 25", "pregunta": "Honestamente, no creo que funcione", "respuesta": "Honestly, I don't think it will work" },
  { "categoria": "Fase 25", "pregunta": "Te entiendo totalmente", "respuesta": "I totally get you" },
  { "categoria": "Fase 25", "pregunta": "En serio, tienes que ver esta película", "respuesta": "Seriously, you have to watch this movie" },
  { "categoria": "Fase 25", "pregunta": "Honestamente, se me olvidó por completo", "respuesta": "Honestly, I completely forgot about it" },
  { "categoria": "Fase 25", "pregunta": "Estoy totalmente agotado después de hoy", "respuesta": "I'm totally exhausted after today" },

  // --- Fase 26: Matices de contraste con "Actually" y "To be fair" ---
  { "categoria": "Fase 26", "pregunta": "De hecho, la idea no suena nada mal", "respuesta": "Actually, the idea doesn't sound bad at all" },
  { "categoria": "Fase 26", "pregunta": "Para ser justo con él, hizo su mejor esfuerzo", "respuesta": "To be fair to him, he did his best" },
  { "categoria": "Fase 26", "pregunta": "De hecho, nos conocemos desde hace años", "respuesta": "Actually, we've known each other for years" },
  { "categoria": "Fase 26", "pregunta": "Para ser justos, nadie sabía qué hacer", "respuesta": "To be fair, nobody knew what to do" },
  { "categoria": "Fase 26", "pregunta": "En realidad, prefiero quedarme en casa", "respuesta": "Actually, I prefer to stay home" },
  { "categoria": "Fase 26", "pregunta": "Para ser justos, el examen estuvo muy difícil", "respuesta": "To be fair, the test was very difficult" },
  { "categoria": "Fase 26", "pregunta": "De hecho, compré dos por el precio de uno", "respuesta": "Actually, I bought two for the price of one" },
  { "categoria": "Fase 26", "pregunta": "Para ser honesto y justo, ella tiene razón", "respuesta": "To be fair, she has a point" },
  { "categoria": "Fase 26", "pregunta": "En realidad, no fue tan grave", "respuesta": "Actually, it wasn't that serious" },
  { "categoria": "Fase 26", "pregunta": "Para ser justos, el tráfico estaba insoportable", "respuesta": "To be fair, the traffic was unbearable" },

  // --- Fase 27: Expresiones de certeza y certidumbre conversacional (Obviously / Clearly) ---
  { "categoria": "Fase 27", "pregunta": "Obviamente, no voy a hacer eso", "respuesta": "Obviously, I'm not going to do that" },
  { "categoria": "Fase 27", "pregunta": "Es evidente que se equivocó de dirección", "respuesta": "Clearly, he got the wrong address" },
  { "categoria": "Fase 27", "pregunta": "Obviamente, ella se molestó un poco", "respuesta": "Obviously, she got a little upset" },
  { "categoria": "Fase 27", "pregunta": "Se nota claramente que estás cansado", "respuesta": "It's clearly noticeable that you are tired" },
  { "categoria": "Fase 27", "pregunta": "Obviamente, necesitamos más personal", "respuesta": "Obviously, we need more staff" },
  { "categoria": "Fase 27", "pregunta": "Claramente no entendiste mi punto", "respuesta": "Clearly, you didn't get my point" },
  { "categoria": "Fase 27", "pregunta": "Obviamente iba a pasar tarde o temprano", "respuesta": "Obviously, it was going to happen sooner or later" },
  { "categoria": "Fase 27", "pregunta": "Es evidente que no quiere hablar del tema", "respuesta": "Clearly, she doesn't want to talk about it" },
  { "categoria": "Fase 27", "pregunta": "Obviamente tienes la última palabra", "respuesta": "Obviously, you have the final say" },
  { "categoria": "Fase 27", "pregunta": "Está clarísimo lo que tenemos que hacer", "respuesta": "It's completely clear what we have to do" },

  // --- Fase 28: Transiciones y pausas con "Look", "Listen", y "Look, here's the thing" ---
  { "categoria": "Fase 28", "pregunta": "Mira, la cosa es así", "respuesta": "Look, here's the thing" },
  { "categoria": "Fase 28", "pregunta": "Escúchame bien lo que te voy a decir", "respuesta": "Listen to me carefully" },
  { "categoria": "Fase 28", "pregunta": "Mira, no podemos perder más tiempo", "respuesta": "Look, we can't waste any more time" },
  { "categoria": "Fase 28", "pregunta": "Escucha, te explicaré por qué pasó", "respuesta": "Listen, I'll explain why it happened" },
  { "categoria": "Fase 28", "pregunta": "Mira, déjame solucionarlo a mi manera", "respuesta": "Look, let me handle it my way" },
  { "categoria": "Fase 28", "pregunta": "Escucha, no te lo tomes personal", "respuesta": "Listen, don't take it personally" },
  { "categoria": "Fase 28", "pregunta": "Mira, te soy sincero, no tengo dinero", "respuesta": "Look, to be honest, I don't have money" },
  { "categoria": "Fase 28", "pregunta": "Escucha, esta es nuestra única oportunidad", "respuesta": "Listen, this is our only chance" },
  { "categoria": "Fase 28", "pregunta": "Mira, hablemos de esto mañana con calma", "respuesta": "Look, let's talk about this tomorrow calmly" },
  { "categoria": "Fase 28", "pregunta": "Escucha, confía en mí una vez más", "respuesta": "Listen, trust me one more time" }, 

  // --- Fase 29: Experiencias de vida y preguntas con "Have you ever...?" y tiempo natural ---
  { "categoria": "Fase 29", "pregunta": "¿Alguna vez has viajado solo al extranjero?", "respuesta": "Have you ever traveled alone abroad?" },
  { "categoria": "Fase 29", "pregunta": "¿Alguna vez te has quedado dormido en el trabajo?", "respuesta": "Have you ever fallen asleep at work?" },
  { "categoria": "Fase 29", "pregunta": "Nunca en mi vida había visto algo así", "respuesta": "I've never seen anything like this in my life" },
  { "categoria": "Fase 29", "pregunta": "¿Alguna vez has probado la comida mexicana auténtica?", "respuesta": "Have you ever tried authentic Mexican food?" },
  { "categoria": "Fase 29", "pregunta": "He estado pensando en eso todo el día", "respuesta": "I've been thinking about that all day long" },
  { "categoria": "Fase 29", "pregunta": "¿Alguna vez has perdido las llaves de tu casa?", "respuesta": "Have you ever lost your house keys?" },
  { "categoria": "Fase 29", "pregunta": "Últimamente no he tenido tiempo ni de respirar", "respuesta": "Lately, I haven't had time to even breathe" },
  { "categoria": "Fase 29", "pregunta": "¿Alguna vez le has mentido a tu jefe?", "respuesta": "Have you ever lied to your boss?" },
  { "categoria": "Fase 29", "pregunta": "He estado trabajando aquí desde hace tres años", "respuesta": "I've been working here for three years" },
  { "categoria": "Fase 29", "pregunta": "¿Alguna vez te has arrepentido de una decisión?", "respuesta": "Have you ever regretted a decision?" }, 

  // --- Fase 30: Respuestas afirmativas y negativas de experiencias con toque nativo ---
  { "categoria": "Fase 30", "pregunta": "Sí, lo he hecho un par de veces", "respuesta": "Yes, I've done it a couple of times" },
  { "categoria": "Fase 30", "pregunta": "No, nunca en mi vida he hecho eso", "respuesta": "No, I've never done that in my life" },
  { "categoria": "Fase 30", "pregunta": "Sí, lo he intentado varias veces", "respuesta": "Yeah, I've tried it several times" },
  { "categoria": "Fase 30", "pregunta": "No, la verdad es que nunca he estado allí", "respuesta": "No, to be honest, I've never been there" },
  { "categoria": "Fase 30", "pregunta": "Sí, ya he estado en esa situación antes", "respuesta": "Yes, I've been in that situation before" },
  { "categoria": "Fase 30", "pregunta": "No, nunca se me había ocurrido algo así", "respuesta": "No, I've never thought of something like that" },
  { "categoria": "Fase 30", "pregunta": "Sí, ya lo he visto todo", "respuesta": "Yeah, I've seen it all already" },
  { "categoria": "Fase 30", "pregunta": "No, nunca he tenido ningún problema con eso", "respuesta": "No, I've never had any trouble with that" },
  { "categoria": "Fase 30", "pregunta": "Sí, ya he hablado con él antes", "respuesta": "Yes, I've already talked to him" },
  { "categoria": "Fase 30", "pregunta": "No, nunca me ha pasado algo similar", "respuesta": "No, nothing like that has ever happened to me" }, 

  // --- Fase 31: Acciones cotidianas y del hogar con pasado (Straighten up, tidy up, plug in) ---
  { "categoria": "Fase 31", "pregunta": "Acomodé / ordené la cocina antes de que llegaras", "respuesta": "I straightened up the kitchen before you arrived" },
  { "categoria": "Fase 31", "pregunta": "Ella no quiso ordenar su habitación ayer", "respuesta": "She didn't want to tidy up her room yesterday" },
  { "categoria": "Fase 31", "pregunta": "¿Conectaste tu teléfono al cargador?", "respuesta": "Did you plug in your phone to the charger?" },
  { "categoria": "Fase 31", "pregunta": "Boté mi café accidentalmente en la mesa", "respuesta": "I dropped my coffee on the table by accident" },
  { "categoria": "Fase 31", "pregunta": "Alguien derramó una bebida en la alfombra", "respuesta": "Somebody spilled a drink on the carpet" },
  { "categoria": "Fase 31", "pregunta": "No conecté la cafetera esta mañana", "respuesta": "I didn't plug in the coffee maker this morning" },
  { "categoria": "Fase 31", "pregunta": "Él dejó caer su teléfono y se rompió la pantalla", "respuesta": "He dropped his phone and the screen broke" },
  { "categoria": "Fase 31", "pregunta": "Ella derramó agua en mi ordenador portátil", "respuesta": "She spilled water on my laptop" },
  { "categoria": "Fase 31", "pregunta": "¿Ordenaste la sala como te pedí?", "respuesta": "Did you straighten up the living room like I asked?" },
  { "categoria": "Fase 31", "pregunta": "No tuve tiempo de ordenar mi cuarto hoy", "respuesta": "I didn't have time to tidy up my room today" },

  // --- Fase 32: Gestión de tiempo, planes y retrasos (Schedule, put off, move out) ---
  { "categoria": "Fase 32", "pregunta": "Tuvimos que posponer el concierto para el próximo mes", "respuesta": "We had to put off the concert until next month" },
  { "categoria": "Fase 32", "pregunta": "Ella programó una reunión con el jefe ayer", "respuesta": "She scheduled a meeting with the boss yesterday" },
  { "categoria": "Fase 32", "pregunta": "Nos mudamos de ese apartamento el año pasado", "respuesta": "We moved out of that apartment last year" },
  { "categoria": "Fase 32", "pregunta": "No quise posponer la cita con el médico", "respuesta": "I didn't want to put off the doctor's appointment" },
  { "categoria": "Fase 32", "pregunta": "¿Programaste la llamada para las tres de la tarde?", "respuesta": "Did you schedule the call for three in the afternoon?" },
  { "categoria": "Fase 32", "pregunta": "Ellos se mudaron de casa la semana pasada", "respuesta": "They moved out of the house last week" },
  { "categoria": "Fase 32", "pregunta": "Tuve que posponer el viaje por el mal tiempo", "respuesta": "I had to put off the trip because of the bad weather" },
  { "categoria": "Fase 32", "pregunta": "No programamos ninguna reunión para hoy", "respuesta": "We didn't schedule any meetings for today" },
  { "categoria": "Fase 32", "pregunta": "¿Cuándo te mudaste de tu antiguo vecindario?", "respuesta": "When did you move out of your old neighborhood?" },
  { "categoria": "Fase 32", "pregunta": "Ella pospuso su decisión hasta la próxima semana", "respuesta": "She put off her decision until next week" },

  // --- Fase 33: Cambios de espacio y diligencias personales (Move furniture, get nails done, get a new job) ---
  { "categoria": "Fase 33", "pregunta": "Ayudé a mover los muebles de la sala ayer", "respuesta": "I helped move the living room furniture yesterday" },
  { "categoria": "Fase 33", "pregunta": "Ella se hizo las uñas ayer por la tarde", "respuesta": "She got her nails done yesterday afternoon" },
  { "categoria": "Fase 33", "pregunta": "Conseguí un nuevo trabajo el mes pasado", "respuesta": "I got a new job last month" },
  { "categoria": "Fase 33", "pregunta": "No pudimos mover los muebles sin ayuda", "respuesta": "We couldn't move the furniture without help" },
  { "categoria": "Fase 33", "pregunta": "¿Te hiciste las uñas esta semana?", "respuesta": "Did you get your nails done this week?" },
  { "categoria": "Fase 33", "pregunta": "Él no consiguió un nuevo trabajo todavía", "respuesta": "He didn't get a new job yet" },
  { "categoria": "Fase 33", "pregunta": "Movimos los escritorios a la otra oficina", "respuesta": "We moved the desks to the other office" },
  { "categoria": "Fase 33", "pregunta": "Ella se fue a hacer las uñas hace una hora", "respuesta": "She went to get her nails done an hour ago" },
  { "categoria": "Fase 33", "pregunta": "¿Conseguiste un nuevo trabajo al final?", "respuesta": "Did you get a new job after all?" },
  { "categoria": "Fase 33", "pregunta": "No quise mover los muebles de su lugar", "respuesta": "I didn't want to move the furniture from its place" },

  // --- Fase 34: Visitas inesperadas y momentos cotidianos (Come over, drop by, figure out) ---
  { "categoria": "Fase 34", "pregunta": "Unos amigos vinieron a casa anoche", "respuesta": "Some friends came over to my house last night" },
  { "categoria": "Fase 34", "pregunta": "Ella no vino a cenar con nosotros", "respuesta": "She didn't come over for dinner with us" },
  { "categoria": "Fase 34", "pregunta": "Pude resolver el problema con la computadora", "respuesta": "I figured out the computer problem" },
  { "categoria": "Fase 34", "pregunta": "¿Viniste a mi oficina esta mañana?", "respuesta": "Did you come over to my office this morning?" },
  { "categoria": "Fase 34", "pregunta": "No pudimos descifrar qué pasó exactamente", "respuesta": "We couldn't figure out what happened exactly" },
  { "categoria": "Fase 34", "pregunta": "Mi hermano vino a visitarme el domingo", "respuesta": "My brother came over to visit me on Sunday" },
  { "categoria": "Fase 34", "pregunta": "Ella resolvió cómo usar la aplicación nueva", "respuesta": "She figured out how to use the new app" },
  { "categoria": "Fase 34", "pregunta": "No quise venir tan temprano", "respuesta": "I didn't want to come over so early" },
  { "categoria": "Fase 34", "pregunta": "¿Descubriste quién dejó la puerta abierta?", "respuesta": "Did you figure out who left the door open?" },
  { "categoria": "Fase 34", "pregunta": "Nadie vino a la reunión a la hora programada", "respuesta": "Nobody came over to the meeting at the scheduled time" },

  // --- Fase 35: Interacciones de trabajo y reportes en pasado (Send a report, write an email, talk to the boss) ---
  { "categoria": "Fase 35", "pregunta": "Envié el informe antes de la fecha límite", "respuesta": "I sent the report before the deadline" },
  { "categoria": "Fase 35", "pregunta": "Ella no envió el correo electrónico anoche", "respuesta": "She didn't send the email last night" },
  { "categoria": "Fase 35", "pregunta": "Hablé con el jefe sobre el nuevo proyecto", "respuesta": "I talked to the boss about the new project" },
  { "categoria": "Fase 35", "pregunta": "¿Enviaste el informe financiero a tiempo?", "respuesta": "Did you send the financial report on time?" },
  { "categoria": "Fase 35", "pregunta": "No hablé con nadie sobre este asunto", "respuesta": "I didn't talk to anyone about this matter" },
  { "categoria": "Fase 35", "pregunta": "Escribí un reporte detallado para la reunión", "respuesta": "I wrote a detailed report for the meeting" },
  { "categoria": "Fase 35", "pregunta": "Ella no le dijo la verdad al gerente", "respuesta": "She didn't tell the truth to the manager" },
  { "categoria": "Fase 35", "pregunta": "¿Hablaste con el cliente esta mañana?", "respuesta": "Did you talk to the client this morning?" },
  { "categoria": "Fase 35", "pregunta": "Envié los documentos por correo electrónico", "respuesta": "I sent the documents via email" },
  { "categoria": "Fase 35", "pregunta": "No escribí el informe porque no tuve tiempo", "respuesta": "I didn't write the report because I didn't have time" }, 

  // --- Fase 36: El uso natural de "though" al final de la oración ---
  { "categoria": "Fase 36", "pregunta": "El apartamento era un poco viejo, aunque estaba limpio", "respuesta": "The apartment was a bit old, it was clean though" },
  { "categoria": "Fase 36", "pregunta": "No quise quejarme, aunque la comida estaba fría", "respuesta": "I didn't want to complain, the food was cold though" },
  { "categoria": "Fase 36", "pregunta": "Ella compró el teléfono, aunque era muy caro", "respuesta": "She bought the phone, it was very expensive though" },
  { "categoria": "Fase 36", "pregunta": "Hablé con el jefe ayer, aunque no resolvimos nada", "respuesta": "I talked to the boss yesterday, we didn't solve anything though" },
  { "categoria": "Fase 36", "pregunta": "Estaba cansado, aunque terminé el informe a tiempo", "respuesta": "I was tired, I finished the report on time though" },
  { "categoria": "Fase 36", "pregunta": "No me gustó la película, aunque el final estuvo bueno", "respuesta": "I didn't like the movie, the ending was good though" },
  { "categoria": "Fase 36", "pregunta": "Mudarse de casa fue difícil, aunque valió la pena", "respuesta": "Moving out was difficult, it was worth it though" },
  { "categoria": "Fase 36", "pregunta": "Intenté arreglarlo, aunque no pude hacerlo funcionar", "respuesta": "I tried to fix it, I couldn't make it work though" },
  { "categoria": "Fase 36", "pregunta": "Ella se hizo las uñas, aunque no tenía mucho tiempo", "respuesta": "She got her nails done, she didn't have much time though" },
  { "categoria": "Fase 36", "pregunta": "Fue un día pesado, aunque aprendí cosas nuevas", "respuesta": "It was a tough day, I learned new things though" },

  // --- Fase 37: Introduciendo contrastes avanzados con "Even though" (Aunque / A pesar de que) ---
  { "categoria": "Fase 37", "pregunta": "Aunque estaba muy cansado, terminé de ordenar la cocina", "respuesta": "Even though I was very tired, I finished straightening up the kitchen" },
  { "categoria": "Fase 37", "pregunta": "Ella no quiso venir, aunque la invité personalmente", "respuesta": "She didn't want to come, even though I invited her personally" },
  { "categoria": "Fase 37", "pregunta": "Aunque llovía mucho, salí a comprar café", "respuesta": "Even though it was raining hard, I went out to buy coffee" },
  { "categoria": "Fase 37", "pregunta": "No me dieron el trabajo, aunque hice una gran entrevista", "respuesta": "I didn't get the job, even though I did a great interview" },
  { "categoria": "Fase 37", "pregunta": "Aunque revisé tres veces, olvidé conectar mi teléfono", "respuesta": "Even though I checked three times, I forgot to plug in my phone" },
  { "categoria": "Fase 37", "pregunta": "Ella se mudó de casa, aunque sus amigos le dijeron que no", "respuesta": "She moved out, even though her friends told her not to" },
  { "categoria": "Fase 37", "pregunta": "Aunque el café estaba caliente, lo derramé en la mesa", "respuesta": "Even though the coffee was hot, I spilled it on the table" },
  { "categoria": "Fase 37", "pregunta": "No pudimos resolver el problema, aunque intentamos de todo", "respuesta": "We couldn't figure out the problem, even though we tried everything" },
  { "categoria": "Fase 37", "pregunta": "Aunque programamos la reunión, nadie llegó a la hora", "respuesta": "Even though we scheduled the meeting, nobody arrived on time" },
  { "categoria": "Fase 37", "pregunta": "Ella se hizo las uñas, aunque tenía prisa", "respuesta": "Even though she was in a hurry, she got her nails done" },

  // --- Fase 38: Énfasis y sorpresas cotidianas con el uso de "Even" (Incluso) ---
  { "categoria": "Fase 38", "pregunta": "Incluso el jefe se quedó sorprendido con el reporte", "respuesta": "Even the boss was surprised by the report" },
  { "categoria": "Fase 38", "pregunta": "No quise hablar con nadie, ni siquiera con mi mejor amigo", "respuesta": "I didn't want to talk to anyone, not even my best friend" },
  { "categoria": "Fase 38", "pregunta": "Incluso tardé más tiempo arreglando la habitación", "respuesta": "It even took me longer to tidy up the room" },
  { "categoria": "Fase 38", "pregunta": "Ella ni siquiera me ayudó a mover los muebles", "respuesta": "She didn't even help me move the furniture" },
  { "categoria": "Fase 38", "pregunta": "Incluso compramos un boleto para el concierto que pospusieron", "respuesta": "We even bought a ticket for the concert they put off" },
  { "categoria": "Fase 38", "pregunta": "No me llamó anoche, ni siquiera me envió un mensaje", "respuesta": "He didn't call me last night, he didn't even text me" },
  { "categoria": "Fase 38", "pregunta": "Incluso encontré las llaves que había perdido la semana pasada", "respuesta": "I even found the keys I had lost last week" },
  { "categoria": "Fase 38", "pregunta": "Ella ni siquiera sabía que nos habíamos mudado", "respuesta": "She didn't even know we had moved out" },
  { "categoria": "Fase 38", "pregunta": "Incluso intenté llamarlo, pero tenía el teléfono apagado", "respuesta": "I even tried to call him, but his phone was off" },
  { "categoria": "Fase 38", "pregunta": "Nadie entendió la broma, ni siquiera yo", "respuesta": "Nobody got the joke, not even me" },

  // --- Fase 39: Combinando pasado, acciones específicas y muletillas de fluidez ---
  { "categoria": "Fase 39", "pregunta": "O sea, conecté el teléfono anoche, aunque no cargó", "respuesta": "I mean, I plugged in the phone last night, it didn't charge though" },
  { "categoria": "Fase 39", "pregunta": "En serio, derramé mi café en la alfombra nueva", "respuesta": "Seriously, I spilled my coffee on the new carpet" },
  { "categoria": "Fase 39", "pregunta": "Básicamente, tuvimos que posponer la reunión de ayer", "respuesta": "Basically, we had to put off yesterday's meeting" },
  { "categoria": "Fase 39", "pregunta": "Ya sabes, ella se hizo las uñas antes de la fiesta", "respuesta": "You know, she got her nails done before the party" },
  { "categoria": "Fase 39", "pregunta": "De hecho, un amigo vino a casa anoche", "respuesta": "Actually, a friend came over to my house last night" },
  { "categoria": "Fase 39", "pregunta": "Para ser justo, no pude averiguar cómo funcionaba", "respuesta": "To be fair, I couldn't figure out how it worked" },
  { "categoria": "Fase 39", "pregunta": "Obviamente, envié el informe antes de la medianoche", "respuesta": "Obviously, I sent the report before midnight" },
  { "categoria": "Fase 39", "pregunta": "Mira, la cosa es que me mudé la semana pasada", "respuesta": "Look, the thing is I moved out last week" },
  { "categoria": "Fase 39", "pregunta": "Honestamente, no quise botar mi teléfono", "respuesta": "Honestly, I didn't mean to drop my phone" },
  { "categoria": "Fase 39", "pregunta": "O sea, programamos una cita, aunque la cancelaron", "respuesta": "I mean, we scheduled an appointment, they canceled it though" },

  // --- Fase 40: Cierre de bloque combinando Even though, Though y Pasado ---
  { "categoria": "Fase 40", "pregunta": "Aunque investigué mucho, no pude resolver el problema", "respuesta": "Even though I researched a lot, I couldn't figure out the problem" },
  { "categoria": "Fase 40", "pregunta": "El reporte estaba incompleto, aunque lo envié a tiempo", "respuesta": "The report was incomplete, I sent it on time though" },
  { "categoria": "Fase 40", "pregunta": "Incluso trabajé hasta tarde para terminar el proyecto", "respuesta": "I even worked late to finish the project" },
  { "categoria": "Fase 40", "pregunta": "Aunque ella no quería, se mudó de apartamento", "respuesta": "Even though she didn't want to, she moved out of the apartment" },
  { "categoria": "Fase 40", "pregunta": "Fue un día difícil, aunque aprendí bastante", "respuesta": "It was a tough day, I learned a lot though" },
  { "categoria": "Fase 40", "pregunta": "Incluso mi jefe admitió que el error fue suyo", "respuesta": "Even my boss admitted that the mistake was his" },
  { "categoria": "Fase 40", "pregunta": "Aunque compré un café, se me cayó al suelo", "respuesta": "Even though I bought a coffee, I dropped it on the floor" },
  { "categoria": "Fase 40", "pregunta": "El lugar estaba limpio, aunque olía un poco raro", "respuesta": "The place was clean, it smelled a bit weird though" },
  { "categoria": "Fase 40", "pregunta": "Incluso recordé conectar el teléfono antes de dormir", "respuesta": "I even remembered to plug in my phone before sleeping" },
  { "categoria": "Fase 40", "pregunta": "Aunque nadie me ayudó, logré ordenar toda la cocina", "respuesta": "Even though nobody helped me, I managed to straighten up the whole kitchen" },

  // --- Fase 41: Transformación de rutinas matutinas (Presente a Pasado) ---
  { "categoria": "Fase 41", "pregunta": "Transforma a pasado: I wake up early today", "respuesta": "I woke up early yesterday" },
  { "categoria": "Fase 41", "pregunta": "Transforma a pasado: She makes the bed every morning", "respuesta": "She made the bed this morning" },
  { "categoria": "Fase 41", "pregunta": "Transforma a pasado: I turn off the alarm clock right away", "respuesta": "I turned off the alarm clock right away" },
  { "categoria": "Fase 41", "pregunta": "Transforma a pasado: He takes a shower before breakfast", "respuesta": "He took a shower before breakfast" },
  { "categoria": "Fase 41", "pregunta": "Transforma a pasado: I brush my teeth with cold water", "respuesta": "I brushed my teeth with cold water" },
  { "categoria": "Fase 41", "pregunta": "Transforma a pasado: We leave the house at eight o'clock", "respuesta": "We left the house at eight o'clock" },
  { "categoria": "Fase 41", "pregunta": "Transforma a pasado: I check my phone for new messages", "respuesta": "I checked my phone for new messages" },
  { "categoria": "Fase 41", "pregunta": "Transforma a pasado: She puts on comfortable clothes", "respuesta": "She put on comfortable clothes" },
  { "categoria": "Fase 41", "pregunta": "Transforma a pasado: I stretch a little bit before getting up", "respuesta": "I stretched a little bit before getting up" },
  { "categoria": "Fase 41", "pregunta": "Transforma a pasado: They start the day with a lot of energy", "respuesta": "They started the day with a lot of energy" },

  // --- Fase 42: Transformación de cocina y alimentos (Presente a Pasado) ---
  { "categoria": "Fase 42", "pregunta": "Transforma a pasado: I go to the kitchen to make breakfast", "respuesta": "I went to the kitchen to make breakfast" },
  { "categoria": "Fase 42", "pregunta": "Transforma a pasado: He turns on the coffee maker", "respuesta": "He turned on the coffee maker" },
  { "categoria": "Fase 42", "pregunta": "Transforma a pasado: I drink black coffee without sugar", "respuesta": "I drank black coffee without sugar" },
  { "categoria": "Fase 42", "pregunta": "Transforma a pasado: She takes two eggs out of the fridge", "respuesta": "She took two eggs out of the fridge" },
  { "categoria": "Fase 42", "pregunta": "Transforma a pasado: I crack two eggs into the hot pan", "respuesta": "I cracked two eggs into the hot pan" },
  { "categoria": "Fase 42", "pregunta": "Transforma a pasado: We toast whole wheat bread", "respuesta": "We toasted whole wheat bread" },
  { "categoria": "Fase 42", "pregunta": "Transforma a pasado: I wash the dirty dishes in the sink", "respuesta": "I washed the dirty dishes in the sink" },
  { "categoria": "Fase 42", "pregunta": "Transforma a pasado: He spills some milk on the table", "respuesta": "He spilled some milk on the table" },
  { "categoria": "Fase 42", "pregunta": "Transforma a pasado: I wipe down the kitchen counter", "respuesta": "I wiped down the kitchen counter" },
  { "categoria": "Fase 42", "pregunta": "Transforma a pasado: They finish cooking very late", "respuesta": "They finished cooking very late" },

  // --- Fase 43: Transformación de oficina y trabajo (Presente a Pasado) ---
  { "categoria": "Fase 43", "pregunta": "Transforma a pasado: I arrive at the office early today", "respuesta": "I arrived at the office early yesterday" },
  { "categoria": "Fase 43", "pregunta": "Transforma a pasado: She turns on her laptop at the desk", "respuesta": "She turned on her laptop at the desk" },
  { "categoria": "Fase 43", "pregunta": "Transforma a pasado: I send an important report to the boss", "respuesta": "I sent an important report to the boss" },
  { "categoria": "Fase 43", "pregunta": "Transforma a pasado: We have a team meeting at ten", "respuesta": "We had a team meeting at ten" },
  { "categoria": "Fase 43", "pregunta": "Transforma a pasado: I write a detailed email", "respuesta": "I wrote a detailed email" },
  { "categoria": "Fase 43", "pregunta": "Transforma a pasado: He schedules a call for the afternoon", "respuesta": "He scheduled a call for the afternoon" },
  { "categoria": "Fase 43", "pregunta": "Transforma a pasado: I talk to the client about the project", "respuesta": "I talked to the client about the project" },
  { "categoria": "Fase 43", "pregunta": "Transforma a pasado: They cancel the meeting unexpectedly", "respuesta": "They canceled the meeting unexpectedly" },
  { "categoria": "Fase 43", "pregunta": "Transforma a pasado: I figure out the computer problem", "respuesta": "I figured out the computer problem" },
  { "categoria": "Fase 43", "pregunta": "Transforma a pasado: She finishes work late today", "respuesta": "She finished work late yesterday" },

  // --- Fase 44: Transformación de tareas del hogar y orden (Presente a Pasado) ---
  { "categoria": "Fase 44", "pregunta": "Transforma a pasado: I straighten up the living room", "respuesta": "I straightened up the living room" },
  { "categoria": "Fase 44", "pregunta": "Transforma a pasado: She tidies up her room every day", "respuesta": "She tidied up her room yesterday" },
  { "categoria": "Fase 44", "pregunta": "Transforma a pasado: I plug in my phone to charge", "respuesta": "I plugged in my phone to charge" },
  { "categoria": "Fase 44", "pregunta": "Transforma a pasado: He drops his phone on the floor", "respuesta": "He dropped his phone on the floor" },
  { "categoria": "Fase 44", "pregunta": "Transforma a pasado: We move the furniture to the other room", "respuesta": "We moved the furniture to the other room" },
  { "categoria": "Fase 44", "pregunta": "Transforma a pasado: I sweep the kitchen floor", "respuesta": "I swept the kitchen floor" },
  { "categoria": "Fase 44", "pregunta": "Transforma a pasado: She vacuums the bedroom rugs", "respuesta": "She vacuumed the bedroom rugs" },
  { "categoria": "Fase 44", "pregunta": "Transforma a pasado: I take out the trash", "respuesta": "I took out the trash" },
  { "categoria": "Fase 44", "pregunta": "Transforma a pasado: They clean the windows", "respuesta": "They cleaned the windows" },
  { "categoria": "Fase 44", "pregunta": "Transforma a pasado: I wash the laundry", "respuesta": "I washed the laundry" },

  // --- Fase 45: Transformación de traslados y mudanzas (Presente a Pasado) ---
  { "categoria": "Fase 45", "pregunta": "Transforma a pasado: I move out of my old apartment", "respuesta": "I moved out of my old apartment" },
  { "categoria": "Fase 45", "pregunta": "Transforma a pasado: She comes over to my house", "respuesta": "She came over to my house" },
  { "categoria": "Fase 45", "pregunta": "Transforma a pasado: I walk to the subway station", "respuesta": "I walked to the subway station" },
  { "categoria": "Fase 45", "pregunta": "Transforma a pasado: He misses his usual train", "respuesta": "He missed his usual train" },
  { "categoria": "Fase 45", "pregunta": "Transforma a pasado: We take a cab to the airport", "respuesta": "We took a cab to the airport" },
  { "categoria": "Fase 45", "pregunta": "Transforma a pasado: I buy a ticket at the station", "respuesta": "I bought a ticket at the station" },
  { "categoria": "Fase 45", "pregunta": "Transforma a pasado: She arrives at the hotel late", "respuesta": "She arrived at the hotel late" },
  { "categoria": "Fase 45", "pregunta": "Transforma a pasado: I drive my car through heavy traffic", "respuesta": "I drove my car through heavy traffic" },
  { "categoria": "Fase 45", "pregunta": "Transforma a pasado: They get lost on the way", "respuesta": "They got lost on the way" },
  { "categoria": "Fase 45", "pregunta": "Transforma a pasado: I return home very tired", "respuesta": "I returned home very tired" },

  // --- Fase 46: Transformación de decisiones y deseos (Presente a Pasado) ---
  { "categoria": "Fase 46", "pregunta": "Transforma a pasado: I want to change my job", "respuesta": "I wanted to change my job" },
  { "categoria": "Fase 46", "pregunta": "Transforma a pasado: She needs to buy a new car", "respuesta": "She needed to buy a new car" },
  { "categoria": "Fase 46", "pregunta": "Transforma a pasado: I have to work late tonight", "respuesta": "I had to work late last night" },
  { "categoria": "Fase 46", "pregunta": "Transforma a pasado: He tries to fix the problem", "respuesta": "He tried to fix the problem" },
  { "categoria": "Fase 46", "pregunta": "Transforma a pasado: We decide to stay home", "respuesta": "We decided to stay home" },
  { "categoria": "Fase 46", "pregunta": "Transforma a pasado: I hope to finish everything today", "respuesta": "I hoped to finish everything yesterday" },
  { "categoria": "Fase 46", "pregunta": "Transforma a pasado: She plans to travel next week", "respuesta": "She planned to travel last week" },
  { "categoria": "Fase 46", "pregunta": "Transforma a pasado: I prefer to stay here", "respuesta": "I preferred to stay there" },
  { "categoria": "Fase 46", "pregunta": "Transforma a pasado: They refuse to accept the offer", "respuesta": "They refused to accept the offer" },
  { "categoria": "Fase 46", "pregunta": "Transforma a pasado: I begin a new project", "respuesta": "I began a new project" },

  // --- Fase 47: Transformación de comunicación y tecnología (Presente a Pasado) ---
  { "categoria": "Fase 47", "pregunta": "Transforma a pasado: I call my mother every day", "respuesta": "I called my mother yesterday" },
  { "categoria": "Fase 47", "pregunta": "Transforma a pasado: She texts me on my phone", "respuesta": "She texted me on my phone" },
  { "categoria": "Fase 47", "pregunta": "Transforma a pasado: I answer all my emails", "respuesta": "I answered all my emails" },
  { "categoria": "Fase 47", "pregunta": "Transforma a pasado: He forgets his password", "respuesta": "He forgot his password" },
  { "categoria": "Fase 47", "pregunta": "Transforma a pasado: We lose connection during the call", "respuesta": "We lost connection during the call" },
  { "categoria": "Fase 47", "pregunta": "Transforma a pasado: I find my lost keys", "respuesta": "I found my lost keys" },
  { "categoria": "Fase 47", "pregunta": "Transforma a pasado: She tells me a funny story", "respuesta": "She told me a funny story" },
  { "categoria": "Fase 47", "pregunta": "Transforma a pasado: I understand the instructions clearly", "respuesta": "I understood the instructions clearly" },
  { "categoria": "Fase 47", "pregunta": "Transforma a pasado: They speak English in the meeting", "respuesta": "They spoke English in the meeting" },
  { "categoria": "Fase 47", "pregunta": "Transforma a pasado: I hear a strange noise outside", "respuesta": "I heard a strange noise outside" },

  // --- Fase 48: Transformación de compras y pagos (Presente a Pasado) ---
  { "categoria": "Fase 48", "pregunta": "Transforma a pasado: I buy groceries at the supermarket", "respuesta": "I bought groceries at the supermarket" },
  { "categoria": "Fase 48", "pregunta": "Transforma a pasado: She pays with her credit card", "respuesta": "She paid with her credit card" },
  { "categoria": "Fase 48", "pregunta": "Transforma a pasado: I spend too much money today", "respuesta": "I spent too much money yesterday" },
  { "categoria": "Fase 48", "pregunta": "Transforma a pasado: He saves money for his trip", "respuesta": "He saved money for his trip" },
  { "categoria": "Fase 48", "pregunta": "Transforma a pasado: We look for a bigger store", "respuesta": "We looked for a bigger store" },
  { "categoria": "Fase 48", "pregunta": "Transforma a pasado: I choose a blue shirt", "respuesta": "I chose a blue shirt" },
  { "categoria": "Fase 48", "pregunta": "Transforma a pasado: She tries on clothes in the fitting room", "respuesta": "She tried on clothes in the fitting room" },
  { "categoria": "Fase 48", "pregunta": "Transforma a pasado: I ask for the receipt", "respuesta": "I asked for the receipt" },
  { "categoria": "Fase 48", "pregunta": "Transforma a pasado: They sell out of the best products", "respuesta": "They sold out of the best products" },
  { "categoria": "Fase 48", "pregunta": "Transforma a pasado: I cost nothing to help", "respuesta": "It cost nothing to help" },

  // --- Fase 49: Transformación de imprevistos y sorpresas (Presente a Pasado) ---
  { "categoria": "Fase 49", "pregunta": "Transforma a pasado: I realize I forgot my wallet", "respuesta": "I realized I forgot my wallet" },
  { "categoria": "Fase 49", "pregunta": "Transforma a pasado: She thinks it is a good idea", "respuesta": "She thought it was a good idea" },
  { "categoria": "Fase 49", "pregunta": "Transforma a pasado: I know the answer immediately", "respuesta": "I knew the answer immediately" },
  { "categoria": "Fase 49", "pregunta": "Transforma a pasado: He feels sick this morning", "respuesta": "He felt sick this morning" },
  { "categoria": "Fase 49", "pregunta": "Transforma a pasado: We leave early because of rain", "respuesta": "We left early because of rain" },
  { "categoria": "Fase 49", "pregunta": "Transforma a pasado: I break a glass by accident", "respuesta": "I broke a glass by accident" },
  { "categoria": "Fase 49", "pregunta": "Transforma a pasado: She catches a cold", "respuesta": "She caught a cold" },
  { "categoria": "Fase 49", "pregunta": "Transforma a pasado: I fall asleep on the sofa", "respuesta": "I fell asleep on the sofa" },
  { "categoria": "Fase 49", "pregunta": "Transforma a pasado: They make a huge mistake", "respuesta": "They made a huge mistake" },
  { "categoria": "Fase 49", "pregunta": "Transforma a pasado: I catch the last bus home", "respuesta": "I caught the last bus home" },

  // --- Fase 50: Cierre de bloque de transformación temporal (Presente a Pasado) ---
  { "categoria": "Fase 50", "pregunta": "Transforma a pasado: I keep working until late", "respuesta": "I kept working until late" },
  { "categoria": "Fase 50", "pregunta": "Transforma a pasado: She gives me good advice", "respuesta": "She gave me good advice" },
  { "categoria": "Fase 50", "pregunta": "Transforma a pasado: I show him how to do it", "respuesta": "I showed him how to do it" },
  { "categoria": "Fase 50", "pregunta": "Transforma a pasado: He builds a new website", "respuesta": "He built a new website" },
  { "categoria": "Fase 50", "pregunta": "Transforma a pasado: We lead the team to success", "respuesta": "We led the team to success" },
  { "categoria": "Fase 50", "pregunta": "Transforma a pasado: I spend the weekend relaxing", "respuesta": "I spent the weekend relaxing" },
  { "categoria": "Fase 50", "pregunta": "Transforma a pasado: She stands up to leave", "respuesta": "She stood up to leave" },
  { "categoria": "Fase 50", "pregunta": "Transforma a pasado: I throw away old papers", "respuesta": "I threw away old papers" },
  { "categoria": "Fase 50", "pregunta": "Transforma a pasado: They win the competition", "respuesta": "They won the competition" },
  { "categoria": "Fase 50", "pregunta": "Transforma a pasado: I understand everything completely", "respuesta": "I understood everything completely" }
];

const DATA_PHRASAL_VERBS = [
  { "verbo": "Act up", "significado": "Portarse mal / Fallar (un aparato)", "ejemplo": "My computer is acting up today." },
  { "verbo": "Add up", "significado": "Sumar / Tener sentido", "ejemplo": "His explanation just doesn't add up." },
  { "verbo": "Allow for", "significado": "Tener en cuenta / Prever", "ejemplo": "We must allow for delays in traffic." },
  { "verbo": "Answer back", "significado": "Contestar de manera grosera", "ejemplo": "Don't answer back to your parents." },
  { "verbo": "Ask around", "significado": "Preguntar a varias personas", "ejemplo": "I'll ask around to find a good mechanic." },
  { "verbo": "Back down", "significado": "Ceder / Retirar una postura", "ejemplo": "He refused to back down in the argument." },
  { "verbo": "Back up", "significado": "Respaldar / Apoyar / Hacer copia de seguridad", "ejemplo": "Always back up your important files." },
  { "verbo": "Blow up", "significado": "Estallar / Inflar / Enfadarse mucho", "ejemplo": "They had to blow up the old bridge." },
  { "verbo": "Break down", "significado": "Averiarse / Venirse abajo emocionalmente", "ejemplo": "My car broke down on the highway." },
  { "verbo": "Break in", "significado": "Entrar a la fuerza / Interrumpir", "ejemplo": "Someone broke in and stole my laptop." },
  { "verbo": "Break up", "significado": "Terminar una relación / Romperse", "ejemplo": "They decided to break up after five years." },
  { "verbo": "Bring up", "significado": "Mencionar un tema / Criar a alguien", "ejemplo": "Please don't bring up that topic again." },
  { "verbo": "Call off", "significado": "Cancelar algo", "ejemplo": "They had to call off the outdoor meeting." },
  { "verbo": "Calm down", "significado": "Calmarse / Tranquilizarse", "ejemplo": "Take a deep breath and calm down." },
  { "verbo": "Carry on", "significado": "Continuar / Seguir adelante", "ejemplo": "Despite the difficulties, we must carry on." },
  { "verbo": "Catch up", "significado": "Ponerse al día", "ejemplo": "We need to meet and catch up." },
  { "verbo": "Check in", "significado": "Registrarse (hotel, vuelo)", "ejemplo": "We can check in online before arriving." },
  { "verbo": "Check out", "significado": "Salir de un hotel / Echar un vistazo", "ejemplo": "You need to check out by noon." },
  { "verbo": "Cheer up", "significado": "Animarse / Alegrarse", "ejemplo": "Cheer up, things will get better." },
  { "verbo": "Clean up", "significado": "Limpiar a fondo", "ejemplo": "Let's clean up the kitchen together." },
  { "verbo": "Come across", "significado": "Encontrarse con algo por casualidad", "ejemplo": "I came across an old photo yesterday." },
  { "verbo": "Come back", "significado": "Regresar", "ejemplo": "What time will you come back home?" },
  { "verbo": "Count on", "significado": "Contar con alguien / Confiar", "ejemplo": "You can always count on me." },
  { "verbo": "Cut down", "significado": "Reducir el consumo", "ejemplo": "I'm trying to cut down on sugar." },
  { "verbo": "Deal with", "significado": "Manejar / Afrontar un problema", "ejemplo": "I have to deal with this issue today." },
  { "verbo": "End up", "significado": "Terminar haciendo algo", "ejemplo": "We ended up staying home all night." },
  { "verbo": "Fall apart", "significado": "Desmoronarse / Caerse a pedazos", "ejemplo": "The old book is starting to fall apart." },
  { "verbo": "Figure out", "significado": "Resolver / Comprender algo", "ejemplo": "I need to figure out how this works." },
  { "verbo": "Fill out", "significado": "Completar un formulario", "ejemplo": "Please fill out this application form." },
  { "verbo": "Find out", "significado": "Averiguar / Enterarse de algo", "ejemplo": "We will find out the truth soon." },
  { "verbo": "Get along", "significado": "Llevarse bien con alguien", "ejemplo": "I get along great with my coworkers." },
  { "verbo": "Get away", "significado": "Escapar / Tomarse un respiro", "ejemplo": "We need to get away for the weekend." },
  { "verbo": "Get up", "significado": "Levantarse de la cama", "ejemplo": "I usually get up at six in the morning." },
  { "verbo": "Give up", "significado": "Rastrarse / Rendirse", "ejemplo": "Never give up on your dreams." },
  { "verbo": "Go on", "significado": "Continuar / Suceder", "ejemplo": "What is going on here?" },
  { "verbo": "Grow up", "significado": "Crecer / Madurar", "ejemplo": "Children grow up so fast nowadays." },
  { "verbo": "Hold on", "significado": "Esperar un momento", "ejemplo": "Hold on, let me check my notes." },
  { "verbo": "Keep on", "significado": "Seguir haciendo algo", "ejemplo": "Keep on practicing and you will improve." },
  { "verbo": "Look after", "significado": "Cuidar de alguien o algo", "ejemplo": "Who will look after your pets?" },
  { "verbo": "Look forward to", "significado": "Esperar algo con ilusión", "ejemplo": "I look forward to the weekend." },
  { "verbo": "Pass out", "significado": "Desmayarse", "ejemplo": "It was so hot that he almost passed out." },
  { "verbo": "Pick up", "significado": "Recoger a alguien o algo", "ejemplo": "Can you pick me up at the station?" },
  { "verbo": "Point out", "significado": "Señalar / Indicar algo", "ejemplo": "She pointed out a mistake in the report." },
  { "verbo": "Put off", "significado": "Posponer / Aplazar", "ejemplo": "Don't put off until tomorrow what you can do today." },
  { "verbo": "Run out of", "significado": "Quedarse sin algo", "ejemplo": "We ran out of milk this morning." },
  { "verbo": "Set up", "significado": "Configurar / Organizar", "ejemplo": "I need to set up my new computer." },
  { "verbo": "Show up", "significado": "Aparecer / Presentarse", "ejemplo": "He didn't show up for the meeting." },
  { "verbo": "Take off", "significado": "Despegar (avión) / Quitarse ropa", "ejemplo": "The plane will take off shortly." },
  { "verbo": "Turn down", "significado": "Rechazar / Bajar el volumen", "ejemplo": "He had to turn down the job offer." },
  { "verbo": "Work out", "significado": "Hacer ejercicio / Resolver un problema", "ejemplo": "I work out at the gym three times a week." }
];

var workers_default = {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const method = request.method;
// --- RUTA DEL PANEL DE ADMINISTRACIÓN ---
    if (url.pathname === '/admin-emerson') {
        const secretKey = url.searchParams.get('key');
        if (secretKey !== 'Casita21') {
            return new Response('Acceso no autorizado', { status: 403 });
        }

        try {
            // Consultamos uniendo la tabla users y contando sus ejercicios completados en student_progress
            const { results } = await env.DB.prepare(`
                SELECT u.id, u.nombre, u.email, COUNT(p.exercise_id) as total_ejercicios, (COUNT(p.exercise_id) * 10) as total_points
                FROM users u
                LEFT JOIN student_progress p ON u.id = p.user_id
                GROUP BY u.id
                ORDER BY total_points DESC
            `).all();

            let rows = '';
            if (results && results.length > 0) {
                results.forEach((user, index) => {
                    rows += `
                        <tr>
                            <td style="padding: 12px; border-bottom: 1px solid #334155;">${index + 1}</td>
                            <td style="padding: 12px; border-bottom: 1px solid #334155; font-weight: bold;">${user.nombre || 'Sin nombre'}</td>
                            <td style="padding: 12px; border-bottom: 1px solid #334155; color: #94a3b8;">${user.email || 'Sin correo'}</td>
                            <td style="padding: 12px; border-bottom: 1px solid #334155; text-align: center;">${user.total_ejercicios || 0}</td>
                            <td style="padding: 12px; border-bottom: 1px solid #334155; color: #ffd43b; font-weight: bold; text-align: right;">${user.total_points || 0} PTS</td>
                        </tr>
                    `;
                });
            } else {
                rows = `<tr><td colspan="5" style="padding: 20px; text-align: center;">No hay usuarios registrados aún.</td></tr>`;
            }

            const html = `
                <!DOCTYPE html>
                <html lang="es">
                <head>
                    <meta charset="UTF-8">
                    <title>Panel de Administración - Real English</title>
                    <style>
                        body { font-family: sans-serif; background: #0f172a; color: #f8fafc; padding: 40px; }
                        .container { max-width: 900px; margin: 0 auto; background: #1e293b; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.5); }
                        h1 { color: #ffd43b; text-align: center; margin-bottom: 25px; }
                        table { width: 100%; border-collapse: collapse; text-align: left; }
                        th { background: #334155; padding: 12px; color: #94a3b8; text-transform: uppercase; font-size: 12px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <h1>📊 Panel de Control - Real English</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Estudiante</th>
                                    <th>Correo</th>
                                    <th style="text-align: center;">Ejercicios</th>
                                    <th style="text-align: right;">Puntaje Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${rows}
                            </tbody>
                        </table>
                    </div>
                </body>
                </html>
            `;

            return new Response(html, {
                headers: { 'Content-Type': 'text/html;charset=UTF-8' }
            });

        } catch (err) {
            return new Response('Error al consultar la base de datos: ' + err.message, { status: 500 });
        }
    }

// 1. Extraer el user_id de la cookie y buscar el nombre en la base de datos D1
    const cookieHeader = request.headers.get("cookie") || "";
    const matchUser = cookieHeader.match(/user_id=(\d+)/);
    let nombreEstudiante = "Estudiante"; // Valor por defecto si no ha iniciado sesión

    if (matchUser) {
      try {
        const userId = parseInt(matchUser[1]);
        const userRecord = await env.DB.prepare("SELECT nombre FROM users WHERE id = ?").bind(userId).first();
        if (userRecord && userRecord.nombre) {
          nombreEstudiante = userRecord.nombre;
        }
      } catch (e) {
        // Si hay algún detalle, mantiene el valor por defecto
      }
    }
    if (url.pathname === "/api/complete-exercise" && method === "POST") {
      try {
        const cookieHeader = request.headers.get("Cookie") || "";
        const matchUser = cookieHeader.match(/user_id=(\d+)/);
        if (!matchUser) {
          return new Response(JSON.stringify({ success: false, error: "No autorizado" }), {
            status: 401,
            headers: { "content-type": "application/json" }
          });
        }
        const userId = parseInt(matchUser[1]);
        const body = await request.json();
        const exerciseId = parseInt(body.exercise_id);

        if (!exerciseId || isNaN(exerciseId)) {
          return new Response(JSON.stringify({ success: false, error: "ID de ejercicio inválido" }), {
            status: 400,
            headers: { "content-type": "application/json" }
          });
        }

        const phase = Math.ceil(exerciseId / 10);

        await env.DB.prepare(
          "INSERT OR IGNORE INTO student_progress (user_id, exercise_id) VALUES (?, ?)"
        ).bind(userId, exerciseId).run();

        const startEx = (phase - 1) * 10 + 1;
        const endEx = phase * 10;

        const result = await env.DB.prepare(
          `SELECT COUNT(DISTINCT exercise_id) as count FROM student_progress WHERE user_id = ? AND exercise_id BETWEEN ? AND ?`
        ).bind(userId, startEx, endEx).first();

        // Calcular puntaje total global (ej. 10 puntos por cada ejercicio único completado)
        const resultTotal = await env.DB.prepare(
          `SELECT COUNT(DISTINCT exercise_id) as total_completed FROM student_progress WHERE user_id = ?`
        ).bind(userId).first();

        const completedCount = result ? result.count : 0;
        const totalPoints = (resultTotal ? resultTotal.total_completed : 0) * 10;
        const phaseCompleted = (completedCount >= 10);

        return new Response(JSON.stringify({
          success: true,
          exercise_id: exerciseId,
          phase: phase,
          phase_completed: phaseCompleted,
          completed_in_phase: completedCount,
          total_points: totalPoints
        }), {
          headers: { "content-type": "application/json" }
        });

      } catch (err) {
        return new Response(JSON.stringify({ success: false, error: err.message }), {
          status: 500,
          headers: { "content-type": "application/json" }
        });
      }
    }

    if (url.pathname === "/registro" && method === "POST") {
      try {
        const formData = await request.formData();
        const nombre = formData.get("nombre");
        const email = formData.get("email");
        const password = formData.get("password");
        if (!nombre || !email || !password) return new Response("Faltan datos.", { status: 400 });
        await env.DB.prepare("INSERT INTO users (nombre, email, password_hash, created_at) VALUES (?, ?, ?, CURRENT_TIMESTAMP)").bind(nombre, email, password).run();
        return Response.redirect(url.origin + "/login?registrado=1", 303);
      } catch (err) {
        return new Response("Error al registrar (correo duplicado).", { status: 400 });
      }
    }

    if (url.pathname === "/login" && method === "POST") {
      try {
        const formData = await request.formData();
        const email = formData.get("email");
        const password = formData.get("password");
        const user = await env.DB.prepare("SELECT * FROM users WHERE email = ? AND password_hash = ?").bind(email, password).first();
        if (!user) return new Response("Credenciales incorrectas. <a href='/login'>Volver</a>", { headers: { "content-type": "text/html;charset=UTF-8" }, status: 401 });
        return new Response(null, { status: 303, headers: { "Location": "/dashboard", "Set-Cookie": "user_id=" + user.id + "; user_name=" + encodeURIComponent(user.nombre) + "; Path=/; HttpOnly; Secure" } });
      } catch (err) {
        return new Response("Error en login.", { status: 500 });
      }
    }

    if (url.pathname === "/dashboard") {
      const cookieHeader = request.headers.get("Cookie") || "";
      if (!cookieHeader.includes("user_id=")) return Response.redirect(url.origin + "/login", 302);
      let userName = nombreEstudiante;
      const matchName = cookieHeader.match(/user_name=([^;]+)/);
      if (matchName) { try { userName = decodeURIComponent(matchName[1]); } catch(e){} }

      return new Response(`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Panel | Inglés con Emerson</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; background: #090d16; color: white; line-height: 1.5; }
    .dash-container { max-width: 900px; margin: 40px auto; padding: 20px; }
    .dash-header { background: #1e293b; border-radius: 14px; padding: 30px; margin-bottom: 25px; border: 1px solid rgba(255,255,255,0.08); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 15px; }
    .logout-btn { background: #dc2626; color: white; padding: 8px 16px; border-radius: 8px; font-weight: bold; font-size: 13px; text-decoration: none; display: inline-block; }
    .modules-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
    .module-card { background: #111827; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 22px; transition: transform 0.2s; }
    .module-card:hover { transform: translateY(-3px); border-color: #2563eb; }
    .module-link { display: inline-block; background: #2563eb; color: white; padding: 8px 16px; border-radius: 6px; font-weight: bold; font-size: 13px; text-decoration: none; margin-top: 12px; }
  </style>
</head>
<body>
  <div class="dash-container">
    <div class="dash-header">
      <div>
        <h1 style="color: #ffd43b; font-size: 26px;">¡Hola, ${userName}! 👋</h1>
        <p style="color: #94a3b8; font-size: 14px;">Bienvenido a tu plataforma de aprendizaje natural.</p>
      </div>
      <a href="/login" class="logout-btn" onclick="document.cookie='user_id=; Max-Age=0; path=/'; document.cookie='user_name=; Max-Age=0; path=/';">Cerrar Sesión</a>
    </div>
    <div class="modules-grid">
      <div class="module-card" style="border-color: #ffd43b;">
        <div style="font-size: 30px; margin-bottom: 12px;">🔐</div>
        <h3>Centro de Ejercicios Masivos</h3>
        <p style="font-size: 13px; color: #94a3b8;">Práctica activa de escritura y fases.</p>
        <a href="/ejercicios" class="module-link" style="background: #ffd43b; color: #172033;">Entrar →</a>
      </div>
      <div class="module-card">
        <div style="font-size: 30px; margin-bottom: 12px;">🎯</div>
        <h3>Al Grano (Acciones Específicas)</h3>
        <p style="font-size: 13px; color: #94a3b8;">Desbloquea el inglés con acciones concretas.</p>
        <a href="/al-grano" class="module-link">Ver Al Grano →</a>
      </div>
      <div class="module-card">
        <div style="font-size: 30px; margin-bottom: 12px;">🗣️</div>
        <h3>Simulador de Conversación</h3>
        <p style="font-size: 13px; color: #94a3b8;">Practica situaciones reales en diálogo vivo.</p>
        <a href="/simulador" class="module-link">Simular →</a>
      </div>
      <div class="module-card">
        <div style="font-size: 30px; margin-bottom: 12px;">🎮</div>
        <h3>Juega + (Arcade 3x3)</h3>
        <p style="font-size: 13px; color: #94a3b8;">Juegos de arrastrar con audio nativo.</p>
        <a href="/aprende/juegos" class="module-link">Jugar Ahora →</a>
      </div>
    </div>
  </div>
</body>
</html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    const commonHead = `
      <meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: Arial, sans-serif; color: #f8fafc; background: #090d16; line-height: 1.4; }
        a { color: inherit; text-decoration: none; }
        .top-book-banner { background: #ffd43b; color: #172033; padding: 8px 16px; text-align: center; font-size: 13px; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 15px; flex-wrap: wrap; }
        .top-book-banner a { background: #172033; color: #ffffff; padding: 4px 14px; border-radius: 20px; font-size: 11px; text-transform: uppercase; }
        header { position: sticky; top: 0; z-index: 1000; background: rgba(9, 13, 22, 0.98); border-bottom: 1px solid rgba(255,255,255,0.08); backdrop-filter: blur(10px); }
        .nav { max-width: 1100px; margin: auto; min-height: 60px; padding: 10px 16px; display: flex; align-items: center; justify-content: center; }
        .menu { display: flex; align-items: center; gap: 16px; font-size: 15px; font-weight: 800; color: #ffffff; flex-wrap: wrap; justify-content: center; }
        .menu a { color: #ffffff !important; }
        .menu a:hover { color: #60a5fa !important; }
        .btn { display: inline-block; padding: 10px 18px; border-radius: 8px; font-weight: 800; font-size: 14px; border: none; cursor: pointer; text-align: center; }
        .btn-primary { background: #2563eb; color: white; }
        .btn-cta { background: #ffd43b; color: #172033; font-weight: 800; font-size: 15px; padding: 12px 24px; border-radius: 8px; box-shadow: 0 4px 15px rgba(255, 212, 59, 0.3); }
        .quiz-card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 16px; color: #172033; box-shadow: 0 2px 6px rgba(0,0,0,0.02); }
        .tab-bar { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 25px; justify-content: center; }
        .tab-btn { padding: 8px 16px; border-radius: 8px; border: 2px solid #2563eb; background: #ffffff; font-weight: 800; cursor: pointer; color: #172033; font-size: 13px; }
        .tab-btn.active { background: #2563eb; color: #ffffff; border-color: #2563eb; }
        .input-box { width: 100%; padding: 12px; border: 2px solid #cbd5e1; border-radius: 8px; font-size: 14px; font-weight: 600; margin: 10px 0; color: #172033; }
        .whatsapp-float { position: fixed; right: 16px; bottom: 16px; z-index: 9999; padding: 10px 18px; border-radius: 50px; background: #25D366; color: white; font-weight: 800; font-size: 13px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); }
        footer { background: #05080e; color: #94a3b8; padding: 30px 20px; text-align: center; border-top: 1px solid rgba(255,255,255,0.06); font-size: 12px; }
      </style>
     
     <script>
function speak(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  
  var cleanText = String(text).replace(/['"]/g, '');
  var utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'en-US';
  utterance.rate = 0.96; // Velocidad ajustada ligeramente más rápida
  utterance.pitch = 1.0;

  function setVoiceAndSpeak() {
    var voices = window.speechSynthesis.getVoices();
    
    var americanVoice = voices.find(function(v) {
      return v.lang === 'en-US' && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Enhanced') || v.name.includes('Samantha') || v.name.includes('Siri'));
    }) || voices.find(function(v) {
      return v.lang === 'en-US';
    });

    if (americanVoice) {
      utterance.voice = americanVoice;
    }
    window.speechSynthesis.speak(utterance);
  }

  var voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    setVoiceAndSpeak();
  } else {
    window.speechSynthesis.onvoiceschanged = function() {
      setVoiceAndSpeak();
    };
  }
}
</script>
`;

const sharedNav = `
<div class="top-book-banner">
    <span><strong>¡NUEVO LIBRO!</strong> Dilo como un nativo: Estructuras y acciones reales. Only $14.99</span>
    <a href="${HOTMART_LIBRO_CHECKOUT}" target="_blank">Comprar Libro</a>
</div>
</header>
<nav class="nav">
    <div class="menu">
        <a href="/">Inicio</a>
        <a href="/aprende/visual" style="color: #68a05a !important;">🖼️ Visual</a>
        <a href="/al-grano" style="color: #ffd43b !important;">🎯 Al Grano</a>
        <a href="/speaking" style="color: #38bdf8 !important;">🎙️ Speaking</a>
        <a href="/simulador" style="color: #4ade80 !important;">🎮 Simulador</a>
        <a href="/aprende/juegos" style="color: #68a05a !important;">🕹️ Juega</a>
        <a href="/ahorcado">🕹️ Ahorcado</a>
        <a href="/millonario">💰 Millonario</a>
        <a href="/ejercicios">🏋️ Ejercicios</a>
        <a href="/phrasal-verbs" style="color: #f43f5e !important;">🔥 Phrasal verbs</a>
        <a href="/prueba" style="color: #38bdf8 !important;">🚀 ¡Pruébate!</a>
        <a href="/dashboard">👤 Mi Panel</a>
        <a href="https://frances-con-emerson.inglesconemersonteach.workers.dev/" style="background: #1e293b; border: 1px solid #475569; padding: 4px 10px; border-radius: 6px; color: #e2e8f0; text-decoration: none; font-weight: 700; font-size: 0.75rem;">🇫🇷 Francés</a>
    </div>
</nav>
</header>
`;

    const sharedFooter = `
      <footer>
        <strong style="color: white; font-size: 14px;">Inglés con Emerson</strong>
        <p style="margin-top: 4px;">Inglés real · Natural · Práctico</p>
        <p style="margin-top: 8px;">© 2026 Inglés con Emerson. Todos los derechos reservados.</p>
      </footer>
    `;

    const whatsappBtn = `<a href="https://wa.me/573184428084" class="whatsapp-float" target="_blank">💬 WhatsApp</a>`;

    if (url.pathname === "/speaking") {
      const frasesSpeaking = [
        // --- Bloque 1: Supervivencia y Conversación Diaria ---
        { "id": 1, "ingles": "How are you doing?", "transliteracion": "Jáu ar iu dúing?", "espanol": "¿Cómo vas / cómo estás?" },
        { "id": 2, "ingles": "What's up?", "transliteracion": "Guáts ap?", "espanol": "¿Qué tal? / ¿Qué pasa?" },
        { "id": 3, "ingles": "I'm coming right now", "transliteracion": "Áim káming ráit náu", "espanol": "Ya voy ahora mismo" },
        { "id": 4, "ingles": "See you later", "transliteracion": "Síu iu léiter", "espanol": "Nos vemos más tarde" },
        { "id": 5, "ingles": "Nice to meet you", "transliteracion": "Náis tu mít iu", "espanol": "Mucho gusto en conocerte" },
        { "id": 6, "ingles": "Can you help me please?", "transliteracion": "Kán iu hélp mi plís?", "espanol": "¿Me puedes ayudar por favor?" },
        { "id": 7, "ingles": "I don't understand", "transliteracion": "Ái dónt ánderstand", "espanol": "No entiendo" },
        { "id": 8, "ingles": "Can you speak slower?", "transliteracion": "Kán iu spík slóuer?", "espanol": "¿Puedes hablar más despacio?" },
        { "id": 9, "ingles": "How do you say this?", "transliteracion": "Jáu dú iu séi ðís?", "espanol": "¿Cómo se dice esto?" },
        { "id": 10, "ingles": "Take your time", "transliteracion": "Téik iór táim", "espanol": "Tómate tu tiempo" },
        
        // --- Bloque 2: Restaurante y Comida ---
        { "id": 11, "ingles": "Can I get a menu please?", "transliteracion": "Kán ái guét a ménu plís?", "espanol": "¿Me puede dar el menú por favor?" },
        { "id": 12, "ingles": "I would like a cup of coffee", "transliteracion": "Ái uúld láik a káp ov kófi", "espanol": "Me gustaría una taza de café" },
        { "id": 13, "ingles": "Ask for the bill check", "transliteracion": "Ásk for ðe bil chék", "espanol": "Pedir la cuenta" },
        { "id": 14, "ingles": "Can I get this to go?", "transliteracion": "Kán ái guét ðís tu góu?", "espanol": "¿Me lo puede dar para llevar?" },
        { "id": 15, "ingles": "Check the ingredients", "transliteracion": "Chék ði ingrídients", "espanol": "Revisar los ingredientes" },
        { "id": 16, "ingles": "Split the bill", "transliteracion": "Splít ðe bil", "espanol": "Dividir la cuenta" },
        { "id": 17, "ingles": "Call the waiter", "transliteracion": "Kól ðe uéiter", "espanol": "Llamar al mesero" },
        { "id": 18, "ingles": "Praise the chef", "transliteracion": "Préiz ðe chef", "espanol": "Felicitar al chef" },
        { "id": 19, "ingles": "Pay with credit card", "transliteracion": "Péi uíz krédit kárd", "espanol": "Pagar con tarjeta de crédito" },
        { "id": 20, "ingles": "Report food allergy", "transliteracion": "Ripórt fúud álerji", "espanol": "Reportar alergia a la comida" },

        // --- Bloque 3: Oficina y Negocios ---
        { "id": 21, "ingles": "Lead the meeting", "transliteracion": "Líd ðe míting", "espanol": "Liderar la reunión" },
        { "id": 22, "ingles": "Review financial reports", "transliteracion": "Riviú fainánshial ripórts", "espanol": "Revisar informes financieros" },
        { "id": 23, "ingles": "Handle a client complaint", "transliteracion": "Jándl a kliént kompléint", "espanol": "Manejar una queja de cliente" },
        { "id": 24, "ingles": "Delegate daily tasks", "transliteracion": "Déligueit déili tásks", "espanol": "Delegar tareas diarias" },
        { "id": 25, "ingles": "Reply to emails", "transliteracion": "Riplái tu ímeils", "espanol": "Responder correos electrónicos" },
        { "id": 26, "ingles": "Print out important files", "transliteracion": "Prínt áut impórtant fáils", "espanol": "Imprimir archivos importantes" },
        { "id": 27, "ingles": "Sign the contract", "transliteracion": "Sáin ðe kóntract", "espanol": "Firmar el contrato" },
        { "id": 28, "ingles": "Schedule a call for tomorrow", "transliteracion": "Skédjul a kól for tumórou", "espanol": "Agendar llamada para mañana" },
        { "id": 29, "ingles": "Negotiate with the new vendor", "transliteracion": "Nigóusheit uíz ðe nú vúndor", "espanol": "Negociar con el nuevo proveedor" },
        { "id": 30, "ingles": "Provide constructive feedback", "transliteracion": "Prováid konstráctiv fídbak", "espanol": "Dar retroalimentación constructiva" },

        // --- Bloque 4: Cocina y Mañana ---
        { "id": 31, "ingles": "Brew fresh coffee", "transliteracion": "Brú fresh kófi", "espanol": "Preparar / colar café fresco" },
        { "id": 32, "ingles": "Crack an egg into the pan", "transliteracion": "Krák an ég íntu ðe pán", "espanol": "Cascar un huevo en la sartén" },
        { "id": 33, "ingles": "Wipe the counter", "transliteracion": "Uáip ðe káunter", "espanol": "Limpiar el mesón" },
        { "id": 34, "ingles": "Slice the bread", "transliteracion": "Sláis ðe bréd", "espanol": "Cortar el pan en rebanadas" },
        { "id": 35, "ingles": "Pour some milk", "transliteracion": "Pór sóm milk", "espanol": "Servir un poco de leche" },
        { "id": 36, "ingles": "Wash the dirty dishes", "transliteracion": "Uósh ðe dーrti díshis", "espanol": "Lavar los platos sucios" },
        { "id": 37, "ingles": "Take out the trash", "transliteracion": "Téik áut ðe trásh", "espanol": "Sacar la basura" },
        { "id": 38, "ingles": "Make the bed", "transliteracion": "Méik ðe béd", "espanol": "Hacer la cama" },
        { "id": 39, "ingles": "Lock the door", "transliteracion": "Lók ðe dór", "espanol": "Cerrar la puerta con llave" },
        { "id": 40, "ingles": "Preheat the oven", "transliteracion": "Prí-jiit ði óvn", "espanol": "Precalentar el horno" },

        // --- Bloque 5: Ruta y Conducción (Trucking) ---
        { "id": 41, "ingles": "Check tire pressure", "transliteracion": "Chék táier préshur", "espanol": "Revisar presión de llantas" },
        { "id": 42, "ingles": "Refuel the truck", "transliteracion": "Rifiúel ðe trák", "espanol": "Tanquear el camión" },
        { "id": 43, "ingles": "Secure cargo straps", "transliteracion": "Sikiúr kárgou stráps", "espanol": "Asegurar correas de carga" },
        { "id": 44, "ingles": "Adjust mirrors and seat", "transliteracion": "Adjúst mírors and síit", "espanol": "Ajustar espejos y asiento" },
        { "id": 45, "ingles": "Park at the loading dock", "transliteracion": "Párk at ðe lóuding dók", "espanol": "Estacionar en el muelle de carga" },
        { "id": 46, "ingles": "Scale the load at a station", "transliteracion": "Skéil ðe lóud at a stéishon", "espanol": "Pesar la carga en báscula" },
        { "id": 47, "ingles": "Check GPS navigation route", "transliteracion": "Chék dji-pi-és návigéishon rúut", "espanol": "Revisar ruta GPS" },
        { "id": 48, "ingles": "Turn on hazard lights", "transliteracion": "Térn on házard láits", "espanol": "Encender luces de emergencia" },
        { "id": 49, "ingles": "Log driving hours", "transliteracion": "Lóg dráiving áurs", "espanol": "Registrar horas de conducción" },
        { "id": 50, "ingles": "Contact dispatch", "transliteracion": "Kóntact dispátch", "espanol": "Contactar con despacho" },

        // --- Bloque 6: Desbloqueo Mental y Expresiones Avanzadas ---
        { "id": 51, "ingles": "I don't feel like going out", "transliteracion": "Ái dónt fíel láik góuing áut", "espanol": "No tengo ganas de salir" },
        { "id": 52, "ingles": "We are going to run out of time", "transliteracion": "Uí ár góuing tu rán áut ov táim", "espanol": "Nos vamos a quedar sin tiempo" },
        { "id": 53, "ingles": "I look forward to seeing you", "transliteracion": "Ái lúk fórward tu síing iu", "espanol": "Espero verte con ilusión" },
        { "id": 54, "ingles": "Make up your mind", "transliteracion": "Méik áp iór máind", "espanol": "Decídete" },
        { "id": 55, "ingles": "I wish I could speak fluently", "transliteracion": "Ái uísh ái kúld spík flúentli", "espanol": "Ojalá pudiera hablar con fluidez" },
        { "id": 56, "ingles": "It turns out to be easy", "transliteracion": "It térns áut tu bí ízi", "espanol": "Resulta ser fácil" },
        { "id": 57, "ingles": "Figure out the problem", "transliteracion": "Fíguer áut ðe próblem", "espanol": "Resolver / averiguar el problema" },
        { "id": 58, "ingles": "Never give up learning", "transliteracion": " Néver gív áp lérning", "espanol": "Nunca te rindas de aprender" },
        { "id": 59, "ingles": "Actually I was about to call you", "transliteracion": "Áktchuali ái uáz abáut tu kól iu", "espanol": "De hecho estaba a punto de llamarte" },
        { "id": 60, "ingles": "To be honest I really don't know", "transliteracion": "Tu bí ónest ái ríali dónt nóu", "espanol": "Para ser honesto no tengo idea" },

        // --- Bloque 7: Phrasal Verbs y Fluidez Natural ---
        { "id": 61, "ingles": "My computer is acting up", "transliteracion": "Mái compiúter iz ácting áp", "espanol": "Mi computadora está fallando" },
        { "id": 62, "ingles": "Always back up your files", "transliteracion": "Ólveis bák áp iór fáils", "espanol": "Respalda siempre tus archivos" },
        { "id": 63, "ingles": "My car broke down", "transliteracion": "Mái kár bróuk dáun", "espanol": "Mi carro se varó" },
        { "id": 64, "ingles": "We need to catch up", "transliteracion": "Uí níd tu kátch áp", "espanol": "Necesitamos ponernos al día" },
        { "id": 65, "ingles": "Cheer up things get better", "transliteracion": "Chíer áp ðings guét béter", "espanol": "Anímate todo mejora" },
        { "id": 66, "ingles": "You can always count on me", "transliteracion": "Iú kán ólveis káunt on mí", "espanol": "Siempre puedes contar conmigo" },
        { "id": 67, "ingles": "I need to deal with this", "transliteracion": "Ái níd tu díal uíz ðís", "espanol": "Tengo que lidiar con esto" },
        { "id": 68, "ingles": "Fill out this application form", "transliteracion": "Fíl áut ðis áplicéishon form", "espanol": "Completa este formulario" },
        { "id": 69, "ingles": "I get along with coworkers", "transliteracion": "Ái guét alóng uíz kúorkuers", "espanol": "Me llevo bien con compañeros" },
        { "id": 70, "ingles": "Don't put off until tomorrow", "transliteracion": "Dónt pút óf ántil tumórou", "espanol": "No lo dejes para mañana" },

        // --- Bloque 8: Expresiones de Supermercado y Tiendas ---
        { "id": 71, "ingles": "Grab a shopping cart", "transliteracion": "Gráb a shóping kárt", "espanol": "Tomar un carrito de compras" },
        { "id": 72, "ingles": "Weigh the vegetables", "transliteracion": "Uéi ðe védjetabuls", "espanol": "Pesar los vegetales" },
        { "id": 73, "ingles": "Check expiration date", "transliteracion": "Chék ekspiréishon déit", "espanol": "Revisar fecha de vencimiento" },
        { "id": 74, "ingles": "Look for discounts", "transliteracion": "Lúk for diskáunts", "espanol": "Buscar descuentos" },
        { "id": 75, "ingles": "Use self checkout", "transliteracion": "Iús self chékáut", "espanol": "Usar caja de auto cobro" },
        { "id": 76, "ingles": "Return a damaged item", "transliteracion": "Ritérn a dámadjd áitem", "espanol": "Devolver producto dañado" },
        { "id": 77, "ingles": "Ask for price check", "transliteracion": "Ásk for práis chék", "espanol": "Pedir verificación de precio" },
        { "id": 78, "ingles": "Wait in line", "transliteracion": "Uéit in láin", "espanol": "Hacer fila" },
        { "id": 79, "ingles": "Buy frozen foods", "transliteracion": "Bái fróuzen fúuds", "espanol": "Comprar alimentos congelados" },
        { "id": 80, "ingles": "Ask customer service", "transliteracion": "Ásk kástomer sérvis", "espanol": "Preguntar en servicio al cliente" },

        // --- Bloque 9: Transacciones Bancarias ---
        { "id": 81, "ingles": "Open a bank account", "transliteracion": "Óupen a bánk akáunt", "espanol": "Abrir una cuenta bancaria" },
        { "id": 82, "ingles": "Deposit cash", "transliteracion": "Dipósit kash", "espanol": "Depositar efectivo" },
        { "id": 83, "ingles": "Withdraw money from ATM", "transliteracion": "Uizdróu máni from éi-ti-ém", "espanol": "Retirar dinero del cajero" },
        { "id": 84, "ingles": "Exchange currency", "transliteracion": "Ekshéinj kárensi", "espanol": "Cambiar moneda / divisa" },
        { "id": 85, "ingles": "Request a new debit card", "transliteracion": "Rikuést a nú débit kárd", "espanol": "Solicitar nueva tarjeta débito" },
        { "id": 86, "ingles": "Check account balance", "transliteracion": "Chék akáunt bálans", "espanol": "Consultar saldo de cuenta" },
        { "id": 87, "ingles": "Report a lost card", "transliteracion": "Ripórt a lóst kárd", "espanol": "Reportar tarjeta perdida" },
        { "id": 88, "ingles": "Transfer funds", "transliteracion": "Tránsfer fánds", "espanol": "Transferir fondos" },
        { "id": 89, "ingles": "Apply for a loan", "transliteracion": "Aplái for a lóun", "espanol": "Solicitar un préstamo" },
        { "id": 90, "ingles": "Reset online password", "transliteracion": "Riset ónlain pásuord", "espanol": "Restablecer contraseña en línea" },

        // --- Bloque 10: Maestría y Cierre Profesional ---
        { "id": 91, "ingles": "Consistency is key to success", "transliteracion": "Konsistensi iz kíi tu suksés", "espanol": "La constancia es la clave del éxito" },
        { "id": 92, "ingles": "Practice makes fluent speakers", "transliteracion": "Práctis méiks flúent spíkers", "espanol": "La práctica hace hablantes fluidos" },
        { "id": 93, "ingles": "Learning a new language opens doors", "transliteracion": "Lérning a nú lánguij óupens dors", "espanol": "Aprender un idioma abre puertas" },
        { "id": 94, "ingles": "Speak English and feel confident", "transliteracion": "Spík ínglish and fíel kónfident", "espanol": "Habla inglés y siéntete seguro" },
        { "id": 95, "ingles": "Time is our most valuable asset", "transliteracion": "Táim iz áur móust vályubl ásét", "espanol": "El tiempo es nuestro activo más valioso" },
        { "id": 96, "ingles": "Every problem has a solution", "transliteracion": "Évri próblem ház a solúshon", "espanol": "Cada problema tiene una solución" },
        { "id": 97, "ingles": "Celebrate every small progress", "transliteracion": "Sélebreit évri smól prógres", "espanol": "Celebra cada pequeño avance" },
        { "id": 98, "ingles": "Stay focused during your studies", "transliteracion": "Stéi fóukust diúring iór stúdis", "espanol": "Mantente enfocado durante tus estudios" },
        { "id": 99, "ingles": "Welcome to Lengua Real studio", "transliteracion": "Uélkam tu Léngua Riál stúdio", "espanol": "Bienvenido al estudio de Lengua Real" },
        { "id": 100, "ingles": "Keep practicing every single day", "transliteracion": "Kíp prácticasing évri sóngl déi", "espanol": "Sigue practicando todos los días" }
      ];

      const safeFrasesJson = JSON.stringify(frasesSpeaking);

      return new Response(`<!DOCTYPE html>
<html lang="es">
<head>
  ${commonHead}
  <title>Speaking & Pronunciation Lab | Inglés con Emerson</title>
  <style>
    .speaking-wrapper { max-width: 850px; margin: 30px auto; padding: 0 15px 60px; }
    .hero-card { background: linear-gradient(135deg, #1e293b, #0f172a); border: 2px solid #38bdf8; border-radius: 16px; padding: 30px; text-align: center; margin-bottom: 25px; box-shadow: 0 10px 30px rgba(56, 189, 248, 0.15); }
    .phrase-card { background: #111827; border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 24px; margin-bottom: 16px; transition: transform 0.2s, border-color 0.2s; }
    .phrase-card:hover { border-color: #38bdf8; transform: translateY(-2px); }
    .rec-btn { background: #e11d48; color: white; border: none; padding: 10px 20px; border-radius: 30px; font-weight: 800; font-size: 13px; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 15px rgba(225, 29, 72, 0.4); transition: transform 0.1s, background 0.2s; }
    .rec-btn:hover { background: #be123c; }
    .rec-btn.recording { background: #16a34a; animation: pulse 1.5s infinite; }
    @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0.6); } 70% { box-shadow: 0 0 0 12px rgba(22, 163, 74, 0); } 100% { box-shadow: 0 0 0 0 rgba(22, 163, 74, 0); } }
    .badge-score { font-size: 14px; font-weight: 900; padding: 6px 14px; border-radius: 8px; display: inline-block; margin-top: 12px; }
  </style>
</head>
<body>
  ${sharedNav}
  <main class="speaking-wrapper">
    <div class="hero-card">
      <span style="font-size: 11px; font-weight: 800; color: #38bdf8; text-transform: uppercase; letter-spacing: 2px;">Laboratorio Fonético 🎙️</span>
      <h1 style="font-size: 26px; font-weight: 800; color: white; margin-top: 6px;">Speaking & Pronunciation Lab</h1>
      <p style="color: #cbd5e1; font-size: 14px; max-width: 650px; margin: 8px auto 0;">Escucha la pronunciación nativa, lee la transliteración y grábate para recibir un análisis instantáneo con puntuación exacta de 0 a 100%.</p>
    </div>

    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px;">
      <div style="font-size: 14px; font-weight: 800; color: #94a3b8;">Total Frases Esenciales: <span style="color: #38bdf8;">100</span></div>
      <input type="text" id="speaking-search" class="search-box" style="margin:0; max-width: 300px; padding: 10px 14px; font-size: 14px;" placeholder="🔍 Buscar frase..." onkeyup="filterPhrases()">
    </div>

    <div id="phrases-container"></div>
  </main>
  ${sharedFooter} ${whatsappBtn}
  <script>
    var phrasesData = ${safeFrasesJson};

    function renderPhrases(items) {
      var container = document.getElementById('phrases-container');
      container.innerHTML = "";
      if (!items.length) {
        container.innerHTML = '<div style="text-align: center; color: #64748b; padding: 30px;">No se encontraron frases.</div>';
        return;
      }
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var card = document.createElement('div');
        card.className = "phrase-card";
        var safeIngles = String(item.ingles).replace(/'/g, "\\\\'");
        
        card.innerHTML = '<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 15px; flex-wrap: wrap;">' +
          '<div style="flex: 1; min-width: 250px;">' +
            '<div style="font-size: 11px; font-weight: 800; color: #38bdf8; margin-bottom: 4px;">FRASE #' + item.id + '</div>' +
            '<div style="font-size: 20px; font-weight: 800; color: #ffffff; margin-bottom: 4px;">' + item.ingles + '</div>' +
            '<div style="font-size: 13px; color: #ffd43b; font-style: italic; margin-bottom: 6px;">🗣️ Pronunciación figurada: "' + item.transliteracion + '"</div>' +
            '<div style="font-size: 13px; color: #94a3b8; font-weight: 600;">🇪🇸 ' + item.espanol + '</div>' +
          '</div>' +
          '<div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">' +
            '<button class="btn" style="background: rgba(56,189,248,0.15); color: #38bdf8; padding: 8px 14px; font-size: 12px; border-radius: 8px;" onclick="speak(\\\'' + safeIngles + '\\\')">🔊 Escuchar</button>' +
            '<button class="rec-btn" id="rec-btn-' + item.id + '" onclick="toggleRecord(' + item.id + ', \\\'' + safeIngles + '\\\')">🎤 Hablar</button>' +
          '</div>' +
        '</div>' +
        '<div id="result-box-' + item.id + '" style="margin-top: 15px; display: none; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.06);"></div>';
        
        container.appendChild(card);
      }
    }

    function filterPhrases() {
      var q = document.getElementById('speaking-search').value.toLowerCase().trim();
      if (!q) { renderPhrases(phrasesData); return; }
      var filtered = [];
      for (var i = 0; i < phrasesData.length; i++) {
        var p = phrasesData[i];
        if (p.ingles.toLowerCase().includes(q) || p.espanol.toLowerCase().includes(q) || p.transliteracion.toLowerCase().includes(q)) {
          filtered.push(p);
        }
      }
      renderPhrases(filtered);
    }

    function toggleRecord(id, targetText) {
      var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      
      var btn = document.getElementById('rec-btn-' + id);
      var resultBox = document.getElementById('result-box-' + id);
      resultBox.style.display = "block";

      if (!SpeechRecognition) {
        resultBox.innerHTML = '<span style="color: #f87171; font-size: 13px;">⚠️ Tu navegador no soporta reconocimiento de voz. Usa Safari actualizado en tu iPhone.</span>';
        return;
      }

      try {
        // En iOS es vital instanciar un objeto completamente nuevo por cada clic para evitar bloqueos de hardware
        var recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        btn.classList.add('recording');
        btn.innerText = "🛑 Escuchando...";
        resultBox.innerHTML = '<span style="color: #38bdf8; font-size: 13px;">🎙️ Te escucho... Habla ahora claro.</span>';

        // Variable de control para evitar ejecuciones duplicadas en iOS
        var resolved = false;

        recognition.onresult = function(event) {
          if (resolved) return;
          resolved = true;
          
          var speechResult = event.results[0][0].transcript;
          var score = calculateMatch(speechResult, targetText);
          
          btn.classList.remove('recording');
          btn.innerText = "🎤 Hablar";

          var badgeBg = score >= 80 ? "#16a34a" : (score >= 50 ? "#2563eb" : "#dc2626");

          resultBox.innerHTML = '<div style="font-size: 13px; color: #e2e8f0; margin-bottom: 4px;">Tú dijiste: <strong style="color: #38bdf8;">"' + speechResult + '"</strong></div>' +
            '<div class="badge-score" style="background: ' + badgeBg + '; color: white;">🎯 Precisión Fonética: ' + score + '%</div>';
        };

        recognition.onerror = function(event) {
          if (resolved) return;
          resolved = true;
          
          btn.classList.remove('recording');
          btn.innerText = "🎤 Hablar";
          
          var errorMsg = event.error;
          if (errorMsg === 'not-allowed') {
            errorMsg = "Permiso de micrófono denegado. Ve a Ajustes > Safari > Micrófono y actívalo.";
          } else if (errorMsg === 'no-speech') {
            errorMsg = "No se detectó voz. Inténtalo de nuevo.";
          }
          
          resultBox.innerHTML = '<span style="color: #f87171; font-size: 13px;">❌ Error: ' + errorMsg + '</span>';
        };

        recognition.onend = function() {
          if (!resolved) {
            btn.classList.remove('recording');
            btn.innerText = "🎤 Hablar";
          }
        };

        // Forzar el inicio de la escucha de manera segura para iOS
        recognition.start();

      } catch (e) {
        btn.classList.remove('recording');
        btn.innerText = "🎤 Hablar";
        resultBox.innerHTML = '<span style="color: #f87171; font-size: 13px;">❌ Error al iniciar el micrófono en iOS. Asegúrate de dar permisos.</span>';
      }
    }

    function calculateMatch(spoken, target) {
      var cleanS = spoken.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
      var cleanT = target.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
      if (cleanS === cleanT) return 100;
      
      var wordsS = cleanS.split(" ");
      var wordsT = cleanT.split(" ");
      var matches = 0;

      for (var i = 0; i < wordsS.length; i++) {
        if (wordsT.includes(wordsS[i])) matches++;
      }

      var percentage = Math.round((matches / Math.max(wordsS.length, wordsT.length)) * 100);
      return percentage > 95 ? 95 : (percentage < 10 ? 15 : percentage);
    }

   renderPhrases(phrasesData);
  </script>
</body>
</html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    if (url.pathname === "/simulador") {
      return new Response(`<!DOCTYPE html>
<html lang="es">
<head>
  ${commonHead}
  <title>Simulador de Conversación | Inglés con Emerson</title>
  <style>
    .sim-wrapper { max-width: 800px; margin: 30px auto; padding: 0 15px 50px; }
    .chat-box { background: #111827; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; height: 400px; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 15px; margin-bottom: 20px; }
    .chat-msg { max-width: 80%; padding: 12px 16px; border-radius: 10px; font-size: 14px; line-height: 1.5; }
    .chat-msg.bot { background: #1e293b; color: #f8fafc; align-self: flex-start; border-left: 4px solid #ffd43b; }
    .chat-msg.user { background: #2563eb; color: #ffffff; align-self: flex-end; }
    .chat-input-area { display: flex; gap: 10px; }
    .scenario-picker { display: flex; gap: 8px; justify-content: center; margin-bottom: 20px; flex-wrap: wrap; }
  </style>
</head>
<body>
  ${sharedNav}
  <main class="sim-wrapper">
    <div style="text-align: center; margin-bottom: 20px;">
      <span style="font-size: 11px; font-weight: 800; color: #4ade80; text-transform: uppercase;">Práctica Interactiva</span>
      <h1 style="font-size: 26px; font-weight: 800; margin-top: 4px; color: #ffffff;">Simulador de Conversación Real</h1>
      <p style="font-size: 13px; color: #94a3b8; margin-top: 4px;">Elige un escenario y dialoga en inglés con el asistente virtual.</p>
    </div>

    <div class="scenario-picker" id="scenario-buttons">
      <button class="tab-btn active" onclick="setScenario('restaurant')">🍽️ Restaurante</button>
      <button class="tab-btn" onclick="setScenario('drivethru')">🚗 Drive-Thru</button>
      <button class="tab-btn" onclick="setScenario('friendcall')">📞 Llamada Amigo</button>
      <button class="tab-btn" onclick="setScenario('bank')">🏦 Banco</button>
      <button class="tab-btn" onclick="setScenario('trucking')">🚛 Ruta</button>
    </div>

    <div class="chat-box" id="chat-history"></div>

    <div class="chat-input-area">
      <input type="text" id="user-input" class="input-box" style="margin:0;" placeholder="Escribe tu respuesta en inglés..." onkeypress="if(event.key==='Enter') sendMessage()">
      <button class="btn btn-primary" onclick="sendMessage()">Enviar ➔</button>
    </div>
  </main>
  ${sharedFooter} ${whatsappBtn}
  <script>
    var currentScenario = 'restaurant';
    var scenariosData = {
      'restaurant': {
        greeting: "Hello! Welcome to our restaurant. Are you ready to order, or would you like to see the menu first?",
        responses: [
          "Great choice! Would you like something to drink with that?",
          "Excellent. The special of the day is grilled salmon with garlic potatoes. Do you want to try it?",
          "Got it! Your order will be ready in about fifteen minutes. Can I get you anything else?",
          "Perfect! Enjoy your meal. Let me know if you need anything else."
        ]
      },
      'drivethru': {
        greeting: "Hi there! Welcome to Burger Stop drive-thru. What can I get started for you today?",
        responses: [
          "Got it! Would you like to make that a combo with fries and a large soda?",
          "Sure thing. Any dipping sauce with your chicken nuggets?",
          "That'll be $12.50 at the first window. Pull forward, please!",
          "Thank you! Drive safely."
        ]
      },
      'friendcall': {
        greeting: "Hey man! What's up? I was thinking about going out tonight. Do you feel like grabbing a beer?",
        responses: [
          "Awesome! I'll pick you up around 8 PM, sounds good?",
          "No worries at all! We can totally do it another day. Take your time.",
          "Alright, see you in a bit. Don't be late!",
          "Haha perfect, I'm looking forward to it!"
        ]
      },
      'bank': {
        greeting: "Good morning! Welcome to First National Bank. How can I help you with your account today?",
        responses: [
          "I can certainly help you with that deposit. Do you have your ID and account number ready?",
          "Let me check your account balance on the system. Please hold on a second.",
          "All done! Is there anything else you need to update today?",
          "Thank you for banking with us. Have a wonderful day!"
        ]
      },
      'trucking': {
        greeting: "Dispatch here! What is your current status on the highway, driver?",
        responses: [
          "Understood. Make sure you check your tire pressure at the next rest stop.",
          "Copy that. Keep an eye on your driving hours to stay compliant with regulations.",
          "Got your report. Secure those cargo straps tightly before hitting the mountain pass.",
          "Safe travels! Contact dispatch if you experience any mechanical issues."
        ]
      }
    };
    var botResponseIndex = 0;

    function setScenario(scKey) {
      currentScenario = scKey;
      botResponseIndex = 0;
      var btns = document.querySelectorAll('.scenario-picker button');
      for(var i=0; i<btns.length; i++) btns[i].classList.remove('active');
      event.currentTarget.classList.add('active');
      
      var chatHistory = document.getElementById('chat-history');
      chatHistory.innerHTML = "";
      appendMessage(scenariosData[scKey].greeting, 'bot');
      speak(scenariosData[scKey].greeting);
    }

    function appendMessage(text, sender) {
      var chatHistory = document.getElementById('chat-history');
      var div = document.createElement('div');
      div.className = "chat-msg " + sender;
      div.innerText = text;
      chatHistory.appendChild(div);
      chatHistory.scrollTop = chatHistory.scrollHeight;
    }

    function sendMessage() {
      var input = document.getElementById('user-input');
      var text = input.value.trim();
      if(!text) return;
      
      appendMessage(text, 'user');
      input.value = "";

      setTimeout(function() {
        var sc = scenariosData[currentScenario];
        var reply = sc.responses[botResponseIndex % sc.responses.length];
        botResponseIndex++;
        appendMessage(reply, 'bot');
        speak(reply);
      }, 700);
    }

    setScenario('restaurant');
  </script>
</body>
</html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    if (url.pathname === "/aprende/visual") {
      return new Response(`<!DOCTYPE html>
<html lang="es">
<head>
  ${commonHead}
  <title>Escenarios Visuales Progresivos | Inglés con Emerson</title>
  <style>
    .visual-wrapper { max-width: 850px; margin: 25px auto; padding: 0 15px 50px; }
    .level-bar { display: flex; gap: 8px; justify-content: center; margin-bottom: 20px; flex-wrap: wrap; }
    .level-btn { background: #1e293b; color: #94a3b8; border: 2px solid rgba(255,255,255,0.08); padding: 8px 16px; border-radius: 8px; font-weight: 800; cursor: pointer; font-size: 12px; }
    .level-btn.active { background: #2563eb; color: #ffffff; border-color: #2563eb; }
    .grid-3x3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px; }
    .card-3x3 { background: #ffffff; border: 2px dashed #94a3b8; border-radius: 12px; padding: 12px 6px; text-align: center; min-height: 110px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #172033; cursor: pointer; }
    .card-3x3.highlight { background: #eff6ff; border-color: #2563eb; }
    .pool-3x3 { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; background: #111827; padding: 15px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); }
    .item-3x3 { background: #2563eb; color: white; padding: 10px 14px; border-radius: 8px; font-weight: 800; cursor: grab; font-size: 12px; user-select: none; }
  </style>
</head>
<body>
  ${sharedNav}
  <main class="visual-wrapper">
    <div style="text-align: center; margin-bottom: 20px;">
      <span style="font-size: 11px; font-weight: 800; color: #60a5fa; text-transform: uppercase;">Inmersión Gráfica por Niveles</span>
      <h1 style="font-size: 26px; font-weight: 800; margin-top: 4px; color: #ffffff;">Escenarios Visuales Progresivos</h1>
      <p style="font-size: 13px; color: #94a3b8; margin-top: 4px;">Selecciona un nivel y arrastra las acciones correctas a sus íconos gigantes.</p>
    </div>
    <div class="level-bar" id="level-tabs"></div>
    <div style="display: flex; justify-content: space-between; background: #1e293b; padding: 8px 14px; border-radius: 8px; margin-bottom: 12px; font-weight: 800; font-size: 13px;">
      <div>⭐ Puntos: <span id="v-score" style="color: #ffd43b;">0</span></div>
      <div>🎯 Aciertos: <span id="v-matched" style="color: #4ade80;">0</span> / <span id="v-total">9</span></div>
    </div>
    <div class="grid-3x3" id="v-grid"></div>
    <div style="font-size: 12px; font-weight: 800; margin-bottom: 6px; color: #cbd5e1; text-align: center;">Palabras Disponibles:</div>
    <div class="pool-3x3" id="v-pool"></div>
    <div id="v-msg" style="text-align: center; margin-top: 15px; font-weight: 800; font-size: 13px; min-height: 20px;"></div>
  </main>
  ${sharedFooter} ${whatsappBtn}
  <script>
    var visualLevels = {
      "Nivel 1: Básico (Casa)": [
        { "emoji": "☕", "ingles": "brew coffee", "espanol": "Preparar café" },
        { "emoji": "🍳", "ingles": "crack an egg", "espanol": "Cascar huevo" },
        { "emoji": "🧽", "ingles": "wipe the counter", "espanol": "Limpiar mesón" },
        { "emoji": "🍞", "ingles": "slice the bread", "espanol": "Cortar pan" },
        { "emoji": "🥛", "ingles": "pour some milk", "espanol": "Servir leche" },
        { "emoji": "🍽️", "ingles": "wash the dishes", "espanol": "Lavar platos" },
        { "emoji": "🗑️", "ingles": "take out trash", "espanol": "Sacar basura" },
        { "emoji": "🛏️", "ingles": "make the bed", "espanol": "Hacer la cama" },
        { "emoji": "🚪", "ingles": "lock the door", "espanol": "Cerrar puerta" }
      ],
      "Nivel 2: Intermedio (Oficina)": [
        { "emoji": "💻", "ingles": "reply to emails", "espanol": "Responder correos" },
        { "emoji": "📊", "ingles": "review reports", "espanol": "Revisar informes" },
        { "emoji": "🤝", "ingles": "lead the meeting", "espanol": "Liderar reunión" },
        { "emoji": "📞", "ingles": "handle a complaint", "espanol": "Manejar queja" },
        { "emoji": "🖨️", "ingles": "print documents", "espanol": "Imprimir documentos" },
        { "emoji": "📋", "ingles": "delegate tasks", "espanol": "Delegar tareas" },
        { "emoji": "🖊️", "ingles": "sign a contract", "espanol": "Firmar contrato" },
        { "emoji": "📅", "ingles": "schedule meeting", "espanol": "Agendar reunión" },
        { "emoji": "☕", "ingles": "coffee break", "espanol": "Pausa de café" }
      ],
      "Nivel 3: Avanzado (Ruta / Trucking)": [
        { "emoji": "🛞", "ingles": "check tire pressure", "espanol": "Revisar llantas" },
        { "emoji": "⛽", "ingles": "refuel the truck", "espanol": "Tanquear camión" },
        { "emoji": "🔗", "ingles": "secure cargo straps", "espanol": "Asegurar correas" },
        { "emoji": "🪞", "ingles": "adjust mirrors", "espanol": "Ajustar espejos" },
        { "emoji": "🅿️", "ingles": "park at the dock", "espanol": "Estacionar en muelle" },
        { "emoji": "⚖️", "ingles": "scale the load", "espanol": "Pesar la carga" },
        { "emoji": "🗺️", "ingles": "check GPS route", "espanol": "Revisar ruta GPS" },
        { "emoji": "🛑", "ingles": "stop at red light", "espanol": "Parar en semáforo" },
        { "emoji": "📞", "ingles": "call dispatcher", "espanol": "Llamar despachador" }
      ]
    };
    var levelKeys = Object.keys(visualLevels);
    var currentLevelName = levelKeys[0];
    var score = 0, matchedCount = 0;
    function initLevelTabs() {
      var bar = document.getElementById('level-tabs');
      bar.innerHTML = "";
      for (var i = 0; i < levelKeys.length; i++) {
        var lvl = levelKeys[i];
        var btn = document.createElement('button');
        btn.className = "level-btn" + (lvl === currentLevelName ? " active" : "");
        btn.innerText = lvl;
        (function(name) { btn.onclick = function() { currentLevelName = name; initLevelTabs(); loadLevelData(name); }; })(lvl);
        bar.appendChild(btn);
      }
    }
    function loadLevelData(lvlName) {
      score = 0; matchedCount = 0;
      document.getElementById('v-score').innerText = score;
      document.getElementById('v-matched').innerText = matchedCount;
      document.getElementById('v-msg').innerText = "";
      var items = visualLevels[lvlName];
      document.getElementById('v-total').innerText = items.length;
      var grid = document.getElementById('v-grid');
      grid.innerHTML = "";
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var box = document.createElement('div');
        box.className = "card-3x3";
        box.setAttribute("ondragover", "allowDrop(event)");
        box.setAttribute("ondragleave", "removeHighlight(event)");
        box.setAttribute("ondrop", "dropItem(event, '" + item.ingles + "')");
        box.innerHTML = '<div style="font-size: 32px; margin-bottom: 2px;">' + item.emoji + '</div>' +
                        '<span style="font-size: 10px; font-weight: 800; color: #475569;">' + item.espanol + '</span>';
        grid.appendChild(box);
      }
      var shuffled = items.slice().sort(function() { return Math.random() - 0.5; });
      var pool = document.getElementById('v-pool');
      pool.innerHTML = "";
      for (var j = 0; j < shuffled.length; j++) {
        var s = shuffled[j];
        var el = document.createElement('div');
        el.className = "item-3x3";
        el.setAttribute("draggable", "true");
        el.setAttribute("ondragstart", "drag(event)");
        el.id = "v-drag-" + j;
        el.setAttribute("data-word", s.ingles);
        el.innerText = s.ingles;
        pool.appendChild(el);
      }
    }
    function allowDrop(ev) { ev.preventDefault(); ev.currentTarget.classList.add('highlight'); }
    function removeHighlight(ev) { ev.currentTarget.classList.remove('highlight'); }
    function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); ev.dataTransfer.setData("word", ev.target.getAttribute("data-word")); }
    function dropItem(ev, targetKey) {
      ev.preventDefault(); ev.currentTarget.classList.remove('highlight');
      var id = ev.dataTransfer.getData("text");
      var word = ev.dataTransfer.getData("word");
      var dragged = document.getElementById(id);
      var msg = document.getElementById('v-msg');
      if (word === targetKey) {
        ev.currentTarget.innerHTML = '<div style="font-size: 12px; font-weight: 800; color: #16a34a;">✅ ' + targetKey + '</div>';
        dragged.remove();
        score += 10; matchedCount++;
        document.getElementById('v-score').innerText = score;
        document.getElementById('v-matched').innerText = matchedCount;
        speak(targetKey);
        msg.style.color = "#4ade80"; msg.innerText = "🎉 ¡Correcto!";
        if (matchedCount === visualLevels[currentLevelName].length) { msg.innerText = "🏆 ¡Nivel completado con éxito!"; }
      } else {
        msg.style.color = "#f87171"; msg.innerText = "❌ Inténtalo de nuevo.";
      }
    }
    initLevelTabs(); loadLevelData(currentLevelName);
  </script>
</body>
</html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    if (url.pathname === "/al-grano") {
      const safeAprendeJson = JSON.stringify(DATA_APRENDE);
      const safeAccionesJson = JSON.stringify(DATA_ACCIONES_ESPECIFICAS);
      return new Response(`<!DOCTYPE html>
<html lang="es">
<head>
  ${commonHead}
  <title>Al Grano | Inglés con Emerson</title>
  <style>
    .content-wrapper { max-width: 900px; margin: 30px auto; padding: 0 20px 60px; }
    .intro-banner { background: linear-gradient(135deg, #1e293b, #0f172a); border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 30px; margin-bottom: 30px; text-align: center; }
    .intro-banner h1 { color: #ffd43b; font-size: 28px; font-weight: 800; margin-bottom: 12px; }
    .intro-banner p { color: #cbd5e1; font-size: 15px; max-width: 750px; margin: 0 auto; line-height: 1.6; }
    .section-title { font-size: 20px; font-weight: 800; color: white; margin: 30px 0 15px; border-left: 4px solid #ffd43b; padding-left: 10px; }
  </style>
</head>
<body>
  ${sharedNav}
  <main class="content-wrapper">
    <div class="intro-banner">
      <h1>🎯 Al Grano: Acciones Concretas</h1>
      <p>La manera de desbloquear el inglés sin pensar en una sola palabra, sino con acciones concretas y específicas para comunicarte de forma natural y directa en cualquier entorno real.</p>
    </div>

    <div class="section-title">Escenarios Prácticos (20 ítems c/u)</div>
    <div id="scenario-tabs" class="tab-bar"></div>
    <div id="actions-container" style="margin-bottom: 40px;"></div>

    <div class="section-title">Acciones Específicas de la Vida Diaria (20 ítems c/u)</div>
    <div id="accion-tabs" class="tab-bar"></div>
    <div id="acciones-container"></div>
  </main>
  ${sharedFooter} ${whatsappBtn}
  <script>
    var scenariosData = ${safeAprendeJson};
    var scKeys = Object.keys(scenariosData);
    var currentScenario = scKeys[0];

    function initAprende() {
      var tabsBox = document.getElementById('scenario-tabs');
      tabsBox.innerHTML = "";
      for (var i = 0; i < scKeys.length; i++) {
        var scName = scKeys[i];
        var btn = document.createElement('button');
        btn.className = "tab-btn" + (scName === currentScenario ? " active" : "");
        btn.innerText = scName;
        (function(name) { btn.onclick = function() { currentScenario = name; initAprende(); }; })(scName);
        tabsBox.appendChild(btn);
      }
      var container = document.getElementById('actions-container');
      container.innerHTML = "";
      var items = scenariosData[currentScenario] || [];
      for (var j = 0; j < items.length; j++) {
        var item = items[j];
        var card = document.createElement('div');
        card.className = "quiz-card";
        card.style.display = "flex"; card.style.justifyContent = "space-between"; card.style.alignItems = "center"; card.style.gap = "15px"; card.style.marginBottom = "12px";
        var safeIngles = String(item.ingles || '').replace(/'/g, "\\\\'");
        card.innerHTML = '<div><div style="font-size: 16px; font-weight: 800; color: #0f172a;">' + (j+1) + '. ' + item.ingles + '</div><div style="font-size: 14px; color: #2563eb; font-weight: 700; margin-top: 3px;">' + item.espanol + '</div></div><button class="btn" style="background: #f1f5f9; border: 1px solid #cbd5e1; padding: 8px 14px; font-size: 13px; color: #0f172a;" onclick="speak(\\'' + safeIngles + '\\')">🔊 Escuchar</button>';
        container.appendChild(card);
      }
    }

    var accionesData = ${safeAccionesJson};
    var acKeys = Object.keys(accionesData);
    var currentCat = acKeys[0];

    function initAcciones() {
      var tabsBox = document.getElementById('accion-tabs');
      tabsBox.innerHTML = "";
      for (var i = 0; i < acKeys.length; i++) {
        var cat = acKeys[i];
        var btn = document.createElement('button');
        btn.className = "tab-btn" + (cat === currentCat ? " active" : "");
        btn.innerText = cat;
        (function(c) { btn.onclick = function() { currentCat = c; initAcciones(); }; })(c);
        tabsBox.appendChild(btn);
      }
      var container = document.getElementById('acciones-container');
      container.innerHTML = "";
      var items = accionesData[currentCat] || [];
      for (var j = 0; j < items.length; j++) {
        var item = items[j];
        var card = document.createElement('div');
        card.className = "quiz-card";
        card.style.display = "flex"; card.style.justifyContent = "space-between"; card.style.alignItems = "center"; card.style.gap = "15px"; card.style.marginBottom = "12px";
        var safeInfinitive = String(item.infinitive).replace(/'/g, "\\\\'");
        card.innerHTML = '<div><div style="font-size: 17px; font-weight: 800; color: #0f172a;">' + (j+1) + '. ' + item.infinitive + '</div><div style="font-size: 14px; color: #2563eb; font-weight: 700; margin-top: 3px;">' + item.espanol + '</div><div style="font-size: 12px; color: #64748b; font-style: italic; margin-top: 4px;">Ejemplo: "' + item.ejemplo + '"</div></div><button class="btn" style="background: #f1f5f9; border: 1px solid #cbd5e1; padding: 8px 14px; font-size: 13px; color: #0f172a;" onclick="speak(\\'' + safeInfinitive + '\\')">🔊 Escuchar</button>';
        container.appendChild(card);
      }
    }

    initAprende();
    initAcciones();
  </script>
</body>
</html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }
if (url.pathname === "/ahorcado") {
        const htmlJuego = `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Ahorcado de Vocabulario - Real English</title>
            <style>
                :root {
                    --primary-color: #f6821f;
                    --bg-color: #0f172a;
                    --card-bg: #1e293b;
                    --text-color: #f8fafc;
                }
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background-color: var(--bg-color);
                    color: var(--text-color);
                    margin: 0;
                    padding: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                }
                .hangman-container {
                    background-color: var(--card-bg);
                    padding: 25px;
                    border-radius: 12px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.5);
                    max-width: 500px;
                    width: 100%;
                    text-align: center;
                    position: relative;
                }
                .back-btn {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    background-color: #334155;
                    color: #cbd5e1;
                    text-decoration: none;
                    padding: 6px 12px;
                    border-radius: 6px;
                    font-size: 0.8rem;
                    font-weight: bold;
                    transition: background 0.2s, color 0.2s;
                }
                .back-btn:hover { background-color: #475569; color: #ffffff; }
                h2 { margin-top: 10px; color: #ffd43b; font-size: 1.5rem; }
                .hangman-drawing { margin: 10px auto; width: 120px; height: 120px; }
                .hangman-part { stroke: #334155; stroke-width: 4; stroke-linecap: round; fill: none; transition: stroke 0.3s ease; }
                .hangman-part.visible { stroke: #ef4444; filter: drop-shadow(0 0 6px rgba(239, 68, 68, 0.5)); }
                .word-display { font-size: 2.2rem; letter-spacing: 10px; margin: 15px 0; font-weight: bold; color: #38bdf8; }
                .category { font-size: 0.95rem; color: #94a3b8; margin-bottom: 10px; }
                .examples-box { background-color: #0f172a; border: 1px solid #334155; border-radius: 8px; padding: 12px 15px; margin: 15px 0; text-align: left; font-size: 0.9rem; color: #cbd5e1; }
                .examples-box h4 { margin: 0 0 8px 0; color: #ffd43b; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 1px; }
                .examples-box p { margin: 6px 0; line-height: 1.4; }
                .audio-btn { background-color: #334155; color: white; border: none; padding: 8px 14px; border-radius: 6px; font-size: 0.85rem; cursor: pointer; margin-bottom: 15px; transition: opacity 0.2s; }
                .audio-btn:hover { opacity: 0.9; }
                .keyboard { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; margin-top: 15px; }
                .key-btn { background-color: #334155; color: #f8fafc; border: none; padding: 12px 0; font-size: 1rem; font-weight: bold; border-radius: 6px; cursor: pointer; transition: background 0.2s, transform 0.1s; }
                .key-btn:active { transform: scale(0.95); }
                .key-btn:disabled { background-color: #1e293b; color: #475569; cursor: not-allowed; border: 1px solid #334155; }
                .key-btn.correct { background-color: #22c55e; color: white; }
                .key-btn.wrong { background-color: #ef4444; color: white; }
                .message { margin-top: 15px; font-weight: bold; font-size: 1.05rem; }
            </style>
        </head>
        <body>
            <div class="hangman-container">
                <a href="/" class="back-btn">← Inicio</a>
                <h2>Ahorcado de Vocabulario</h2>
                <div class="category">Categoría: <span id="category-name">Vocabulario General</span></div>
                
                <svg class="hangman-drawing" viewBox="0 0 100 100">
                    <line x1="10" y1="90" x2="90" y2="90" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
                    <line x1="30" y1="90" x2="30" y2="10" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
                    <line x1="30" y1="10" x2="70" y2="10" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
                    <line x1="70" y1="10" x2="70" y2="20" stroke="#475569" stroke-width="3" stroke-linecap="round"/>
                    <circle id="part-1" class="hangman-part" cx="70" cy="30" r="8"/>
                    <line id="part-2" class="hangman-part" x1="70" y1="38" x2="70" y2="65"/>
                    <line id="part-3" class="hangman-part" x1="70" y1="45" x2="55" y2="55"/>
                    <line id="part-4" class="hangman-part" x1="70" y1="45" x2="85" y2="55"/>
                    <line id="part-5" class="hangman-part" x1="70" y1="65" x2="58" y2="82"/>
                    <line id="part-6" class="hangman-part" x1="70" y1="65" x2="82" y2="82"/>
                </svg>

                <div class="word-display" id="word-display">_ _ _ _ _</div>
                <button class="audio-btn" onclick="reproducirPronunciacion()">🔊 Escuchar Palabra</button>
                <div class="examples-box">
                    <h4>Ejemplos en contexto:</h4>
                    <p id="example-1">1. Cargando ejemplo...</p>
                    <p id="example-2">2. Cargando ejemplo...</p>
                </div>
                <div class="keyboard" id="keyboard"></div>
                <div class="message" id="game-message"></div>
            </div>
            <script>
                const wordsList = [
                    { id: 1001, word: "BREAKFAST", category: "Kitchen & Food", ex1: "I always eat ______ in the morning.", ex2: "She prepared a delicious ______ for us." },
                    { id: 1002, word: "DEVELOPER", category: "Tecnología", ex1: "He works as a software ______.", ex2: "Every ______ needs a reliable computer." },
                    { id: 1003, word: "CURIOUS", category: "Adjetivos", ex1: "The ______ cat explored the empty room.", ex2: "Children are naturally ______ about everything." },
                    { id: 1004, word: "CHALLENGE", category: "Avanzado", ex1: "Learning a new language is a great ______.", ex2: "We are ready to face any ______ together." },
                    { id: 1005, word: "COFFEE", category: "Daily Routine", ex1: "I drink a hot cup of ______ every day.", ex2: "Do you prefer tea or ______ in the afternoon?" },
                    { id: 1006, word: "SUCCESSFUL", category: "Adjetivos Avanzados", ex1: "He became a very ______ businessman.", ex2: "Hard work is the key to a ______ project." },
                    { id: 1007, word: "KITCHEN", category: "Objetos & Espacios", ex1: "The smell of baking came from the ______.", ex2: "We spend most of our mornings in the ______." },
                    { id: 1008, word: "ACCOMPLISH", category: "Verbos de Acción", ex1: "Set clear goals to ______ what you want.", ex2: "They managed to ______ their mission on time." },
                    { id: 1009, word: "MORNING", category: "Daily Routine", ex1: "Good ______! Did you sleep well?", ex2: "I like to exercise early in the ______." },
                    { id: 1010, word: "JOURNEY", category: "Vida & Viajes", ex1: "Learning English is an exciting ______.", ex2: "The ______ took longer than expected." },
                    { id: 1011, word: "FRIENDSHIP", category: "Relaciones", ex1: "True ______ lasts a lifetime.", ex2: "They built a strong ______ over the years." },
                    { id: 1012, word: "KNOWLEDGE", category: "Educación", ex1: "Reading books expands your ______.", ex2: "Sharing ______ helps everyone grow." },
                    { id: 1013, word: "EXPERIENCE", category: "Trabajo & Vida", ex1: "Work ______ is essential for this job.", ex2: "It was an unforgettable ______." },
                    { id: 1014, word: "CREATIVE", category: "Adjetivos", ex1: "She is a very ______ graphic designer.", ex2: "We need ______ solutions to solve this." },
                    { id: 1015, word: "IMPROVE", category: "Verbos de Acción", ex1: "Practice daily to ______ your pronunciation.", ex2: "He wants to ______ his English skills." },
                    { id: 1016, word: "UNDERSTAND", category: "Verbos Mentales", ex1: "Do you ______ this grammar rule?", ex2: "It takes time to ______ native expressions." },
                    { id: 1017, word: "CONFIDENT", category: "Adjetivos", ex1: "Speak English and feel ______.", ex2: "She is ______ about passing the test." },
                    { id: 1018, word: "PRACTICE", category: "Daily Routine", ex1: "Regular ______ makes fluent speakers.", ex2: "I need to ______ my listening skills." },
                    { id: 1019, word: "TOMORROW", category: "Tiempo", ex1: "We will have a new lesson ______.", ex2: "See you ______ morning!" },
                    { id: 1020, word: "YESTERDAY", category: "Tiempo", ex1: "What did you study ______?", ex2: "It rained heavily ______ afternoon." },
                    { id: 1021, word: "LANGUAGE", category: "Educación", ex1: "English is a global ______.", ex2: "Learning a new ______ opens doors." },
                    { id: 1022, word: "BEAUTIFUL", category: "Adjetivos", ex1: "What a ______ view from here!", ex2: "She has a ______ voice." },
                    { id: 1023, word: "IMPORTANT", category: "Adjetivos", ex1: "Consistency is ______ for success.", ex2: "This is an ______ announcement." },
                    { id: 1024, word: "DIFFICULT", category: "Adjetivos", ex1: "Don't give up when things get ______.", ex2: "That exam was quite ______." },
                    { id: 1025, word: "EXERCISE", category: "Rutina & Salud", ex1: "Complete every ______ on the platform.", ex2: "Physical ______ keeps you healthy." },
                    { id: 1026, word: "SOFTWARE", category: "Tecnología", ex1: "He develops custom ______ for clients.", ex2: "This ______ runs on Cloudflare." },
                    { id: 1027, word: "COMPUTER", category: "Tecnología", ex1: "My ______ is connected to high-speed internet.", ex2: "Turn off your ______ before leaving." },
                    { id: 1028, word: "INTERNET", category: "Tecnología", ex1: "The ______ connects the entire world.", ex2: "We need a stable ______ connection." },
                    { id: 1029, word: "WEBSITE", category: "Plataforma", ex1: "Lengua Real is an interactive ______.", ex2: "You can visit our ______ anytime." },
                    { id: 1030, word: "STUDENT", category: "Educación", ex1: "Every ______ can track their score.", ex2: "The ______ asked a great question." },
                    { id: 1031, word: "TEACHER", category: "Educación", ex1: "Emerson is your English ______.", ex2: "The ______ explained the grammar clearly." },
                    { id: 1032, word: "SCHEDULE", category: "Organización", ex1: "Check your daily study ______.", ex2: "We need to plan our weekly ______." },
                    { id: 1033, word: "DINNER", category: "Comida", ex1: "What are we having for ______?", ex2: "They cooked a lovely ______ together." },
                    { id: 1034, word: "FAMILY", category: "Relaciones", ex1: "Spend quality time with your ______.", ex2: "His ______ lives in Nevada." },
                    { id: 1035, word: "WEEKEND", category: "Tiempo", ex1: "Any plans for the ______?", ex2: "I love relaxing over the ______." },
                    { id: 1036, word: "DINING", category: "Casa", ex1: "We gather in the ______ room.", ex2: "The table is set in the ______ area." },
                    { id: 1037, word: "MORNING", category: "Rutina", ex1: "Fresh air in the ______ feels great.", ex2: "He drinks juice every ______." },
                    { id: 1038, word: "TRAVEL", category: "Aventura", ex1: "I love to ______ around the world.", ex2: "Their next ______ is to Europe." },
                    { id: 1039, word: "BUILDING", category: "Ciudad", ex1: "That tall ______ is our office.", ex2: "They are ______ a new website." },
                    { id: 1040, word: "LISTENING", category: "Habilidades", ex1: "Improve your ______ comprehension.", ex2: "Active ______ is a vital skill." },
                    { id: 1041, word: "SPEAKING", category: "Habilidades", ex1: "Practice ______ fluent English.", ex2: "Public ______ can be nervous." },
                    { id: 1042, word: "READING", category: "Habilidades", ex1: "______ books builds vocabulary.", ex2: "She enjoys ______ in silence." },
                    { id: 1043, word: "WRITING", category: "Habilidades", ex1: "Sentence ______ takes practice.", ex2: "Keep ______ your notes daily." },
                    { id: 1044, word: "BUSINESS", category: "Trabajo", ex1: "He runs a successful online ______.", ex2: "She travels for ______ meetings." },
                    { id: 1045, word: "SOLUTION", category: "Lógica", ex1: "We found a quick ______ to the bug.", ex2: "Every problem has a ______." },
                    { id: 1046, word: "VALUABLE", category: "Adjetivos", ex1: "Time is our most ______ asset.", ex2: "Thank you for your ______ advice." },
                    { id: 1047, word: "TOMORROW", category: "Tiempo", ex1: "______ is another opportunity.", ex2: "We finish the project ______." },
                    { id: 1048, word: "STORY", category: "Narrativa", ex1: "Tell me an interesting ______.", ex2: "Every word has a background ______." },
                    { id: 1049, word: "PICTURE", category: "Visual", ex1: "Take a nice ______ of the setup.", ex2: "That ______ brings good memories." },
                    { id: 1050, word: "PROJECT", category: "Trabajo", ex1: "This Cloudflare ______ is ready.", ex2: "We launched a new digital ______." },
                    { id: 1051, word: "MISSION", category: "Objetivos", ex1: "Our ______ is teaching real English.", ex2: "They completed their ______ safely." },
                    { id: 1052, word: "SUCCESS", category: "Logros", ex1: "Dedication leads to true ______.", ex2: "Celebrate every small ______." },
                    { id: 1053, word: "PROGRESS", category: "Evolución", ex1: "Check your learning ______ daily.", ex2: "You are making great ______." },
                    { id: 1054, word: "COMPLETE", category: "Acciones", ex1: "______ all exercises to earn points.", ex2: "The task is fully ______." },
                    { id: 1055, word: "FOCUSED", category: "Adjetivos", ex1: "Stay ______ during your studies.", ex2: "A ______ mind achieves goals." },
                    { id: 1056, word: "ACTIVE", category: "Adjetivos", ex1: "Keep your training ______.", ex2: "An ______ lifestyle is healthy." },
                    { id: 1057, word: "DYNAMIC", category: "Adjetivos", ex1: "This platform is very ______.", ex2: "We use ______ web elements." },
                    { id: 1058, word: "GLOBAL", category: "Conceptos", ex1: "Reach a ______ audience online.", ex2: "English is a ______ standard." },
                    { id: 1059, word: "REAL", category: "Marca", ex1: "Welcome to Lengua ______ studio.", ex2: "Learn authentic everyday English." },
                    { id: 1060, word: "STUDIO", category: "Espacio", ex1: "Welcome to our digital learning ______.", ex2: "He works from his home ______." }
                ];

                let currentItem = {};
                let selectedWord = "";
                let guessedLetters = [];
                let lives = 6;
                let gameFinished = false;

                function initGame() {
                    currentItem = wordsList[Math.floor(Math.random() * wordsList.length)];
                    selectedWord = currentItem.word;
                    guessedLetters = [];
                    lives = 6;
                    gameFinished = false;
                    
                    updateHangmanDrawing();
                    document.getElementById("category-name").textContent = currentItem.category;
                    document.getElementById("game-message").textContent = "";

                    updateExamplesDisplay();
                    updateWordDisplay();
                    createKeyboard();
                }

               function updateHangmanDrawing() {
                    for (let i = 1; i <= 6; i++) {
                        const part = document.getElementById('part-' + i);
                        if (part) part.classList.remove("visible");
                    }
                    const errors = 6 - lives;
                    for (let i = 1; i <= errors; i++) {
                        const part = document.getElementById('part-' + i);
                        if (part) part.classList.add("visible");
                    }
                }

                function updateExamplesDisplay() {
                    const hiddenBlanks = "_".repeat(selectedWord.length);
                    document.getElementById("example-1").textContent = "1. " + currentItem.ex1.replace(new RegExp(selectedWord, 'gi'), hiddenBlanks);
                    document.getElementById("example-2").textContent = "2. " + currentItem.ex2.replace(new RegExp(selectedWord, 'gi'), hiddenBlanks);
                }

                function updateWordDisplay() {
                    const displayString = selectedWord
                        .split("")
                        .map(letter => (guessedLetters.includes(letter) ? letter : "_"))
                        .join(" ");
                    document.getElementById("word-display").textContent = displayString;

                    if (!displayString.includes("_") && !gameFinished) {
                        gameFinished = true;
                        document.getElementById("example-1").textContent = "1. " + currentItem.ex1.replace(/_+/g, selectedWord);
                        document.getElementById("example-2").textContent = "2. " + currentItem.ex2.replace(/_+/g, selectedWord);

                        document.getElementById("game-message").textContent = "¡Excelente! Has ganado 🎉 (+10 PTS)";
                        document.getElementById("game-message").style.color = "#22c55e";
                        disableAllKeys();
                        registrarPuntajeJuego(currentItem.id);
                    }
                }

                function createKeyboard() {
                    const keyboardDiv = document.getElementById("keyboard");
                    keyboardDiv.innerHTML = "";
                    "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").forEach(letter => {
                        const button = document.createElement("button");
                        button.textContent = letter;
                        button.classList.add("key-btn");
                        button.onclick = () => handleGuess(letter, button);
                        keyboardDiv.appendChild(button);
                    });
                }

                function handleGuess(letter, button) {
                    if (gameFinished) return;
                    guessedLetters.push(letter);
                    button.disabled = true;

                    if (selectedWord.includes(letter)) {
                        button.classList.add("correct");
                        updateWordDisplay();
                    } else {
                        button.classList.add("wrong");
                        lives--;
                        updateHangmanDrawing();

                        if (lives <= 0) {
                            gameFinished = true;
                            document.getElementById("word-display").textContent = selectedWord.split("").join(" ");
                            document.getElementById("example-1").textContent = "1. " + currentItem.ex1.replace(/_+/g, selectedWord);
                            document.getElementById("example-2").textContent = "2. " + currentItem.ex2.replace(/_+/g, selectedWord);

                            document.getElementById("game-message").textContent = "¡Game Over! Inténtalo de nuevo ❌";
                            document.getElementById("game-message").style.color = "#ef4444";
                            disableAllKeys();
                            setTimeout(initGame, 4000);
                        }
                    }
                }

                async function registrarPuntajeJuego(exerciseId) {
                    try {
                        const response = await fetch('/api/complete-exercise', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ exercise_id: exerciseId })
                        });
                        const data = await response.json();
                        if (data.success && data.total_points !== undefined) {
                            if(document.getElementById('global-score')) {
                                document.getElementById('global-score').innerText = data.total_points;
                            }
                        }
                    } catch (err) {
                        console.error("Error al registrar puntaje del juego:", err);
                    }

                    setTimeout(initGame, 4000);
                }

                function disableAllKeys() {
                    const buttons = document.querySelectorAll(".key-btn");
                    buttons.forEach(btn => btn.disabled = true);
                }

                function reproducirPronunciacion() {
                    if ('speechSynthesis' in window) {
                        window.speechSynthesis.cancel();
                        const utterance = new SpeechSynthesisUtterance(selectedWord);
                        utterance.lang = "en-US";
                        utterance.rate = 0.85;
                        window.speechSynthesis.speak(utterance);
                    } else {
                        alert("La síntesis de voz no es compatible con este navegador.");
                    }
                }

                window.onload = initGame;
            </script>
        </body>
        </html>`;

        return new Response(htmlJuego, {
            headers: { 'Content-Type': 'text/html;charset=UTF-8' }
        });
    }
if (url.pathname === "/millonario") {
        const htmlMillonario = `<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>¿Quién quiere ser millonario? - Real English Studio</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;800;900&display=swap');
                body { 
                    font-family: 'Montserrat', sans-serif; 
                    background: radial-gradient(circle at center, #090d1a 0%, #020408 100%);
                    color: #f8fafc;
                }
                .tv-panel {
                    background: linear-gradient(135deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98));
                    border: 3px solid #eab308;
                    box-shadow: 0 0 30px rgba(234, 179, 8, 0.25), inset 0 0 20px rgba(234, 179, 8, 0.1);
                }
                .question-panel {
                    background: radial-gradient(circle, rgba(15, 23, 42, 0.98) 0%, rgba(5, 10, 25, 0.98) 100%);
                    border: 2px solid #facc15;
                    box-shadow: 0 0 20px rgba(250, 204, 21, 0.25);
                }
                .option-btn {
                    background: linear-gradient(90deg, #1e293b 0%, #0f172a 100%);
                    border: 2px solid #3b82f6;
                    color: #ffffff;
                    box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
                    transition: all 0.2s ease;
                }
                .option-btn:hover {
                    background: linear-gradient(90deg, #1d4ed8 0%, #1e40af 100%);
                    border-color: #60a5fa;
                    box-shadow: 0 0 20px rgba(96, 165, 250, 0.6);
                    transform: translateY(-2px);
                }
                .comodin-btn {
                    background: linear-gradient(135deg, #2563eb, #1d4ed8);
                    color: #ffffff;
                    border: 2px solid #60a5fa;
                    font-weight: 900;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
                    box-shadow: 0 0 12px rgba(37, 99, 235, 0.6);
                }
                .comodin-ai {
                    background: linear-gradient(135deg, #7c3aed, #6d28d9);
                    color: #ffffff;
                    border: 2px solid #c084fc;
                    font-weight: 900;
                    text-shadow: 0 1px 2px rgba(0,0,0,0.5);
                    box-shadow: 0 0 12px rgba(124, 58, 237, 0.6);
                }
                .back-btn {
                    position: absolute;
                    top: 20px;
                    left: 20px;
                    background-color: #1e293b;
                    color: #cbd5e1;
                    border: 1px solid #475569;
                    text-decoration: none;
                    padding: 8px 14px;
                    border-radius: 8px;
                    font-size: 0.85rem;
                    font-weight: bold;
                    transition: all 0.2s;
                }
                .back-btn:hover { background-color: #334155; color: #ffffff; border-color: #64748b; }
            </style>
        </head>
        <body class="text-white min-h-screen flex flex-col justify-between p-4 select-none relative">
            <a href="/" class="back-btn">← Inicio</a>

            <header class="text-center py-4 mt-6">
                <h1 class="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 tracking-wider drop-shadow-[0_0_15px_rgba(234,179,8,0.6)]">
                    ¿QUIÉN QUIERE SER MILLONARIO?
                </h1>
                <p class="text-blue-400 text-xs md:text-sm tracking-[0.25em] uppercase font-bold mt-1">Real English • ENGLISH ACADEMY</p>
            </header>

            <main class="max-w-2xl w-full mx-auto tv-panel rounded-3xl p-5 md:p-8 my-auto shadow-2xl">
                <div class="flex flex-wrap justify-between items-center mb-5 bg-slate-950/90 p-4 rounded-2xl border border-slate-800 gap-3">
                    <div class="flex gap-3">
                        <button onclick="useFiftyFifty()" id="btn-5050" class="comodin-btn text-xs px-4 py-2.5 rounded-xl transition hover:scale-105">50:50</button>
                        <button onclick="useAIHelp()" id="btn-ai" class="comodin-ai text-xs px-4 py-2.5 rounded-xl transition hover:scale-105">💡 Pista AI</button>
                    </div>
                    
                    <div class="text-center">
                        <span id="level-indicator" class="text-yellow-400 font-bold text-xs block">PREGUNTA 1 DE 5</span>
                        <span id="timer-text" class="text-red-400 font-mono text-sm font-black">⏱️ 30s</span>
                    </div>

                    <div class="text-right">
                        <span class="text-[10px] text-slate-400 block tracking-wider font-bold">PREMIO</span>
                        <span id="prize-indicator" class="text-yellow-400 font-black text-lg md:text-xl drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]">$100</span>
                    </div>
                </div>

                <div class="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800 mb-6">
                    <div id="timer-bar" class="bg-gradient-to-r from-yellow-400 to-red-500 h-full w-full transition-all duration-1000 shadow-[0_0_10px_rgba(234,179,8,0.8)]"></div>
                </div>

                <div class="question-panel mb-6 p-5 md:p-6 rounded-2xl text-center min-h-[110px] flex items-center justify-center">
                    <h2 id="question-text" class="text-base md:text-xl font-extrabold text-yellow-100 leading-snug tracking-wide drop-shadow-md">
                        Cargando pregunta...
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button onclick="checkAnswer(0)" id="opt-0" class="option-btn p-4 rounded-2xl text-left font-bold text-sm md:text-base flex items-center gap-3">
                        <span class="bg-yellow-500 text-slate-950 px-2.5 py-1 rounded-lg font-black text-xs shadow-[0_0_8px_rgba(234,179,8,0.8)]">A</span> 
                        <span id="text-opt-0" class="text-slate-100 tracking-wide font-semibold">...</span>
                    </button>
                    <button onclick="checkAnswer(1)" id="opt-1" class="option-btn p-4 rounded-2xl text-left font-bold text-sm md:text-base flex items-center gap-3">
                        <span class="bg-yellow-500 text-slate-950 px-2.5 py-1 rounded-lg font-black text-xs shadow-[0_0_8px_rgba(234,179,8,0.8)]">B</span> 
                        <span id="text-opt-1" class="text-slate-100 tracking-wide font-semibold">...</span>
                    </button>
                    <button onclick="checkAnswer(2)" id="opt-2" class="option-btn p-4 rounded-2xl text-left font-bold text-sm md:text-base flex items-center gap-3">
                        <span class="bg-yellow-500 text-slate-950 px-2.5 py-1 rounded-lg font-black text-xs shadow-[0_0_8px_rgba(234,179,8,0.8)]">C</span> 
                        <span id="text-opt-2" class="text-slate-100 tracking-wide font-semibold">...</span>
                    </button>
                    <button onclick="checkAnswer(3)" id="opt-3" class="option-btn p-4 rounded-2xl text-left font-bold text-sm md:text-base flex items-center gap-3">
                        <span class="bg-yellow-500 text-slate-950 px-2.5 py-1 rounded-lg font-black text-xs shadow-[0_0_8px_rgba(234,179,8,0.8)]">D</span> 
                        <span id="text-opt-3" class="text-slate-100 tracking-wide font-semibold">...</span>
                    </button>
                </div>

                <div id="game-over-screen" class="hidden text-center py-10">
                    <div id="game-icon" class="text-6xl mb-3 animate-bounce">🏆</div>
                    <h3 id="game-message" class="text-2xl md:text-3xl font-black mb-2 text-yellow-400 drop-shadow-[0_0_12px_rgba(234,179,8,0.8)]">¡JUEGO TERMINADO!</h3>
                    <p id="final-score" class="text-slate-200 text-sm md:text-base mb-6 font-semibold">Acumulaste: $0</p>
                    <button onclick="restartGame()" class="bg-gradient-to-r from-yellow-400 to-amber-600 text-slate-950 font-black px-8 py-3.5 rounded-xl shadow-[0_0_20px_rgba(234,179,8,0.6)] text-sm">VOLVER A JUGAR</button>
                </div>
            </main>

            <footer class="text-center text-slate-500 text-xs py-3 tracking-widest font-bold">
                Real English CLOUDFLARE PLATFORM
            </footer>

            <script>
                const questions = [
                    { question: "What is the past participle of the verb 'to write'?", options: ["Writed", "Wrote", "Written", "Writing"], correct: 2, prize: "$100" },
                    { question: "Choose the correct phrase for 'Tener prisa' in English:", options: ["To be in a hurry", "To have hurry", "To make quick", "To run fast"], correct: 0, prize: "$500" },
                    { question: "Which option is a modal verb used for obligation?", options: ["Might", "Could", "Must", "Would"], correct: 2, prize: "$1,000" },
                    { question: "What does the expression 'Piece of cake' mean?", options: ["Un trozo de pastel", "Algo muy fácil de hacer", "Una fiesta de cumpleaños", "Tener hambre"], correct: 1, prize: "$5,000" },
                    { question: "Identify the correct Third Conditional structure:", options: ["If I knew, I would go.", "If I had known, I would have gone.", "If I would know, I had went.", "If I know, I will go."], correct: 1, prize: "$1,000,000" }
                ];

                let currentQuestionIndex = 0, score = "$0", timer, timeLeft = 30, fiftyUsed = false;
                const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
                
                function playTone(freq, type, duration) {
                    if (audioCtx.state === 'suspended') audioCtx.resume();
                    let osc = audioCtx.createOscillator(), gain = audioCtx.createGain();
                    osc.type = type; osc.frequency.value = freq;
                    osc.connect(gain); gain.connect(audioCtx.destination);
                    osc.start();
                    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.00001, audioCtx.currentTime + duration);
                    osc.stop(audioCtx.currentTime + duration);
                }

                function soundCorrect() {
                    playTone(523.25, 'sine', 0.12);
                    setTimeout(() => playTone(659.25, 'sine', 0.12), 100);
                    setTimeout(() => playTone(783.99, 'sine', 0.25), 200);
                }

                function soundWrong() {
                    playTone(150, 'sawtooth', 0.2);
                    setTimeout(() => playTone(100, 'sawtooth', 0.3), 150);
                }

                function startTimer() {
                    clearInterval(timer);
                    timeLeft = 30;
                    updateTimerDisplay();
                    timer = setInterval(() => {
                        timeLeft--;
                        updateTimerDisplay();
                        if (timeLeft <= 0) { clearInterval(timer); endGame(false); }
                    }, 1000);
                }

                function updateTimerDisplay() {
                    document.getElementById("timer-text").innerText = \`⏱️ \${timeLeft}s\`;
                    document.getElementById("timer-bar").style.width = \`\${(timeLeft / 30) * 100}%\`;
                }

                function loadQuestion() {
                    const currentQ = questions[currentQuestionIndex];
                    document.getElementById("level-indicator").innerText = \`PREGUNTA \${currentQuestionIndex + 1} DE \${questions.length}\`;
                    document.getElementById("prize-indicator").innerText = currentQ.prize;
                    document.getElementById("question-text").innerText = currentQ.question;

                    for (let i = 0; i < 4; i++) {
                        const btn = document.getElementById(\`opt-\${i}\`);
                        document.getElementById(\`text-opt-\${i}\`).innerText = currentQ.options[i];
                        btn.classList.remove('hidden');
                        btn.style.background = "";
                        btn.style.borderColor = "#3b82f6";
                        btn.style.boxShadow = "0 4px 15px rgba(59, 130, 246, 0.3)";
                        btn.disabled = false;
                    }
                    startTimer();
                }

                function checkAnswer(selectedIndex) {
                    clearInterval(timer);
                    const currentQ = questions[currentQuestionIndex];
                    for (let i = 0; i < 4; i++) document.getElementById(\`opt-\${i}\`).disabled = true;
                    const selectedBtn = document.getElementById(\`opt-\${selectedIndex}\`);

                    if (selectedIndex === currentQ.correct) {
                        soundCorrect();
                        selectedBtn.style.background = "linear-gradient(90deg, #166534 0%, #14532d 100%)";
                        selectedBtn.style.borderColor = "#4ade80";
                        selectedBtn.style.boxShadow = "0 0 25px rgba(74, 222, 128, 0.9)";
                        score = currentQ.prize;

                        setTimeout(() => {
                            currentQuestionIndex++;
                            if (currentQuestionIndex < questions.length) loadQuestion();
                            else endGame(true);
                        }, 1500);
                    } else {
                        soundWrong();
                        selectedBtn.style.background = "linear-gradient(90deg, #991b1b 0%, #7f1d1d 100%)";
                        selectedBtn.style.borderColor = "#f87171";
                        selectedBtn.style.boxShadow = "0 0 25px rgba(248, 113, 113, 0.9)";
                        const correctBtn = document.getElementById(\`opt-\${currentQ.correct}\`);
                        correctBtn.style.background = "linear-gradient(90deg, #166534 0%, #14532d 100%)";
                        correctBtn.style.borderColor = "#4ade80";
                        correctBtn.style.boxShadow = "0 0 25px rgba(74, 222, 128, 0.9)";
                        setTimeout(() => endGame(false), 2000);
                    }
                }

                function useFiftyFifty() {
                    if (fiftyUsed) return;
                    fiftyUsed = true;
                    document.getElementById("btn-5050").classList.add("opacity-40", "cursor-not-allowed");
                    const currentQ = questions[currentQuestionIndex];
                    let hiddenCount = 0;
                    for (let i = 0; i < 4; i++) {
                        if (i !== currentQ.correct && hiddenCount < 2) {
                            document.getElementById(\`opt-\${i}\`).classList.add('hidden');
                            hiddenCount++;
                        }
                    }
                    playTone(400, 'sine', 0.15);
                }

                function useAIHelp() {
                    const btnAI = document.getElementById("btn-ai");
                    btnAI.disabled = true;
                    btnAI.classList.add("opacity-40");
                    alert(\`🤖 Real English AI: "¡Analiza la estructura gramatical con cuidado! Una de las opciones descartadas era un distractor evidente."\`);
                }

                function endGame(won) {
                    clearInterval(timer);
                    document.querySelector("main > div:nth-child(1)").classList.add("hidden");
                    document.querySelector("main > div:nth-child(2)").classList.add("hidden");
                    document.getElementById("question-text").parentElement.classList.add("hidden");
                    document.querySelector(".grid").classList.add("hidden");
                    const screen = document.getElementById("game-over-screen");
                    screen.classList.remove("hidden");

                    if (won) {
                        document.getElementById("game-icon").innerText = "🏆✨";
                        document.getElementById("game-message").innerText = "¡INCREÍBLE! ¡ERES MILLONARIO!";
                        document.getElementById("final-score").innerText = \`Te llevas el premio máximo: \${score}\`;
                    } else {
                        document.getElementById("game-icon").innerText = "💡⚡";
                        document.getElementById("game-message").innerText = "¡BUEN INTENTO!";
                        document.getElementById("final-score").innerText = \`Te retiraste con: \${score}\`;
                    }
                }

                function restartGame() {
                    currentQuestionIndex = 0; score = "$0"; fiftyUsed = false;
                    document.getElementById("btn-5050").classList.remove("opacity-40", "cursor-not-allowed");
                    document.getElementById("btn-ai").disabled = false;
                    document.getElementById("btn-ai").classList.remove("opacity-40");
                    document.querySelector("main > div:nth-child(1)").classList.remove("hidden");
                    document.querySelector("main > div:nth-child(2)").classList.remove("hidden");
                    document.getElementById("question-text").parentElement.classList.remove("hidden");
                    document.querySelector(".grid").classList.remove("hidden");
                    document.getElementById("game-over-screen").classList.add("hidden");
                    loadQuestion();
                }

                window.onload = loadQuestion;
            </script>
        </body>
        </html>`;

        return new Response(htmlMillonario, {
            headers: { 'Content-Type': 'text/html;charset=UTF-8' }
        });
    }
    if (url.pathname === "/aprende/juegos") {
      const safeJuegosJson = JSON.stringify(DATA_JUEGOS);
      return new Response(`<!DOCTYPE html>
<html lang="es">
<head>
  ${commonHead}
  <title>Juega + | Inglés con Emerson</title>
  <style>
    .game-wrapper { max-width: 700px; margin: 15px auto; padding: 0 10px 40px; }
    .game-header-bar { display: flex; justify-content: space-between; background: #1e293b; color: white; padding: 8px 12px; border-radius: 6px; margin-bottom: 10px; font-weight: 800; font-size: 13px; }
    .drop-zone-grid-3x3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-bottom: 10px; }
    .drop-box { background: #ffffff; border: 2px dashed #94a3b8; border-radius: 8px; padding: 8px 4px; text-align: center; min-height: 85px; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #172033; }
    .drop-box.highlight { background: #eff6ff; border-color: #2563eb; }
    .drag-pool-grid-3x3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; background: #0f172a; padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.1); }
    .drag-item { background: #2563eb; color: white; padding: 8px 6px; border-radius: 6px; font-weight: 800; cursor: grab; font-size: 11px; text-align: center; user-select: none; }
    .wordwall-container { background: #111827; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; text-align: center; }
  </style>
</head>
<body>
  ${sharedNav}
  <main class="game-wrapper">
    <div style="text-align: center; margin-bottom: 10px;">
      <span style="font-size: 10px; font-weight: 800; color: #2563eb; text-transform: uppercase;">Juega + Arcade & Interactivos</span>
      <h1 style="font-size: 22px; font-weight: 800; margin-top: 2px; color: #ffffff;">Zona de Juegos y Práctica</h1>
    </div>
    
    <div id="category-tabs" class="tab-bar"></div>

    <div id="arcade-view">
      <div class="game-header-bar">
        <div>⭐ Puntos: <span id="game-score" style="color: #ffd43b;">0</span></div>
        <div>🔥 Seguidos: <span id="game-streak" style="color: #f97316;">0</span></div>
      </div>
      <div class="drop-zone-grid-3x3" id="drop-grid"></div>
      <div class="drag-pool-grid-3x3" id="words-pool"></div>
      <div id="game-message" style="text-align: center; margin-top: 10px; font-weight: 800; font-size: 13px; min-height: 18px;"></div>
      <div id="next-container" style="text-align: center; margin-top: 15px; display: none;">
        <button class="btn btn-cta" onclick="loadNextCategory()">Siguiente Reto ➔</button>
      </div>
    </div>

    <div id="wordwall-view" style="display: none;" class="wordwall-container">
      <div style="padding: 40px 20px; text-align: center;">
        <div style="font-size: 40px; margin-bottom: 15px;">🧩</div>
        <h3 style="color: #ffd43b; font-size: 22px; font-weight: 800; margin-bottom: 10px;">Reto Interactivo de Completar</h3>
        <p style="color: #cbd5e1; font-size: 14px; max-width: 500px; margin: 0 auto 25px;">Pon a prueba tu agilidad mental y completa los espacios en blanco con este juego interactivo exclusivo.</p>
        <a href="https://wordwall.net/es/resource/119256861?wwmethod=link" class="btn btn-cta" target="_blank" style="font-size: 16px; padding: 14px 30px; display: inline-block;">Abrir Reto en Wordwall ➔</a>
      </div>
    </div>

  </main>
  ${sharedFooter} ${whatsappBtn}
  <script>
    var juegosData = ${safeJuegosJson};
    var categories = Object.keys(juegosData);
    categories.push("Wordwall (Completar)");

    var currentCatIndex = 0;
    var currentCategoryName = categories[0];
    var score = 0; var streak = 0; var matchedCount = 0;

    function initGameApp() { renderTabs(); loadCategory(currentCategoryName); }

    function renderTabs() {
      var tabsBox = document.getElementById('category-tabs');
      tabsBox.innerHTML = "";
      for (var i = 0; i < categories.length; i++) {
        var cat = categories[i];
        var btn = document.createElement('button');
        btn.className = "tab-btn" + (cat === currentCategoryName ? " active" : "");
        btn.innerText = cat;
        (function(cName, idx) {
          btn.onclick = function() {
            currentCatIndex = idx; currentCategoryName = cName;
            renderTabs();
            loadCategory(currentCategoryName);
          };
        })(cat, i);
        tabsBox.appendChild(btn);
      }
    }

    function loadCategory(catName) {
      currentCategoryName = catName;
      var arcadeView = document.getElementById('arcade-view');
      var wordwallView = document.getElementById('wordwall-view');

      if (catName === "Wordwall (Completar)") {
        arcadeView.style.display = "none";
        wordwallView.style.display = "block";
        return;
      }

      arcadeView.style.display = "block";
      wordwallView.style.display = "none";
      matchedCount = 0;
      document.getElementById('game-message').innerText = "";
      document.getElementById('next-container').style.display = "none";

      var items = juegosData[catName];
      var dropGrid = document.getElementById('drop-grid');
      dropGrid.innerHTML = "";
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var box = document.createElement('div');
        box.className = "drop-box";
        box.setAttribute("ondragover", "allowDrop(event)");
        box.setAttribute("ondragleave", "removeHighlight(event)");
        box.setAttribute("ondrop", "dropItem(event, '" + item.key + "')");
        box.innerHTML = '<div style="font-size: 26px; margin-bottom: 2px;">' + item.emoji + '</div>' +
                        '<span style="font-size: 10px; font-weight: 800; color: #475569;">' + item.espanol + '</span>';
        dropGrid.appendChild(box);
      }
      var shuffled = items.slice().sort(function() { return Math.random() - 0.5; });
      var poolGrid = document.getElementById('words-pool');
      poolGrid.innerHTML = "";
      for (var j = 0; j < shuffled.length; j++) {
        var sItem = shuffled[j];
        var dItem = document.createElement('div');
        dItem.className = "drag-item";
        dItem.setAttribute("draggable", "true");
        dItem.setAttribute("ondragstart", "drag(event)");
        dItem.id = "drag-" + j;
        dItem.setAttribute("data-word", sItem.key);
        dItem.innerText = sItem.ingles;
        poolGrid.appendChild(dItem);
      }
    }

    function allowDrop(ev) { ev.preventDefault(); ev.currentTarget.classList.add('highlight'); }
    function removeHighlight(ev) { ev.currentTarget.classList.remove('highlight'); }
    function drag(ev) { ev.dataTransfer.setData("text", ev.target.id); ev.dataTransfer.setData("word", ev.target.getAttribute("data-word")); }
    function dropItem(ev, targetKey) {
      ev.preventDefault(); ev.currentTarget.classList.remove('highlight');
      var wordId = ev.dataTransfer.getData("text");
      var wordValue = ev.dataTransfer.getData("word");
      var draggedElement = document.getElementById(wordId);
      var msgBox = document.getElementById('game-message');
      if (wordValue === targetKey) {
        ev.currentTarget.appendChild(draggedElement);
        draggedElement.setAttribute("draggable", "false");
        draggedElement.style.background = "#16a34a";
        score += 10; streak += 1; matchedCount++;
        document.getElementById('game-score').innerText = score;
        document.getElementById('game-streak').innerText = streak;
        speak(draggedElement.innerText);
        msgBox.style.color = "#4ade80"; msgBox.innerText = "🎉 ¡Correcto!";
        if (matchedCount === juegosData[currentCategoryName].length) {
          msgBox.innerText = "🏆 ¡Categoría completada!";
          document.getElementById('next-container').style.display = "block";
        }
      } else {
        streak = 0; document.getElementById('game-streak').innerText = streak;
        msgBox.style.color = "#f87171"; msgBox.innerText = "❌ Inténtalo de nuevo.";
      }
    }

    function loadNextCategory() {
      currentCatIndex = (currentCatIndex + 1) % categories.length;
      currentCategoryName = categories[currentCatIndex];
      renderTabs(); loadCategory(currentCategoryName);
    }

    initGameApp();
  </script>
</body>
</html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    if (url.pathname === "/ejercicios") {
      const cookieHeader = request.headers.get("Cookie") || "";
      if (!cookieHeader.includes("user_id=")) return Response.redirect(url.origin + "/login", 302);

      // Obtener el puntaje inicial desde la base de datos D1
      let initialScore = 0;
      try {
        const matchUser = cookieHeader.match(/user_id=(\d+)/);
        if (matchUser) {
          const userId = parseInt(matchUser[1]);
          const resScore = await env.DB.prepare(
            "SELECT COUNT(DISTINCT exercise_id) as total FROM student_progress WHERE user_id = ?"
          ).bind(userId).first();
          initialScore = (resScore ? resScore.total : 0) * 10;
        }
      } catch (err) {
        console.error("Error al obtener puntaje inicial:", err);
      }

      const safeEjJsonString = JSON.stringify(MASSIVE_EJERCICIOS);
      return new Response(`<!DOCTYPE html>
<html lang="es">
<head>
  ${commonHead}
  <title>Centro de Ejercicios Masivos | Inglés con Emerson</title>
</head>
<body>
  ${sharedNav}
    <main style="max-width: 900px; margin: 40px auto; padding: 0 20px 60px;">
        
        <!-- BANNER DEL JUEGO DEL AHORCADO -->
        <div style="background: linear-gradient(135deg, #1e293b, #0f172a); border: 2px solid #f6821f; border-radius: 12px; padding: 20px; margin-bottom: 25px; box-shadow: 0 4px 15px rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 15px;">
            <div style="flex: 1; min-width: 250px; text-align: left;">
                <span style="background-color: #f6821f; color: #fff; font-size: 0.75rem; font-weight: bold; padding: 4px 8px; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px;">Nuevo Juego</span>
                <h3 style="color: #ffd43b; margin: 8px 0 5px 0; font-size: 1.3rem;">Ahorcado de Vocabulario en Inglés</h3>
                <p style="color: #cbd5e1; font-size: 0.9rem; margin: 0; line-height: 1.4;">Pon a prueba tu mente con pronunciación nativa, adivina las palabras clave y descubre oraciones en contexto real sumando puntos.</p>
            </div>
            <div>
                <a href="/ahorcado" style="background-color: #f6821f; color: #ffffff; text-decoration: none; padding: 10px 20px; border-radius: 8px; font-weight: bold; font-size: 0.95rem; box-shadow: 0 2px 8px rgba(246, 130, 31, 0.4); display: inline-block;">Jugar Ahora 🕹️</a>
            </div>
        </div>

        <!-- ENCABEZADO Y CENTRO DE ENTRENAMIENTO -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 15px;">

  <main style="max-width: 900px; margin: 40px auto; padding: 0 20px 60px;">
<!-- ENCABEZADO Y CENTRO DE ENTRENAMIENTO -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 10px; background: #1e293b; padding: 16px 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08);">
      <div>
        <span style="font-size: 11px; font-weight: 800; color: #2563eb; text-transform: uppercase;">Entrenamiento Activo</span>
        <h2 style="font-size: 24px; color: #ffffff; margin-top: 2px;">Centro de Escritura y Traducción</h2>
      </div>
      <button class="btn btn-primary" onclick="location.reload()" style="font-size: 12px; padding: 8px 14px;">🔄 Reiniciar</button>
    </div>

    <!-- BANNER DE SCORE DESTACADO DE ALTO IMPACTO -->
    <div style="background: linear-gradient(135deg, #1e293b, #0f172a); border: 2px solid rgba(255, 212, 59, 0.3); border-radius: 16px; padding: 20px; margin-bottom: 25px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.3);">
      <div style="font-size: 12px; font-weight: 800; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 4px;">🎮 Tu Score Actual</div>
      <div style="font-size: 38px; font-weight: 900; color: #ffd43b; text-shadow: 0 2px 10px rgba(255,212,59,0.2);">
        <span id="global-score">${initialScore}</span> <span style="font-size: 20px; color: #f8fafc;">PTS</span>
      </div>
      <div style="font-size: 13px; color: #4ade80; font-weight: 700; margin-top: 4px;">¡Sigue sumando y dominando el inglés real!</div>
    </div>
    <div id="tabs-container" class="tab-bar"></div>
    <div id="quiz-container"></div>
  </main>
  ${sharedFooter} ${whatsappBtn}
  <script>  

  function normalizeText(text) {
    return String(text)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z]/g, "");
}

async function checkUserAnswer(index, exerciseId, correctStr) {
    var rawInput = document.getElementById('ans-' + index).value;

    // Normalizamos para ignorar espacios, signos, apóstrofes, etc.
    var inputval = normalizeText(rawInput);

    var feedbackBox = document.getElementById('feedback-' + index);

    if (!inputval) { 
        feedbackBox.style.display = "block"; 
        feedbackBox.style.background = "#f87171"; 
        feedbackBox.innerText = "⚠️ Escribe una traducción."; 
        return; 
    }

    // Normalizamos también la respuesta correcta
    var cleancorrect = normalizeText(correctStr);

    // Comparamos solamente las letras
    var similarity = calculateSimilarity(inputval, cleancorrect);
    var percentage = Math.round(similarity * 100);

    feedbackBox.style.display = "block";

    if (percentage === 100) { 
        feedbackBox.style.background = "#4ade80"; 
        feedbackBox.innerText = "🎉 ¡Perfecto! 100%.";

        try {
            var response = await fetch('/api/complete-exercise', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ exercise_id: exerciseId })
            });

            var data = await response.json();

            if (data.success) {
                // Actualizar puntaje en tiempo real en la barra superior
                if (data.total_points !== undefined) {
                    document.getElementById('global-score').innerText = data.total_points;
                }
            }

            if (data.success && data.phase_completed) {
                feedbackBox.innerText = "🎉 ¡Perfecto! ¡FASE " + data.phase + " COMPLETADA!";
            }

        } catch (err) {
            console.error("Error al sincronizar con D1:", err);
        }

    } else if (percentage >= 70) { 
        feedbackBox.style.background = "#60a5fa"; 
        feedbackBox.innerText = "🤔 ¡Muy cerca! (" + percentage + "%)."; 

    } else { 
        feedbackBox.style.background = "#f87171"; 
        feedbackBox.innerText = "❌ Repasa (" + percentage + "%)."; 
    }
}
    function calculateSimilarity(s1, s2) {
      var longer = s1; var shorter = s2;
      if (s1.length < s2.length) { longer = s2; shorter = s1; }
      var longerLength = longer.length;
      if (longerLength === 0) return 1.0;
      return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
    }
    function editDistance(s1, s2) {
      s1 = s1.toLowerCase(); s2 = s2.toLowerCase();
      var costs = new Array();
      for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
          if (i === 0) { costs[j] = j; }
          else {
            if (j > 0) {
              var newValue = costs[j - 1];
              if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
                newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
              }
              costs[j - 1] = lastValue; lastValue = newValue;
            }
          }
        }
        if (i > 0) costs[s2.length] = lastValue;
      }
      return costs[s2.length];
    }

    var ejData = ${safeEjJsonString};
    var currentActivePhase = 1;

 var ejData = ${safeEjJsonString};
    var currentActivePhase = 1;
    var currentBlockSize = 20; // Agruparemos de 20 en 20 para que sean 3 bloques limpios (1-20, 21-40, 41-60)

    function initExercises() {
      var tabsBox = document.getElementById('tabs-container');
      if (!ejData || !ejData.length) return;
      
      var totalFases = Math.ceil(ejData.length / 10);
      
      tabsBox.innerHTML = "";
      
      // Botón "Todos"
      var btnTodos = document.createElement('button');
      btnTodos.className = "tab-btn" + (currentActivePhase === "Todos" ? " active" : "");
      btnTodos.innerText = "⭐ Todos";
      btnTodos.onclick = function() {
        currentActivePhase = "Todos";
        updateActiveTabStyles();
        renderExercises(ejData);
      };
      tabsBox.appendChild(btnTodos);

      // Creamos un menú secundario para cambiar de Bloque de Fases (Ej. Fases 1-20, 21-40, 41-60)
      var totalBlocks = Math.ceil(totalFases / 5); // Bloques de 5 fases (50 ejercicios por bloque)
      
      for (var b = 0; b < totalBlocks; b++) {
        var startF = b * 5 + 1;
        var endF = Math.min((b + 1) * 5, totalFases);
        var blockBtn = document.createElement('button');
        blockBtn.className = "tab-btn block-range-btn";
        blockBtn.innerText = "Fases " + startF + " al " + endF;
        
        // Asignamos evento para mostrar este rango específico de fases
        (function(s, e) {
          blockBtn.onclick = function() {
            renderPhaseButtonsRange(s, e);
          };
        })(startF, endF);
        
        tabsBox.appendChild(blockBtn);
      }
      
      // Por defecto iniciamos mostrando el primer bloque (Fases 1 al 5)
      renderPhaseButtonsRange(1, 5);
      filterPhase(1);
    }

    // Función para renderizar dinámicamente solo los botones de las fases del bloque seleccionado
    function renderPhaseButtonsRange(startPhase, endPhase) {
      // Remover selección previa de bloques
      var blockBtns = document.querySelectorAll('.block-range-btn');
      for (var i = 0; i < blockBtns.length; i++) {
        blockBtns[i].style.background = "#ffffff";
        blockBtns[i].style.color = "#172033";
      }
      event.currentTarget.style.background = "#2563eb";
      event.currentTarget.style.color = "#ffffff";

      // Buscamos o creamos un contenedor exclusivo para los botones de fases individuales
      var subTabsContainer = document.getElementById('sub-phases-container');
      if (!subTabsContainer) {
        subTabsContainer = document.createElement('div');
        subTabsContainer.id = 'sub-phases-container';
        subTabsContainer.style.display = "flex";
        subTabsContainer.style.gap = "6px";
        subTabsContainer.style.flexWrap = "wrap";
        subTabsContainer.style.justifyContent = "center";
        subTabsContainer.style.margin = "15px 0 25px 0";
        document.getElementById('tabs-container').after(subTabsContainer);
      }
      
      subTabsContainer.innerHTML = "";
      
      var totalFases = Math.ceil(ejData.length / 10);
      for (var f = startPhase; f <= endPhase && f <= totalFases; f++) {
        var btn = document.createElement('button');
        btn.className = "tab-btn phase-sub-btn" + (currentActivePhase === f ? " active" : "");
        btn.innerText = "Fase " + f;
        (function(phaseNum) {
          btn.onclick = function() {
            currentActivePhase = phaseNum;
            updateSubPhaseStyles();
            filterPhase(phaseNum);
          };
        })(f);
        subTabsContainer.appendChild(btn);
      }
    }

    function updateSubPhaseStyles() {
      var btns = document.querySelectorAll('.phase-sub-btn');
      for (var k = 0; k < btns.length; k++) {
        btns[k].classList.remove('active');
        if (btns[k].innerText.includes("Fase " + currentActivePhase)) {
          btns[k].classList.add('active');
        }
      }
    }

    function updateActiveTabStyles() {
      var btns = document.querySelectorAll('.tab-btn');
      for (var k = 0; k < btns.length; k++) {
        if (currentActivePhase === "Todos" && btns[k].innerText.includes("Todos")) {
          btns[k].classList.add('active');
        } else {
          btns[k].classList.remove('active');
        }
      }
    }

    function filterPhase(phase) {
      if (phase === 'Todos') {
        renderExercises(ejData);
        return;
      }
      var filtered = [];
      for (var i = 0; i < ejData.length; i++) {
        var exerciseId = i + 1;
        if (Math.ceil(exerciseId / 10) === phase) {
          filtered.push(ejData[i]);
        }
      }
      renderExercises(filtered);
    }

    function updateActiveTabStyles() {
      var btns = document.querySelectorAll('.tab-btn');
      for (var k = 0; k < btns.length; k++) {
        btns[k].classList.remove('active');
        if (btns[k].innerText.includes(currentActivePhase) || (currentActivePhase === "Todos" && btns[k].innerText === "Todos")) {
          btns[k].classList.add('active');
        }
      }
    }

    function filterPhase(phase) {
      if (phase === 'Todos') {
        renderExercises(ejData);
        return;
      }
      var filtered = [];
      for (var i = 0; i < ejData.length; i++) {
        var exerciseId = i + 1;
        if (Math.ceil(exerciseId / 10) === phase) {
          filtered.push(ejData[i]);
        }
      }
      renderExercises(filtered);
    }

    function renderExercises(items) {
      var box = document.getElementById('quiz-container');
      box.innerHTML = "";
      if (!items.length) {
        box.innerHTML = '<div class="quiz-card" style="text-align:center; color:#64748b;">No hay ejercicios en esta categoría por el momento.</div>';
        return;
      }
      for(var i=0; i<items.length; i++) {
        var item = items[i];
        var globalIndex = ejData.findIndex(function(ex) { return ex.pregunta === item.pregunta; });
        var exerciseId = (globalIndex !== -1) ? globalIndex + 1 : i + 1;
        var card = document.createElement('div');
        card.className = "quiz-card";
        var targetEnglish = item.respuesta || item.ingles || item.answer || item.pregunta;
        var safeTarget = String(targetEnglish).replace(/'/g, "\\\\'");
        card.innerHTML = '<div style="display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 10px;">' +
          '<div><span style="font-size:11px; background:#eff6ff; color:#2563eb; padding:2px 8px; border-radius:4px; font-weight:bold;">Fase ' + Math.ceil(exerciseId / 10) + '</span>' +
          '<div style="font-size: 17px; font-weight: 800; color: #0f172a; margin-top:6px;">' + exerciseId + '. ' + (item.pregunta || item.ingles) + '</div></div>' +
          '<button class="btn" style="background: #2563eb; color: white; padding: 8px 14px; font-size: 13px; flex-shrink:0;" onclick="speak(\\'' + safeTarget + '\\')">🔊 Escuchar</button>' +
          '</div>' +
          '<input type="text" id="ans-' + i + '" class="input-box" placeholder="Escribe tu traducción al inglés..." onkeypress="if(event.key===\\'Enter\\') checkUserAnswer(' + i + ', ' + exerciseId + ', \\'' + safeTarget + '\\')">' +
          '<div style="display: flex; gap: 10px; align-items: center; margin-top: 8px;">' +
            '<button class="btn" style="background: #172033; color: white;" onclick="checkUserAnswer(' + i + ', ' + exerciseId + ', \\'' + safeTarget + '\\')">Comprobar</button>' +
            '<span id="feedback-' + i + '" style="font-weight: 800; font-size: 14px; display: none;"></span>' +
          '</div>';
        box.appendChild(card);
      }
    }
    initExercises();
  </script>
</body>
</html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

 if (url.pathname === "/phrasal-verbs") {
      const lista110PhrasalVerbs = [
        { "verbo": "Act up", "significado": "Portarse mal / Fallar (un aparato)", "ejemplo": "My computer is acting up today." },
        { "verbo": "Add up", "significado": "Sumar / Tener sentido", "ejemplo": "His explanation just doesn't add up." },
        { "verbo": "Allow for", "significado": "Tener en cuenta / Prever", "ejemplo": "We must allow for delays in traffic." },
        { "verbo": "Answer back", "significado": "Contestar de manera grosera", "ejemplo": "Don't answer back to your parents." },
        { "verbo": "Ask around", "significado": "Preguntar a varias personas", "ejemplo": "I'll ask around to find a good mechanic." },
        { "verbo": "Back down", "significado": "Ceder / Retirar una postura", "ejemplo": "He refused to back down in the argument." },
        { "verbo": "Back up", "significado": "Respaldar / Hacer copia de seguridad", "ejemplo": "Always back up your important files." },
        { "verbo": "Blow up", "significado": "Estallar / Inflar / Enfadarse mucho", "ejemplo": "They had to blow up the old bridge." },
        { "verbo": "Break down", "significado": "Averiarse / Venirse abajo emocionalmente", "ejemplo": "My car broke down on the highway." },
        { "verbo": "Break in", "significado": "Entrar a la fuerza / Interrumpir", "ejemplo": "Someone broke in and stole my laptop." },
        { "verbo": "Break off", "significado": "Romper / Terminar una relación o acuerdo", "ejemplo": "They decided to break off negotiations." },
        { "verbo": "Break out", "significado": "Escape / Estallar (guerra, epidemia)", "ejemplo": "A fire broke out in the building." },
        { "verbo": "Bring about", "significado": "Ocasionar / Provocar que algo suceda", "ejemplo": "Technology has brought about major changes." },
        { "verbo": "Bring up", "significado": "Mencionar un tema / Criar a un hijo", "ejemplo": "Don't bring up that topic at dinner." },
        { "verbo": "Brush up", "significado": "Repasar / Refrescar conocimientos", "ejemplo": "I need to brush up on my English." },
        { "verbo": "Burn out", "significado": "Agotarse física o mentalmente", "ejemplo": "If you work too much, you will burn out." },
        { "verbo": "Call off", "significado": "Cancelar un evento o plan", "ejemplo": "They had to call off the meeting." },
        { "verbo": "Calm down", "significado": "Calmarse / Tranquilizarse", "ejemplo": "Calm down and tell me what happened." },
        { "verbo": "Carry on", "significado": "Continuar con algo", "ejemplo": "Please carry on with your presentation." },
        { "verbo": "Catch up", "significado": "Ponerse al día", "ejemplo": "We need to catch up soon." },
        { "verbo": "Check in", "significado": "Registrarse (hotel, vuelo)", "ejemplo": "Let's check in at the hotel reception." },
        { "verbo": "Check out", "significado": "Pagar y salir de hotel / Revisar algo", "ejemplo": "Check out this new tool on the website." },
        { "verbo": "Cheer up", "significado": "Animarse / Alegrarse", "ejemplo": "Cheer up, things will get better." },
        { "verbo": "Clean up", "significado": "Limpiar a fondo", "ejemplo": "We must clean up the kitchen." },
        { "verbo": "Come across", "significado": "Encontrarse algo por casualidad", "ejemplo": "I came across an old photo." },
        { "verbo": "Come back", "significado": "Regresar", "ejemplo": "What time will you come back?" },
        { "verbo": "Come over", "significado": "Venir a visitar / Pasarse por casa", "ejemplo": "Do you want to come over for dinner?" },
        { "verbo": "Count on", "significado": "Contar con alguien / Confiar", "ejemplo": "You can always count on me." },
        { "verbo": "Cut down", "significado": "Reducir el consumo", "ejemplo": "I'm trying to cut down on coffee." },
        { "verbo": "Deal with", "significado": "Lidiar con / Manejar un problema", "ejemplo": "I have to deal with this client." },
        { "verbo": "Depend on", "significado": "Depender de", "ejemplo": "It depends on the weather." },
        { "verbo": "Drop off", "significado": "Dejar a alguien o algo en un sitio", "ejemplo": "Drop off the package at the office." },
        { "verbo": "End up", "significado": "Terminar haciendo algo", "ejemplo": "We ended up ordering pizza." },
        { "verbo": "Face up to", "significado": "Afrontar una realidad", "ejemplo": "You must face up to your responsibilities." },
        { "verbo": "Fall apart", "significado": "Desmoronarse / Romperse en pedazos", "ejemplo": "My old shoes are falling apart." },
        { "verbo": "Figure out", "significado": "Descifrar / Resolver un problema", "ejemplo": "Let's figure out how this works." },
        { "verbo": "Fill out", "significado": "Llenar un formulario o documento", "ejemplo": "Fill out this application form." },
        { "verbo": "Find out", "significado": "Averiguar / Enterarse de algo", "ejemplo": "I want to find out the truth." },
        { "verbo": "Get along", "significado": "Llevarse bien con alguien", "ejemplo": "I get along well with my coworkers." },
        { "verbo": "Get away", "significado": "Escaparse / Irse de vacaciones", "ejemplo": "We need to get away this weekend." },
        { "verbo": "Get back", "significado": "Volver / Recuperar", "ejemplo": "When did you get back from the trip?" },
        { "verbo": "Get in", "significado": "Entrar (a un carro o lugar cerrado)", "ejemplo": "Get in the car, let's go." },
        { "verbo": "Get off", "significado": "Bajarse (de bus, tren, avión)", "ejemplo": "Get off at the next station." },
        { "verbo": "Get on", "significado": "Subirse (a transporte público)", "ejemplo": "Get on the bus quickly." },
        { "verbo": "Get out", "significado": "Salir de un lugar", "ejemplo": "Get out of here!" },
        { "verbo": "Get over", "significado": "Superar una enfermedad o ruptura", "ejemplo": "It took him weeks to get over the flu." },
        { "verbo": "Give away", "significado": "Regalar / Revelar un secreto", "ejemplo": "She decided to give away her old clothes." },
        { "verbo": "Give back", "significado": "Devolver algo que te prestaron", "ejemplo": "Remember to give back my book." },
        { "verbo": "Give in", "significado": "Ceder / Rendirse ante presión", "ejemplo": "He finally gave in and agreed." },
        { "verbo": "Give up", "significado": "Rindirse / Dejar un hábito", "ejemplo": "Never give up learning English." },
        { "verbo": "Go ahead", "significado": "Adelante / Procede", "ejemplo": "Go ahead with your questions." },
        { "verbo": "Go back", "significado": "Volver a un sitio", "ejemplo": "I need to go back home." },
        { "verbo": "Go on", "significado": "Continuar / Suceder", "ejemplo": "What is going on here?" },
        { "verbo": "Go out", "significado": "Salir (a divertirse)", "ejemplo": "Do you want to go out tonight?" },
        { "verbo": "Grow up", "significado": "Crecer / Madurar", "ejemplo": "I grew up in a small town." },
        { "verbo": "Hang on", "significado": "Esperar un momento", "ejemplo": "Hang on a second, please." },
        { "verbo": "Hang out", "significado": "Pasar el rato con amigos", "ejemplo": "Let's hang out this weekend." },
        { "verbo": "Hold on", "significado": "Esperar / Agarrarse fuerte", "ejemplo": "Hold on to the handrail." },
        { "verbo": "Hurry up", "significado": "Apurarse / Darse prisa", "ejemplo": "Hurry up or we will miss the train." },
        { "verbo": "Keep on", "significado": "Seguir haciendo algo", "ejemplo": "Keep on practicing every day." },
        { "verbo": "Keep up", "significado": "Mantener el ritmo", "ejemplo": "You are doing great, keep it up!" },
        { "verbo": "Knock out", "significado": "Noquear / Dejar agotado", "ejemplo": "That workout knocked me out." },
        { "verbo": "Leave out", "significado": "Excluir / Omitir", "ejemplo": "Don't leave out any details." },
        { "verbo": "Let down", "significado": "Decepcionar a alguien", "ejemplo": "I promise I won't let you down." },
        { "verbo": "Look after", "significado": "Cuidar de alguien o algo", "ejemplo": "Can you look after my dog?" },
        { "verbo": "Look back", "significado": "Mirar atrás / Recordar el pasado", "ejemplo": "When I look back, I smile." },
        { "verbo": "Look down on", "significado": "Despreciar a alguien", "ejemplo": "Never look down on other people." },
        { "verbo": "Look for", "significado": "Buscar algo", "ejemplo": "I am looking for my keys." },
        { "verbo": "Look forward to", "significado": "Esperar con ilusión", "ejemplo": "I look forward to seeing you." },
        { "verbo": "Look out", "significado": "Cuidado / Estar atento", "ejemplo": "Look out! There is a car coming." },
        { "verbo": "Look up", "significado": "Buscar información (en diccionario o web)", "ejemplo": "Look up the word in the dictionary." },
        { "verbo": "Make out", "significado": "Distinguir / Entender con dificultad", "ejemplo": "I can't make out what he's saying." },
        { "verbo": "Make up", "significado": "Inventar (historia) / Reconciliarse", "ejemplo": "Don't make up excuses." },
        { "verbo": "Move on", "significado": "Pasar página / Seguir adelante", "ejemplo": "It's time to move on." },
        { "verbo": "Pay back", "significado": "Devolver dinero", "ejemplo": "I will pay you back tomorrow." },
        { "verbo": "Pick up", "significado": "Recoger a alguien o algo", "ejemplo": "Pick me up at 5 PM." },
        { "verbo": "Point out", "significado": "Señalar / Destacar algo", "ejemplo": "He pointed out a mistake in the report." },
        { "verbo": "Pull over", "significado": "Orillarse / Detener el carro a un lado", "ejemplo": "The police officer told him to pull over." },
        { "verbo": "Put off", "significado": "Posponer / Dejar para después", "ejemplo": "Don't put off until tomorrow." },
        { "verbo": "Put on", "significado": "Ponerse una prenda", "ejemplo": "Put on your jacket, it's cold." },
        { "verbo": "Put up with", "significado": "Tolerar / Aguantar a alguien", "ejemplo": "I can't put up with this noise." },
        { "verbo": "Rethink", "significado": "Reconsiderar", "ejemplo": "Let's rethink the strategy." },
        { "verbo": "Run away", "significado": "Huir / Escapar", "ejemplo": "The cat ran away." },
        { "verbo": "Run into", "significado": "Encontrarse con alguien por sorpresa", "ejemplo": "I ran into an old friend today." },
        { "verbo": "Run out of", "significado": "Quedarse sin algo", "ejemplo": "We ran out of coffee." },
        { "verbo": "Set up", "significado": "Configurar / Organizar algo", "ejemplo": "Let's set up a meeting." },
        { "verbo": "Show around", "significado": "Mostrar un lugar / Dar un recorrido", "ejemplo": "Let me show you around the office." },
        { "verbo": "Show off", "significado": "Presumir / Fanfarronear", "ejemplo": "He likes to show off his car." },
        { "verbo": "Show up", "significado": "Aparecer / Presentarse en un sitio", "ejemplo": "He didn't show up for class." },
        { "verbo": "Shut down", "significado": "Apagar un sistema / Cerrar negocio", "ejemplo": "Shut down your computers." },
        { "verbo": "Sign up", "significado": "Inscribirse / Registrarse", "ejemplo": "Sign up for the monthly course." },
        { "verbo": "Sit down", "significado": "Sentarse", "ejemplo": "Please sit down." },
        { "verbo": "Sleep in", "significado": "Dormir hasta tarde", "ejemplo": "I love to sleep in on Sundays." },
        { "verbo": "Speak up", "significado": "Hablar más alto", "ejemplo": "Can you speak up, please?" },
        { "verbo": "Stand out", "significado": "Destacar / Sobresalir", "ejemplo": "Her work stands out from the rest." },
        { "verbo": "Stay up", "significado": "Quedarse despierto hasta tarde", "ejemplo": "Don't stay up too late." },
        { "verbo": "Switch off", "significado": "Apagar (luz, aparato)", "ejemplo": "Switch off the lights." },
        { "verbo": "Switch on", "significado": "Encender (luz, aparato)", "ejemplo": "Switch on the screen." },
        { "verbo": "Take after", "significado": "Parecerse a un familiar", "ejemplo": "She takes after her mother." },
        { "verbo": "Take away", "significado": "Quitar / Comida para llevar", "ejemplo": "I'll order Chinese food for take away." },
        { "verbo": "Take off", "significado": "Despegar (avión) / Quitarse ropa", "ejemplo": "Take off your shoes." },
        { "verbo": "Take out", "significado": "Sacar algo / Comida para llevar", "ejemplo": "Let's order take out tonight." },
        { "verbo": "Take over", "significado": "Tomar el control", "ejemplo": "He will take over the company." },
        { "verbo": "Think over", "significado": "Pensarlo bien / Analizar", "ejemplo": "Let me think over your offer." },
        { "verbo": "Try on", "significado": "Probarse ropa", "ejemplo": "Try on this jacket." },
        { "verbo": "Turn down", "significado": "Rechazar oferta / Bajar volumen", "ejemplo": "Turn down the music." },
        { "verbo": "Turn into", "significado": "Convertirse en algo o alguien", "ejemplo": "Caterpillars turn into butterflies." },
        { "verbo": "Turn out", "significado": "Resultar ser / Terminar ocurriendo", "ejemplo": "The weather turned out to be nice." },
        { "verbo": "Turn up", "significado": "Aparecer / Subir volumen", "ejemplo": "Turn up the volume." },
        { "verbo": "Wake up", "significado": "Despertarse", "ejemplo": "I wake up at 6 AM every day." },
        { "verbo": "Warm up", "significado": "Calentar (cuerpo o ambiente)", "ejemplo": "Always warm up before exercising." },
        { "verbo": "Watch out", "significado": "Cuidado / Estar alerta", "ejemplo": "Watch out for the step." },
        { "verbo": "Wear out", "significado": "Desgastar por uso", "ejemplo": "You will wear out your shoes." },
        { "verbo": "Work out", "significado": "Ejercitarse / Resolver un problema", "ejemplo": "I work out at the gym." },
        { "verbo": "Write down", "significado": "Anotar / Apuntar", "ejemplo": "Write down this address." }
      ];

      const safePhrasalJson = JSON.stringify(lista110PhrasalVerbs);

      return new Response(`<!DOCTYPE html>
<html lang="es">
<head>
  ${commonHead}
  <title>Diccionario de Phrasal Verbs | Real English</title>
  <style>
    .phrasal-wrapper { max-width: 900px; margin: 30px auto; padding: 0 15px 60px; }
    .phrasal-card { background: #111827; border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin-bottom: 14px; transition: transform 0.2s, border-color 0.2s; }
    .phrasal-card:hover { border-color: #f43f5e; transform: translateY(-2px); }
  </style>
</head>
<body>
  ${sharedNav}
  <main class="phrasal-wrapper">
    <div style="text-align: center; margin-bottom: 25px;">
      <span style="font-size: 11px; font-weight: 800; color: #f43f5e; text-transform: uppercase; letter-spacing: 2px;">Guía Definitiva 🔥</span>
      <h1 style="font-size: 26px; font-weight: 800; color: white; margin-top: 6px;">110 Phrasal Verbs Esenciales</h1>
      <p style="color: #94a3b8; font-size: 14px; margin-top: 6px;">Domina los verbos compuestos más usados en el día a día con ejemplos reales.</p>
    </div>

    <div style="margin-bottom: 25px; text-align: center;">
      <input type="text" id="phrasal-search" class="search-box" style="max-width: 400px; padding: 12px 16px; font-size: 14px; border: 2px solid #cbd5e1; border-radius: 8px; width: 100%;" placeholder="🔍 Busca un phrasal verb o significado..." onkeyup="filterPhrasal()">
    </div>

    <div id="phrasal-container"></div>
  </main>
  ${sharedFooter} ${whatsappBtn}
  <script>
    var phrasalData = ${safePhrasalJson};

    function renderPhrasal(items) {
      var container = document.getElementById('phrasal-container');
      container.innerHTML = "";
      if (!items.length) {
        container.innerHTML = '<div style="text-align: center; color: #64748b; padding: 30px;">No se encontraron resultados.</div>';
        return;
      }
      for (var i = 0; i < items.length; i++) {
        var item = items[i];
        var card = document.createElement('div');
        card.className = "phrasal-card";
        var safeVerbo = String(item.verbo).replace(/'/g, "\\\\'");
        
        card.innerHTML = '<div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 15px; flex-wrap: wrap;">' +
          '<div style="flex: 1; min-width: 250px;">' +
            '<div style="font-size: 18px; font-weight: 800; color: #f43f5e; margin-bottom: 4px;">' + (i+1) + '. ' + item.verbo + '</div>' +
            '<div style="font-size: 14px; font-weight: 700; color: #ffffff; margin-bottom: 6px;">🇪🇸 ' + item.significado + '</div>' +
            '<div style="font-size: 13px; color: #ffd43b; font-style: italic;">💬 Ej: "' + item.ejemplo + '"</div>' +
          '</div>' +
          '<div>' +
            '<button class="btn" style="background: rgba(244,63,94,0.15); color: #f43f5e; padding: 8px 14px; font-size: 12px; border-radius: 8px;" onclick="speak(\\\'' + safeVerbo + '. ' + String(item.ejemplo).replace(/'/g, "\\\\'") + '\\\')">🔊 Escuchar</button>' +
          '</div>' +
        '</div>';
        container.appendChild(card);
      }
    }

    function filterPhrasal() {
      var q = document.getElementById('phrasal-search').value.toLowerCase().trim();
      if (!q) { renderPhrasal(phrasalData); return; }
      var filtered = [];
      for (var i = 0; i < phrasalData.length; i++) {
        var p = phrasalData[i];
        if (p.verbo.toLowerCase().includes(q) || p.significado.toLowerCase().includes(q) || p.ejemplo.toLowerCase().includes(q)) {
          filtered.push(p);
        }
      }
      renderPhrasal(filtered);
    }

    renderPhrasal(phrasalData);
  </script>
</body>
</html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

if (url.pathname === "/prueba") {
      const preguntasPruebate = [
        // --- NIVEL 1: Supervivencia y Cotidiano (1-10) ---
        { id: 1, nivel: 1, pregunta: "¿Cómo se dice '¿Qué tal? / ¿Qué pasa?' de forma natural?", opciones: ["What are you doing?", "What's up?", "How are you going?"], correcta: 1, explicacion: "Usamos 'What's up?' como el saludo informal y cotidiano más común." },
        { id: 2, nivel: 1, pregunta: "¿Cómo se expresa 'Ya voy ahora mismo'?", opciones: ["I'm coming right now", "I go in this moment", "I walking fast"], correcta: 0, explicacion: "La estructura nativa es 'I'm coming right now'." },
        { id: 3, nivel: 1, pregunta: "¿Cuál es la forma correcta para decir 'Nos vemos más tarde'?", opciones: ["See you later", "Look you after", "Watch you down"], correcta: 0, explicacion: "'See you later' es la plantilla fija para despedirse de forma casual." },
        { id: 4, nivel: 1, pregunta: "¿Cómo se dice 'Mucho gusto en conocerte'?", opciones: ["More to meet you", "Nice to meet you", "Good to see house"], correcta: 1, explicacion: "'Nice to meet you' es la frase estándar y perfecta para presentaciones." },
        { id: 5, nivel: 1, pregunta: "¿Cómo se traduce 'Tómate tu tiempo'?", opciones: ["Give your clock", "Take your time", "Make your hours"], correcta: 1, explicacion: "'Take your time' se usa cuando quieres decirle a alguien que no se apresure." },
        { id: 6, nivel: 1, pregunta: "¿Cómo se dice 'No entiendo'?", opciones: ["I don't understand", "I no comprehend", "Not intelligence"], correcta: 0, explicacion: "La negación correcta para verbos de entendimiento es 'I don't understand'." },
        { id: 7, nivel: 1, pregunta: "¿Cómo se pide ayuda cortésmente: '¿Me puedes ayudar por favor?'?", opciones: ["Can you help me please?", "You help to me?", "Give me hands please"], correcta: 0, explicacion: "Usamos el modal 'Can you help me please?' de forma directa y amable." },
        { id: 8, nivel: 1, pregunta: "¿Cómo se expresa '¿Cómo se dice esto?'", opciones: ["How do you say this?", "What say this?", "Which is decir esto?"], correcta: 0, explicacion: "La estructura fija para preguntar vocabulario es 'How do you say this?'." },
        { id: 9, nivel: 1, pregunta: "¿Cómo se traduce 'Hacer la cama'?", opciones: ["Make the bed", "Do the furniture", "Construct the sleep"], correcta: 0, explicacion: "En inglés se utiliza el verbo make para las tareas de ordenar: 'Make the bed'." },
        { id: 10, nivel: 1, pregunta: "¿Cómo se dice 'Sacar la basura'?", opciones: ["Take out the trash", "Pull away the dirt", "Remove the bad"], correcta: 0, explicacion: "La acción específica es 'Take out the trash'." },

        // --- NIVEL 2: Acciones Específicas y Rutinas (11-20) ---
        { id: 11, nivel: 2, pregunta: "Completa la acción de cocina: '___ an egg into the pan'", opciones: ["Make", "Crack", "Drink"], correcta: 1, explicacion: "Usamos 'crack an egg' para referirnos a cascar un huevo." },
        { id: 12, nivel: 2, pregunta: "¿Cuál es el verbo específico para 'Preparar / colar café'?", opciones: ["Cook coffee", "Brew coffee", "Boil coffee"], correcta: 1, explicacion: "Para el café fresco de cafetera se utiliza 'brew coffee'." },
        { id: 13, nivel: 2, pregunta: "¿Cómo se dice 'Lavar los platos sucios'?", opciones: ["Clean plates", "Wash the dirty dishes", "Do the food glass"], correcta: 1, explicacion: "La acción concreta es 'Wash the dirty dishes'." },
        { id: 14, nivel: 2, pregunta: "Completa la frase de oficina: 'I need to ___ financial reports today.'", opciones: ["look", "review", "watch"], correcta: 1, explicacion: "Para informes y documentos detallados usamos 'review reports'." },
        { id: 15, nivel: 2, pregunta: "¿Cómo se pide la cuenta en un restaurante?", opciones: ["Give me check", "Ask for the bill / check", "Pay the food now"], correcta: 1, explicacion: "La forma natural es 'Ask for the bill / check'." },
        { id: 16, nivel: 2, pregunta: "¿Qué significa 'Check tire pressure' al conducir un camión?", opciones: ["Revisar presión de llantas", "Mirar los espejos", "Pesar la carga"], correcta: 0, explicacion: "Significa verificar el aire y estado de los neumáticos." },
        { id: 17, nivel: 2, pregunta: "¿Cómo se traduce 'Dividir la cuenta' en un restaurante?", opciones: ["Half the money", "Split the bill", "Separate tickets"], correcta: 1, explicacion: "La expresión exacta y comercial es 'Split the bill'." },
        { id: 18, nivel: 2, pregunta: "Completa la frase de oficina: 'I need to ___ emails this morning.'", opciones: ["answer for", "reply to", "speak"], correcta: 1, explicacion: "La combinación correcta es 'reply to emails'." },
        { id: 19, nivel: 2, pregunta: "¿Cómo se dice 'Precalentar el horno'?", opciones: ["Hot the oven before", "Preheat the oven", "Warm up stove"], correcta: 1, explicacion: "El término culinario específico es 'Preheat the oven'." },
        { id: 20, nivel: 2, pregunta: "¿Cómo se expresa 'Agendar una llamada'?", opciones: ["Schedule a call", "Put a phone time", "Make a meeting text"], correcta: 0, explicacion: "La plantilla profesional es 'Schedule a call'." },

        // --- NIVEL 3: Phrasal Verbs y Expresiones Avanzadas (21-30) ---
        { id: 21, nivel: 3, pregunta: "¿Cómo se expresa de forma natural 'No tengo ganas de salir'?", opciones: ["I don't want for go out", "I don't feel like going out", "I have no desire"], correcta: 1, explicacion: "La plantilla nativa para antojos o estados de ánimo es 'I feel like + [verbo]-ing'." },
        { id: 22, nivel: 3, pregunta: "Completa con el Phrasal Verb: 'My car ___ on the highway this morning.'", opciones: ["broke down", "gave up", "showed up"], correcta: 0, explicacion: "'Break down' significa vararse o descomponerse un vehículo." },
        { id: 23, nivel: 3, pregunta: "¿Qué significa la expresión 'I was about to call you'?", opciones: ["Ya te llamé hace horas", "Estaba a punto de llamarte", "Nunca te llamaré"], correcta: 1, explicacion: "'To be about to...' indica que algo iba a suceder justo en ese instante." },
        { id: 24, nivel: 3, pregunta: "Completa la frase: 'Always ___ up your important computer files.'", opciones: ["back", "drop", "hold"], correcta: 0, explicacion: "'Back up' significa hacer una copia de seguridad o respaldar." },
        { id: 25, nivel: 3, pregunta: "¿Qué significa 'Make up your mind'?", opciones: ["Limpia tu mente", "Decídete / Toma una decisión", "Recuerda algo"], correcta: 1, explicacion: "Es la forma idiomática de decir 'Decídete de una vez'." },
        { id: 26, nivel: 3, pregunta: "Completa el Phrasal Verb de fallo técnico: 'My computer is ___ up today.'", opciones: ["acting", "running", "moving"], correcta: 0, explicacion: "'Act up' se usa cuando un aparato electrónico empieza a fallar o comportarse extraño." },
        { id: 27, nivel: 3, pregunta: "¿Qué significa 'We need to catch up'?", opciones: ["Tenemos que correr", "Necesitamos ponernos al día", "Tenemos que atrapar algo"], correcta: 1, explicacion: "'Catch up' significa ponerse al día con alguien después de un tiempo sin verse." },
        { id: 38, nivel: 3, pregunta: "Completa la frase de expectativa: 'I ___ forward to seeing you.'", opciones: ["look", "hope", "wait"], correcta: 0, explicacion: "La plantilla fija con ilusión es 'I look forward to...'." },
        { id: 29, nivel: 3, pregunta: "¿Qué significa 'Figure out the problem'?", opciones: ["Dibujar el problema", "Resolver / averiguar el problema", "Ignorar el problema"], correcta: 1, explicacion: "'Figure out' se traduce como descifrar, resolver o entender algo complejo." },
        { id: 30, nivel: 3, pregunta: "¿Cómo se traduce 'Consistency is key to success'?", opciones: ["La suerte es clave", "La constancia es la clave del éxito", "El estudio es rápido"], correcta: 1, explicacion: "Una frase magistral de cierre donde 'consistency' representa la constancia y disciplina." }
      ];

      const safeJsonTest = JSON.stringify(preguntasPruebate);

      return new Response(`<!DOCTYPE html>
<html lang="es">
<head>
  ${commonHead}
  <title>¡Pruébate! | Real English</title>
  <style>
    .test-wrapper { max-width: 750px; margin: 30px auto; padding: 0 15px 60px; }
    .test-card { background: #111827; border: 1px solid rgba(255,255,255,0.1); border-radius: 14px; padding: 24px; margin-bottom: 20px; text-align: left; }
    .option-btn { display: block; width: 100%; background: #1e293b; color: #f8fafc; border: 1px solid rgba(255,255,255,0.1); padding: 12px 16px; border-radius: 8px; margin-top: 10px; font-weight: 700; font-size: 14px; cursor: pointer; text-align: left; transition: background 0.2s; }
    .option-btn:hover { background: #334155; border-color: #38bdf8; }
    .option-btn.correct { background: #16a34a !important; border-color: #16a34a !important; color: white; }
    .option-btn.incorrect { background: #dc2626 !important; border-color: #dc2626 !important; color: white; }
    .explanation-box { margin-top: 15px; padding: 12px; border-radius: 8px; background: rgba(56, 189, 248, 0.1); border-left: 4px solid #38bdf8; font-size: 13px; color: #cbd5e1; display: none; }
  </style>
</head>
<body>
  ${sharedNav}
  <main class="test-wrapper">
    <div style="text-align: center; margin-bottom: 30px;">
      <span style="font-size: 11px; font-weight: 800; color: #38bdf8; text-transform: uppercase; letter-spacing: 2px;">Entrenamiento Interactivo 🚀</span>
      <h1 style="font-size: 26px; font-weight: 800; color: white; margin-top: 6px;">¡Pruébate y Entrena tu Nivel!</h1>
      <p style="color: #94a3b8; font-size: 14px; margin-top: 6px;">Responde las preguntas paso a paso y descubre la explicación instantánea en cada acierto o error.</p>
    </div>
    
    <div id="quiz-container"></div>
  </main>
  ${sharedFooter} ${whatsappBtn}
  <script>
    var questions = ${safeJsonTest};
    
    function renderQuiz() {
      var container = document.getElementById('quiz-container');
      container.innerHTML = "";
      
      for (var i = 0; i < questions.length; i++) {
        var q = questions[i];
        var card = document.createElement('div');
        card.className = "test-card";
        card.id = "question-card-" + q.id;
        
        var htmlOptions = "";
        for (var j = 0; j < q.opciones.length; j++) {
          htmlOptions += '<button class="option-btn" id="q-' + q.id + '-opt-' + j + '" onclick="checkAnswer(' + q.id + ', ' + j + ', ' + q.correcta + ')">' + q.opciones[j] + '</button>';
        }
        
        card.innerHTML = '<div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">' +
            '<span style="font-size: 11px; font-weight: 800; color: #38bdf8;">NIVEL ' + q.nivel + '</span>' +
            '<span style="font-size: 11px; color: #94a3b8;">Pregunta ' + (i+1) + ' de ' + questions.length + '</span>' +
          '</div>' +
          '<h3 style="font-size: 17px; font-weight: 800; color: white; margin-bottom: 15px;">' + q.pregunta + '</h3>' +
          htmlOptions +
          '<div class="explanation-box" id="exp-' + q.id + '">💡 <strong>Explicación:</strong> ' + q.explicacion + '</div>';
          
        container.appendChild(card);
      }
    }

    function checkAnswer(qId, selectedOpt, correctOpt) {
      // Bloquear los botones de esta pregunta para evitar múltiples clics
      for (var j = 0; j < 3; j++) {
        var btn = document.getElementById('q-' + qId + '-opt-' + j);
        if (btn) { btn.disabled = true; }
      }

      var selectedBtn = document.getElementById('q-' + qId + '-opt-' + selectedOpt);
      var correctBtn = document.getElementById('q-' + qId + '-opt-' + correctOpt);
      var expBox = document.getElementById('exp-' + qId);

      if (selectedOpt === correctOpt) {
        selectedBtn.classList.add('correct');
      } else {
        selectedBtn.classList.add('incorrect');
        correctBtn.classList.add('correct');
      }

      expBox.style.display = "block";
    }

    renderQuiz();
  </script>
</body>
</html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    if (url.pathname === "/registro") {
      return new Response(`<!DOCTYPE html>
<html lang="es">
<head>${commonHead}<title>Registro | Inglés con Emerson</title></head>
<body>
  ${sharedNav}
  <main style="max-width: 450px; margin: 40px auto; padding: 0 20px 60px;">
    <div style="background: white; color: #172033; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
      <h2 style="margin-bottom: 6px; font-size: 24px; color: #0f172a;">Crea tu Cuenta</h2>
      <p style="color: #64748b; margin-bottom: 20px; font-size: 13px;">Regístrate para guardar tu progreso.</p>
      <form action="/registro" method="POST">
        <label style="font-size: 12px; font-weight: bold; color: #475569;">Nombre completo</label>
        <input type="text" name="nombre" class="input-box" required placeholder="Tu nombre...">
        <label style="font-size: 12px; font-weight: bold; color: #475569;">Correo electrónico</label>
        <input type="email" name="email" class="input-box" required placeholder="correo@ejemplo.com">
        <label style="font-size: 12px; font-weight: bold; color: #475569;">Contraseña</label>
        <input type="password" name="password" class="input-box" required placeholder="••••••••">
        <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 15px;">Registrarse</button>
      </form>
      <p style="text-align: center; margin-top: 15px; font-size: 13px; color: #64748b;"><a href="/login" style="color: #2563eb; font-weight: bold;">¿Ya tienes cuenta? Inicia sesión</a></p>
    </div>
  </main>
  ${sharedFooter} ${whatsappBtn}
</body>
</html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    if (url.pathname === "/login") {
      return new Response(`<!DOCTYPE html>
<html lang="es">
<head>${commonHead}<title>Iniciar Sesión | Inglés con Emerson</title></head>
<body>
  ${sharedNav}
  <main style="max-width: 450px; margin: 40px auto; padding: 0 20px 60px;">
    <div style="background: white; color: #172033; padding: 30px; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
      <h2 style="margin-bottom: 6px; font-size: 24px; color: #0f172a;">Iniciar Sesión</h2>
      <form action="/login" method="POST">
        <label style="font-size: 12px; font-weight: bold; color: #475569;">Correo electrónico</label>
        <input type="email" name="email" class="input-box" required placeholder="correo@ejemplo.com">
        <label style="font-size: 12px; font-weight: bold; color: #475569;">Contraseña</label>
        <input type="password" name="password" class="input-box" required placeholder="••••••••">
        <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 15px;">Ingresar</button>
      </form>
      <p style="text-align: center; margin-top: 15px; font-size: 13px; color: #64748b;"><a href="/registro" style="color: #2563eb; font-weight: bold;">¿No tienes cuenta? Regístrate</a></p>
    </div>
  </main>
  ${sharedFooter} ${whatsappBtn}
</body>
</html>`, { headers: { "content-type": "text/html;charset=UTF-8" } });
    }

    const homeHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  ${commonHead}
  <title>Inglés con Emerson | Desbloquea tu inglés de forma natural</title>
</head>
<body>
${sharedNav}
<main>
  <section style="background: #090d16; color: white; padding: 0 0 30px; text-align: center;">
    <img src="${GITHUB_BANNER_URL}" alt="Banner" style="width: 100%; max-height: 280px; object-fit: cover; display: block; border-bottom: 1px solid rgba(255,255,255,0.1);">
    <div style="padding: 25px 16px 15px; max-width: 700px; margin: auto;">
      <h1 style="font-size: clamp(22px, 4vw, 32px); font-weight: 800; line-height: 1.25; margin-bottom: 8px;">¿Gramática? No gracias.<br>Aprende <span style="background: #ffd43b; color: #172033; padding: 2px 8px; border-radius: 4px;">inglés</span> de forma <span style="background: #ffd43b; color: #172033; padding: 2px 8px; border-radius: 4px;">natural</span></h1>
      <p style="font-size: 14px; color: #94a3b8; max-width: 600px; margin: 0 auto 20px;">Domina expresiones cotidianas y plantillas reales para la vida diaria.</p>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; max-width: 650px; margin: 0 auto; text-align: left;">
        <a href="/prueba" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); padding: 14px 12px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
          <div style="font-size: 24px; background: rgba(37,99,235,0.25); width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 10px; flex-shrink: 0;"><img src="${GITHUB_ICON_TEST_URL}" alt="Test" style="width:24px;"></div>
          <div><div style="font-size: 13px; font-weight: 800; color: #fff;">Test de Nivel</div><div style="font-size: 11px; color: #94a3b8;">Evalúate en 2 min</div></div>
        </a>
        <a href="/al-grano" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); padding: 14px 12px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
          <div style="font-size: 24px; background: rgba(37,99,235,0.25); width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 10px; flex-shrink: 0;">🎯</div>
          <div><div style="font-size: 13px; font-weight: 800; color: #fff;">Al Grano</div><div style="font-size: 11px; color: #94a3b8;">Acciones concretas</div></div>
        </a>
        <a href="/simulador" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); padding: 14px 12px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
          <div style="font-size: 24px; background: rgba(37,99,235,0.25); width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 10px; flex-shrink: 0;">🗣️</div>
          <div><div style="font-size: 13px; font-weight: 800; color: #fff;">Simulador</div><div style="font-size: 11px; color: #94a3b8;">Diálogo en vivo</div></div>
        </a>
        <a href="/aprende/juegos" style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12); padding: 14px 12px; border-radius: 12px; display: flex; align-items: center; gap: 12px;">
          <div style="font-size: 24px; background: rgba(37,99,235,0.25); width: 44px; height: 44px; display: flex; align-items: center; justify-content: center; border-radius: 10px; flex-shrink: 0;">🎮</div>
          <div><div style="font-size: 13px; font-weight: 800; color: #fff;">Juega +</div><div style="font-size: 11px; color: #94a3b8;">Juegos de vocabulario</div></div>
        </a>
      </div>
    </div>
  </section>

  <section style="background: #111827; padding: 40px 20px; text-align: center; border-top: 1px solid rgba(255,255,255,0.08); border-bottom: 1px solid rgba(255,255,255,0.08);">
    <div style="max-width: 700px; margin: auto;">
      <span style="font-size: 11px; font-weight: 800; color: #ffd43b; text-transform: uppercase; letter-spacing: 2px;">Nuevo en el canal</span>
      <h2 style="font-size: 24px; font-weight: 800; color: white; margin-top: 6px; margin-bottom: 16px;">Cómo pedir en un restaurante en inglés 🍔</h2>
      
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 12px; border: 1px solid rgba(255,255,255,0.15);">
        <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" src="https://www.youtube.com/embed/on-VJBdIR8A" title="Cómo pedir en un restaurante en inglés" allowfullscreen></iframe>
      </div>
      <p style="font-size: 12px; color: #94a3b8; margin-top: 10px;">Aprende la estructura "Can I get..." como un nativo.</p>
    </div>
  </section>
  <section style="background: linear-gradient(135deg, #090d16, #111827); padding: 60px 20px; border-top: 1px solid rgba(255,255,255,0.08);">
    <div style="max-width: 900px; margin: auto;">
      <div style="background: rgba(17, 24, 39, 0.8); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 35px; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 30px; align-items: center;">
          
          <!-- Columna Izquierda: Tu Perfil Profesional -->
          <div>
            <div style="display: inline-block; background: rgba(255, 212, 59, 0.15); color: #ffd43b; font-size: 11px; font-weight: 800; padding: 4px 10px; border-radius: 20px; text-transform: uppercase; margin-bottom: 12px; letter-spacing: 1px;">
              Respaldado por la experiencia
            </div>
            <h2 style="font-size: 24px; font-weight: 800; color: #ffffff; line-height: 1.3; margin-bottom: 12px;">
              Estás entrenando con un experto real, no con fórmulas de libros viejos.
            </h2>
            <p style="color: #cbd5e1; font-size: 14px; line-height: 1.6; margin-bottom: 16px;">
              Detrás de cada lección hay más de <strong>25 años de experiencia</strong> guiando estudiantes en entornos virtuales. Soy Licenciado en Lenguas Extranjeras y Especialista en Traducción Simultánea, con nivel avanzado y fluido en <strong>inglés y francés</strong>.
            </p>
            <div style="display: flex; gap: 20px; flex-wrap: wrap; margin-top: 20px;">
              <div>
                <div style="font-size: 20px; font-weight: 800; color: #ffd43b;">25+ Años</div>
                <div style="font-size: 12px; color: #94a3b8;">Enseñanza virtual</div>
              </div>
              <div style="border-left: 1px solid rgba(255,255,255,0.1); padding-left: 20px;">
                <div style="font-size: 20px; font-weight: 800; color: #60a5fa;">Bilingüe Pro</div>
                <div style="font-size: 12px; color: #94a3b8;">Inglés y Francés</div>
              </div>
              <div style="border-left: 1px solid rgba(255,255,255,0.1); padding-left: 20px;">
                <div style="font-size: 20px; font-weight: 800; color: #4ade80;">100% Real</div>
                <div style="font-size: 12px; color: #94a3b8;">Cero gramática muerta</div>
              </div>
            </div>
          </div>

          <!-- Columna Derecha: El Método que Vende -->
          <div style="background: rgba(15, 23, 42, 0.7); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 25px;">
            <h3 style="font-size: 16px; font-weight: 800; color: #ffd43b; margin-bottom: 15px; text-transform: uppercase; letter-spacing: 0.5px;">
              ⚡ La Diferencia de Real English
            </h3>
            
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 14px; font-size: 13px; color: #e2e8f0; line-height: 1.5;">
              <li style="display: flex; gap: 10px; align-items: flex-start;">
                <span style="color: #4ade80; font-size: 16px; font-weight: bold;">✓</span>
                <div><strong>Menos del 5% de gramática:</strong> Olvídate de reglas complejas que te bloquean al hablar.</div>
              </li>
              <li style="display: flex; gap: 10px; align-items: flex-start;">
                <span style="color: #4ade80; font-size: 16px; font-weight: bold;">✓</span>
                <div><strong>Pronunciación quirúrgica:</strong> Te muestro paso a paso la posición exacta de cada sonido para sonar natural.</div>
              </li>
              <li style="display: flex; gap: 10px; align-items: flex-start;">
                <span style="color: #4ade80; font-size: 16px; font-weight: bold;">✓</span>
                <div><strong>Acciones y Plantillas:</strong> Bloques del día a día (ej. <em>"I don't want to, but I have to"</em>) para avanzar más rápido.</div>
              </li>
            </ul>

            <div style="margin-top: 22px; text-align: center;">
              <a href="${HOTMART_CLUB_URL}" target="_blank" style="display: block; background: #ffd43b; color: #172033; padding: 12px; border-radius: 8px; font-weight: 800; font-size: 14px; text-transform: uppercase; text-decoration: none; box-shadow: 0 4px 12px rgba(255,212,59,0.2);">
                Inscríbete a los Cursos de Emerson ➔
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>oo
</main>
${sharedFooter}
${whatsappBtn}
</body>
</html>`;

    return new Response(homeHtml, { headers: { "content-type": "text/html;charset=UTF-8" } });
  }
};

export { workers_default as default };
