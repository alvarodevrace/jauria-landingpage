export interface NavLink {
  label: string;
  href: string;
}

export interface PracticeArea {
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface Membresia {
  name: string;
  price: number;
  period: string;
  billing: string;
  popular: boolean;
  benefits: string[];
  waMessage: string;
}

export interface ClassSlot {
  time: string;
  type: 'WOD';
  coach?: string;
}

export interface DaySchedule {
  day: string;
  short: string;
  classes: ClassSlot[];
  summary?: string;
}

export interface Testimonio {
  name: string;
  initials: string;
  role: string;
  text: string;
  color: string;
}

export interface ContactDetail {
  whatsappNumber: string;
  whatsappDisplay: string;
  instagramUrl: string;
  instagramHandle: string;
  facebookUrl: string;
  responseCopy: string;
  responseExpectation: string;
  locationLabel: string;
  serviceHours: string[];
  mapEmbedUrl: string;
}

export interface ClubMessage {
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  featured?: boolean;
}

export interface WellnessMetric {
  label: string;
  value: string;
  progress: number;
  detail: string;
}

export const landingDataStatus = {
  issue: 'ALV-53',
  dependency: 'ALV-50',
  note: 'Datos reales del coach pendientes. No reemplazar placeholders sin fuente validada.'
} as const;

export const navLinks: NavLink[] = [
  { label: 'Experiencia', href: '#galeria' },
  { label: 'Áreas', href: '#programas' },
  { label: 'Membresías', href: '#membresias' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Comunidad', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
  { label: 'Privacidad', href: '#privacidad' }
];

export const contactDetails: ContactDetail = {
  whatsappNumber: '593983936154',
  whatsappDisplay: '+593 98 393 6154',
  instagramUrl: 'https://www.instagram.com/jauriastrengthandfitness/',
  instagramHandle: '@jauriastrengthandfitness',
  facebookUrl: 'https://www.facebook.com/jauriastrengthandfitness/?locale=es_LA',
  responseCopy: 'Respuesta rápida en horario del box',
  responseExpectation: 'Respondemos en horario del box, normalmente el mismo dia.',
  locationLabel: 'Isla Baltra, Quito, Ecuador',
  serviceHours: ['Lun–Vie: 6:00 am – 10:00 am · 4:00 pm – 9:00 pm', 'Sáb: 8:00 am – 10:00 am'],
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7936!2d-78.4845541!3d-0.1663393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMDDCsDEwJzAwLjYiUyA3OMKwMjknMDQuNiJX!5e0!3m2!1ses!2sec!4v1'
};

export const heroJoinMessage = 'Hola, quiero unirme a Jauría Strength and Fitness';

export const clubMessages: ClubMessage[] = [
  {
    title: 'Más energía',
    description: 'Entrena para sentirte mejor en tu día, no solo para terminar cansado.'
  },
  {
    title: 'Más disciplina',
    description: 'Clases guiadas, estructura clara y una comunidad que te ayuda a sostener el hábito.'
  },
  {
    title: 'Más confianza',
    description: 'Aprendes, progresas y vuelves a creer en tu cuerpo paso a paso.'
  }
];

export const galleryImages: GalleryImage[] = [
  { src: 'assets/images/jauria2.jpg', alt: 'Atletas entrenando en Jauría', featured: true },
  { src: 'assets/images/2024-02-26.jpg', alt: 'Clase funcional en el box' },
  { src: 'assets/images/2024-02-28.jpg', alt: 'Entrenamiento grupal' },
  { src: 'assets/images/2024-02-281.jpg', alt: 'Sesión guiada para nuevos atletas' },
  { src: 'assets/images/2024-02-283.jpg', alt: 'Trabajo técnico con barra' },
  { src: 'assets/images/unnamed6.jpg', alt: 'Comunidad Jauría después de entrenar', featured: true }
];

export const wellnessMetrics: WellnessMetric[] = [
  {
    label: 'Energía',
    value: '78%',
    progress: 78,
    detail: 'Entrenar con regularidad cambia cómo llegas a tu día.'
  },
  {
    label: 'Fuerza',
    value: '86%',
    progress: 86,
    detail: 'Movimientos bien enseñados para progresar sin improvisar.'
  },
  {
    label: 'Hábito',
    value: '91%',
    progress: 91,
    detail: 'La constancia nace cuando el entorno te sostiene.'
  }
];

export const slides: string[] = [
  'assets/images/jauria2.jpg',
  'assets/images/2024-02-26.jpg',
  'assets/images/2024-02-28.jpg',
  'assets/images/2024-02-284.jpg',
  'assets/images/unnamed6.jpg',
  'assets/images/unnamed7.jpg'
];

export const practiceAreas: PracticeArea[] = [
  {
    title: 'Metcon',
    description: 'Acondicionamiento metabólico para empujar el motor: correr, remar, saltar cuerda y sostener intensidad.',
    image: 'assets/images/2024-02-28.jpg',
    tag: 'Condición'
  },
  {
    title: 'Gymnastics',
    description: 'Movimientos con el propio peso corporal: dominadas, flexiones, toes-to-bar, pinos y control corporal.',
    image: 'assets/images/unnamed8.jpg',
    tag: 'Control'
  },
  {
    title: 'Weightlifting',
    description: 'Levantamiento olímpico y técnica de barra para snatch, clean & jerk y posiciones eficientes.',
    image: 'assets/images/2024-02-283.jpg',
    tag: 'Técnica'
  },
  {
    title: 'Powerlifting',
    description: 'Fuerza bruta aplicada a sentadilla, peso muerto, presses y patrones de empuje pesados.',
    image: 'assets/images/2024-02-281.jpg',
    tag: 'Fuerza'
  },
  {
    title: 'Skills',
    description: 'Sesiones dedicadas a practicar con calma la técnica de un movimiento difícil hasta dominarlo.',
    image: 'assets/images/unnamed3.jpg',
    tag: 'Precisión'
  }
];

export const membresias: Membresia[] = [
  {
    name: 'Mensual',
    price: 45,
    period: '/mes',
    billing: 'Facturación mensual',
    popular: false,
    benefits: [
      'Acceso ilimitado WOD',
      'Evaluación inicial',
      'App de seguimiento',
      'Comunidad Jauría'
    ],
    waMessage: 'Hola, me interesa la membresía Mensual de Jauría'
  },
  {
    name: 'Trimestral',
    price: 38,
    period: '/mes',
    billing: 'Facturación cada 3 meses · $114 total',
    popular: true,
    benefits: [
      'Acceso ilimitado WOD',
      'Evaluación inicial',
      'App de seguimiento',
      'Comunidad Jauría',
      'Seguimiento de progresos'
    ],
    waMessage: 'Hola, me interesa la membresía Trimestral de Jauría'
  },
  {
    name: 'Anual',
    price: 30,
    period: '/mes',
    billing: 'Facturación anual · $360 total',
    popular: false,
    benefits: [
      'Acceso ilimitado WOD',
      'Evaluación inicial',
      'App de seguimiento',
      'Comunidad Jauría',
      'Nutrición básica incluida'
    ],
    waMessage: 'Hola, me interesa la membresía Anual de Jauría'
  }
];

export const schedule: DaySchedule[] = [
  {
    day: 'Lunes',
    short: 'LUN',
    summary: '6:00 am – 10:00 am / 4:00 pm – 9:00 pm',
    classes: [
      { time: '06:00', type: 'WOD', coach: 'Miguel' },
      { time: '07:00', type: 'WOD', coach: 'Sara' },
      { time: '08:00', type: 'WOD', coach: 'Miguel' },
      { time: '09:00', type: 'WOD', coach: 'Sara' },
      { time: '16:00', type: 'WOD', coach: 'Carlos' },
      { time: '17:00', type: 'WOD', coach: 'Sara' },
      { time: '18:00', type: 'WOD', coach: 'Carlos' },
      { time: '19:00', type: 'WOD', coach: 'Miguel' },
      { time: '20:00', type: 'WOD', coach: 'Sara' },
      { time: '21:00', type: 'WOD', coach: 'Miguel' }
    ]
  },
  {
    day: 'Martes',
    short: 'MAR',
    summary: '6:00 am – 10:00 am / 4:00 pm – 9:00 pm',
    classes: [
      { time: '06:00', type: 'WOD', coach: 'Sara' },
      { time: '07:00', type: 'WOD', coach: 'Miguel' },
      { time: '08:00', type: 'WOD', coach: 'Sara' },
      { time: '09:00', type: 'WOD', coach: 'Miguel' },
      { time: '16:00', type: 'WOD', coach: 'Carlos' },
      { time: '17:00', type: 'WOD', coach: 'Miguel' },
      { time: '18:00', type: 'WOD', coach: 'Carlos' },
      { time: '19:00', type: 'WOD', coach: 'Sara' },
      { time: '20:00', type: 'WOD', coach: 'Miguel' },
      { time: '21:00', type: 'WOD', coach: 'Carlos' }
    ]
  },
  {
    day: 'Miércoles',
    short: 'MIÉ',
    summary: '6:00 am – 10:00 am / 4:00 pm – 9:00 pm',
    classes: [
      { time: '06:00', type: 'WOD', coach: 'Carlos' },
      { time: '07:00', type: 'WOD', coach: 'Miguel' },
      { time: '08:00', type: 'WOD', coach: 'Carlos' },
      { time: '09:00', type: 'WOD', coach: 'Sara' },
      { time: '16:00', type: 'WOD', coach: 'Sara' },
      { time: '17:00', type: 'WOD', coach: 'Miguel' },
      { time: '18:00', type: 'WOD', coach: 'Sara' },
      { time: '19:00', type: 'WOD', coach: 'Carlos' },
      { time: '20:00', type: 'WOD', coach: 'Miguel' },
      { time: '21:00', type: 'WOD', coach: 'Carlos' }
    ]
  },
  {
    day: 'Jueves',
    short: 'JUE',
    summary: '6:00 am – 10:00 am / 4:00 pm – 9:00 pm',
    classes: [
      { time: '06:00', type: 'WOD', coach: 'Miguel' },
      { time: '07:00', type: 'WOD', coach: 'Sara' },
      { time: '08:00', type: 'WOD', coach: 'Miguel' },
      { time: '09:00', type: 'WOD', coach: 'Sara' },
      { time: '16:00', type: 'WOD', coach: 'Carlos' },
      { time: '17:00', type: 'WOD', coach: 'Sara' },
      { time: '18:00', type: 'WOD', coach: 'Miguel' },
      { time: '19:00', type: 'WOD', coach: 'Carlos' },
      { time: '20:00', type: 'WOD', coach: 'Sara' },
      { time: '21:00', type: 'WOD', coach: 'Miguel' }
    ]
  },
  {
    day: 'Viernes',
    short: 'VIE',
    summary: '6:00 am – 10:00 am / 4:00 pm – 9:00 pm',
    classes: [
      { time: '06:00', type: 'WOD', coach: 'Sara' },
      { time: '07:00', type: 'WOD', coach: 'Carlos' },
      { time: '08:00', type: 'WOD', coach: 'Sara' },
      { time: '09:00', type: 'WOD', coach: 'Miguel' },
      { time: '16:00', type: 'WOD', coach: 'Miguel' },
      { time: '17:00', type: 'WOD', coach: 'Carlos' },
      { time: '18:00', type: 'WOD', coach: 'Sara' },
      { time: '19:00', type: 'WOD', coach: 'Carlos' },
      { time: '20:00', type: 'WOD', coach: 'Miguel' },
      { time: '21:00', type: 'WOD', coach: 'Sara' }
    ]
  },
  {
    day: 'Sábado',
    short: 'SÁB',
    summary: '8:00 am – 10:00 am',
    classes: [
      { time: '08:00', type: 'WOD', coach: 'Miguel' },
      { time: '09:00', type: 'WOD', coach: 'Carlos' },
      { time: '10:00', type: 'WOD', coach: 'Sara' }
    ]
  }
];

export const testimonios: Testimonio[] = [
  {
    name: 'Andrés Mora',
    initials: 'AM',
    role: 'Atleta — 2 años',
    color: '#E03A2F',
    text: 'Jauría cambió mi vida. Llegué sin saber nada de CrossFit y ahora compito a nivel nacional. Los coaches son increíbles y la comunidad te impulsa a dar siempre más.'
  },
  {
    name: 'Paola Vásquez',
    initials: 'PV',
    role: 'Atleta — 1 año',
    color: '#2979FF',
    text: 'El mejor box de Quito sin duda. La programación es inteligente, los coaches te corrigen con detalle y el ambiente es único. Nunca pensé que me iba a enamorar del CrossFit así.'
  },
  {
    name: 'Roberto Chávez',
    initials: 'RC',
    role: 'Atleta — 3 años',
    color: '#FF9800',
    text: 'Llevo 3 años entrenando en Jauría y sigo mejorando. La comunidad que se ha formado aquí es algo especial. No es solo un gym, es tu segunda familia.'
  },
  {
    name: 'Valeria Torres',
    initials: 'VT',
    role: 'Atleta — 6 meses',
    color: '#4CAF50',
    text: 'Vine por los WODs y me quedé por todo lo demás. La programación es retadora, pero los coaches siempre te ayudan a escalar y progresar. 100% recomendado.'
  }
];

export const leadPrograms: string[] = practiceAreas.map((area) => area.title);

export function createWhatsAppUrl(message?: string): string {
  const baseUrl = `https://wa.me/${contactDetails.whatsappNumber}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}
