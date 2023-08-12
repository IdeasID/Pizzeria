/*
 * Middleware validateSchema()
 * Recibe un Shchema y valida los datos
 */
export const validateSchema = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ error: error.errors.map((e) => e.message) });
  }
};
