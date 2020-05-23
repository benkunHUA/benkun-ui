import React, { useState } from 'react';
import Alert from './components/Alert/alert';

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
      
    </div>
  );
}

export default App;
