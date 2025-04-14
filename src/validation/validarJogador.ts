import z, { date } from 'zod';
import { Generos } from '../enum/genero';

const enumGeneros = ['Masculino', 'Feminino'] as const;

const regex = /^\d{2}\/\d{2}\/\d{4}$/;

export const jogadorSchema = z.object({
    id: z.string(),
    nome: z.string().min(3, 'Nome deve contar no mínimo 3 caracteres').max(30, 'Nome deve conter no máximo 30 caracteres'),
    idade: z.number(),
    genero: z.enum(enumGeneros),
    email: z.string().email(),
    senha: z.string()
        .min(8, 'Senha deve conter no mínimo 8 caracteres!')
        .max(20, 'Senha pode conter no máximo 20 caracteres!')
        .regex(/[a-z]/, 'Senha precisa conter pelo menos um caractere minusculo!')
        .regex(/[A-Z]/, 'Senha precisa conter pelo menos um caractere Maiusculo!')
        .regex(/\d/, 'Senha precisa conter pelo menos um número!')
        .regex(/[!@#$%^&(),.?]/, 'Senha precisa conter pelo menos um caractere especial!'),
    personagens: z.array(z.number().int().positive()).optional()
})

export type usuarioSchema = z.infer<typeof jogadorSchema>;