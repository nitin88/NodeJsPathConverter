/// <reference path="./typings/index.d.ts" />
"use strict";
var path = require('path');
var os = require('os');
function getPathInput(path) {
    if (os.platform() == 'win32') {
        return pathToWindows(path);
    }
    else {
        return pathToPosix(path);
    }
}
exports.getPathInput = getPathInput;
/**
* Converts given path string to POSIX type path string
* it will replace the windows file path seperator to unix file path seperator
*
* @param     pathInput  input path
* @returns   string
*/
function pathToPosix(pathInput) {
    var p = path.normalize(pathInput);
    var path_regex = /\/\//;
    p = p.replace(/\\/g, "/");
    while (p.match(path_regex)) {
        p = p.replace(path_regex, "/");
    }
    return p;
}
exports.pathToPosix = pathToPosix;
/**
 * Converts given path string to Windows type path string
 * it will replace the Posix file path seperator to Windows file path seperator
 *
 * @param     pathInput  input path
 * @returns   string
 */
function pathToWindows(pathInput) {
    var p = pathToPosix(pathInput);
    return p.replace(/\//g, "\\");
}
exports.pathToWindows = pathToWindows;
