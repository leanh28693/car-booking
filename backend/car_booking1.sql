-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost
-- Thời gian đã tạo: Th10 21, 2019 lúc 03:24 AM
-- Phiên bản máy phục vụ: 10.1.38-MariaDB
-- Phiên bản PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `car_booking1`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `arrival_place`
--

CREATE TABLE `arrival_place` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `arrival_place`
--

INSERT INTO `arrival_place` (`id`, `name`, `description`, `date_create`) VALUES
(2, 'Vũng tàu', 'Vũng tàu top 1', '2019-10-09 07:25:57'),
(3, 'Phan Phiết', 'Phan Phiết', '2019-10-09 07:26:15');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `booking`
--

CREATE TABLE `booking` (
  `id` int(11) NOT NULL,
  `date` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `time` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `type_of_car` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `customer_name` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `customer_phone` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `arrival_place` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `departure_place` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pickup_place` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `place_of_guest` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `NCC` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `proceeds_vnd` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `proceeds_usd` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `revenue_vnd` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `revenue_usd` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `profit` varchar(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `partner` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `seller` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `note` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `date_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_update` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `arrival_place_id` int(11) NOT NULL,
  `departure_place_id` int(11) NOT NULL,
  `NCC_id` int(11) NOT NULL,
  `partner_id` int(11) NOT NULL,
  `type_of_car_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `booking`
--

INSERT INTO `booking` (`id`, `date`, `time`, `type_of_car`, `customer_name`, `customer_phone`, `arrival_place`, `departure_place`, `pickup_place`, `place_of_guest`, `NCC`, `price`, `proceeds_vnd`, `proceeds_usd`, `revenue_vnd`, `revenue_usd`, `profit`, `partner`, `seller`, `note`, `user_id`, `date_create`, `date_update`, `arrival_place_id`, `departure_place_id`, `NCC_id`, `partner_id`, `type_of_car_id`) VALUES
(1, '20/10/2019', '20:20', '4 seat', 'khánh', '0452336270', 'Phan thiết, bình thuận', 'hồ chí minh', '120 quận 1', 'phú thuỷ', 'ONA', '100', NULL, '120', NULL, '20', '20', 'marhub', 'anh', 'không có', 1, '2019-10-12 01:16:41', NULL, 1, 1, 1, 1, 1),
(2, '20/10/2019', '20:20', '4 seat', 'anh', '0452336270', 'hô chi minh', 'ho chi minh', 'quan 1', 'quan 2', 'tourleva', '100', NULL, '200', NULL, '100', '100', 'marhub', 'anh', 'khong', 1, '2019-10-12 01:51:20', NULL, 1, 1, 1, 1, 1),
(3, '20/10/2019', '20:20', '4 seat', 'anh', '0452336270', 'hô chi minh', 'ho chi minh', 'quan 1', 'quan 2', 'tourleva', '100', NULL, '200', NULL, '100', '100', 'marhub', 'anh', 'khong', 1, '2019-10-12 01:51:36', NULL, 1, 1, 1, 1, 1),
(4, '20/10/2019', '20:20', '4 seat', 'anh', '0452336270', 'hô chi minh', 'ho chi minh', 'quan 1', 'quan 2', 'tourleva', '100', NULL, '200', NULL, '100', '100', 'marhub', 'anh', 'khong', 1, '2019-10-12 01:51:43', NULL, 1, 1, 1, 1, 1),
(5, '20/10/2019', '20:20', '4 seat', 'anh', '0452336270', 'hô chi minh', 'ho chi minh', 'quan 1', 'quan 2', 'tourleva', '100', NULL, '200', NULL, '100', '100', 'marhub', 'anh', 'khong', 1, '2019-10-12 01:51:46', NULL, 1, 1, 1, 1, 1),
(6, '20/10/2019', '20:20', '4 seat', 'anh', '0452336270', 'hô chi minh', 'ho chi minh', 'quan 1', 'quan 2', 'tourleva', '100', NULL, '200', NULL, '100', '100', 'marhub', 'anh', 'khong', 1, '2019-10-12 01:51:48', NULL, 1, 1, 1, 1, 1),
(7, '20/10/2019', '20:20', '4 seat', 'anh', '0452336270', 'hô chi minh', 'ho chi minh', 'quan 1', 'quan 2', 'tourleva', '100', NULL, '200', NULL, '100', '100', 'marhub', 'anh', 'khong', 1, '2019-10-12 01:51:50', NULL, 1, 1, 1, 1, 1),
(8, '20/10/2019', '20:20', '4 seat', 'anh', '0452336270', 'hô chi minh', 'ho chi minh', 'quan 1', 'quan 2', 'tourleva', '100', NULL, '200', NULL, '100', '100', 'marhub', 'anh', 'khong', 1, '2019-10-12 01:51:53', NULL, 1, 1, 1, 1, 1),
(9, '20/10/2019', '20:20', '4 seat', 'anh', '0452336270', 'hô chi minh', 'ho chi minh', 'quan 1', 'quan 2', 'tourleva', '100', NULL, '200', NULL, '100', '100', 'marhub', 'anh', 'khong', 1, '2019-10-12 01:51:55', NULL, 1, 1, 1, 1, 1),
(10, '20/10/2019', '20:20', '4 seat', 'anh', '0452336270', 'hô chi minh', 'ho chi minh', 'quan 1', 'quan 2', 'tourleva', '100', NULL, '200', NULL, '100', '100', 'marhub', 'anh', 'khong', 1, '2019-10-12 01:51:57', NULL, 1, 1, 1, 1, 1),
(11, '20/10/2019', '20:20', '4 seat', 'anh', '0452336270', 'hô chi minh', 'ho chi minh', 'quan 1', 'quan 2', 'tourleva', '100', NULL, '200', NULL, '100', '100', 'marhub', 'anh', 'khong', 1, '2019-10-12 01:52:02', NULL, 1, 1, 1, 1, 1),
(12, '20/10/2019', '20:20', '4 seat', 'anh', '0452336270', 'hô chi minh', 'ho chi minh', 'quan 1', 'quan 2', 'tourleva', '100', NULL, '200', NULL, '100', '100', 'marhub', 'anh', 'khong', 1, '2019-10-12 01:52:05', NULL, 1, 1, 1, 1, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `department`
--

INSERT INTO `department` (`id`, `name`, `description`, `date_create`) VALUES
(1, 'seller', 'seller', '2019-10-11 12:24:52'),
(2, 'Accountant', 'Accountant', '2019-10-11 12:25:06');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `departure_place`
--

CREATE TABLE `departure_place` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `departure_place`
--

INSERT INTO `departure_place` (`id`, `name`, `description`, `date_create`) VALUES
(1, 'Phan Thiết', 'Phan Thiết', '2019-10-09 07:26:39'),
(4, 'Phú Quý', 'Phú Quý Việt Nam', '2019-10-10 10:12:59');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `NCC`
--

CREATE TABLE `NCC` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `NCC`
--

INSERT INTO `NCC` (`id`, `name`, `description`, `date_create`) VALUES
(1, 'Tourleva', NULL, '2019-10-09 08:47:48'),
(2, 'ADT', NULL, '2019-10-09 08:48:02'),
(3, 'NH sơn', NULL, '2019-10-09 08:48:27');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `register`
--

CREATE TABLE `register` (
  `id` int(11) NOT NULL,
  `first_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `last_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `department` int(11) NOT NULL,
  `user_category` int(11) NOT NULL,
  `address` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `phone` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `token` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `register`
--

INSERT INTO `register` (`id`, `first_name`, `last_name`, `username`, `password`, `department`, `user_category`, `address`, `phone`, `email`, `token`, `date_create`) VALUES
(5, 'admin', 'admin', 'admin', 'admin', 1, 1, 'admin', '0333333333', 'admin@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDAwIn0.NGEtiEvkwNZbSanZlb5_689bmuBwLJunaci8NipvdVY', '2019-10-09 07:21:47');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `type_of_car`
--

CREATE TABLE `type_of_car` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `supplier` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `type_of_car`
--

INSERT INTO `type_of_car` (`id`, `name`, `supplier`, `description`, `date_create`) VALUES
(1, '16 seat', 'Tourleva', 'xe 16 chổ', '2019-10-09 08:24:13'),
(2, '4 seat', 'Marhub', 'xe 4 chổ', '2019-10-09 08:24:35'),
(3, '7 seat', 'Marhub', 'Xe 7 chổ', '2019-10-09 08:25:06'),
(4, '45 seat', 'Tourleva', 'xe 45 chổ', '2019-10-09 08:25:36');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_category`
--

CREATE TABLE `user_category` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_create` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_category`
--

INSERT INTO `user_category` (`id`, `name`, `description`, `date_create`) VALUES
(1, 'admin', 'admin', '2019-10-08 01:30:15'),
(2, 'seller', 'seller', '2019-10-08 01:30:23');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `arrival_place`
--
ALTER TABLE `arrival_place`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `departure_place`
--
ALTER TABLE `departure_place`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `NCC`
--
ALTER TABLE `NCC`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `register`
--
ALTER TABLE `register`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `type_of_car`
--
ALTER TABLE `type_of_car`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user_category`
--
ALTER TABLE `user_category`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `arrival_place`
--
ALTER TABLE `arrival_place`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `department`
--
ALTER TABLE `department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `departure_place`
--
ALTER TABLE `departure_place`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `NCC`
--
ALTER TABLE `NCC`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT cho bảng `type_of_car`
--
ALTER TABLE `type_of_car`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `user_category`
--
ALTER TABLE `user_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
