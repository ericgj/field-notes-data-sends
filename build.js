'use strict';

var path = require('path')
var has = hasOwnProperty

var Metalsmith = require('metalsmith')
  , branch     = require('metalsmith-branch')
  , markdown   = require('metalsmith-markdown')
  , drafts     = require('metalsmith-drafts')
  , permalinks = require('metalsmith-permalinks')
  , templates  = require('metalsmith-templates')

function filetype(name){
  return function(filename,props){
    return (props.type == name);
  }
}

function hasFlag(flag){
  return function(filename,props){
    return !!props[flag];
  }
}

function basesort(a,b,dir){
  dir = dir || 1
  return dir * ( a == b ? 0 : (a < b ? -1 : 1) )
}

function sortby(prop,dir){
  return function(a,b){
    return basesort(a[prop],b[prop],dir)
  }
}

function index(files,metalsmith,done){
  var idx = {}
  setImmediate(done);
  Object.keys(files).forEach( function(file){
    var data = files[file]
    if (!has.call(data,'type')) return;
    var coll = idx[data.type] = idx[data.type] || [];
    data.filename = file;
    coll.push(data);
  })
  idx['intro'].sort( sortby('filename',1) )
  idx['meta'].sort(  sortby('filename',1) )
  idx['diary'].sort( sortby('date',-1) )

  var m = metalsmith.metadata();
  m['index'] = idx;
}

function rename(patt,repl){
  return function(files,metalsmith,done){
    setImmediate(done);
    Object.keys(files).forEach( function(file){
      var data = files[file];
      if (!patt.test(file)) return;
      delete files[file];
      files[file.replace(patt,repl)] = data;
    })
  }
}


Metalsmith(__dirname)
  .source('content')
  .use( index  )
  .use(
    branch('text/*.md')

      .use( branch( hasFlag('templated') )
              .use( templates({ engine: 'swig', inPlace: true }) )
      )

      .use( branch( 'text/index.md' )
              .use( markdown() )
              .use( rename(/.*/, 'index.html') )
      )

      .use( branch( filetype('intro') )
              .use( markdown() )
              .use( permalinks({ pattern: ':title' }) )
      )
      .use( branch( filetype('meta') )
              .use( markdown() )
              .use( permalinks({ pattern: 'meta/:title' }) )
      )
      .use( branch( filetype('diary') )
              .use( markdown() )
              .use( permalinks({ pattern: ':date/:title' }) )
      )

      .use( templates({ engine: 'swig', directory: 'templates', default: 'index.swig' })
      )
  )
  .build( function(err){ if (err) throw(err); } );

/*
      .use( branch( hasFlag('templated') )
              .use( templates({ engine: 'swig', inPlace: true }) )
              .use( markdown() )
          )
*/
