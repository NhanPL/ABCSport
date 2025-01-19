# README: Hướng dẫn chạy dự án ReactJS

## 1. Yêu cầu cơ bản
Trước khi chạy dự án, hãy đảm bảo máy của bạn đã cài đặt các công cụ sau:

1. **Node.js**: Phiên bản lớn hơn **16.x** (để đảm bảo độ tương thích).
   - Tải Node.js tại: [https://nodejs.org](https://nodejs.org)
2. **npm** hoặc **yarn**: Trình quản lý package đi kèm với Node.js.
3. **Git**: (Để clone dự án từ kho lưu trữ). Tải tại: [https://git-scm.com](https://git-scm.com).

---

## 2. Các bước chạy dự án

### Bước 1: Clone dự án từ kho lưu trữ

Dùng lệnh sau để clone dự án từ GitHub:
```bash
git clone <link-repository>
```
Thay `<link-repository>` bằng link repo của bạn.

Di chuyển vào thư mục dự án:
```bash
cd <project-folder>
```
Thay `<project-folder>` bằng tên thư mục dự án.

---

### Bước 2: Cài đặt dependencies

Chạy lệnh sau để cài đặt các package cần thiết:
```bash
npm install
```
hoặc
```bash
yarn install
```

---

### Bước 3: Chạy dự án trong môi trường local

Sử dụng lệnh sau để khởi chạy dự án:
```bash
npm start
```
hoặc
```bash
yarn start
```

Sau khi chạy, máy chủ sẽ được khởi động tại: `http://localhost:5173/`. Hãy mở trình duyệt để xem kết quả.

---
