const PAQUETE_BASE = [];
const PAQUETE_VIVIR_SOBRIO = [];
const PAQUETE_SEMANA_PADRES = [];
const PAQUETE_PADRES_EXTRA = [];

function crearTemaPadres(config) {
  return {
    estado: 'Completo',
    fuentePrincipal: 'FGDLL',
    librosRecomendados: [],
    advertenciaEtica: 'Tema familiar sensible: cuidar que el testimonio no derive en catarsis desordenada, juicios contra familiares ni exposición de terceros.',
    advertenciaLider: 'Orientar el compartimiento hacia experiencia propia, detectar, admitir y corregir; evitar culpar a padres, pareja o hijos.',
    noUsarPara: ['Juzgar a terceros', 'Improvisar catarsis', 'Exponer intimidad familiar'],
    esCatalogoBase: false,
    relacionados: [],
    autor: 'FGDLL',
    fechaCreacion: '2026-06-09',
    ...config
  };
}

function crearTemaDiaPadre(config) {
  const tituloCorto = config.titulo.replace('Soy papá y estoy aprendiendo a ', '');
  return crearTemaPadres({
    id: config.id,
    titulo: config.titulo,
    categoria: 'Día del Padre',
    evento: ['Día del Padre', 'Semana de los Padres', 'Compartimiento familiar'],
    publico: ['Padres', 'Hijos', 'Familias', 'Participantes'],
    sensibilidad: 'sensible',
    intensidad: config.intensidad || 'Media',
    momento: config.momento || 'Mitad',
    formato: config.formato || 'Individual',
    tipoTestimonio: config.tipoTestimonio || 'Inspirador',
    tituloCorto: tituloCorto.charAt(0).toUpperCase() + tituloCorto.slice(1),
    etiquetas: ['padre', 'familia', ...config.etiquetas],
    pasos: config.pasos,
    tradiciones: config.tradiciones || [],
    conceptos: config.conceptos,
    fuenteAA: [{ obra: config.baseAA, referencia: config.referenciaAA || 'Tema de Día del Padre', uso: 'Base doctrinal para ordenar el testimonio en detectar, admitir y corregir' }],
    fuenteFGDLL: [{ obra: 'Guía de Apadrinamiento FGDLL', seccion: config.baseFGDLL, uso: 'Marco formativo para mirar la propia parte y reparar con hechos' }],
    objetivo: config.objetivo,
    fraseAncla: config.fraseAncla,
    guiaTestimonio: {
      detectar: [...config.detectar, '¿Qué efecto concreto tenía esto en mi familia antes del programa?'],
      admitir: [...config.admitir, '¿Qué verdad tuve que admitir sin justificarme al llegar a Guerreros?'],
      corregir: [...config.corregir, '¿Qué acción visible estoy practicando hoy para corregir con hechos?']
    },
    emocion: config.emocion,
    defectoCaracter: config.defectoCaracter,
    virtudPrincipal: config.virtudPrincipal,
    variaciones: config.variaciones,
    palabrasClave: config.palabrasClave,
    prioridad: config.prioridad
  });
}

const PAQUETE_DIA_PADRE = [
  crearTemaDiaPadre({
    id: 'tema-dia-padre-001',
    titulo: 'Soy papá y estoy aprendiendo a estar presente',
    baseAA: 'Libro Azul y Doce Pasos',
    referenciaAA: 'Pasos 4, 5, 8, 9 y 10',
    baseFGDLL: 'Instinto emocional, familia desligada, reparación de daños',
    etiquetas: ['presencia', 'responsabilidad', 'reparacion', 'paso-10-reflexion'],
    pasos: ['Paso 4', 'Paso 5', 'Paso 8', 'Paso 9', 'Paso 10'],
    conceptos: ['Presencia afectiva', 'Reparación de ausencia emocional'],
    objetivo: 'Preparar un testimonio sobre presencia paterna real, más allá de proveer o estar físicamente.',
    fraseAncla: 'Estoy aprendiendo a estar sin controlar, sin huir y sin imponer.',
    detectar: ['¿Cómo confundía proveer con estar presente?', '¿Qué heridas o fugas me impedían mirar a mis hijos con atención real?'],
    admitir: ['¿Qué me dolió admitir sobre mi ausencia emocional?', '¿Qué escuché que me confrontó como padre?'],
    corregir: ['¿Cómo estoy aprendiendo a estar sin controlar, sin huir y sin imponer?', '¿Qué acciones concretas estoy corrigiendo con mis hijos?'],
    emocion: ['Culpa', 'Tristeza'], defectoCaracter: ['Aislamiento'], virtudPrincipal: ['Presencia', 'Responsabilidad'],
    variaciones: ['Estar de verdad', 'Presencia que repara'], palabrasClave: ['presencia', 'padre', 'hijos'], prioridad: 95
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-002',
    titulo: 'Soy papá y estoy aprendiendo a pedir perdón sin justificarme',
    baseAA: 'Libro Azul y Doce Pasos',
    referenciaAA: 'Pasos 4, 5, 8 y 9',
    baseFGDLL: 'Cuatro niveles del perdón, cadena de daños, responsabilidad sin culpa',
    etiquetas: ['perdón', 'responsabilidad', 'reparacion', 'humildad', 'paso-9-enmiendas'],
    pasos: ['Paso 4', 'Paso 5', 'Paso 8', 'Paso 9'],
    conceptos: ['Perdón sin manipulación', 'Reparación humilde'],
    objetivo: 'Ordenar la experiencia de pedir perdón sin justificar daños ni exigir respuesta inmediata.',
    fraseAncla: 'Estoy aprendiendo a pedir perdón sin manipular.',
    detectar: ['¿Cómo me justificaba cuando lastimaba?', '¿Qué frases usaba para no reconocer mis daños?'],
    admitir: ['¿Qué me costó admitir sobre mis palabras, gritos, silencios o abandonos?', '¿Qué daño vi con más claridad?'],
    corregir: ['¿Cómo estoy aprendiendo a pedir perdón sin manipular?', '¿Qué reparación me toca hacer desde la humildad?'],
    emocion: ['Culpa', 'Vergüenza'], defectoCaracter: ['Justificación', 'Orgullo'], virtudPrincipal: ['Humildad', 'Integridad'],
    variaciones: ['Perdón sin excusas', 'Disculpa con reparación'], palabrasClave: ['perdon', 'justificar', 'reparacion'], prioridad: 94
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-003',
    titulo: 'Soy papá y estoy aprendiendo a no repetir la historia de mi padre',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 4, 5, 6 y 7',
    baseFGDLL: 'Cadena de daños, tipos de familia, defectos de carácter',
    etiquetas: ['infancia', 'cambio', 'responsabilidad', 'paso-4-inventario', 'paso-6-disposicion'],
    pasos: ['Paso 4', 'Paso 5', 'Paso 6', 'Paso 7'],
    conceptos: ['Patrones heredados', 'Nueva cadena de amor'],
    objetivo: 'Ayudar al padre a reconocer patrones heredados y decidir detenerlos con acciones presentes.',
    fraseAncla: 'Estoy construyendo una nueva cadena de amor.',
    detectar: ['¿Qué juré no repetir y aun así repetí?', '¿Qué conducta heredada apareció en mi forma de ser padre?'],
    admitir: ['¿Qué entendí sobre mi historia familiar?', '¿Qué resentimiento empecé a mirar con responsabilidad?'],
    corregir: ['¿Qué patrón estoy decidiendo detener conmigo?', '¿Cómo estoy construyendo una nueva cadena de amor?'],
    emocion: ['Resentimiento', 'Culpa'], defectoCaracter: ['Repetición', 'Resentimiento'], virtudPrincipal: ['Responsabilidad', 'Valentía'],
    variaciones: ['Romper la cadena', 'No repetir la herida'], palabrasClave: ['historia', 'padre', 'patrones'], prioridad: 93
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-004',
    titulo: 'Soy papá y estoy aprendiendo a hablar sin gritar',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 4, 10 y 11',
    baseFGDLL: 'Ira, tolerancia, emociones nucleares, pausa consciente',
    etiquetas: ['ira', 'tolerancia', 'responsabilidad', 'paso-10-reflexion'],
    pasos: ['Paso 4', 'Paso 10', 'Paso 11'],
    conceptos: ['Pausa consciente', 'Corrección sin destrucción'],
    objetivo: 'Convertir el tema del grito en inventario, pausa y reparación familiar.',
    fraseAncla: 'Estoy aprendiendo a corregir sin destruir.',
    detectar: ['¿Cómo usaba el grito para sentir control?', '¿Qué miedo o frustración había detrás de mi ira?'],
    admitir: ['¿Qué me mostró el grupo sobre mi carácter?', '¿Qué consecuencias vi en mi familia?'],
    corregir: ['¿Cómo practico detenerme antes de reaccionar?', '¿Cómo estoy aprendiendo a corregir sin destruir?'],
    emocion: ['Ira', 'Miedo'], defectoCaracter: ['Impulsividad', 'Control'], virtudPrincipal: ['Tolerancia', 'Prudencia'],
    variaciones: ['Corregir sin gritar', 'Pausa antes del grito'], palabrasClave: ['gritar', 'ira', 'corregir'], prioridad: 92
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-005',
    titulo: 'Soy papá y estoy aprendiendo a escuchar antes de corregir',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 5, 10, 11 y 12',
    baseFGDLL: 'Puente de comprensión, terreno de iguales, servicio sin protagonismo',
    etiquetas: ['escucha', 'humildad', 'servicio', 'relaciones', 'paso-12-servicio'],
    pasos: ['Paso 5', 'Paso 10', 'Paso 11', 'Paso 12'],
    conceptos: ['Escucha antes de corrección', 'Servicio sin protagonismo'],
    objetivo: 'Formar un testimonio sobre escuchar a los hijos antes de imponer correcciones.',
    fraseAncla: 'Estoy aprendiendo a escuchar sin defenderme.',
    detectar: ['¿Cómo interrumpía, imponía o minimizaba lo que mis hijos sentían?', '¿Qué me impedía escuchar?'],
    admitir: ['¿Qué sentí cuando alguien me escuchó sin juzgarme?', '¿Qué descubrí sobre mi necesidad de tener siempre la razón?'],
    corregir: ['¿Cómo estoy aprendiendo a escuchar sin defenderme?', '¿Qué cambia en mi familia cuando dejo de imponer?'],
    emocion: ['Ira', 'Vergüenza'], defectoCaracter: ['Soberbia', 'Impaciencia'], virtudPrincipal: ['Escucha', 'Humildad'],
    variaciones: ['Escuchar primero', 'Corregir después de comprender'], palabrasClave: ['escuchar', 'corregir', 'hijos'], prioridad: 91
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-006',
    titulo: 'Soy papá y estoy aprendiendo a ser firme sin ser violento',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 4, 6, 7 y 10',
    baseFGDLL: 'Ira, soberbia, tolerancia, disciplina amorosa',
    etiquetas: ['liderazgo', 'ira', 'amor', 'humildad', 'paso-7-humildad'],
    pasos: ['Paso 4', 'Paso 6', 'Paso 7', 'Paso 10'],
    conceptos: ['Disciplina amorosa', 'Autoridad sin miedo'],
    objetivo: 'Distinguir firmeza de violencia y ordenar la autoridad paterna desde amor y límites sanos.',
    fraseAncla: 'Estoy aprendiendo a poner límites sin humillar.',
    detectar: ['¿Cómo confundía autoridad con miedo?', '¿Qué daño causé creyendo que estaba “educando”?'],
    admitir: ['¿Qué me costó reconocer sobre mi forma de ejercer autoridad?', '¿Qué defectos de carácter aparecían en mi paternidad?'],
    corregir: ['¿Cómo pongo límites sin humillar?', '¿Cómo practico disciplina amorosa en casa?'],
    emocion: ['Ira', 'Miedo'], defectoCaracter: ['Violencia', 'Soberbia'], virtudPrincipal: ['Firmeza', 'Amor'],
    variaciones: ['Firmeza amorosa', 'Autoridad sin violencia'], palabrasClave: ['firmeza', 'violencia', 'autoridad'], prioridad: 90
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-007',
    titulo: 'Soy papá y estoy aprendiendo a amar sin controlar',
    baseAA: 'Libro Azul y Doce Pasos',
    referenciaAA: 'Pasos 3, 4, 6 y 7',
    baseFGDLL: 'Instinto emocional, codependencia, soberbia, rendición del ego',
    etiquetas: ['amor', 'control-obsesivo', 'codependencia', 'entrega', 'paso-3-entrega'],
    pasos: ['Paso 3', 'Paso 4', 'Paso 6', 'Paso 7'],
    conceptos: ['Amor sin posesión', 'Rendición del control'],
    objetivo: 'Ayudar al padre a detectar control disfrazado de amor y practicar confianza.',
    fraseAncla: 'Estoy aprendiendo a amar sin poseer ni invadir.',
    detectar: ['¿Cómo controlaba a mi familia para sentir seguridad?', '¿Qué miedo había detrás de mi necesidad de mandar?'],
    admitir: ['¿Qué me mostró el programa sobre mi ego?', '¿Qué me costó soltar?'],
    corregir: ['¿Cómo estoy aprendiendo a confiar?', '¿Qué significa amar sin poseer ni invadir?'],
    emocion: ['Miedo', 'Ansiedad'], defectoCaracter: ['Control', 'Soberbia'], virtudPrincipal: ['Confianza', 'Entrega'],
    variaciones: ['Amar sin poseer', 'Soltar el control'], palabrasClave: ['amar', 'control', 'familia'], prioridad: 89
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-008',
    titulo: 'Soy papá y estoy aprendiendo a reparar el daño que causé',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 8 y 9',
    baseFGDLL: 'Reparación de daños, culpa real, humildad, responsabilidad',
    etiquetas: ['reparacion', 'responsabilidad', 'humildad', 'paso-8-reparacion', 'paso-9-enmiendas'],
    pasos: ['Paso 8', 'Paso 9'],
    conceptos: ['Reparación con hechos', 'Culpa transformada en acción'],
    objetivo: 'Guiar un testimonio centrado en reparación concreta, no en remordimiento verbal.',
    fraseAncla: 'Estoy aprendiendo a reparar con hechos, no sólo con palabras.',
    detectar: ['¿Qué daños dejé pendientes?', '¿A quiénes lastimé con mis decisiones, ausencias o excesos?'],
    admitir: ['¿Qué culpa me pesó al mirar mi inventario?', '¿Qué me enseñó el programa sobre reparar?'],
    corregir: ['¿Qué reparaciones estoy dispuesto a hacer?', '¿Cómo reparo con hechos, no sólo con palabras?'],
    emocion: ['Culpa', 'Esperanza'], defectoCaracter: ['Evasión'], virtudPrincipal: ['Humildad', 'Responsabilidad'],
    variaciones: ['Reparar con hechos', 'Daños pendientes'], palabrasClave: ['reparar', 'daño', 'enmienda'], prioridad: 88
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-009',
    titulo: 'Soy papá y estoy aprendiendo a no usar el dinero como sustituto de amor',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 4 y 10',
    baseFGDLL: 'Instinto material, avaricia, generosidad, presencia emocional',
    etiquetas: ['presencia', 'honestidad', 'responsabilidad', 'paso-4-inventario'],
    pasos: ['Paso 4', 'Paso 10'],
    conceptos: ['Presencia emocional', 'Lo material sin esconder el corazón'],
    objetivo: 'Revisar el uso del dinero o regalos como compensación de ausencia afectiva.',
    fraseAncla: 'Estoy aprendiendo a dar tiempo, atención y presencia.',
    detectar: ['¿Cómo intenté compensar mi ausencia con dinero o cosas?', '¿Qué miedo a la carencia gobernaba mi vida?'],
    admitir: ['¿Qué descubrí sobre mi manera de proveer?', '¿Qué me dolió admitir sobre mi ausencia afectiva?'],
    corregir: ['¿Cómo estoy aprendiendo a dar tiempo, atención y presencia?', '¿Cómo uso lo material sin esconder el corazón?'],
    emocion: ['Culpa', 'Miedo'], defectoCaracter: ['Evasión', 'Materialismo'], virtudPrincipal: ['Generosidad', 'Presencia'],
    variaciones: ['Dinero no es presencia', 'Proveer con corazón'], palabrasClave: ['dinero', 'amor', 'presencia'], prioridad: 87
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-010',
    titulo: 'Soy papá y estoy aprendiendo a reconocer mis emociones',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 4, 5 y 10',
    baseFGDLL: 'Miedo, ansias, enojo, tristeza y culpa',
    etiquetas: ['miedo', 'ira', 'tristeza', 'culpa', 'honestidad', 'paso-5-confesion'],
    pasos: ['Paso 4', 'Paso 5', 'Paso 10'],
    conceptos: ['Nombrar emociones antes de actuar', 'Honestidad emocional'],
    objetivo: 'Ayudar al padre a identificar emociones antes de convertirlas en control, enojo o fuga.',
    fraseAncla: 'Estoy aprendiendo a identificar lo que siento antes de actuar.',
    detectar: ['¿Qué emociones negaba o disfrazaba?', '¿Cómo convertía tristeza en enojo, miedo en control o culpa en escape?'],
    admitir: ['¿Qué emoción me costó nombrar?', '¿Qué sentí al escuchar a otros hablar con verdad?'],
    corregir: ['¿Cómo identifico lo que siento antes de actuar?', '¿Qué emoción estoy aprendiendo a expresar sanamente?'],
    emocion: ['Miedo', 'Ira', 'Tristeza', 'Culpa'], defectoCaracter: ['Negación'], virtudPrincipal: ['Honestidad', 'Conciencia'],
    variaciones: ['Nombrar antes de actuar', 'Emociones sin fuga'], palabrasClave: ['emociones', 'miedo', 'culpa'], prioridad: 86
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-011',
    titulo: 'Soy papá y estoy aprendiendo a no cargar a mis hijos con mis frustraciones',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 4, 5 y 10',
    baseFGDLL: 'Desplazamiento, familia centrada en los hijos, responsabilidad emocional',
    etiquetas: ['hijos', 'responsabilidad', 'frustracion', 'paso-10-reflexion'],
    pasos: ['Paso 4', 'Paso 5', 'Paso 10'],
    conceptos: ['Responsabilidad emocional', 'No desplazar frustraciones'],
    objetivo: 'Detectar cómo se descargan heridas y frustraciones adultas sobre los hijos.',
    fraseAncla: 'Estoy aprendiendo a asumir mi carga sin pasársela a mis hijos.',
    detectar: ['¿Cómo descargaba mis problemas sobre mi familia?', '¿Qué expectativas injustas puse sobre mis hijos?'],
    admitir: ['¿Qué me dolió admitir sobre mi inmadurez emocional?', '¿Qué vi en mi inventario?'],
    corregir: ['¿Cómo separo mis heridas de la vida de mis hijos?', '¿Cómo asumo mi carga sin pasársela a ellos?'],
    emocion: ['Frustración', 'Culpa'], defectoCaracter: ['Desplazamiento'], virtudPrincipal: ['Responsabilidad', 'Madurez'],
    variaciones: ['No pasar mi carga', 'Frustraciones sin descarga'], palabrasClave: ['frustraciones', 'hijos', 'responsabilidad'], prioridad: 85
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-012',
    titulo: 'Soy papá y estoy aprendiendo a dejar de ser juez en mi casa',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 4, 6 y 7',
    baseFGDLL: 'Soberbia, humildad, familia rígida, terreno de iguales',
    etiquetas: ['humildad', 'relaciones', 'respeto', 'paso-7-humildad'],
    pasos: ['Paso 4', 'Paso 6', 'Paso 7'],
    conceptos: ['Humildad familiar', 'Corregir sin superioridad'],
    objetivo: 'Transformar juicio, crítica y comparación en humildad y corrección responsable.',
    fraseAncla: 'Estoy aprendiendo a corregir sin sentirme dueño de la verdad.',
    detectar: ['¿Cómo juzgaba, criticaba o comparaba?', '¿Qué necesidad de superioridad escondía mi inseguridad?'],
    admitir: ['¿Qué me confrontó sobre mi soberbia?', '¿Qué aprendí al verme igual que los demás?'],
    corregir: ['¿Cómo practico humildad con mi familia?', '¿Cómo corrijo sin sentirme dueño de la verdad?'],
    emocion: ['Ira', 'Vergüenza'], defectoCaracter: ['Soberbia', 'Juicio'], virtudPrincipal: ['Humildad', 'Respeto'],
    variaciones: ['De juez a padre', 'Corregir sin soberbia'], palabrasClave: ['juez', 'soberbia', 'humildad'], prioridad: 84
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-013',
    titulo: 'Soy papá y estoy aprendiendo a romper mi silencio emocional',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 5, 10 y 11',
    baseFGDLL: 'Familia evitadora, tristeza, duelo congelado, necesidad de hablar',
    etiquetas: ['honestidad', 'tristeza', 'duelo', 'relaciones', 'paso-5-confesion'],
    pasos: ['Paso 5', 'Paso 10', 'Paso 11'],
    conceptos: ['Hablar desde la verdad', 'Romper evasión emocional'],
    objetivo: 'Guiar el testimonio del silencio emocional hacia conversaciones honestas y dignas.',
    fraseAncla: 'Estoy aprendiendo a hablar desde la verdad.',
    detectar: ['¿Qué callaba para no sentir?', '¿Cómo mi silencio lastimó a mi familia?'],
    admitir: ['¿Qué pasó cuando empecé a hablar con honestidad?', '¿Qué miedo apareció al mostrar vulnerabilidad?'],
    corregir: ['¿Cómo estoy aprendiendo a hablar desde la verdad?', '¿Qué conversaciones pendientes necesito enfrentar con dignidad?'],
    emocion: ['Tristeza', 'Miedo'], defectoCaracter: ['Evasión', 'Aislamiento'], virtudPrincipal: ['Honestidad', 'Valentía'],
    variaciones: ['Romper el silencio', 'Hablar con dignidad'], palabrasClave: ['silencio', 'emocional', 'hablar'], prioridad: 83
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-014',
    titulo: 'Soy papá y estoy aprendiendo a no esconderme detrás del trabajo',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 4, 10 y 11',
    baseFGDLL: 'Instinto material, fuga emocional, presencia, equilibrio',
    etiquetas: ['presencia', 'responsabilidad', 'equilibrio', 'paso-10-reflexion'],
    pasos: ['Paso 4', 'Paso 10', 'Paso 11'],
    conceptos: ['Trabajo como fuga', 'Equilibrio entre responsabilidad y presencia'],
    objetivo: 'Detectar cuando el trabajo funciona como refugio para no estar emocionalmente en casa.',
    fraseAncla: 'Estoy aprendiendo a volver a casa de verdad.',
    detectar: ['¿Cómo usaba el trabajo para no llegar a casa emocionalmente?', '¿Qué evitaba sentir?'],
    admitir: ['¿Qué descubrí sobre mis fugas?', '¿Qué me dolió aceptar sobre mi ausencia?'],
    corregir: ['¿Cómo busco equilibrio entre responsabilidad y presencia?', '¿Cómo estoy aprendiendo a volver a casa de verdad?'],
    emocion: ['Culpa', 'Ansiedad'], defectoCaracter: ['Fuga', 'Evasión'], virtudPrincipal: ['Equilibrio', 'Presencia'],
    variaciones: ['Trabajo sin fuga', 'Volver a casa'], palabrasClave: ['trabajo', 'ausencia', 'equilibrio'], prioridad: 82
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-015',
    titulo: 'Soy papá y estoy aprendiendo a dejar de huir cuando me necesitan',
    baseAA: 'Libro Azul y Doce Pasos',
    referenciaAA: 'Pasos 1, 4 y 5',
    baseFGDLL: 'Fuga emocional, miedo, familia desligada, responsabilidad',
    etiquetas: ['miedo', 'responsabilidad', 'confianza', 'paso-1-impotencia'],
    pasos: ['Paso 1', 'Paso 4', 'Paso 5'],
    conceptos: ['Permanecer cuando antes huía', 'Confiabilidad familiar'],
    objetivo: 'Ayudar a hablar de la fuga emocional y del aprendizaje de permanecer disponible.',
    fraseAncla: 'Estoy aprendiendo a permanecer cuando antes me iba.',
    detectar: ['¿De qué formas huía: sustancias, calle, trabajo, celular, silencio, enojo?', '¿Qué sentía cuando mi familia me necesitaba?'],
    admitir: ['¿Qué me mostró el programa sobre mi evasión?', '¿Qué admití sobre mi miedo a comprometerme?'],
    corregir: ['¿Cómo permanezco cuando antes me iba?', '¿Qué significa para mí ser confiable?'],
    emocion: ['Miedo', 'Culpa'], defectoCaracter: ['Evasión', 'Aislamiento'], virtudPrincipal: ['Confianza', 'Responsabilidad'],
    variaciones: ['Permanecer disponible', 'Dejar de huir'], palabrasClave: ['huir', 'miedo', 'confiable'], prioridad: 81
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-016',
    titulo: 'Soy papá y estoy aprendiendo a enseñar con el ejemplo',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 10, 11 y 12',
    baseFGDLL: 'Coherencia, servicio, transmitir el mensaje, responsabilidad',
    etiquetas: ['servicio', 'integridad', 'responsabilidad', 'paso-12-servicio'],
    pasos: ['Paso 10', 'Paso 11', 'Paso 12'],
    conceptos: ['Coherencia', 'Mensaje transmitido con actos'],
    objetivo: 'Centrar el testimonio en coherencia paterna y enseñanza por acciones.',
    fraseAncla: 'Estoy aprendiendo a vivir lo que digo.',
    detectar: ['¿Qué decía pero no practicaba?', '¿Cómo mi doble vida confundía a mi familia?'],
    admitir: ['¿Qué entendí sobre coherencia?', '¿Qué me confrontó al ver a otros servir?'],
    corregir: ['¿Cómo intento vivir lo que digo?', '¿Qué ejemplo quiero dejar desde mis actos?'],
    emocion: ['Vergüenza', 'Esperanza'], defectoCaracter: ['Incoherencia'], virtudPrincipal: ['Integridad', 'Servicio'],
    variaciones: ['Vivir lo que digo', 'Ejemplo con actos'], palabrasClave: ['ejemplo', 'coherencia', 'servicio'], prioridad: 80
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-017',
    titulo: 'Soy papá y estoy aprendiendo a no manipular con culpa',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 4, 6, 7 y 10',
    baseFGDLL: 'Culpa, codependencia, victimización, responsabilidad sin culpa',
    etiquetas: ['culpa', 'codependencia', 'responsabilidad', 'paso-4-inventario'],
    pasos: ['Paso 4', 'Paso 6', 'Paso 7', 'Paso 10'],
    conceptos: ['Pedir sin chantajear', 'Libertad emocional de los hijos'],
    objetivo: 'Detectar el uso de la culpa como manipulación familiar y aprender a pedir con claridad.',
    fraseAncla: 'Estoy aprendiendo a pedir sin chantajear.',
    detectar: ['¿Cómo usaba la culpa para controlar?', '¿Qué frases usaba para que otros hicieran lo que yo quería?'],
    admitir: ['¿Qué me costó admitir sobre mi manipulación?', '¿Qué vi sobre mi necesidad de control?'],
    corregir: ['¿Cómo pido sin chantajear?', '¿Cómo respeto la libertad emocional de mis hijos?'],
    emocion: ['Culpa', 'Miedo'], defectoCaracter: ['Manipulación', 'Control'], virtudPrincipal: ['Honestidad', 'Respeto'],
    variaciones: ['Pedir sin culpa', 'Sin chantaje emocional'], palabrasClave: ['culpa', 'manipular', 'chantaje'], prioridad: 79
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-018',
    titulo: 'Soy papá y estoy aprendiendo a mirar mi infancia sin quedarme atrapado en ella',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 4 y 5',
    baseFGDLL: 'Tipos de familia, infancia no vivida, duelo, cadena de daños',
    etiquetas: ['infancia', 'duelo', 'responsabilidad', 'paso-4-inventario'],
    pasos: ['Paso 4', 'Paso 5'],
    conceptos: ['Niño herido sin dirigir la casa', 'Responsabilidad adulta'],
    objetivo: 'Mirar la infancia con honestidad sin usarla como excusa para abdicar de la responsabilidad adulta.',
    fraseAncla: 'Estoy aprendiendo a atender mi niño herido sin ponerlo a dirigir mi casa.',
    detectar: ['¿Qué heridas de niño seguían reaccionando en mi vida adulta?', '¿Cómo mi infancia afectó mi forma de ser padre?'],
    admitir: ['¿Qué historia empecé a ordenar?', '¿Qué dejé de negar?'],
    corregir: ['¿Cómo atiendo mi niño herido sin ponerlo a dirigir mi casa?', '¿Qué responsabilidad adulta estoy tomando?'],
    emocion: ['Tristeza', 'Culpa'], defectoCaracter: ['Victimismo', 'Evasión'], virtudPrincipal: ['Responsabilidad', 'Compasión'],
    variaciones: ['Infancia sin excusa', 'Adulto responsable'], palabrasClave: ['infancia', 'niño herido', 'responsabilidad'], prioridad: 78
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-019',
    titulo: 'Soy papá y estoy aprendiendo a soltar el resentimiento contra mis hijos',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 4, 5 y 10',
    baseFGDLL: 'Resentimiento, enojo, expectativas, perdón',
    etiquetas: ['resentimiento', 'perdón', 'aceptación', 'hijos', 'paso-10-reflexion'],
    pasos: ['Paso 4', 'Paso 5', 'Paso 10'],
    conceptos: ['Expectativas sobre hijos', 'Acompañar su proceso'],
    objetivo: 'Trabajar resentimientos del padre hacia sus hijos desde inventario y aceptación.',
    fraseAncla: 'Estoy aprendiendo a acompañar su proceso.',
    detectar: ['¿Qué esperaba de mis hijos que tal vez no les correspondía darme?', '¿Cómo convertí mi frustración en resentimiento?'],
    admitir: ['¿Qué me dolió admitir sobre mis expectativas?', '¿Qué entendí sobre amar sin exigir?'],
    corregir: ['¿Cómo suelto el deseo de que mis hijos sean como yo quiero?', '¿Cómo aprendo a acompañar su proceso?'],
    emocion: ['Resentimiento', 'Tristeza'], defectoCaracter: ['Exigencia', 'Control'], virtudPrincipal: ['Aceptación', 'Perdón'],
    variaciones: ['Amar sin exigir', 'Soltar expectativas'], palabrasClave: ['resentimiento', 'hijos', 'expectativas'], prioridad: 77
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-020',
    titulo: 'Soy papá y estoy aprendiendo a aceptar que también necesito ayuda',
    baseAA: 'Libro Azul y Doce Pasos',
    referenciaAA: 'Pasos 1, 2 y 3',
    baseFGDLL: 'Humildad, terreno de iguales, padrinazgo, rendición consciente',
    etiquetas: ['humildad', 'apadrinamiento', 'confianza', 'paso-1-impotencia', 'paso-3-entrega'],
    pasos: ['Paso 1', 'Paso 2', 'Paso 3'],
    conceptos: ['Pedir ayuda', 'Humildad como fuerza'],
    objetivo: 'Ayudar al padre a desmontar la autosuficiencia y enseñar humildad con el ejemplo.',
    fraseAncla: 'Estoy aprendiendo a pedir ayuda sin vergüenza.',
    detectar: ['¿Cómo fingía que podía solo?', '¿Qué me impedía pedir ayuda?'],
    admitir: ['¿Qué sentí al reconocer que necesitaba un grupo?', '¿Qué parte de mi orgullo empezó a caer?'],
    corregir: ['¿Cómo practico pedir ayuda sin vergüenza?', '¿Cómo enseño a mi familia que la humildad también es fuerza?'],
    emocion: ['Vergüenza', 'Esperanza'], defectoCaracter: ['Autosuficiencia', 'Orgullo'], virtudPrincipal: ['Humildad', 'Confianza'],
    variaciones: ['Ayuda sin vergüenza', 'Humildad que enseña'], palabrasClave: ['ayuda', 'humildad', 'grupo'], prioridad: 76
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-021',
    titulo: 'Soy papá y estoy aprendiendo a vivir un día a la vez',
    baseAA: 'Libro Azul y Doce Pasos',
    referenciaAA: 'Pasos 1, 3, 10 y 11',
    baseFGDLL: 'Solo por hoy, poco a poco se va lejos, recomendaciones generales',
    etiquetas: ['aceptación', 'paz', 'responsabilidad', 'paso-3-entrega'],
    pasos: ['Paso 1', 'Paso 3', 'Paso 10', 'Paso 11'],
    conceptos: ['Solo por hoy', 'Corrección diaria'],
    objetivo: 'Llevar la paternidad al presente: corregir hoy sin prometer perfección.',
    fraseAncla: 'Estoy aprendiendo a corregir hoy, sin prometer perfección.',
    detectar: ['¿Cómo me hundía en culpa por el pasado o ansiedad por el futuro?', '¿Qué decisiones tomé desde la desesperación?'],
    admitir: ['¿Qué me enseñó el grupo sobre vivir sólo por hoy?', '¿Qué me costó soltar?'],
    corregir: ['¿Cómo practico vivir el día presente?', '¿Qué corrección puedo hacer hoy, sin prometer perfección?'],
    emocion: ['Ansiedad', 'Culpa'], defectoCaracter: ['Control', 'Impaciencia'], virtudPrincipal: ['Aceptación', 'Paciencia'],
    variaciones: ['Padre solo por hoy', 'Corregir hoy'], palabrasClave: ['solo por hoy', 'presente', 'padre'], prioridad: 75
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-022',
    titulo: 'Soy papá y estoy aprendiendo a convertir mi culpa en responsabilidad',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 4, 5, 8 y 9',
    baseFGDLL: 'Culpa real, culpa tóxica, reparación, desenlace',
    etiquetas: ['culpa', 'responsabilidad', 'reparacion', 'paso-8-reparacion'],
    pasos: ['Paso 4', 'Paso 5', 'Paso 8', 'Paso 9'],
    conceptos: ['Culpa responsable', 'Dejar de destruirse para corregir'],
    objetivo: 'Transformar culpa paralizante en acción responsable y reparadora.',
    fraseAncla: 'Estoy aprendiendo a dejar de destruirme y empezar a corregir.',
    detectar: ['¿Cómo me castigaba sin cambiar?', '¿Qué culpa usaba para seguir hundido?'],
    admitir: ['¿Qué diferencia empecé a ver entre culpa y responsabilidad?', '¿Qué daños necesitaban reparación?'],
    corregir: ['¿Cómo dejo de destruirme y empiezo a corregir?', '¿Qué acción responsable estoy tomando?'],
    emocion: ['Culpa', 'Vergüenza'], defectoCaracter: ['Autocastigo', 'Evasión'], virtudPrincipal: ['Responsabilidad', 'Reparación'],
    variaciones: ['Culpa que repara', 'Responsabilidad sin destruirme'], palabrasClave: ['culpa', 'responsabilidad', 'reparacion'], prioridad: 74
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-023',
    titulo: 'Soy papá y estoy aprendiendo a amar sin depender',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 4, 6 y 7',
    baseFGDLL: 'Dependencia emocional, codependencia, instinto emocional',
    etiquetas: ['dependencia-emocional', 'codependencia', 'amor', 'libertad', 'paso-6-disposicion'],
    pasos: ['Paso 4', 'Paso 6', 'Paso 7'],
    conceptos: ['Amar desde libertad', 'Cuidar sin absorber'],
    objetivo: 'Distinguir amor de necesidad y cuidado de absorción emocional.',
    fraseAncla: 'Estoy aprendiendo a amar desde libertad.',
    detectar: ['¿Cómo necesitaba que mi familia me validara para sentirme valioso?', '¿Cómo confundí amor con necesidad?'],
    admitir: ['¿Qué me costó admitir sobre mi dependencia?', '¿Qué escuché que me ayudó a verme?'],
    corregir: ['¿Cómo estoy aprendiendo a amar desde libertad?', '¿Cómo cuido sin controlar y acompaño sin absorber?'],
    emocion: ['Miedo', 'Ansiedad'], defectoCaracter: ['Dependencia', 'Control'], virtudPrincipal: ['Libertad', 'Confianza'],
    variaciones: ['Amor sin dependencia', 'Cuidar sin absorber'], palabrasClave: ['dependencia', 'amor', 'codependencia'], prioridad: 73
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-024',
    titulo: 'Soy papá y estoy aprendiendo a respetar la historia de mis hijos',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 10, 11 y 12',
    baseFGDLL: 'Respeto, inclusión, terreno de iguales, no imposición',
    etiquetas: ['respeto', 'inclusión', 'hijos', 'dignidad', 'paso-12-servicio'],
    pasos: ['Paso 10', 'Paso 11', 'Paso 12'],
    conceptos: ['Acompañar sin imponer', 'Respeto a procesos'],
    objetivo: 'Aprender a respetar la historia de los hijos sin abandonar responsabilidad paterna.',
    fraseAncla: 'Estoy aprendiendo a acompañar sin imponer.',
    detectar: ['¿Cómo imponía mis miedos, creencias o expectativas?', '¿Cómo invalidaba lo que mis hijos sentían?'],
    admitir: ['¿Qué aprendí sobre respeto y dignidad?', '¿Qué me confrontó sobre mi forma de “aconsejar”?'],
    corregir: ['¿Cómo respeto su proceso sin abandonar mi responsabilidad?', '¿Cómo aprendo a acompañar sin imponer?'],
    emocion: ['Miedo', 'Culpa'], defectoCaracter: ['Imposición', 'Control'], virtudPrincipal: ['Respeto', 'Dignidad'],
    variaciones: ['Acompañar sin imponer', 'Respetar su historia'], palabrasClave: ['respeto', 'hijos', 'historia'], prioridad: 72
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-025',
    titulo: 'Soy papá y estoy aprendiendo a no usar mis defectos como excusa',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 6, 7 y 10',
    baseFGDLL: 'Defectos de carácter, virtudes antídoto, responsabilidad',
    etiquetas: ['responsabilidad', 'humildad', 'cambio', 'paso-6-disposicion', 'paso-7-humildad'],
    pasos: ['Paso 6', 'Paso 7', 'Paso 10'],
    conceptos: ['Defectos sin excusa', 'Virtudes antídoto'],
    objetivo: 'Pasar de “así soy” a practicar virtudes concretas que corrijan la conducta.',
    fraseAncla: 'Estoy aprendiendo a demostrar cambio con hechos.',
    detectar: ['¿Qué decía para justificar mi carácter?', '¿Cómo usaba “así soy” para no cambiar?'],
    admitir: ['¿Qué defecto de carácter empecé a reconocer?', '¿Qué me dolió aceptar sobre mis consecuencias?'],
    corregir: ['¿Qué virtud estoy practicando para corregir?', '¿Cómo demuestro cambio con hechos?'],
    emocion: ['Vergüenza', 'Esperanza'], defectoCaracter: ['Justificación', 'Terquedad'], virtudPrincipal: ['Humildad', 'Disciplina'],
    variaciones: ['Así soy no basta', 'Virtudes en acción'], palabrasClave: ['defectos', 'excusa', 'cambio'], prioridad: 71
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-026',
    titulo: 'Soy papá y estoy aprendiendo a transmitir esperanza, no miedo',
    baseAA: 'Doce Pasos y Tradiciones',
    referenciaAA: 'Paso 12 y Quinta Tradición',
    baseFGDLL: 'Transmitir el mensaje, servicio, puente de esperanza',
    etiquetas: ['esperanza', 'servicio', 'paso-12-servicio', 'tradicion-proposito'],
    pasos: ['Paso 12'],
    tradiciones: ['Quinta Tradición'],
    conceptos: ['Transmitir esperanza', 'Servicio desde la historia'],
    objetivo: 'Cambiar el ambiente familiar de miedo y tensión hacia esperanza realista.',
    fraseAncla: 'Estoy aprendiendo a transmitir esperanza sin fingir perfección.',
    detectar: ['¿Qué transmitía en mi casa: miedo, tensión, enojo, vergüenza o desconfianza?', '¿Cómo mi dolor afectaba el ambiente familiar?'],
    admitir: ['¿Qué esperanza recibí de otros testimonios?', '¿Qué mensaje empezó a tocar mi vida?'],
    corregir: ['¿Cómo transmito esperanza sin fingir perfección?', '¿Cómo mi historia puede servir a otro padre?'],
    emocion: ['Miedo', 'Esperanza'], defectoCaracter: ['Desesperanza', 'Ira'], virtudPrincipal: ['Esperanza', 'Servicio'],
    variaciones: ['Esperanza en casa', 'Mensaje de padre a padre'], palabrasClave: ['esperanza', 'miedo', 'servicio'], prioridad: 70
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-027',
    titulo: 'Soy papá y estoy aprendiendo a construir un hogar seguro',
    baseAA: 'Doce Pasos',
    referenciaAA: 'Pasos 4, 8, 9 y 10',
    baseFGDLL: 'Refugio seguro, familia, reparación, emociones nucleares',
    etiquetas: ['familia', 'seguridad', 'reparacion', 'responsabilidad', 'paso-9-enmiendas'],
    pasos: ['Paso 4', 'Paso 8', 'Paso 9', 'Paso 10'],
    conceptos: ['Hogar seguro', 'Reparación de confianza'],
    objetivo: 'Hablar de cómo reconstruir un hogar emocionalmente más seguro con acciones sostenidas.',
    fraseAncla: 'Estoy aprendiendo a reparar confianza poco a poco.',
    detectar: ['¿Cómo mi casa dejó de sentirse segura por mis actos o ausencias?', '¿Qué miedo generé en mi familia?'],
    admitir: ['¿Qué me dolió ver sobre el ambiente que construí?', '¿Qué responsabilidad empecé a aceptar?'],
    corregir: ['¿Qué hago para que mi casa sea un espacio más seguro?', '¿Cómo reparo confianza poco a poco?'],
    emocion: ['Miedo', 'Culpa'], defectoCaracter: ['Violencia emocional', 'Ausencia'], virtudPrincipal: ['Seguridad', 'Responsabilidad'],
    variaciones: ['Casa segura', 'Reparar confianza'], palabrasClave: ['hogar seguro', 'confianza', 'familia'], prioridad: 69
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-028',
    titulo: 'Soy papá y estoy aprendiendo a aceptar a mis hijos como son',
    baseAA: 'Tradiciones y Doce Pasos',
    referenciaAA: 'Tercera Tradición, Pasos 10 y 11',
    baseFGDLL: 'Inclusión total, dignidad, terreno de iguales, respeto',
    etiquetas: ['aceptación', 'inclusión', 'respeto', 'hijos', 'tradicion-unidad'],
    pasos: ['Paso 10', 'Paso 11'],
    tradiciones: ['Tercera Tradición'],
    conceptos: ['Aceptación sin condición', 'Dignidad de los hijos'],
    objetivo: 'Trabajar aceptación paterna sin condicionar amor a que los hijos encajen en expectativas propias.',
    fraseAncla: 'Estoy aprendiendo a amar sin condicionar.',
    detectar: ['¿Cómo rechacé, comparé o quise cambiar a mis hijos?', '¿Qué miedo mío proyecté sobre ellos?'],
    admitir: ['¿Qué entendí sobre dignidad y pertenencia?', '¿Qué me confrontó sobre mi falta de aceptación?'],
    corregir: ['¿Cómo amo sin condicionar?', '¿Cómo corrijo mi tendencia a juzgar lo que no entiendo?'],
    emocion: ['Miedo', 'Culpa'], defectoCaracter: ['Juicio', 'Control'], virtudPrincipal: ['Aceptación', 'Respeto'],
    variaciones: ['Amar como son', 'Aceptar sin condicionar'], palabrasClave: ['aceptacion', 'hijos', 'inclusion'], prioridad: 68
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-029',
    titulo: 'Soy papá y estoy aprendiendo a dejar un legado de servicio',
    baseAA: 'Doce Pasos y Tradiciones',
    referenciaAA: 'Paso 12, Quinta y Séptima Tradición',
    baseFGDLL: 'Servicio, devolver la dádiva, transmitir la luz',
    etiquetas: ['servicio', 'gratitud', 'legado', 'paso-12-servicio', 'tradicion-proposito'],
    pasos: ['Paso 12'],
    tradiciones: ['Quinta Tradición', 'Séptima Tradición'],
    conceptos: ['Legado de servicio', 'Dolor convertido en ayuda'],
    objetivo: 'Orientar el testimonio hacia el legado que dejan los actos de servicio y reparación.',
    fraseAncla: 'Estoy aprendiendo a convertir mi dolor en servicio responsable.',
    detectar: ['¿Qué legado estaba dejando con mi manera de vivir?', '¿Qué valores decía tener pero no practicaba?'],
    admitir: ['¿Qué me enseñó el servicio?', '¿Qué sentí al ver que mi historia podía ayudar?'],
    corregir: ['¿Cómo quiero que mis hijos recuerden mi proceso?', '¿Cómo convierto mi dolor en servicio responsable?'],
    emocion: ['Gratitud', 'Esperanza'], defectoCaracter: ['Egoísmo'], virtudPrincipal: ['Servicio', 'Gratitud'],
    variaciones: ['Legado de servicio', 'Dolor que ayuda'], palabrasClave: ['legado', 'servicio', 'padre'], prioridad: 67
  }),
  crearTemaDiaPadre({
    id: 'tema-dia-padre-030',
    titulo: 'Soy papá y estoy aprendiendo a ser un hombre nuevo sin negar mi pasado',
    baseAA: 'Libro Azul y Doce Pasos',
    referenciaAA: 'Pasos 1 al 12, especialmente 4, 5, 9, 10 y 12',
    baseFGDLL: 'Resignificar la historia, de las tinieblas a la luz, cadena de daños',
    etiquetas: ['transformacion', 'responsabilidad', 'reparacion', 'servicio', 'paso-12-servicio'],
    pasos: ['Paso 1', 'Paso 4', 'Paso 5', 'Paso 9', 'Paso 10', 'Paso 12'],
    conceptos: ['Resignificar la historia', 'Padre consciente'],
    objetivo: 'Cerrar la serie del Día del Padre con un testimonio de transformación honesta, sin negar pasado ni presumir perfección.',
    fraseAncla: 'Estoy aprendiendo a honrar mi pasado sin vivir esclavo de él.',
    detectar: ['¿Qué parte de mi pasado me daba vergüenza mirar?', '¿Cómo vivía atrapado en culpa, orgullo o negación?'],
    admitir: ['¿Qué verdad me empezó a liberar?', '¿Qué testimonio me hizo creer que yo también podía cambiar?'],
    corregir: ['¿Cómo honro mi pasado sin vivir esclavo de él?', '¿Qué estoy aprendiendo a corregir para ser un padre más consciente?'],
    emocion: ['Vergüenza', 'Esperanza'], defectoCaracter: ['Negación', 'Orgullo'], virtudPrincipal: ['Honestidad', 'Servicio'],
    variaciones: ['Hombre nuevo', 'Pasado con responsabilidad'], palabrasClave: ['hombre nuevo', 'pasado', 'transformacion'], prioridad: 66
  })
];

const TITULOS_ANIVERSARIO = [
  'La calidad de la fe',
  'Caminar a través del miedo',
  'Autosuficiencia',
  'La verdadera humildad puede llevarnos a la fe',
  'Heridas del alma',
  'Un refugio seguro',
  'Los raros designios de Dios',
  'Tuve todo y no fui feliz',
  'Cambio de actitudes',
  'Un despertar espiritual',
  'Autosabotaje',
  'Principios ante las personas',
  'Por fe y por obras',
  'Honestidad: infierno y paraíso',
  'Sobriedad emocional',
  '2° paso',
  'Celos: inseguridad y locura',
  'Rendición del ego',
  '3° paso',
  'Mi oportunidad de vivir',
  'Resentimiento',
  'Manos que dan jamás quedan vacías',
  'Una sensación de pertenecer',
  'Lenguaje del corazón',
  'Dios y mis defectos',
  'Madurez emocional',
  '5to. Paso: Necesidad de hablar',
  'Y Dios ¿para qué?',
  'Rompiendo cadenas',
  'Hay una solución',
  'Prueba de fe',
  'Codependencia',
  'Siendo agradecido',
  'Servicio, refugio espiritual',
  'En lo más profundo de mí mismo',
  'De las tinieblas a la luz',
  '11vo. Paso',
  'Exigencias',
  'En acción',
  'Solo por la gracia de Dios',
  'Llenar el vacío',
  '5ta. Tradición',
  'Cruz de la sobriedad',
  'La magia del perdón',
  '3ra. Tradición',
  'Concédeme la serenidad',
  'Cuando la muerte y la locura tocan la puerta',
  'Tiempo, dinero y esfuerzo',
  'La fe y el crecimiento',
  'Resignificando',
  'A las esposas',
  'Servicio, don de Dios',
  'Complejos',
  'La razón por la que fuiste escogido',
  'La fe que obra',
  'Sufrimiento y apego',
  'La familia después',
  'Al servicio de Dios',
  'Eres lo que haces',
  'Una nueva oportunidad',
  'Debilidades humanas',
  'Una visión para ti',
  'Tu voluntad, no la mía',
  'Reencontrando mi esencia',
  'Más acerca del alcoholismo',
  'Encontrar una razón para creer',
  'El dolor del crecimiento',
  'Yo soy un milagro',
  'Espiritualidad o religiosidad',
  'Falsa humildad',
  '5to. Capítulo',
  'En manos de Dios',
  'A prueba y error',
  'Transmitir el mensaje',
  'Aprendiendo a perder',
  'Primero lo primero',
  'Autoexamen',
  'Ansiedad: La copa fatal',
  'Autoestima',
  '¿Abstinencia o sobriedad?',
  'Amor o necesidad',
  'Mercaderes del programa',
  'Reservas mentales',
  '1er. Paso',
  'Castillos en el aire',
  'Jóvenes adictos',
  'La razón o la conciencia',
  '2da. Tradición',
  '¿Por qué me quedé en GDLL?',
  '10mo. Paso',
  'La sangre hace parientes, la lealtad hace familias',
  'Un programa para vivir',
  'Hijo huérfano de padres vivos',
  '4to. Capítulo',
  'Fijaciones',
  'Sano juicio',
  'El dolor es inevitable, el sufrimiento es opcional',
  '8vo. Capítulo',
  'Cerrando ciclos',
  '3er. Capítulo',
  'Aprendiendo a soltar',
  'Algo tiene este café',
  'Amar o depender',
  'Prueba de ácido',
  'Sentido de pertenencia',
  'El grato privilegio de servir',
  'Introyectos',
  'Pláticas o practicas el programa',
  'Resignificando mi historia',
  'De joven adicto a líder',
  'Inteligencia emocional',
  '¿Amor o sueños románticos?',
  'Ser agradecido',
  'Un puerto seguro',
  'A pesar de las adversidades',
  '1ra. Tradición',
  'Vida útil y feliz',
  '5ta. Promesa',
  'Límites y responsabilidades',
  '4ta. Tradición',
  'Duelo',
  'Vive y deja vivir',
  'Dependencia emocional',
  'Poco a poco se va lejos',
  'Escuadrón de la muerte',
  'Ya no soy culpable, soy responsable',
  'En todos nuestros asuntos'
];

function normalizarTextoDatos(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

function clasificarTemaAniversario(titulo) {
  const normal = normalizarTextoDatos(titulo);
  if (normal.includes('paso') || normal.includes('capitulo') || normal.includes('tradicion') || normal.includes('promesa') || normal.includes('programa') || normal.includes('mensaje') || normal.includes('accion')) {
    return {
      categoria: 'Programa',
      etiquetas: ['programa', 'honestidad', 'responsabilidad', 'paso-12-servicio'],
      pasos: normal.includes('1er') ? ['Paso 1'] : normal.includes('2') ? ['Paso 2'] : normal.includes('3') ? ['Paso 3'] : normal.includes('4') ? ['Paso 4'] : normal.includes('5') ? ['Paso 5'] : normal.includes('8') ? ['Paso 8'] : normal.includes('10') ? ['Paso 10'] : normal.includes('11') ? ['Paso 11'] : ['Paso 12'],
      tradiciones: normal.includes('tradicion') ? ['Tradición relacionada'] : []
    };
  }
  if (normal.includes('dios') || normal.includes('fe') || normal.includes('espiritual') || normal.includes('serenidad') || normal.includes('gracia') || normal.includes('voluntad')) {
    return {
      categoria: 'Espiritualidad',
      etiquetas: ['fe', 'entrega', 'confianza', 'paso-3-entrega', 'paso-11-contacto'],
      pasos: ['Paso 2', 'Paso 3', 'Paso 11'],
      tradiciones: []
    };
  }
  if (normal.includes('familia') || normal.includes('esposas') || normal.includes('padre') || normal.includes('madre') || normal.includes('amor') || normal.includes('dependencia') || normal.includes('codependencia') || normal.includes('pertenecer') || normal.includes('pertenencia')) {
    return {
      categoria: 'Relaciones y familia',
      etiquetas: ['familia', 'relaciones', 'responsabilidad', 'perdón', 'pertenencia'],
      pasos: ['Paso 4', 'Paso 8', 'Paso 9', 'Paso 10'],
      tradiciones: []
    };
  }
  if (normal.includes('miedo') || normal.includes('ansiedad') || normal.includes('resentimiento') || normal.includes('celos') || normal.includes('duelo') || normal.includes('dolor') || normal.includes('sufrimiento') || normal.includes('vacío') || normal.includes('vacio')) {
    return {
      categoria: 'Autodesarrollo',
      etiquetas: ['miedo', 'ansiedad', 'resentimiento', 'autodescubrimiento', 'crecimiento'],
      pasos: ['Paso 4', 'Paso 5', 'Paso 10'],
      tradiciones: []
    };
  }
  if (normal.includes('servicio') || normal.includes('manos que dan') || normal.includes('agradecido') || normal.includes('gratitud')) {
    return {
      categoria: 'Servicio',
      etiquetas: ['servicio', 'gratitud', 'comunidad', 'paso-12-servicio'],
      pasos: ['Paso 12'],
      tradiciones: []
    };
  }
  return {
    categoria: 'Aniversario',
    etiquetas: ['crecimiento', 'honestidad', 'responsabilidad', 'esperanza'],
    pasos: ['Paso 10', 'Paso 12'],
    tradiciones: []
  };
}

function crearTemaAniversario(titulo, index) {
  const meta = clasificarTemaAniversario(titulo);
  const id = `tema-aniversario-pdf-${String(index + 1).padStart(3, '0')}`;
  return {
    id,
    titulo,
    tituloCorto: titulo.length > 34 ? `${titulo.slice(0, 31)}...` : titulo,
    estado: 'Completo',
    categoria: meta.categoria,
    evento: ['Aniversario de grupo', 'Reunión temática', 'Compartimiento especial'],
    publico: ['Participantes', 'Líderes', 'Servidores', 'Familias'],
    etiquetas: ['aniversario', ...meta.etiquetas],
    intensidad: meta.categoria === 'Autodesarrollo' ? 'Alta' : 'Media',
    momento: meta.categoria === 'Espiritualidad' || meta.categoria === 'Servicio' ? 'Cierre' : 'Mitad',
    formato: 'Individual',
    tipoTestimonio: meta.categoria === 'Programa' ? 'Didáctico' : 'Inspirador',
    emocion: meta.categoria === 'Autodesarrollo' ? ['Miedo', 'Esperanza'] : ['Gratitud', 'Esperanza'],
    defectoCaracter: ['Orgullo', 'Negación'],
    virtudPrincipal: meta.categoria === 'Servicio' ? ['Servicio', 'Gratitud'] : ['Honestidad', 'Responsabilidad'],
    pasos: meta.pasos,
    tradiciones: meta.tradiciones,
    conceptos: [titulo, 'Testimonio de aniversario', 'Detectar, admitir y corregir'],
    fuentePrincipal: 'FGDLL',
    fuenteAA: [{ obra: 'Literatura de A.A.', referencia: 'Libro Azul, Doce Pasos y Tradiciones', uso: 'Base para ordenar experiencia, inventario, reparación y transmisión del mensaje' }],
    fuenteFGDLL: [{ obra: 'Temas de Aniversarios FGDLL', seccion: meta.categoria, uso: 'Tema tomado del listado oficial de aniversarios' }],
    librosRecomendados: [],
    objetivo: `Preparar un compartimiento de aniversario sobre “${titulo}” desde experiencia personal, literatura y responsabilidad presente.`,
    fraseAncla: `Mi experiencia con “${titulo}” me ayuda a detectar, admitir y aprender a corregir.`,
    guiaTestimonio: {
      detectar: [`¿Cómo se manifestaba “${titulo}” en mi vida antes del programa?`, '¿Qué defecto, miedo, herida o fuga alimentaba este tema?', '¿Qué daño causaba en mí, en mi familia o en mi grupo?'],
      admitir: ['¿Qué escuché en Guerreros de la Luz o en la literatura que me ayudó a verme?', '¿Qué verdad tuve que admitir sin justificarme?', '¿Qué resistencia apareció cuando empecé a trabajar este tema?'],
      corregir: ['¿Qué acción concreta estoy practicando hoy para corregir?', '¿Qué herramienta del programa me ayuda a sostener el cambio?', '¿Cómo puede servir mi experiencia a otro compañero en aniversario?']
    },
    variaciones: [titulo, `Mi experiencia con ${titulo}`],
    palabrasClave: normalizarTextoDatos(titulo).split(/\s+/).filter(Boolean),
    advertenciaEtica: meta.categoria === 'Autodesarrollo' ? 'Tema de alta intensidad: cuidar que el testimonio no derive en catarsis desordenada ni exposición de terceros.' : '',
    advertenciaLider: 'Tema de aniversario: orientar el compartimiento hacia experiencia propia, literatura, gratitud y servicio; evitar ataques a terceros o discursos abstractos sin vivencia.',
    noUsarPara: ['Juzgar a terceros', 'Improvisar catarsis', 'Presumir perfección'],
    esCatalogoBase: false,
    prioridad: 64 - Math.min(index, 40),
    relacionados: [],
    autor: 'Extraído de TEMAS DE ANIVERSARIOS.pdf',
    fechaCreacion: '2026-06-02'
  };
}

const PAQUETE_ANIVERSARIOS_PDF = TITULOS_ANIVERSARIO.map(crearTemaAniversario);

const CATALOGO_COMPLETO = [
  ...PAQUETE_BASE,
  ...PAQUETE_VIVIR_SOBRIO,
  ...PAQUETE_SEMANA_PADRES,
  ...PAQUETE_PADRES_EXTRA,
  ...PAQUETE_DIA_PADRE,
  ...PAQUETE_ANIVERSARIOS_PDF
];

const PORTAL_SECTIONS = [
  { id: 'inicio', label: 'Inicio', icono: 'luz', descripcion: 'Vista principal del portal institucional.' },
  { id: 'mi-servicio', label: 'Mi Servicio', icono: 'servicio', descripcion: 'Panel operativo para líderes y servidores.' },
  { id: 'operaciones', label: 'Centro de Operaciones', icono: 'operacion', descripcion: 'Protocolos, formatos, reglamentos y checklists.' },
  { id: 'universidad', label: 'Universidad', icono: 'formacion', descripcion: 'Rutas de aprendizaje y capacitación interna.' },
  { id: 'biblioteca', label: 'Biblioteca', icono: 'biblioteca', descripcion: 'Catálogo de compartimientos y temas.' },
  { id: 'red', label: 'Red Nacional', icono: 'red', descripcion: 'Directorio de zonas, grupos y centros.' },
  { id: 'direcciones', label: 'Direcciones', icono: 'direccion', descripcion: 'Áreas nacionales de coordinación.' },
  { id: 'marketing', label: 'Marketing', icono: 'identidad', descripcion: 'Plantillas, identidad y comunicación visual.' },
  { id: 'sugerencias', label: 'Sugerencias', icono: 'ideas', descripcion: 'Borradores de temas y mejoras.' },
  { id: 'comunicados', label: 'Comunicados', icono: 'comunicacion', descripcion: 'Información oficial validada.' },
  { id: 'accesos', label: 'Accesos', icono: 'accesos', descripcion: 'Herramientas externas y repositorios.' }
];

const SERVICE_DASHBOARD = [
  {
    id: 'mi-grupo',
    titulo: 'Mi Grupo',
    categoria: 'Coordinación',
    descripcion: 'Datos principales del grupo, horarios, responsables, pendientes y estructura de servicio.',
    tipo: 'Panel',
    estado: 'Listo para enlazar',
    responsable: 'Coordinación de grupo',
    enlace: '#red',
    etiquetas: ['grupo', 'horarios', 'responsables']
  },
  {
    id: 'mi-zona',
    titulo: 'Mi Zona',
    categoria: 'Red Nacional',
    descripcion: 'Comunicados, calendario, eventos y coordinación territorial de la zona.',
    tipo: 'Panel',
    estado: 'Borrador operativo',
    responsable: 'Coordinación zonal',
    enlace: '#red',
    etiquetas: ['zona', 'calendario', 'eventos']
  },
  {
    id: 'mis-pendientes',
    titulo: 'Mis Pendientes',
    categoria: 'Seguimiento',
    descripcion: 'Tareas, capacitaciones pendientes, formatos por entregar y servicios asignados.',
    tipo: 'Checklist',
    estado: 'Estructura inicial',
    responsable: 'Líder servidor',
    enlace: '#universidad',
    etiquetas: ['tareas', 'capacitacion', 'formatos']
  },
  {
    id: 'proximos-eventos',
    titulo: 'Próximos Eventos',
    categoria: 'Agenda',
    descripcion: 'Haciendas, aniversarios, capacitaciones, reuniones y eventos importantes.',
    tipo: 'Agenda',
    estado: 'Pendiente de calendario oficial',
    responsable: 'Dirección de operaciones',
    enlace: '#comunicados',
    etiquetas: ['eventos', 'aniversarios', 'reuniones']
  },
  {
    id: 'capacitaciones-pendientes',
    titulo: 'Capacitaciones Pendientes',
    categoria: 'Formación',
    descripcion: 'Cursos que el líder debe completar para fortalecer su servicio.',
    tipo: 'Ruta',
    estado: 'Listo para primera ruta',
    responsable: 'Universidad del Líder',
    enlace: '#universidad',
    etiquetas: ['cursos', 'liderazgo', 'servicio']
  },
  {
    id: 'comunicados-oficiales',
    titulo: 'Comunicados Oficiales',
    categoria: 'Comunicación',
    descripcion: 'Información validada por la Fraternidad para evitar rumores, confusión o desorden.',
    tipo: 'Comunicado',
    estado: 'Activo',
    responsable: 'Comunicación nacional',
    enlace: '#comunicados',
    etiquetas: ['oficial', 'comunicacion', 'orden']
  }
];

const OPERATIONS_RESOURCES = [
  {
    id: 'protocolo-sesion-diaria',
    titulo: 'Sesión Diaria',
    categoria: 'Protocolos',
    descripcion: 'Objetivo, guía de coordinación, material descargable, checklist y video explicativo.',
    tipo: 'Protocolo',
    estado: 'Base creada',
    responsable: 'Centro de Operaciones',
    enlace: '#biblioteca',
    etiquetas: ['sesion', 'coordinacion', 'checklist']
  },
  {
    id: 'protocolo-tribuna',
    titulo: 'Tribuna',
    categoria: 'Protocolos',
    descripcion: 'Estructura, reglas principales y material de apoyo para tribuna.',
    tipo: 'Protocolo',
    estado: 'Pendiente de validación',
    responsable: 'Dirección de formación',
    enlace: '#biblioteca',
    etiquetas: ['tribuna', 'estructura', 'reglas']
  },
  {
    id: 'protocolo-aniversarios',
    titulo: 'Aniversarios',
    categoria: 'Protocolos',
    descripcion: 'Planeación, roles de servicio, ceremonia, checklist y temas sugeridos.',
    tipo: 'Protocolo',
    estado: 'Con temas cargados',
    responsable: 'Coordinación de eventos',
    enlace: '#biblioteca',
    etiquetas: ['aniversario', 'ceremonia', 'roles']
  },
  {
    id: 'protocolo-generaciones',
    titulo: 'Generaciones',
    categoria: 'Protocolos',
    descripcion: 'Apertura, seguimiento, cierre e indicaciones generales para generaciones.',
    tipo: 'Protocolo',
    estado: 'Borrador',
    responsable: 'Dirección nacional',
    enlace: '#sugerencias',
    etiquetas: ['generaciones', 'seguimiento', 'cierre']
  },
  {
    id: 'sesiones-divididas',
    titulo: 'Sesiones Divididas',
    categoria: 'Protocolos',
    descripcion: 'Medio día, noche, matutina y recomendaciones de operación.',
    tipo: 'Guía',
    estado: 'Borrador',
    responsable: 'Centro de Operaciones',
    enlace: '#sugerencias',
    etiquetas: ['sesiones', 'horarios', 'operacion']
  },
  {
    id: 'responsivas',
    titulo: 'Responsivas',
    categoria: 'Formatos',
    descripcion: 'Formatos descargables para autorización, registro, servicio y seguimiento.',
    tipo: 'Formato',
    estado: 'Pendiente de Drive',
    responsable: 'Administración',
    enlace: '#accesos',
    etiquetas: ['formatos', 'documentos', 'drive']
  },
  {
    id: 'reglamento-servicio',
    titulo: 'Reglamento de Servicio',
    categoria: 'Reglamentos',
    descripcion: 'Lineamientos de conducta, responsabilidad y unidad para líderes y servidores.',
    tipo: 'Reglamento',
    estado: 'Pendiente de documento formal',
    responsable: 'Dirección nacional',
    enlace: '#accesos',
    etiquetas: ['reglamento', 'servicio', 'unidad']
  }
];

const TRAINING_COURSES = [
  {
    id: 'curso-lider-nuevo',
    titulo: 'Nuevo Líder',
    categoria: 'Fundamentos',
    descripcion: 'Inicio de servicio, rol del líder, límites, comunicación y cuidado del grupo.',
    tipo: 'Curso',
    estado: 'Ruta inicial',
    responsable: 'Universidad del Líder',
    enlace: '#mi-servicio',
    etiquetas: ['liderazgo', 'fundamentos', 'grupo'],
    progreso: 35
  },
  {
    id: 'curso-apadrinamiento',
    titulo: 'Apadrinamiento Responsable',
    categoria: 'Acompañamiento',
    descripcion: 'Guía para acompañar sin controlar, orientar sin sustituir y cuidar temas sensibles.',
    tipo: 'Curso',
    estado: 'Contenido por validar',
    responsable: 'Dirección de formación',
    enlace: '#biblioteca',
    etiquetas: ['apadrinamiento', 'acompanamiento', 'crisis'],
    progreso: 20
  },
  {
    id: 'curso-operacion',
    titulo: 'Operación de Grupo',
    categoria: 'Operaciones',
    descripcion: 'Protocolos, checklists, roles, ceremonias, reportes y seguimiento.',
    tipo: 'Curso',
    estado: 'Estructura definida',
    responsable: 'Centro de Operaciones',
    enlace: '#operaciones',
    etiquetas: ['operacion', 'protocolos', 'reportes'],
    progreso: 45
  },
  {
    id: 'curso-comunicacion',
    titulo: 'Comunicación Institucional',
    categoria: 'Comunicación',
    descripcion: 'Tono oficial, comunicados, identidad visual y manejo de información validada.',
    tipo: 'Curso',
    estado: 'Borrador',
    responsable: 'Comunicación nacional',
    enlace: '#marketing',
    etiquetas: ['comunicacion', 'identidad', 'oficial'],
    progreso: 25
  }
];

const COMMUNICATIONS = [
  {
    id: 'comunicado-biblioteca',
    titulo: 'Biblioteca de la Luz disponible',
    categoria: 'Biblioteca',
    descripcion: 'El catálogo de compartimientos queda disponible como base inicial para líderes y servidores.',
    tipo: 'Comunicado',
    estado: 'Publicado',
    responsable: 'Comunicación nacional',
    enlace: '#biblioteca',
    etiquetas: ['biblioteca', 'lideres', 'temas'],
    fecha: '2026-06-04'
  },
  {
    id: 'comunicado-validacion',
    titulo: 'Proceso de validación de materiales',
    categoria: 'Operaciones',
    descripcion: 'Los documentos oficiales deben pasar por revisión antes de enlazarse a Drive o publicarse.',
    tipo: 'Aviso',
    estado: 'En revisión',
    responsable: 'Dirección nacional',
    enlace: '#accesos',
    etiquetas: ['validacion', 'drive', 'documentos'],
    fecha: '2026-06-04'
  },
  {
    id: 'comunicado-sugerencias',
    titulo: 'Recepción de sugerencias de temas',
    categoria: 'Sugerencias',
    descripcion: 'Los líderes pueden registrar necesidades de temas para convertirlas en recursos formativos.',
    tipo: 'Convocatoria',
    estado: 'Borrador',
    responsable: 'Universidad del Líder',
    enlace: '#sugerencias',
    etiquetas: ['sugerencias', 'formacion', 'recursos'],
    fecha: '2026-06-04'
  }
];

const MARKETING_ASSETS = [
  {
    id: 'plantillas-comunicados',
    titulo: 'Plantillas de comunicados',
    categoria: 'Comunicación',
    descripcion: 'Formatos para mensajes oficiales, avisos de reuniones y anuncios de eventos.',
    tipo: 'Plantilla',
    estado: 'Pendiente de Drive',
    responsable: 'Comunicación nacional',
    enlace: '#accesos',
    etiquetas: ['plantillas', 'comunicados', 'eventos']
  },
  {
    id: 'kit-identidad',
    titulo: 'Kit de identidad',
    categoria: 'Marca',
    descripcion: 'Logos, colores, tipografías y criterios para conservar una imagen unificada.',
    tipo: 'Kit',
    estado: 'Borrador',
    responsable: 'Marketing',
    enlace: '#accesos',
    etiquetas: ['identidad', 'logo', 'marca']
  },
  {
    id: 'textos-institucionales',
    titulo: 'Textos institucionales',
    categoria: 'Contenido',
    descripcion: 'Frases, descripciones y mensajes base para presentaciones y publicaciones.',
    tipo: 'Recurso',
    estado: 'Base creada',
    responsable: 'Marketing',
    enlace: '#comunicados',
    etiquetas: ['textos', 'tono', 'institucional']
  }
];

const DIRECTORY_ENTRIES = [
  {
    id: 'zona-centro',
    titulo: 'Zona Centro',
    categoria: 'Zona',
    descripcion: 'Coordinación de grupos centrales y seguimiento de eventos regionales.',
    tipo: 'Directorio',
    estado: 'Por completar',
    responsable: 'Coordinación Zona Centro',
    enlace: '#comunicados',
    etiquetas: ['zona', 'centro', 'grupos']
  },
  {
    id: 'zona-norte',
    titulo: 'Zona Norte',
    categoria: 'Zona',
    descripcion: 'Grupos y centros del norte con calendario de capacitaciones y aniversarios.',
    tipo: 'Directorio',
    estado: 'Por completar',
    responsable: 'Coordinación Zona Norte',
    enlace: '#comunicados',
    etiquetas: ['zona', 'norte', 'capacitaciones']
  },
  {
    id: 'centros-formacion',
    titulo: 'Centros de Formación',
    categoria: 'Centro',
    descripcion: 'Espacios preparados para sesiones, formación interna y reuniones de servicio.',
    tipo: 'Directorio',
    estado: 'Borrador',
    responsable: 'Dirección de formación',
    enlace: '#universidad',
    etiquetas: ['centros', 'formacion', 'servicio']
  }
];

const NATIONAL_DIRECTIONS = [
  {
    id: 'direccion-operaciones',
    titulo: 'Dirección de Operaciones',
    categoria: 'Dirección nacional',
    descripcion: 'Protocolos, reportes, checklists, responsivas y orden de servicio.',
    tipo: 'Área',
    estado: 'Activa',
    responsable: 'Dirección nacional',
    enlace: '#operaciones',
    etiquetas: ['operaciones', 'protocolos', 'orden']
  },
  {
    id: 'direccion-formacion',
    titulo: 'Dirección de Formación',
    categoria: 'Dirección nacional',
    descripcion: 'Universidad del Líder, cursos, materiales de capacitación y guías doctrinales.',
    tipo: 'Área',
    estado: 'Activa',
    responsable: 'Dirección nacional',
    enlace: '#universidad',
    etiquetas: ['formacion', 'cursos', 'guias']
  },
  {
    id: 'direccion-comunicacion',
    titulo: 'Dirección de Comunicación',
    categoria: 'Dirección nacional',
    descripcion: 'Comunicados oficiales, tono institucional, marketing y materiales públicos.',
    tipo: 'Área',
    estado: 'Activa',
    responsable: 'Dirección nacional',
    enlace: '#marketing',
    etiquetas: ['comunicacion', 'marketing', 'oficial']
  }
];

const ACCESS_LINKS = [
  {
    id: 'acceso-github',
    titulo: 'GitHub',
    categoria: 'Código',
    descripcion: 'Repositorio fuente para controlar versiones, cambios y publicación técnica.',
    tipo: 'Repositorio',
    estado: 'Local activo',
    responsable: 'Equipo técnico',
    enlace: '#inicio',
    etiquetas: ['github', 'codigo', 'versiones']
  },
  {
    id: 'acceso-drive',
    titulo: 'Google Drive',
    categoria: 'Materiales',
    descripcion: 'Repositorio oficial para documentos, plantillas, responsivas y archivos descargables.',
    tipo: 'Repositorio',
    estado: 'Pendiente de enlace',
    responsable: 'Administración',
    enlace: '#marketing',
    etiquetas: ['drive', 'documentos', 'materiales']
  },
  {
    id: 'acceso-documents',
    titulo: 'Documents',
    categoria: 'Redacción',
    descripcion: 'Espacio para redactar manuales, reglamentos y guías formales antes de publicarlos.',
    tipo: 'Editor',
    estado: 'Flujo definido',
    responsable: 'Dirección nacional',
    enlace: '#operaciones',
    etiquetas: ['manuales', 'reglamentos', 'guias']
  },
  {
    id: 'acceso-hostinger',
    titulo: 'Hostinger Horizons',
    categoria: 'Publicación',
    descripcion: 'Destino para crear o publicar una versión React del portal cuando se active el lanzamiento.',
    tipo: 'Publicación',
    estado: 'Preparado',
    responsable: 'Equipo técnico',
    enlace: '#inicio',
    etiquetas: ['hostinger', 'publicacion', 'react']
  }
];

window.FGDLL_DATA = {
  CATALOGO_COMPLETO,
  PAQUETE_DIA_PADRE,
  PAQUETE_ANIVERSARIOS_PDF,
  PORTAL_SECTIONS,
  SERVICE_DASHBOARD,
  OPERATIONS_RESOURCES,
  TRAINING_COURSES,
  COMMUNICATIONS,
  MARKETING_ASSETS,
  DIRECTORY_ENTRIES,
  NATIONAL_DIRECTIONS,
  ACCESS_LINKS
};
