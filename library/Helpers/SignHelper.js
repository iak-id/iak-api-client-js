const crypto = require("crypto");

export function hashSign(username, key, salt) {
    return crypto
        .createHash("md5")
        .update(`${username}${key}${salt}`)
        .digest("hex")
}