import z from 'zod';

const racasEnum = [
    'Humano',
    'Elfo',
    'Orc',
    'Goblin',
    'Demônio',
    'Anjo',
    'Demi-Humano'] as const;

const classesEnum = [
    'Guerreiro',
    'Mago',
    'Arqueiro',
    'Assassino',
    'Clerigo',
    'Bardo',
    'Necromante'] as const;

const generosEnum = ['Masculino', 'Feminino'] as const;

export const personagemSchema = z.object({
    id: z.number(),
    nome: z.string().min(3).max(70),
    raca: z.enum(racasEnum),
    idade: z.number().int().positive(),
    level: z.number().int().positive(),
    classe: z.enum(classesEnum),
    genero: z.enum(generosEnum),
    jogadorId: z.number().int().positive(),
})

export type personagemSchema = z.infer<typeof personagemSchema>;