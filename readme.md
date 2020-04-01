# Batten

CLI scaffolder for rapidly building test files 


[![Known Vulnerabilities](https://snyk.io/test/npm/batten/badge.svg)](https://snyk.io/test/npm/batten)
<a href="https://npmcharts.com/compare/Batten?minimal=true"><img src="https://img.shields.io/npm/dm/Batten.svg?sanitize=true" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/Batten"><img src="https://img.shields.io/npm/v/Batten.svg?sanitize=true" alt="Version"></a>
<a href="https://www.npmjs.com/package/Batten"><img src="https://img.shields.io/npm/l/Batten.svg?sanitize=true" alt="License"></a>

## Install
```
npm i batten -g
```

## Usage

#### Create jest test file template
```js
//cli
jester myfileName myFuncName myExpectedSuccessResult myExpectedErrorResult 
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