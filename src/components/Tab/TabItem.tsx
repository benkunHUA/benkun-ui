import React from 'react'

export interface TabItemProp {
  title: string;
  children?: React.ReactNode
}

const TabItem: React.FC<TabItemProp> = (props) => {
  const { children } = props
  return (
    <div className="bk-tab-pane">
      { children }
    </div>
  )
}

export default TabItem