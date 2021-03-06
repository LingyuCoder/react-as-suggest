# react-as-suggest

[![Test coverage](https://img.shields.io/coveralls/LingyuCoder/react-as-suggest.svg?style=flat-square)](https://coveralls.io/r/LingyuCoder/react-as-suggest?branch=master)
[![Build Status](https://travis-ci.org/LingyuCoder/react-as-suggest.png)](https://travis-ci.org/LingyuCoder/react-as-suggest)
[![Dependency Status](https://david-dm.org/LingyuCoder/react-as-suggest.svg)](https://david-dm.org/LingyuCoder/react-as-suggest)
[![devDependency Status](https://david-dm.org/LingyuCoder/react-as-suggest/dev-status.svg)](https://david-dm.org/LingyuCoder/react-as-suggest#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/react-as-suggest.svg?style=flat-square)](http://npmjs.org/package/react-as-suggest)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/react-as-suggest.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/react-as-suggest.svg?style=flat-square)](https://npmjs.org/package/react-as-suggest)

> A React auto-suggest text input

## Demo

[Demo here](http://LingyuCoder.github.io/react-as-suggest/demo/index.html)

## Installation

```bash
$ npm install --save react-as-suggest
```

## Usage

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Suggest from 'react-as-suggest';
ReactDOM.render(
  <div className="fields">
    <div className="field">
      <Suggest placeholder="width 210px" suggests={['aaa', 'bbb', 'ccc']} width={210} />
    </div>
    <div className="field">
      <Suggest placeholder="width 280px" suggests={['aaa', 'bbb', 'ccc']}/>
    </div>
    <div className="field">
      <Suggest placeholder="width 350px" suggests={['aaa', 'bbb', 'ccc']} width={350} />
    </div>
    <div className="field">
      <Suggest placeholder="not use filter" suggests={['aaa', 'bbb', 'ccc']} useFilter={false} />
    </div>
    <div className="field">
      <Suggest placeholder="skin error" skin="error" suggests={['aaa', 'bbb', 'ccc']}/>
    </div>
    <div className="field">
      <Suggest placeholder="skin success" skin="success" suggests={['aaa', 'bbb', 'ccc']}/>
    </div>
    <div className="field">
      <Suggest disabled placeholder="disabled" suggests={['aaa', 'bbb', 'ccc']}/>
    </div>
    <div className="field">
      <Suggest placeholder="readOnly" readOnly suggests={['aaa', 'bbb', 'ccc']}/>
    </div>
    <div className="field">
      <Suggest maxHeight={80} placeholder="maxheight 80px" suggests={['aaa', 'bbb', 'ccc']}/>
    </div>
    <div className="field">
      <Suggest onBlur={val => console.log(`blur: ${val}`)} onFocus={val => console.log(`focus: ${val}`)} placeholder="event handle" suggests={['aaa', 'bbb', 'ccc']}/>
    </div>
  </div>
  , document.getElementById('demo'));

```

## Properties

[insert]: # (start:src/index.jsx|doc)
| Name | Description | Type | Required | Default Value |
| :--- | :----- | :--- | :---: | :---: |
| className | class name of the suggest input | String |  | `'ra-suggest'` |
| defaultValue | default value of the suggest input | String |  | `''` |
| disabled | whether the suggest input is disabled | Boolean |  | `false` |
| inputClassName | class name of the input | String |  | `'ra-input'` |
| maxHeight | max height of the suggest panel | Number |  | `160` |
| name | name of the suggest input in the form | String |  | `null` |
| onBlur | callback when blur | Function |  | `() => {}` |
| onChange | callback when value change | Function |  | `() => {}` |
| onFocus | callback when focus | Function |  | `() => {}` |
| placeholder | placeholder of the suggest input | String |  | `''` |
| readOnly | wheher this suggest input is readonly | Boolean |  |  |
| skin | skin of the suggest input | 'success'│'error'│'default' |  | `'default'` |
| suggests | suggset list | Array(String) |  | `[]` |
| useFilter | whether suggest is auto filter by current value | Boolean |  | `true` |
| value | current value | String |  |  |
| width | width of the suggest input | Number |  | `280` |
[insert]: # (end:src/index.jsx)

## Development

[Online test page here](http://LingyuCoder.github.io/react-as-suggest/test/test.html)

```bash
$ npm run dev # startup local dev server
$ npm run build # build
$ npm run test # run tests
$ npm run cov # run coverage
$ npm run build-demo # build demo, auto run in 'npm run build'
$ npm run build-test # build test, auto run in 'npm run build'
```

## License

The MIT License (MIT)

Copyright (c) 2015 LingyuCoder

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
