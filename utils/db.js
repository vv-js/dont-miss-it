'use strict';

const { find: findEntry, findIndex } = require('lodash');
const { jsonReader, jsonWriter } = require('./files');


module.exports = class Db {
    constructor(path) {
        (async () => {
            this.path = path;
            this.data = await jsonReader(this.path);
        })();
    }

    async create(data) {
        try {
            const entry = await this.find(data);

            if (entry) return;
            return await jsonWriter(this.path, [...this.data, data]);
        } catch (err) {
            console.log(err);
        }
    }

    async find(query) {
        try {
            return findEntry(this.data, query);
        } catch (err) {
            console.log(err);
        }
    }

    async list() {
        try {
            return this.data;
        } catch (err) {
            console.log(err);
        }
    }

    async update(query, data) {
        try {
            const entry = findIndex(this.data, query);

            if (!!entry) return;
            this.data[entry] = Object.assign(this.data[entry], data);
            return await jsonWriter(this.path, [...this.data]);
        } catch (err) {
            console.log(err);
        }
    }
}