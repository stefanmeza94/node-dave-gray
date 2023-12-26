const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message, logName) => {
  const dateTime = `${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
  const logMessage = `${dateTime}\t${uuid()}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
      fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
    }

    await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), logMessage);
  } catch (error) {
    console.log(error);
  }
};

const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.path}`, 'logReq.txt');
  next();
};

module.exports = { logEvents, logger };
