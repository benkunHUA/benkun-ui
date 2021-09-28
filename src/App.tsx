import React, { useState } from 'react';
import Alert from './components/Alert/alert';
import Button from './components/Button/button';

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
    </div>
  );
}

export default App;
