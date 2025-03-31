import React from 'react';
import { Button, QRCode, Space} from 'antd';

const QrTransaction = () => {
  return (
    <div>

      <div
        style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}
      >
        <QRCode value="https://example.com" size={450} />
      </div>
      <Space>
        <Button>Tải ảnh lên</Button>
        <Button>Kết nối thiết bị</Button>
      </Space>
    </div>
  );
};

export default QrTransaction;
