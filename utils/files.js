'use strict';

const { readFile, writeFile } = require('fs');
const { mkdir, appendFile } = require('fs/promises');

async function jsonReader(path) {
    return await readFile(path, 'utf8', async (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                try {
                    await mkdir('./data');
                    await appendFile(path, JSON.stringify([]), 'utf8');
                } catch (err) {
                    throw err;
                }
            }
            throw err;
        };
        return JSON.parse(data);    
    });
}

async function jsonWriter(path, data) {
    return await writeFile(path, JSON.stringify(data), 'utf8', (err) => {
        if (err) throw err;
        return data;
    });
}

module.exports = {
    jsonReader,
    jsonWriter,
};