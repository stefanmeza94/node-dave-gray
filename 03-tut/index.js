const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

console.log(format(new Date(), "ddmmyyyy\thh:mm:ss"));

console.log(uuid());

// nastavi od Node Events Tutorial : 00:40
