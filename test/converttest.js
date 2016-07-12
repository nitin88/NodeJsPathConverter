"use strict";
/// <reference path="../typings/index.d.ts" />
var pathconvert = require('../convert');
var os = require('os');
var assert = require('assert');
describe('Path Convert Tests', function () {
    describe('Test auto normalize paths to undelying os', function () {
        //normalizePath tests
        it('gets path value with normalize path', function (done) {
            this.timeout(1000);
            var inputValue = "/etc/usr\\someRandomFile.txt";
            if (os.platform() == 'win32') {
                assert.equal(pathconvert.getPathInput(inputValue), '\\etc\\usr\\someRandomFile.txt');
            }
            else {
                assert.equal(pathconvert.getPathInput(inputValue), "/etc/usr/someRandomFile.txt");
            }
            done();
        });
        //pathToPosix tests
        it('Test posix file path functionality', function (done) {
            this.timeout(1000);
            assert.equal(pathconvert.pathToPosix('c:\\windows\\test.txt'), 'c:/windows/test.txt');
            assert.equal(pathconvert.pathToPosix('c:\\windows\\..\\b.txt'), 'c:/b.txt');
            assert.equal(pathconvert.pathToPosix('c:\\windows\\..\\node\\a.txt'), 'c:/node/a.txt');
            assert.equal(pathconvert.pathToPosix('c:\\windows/a.txt'), 'c:/windows/a.txt');
            assert.equal(pathconvert.pathToPosix('c:\\windows\\..\\node/b.txt'), 'c:/node/b.txt');
            assert.equal(pathconvert.pathToPosix('//windows\\unix/mixed'), '/windows/unix/mixed');
            assert.equal(pathconvert.pathToPosix('\\windows//unix/mixed'), '/windows/unix/mixed');
            assert.equal(pathconvert.pathToPosix('////\\windows\\..\\unix/mixed/'), '/unix/mixed/');
            done();
        });
        //pathToWindows tests
        it('Test Windows file path functionality', function (done) {
            this.timeout(1000);
            assert.equal(pathconvert.pathToWindows('c:\\windows\\test.txt'), 'c:\\windows\\test.txt');
            assert.equal(pathconvert.pathToWindows('c:\\windows\\..\\b.txt'), 'c:\\b.txt');
            assert.equal(pathconvert.pathToWindows('c:\\windows\\..\\node\\a.txt'), 'c:\\node\\a.txt');
            assert.equal(pathconvert.pathToWindows('c:\\windows/a.txt'), 'c:\\windows\\a.txt');
            assert.equal(pathconvert.pathToWindows('c:\\windows\\..\\node/b.txt'), 'c:\\node\\b.txt');
            assert.equal(pathconvert.pathToWindows('//windows\\unix/mixed'), '\\windows\\unix\\mixed');
            assert.equal(pathconvert.pathToWindows('\\windows//unix/mixed'), '\\windows\\unix\\mixed');
            assert.equal(pathconvert.pathToWindows('////\\windows\\..\\unix/mixed/'), '\\unix\\mixed\\');
            done();
        });
    });
});
