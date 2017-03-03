const fs = require('fs')
const jsdom = require('mocha-jsdom')
const path = require('path')
var expect = require('expect');

describe('index', () => {
  
  jsdom({
    src: fs.readFileSync(path.resolve(__dirname, '..', 'index.js'), 'utf-8')
  })
  

  it('runs', () => {
    
    setTimeout(function(){}, 15000);
    expect(true).toEqual(true)
  })
})