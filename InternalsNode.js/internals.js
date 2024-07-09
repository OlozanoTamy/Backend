//COncurrencias
//Modelos de Concurrencia


//Es importante estructurar el codigo para aprovechar la concurrencia
//Conocer el modelo de concurrencia adecuado para el problema
//Aprovechar las tecnologias que facilitan la concurencia


//¿Que es la concurrencia?
//TRATAR con varias cosas a la 'vez'
//Composcicion de procesos independientes para realizar una tarea
//Proceso == codigo de ejecucion
//Desaclopar lo que sucede de cuando sucede


//Ejemplo hacer una pizza
//Hacer masa - rayar queso - hacer la salsa
//Se puede hacer de manera paralela y estos procesos se pudieron hacer antes

//Jugar 8 partidas de ajedrez
//Juagar uno y seguir con el otro


//Sistemas operativos multiproceso ->antes solo tenia un solo core y un hilo



//La concurrencia depende de como se diseña el software

//Time - slicing

//Node JS -> Runtime de los navegadores

//Servidores HTTP- ENGINEX

//Diseñar el software como una serie de procesos independientes para ser ejecutados cuando el desarrollador quiera

//Modelos de concurrencias

//-> Memoria y Computo -> Se debe manejar muy bien

//Thread entre ellos comparten memoria != los procesos tienen memoria independiente

//LOs Thread consumen menos memoria son un poco mas eficientes



//Locks , Mutex y semaforos

//Bloquean espacios de memoria para que otros que no la usen
//Un thread dice voy a ocupar un espacio de memoria
//Bloqueo de Memoria mutuo -> Son dificiles de tratar -> cuando hay threads concurrentes
//PAso de mensajes -> Deno
//Communicating Sequential Procesess
//Actores -> Especializacion de paso de mensajes

//Como no peliarse por memoria

//Futuros

//Ejecucion de codigo concurrente: Threads


//Futuros -> Promesa -- Callbacks

//Evolucion -> Async / Await una manera mas natural de tratar con los futuros
//Hace que el codigo parezca secuencial

//La diferencia es que con Async el codigo es mas legible y facil de leer
//Async -> le dice que algo va a pasar Await -> Esperar que algo pase


//Mensajes



//Que es el paralelismo -> Tiene que ver directamente con las procesos
//Hacer varias cosas a la vez
//Ejecucion simultanea de procesos que pueden estar relacionados o no
//GPU's o Cluster de Computadores


//Concurrencia (Cortar un programa en partes que se puedan ejecutar cuando yo quiera) > Paralelismo

//Concurrencia + paralelismo = BIEN

//Que tecnologias aprovencha la concurrencia

//NodeJS
//Modelo Concurrente -> Sin profundizar en threads

//GO -> Hacer procesos concurrentes de manera mas sencilla usa -> CSP
//Soporta mutes , semaforos

//Elixir -> agendar los procesos

//Modelos de actores -> Arboles de gestion si hay fallos el programa continua apesar
//Concurrencia para lograr resiliencia

//Procesos concurrentes -> el ejecutor es el mismo y se hace antes o si tiene alguien que le ayude lo reparte
//Ingreso a un plaforma y pedir datos de acceso


//NODE JS ¿cOMO FUNCIONA Y POR QUE EXISTE

//Permite manejar los procesos de manera eficiente


//Quiero atender a 10k clientes de maneras simultaneos, que tecnicas puedo usar?
//Levanto 10000 procesos ? Recursos computacionales
//Levanto 10000 threads ?
//Corro un solo proceso y les pido a los demas que esperen
//Limitado por procesamiento ¿Que es eso?
//LImitado por entrada/salida ¿CP bound , Ai bound? la mayoria son limitadas por la entrada y salida

//LImitado por procesamiento -> GPT


//Patron React --> Event Loop -> un solo hilo con una cola de procesos

//Libebent -> SIstemas Unix