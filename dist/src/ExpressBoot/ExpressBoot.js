"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressBoot = void 0;
const express = require('express');
class ExpressBoot {
    init() {
        return express();
    }
}
exports.ExpressBoot = ExpressBoot;
