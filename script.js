// Base de datos de palabras por categorías
const categories = {
    "Animales": ["Perro", "Gato", "Elefante", "León", "Tigre", "Oso", "Lobo", "Zorro", "Conejo", "Panda", "Cocodrilo", "Serpiente", "Águila", "Delfín", "Tiburón", "Caballo", "Jirafa", "Cebra", "Hipopótamo", "Rinoceronte", "Mono", "Gorila", "Canguro", "Koala", "Pingüino", "Foca", "Ballena", "Pulpo", "Medusa", "Tortuga", "Camu-Camu", "Loro", "Pavo", "Gallina", "Vaca", "Cerdo", "Oveja", "Cabra", "Burro", "Ratón", "Ardilla", "Castor", "Nutria", "Murciélago", "Búho", "Halcón", "Cuervo", "Cisne", "Pato", "Ganso"],
    "Comida": ["Pizza", "Hamburguesa", "Sushi", "Tacos", "Pasta", "Helado", "Chocolate", "Café", "Té", "Pan", "Ensalada", "Sandwich", "Pollo", "Arroz", "Sopa", "Queso", "Huevo", "Leche", "Yogur", "Mantequilla", "Manzana", "Banana", "Naranja", "Uva", "Fresa", "Piña", "Mango", "Sandía", "Melón", "Pera", "Durazno", "Ciruela", "Cereza", "Limón", "Lima", "Aguacate", "Tomate", "Papa", "Zanahoria", "Cebolla", "Ajo", "Pimiento", "Maíz", "Guisantes", "Frijoles", "Lentejas", "Garbanzos", "Nueces", "Almendras", "Miel"],
    "Profesiones": ["Doctor", "Maestro", "Bombero", "Policía", "Chef", "Piloto", "Ingeniero", "Artista", "Músico", "Escritor", "Abogado", "Arquitecto", "Veterinario", "Dentista", "Periodista", "Enfermero", "Cirujano", "Psicólogo", "Científico", "Astronauta", "Actor", "Director", "Fotógrafo", "Diseñador", "Programador", "Electricista", "Fontanero", "Carpintero", "Albañil", "Mecánico", "Jardinero", "Agricultor", "Pescador", "Minero", "Soldado", "Marinero", "Bibliotecario", "Contador", "Economista", "Político", "Juez", "Fiscal", "Detective", "Guía", "Traductor", "Sastre", "Panadero", "Carnicero", "Cajero", "Mesero"],
    "Deportes": ["Fútbol", "Baloncesto", "Tenis", "Natación", "Ciclismo", "Boxing", "Golf", "Volleyball", "Béisbol", "Hockey", "Rugby", "Atletismo", "Gimnasia", "Esquí", "Surf", "Karate", "Judo", "Taekwondo", "Lucha", "Esgrima", "Tiro", "Arco", "Remo", "Vela", "Piragüismo", "Waterpolo", "Balonmano", "Bádminton", "Ping-Pong", "Squash", "Críquet", "Polo", "Equitación", "Escalada", "Patinaje", "Skate", "Snowboard", "Paracaidismo", "Buceo", "Pesca", "Caza", "Billar", "Bolos", "Dardos", "Ajedrez", "Automovilismo", "Motociclismo", "Rally", "Karting", "Crossfit"],
    "Países": ["España", "Francia", "Italia", "Alemania", "Japón", "Brasil", "México", "Argentina", "Canadá", "Australia", "China", "India", "Rusia", "Reino Unido", "Estados Unidos", "Portugal", "Grecia", "Holanda", "Bélgica", "Suiza", "Austria", "Suecia", "Noruega", "Dinamarca", "Finlandia", "Irlanda", "Polonia", "Turquía", "Egipto", "Marruecos", "Sudáfrica", "Nigeria", "Kenia", "Colombia", "Perú", "Chile", "Venezuela", "Cuba", "Tailandia", "Vietnam", "Indonesia", "Malasia", "Singapur", "Corea", "Israel", "Irán", "Irak", "Arabia", "Emiratos", "Nueva Zelanda"],
    "Objetos": ["Mesa", "Silla", "Teléfono", "Computadora", "Libro", "Reloj", "Lápiz", "Coche", "Bicicleta", "Llave", "Lámpara", "Espejo", "Cámara", "Guitarra", "Paraguas", "Mochila", "Bolso", "Cartera", "Gafas", "Sombrero", "Cinturón", "Zapato", "Calcetín", "Anillo", "Collar", "Pulsera", "Reloj", "Botella", "Vaso", "Taza", "Plato", "Cuchara", "Tenedor", "Cuchillo", "Sartén", "Olla", "Escoba", "Fregona", "Cubo", "Toalla", "Jabón", "Cepillo", "Peine", "Tijeras", "Martillo", "Destornillador", "Taladro", "Clavo", "Tornillo", "Tuerca"],
    "Películas": ["Titanic", "Avatar", "Inception", "Gladiator", "Matrix", "Jurassic Park", "Star Wars", "Batman", "Superman", "Spider-Man", "Iron Man", "Avengers", "Frozen", "Toy Story", "Shrek", "El Padrino", "Pulp Fiction", "Forrest Gump", "Rey León", "Aladdin", "Mulan", "Coco", "Up", "Wall-E", "Buscando a Nemo", "Los Increíbles", "Harry Potter", "Señor de los Anillos", "Hobbit", "Piratas del Caribe", "Indiana Jones", "Regreso al Futuro", "Terminator", "Alien", "Predator", "Rocky", "Rambo", "Die Hard", "Misión Imposible", "James Bond", "Fast & Furious", "Joker", "Black Panther", "Wonder Woman", "Thor", "Capitán América", "Hulk", "Viuda Negra", "Doctor Strange", "Guardianes de la Galaxia"],
    "Colores": ["Rojo", "Azul", "Verde", "Amarillo", "Naranja", "Violeta", "Rosa", "Negro", "Blanco", "Gris", "Marrón", "Turquesa", "Dorado", "Plateado", "Coral", "Beige", "Caqui", "Cian", "Magenta", "Lila", "Lavanda", "Púrpura", "Añil", "Celeste", "Oliva", "Mostaza", "Salmón", "Melocotón", "Fucsia", "Granate", "Bordo", "Teja", "Ocre", "Crema", "Marfil", "Vainilla", "Hueso", "Arena", "Sepia", "Chocolate", "Café", "Bronce", "Cobre", "Platino", "Perla", "Esmeralda", "Rubí", "Zafiro", "Amatista", "Topacio"],
    "Transportes": ["Avión", "Tren", "Barco", "Autobús", "Motocicleta", "Helicóptero", "Submarino", "Globo", "Patineta", "Scooter", "Metro", "Taxi", "Ambulancia", "Camión", "Cohete", "Tranvía", "Ferry", "Velero", "Yate", "Canoa", "Kayak", "Balsa", "Crucero", "Portaviones", "Dirigible", "Parapente", "Ala Delta", "Trineo", "Carruaje", "Carreta", "Tractor", "Grúa", "Excavadora", "Apisonadora", "Montacargas", "Furgoneta", "Caravana", "Autocaravana", "Limosina", "Todoterreno", "Cuatrimoto", "Bici Eléctrica", "Monociclo", "Segway", "Teleférico", "Funicular", "Telesilla", "Ascensor", "Escalera Mecánica", "Cinta Transportadora"],
    "Instrumentos": ["Piano", "Guitarra", "Violín", "Batería", "Flauta", "Saxofón", "Trompeta", "Harpa", "Acordeón", "Clarinete", "Cello", "Banjo", "Armónica", "Xilófono", "Órgano", "Bajo", "Ukelele", "Mandolina", "Oboe", "Fagot", "Trombón", "Tuba", "Corno", "Gaita", "Sitar", "Laúd", "Lira", "Cítara", "Timbales", "Bongo", "Conga", "Maracas", "Claves", "Güiro", "Castañuelas", "Pandereta", "Triángulo", "Platillos", "Gong", "Campana", "Xilófono", "Vibráfono", "Marimba", "Sintetizador", "Teclado", "Theremin", "Didgeridoo", "Djembe", "Cajón", "Kalimba"],
    "Lugares": ["Playa", "Montaña", "Bosque", "Desierto", "Ciudad", "Campo", "Lago", "Río", "Parque", "Mercado", "Hospital", "Escuela", "Biblioteca", "Museo", "Restaurante", "Cine", "Teatro", "Estadio", "Gimnasio", "Piscina", "Zoo", "Acuario", "Circo", "Feria", "Hotel", "Aeropuerto", "Estación", "Puerto", "Farmacia", "Supermercado", "Tienda", "Centro Comercial", "Iglesia", "Catedral", "Mezquita", "Sinagoga", "Templo", "Cementerio", "Castillo", "Palacio", "Torre", "Puente", "Túnel", "Cueva", "Isla", "Volcán", "Cascada", "Acantilado", "Jardín", "Plaza"],
    "Tecnología": ["Smartphone", "Tablet", "Laptop", "Robot", "Drone", "Smartwatch", "Auriculares", "Cámara", "Televisor", "Consola", "Router", "Impresora", "Micrófono", "Proyector", "GPS", "Ratón", "Teclado", "Monitor", "Altavoz", "Webcam", "Scanner", "Disco Duro", "USB", "Tarjeta SD", "Batería", "Cargador", "Cable", "Enchufe", "Interruptor", "Bombilla", "Satélite", "Antena", "Radar", "Telescopio", "Microscopio", "Termómetro", "Calculadora", "Reloj Digital", "Alarma", "Sensores", "Domo", "Servidor", "Nube", "Wifi", "Bluetooth", "NFC", "Código QR", "Realidad Virtual", "Inteligencia Artificial", "Internet"],
    "Ropa": ["Camisa", "Pantalón", "Vestido", "Zapatos", "Sombrero", "Chaqueta", "Falda", "Camiseta", "Jeans", "Botas", "Calcetines", "Guantes", "Bufanda", "Corbata", "Suéter", "Abrigo", "Chaleco", "Sudadera", "Chándal", "Bañador", "Bikini", "Ropa Interior", "Pijama", "Bata", "Zapatillas", "Sandalias", "Chanclas", "Tacones", "Mocasines", "Botines", "Gorra", "Boina", "Casco", "Cinturón", "Tirantes", "Gemelos", "Pañuelo", "Chal", "Poncho", "Capa", "Uniforme", "Disfraz", "Kimono", "Sari", "Túnica", "Toga", "Delantal", "Impermeable", "Medias", "Leggings"],
    "Hogar": ["Sofá", "Cama", "Cocina", "Baño", "Televisión", "Refrigerador", "Horno", "Lavadora", "Aspiradora", "Microondas", "Cafetera", "Tostadora", "Plancha", "Ventilador", "Calefacción", "Aire Acondicionado", "Estufa", "Chimenea", "Radiador", "Lavavajillas", "Secadora", "Licuadora", "Batidora", "Exprimidor", "Hervidor", "Olla Arrocera", "Freidora", "Parrilla", "Barbacoa", "Cubo Basura", "Escoba", "Recogedor", "Fregona", "Cubo", "Trapo", "Esponja", "Detergente", "Suavizante", "Lejía", "Ambientador", "Vela", "Incienso", "Cuadro", "Foto", "Jarrón", "Maceta", "Alfombra", "Cortina", "Persiana", "Cojín", "Manta", "Sábana", "Almohada", "Colchón"],
    "Naturaleza": ["Sol", "Luna", "Estrella", "Nube", "Lluvia", "Viento", "Nieve", "Arcoíris", "Volcán", "Terremoto", "Huracán", "Tornado", "Eclipse", "Aurora", "Relámpago", "Trueno", "Granizo", "Niebla", "Rocío", "Escarcha", "Hielo", "Fuego", "Humo", "Ceniza", "Lava", "Magma", "Géiser", "Manantial", "Cascada", "Río", "Lago", "Mar", "Océano", "Ola", "Marea", "Corriente", "Remolino", "Tsunami", "Inundación", "Sequía", "Desierto", "Duna", "Oasis", "Bosque", "Selva", "Jungla", "Sabana", "Tundra", "Glaciar", "Iceberg"]
};

let players = [];
let currentPlayerIndex = 0;
let gameRoles = [];
let secretWord = "";
let selectedCategory = "";
let gameStarted = false;

// Inicializar la aplicación
function init() {
    loadCategories();
    updateStartButton();

    // Cargar preferencia de modo oscuro
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    if (savedDarkMode) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeBtn').textContent = '☀️';
    }

    document.getElementById('percentageMode').addEventListener('change', function () {
        document.getElementById('probabilityInfo').classList.toggle('hidden', !this.checked);
    });

    document.getElementById('randomCategoryMode').addEventListener('change', function () {
        const isChecked = this.checked;
        const categorySelect = document.getElementById('category');
        document.getElementById('randomCategoryInfo').classList.toggle('hidden', !isChecked);

        // Deshabilitar selección manual cuando está activo el modo aleatorio
        categorySelect.disabled = isChecked;

        // Si se activa el modo aleatorio, también activar automáticamente el modo de ayuda al espía si está disponible
        if (isChecked) {
            categorySelect.style.opacity = '0.5';
        } else {
            categorySelect.style.opacity = '1';
            // Desactivar el modo de ayuda al espía si se desactiva el aleatorio
            const spyHelpMode = document.getElementById('spyHelpMode');
            if (spyHelpMode.checked) {
                spyHelpMode.checked = false;
                document.getElementById('spyHelpInfo').classList.add('hidden');
            }
        }
    });

    document.getElementById('spyHelpMode').addEventListener('change', function () {
        const isChecked = this.checked;
        document.getElementById('spyHelpInfo').classList.toggle('hidden', !isChecked);

        // Si se activa el modo de ayuda al espía, activar automáticamente categoría aleatoria
        if (isChecked) {
            const randomMode = document.getElementById('randomCategoryMode');
            if (!randomMode.checked) {
                randomMode.checked = true;
                document.getElementById('randomCategoryInfo').classList.remove('hidden');
                document.getElementById('category').disabled = true;
                document.getElementById('category').style.opacity = '0.5';
            }
        }
    });

    document.getElementById('spiesKnowEachOtherMode').addEventListener('change', function () {
        document.getElementById('spiesKnowEachOtherInfo').classList.toggle('hidden', !this.checked);
    });

    document.getElementById('editorMode').addEventListener('change', toggleEditorMode);
}

// Toggle modo oscuro
function toggleDarkMode() {
    const body = document.body;
    const btn = document.getElementById('darkModeBtn');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        btn.textContent = '☀️';
        localStorage.setItem('darkMode', 'true');
    } else {
        btn.textContent = '🌙';
        localStorage.setItem('darkMode', 'false');
    }
}

// Cargar categorías en el select y mostrar solo nombres
function loadCategories() {
    const categorySelect = document.getElementById('category');
    const existingCategorySelect = document.getElementById('existingCategory');
    const editCategorySelect = document.getElementById('editCategory');
    const categoriesDisplay = document.getElementById('categoriesDisplay');

    categorySelect.innerHTML = '';
    existingCategorySelect.innerHTML = '';
    editCategorySelect.innerHTML = '';
    categoriesDisplay.innerHTML = '';

    const isEditorMode = document.getElementById('editorMode').checked;

    for (const [categoryName, words] of Object.entries(categories)) {
        // Agregar al select del juego
        const option = document.createElement('option');
        option.value = categoryName;
        option.textContent = `${categoryName} (${words.length} palabras)`;
        categorySelect.appendChild(option);

        // Agregar al select de categorías existentes
        const existingOption = document.createElement('option');
        existingOption.value = categoryName;
        existingOption.textContent = categoryName;
        existingCategorySelect.appendChild(existingOption);

        // Agregar al select de edición
        const editOption = document.createElement('option');
        editOption.value = categoryName;
        editOption.textContent = categoryName;
        editCategorySelect.appendChild(editOption);

        // Mostrar solo el nombre de la categoría (sin las palabras)
        const categoryItem = document.createElement('div');
        categoryItem.className = 'category-simple-item';
        categoryItem.innerHTML = `
                    <span>${categoryName} (${words.length} palabras)</span>
                    <button class="delete-category-btn" onclick="deleteCategory('${categoryName}')">Eliminar</button>
                `;
        categoriesDisplay.appendChild(categoryItem);
    }

    // Actualizar la clase del contenedor según el modo editor
    const container = document.querySelector('.categories-section');
    if (isEditorMode) {
        container.classList.add('editor-mode');
    } else {
        container.classList.remove('editor-mode');
    }
}

// Mostrar/ocultar palabras de una categoría para edición
function showCategoryWords() {
    const categoryName = document.getElementById('editCategory').value;
    const wordEditSection = document.getElementById('wordEditSection');
    const wordsList = document.getElementById('wordsList');
    const editWordsTextarea = document.getElementById('editWords');

    if (!categoryName) return;

    const words = categories[categoryName];

    // Mostrar palabras como tags editables
    wordsList.innerHTML = '';
    words.forEach((word, index) => {
        const wordTag = document.createElement('div');
        wordTag.className = 'word-edit-tag';
        wordTag.innerHTML = `
                    <span>${word}</span>
                    <button class="word-delete-btn" onclick="deleteWord('${categoryName}', ${index})">×</button>
                `;
        wordsList.appendChild(wordTag);
    });

    // Llenar el textarea con las palabras para edición completa
    editWordsTextarea.value = words.join(', ');

    // Mostrar la sección de edición
    wordEditSection.classList.remove('hidden');
}

// Eliminar una palabra específica
function deleteWord(categoryName, wordIndex) {
    if (categories[categoryName].length <= 3) {
        alert('Una categoría debe tener al menos 3 palabras.');
        return;
    }

    categories[categoryName].splice(wordIndex, 1);
    showCategoryWords(); // Recargar la vista
    loadCategories(); // Actualizar contadores
}

// Guardar palabras editadas
function saveEditedWords() {
    const categoryName = document.getElementById('editCategory').value;
    const editedWordsText = document.getElementById('editWords').value.trim();

    if (!editedWordsText) {
        alert('No puedes dejar una categoría vacía.');
        return;
    }

    const newWords = editedWordsText.split(',').map(word => word.trim()).filter(word => word.length > 0);

    if (newWords.length < 3) {
        alert('Una categoría debe tener al menos 3 palabras.');
        return;
    }

    // Actualizar las palabras
    categories[categoryName] = [...new Set(newWords)]; // Eliminar duplicados

    // Recargar vistas
    showCategoryWords();
    loadCategories();

    alert(`Categoría "${categoryName}" actualizada con ${categories[categoryName].length} palabras.`);
}

// Toggle del modo editor
function toggleEditorMode() {
    const editorMode = document.getElementById('editorMode').checked;
    const editorSections = document.getElementById('editorSections');

    if (editorMode) {
        editorSections.classList.remove('hidden');
    } else {
        editorSections.classList.add('hidden');
        // Ocultar también la sección de edición de palabras
        document.getElementById('wordEditSection').classList.add('hidden');
    }

    loadCategories(); // Recargar para mostrar/ocultar botones de eliminar
}

// Agregar nueva categoría
function addNewCategory() {
    const categoryName = document.getElementById('newCategoryName').value.trim();
    const wordsText = document.getElementById('newCategoryWords').value.trim();

    if (!categoryName || !wordsText) {
        alert('Por favor completa el nombre de la categoría y las palabras.');
        return;
    }

    if (categories[categoryName]) {
        alert('Esta categoría ya existe. Usa la sección "Agregar Palabras" para añadir más palabras.');
        return;
    }

    // Procesar las palabras
    const words = wordsText.split(',').map(word => word.trim()).filter(word => word.length > 0);

    if (words.length === 0) {
        alert('Debes agregar al menos una palabra.');
        return;
    }

    // Agregar la nueva categoría
    categories[categoryName] = words;

    // Limpiar campos
    document.getElementById('newCategoryName').value = '';
    document.getElementById('newCategoryWords').value = '';

    // Recargar la interfaz
    loadCategories();

    alert(`Categoría "${categoryName}" agregada con ${words.length} palabras.`);
}

// Agregar palabras a categoría existente
function addWordsToCategory() {
    const categoryName = document.getElementById('existingCategory').value;
    const wordsText = document.getElementById('newWords').value.trim();

    if (!categoryName || !wordsText) {
        alert('Por favor selecciona una categoría y agrega las palabras.');
        return;
    }

    // Procesar las nuevas palabras
    const newWords = wordsText.split(',').map(word => word.trim()).filter(word => word.length > 0);

    if (newWords.length === 0) {
        alert('Debes agregar al menos una palabra.');
        return;
    }

    // Filtrar palabras que no existan ya
    const uniqueNewWords = newWords.filter(word => !categories[categoryName].includes(word));

    if (uniqueNewWords.length === 0) {
        alert('Todas las palabras ya existen en esta categoría.');
        return;
    }

    // Agregar las nuevas palabras
    categories[categoryName].push(...uniqueNewWords);

    // Limpiar campo
    document.getElementById('newWords').value = '';

    // Recargar la interfaz
    loadCategories();

    alert(`${uniqueNewWords.length} palabras agregadas a "${categoryName}".`);
}

// Eliminar categoría
function deleteCategory(categoryName) {
    // No permitir eliminar si es la única categoría o hay muy pocas
    if (Object.keys(categories).length <= 3) {
        alert('No puedes eliminar esta categoría. Debe haber al menos 3 categorías disponibles.');
        return;
    }

    if (confirm(`¿Estás seguro de que quieres eliminar la categoría "${categoryName}"?`)) {
        delete categories[categoryName];
        loadCategories();
        alert(`Categoría "${categoryName}" eliminada.`);
    }
}

// Agregar jugador
function addPlayer() {
    const playerNameInput = document.getElementById('playerName');
    const name = playerNameInput.value.trim();

    if (name && !players.includes(name)) {
        players.push(name);
        playerNameInput.value = '';
        updatePlayersList();
        updateStartButton();
    }
}

// Actualizar lista de jugadores
function updatePlayersList() {
    const playersList = document.getElementById('playersList');
    playersList.innerHTML = '';

    players.forEach((player, index) => {
        const playerItem = document.createElement('div');
        playerItem.className = 'player-item';
        playerItem.innerHTML = `
                    <span>${player}</span>
                    <button class="remove-btn" onclick="removePlayer(${index})">Eliminar</button>
                `;
        playersList.appendChild(playerItem);
    });
}

// Eliminar jugador
function removePlayer(index) {
    players.splice(index, 1);
    updatePlayersList();
    updateStartButton();
}

// Actualizar estado del botón de inicio
function updateStartButton() {
    const startBtn = document.getElementById('startBtn');
    startBtn.disabled = players.length < 3;
}

// Iniciar juego
function startGame() {
    const spyCount = parseInt(document.getElementById('spyCount').value);
    const percentageMode = document.getElementById('percentageMode').checked;
    const randomCategoryMode = document.getElementById('randomCategoryMode').checked;
    const spyHelpMode = document.getElementById('spyHelpMode').checked;
    const spiesKnowEachOtherMode = document.getElementById('spiesKnowEachOtherMode').checked;

    // Seleccionar categoría
    if (randomCategoryMode) {
        // Seleccionar categoría aleatoria
        const categoryNames = Object.keys(categories);
        selectedCategory = categoryNames[Math.floor(Math.random() * categoryNames.length)];
    } else {
        selectedCategory = document.getElementById('category').value;
    }

    // Seleccionar palabra secreta aleatoria de la categoría
    const categoryWords = categories[selectedCategory];
    secretWord = categoryWords[Math.floor(Math.random() * categoryWords.length)];

    // Determinar roles
    let finalSpyCount = spyCount;

    if (percentageMode) {
        const random = Math.random() * 100;

        // Nueva lógica simple y directa: 10% todos espías, 90% normal
        if (random < 10) {
            finalSpyCount = players.length; // 10% todos espías
        } else {
            finalSpyCount = spyCount; // 90% configuración manual
        }
    }

    // Crear array de roles
    gameRoles = new Array(players.length).fill('agent');

    // Asignar espías aleatoriamente
    if (finalSpyCount > 0 && finalSpyCount < players.length) {
        const spyIndices = [];
        while (spyIndices.length < finalSpyCount) {
            const randomIndex = Math.floor(Math.random() * players.length);
            if (!spyIndices.includes(randomIndex)) {
                spyIndices.push(randomIndex);
            }
        }
        spyIndices.forEach(index => {
            gameRoles[index] = 'spy';
        });
    } else if (finalSpyCount === players.length) {
        gameRoles.fill('spy');
    }



    currentPlayerIndex = 0;
    gameStarted = true;

    document.getElementById('setup').classList.add('hidden');
    document.getElementById('game').classList.remove('hidden');

    // Mostrar pantalla intermedia para el primer jugador
    showCurrentPlayer();
}

// Mostrar jugador actual
function showCurrentPlayer() {
    // Mostrar pantalla intermedia
    document.getElementById('intermediateScreen').classList.remove('hidden');
    document.getElementById('roleScreen').classList.add('hidden');

    // Configurar el nombre del siguiente jugador
    const nextPlayerName = players[currentPlayerIndex];
    document.getElementById('nextPlayerName').textContent = `Turno de: ${nextPlayerName}`;
}

// Mostrar el rol del jugador actual
function showRole() {
    const player = players[currentPlayerIndex];
    const role = gameRoles[currentPlayerIndex];
    const spyHelpMode = document.getElementById('spyHelpMode').checked;
    const randomCategoryMode = document.getElementById('randomCategoryMode').checked;
    const spiesKnowEachOtherMode = document.getElementById('spiesKnowEachOtherMode').checked;

    // Ocultar pantalla intermedia y mostrar rol
    document.getElementById('intermediateScreen').classList.add('hidden');
    document.getElementById('roleScreen').classList.remove('hidden');

    // Configurar la información del rol
    document.getElementById('playerNameDisplay').textContent = player;

    const roleCard = document.getElementById('roleCard');
    const roleDisplay = document.getElementById('roleDisplay');
    const wordDisplay = document.getElementById('wordDisplay');
    const instructionDisplay = document.getElementById('instructionDisplay');

    if (role === 'spy') {
        roleCard.className = 'role-card spy-card';
        roleDisplay.textContent = '🕵️ ERES EL ESPÍA';

        let baseInstruction = 'Tu objetivo es descubrir la palabra secreta y pasar desapercibido.';

        // En modo de ayuda al espía, mostrar la categoría
        if (spyHelpMode) {
            wordDisplay.innerHTML = `📁 CATEGORÍA: ${selectedCategory}<br>❓ PALABRA DESCONOCIDA`;
            baseInstruction = 'Sabes la categoría pero no la palabra exacta. ' + baseInstruction;
        } else {
            wordDisplay.textContent = '❓ PALABRA DESCONOCIDA';
        }

        // Si el modo "los espías se conocen" está activo
        if (spiesKnowEachOtherMode) {
            const otherSpies = players.filter((p, index) => gameRoles[index] === 'spy' && p !== player);
            if (otherSpies.length > 0) {
                baseInstruction += `\n\nTus compañeros espías son: ${otherSpies.join(', ')}.`;
            } else {
                baseInstruction += `\n\nEstás trabajando solo en esta misión.`;
            }
        }

        instructionDisplay.textContent = baseInstruction;

    } else {
        roleCard.className = 'role-card agent-card';
        roleDisplay.textContent = '👮 ERES UN AGENTE';

        // Mostrar información según el modo
        if (randomCategoryMode) {
            // En modo categoría aleatoria, no mostrar la categoría a los agentes
            wordDisplay.textContent = `🎯 ${secretWord}`;
            instructionDisplay.textContent = 'Tu objetivo es encontrar al espía sin revelar la palabra. (Categoría oculta)';
        } else {
            wordDisplay.innerHTML = `📁 ${selectedCategory}<br>🎯 ${secretWord}`;
            instructionDisplay.textContent = 'Tu objetivo es encontrar al espía sin revelar la palabra.';
        }
    }

    // Mostrar botones apropiados
    if (currentPlayerIndex === players.length - 1) {
        document.getElementById('nextBtn').classList.add('hidden');
        document.getElementById('endBtn').classList.remove('hidden');
    } else {
        document.getElementById('nextBtn').classList.remove('hidden');
        document.getElementById('endBtn').classList.add('hidden');
    }
}

// Siguiente jugador
function nextPlayer() {
    currentPlayerIndex++;
    showCurrentPlayer();
}

// Finalizar distribución y pasar a juego
function endGame() {
    document.getElementById('roleScreen').classList.add('hidden');
    document.getElementById('gameplayScreen').classList.remove('hidden');
}

// Mostrar resultados y reiniciar
function showResults() {
    const spyHelpMode = document.getElementById('spyHelpMode').checked;
    const randomCategoryMode = document.getElementById('randomCategoryMode').checked;

    let message = `🎮 INFORMACIÓN DEL JUEGO\n\n`;
    message += `🎯 Palabra secreta: ${secretWord}\n`;

    if (randomCategoryMode) {
        message += `📁 Categoría (oculta): ${selectedCategory}\n`;
    } else {
        message += `📁 Categoría: ${selectedCategory}\n`;
    }

    message += `\n👥 ROLES:\n`;
    players.forEach((player, index) => {
        const role = gameRoles[index];
        const emoji = role === 'spy' ? '🕵️' : '👮';
        const roleName = role === 'spy' ? 'ESPÍA' : 'AGENTE';
        message += `${emoji} ${player}: ${roleName}\n`;
    });

    if (spyHelpMode) {
        message += `\n💡 Los espías conocían la categoría pero no la palabra exacta.`;
    }

    message += `\n\n¡Discutan entre ustedes para determinar quién ganó!`;

    alert(message);

    // Reiniciar juego
    gameStarted = false;
    currentPlayerIndex = 0;
    gameRoles = [];
    secretWord = "";
    selectedCategory = "";

    // Rehabilitar el selector de categoría
    const categorySelect = document.getElementById('category');
    categorySelect.disabled = false;
    categorySelect.style.opacity = '1';

    // Ocultar pantalla de juego
    document.getElementById('gameplayScreen').classList.add('hidden');

    document.getElementById('setup').classList.remove('hidden');
    document.getElementById('game').classList.add('hidden');
}

// Permitir Enter en el input de nombre
document.addEventListener('DOMContentLoaded', function () {
    init();

    document.getElementById('playerName').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            addPlayer();
        }
    });
});
