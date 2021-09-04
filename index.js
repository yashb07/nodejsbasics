//  Global variable declaration to test basic Node Functionality
    // console.log(global.luckyNum);
    // global.luckyNum = 34;
    // console.log(global.luckyNum);

//  Custom EventEmitter
    // const { EventEmitter } = require('events');
    // const eventEmitter = new EventEmitter();

    // eventEmitter.on('lunch', () => {
    //     console.log("yum");
    // })
    // eventEmitter.emit('lunch');

//  ReadFileSync first completed reading hello.txt and printing then moves to Wow text
//  ReadFile lets Wow be printed first to complete reading hello.txt and printing after
    // // const { readFile, readFileSync } = require('fs');
    // // const txt = readFile('./hello.txt', 'utf-8', (err, txt) => {
    // //     console.log(txt);
    // // });
    // // console.log(txt);
    // // console.log('Wow');

//  A promises, async, await approach to avoid extra ReadFile callback
    // const { readFile } = require('fs').promises;
    // async function hello() {
    //     const file = await readFile('./second.txt', 'utf-8')
    // }


// Importing external module into our Node environment
    // const myModule = require('./my-module.js')
    // console.log(myModule);


//  Express module import for NodeJS
    const express = require('express');
    const { response } = require('express');

//  File Reading using Promises to avoid extra callbacks such as below
    const { readFile } = require('fs').promises;
    const app = express();

//  Approach using standard request respone with readFile call back seperately
    // app.get('/', (request, response) => {
    //     readFile ('./index.html', 'utf-8', (err, html) => {
    //         if (err) {
    //             response.statusCode(500).send("Oops, won't work bro.");
    //         }
    //         response.send(html);
    //     })
    // });


//  Approach using Promises and async, await to reduce callbacks
    app.get('/', async(request, response) => {
        response.send (await readFile('./index.html', 'utf-8'));
    });

//  Listen to server requests on port 3000
    app.listen(process.env.PORT || 3000, () => console.log('App available on http://localhost:3000'));