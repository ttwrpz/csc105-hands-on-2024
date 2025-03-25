import type { Context, Next } from 'hono';
import type { CreateTodoInput, UpdateTodoInput } from '../types/index.ts';

export async function validateIdParam(c: Context, next: Next) {
  try {
    const id = c.req.param('id');

    if (!id || isNaN(Number(id))) {
      return c.json({ error: 'Id is required and must be a number' }, 400);
    }

    await next();
  } catch (error) {
    return c.json({ error: 'Invalid JSON in request body' }, 400);
  }
}

export async function validateCreateTodo(c: Context, next: Next) {
  try {
    const body = await c.req.json();

    if (!body.title || typeof body.title !== 'string') {
      return c.json({ error: 'Title is required and must be a string' }, 400);
    }

    if (body.completed !== undefined && typeof body.completed !== 'boolean') {
      return c.json({ error: 'Completed must be a boolean' }, 400);
    }

    // Store validated data for the next handler
    c.set('todoData', body as CreateTodoInput);

    await next();
  } catch (error) {
    return c.json({ error: 'Invalid JSON in request body' }, 400);
  }
}

export async function validateUpdateTodo(c: Context, next: Next) {
  try {
    const body = await c.req.json();

    if (!body.title || typeof body.title !== 'string') {
      return c.json({ error: 'Title is required and must be a string' }, 400);
    }

    if (typeof body.completed !== 'boolean') {
      return c.json({ error: 'Completed is required and must be a boolean' }, 400);
    }

    c.set('todoData', body);

    await next();
  } catch (error) {
    return c.json({ error: 'Invalid JSON in request body' }, 400);
  }
}

export async function validatePatchTodo(c: Context, next: Next) {
  try {
    const body = await c.req.json();

    if (body.title !== undefined && typeof body.title !== 'string') {
      return c.json({ error: 'Title must be a string' }, 400);
    }

    if (body.completed !== undefined && typeof body.completed !== 'boolean') {
      return c.json({ error: 'Completed must be a boolean' }, 400);
    }

    c.set('todoData', body as UpdateTodoInput);

    await next();
  } catch (error) {
    return c.json({ error: 'Invalid JSON in request body' }, 400);
  }
}