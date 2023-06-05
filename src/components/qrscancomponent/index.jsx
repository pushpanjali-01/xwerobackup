import React, { useState } from 'react';
import QrReader from 'react-qr-scanner';

function QRScanComponent() {
    const [result, setResult] = useState('');
  
    const handleScan = (data) => {
      if (data) {
        setResult(data);
      }
    };
  
    const handleError = (error) => {
      console.error(error);
    };
  
    return (
      <div>
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '80%' }}
        />
        <p>Result: {result}</p>
      </div>
    );
  }
export default QRScanComponent