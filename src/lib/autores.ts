export const AUTOR_IDS = ['rosine-magalhaes', 'larissa-rocha'] as const;

export type AutorId = (typeof AUTOR_IDS)[number];

export const autores: Record<AutorId, { nome: string; foto: string }> = {
  'rosine-magalhaes': {
    nome: 'Dra. Rosinê Magalhães',
    foto: '/images/socias/rosine-magalhaes.jpg',
  },
  'larissa-rocha': {
    nome: 'Dra. Larissa Rocha',
    foto: '/images/socias/larissa-rocha.jpg',
  },
};
