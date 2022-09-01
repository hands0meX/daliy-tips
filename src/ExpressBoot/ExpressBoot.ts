const express = require('express')


export class ExpressBoot {
    public init() {
        return express()
    }
}