import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Alert from './alert'

describe('test alert compoment', () => {
  it('should have different type base on props', () => {
    const { container } = render(<Alert title="alert" message="alert message" type="success" />)
    // 获取根节点
    const element = container.firstChild
    expect(element).toBeInTheDocument
    expect(element).toHaveClass('bk-alert bk-alert-success')
  })
  it('should have title and mesage child', () => {
    const { container } = render(<Alert title="alert" message="alert message" type="success" />)
    // 获取根节点
    const title = container.querySelector('.bk-alert-title')
    const message = container.querySelector('.bk-alert-message')
    expect(title).toBeInTheDocument
    expect(message).toBeInTheDocument
  })
  it('can close', () => {
    const { container } = render(<Alert title="alert" message="alert message" type="success" closeable onCancle={() => jest.fn()}/>)
    // 获取根节点
    const close = container.querySelector('.bk-alert-close') as HTMLElement
    expect(close).toBeInTheDocument
    fireEvent.click(close)
    expect(jest.fn()).not.toHaveBeenCalled()
  })
})