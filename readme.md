# scaffolder

CLI for rapidly building test files 


[![Known Vulnerabilities](https://snyk.io/test/npm/scaffolder/badge.svg)](https://snyk.io/test/npm/gforce)
<a href="https://npmcharts.com/compare/scaffolder?minimal=true"><img src="https://img.shields.io/npm/dm/scaffolder.svg?sanitize=true" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/scaffolder"><img src="https://img.shields.io/npm/v/scaffolder.svg?sanitize=true" alt="Version"></a>
<a href="https://www.npmjs.com/package/scaffolder"><img src="https://img.shields.io/npm/l/scaffolder.svg?sanitize=true" alt="License"></a>

## Install
```
npm i scaffolder -g
```

## Usage

#### Create jest test file template
```js
//cli
scaffolder jester myfileName myFunc myExpectedSuccessResult myExpectedErrorResult 
```
```js
//myFileName.test.js
describe('myFunc', () => { 
    beforeAll(async() => { 
        //todo 
    }); 
        
    test('success', async() => { 
        const result  = myFunc(); 
        expect(result).toEqual(myExpectedSuccessResult); 
    }); 
    
    test('error', async() => { 
        try { 
            myFunc(); 
        } 
        catch (err) { 
            expect(err).toEqual(myExpectedErrorResult); 
        } 
    }); 
});
```


## License

See [license](LICENSE) (MIT License).

## Authors

- Gilad Shohat <gilad.shohat@gmail.com>
