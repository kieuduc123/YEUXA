import React from "react";
import { Layout, Form, Input, Button, Checkbox, Divider, Progress, Avatar } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import "antd/dist/reset.css";

const { Header, Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header className="bg-white text-gray-400 text-center font-bold py-4">
        PG-001_Step1
      </Header>

      {/* Content */}
      <Content className="flex justify-center p-6">
        <div className="w-full max-w-4xl bg-pink-100 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-6">YEUXA</h1>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Form giao dịch */}
            <div className="flex-1 p-6 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">Cổng giao dịch trung gian</h2>
              <div className="flex mb-4">
                <Button type="primary" className="mr-2">
                  Số tài khoản
                </Button>
                <Button>Mã QR</Button>
              </div>

              <Form layout="vertical">
                <Form.Item name="bank">
                  <Input placeholder="Ngân hàng" />
                </Form.Item>
                <Form.Item name="account">
                  <Input placeholder="Số tài khoản" />
                </Form.Item>
                <Form.Item name="username">
                  <Input placeholder="Tên người dùng" />
                </Form.Item>
                <Form.Item name="amount">
                  <Input placeholder="Số tiền" />
                </Form.Item>
                <Form.Item name="note">
                  <Input placeholder="Nội dung" />
                </Form.Item>
                <Form.Item name="agree" valuePropName="checked">
                  <Checkbox>Chấp nhận điều khoản và chính sách</Checkbox>
                </Form.Item>
                <Form.Item>
                  <Button type="primary" block>
                    Giao dịch
                  </Button>
                </Form.Item>
              </Form>
            </div>

            {/* Thông tin giao dịch */}
            <div className="flex-1 p-6 bg-pink-100 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Avatar src="https://placehold.co/40x40" />
                <span className="ml-2">Nguyễn Tiến Hùng</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Giao dịch đang thực hiện</h3>

              <Progress percent={100} success={{ percent: 66 }} showInfo={false} />

              <div className="mt-4">
                <div className="flex justify-between mb-2">
                  <span>Số tiền</span>
                  <span>VND 1.000.000</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Đến</span>
                  <span>Nguyễn Tiến Hùng</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>
                    Phí dịch vụ <InfoCircleOutlined />
                  </span>
                  <span>Miễn phí</span>
                </div>
              </div>

              <Divider />

              <div className="flex justify-between font-bold">
                <span>Tổng (Phí)</span>
                <span>1.000.000</span>
              </div>

              <Input value="10.00" className="mt-4" />
            </div>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default App;
