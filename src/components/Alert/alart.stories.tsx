import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import '../../styles/index.scss'
import Alart from './alert'

const defaultAlart = () => (
  <Alart title="标题" message="信息"/>
)

storiesOf('Alart Component', module)
  .add('Alart', defaultAlart)