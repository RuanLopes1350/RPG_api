import z, { date } from 'zod';
import { Generos } from '../enum/genero';
import { personagens } from '../database/personagens';

const enumGeneros = ['Masculino', 'Feminino'] as const;

const regex = /^\d{2}\/\d{2}\/\d{4}$/;

export const usuarioSchema = z.object({
    id: z.number(),
    nome: z.string().min(3).max(30),
    idade: z.number(),
    genero: z.enum(enumGeneros),
    email: z.string().email(),
    senha: z.string()
        .min(8)
        .max(20)
        .regex(/[a-z]/, 'Senha precisa conter pelo menos um caractere minusculo!')
        .regex(/[A-Z]/, 'Senha precisa conter pelo menos um caractere Maiusculo!')
        .regex(/\d/, 'Senha precisa conter pelo menos um número!')
        .regex(/[!@#$%^&(),.?]/, 'Senha precisa conter pelo menos um caractere especial!'),
    personagens: z.array(z.number().int().positive()).optional()
})

export type usuarioSchema = z.infer<typeof usuarioSchema>;