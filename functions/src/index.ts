const { onRequest } = require('firebase-functions/v2/https');
const express = require('express');
const app = express();
// build multiple CRUD interfaces:
app.get('/', async (req: any, res: any) => {

});


// Expose Express API as a single Cloud Function:
exports.widgets = onRequest(app);
