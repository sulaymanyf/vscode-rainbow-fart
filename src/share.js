/**
 * This module share data and objects between modules.
 */
const vscode = require('vscode');
const os = require("os");

module.exports = {
    play(name) {
        console.log("Playing voice - " + name);
        this.playVoiceRes && this.playVoiceRes.send(name);
    },
    uri(thepath) {
        if (os.type() == "Windows_NT") {
            thepath = "file:///"+thepath.replace(/\\/g,"/");
        }
        return vscode.Uri.parse(thepath);
    }
};