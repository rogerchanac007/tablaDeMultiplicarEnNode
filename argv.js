const argv = require("yargs").option(
    "b",{alias:"base", type:"number"}
    ).argv;

module.exports = argv