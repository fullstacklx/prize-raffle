import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import { expect } from 'chai'
import { App } from '../../src/components/App'

const { renderIntoDocument, scryRenderedDOMComponentsWithTag } = ReactTestUtils

describe('App', () => {
  it('renders a div with the class container', () => {
    const component = renderIntoDocument(
      <App />
    )

    const div = scryRenderedDOMComponentsWithTag(component, 'div')

    expect(div.length).to.be.at.least(1)
    expect(div[0].className).to.equal('container')
  })
})
