import React, { useState, useRef } from 'react';
import { Typography, Input, Space } from 'antd';
import type { InputRef } from 'antd';

const { Title, Text } = Typography;

interface  Props {
  onActive: (tab: string) => void;
}
const OtpVerification: React.FC<Props> = (props) => {
  const { onActive } = props;

  const otpLength = 6;
  const [otp, setOtp] = useState<string[]>(Array(otpLength).fill(''));
  const inputRefs = useRef<(InputRef | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < otpLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >

      <div>
        <Title level={2}>Xác nhận giao dịch</Title>
        <Title level={4}>Nhập mã OTP</Title>

        <Space size="large" style={{ margin: '20px 0' }}>
          {otp.map((digit, index) => (
            <Input
              key={index}
              value={digit}
              maxLength={1}
              ref={(el) => (inputRefs.current[index] = el)}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              style={{
                width: '50px',
                height: '50px',
                textAlign: 'center',
                fontSize: '20px',
                borderRadius: '8px',
              }}
            />
          ))}
        </Space>

        <div style={{ marginTop: '10px' }}  onClick={() => onActive('account')}>
          <Text type="secondary" style={{ cursor: 'pointer' }}>
            Thay đổi phương thức xác nhận
          </Text>
        </div>
      </div>
    </div>
  );
};

export default OtpVerification;
