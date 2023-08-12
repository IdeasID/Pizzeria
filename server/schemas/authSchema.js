import { z } from 'zod';

/**
 * Middlewares para validar los datos de registro
 */
export const registerSchema = z.object({
  username: z.string({
    required_error: 'Username is required',
  }),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({ message: 'Invalid Email' }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, { message: 'Password must be at leaast 6 characters' }),
  phone: z.string({
    required_error: 'Phone is required',
  }),
});

/**
 * Middlewares para validar los datos de login
 */
export const loginSchema = z.object({
  username: z.string({
    required_error: 'Username is required',
  }),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(6, { message: 'Password must be at leaast 6 characters' }),
});
