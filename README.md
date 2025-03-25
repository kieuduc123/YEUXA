# React + TypeScript + Vite
### Môi trường chạy dự án: Node.js v20.14.0
https://nodejs.org/download/release/v20.14.0/

===

Các bước cài đặt: (chế độ development)
1. clone code
2. cài đặt thư viện: npm i
3. Update file .env.development (nếu cần thiết)
4. Chạy dự án: npm run dev

===

## Công cụ và thư viện
- **Framework**: React 18 + TypeScript
- **Build tool**: Vite
- **CSS**: SCSS + Ant Design (antd)
- **API**: Axios
- **Linting/Formatting**: ESLint + Prettier
- **Node.js**: v20.14.0



Mô tả quy trình xây dựng dự án "Yeuxa"

Dự án: Yeuxa

Mục tiêu xây dựng: Dự án Cổng Giao Dịch Trung Gian, nhằm giải quyết vấn đề lừa đảo
trong các giao dịch chuyển tiền trực tuyến hiện nay. Với sự phát triển mạnh mẽ
của công nghệ và xu hướng chuyển tiền trực tuyến, chúng ta đang phải đối mặt
với không ít nguy cơ lừa đảo, từ các giao dịch giả mạo đến việc chiếm đoạt thông
tin tài chính của người dùng.


Công Nghệ Chính (Frontend): React + TypeScript, Vite, Ant Design, Axios.

1. Xác định yêu cầu và mục tiêu
    # Mục tiêu
        Tạo một ứng dụng Frontend để người dùng tương tác với hệ thống ngân hàng qua giao dịch trung gian.
        Đảm bảo bảo mật thông tin (không lưu dữ liệu nhạy cảm ở client, dùng token xác thực).
        Giảm rủi ro giao dịch bằng cách xử lý lỗi và duy trì phiên đăng nhập tự động.
    # Lý do
        Bảo mật là ưu tiên hàng đầu trong ứng dụng tài chính.
        Giao diện thân thiện và hiệu suất cao là cần thiết để tăng trải nghiệm người dùng.
2. Lựa chọn công nghệ và thư viện
Dựa trên yêu cầu, tôi đã chọn các công cụ và thư viện sau:

Dependencies (thư viện chính)

# react@^18.3.1 và react-dom@^18.3.1:
Lý do: React là thư viện mạnh mẽ để xây dựng giao diện động. Phiên bản 18 được chọn vì tương thích tốt với Ant Design v5 và ổn định hơn so với React 19 (hiện chưa được Antd hỗ trợ đầy đủ).
Cách dùng: Xây dựng các component giao diện.

# antd@^5.24.5:
Lý do: Cung cấp bộ UI component đẹp, sẵn dùng (Button, Table, Modal...), tiết kiệm thời gian thiết kế.
Cách dùng: Dùng trong các trang như Login, Dashboard để tạo giao diện đồng nhất.

# axios@^1.8.4:
Lý do: Thư viện gọi API mạnh mẽ, hỗ trợ interceptor để xử lý token và lỗi.
Cách dùng: Gọi API backend và quản lý refresh token.

# sass@^1.86.0:
Lý do: SCSS cho phép viết CSS module hóa, dễ bảo trì và tái sử dụng (biến, nesting).
Cách dùng: Tùy chỉnh giao diện bên cạnh Antd.

# async-mutex@^0.5.0:
Lý do: Ngăn race condition khi refresh token, đảm bảo chỉ một request refresh được thực hiện cùng lúc.
Cách dùng: Trong logic refresh token của Axios.

DevDependencies (công cụ phát triển)

# vite@^6.2.0 và @vitejs/plugin-react@^4.3.4:
Lý do: Vite là build tool nhanh, nhẹ, hỗ trợ HMR (Hot Module Replacement) tốt hơn Create React App.
Cách dùng: Chạy dev server và build dự án.

# typescript@~5.7.2:
Lý do: Đảm bảo type safety, giảm lỗi runtime trong dự án tài chính cần độ tin cậy cao.
Cách dùng: Viết code với type definitions.

# eslint@^9.23.0 và các plugin liên quan`:
Lý do: Chuẩn hóa code, phát hiện lỗi sớm (ESLint, Prettier, plugin React).
Cách dùng: Lint code bằng lệnh npm run lint.

# @types/react@^18.3.11 và @types/react-dom@^18.3.1:
Lý do: Cung cấp type definitions cho React 18, đồng bộ với phiên bản runtime.
Cách dùng: Hỗ trợ TypeScript hiểu cú pháp React.

# @types/node@^22.13.13:
Lý do: Hỗ trợ TypeScript hiểu các API Node.js (như path trong vite.config.ts).





3. Thiết lập cấu trúc thư mục

Dự án được tổ chức như sau để dễ mở rộng và bảo trì:

/yeuxa
├── /public                # Tài nguyên tĩnh
│   ├── favicon.ico
│   └── index.html
├── /src                   # Source code
│   ├── /assets            # Hình ảnh, font
│   ├── /components        # Component tái sử dụng
│   │   ├── /common        # Button, Input...
│   │   └── /layout        # Header, Footer...
│   ├── /pages             # Các trang chính
│   │   ├── /Login
│   │   ├── /Dashboard
│   │   └── /Transactions
│   ├── /styles            # SCSS styles
│   │   ├── /base          # Reset CSS, biến
│   │   └── main.scss      # Style chính
│   ├── /utils             # Hàm tiện ích
│   ├── /services          # API calls
│   │   ├── axios.customize.ts # Cấu hình Axios
│   │   └── api.ts         # Hàm gọi API
│   ├── /types             # TypeScript types
│   ├── App.tsx            # Component chính
│   └── main.tsx           # Entry point
├── .env                   # Biến môi trường
├── .gitignore             # Bỏ qua node_modules
├── package.json           # Quản lý dependencies
├── tsconfig.json          # Cấu hình TS
├── vite.config.ts         # Cấu hình Vite
└── README.md              # Tài liệu


# Lý do: 
# Phân tách rõ ràng: Components, pages, services tách biệt để dễ quản lý.
# Module hóa: Styles và types riêng biệt để tái sử dụng.
# Tính mở rộng: Dễ thêm tính năng mới (ví dụ: trang Profile).