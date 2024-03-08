// import rge essential modules
const express = require('express');

// controllers
const FetchSingleProfile = (req, res) => {
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

const ProfileUpdate = (req, res) => {
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

const DeactivateAccount = (req, res) => {
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

const UploadImage = (req, res) => {
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

// export modules
module.exports = {
    UploadImage,
    DeactivateAccount,
    ProfileUpdate,
    FetchSingleProfile,
}