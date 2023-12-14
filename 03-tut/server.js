const http = require("http");
const path = require("paht");
const fs = require("fs");
const fsPromises = require("fs").promises;

const logEvents = require("./logEvents");
const EventEmmiter = require("events");

class Emmiter extends EventEmmiter {}

const myEmmiter = new Emmiter();
