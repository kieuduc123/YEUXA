import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

interface Props {
  onActive: (tab: string) => void;
}

const FormSection: React.FC<Props> = ({ onActive }) => {
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form
      .validateFields()
      .then(() => {
        onActive('otp');
      })
      .catch(() => {
        console.log('Validation failed');
      });
  };

  return (
    <div>
      <Form layout="vertical" form={form} style={{ textAlign: 'left' }}>
        <Form.Item
          label="Ngân hàng"
          name="bank"
          rules={[{ required: true, message: 'Vui lòng nhập ngân hàng' }]}
        >
          <Input placeholder="Nhập ngân hàng" />
        </Form.Item>

        <Form.Item
          label="Số tài khoản"
          name="accountNumber"
          rules={[
            { required: true, message: 'Vui lòng nhập số tài khoản' },
            { pattern: /^\d+$/, message: 'Số tài khoản chỉ chứa số' },
          ]}
        >
          <Input placeholder="Nhập số tài khoản" />
        </Form.Item>

        <Form.Item
          label="Tên người dùng"
          name="username"
          rules={[{ required: true, message: 'Vui lòng nhập tên người dùng' }]}
        >
          <Input placeholder="Nhập tên người dùng" />
        </Form.Item>

        <Form.Item
          label="Số tiền"
          name="amount"
          rules={[
            { required: true, message: 'Vui lòng nhập số tiền' },
            { pattern: /^[1-9]\d*$/, message: 'Số tiền phải lớn hơn 0' },
          ]}
        >
          <Input placeholder="Nhập số tiền" />
        </Form.Item>

        <Form.Item label="Nội dung" name="content">
          <Input placeholder="Nhập nội dung giao dịch" />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          style={{ textAlign: 'left' }}
          rules={[{ required: true, message: 'Bạn phải chấp nhận điều khoản' }]}
        >
          <Checkbox>Chấp nhận điều khoản và chính sách</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" block size="large" onClick={handleSubmit}>
            Giao dịch
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormSection;
