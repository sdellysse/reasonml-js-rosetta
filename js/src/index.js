const createExpress = require("express");
const readFile = require("fs").promises.readFile;

const express = createExpress();

const renderIndex = () => readFile(`${__dirname}/../../common/index.html`, { encoding: 'UTF-8' });

express.get("/", (req, res) => {
    return renderIndex()
        .then(html => {
            res.write(html);
            res.end();
        })
});


express.listen(3000);