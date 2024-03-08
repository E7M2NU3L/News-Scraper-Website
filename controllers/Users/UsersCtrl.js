// importing essential modules
const express = require('express');
const bcrypt = require('bcrypt');

// Controllers
const LoginCtrl = (req, res) => {
    try {
        res.json({
            status: 'success',
            message: true
        })
    } catch (error) {
        res.json({
            status: 'error',
            message: error.message,
        })
    }
}

const RegisterCtrl = (req, res) => {
    try {
        res.json({
            status: 'success',
            message: true
        })
    } catch (error) {
        res.json({
            status: 'error',
            message: error.message,
        })
    }
}

const LogoutCtrl = (req, res) => {
    try {
        res.json({
            status: 'success',
            message: true
        })
    } catch (error) {
        res.json({
            status: 'error',
            message: error.message,
        })
    }
}

// module exports
module.exports = {
    LoginCtrl,
    RegisterCtrl,
    LogoutCtrl
}