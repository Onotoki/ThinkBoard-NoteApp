# ThinkBoard (Note App)

Chào mừng bạn đến với **ThinkBoard**, một ứng dụng ghi chú hiện đại được thiết kế để giúp bạn lưu giữ, sắp xếp và quản lý những suy nghĩ của mình một cách dễ dàng.

## 🚀 Xem trực tiếp (Live Demo)

Bạn có thể truy cập ứng dụng trực tiếp tại đây: [ThinkBoard Live](https://thinkboard-noteapp.onrender.com/)

## 🛠️ Công nghệ sử dụng

### Frontend (Giao diện)
- **React** (thông qua Vite)
- **Tailwind CSS** & **DaisyUI** để thiết kế giao diện
- **React Router** để điều hướng trang
- **Axios** để gọi API
- **Lucide React** cho các icon
- **React Hot Toast** cho thông báo hiển thị

### Backend (Máy chủ)
- **Node.js** & **Express**
- **MongoDB** & **Mongoose** để lưu trữ dữ liệu
- **Upstash Redis** & **Ratelimit** để giới hạn số lượng yêu cầu (rate limiting) và bộ nhớ đệm
- **Cors** & **Dotenv**

## ✨ Tính năng nổi bật

- Tạo, xem, cập nhật và xóa ghi chú (CRUD).
- Giao diện người dùng trực quan và hỗ trợ responsive (tương thích trên nhiều thiết bị).
- API backend nhanh và đáng tin cậy.
- Tính năng giới hạn số lượng yêu cầu để đảm bảo sự ổn định của hệ thống.

## 💻 Hướng dẫn chạy dự án

Để chạy dự án này trên máy tính của bạn, hãy làm theo các bước sau:

### Yêu cầu hệ thống

- Node.js (khuyến nghị phiên bản v18 trở lên)
- Tài khoản MongoDB hoặc instance chạy tại local
- Tài khoản Upstash Redis (để dùng các tính năng rate limiting)

### Cài đặt

1. **Clone repository (tải mã nguồn về máy):**
   ```bash
   git clone https://github.com/Onotoki/ThinkBoard-NoteApp.git
   cd ThinkBoard-NoteApp
   ```

2. **Cài đặt toàn bộ thư viện:**
   Tại thư mục gốc của dự án, chạy lệnh:
   ```bash
   npm run build
   ```
   *(Lệnh này sẽ tự động cài đặt các thư viện cho cả frontend và backend, đồng thời build frontend.)*

3. **Biến môi trường (Environment Variables):**
   Tạo một file `.env` bên trong thư mục `backend` và thêm các biến môi trường cần thiết (ví dụ: `MONGO_URI`, `PORT`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`).

4. **Khởi chạy ứng dụng:**
   Bạn có thể chạy server backend bằng lệnh:
   ```bash
   npm start
   ```
   Để chạy ở môi trường phát triển (development mode):
   - Cho backend: `cd backend && npm run dev`
   - Cho frontend: `cd frontend && npm run dev`

## 🤝 Lời cảm ơn (Credits)

Đặc biệt gửi lời cảm ơn tới **[Codesistency](https://www.youtube.com/@codesistency)** vì đã truyền cảm hứng và là nền tảng cho dự án này!

---
*Được tạo ra với ❤️ bởi Onotoki*
