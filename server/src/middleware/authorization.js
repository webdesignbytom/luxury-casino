const { Prisma } = require('@prisma/client');
const prisma = require('../utils/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { findUserByEmail } = require('../domain/users');

const authorization = async (req, res, next) => {

  const header = req.header('authorization');

  if (!header) {
    return res
      .status(409)
      .json({ error: 'Failed to find authorization header', code: `409` });
  }

  const [type, token] = req.get('authorization').split(' ');

  if (type !== `Bearer`) {
    return res
      .status(409)
      .json({ error: `Expected Bearer for 'type' but got ${type} instead`, code: `409` });
  }

  try {
    //
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    const foundUser = await findUserByEmail(decodedToken.email);

    req.user = foundUser;

  } catch (error) {
    //
    return res.status(500).json({
      error: error.message,
      message: `Internal server error`,
      code: `500`,
    });
  }

  next();
};

module.exports = {
  authorization,
};