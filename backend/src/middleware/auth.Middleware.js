import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];
  console.log(token)
  if (!token) {
    return res.status(403).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;       // Attach user ID
    req.userRole = decoded.role;   // Optionally attach role if needed
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

