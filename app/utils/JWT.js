'use strict'

import jwt         from 'jsonwebtoken'
import config   from './config';

function decodeJWT(token) {
    return new Promise(function (resolve, reject) {

       jwt.verify(token, config.jwt_secret, (err, decoded) => {
            if (err) {
                console.log(err);
                reject(err)
            } else {
                resolve(decoded)
            }
       });

    });
}

function signUserWithToken(user) {

    // Don't sign these values, since they take too much space!
    delete user.dataValues.password;
    delete user.dataValues.token;
    delete user.dataValues.contactsList;
    delete user.dataValues.notificationTokens;

    return new Promise(function (resolve, reject) {
        jwt.sign(user.dataValues, config.jwt_secret, {
            issuer:    user.dataValues.phoneNumber,
            expiresIn: '7 days'
        }, token => {

        user.update({ token: token, lastSeen: Date.now() })
            .then((user) => {
                delete user.dataValues.password;
                delete user.dataValues.contactsList;
                delete user.dataValues.notificationTokens;

                resolve(user);
            })
            .catch( err => {
                reject(err)
            });
        })
    })
}

export { decodeJWT, signUserWithToken }

