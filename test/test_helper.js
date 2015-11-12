import jsdom from 'jsdom'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'

/**
 * we need to setup jsdom version of document and window and add them to
 * the Node global ojbect so that React can use them.
 */
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
const win = doc.defaultView

global.document = doc
global.window = win

/**
 * We also need to hoist all the window attributes to Node's global object
 * so that these attributes can be used without 'window.' (just like it happens
 * in a web browser).
 */
Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key]
  }
})

chai.use(chaiImmutable)

// avoid trying to load imported css files
require.extensions['.css'] = () => ({})
