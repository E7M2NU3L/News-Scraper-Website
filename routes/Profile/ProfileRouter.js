const express = require('express');
const { UploadImage, DeactivateAccount, FetchSingleProfile, ProfileUpdate } = require('../../controllers/Profile/ProfileCtrl');

// router
const ProfileRouter = express.Router();

// Routes

// 1. Dashboard update Page
ProfileRouter.post('/dashboard/update-user-info', ProfileUpdate);

// 2. upload image
ProfileRouter.post('/uplpoad-image', UploadImage);

// 3. Delete User Route
ProfileRouter.delete('/', DeactivateAccount);

// 4. Profile Page
ProfileRouter.get('', FetchSingleProfile);

// exporting the router
module.exports = ProfileRouter;