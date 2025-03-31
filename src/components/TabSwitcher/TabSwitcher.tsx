import React from 'react';
import { Button } from 'antd';

interface Props {
  activeTab: string;
  onActive: (tab: string) => void;
}

const TabSwitcher: React.FC<Props> = (props) => {
  const { onActive, activeTab } = props;
  return (
    <div className="button-group">
      <Button
        color="primary"
        variant="solid"
        onClick={() => onActive('account')}
        type={activeTab === 'account' ? 'primary' : 'default'}
      >
        Số tài khoản
      </Button>
      <Button
        color="primary"
        variant="solid"
        onClick={() => onActive('qr')}
        type={activeTab === 'qr' ? 'primary' : 'default'}
      >
        Mã QR
      </Button>
    </div>
  );
};

export default TabSwitcher;
