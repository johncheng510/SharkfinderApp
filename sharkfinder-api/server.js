'use strict';

const PORT = 3000;

const express = require('express');
const app = express();

const fs = require('fs');

app.get("/images", (req, res) => {    
    let image_array = [1, 2, 3, 4, 5, 6];
    fs.writeFile('../sharks_to_view.txt', JSON.stringify(image_array), (err) => {
        if (err) throw err;
    });
    fs.readFile('../links.txt', 'utf8', function(err, data){
        res.json({ id: image_array, links: data });
    });
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
