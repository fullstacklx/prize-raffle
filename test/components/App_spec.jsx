import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { expect } from 'chai'
import { App } from '../../src/components/App'

const { renderIntoDocument, scryRenderedDOMComponentsWithTag } = ReactTestUtils

describe('App', () => {
  it('renders an h1 with a given pageTitle prop', () => {
    const component = renderIntoDocument(
      <App pageTitle={ 'Hello World' } />
    )

    const h1 = scryRenderedDOMComponentsWithTag(component, 'h1')

    expect(h1.length).to.equal(1)
    expect(h1[0].textContent).to.equal('Hello World')
  })
})
