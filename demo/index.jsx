import React from 'react';
import ReactDOM from 'react-dom';
import Suggest from '../src/index.jsx';

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
