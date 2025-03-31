import React from 'react';
import {
  Avatar,
  Input,
  Layout,
  Card,
  Typography,
  Steps,
  Row,
  Tooltip,
} from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import './styles.scss';
import FormSection from '@/modules/YEUXAPayment/components/TransactionInfo';
import OtpVerification from '@/modules/YEUXAPayment/components/OtpVerification';
import QRTransaction from '@/modules/YEUXAPayment/components/QRTransaction/QRTransaction.tsx';
import TabSwitcher from 'components/TabSwitcher';
const { Content } = Layout;

const { Title, Text } = Typography;
const YeuxaPayment = () => {
  const [activeTab, setActiveTab] = React.useState('account');

  return (
    <Content className="content">
      <div className="container">
        <Title level={1} className={`title`}>
          YEUXA
        </Title>
        <div className="left">
          <div className="form-section">
            {activeTab !== 'otp' && (
              <>
                <Title level={2} style={{ textAlign: 'left' }}>
                  Cổng giao dịch trung gian
                </Title>
                <TabSwitcher activeTab={activeTab} onActive={setActiveTab} />
              </>
            )}

            {activeTab === 'account' && <FormSection onActive={setActiveTab}/>}
            {activeTab === 'otp' && <OtpVerification onActive={setActiveTab} />}
            {activeTab === 'qr' && <QRTransaction />}
          </div>
        </div>

        <div className="right">
          <div className="transaction-section">
            <div className="transaction-header">
              <Avatar src="https://placehold.co/60x60" />
              <Title level={4} style={{ marginBottom: '0px' }}>
                {`Nguyễn Văn A`}
              </Title>
            </div>
            <Card style={{ backgroundColor: 'transparent', border: 'none' }}>
              <Title level={4}>Giao dịch đang thực hiện</Title>

              <div className="custom-steps">
                <Steps
                  current={2}
                  size="small"
                  className="ant-steps-custom"
                  items={[
                    {
                      status: 'finish',
                      icon: <div className="step-dot active" />,
                    },
                    {
                      status: 'finish',
                      icon: <div className="step-dot active" />,
                    },
                    { status: 'process', icon: <div className="step-dot" /> },
                  ]}
                />
              </div>

              <Row justify="space-between" style={{ marginTop: 16 }}>
                <Text>Số tiền</Text>
                <Text strong>VND 1.000.000</Text>
              </Row>

              <Row justify="space-between" style={{ marginTop: 8 }}>
                <Text>Đến</Text>
                <Text strong>Nguyễn Tiến Hùng</Text>
              </Row>

              <Row justify="space-between" style={{ marginTop: 8 }}>
                <Text>
                  Phí dịch vụ{' '}
                  <Tooltip title="Không có phí giao dịch">
                    <InfoCircleOutlined style={{ color: '#1890ff' }} />
                  </Tooltip>
                </Text>
                <Text strong>Miễn phí</Text>
              </Row>
              <hr style={{ margin: '16px 0', borderTop: '1px solid #ccc' }} />
              <Row justify="space-between">
                <Text strong>Tổng (Phí)</Text>
                <Text strong style={{ fontSize: 16 }}>
                  1.000.000
                </Text>
              </Row>
              <Input
                value="1.000.000"
                style={{
                  marginTop: 16,
                  textAlign: 'center',
                  backgroundColor: '#fff',
                  borderRadius: 8,
                  fontWeight: 'bold',
                }}
              />
            </Card>
          </div>
        </div>
      </div>
    </Content>
  );
};
export default YeuxaPayment;
