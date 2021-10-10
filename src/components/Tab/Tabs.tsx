import React from 'react'
import { TabItemProp } from './TabItem'

interface TabsProps {
  defaultIndex: string;
  children?: React.ReactNode;
}
const Tabs: React.FC<TabsProps> = (props) => {
  const { children } = props
  const renderChildrenHeader = () => {
    const header = React.Children.map(children, child => {
      const childElement = child as React.FunctionComponentElement<TabItemProp>
      const { title } = childElement.props
      return <div className="bk-tab-item">{ title}</div>
    })
    return header
  }
  return (
    <div className="bk-tabs">
      <div className="bk-tabs-nav">
        { renderChildrenHeader() }
      </div>
      { children }
    </div>
  )
}

Tabs.defaultProps = {
  defaultIndex: ''
}
export default Tabs