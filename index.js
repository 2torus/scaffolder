#!/usr/bin/env node
const fs = require('fs');

const scaffoldTestFile = () => {
    if (process.argv.length < 6) {
        return console.error('invalid arguments - please specify the following arguments: myFileName, myFunction, expectedSuccessResult, expectedErrorResult')
    };
    let filePathIndex = 2;

    const filePath = `${process.argv[filePathIndex]}.test.js`;
    const funcName = process.argv[++filePathIndex];
    const expectedSuccessResult = process.argv[++filePathIndex];
    const expectedErrorResult = process.argv[++filePathIndex];

    console.log(`scaffolding your test file... :)
    `);

    const jestSuite =
        `describe('${funcName}', () => { 
            beforeAll(async() => { 
                //todo 
            }); 
                
            test('success', async() => { 
                const result  = ${funcName}(); 
                expect(result).toEqual(${expectedSuccessResult}); 
            }); 
            
            test('error', async() => { 
                try { 
                    ${funcName}(); 
                } 
                catch (err) { 
                    expect(err).toEqual(${expectedErrorResult}); 
                } 
            }); 
        });`;
    const fileContent = new Uint8Array(Buffer.from(jestSuite));
    createFile(filePath, fileContent);
};

const createFile = (filePath, fileContent) => {
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) { return console.error('An error occurred: ', err); }
        console.log('your file is made!');
    });
};

scaffoldTestFile();