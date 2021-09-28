import React from 'react'
import { render } from '@testing-library/react'
import Button from './button'
// https://zh-hans.reactjs.org/docs/test-utils.html
describe('button', () => {
  it('should be render', () => {
    const { container } = render(<Button>hello</Button>)
    const element = container.querySelector('.btn')
    expect(element).toBeInTheDocument()
  })

  it('shounld have diffrent class by type prop', () => {
    const { container } = render(<Button btnType="primary" size="large">hello</Button>)
    const element = container.querySelector('.btn')
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('btn-primary btn-large')
  })
})