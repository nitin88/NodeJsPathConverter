/// <reference path="./typings/index.d.ts" />

import path = require('path');
import os = require('os');

export function getPathInput(path: string): string {
    if (os.platform() == 'win32') {
        return pathToWindows(path);
    } else {
        return pathToPosix(path);
    }
}

/**
* Converts given path string to POSIX type path string
* it will replace the windows file path seperator to unix file path seperator
* 
* @param     pathInput  input path
* @returns   string
*/
export function pathToPosix(pathInput: string): string {
    let p = path.normalize(pathInput);
    let path_regex = /\/\//;
    p = p.replace(/\\/g, "/");
    while (p.match(path_regex)) {
        p = p.replace(path_regex, "/");
    }
    return p;
}

/**
 * Converts given path string to Windows type path string
 * it will replace the Posix file path seperator to Windows file path seperator
 * 
 * @param     pathInput  input path
 * @returns   string
 */
export function pathToWindows(pathInput: string): string {
    let p = pathToPosix(pathInput);
    return p.replace(/\//g, "\\");
}
