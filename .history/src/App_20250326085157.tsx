import React from 'react';
import { Layout, Form, Input, Button, Checkbox, Divider, Progress, Avatar } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import "antd/dist/reset.css";
import "@/styles/main.scss"

const {Content } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Content className="content">
        <div className="container">
          <h1 className="title">YEUXA</h1>
          <div className="form-container">
            <div className="form-section">
              <h2 className="form-title">Cổng giao dịch trung gian</h2>
              <div className="button-group">
                <Button type="primary" className="account-button">Số tài khoản</Button>
                <Button className="qr-button">Mã QR</Button>
              </div>
              <Form layout="vertical">
                <Form.Item>
                  <Input placeholder="Ngân hàng" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Số tài khoản" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Tên người dùng" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Số tiền" />
                </Form.Item>
                <Form.Item>
                  <Input placeholder="Nội dung" />
                </Form.Item>
                <Form.Item>
                  <Checkbox>Chấp nhận mọi điều khoản và chính sách của chúng tôi</Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" className="submit-button">Giao dịch</Button>
                </Form.Item>
              </Form>
            </div>
            <div className="transaction-section">
              <div className="transaction-header">
                <Avatar src="https://placehold.co/40x40" />
                <span>Nguyễn Tiến Hùng</span>
              </div>
              <h3 className="transaction-title">Giao dịch đang thực hiện</h3>
              <Progress percent={100} success={{ percent: 66 }} showInfo={false} />
              <div className="transaction-info">
                <div className="info-row">
                  <span>Số tiền</span>
                  <span>VND 1.000.000</span>
                </div>
                <div className="info-row">
                  <span>Đến</span>
                  <span>Nguyễn Tiến Hùng</span>
                </div>
                <div className="info-row">
                  <span>Phí dịch vụ <InfoCircleOutlined /></span>
                  <span>Miễn phí</span>
                </div>
              </div>
              <Divider />
              <div className="total-row">
                <span className="total-label">Tổng (Phí)</span>
                <span className="total-amount">1.000.000</span>
              </div>
              <Input value="10.00" />
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default App;
