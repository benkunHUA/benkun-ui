import React, { useState } from 'react';
import Alert from './components/Alert/alert';
import Button from './components/Button/button';
import Tabs from './components/Tab/Tabs'
import TabItem from './components/Tab/TabItem'

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      {
        visible && 
        <Alert 
          type="success" 
          closeable 
          title="alert 标题" 
          message="alert 信息"
          onCancle={() => setVisible(!visible)}
        />
      }
      <Button btnType="primary"> button </Button>
      <Tabs defaultIndex="first">
        <TabItem title="first">first</TabItem>
        <TabItem title="secend">secend</TabItem>
        <TabItem title="third">third</TabItem>
      </Tabs>
    </div>
  );
}

export default App;
