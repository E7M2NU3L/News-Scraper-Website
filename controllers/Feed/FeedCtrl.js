// import essential modules
const express = require('express');

// controllers
const SendRequest = (req, res) => {
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

const FetchAllNews =(req, res) => {
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

const FetchSingleNews = (req, res) => {
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

// export the module
module.exports = {
    FetchAllNews,
    FetchSingleNews,
    SendRequest
}