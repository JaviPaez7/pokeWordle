export const translateType = (type: string | undefined): string => {
    if (!type) return '';
    const typesMap: Record<string, string> = {
        normal: 'Normal',
        fighting: 'Lucha',
        flying: 'Volador',
        poison: 'Veneno',
        ground: 'Tierra',
        rock: 'Roca',
        bug: 'Bicho',
        ghost: 'Fantasma',
        steel: 'Acero',
        fire: 'Fuego',
        water: 'Agua',
        grass: 'Planta',
        electric: 'Eléctrico',
        psychic: 'Psíquico',
        ice: 'Hielo',
        dragon: 'Dragón',
        dark: 'Siniestro',
        fairy: 'Hada',
    };
    return typesMap[type.toLowerCase()] || type;
};

export const translateHabitat = (habitat: string | undefined): string => {
    if (!habitat) return '';
    const habitatMap: Record<string, string> = {
        cave: 'Cueva',
        forest: 'Bosque',
        grassland: 'Pradera',
        mountain: 'Montaña',
        rare: 'Raro',
        'rough-terrain': 'Escarpado',
        sea: 'Mar',
        urban: 'Ciudad',
        'waters-edge': 'Orilla',
        unknown: 'Desconocido',
    };
    return habitatMap[habitat.toLowerCase()] || habitat;
};

export const formatStage = (stage: string | number | undefined): string => {
    if (stage === undefined) return '';
    const s = String(stage).replace(/Stage\s*/i, '');
    if (s === '1') return 'Básico';
    if (s === '2') return 'Fase 1';
    if (s === '3') return 'Fase 2';
    return `Fase ${s}`;
};

export const formatValue = (key: string, value: string | number | undefined): string => {
    if (value === undefined || value === 'N/A') return value === 'N/A' ? '-' : '';
    if (key === 'type' || key === 'secondaryType') {
        return translateType(String(value));
    }
    if (key === 'habitat') {
        return translateHabitat(String(value));
    }
    if (key === 'evolutionStage') {
        return formatStage(value);
    }
    if (key === 'height') {
        const valStr = String(value).replace(/m$/i, '');
        return `${valStr}m`;
    }
    if (key === 'weight') {
        const valStr = String(value).replace(/kg$/i, '');
        return `${valStr}kg`;
    }
    return String(value);
};
