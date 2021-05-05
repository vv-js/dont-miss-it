'use strict';

const { resolve } = require('path');
const { find: findEntry, findIndex } = require('lodash');
const config = require('../../config');
const { jsonReader, jsonWriter } = require('./files');

const path = resolve(
    __dirname,
    '..',
    '..',
    config.connection,
    'users.json'
);

async function create(user) {
    try {
        const users = await jsonReader(path);
        const entry = await find(user);

        if (entry) return;
        return await jsonWriter(path, [...users, user]);
    } catch (err) {
        console.log(err);
    }
}

async function find(query) {
    try {
        const users = await jsonReader(path);
        return findEntry(users, query);
    } catch (err) {
        console.log(err);
    }
}

async function list() {
    try {
        const users = await jsonReader(path);
        return users;
    } catch (err) {
        console.log(err);
    }
}

async function update(query, values) {
    try {
        const users = await jsonReader(path);
        const entry = findIndex(users, query);

        if (!!entry) return;
        users[entry] = Object.assign(users[entry], values);
        return await jsonWriter(path, [...users]);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    create,
    find,
    list,
    update,
};

