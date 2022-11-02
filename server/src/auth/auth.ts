import e from "express";

const jwt = require("jsonwebtoken");
const jwksClient = require("jwks-rsa");

export const verifyUser = (request, response, next) => {
  const valid = (err, user) => {
    request.user = user;
    next();
  };

  const client = jwksClient({ jwksUri: process.env.JWKS_URI });

  const getKey = (header, callback) => {
    client.getSigningKey(header.kid, (err, key) => {
      if (err) {
        console.log(err);
        callback(err);
      } else {
        const signingKey = key.publicKey || key.rsaPublicKey;
        callback(null, signingKey);
      }
    });
  };

  try {
    const token = request.headers.authorization.split(" ")[1];

    jwt.verify(token, getKey, {}, valid);
  } catch (error) {
    next("Not Authorized");
  }
};
