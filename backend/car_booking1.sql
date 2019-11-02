-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 02, 2019 lúc 11:19 AM
-- Phiên bản máy phục vụ: 10.4.8-MariaDB
-- Phiên bản PHP: 7.3.10

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
  `date_create` timestamp NOT NULL DEFAULT current_timestamp()
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
  `date_create` timestamp NOT NULL DEFAULT current_timestamp(),
  `date_update` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `arrival_place_id` int(11) NOT NULL,
  `departure_place_id` int(11) NOT NULL,
  `NCC_id` int(11) NOT NULL,
  `partner_id` int(11) NOT NULL,
  `type_of_car_id` int(11) NOT NULL,
  `flag` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `booking`
--

INSERT INTO `booking` (`id`, `date`, `time`, `type_of_car`, `customer_name`, `customer_phone`, `arrival_place`, `departure_place`, `pickup_place`, `place_of_guest`, `NCC`, `price`, `proceeds_vnd`, `proceeds_usd`, `revenue_vnd`, `revenue_usd`, `profit`, `partner`, `seller`, `note`, `user_id`, `date_create`, `date_update`, `arrival_place_id`, `departure_place_id`, `NCC_id`, `partner_id`, `type_of_car_id`, `flag`) VALUES
(31, '1571763600000', '1571737800558', '4', 'nhat anh 3', '0352336270', '3', '1', 'áđâsd', 'áđâsd', '3', '100', '200', '90', '', '90', '100', '0', 'admin', 'sdá ád ád ád ád ád sads đasad sad sa', 5, '2019-10-22 10:09:54', NULL, 3, 1, 3, 0, 4, 1),
(32, '1571763600000', '1571799600882', '4', 'nhat anh 5', '0352336270', '3', '4', 'bbbbbbbbbbbbbbbbbbbbb', 'ssssssssssssssssss', '1', '1001', '20000', '90', '200', '10', '801', '1', 'admin', 'abc xyz abc', 6, '2019-10-23 03:47:59', NULL, 3, 4, 1, 1, 4, 0),
(33, '1572282000000', '1572318000024', '3', 'nhat anh 6', '0352336270', '3', '4', 'bbbbbbbbbbbbbbbbbbbbb', 'ssssssssssssssssss', '3', '1001', '200', '10', '200', '10', '801', '2', 'admin', ' tesst', 5, '2019-10-29 03:54:02', NULL, 3, 4, 3, 2, 3, 0),
(34, '1572368400000', '1572327900754', '4', 'nhat anh', '0352336270', '2', '4', 'bbbbbbbbbbbbbbbbbbbbb', 'ssssssssssssssssss', '3', '1001', '', '90', '', '10', '1001', '2', 'admin', 'tetetete', 5, '2019-10-29 06:59:50', NULL, 2, 4, 3, 2, 4, 0),
(35, '1569776400000', '1572331500502', '4', 'nhat anh 10', '0352336270', '3', '4', 'bbbbbbbbbbbbbbbbbbbbb', 'ssssssssssssssssss', '3', '1001', '20000', '', '10000', '', '-8999', '1', 'admin', 'tesst', 5, '2019-10-29 07:04:27', NULL, 3, 4, 3, 1, 4, 0),
(36, '1568653200000', '1572331500586', '4', 'nhat anh', '0352336270', '2', '4', 'bbbbbbbbbbbbbbbbbbbbb', 'ssssssssssssssssss', '3', '1001', '200', '', '200', '', '801', '2', 'admin', 'teetetet', 7, '2019-10-29 07:23:50', NULL, 2, 4, 3, 2, 4, 0),
(37, '1564333200000', '1572331500610', '3', 'nhat anh 2', '0352336270', '3', '1', 'bbbbbbbbbbbbbbbbbbbbb', 'ssssssssssssssssss', '3', '1001', '200', '', '20', '', '981', '1', 'admin', 'tesst tesst tesst', 5, '2019-10-29 07:24:29', NULL, 3, 1, 3, 1, 3, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `department`
--

CREATE TABLE `department` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_create` timestamp NOT NULL DEFAULT current_timestamp()
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
  `date_create` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `departure_place`
--

INSERT INTO `departure_place` (`id`, `name`, `description`, `date_create`) VALUES
(1, 'Phan Thiết', 'Phan Thiết', '2019-10-09 07:26:39'),
(4, 'Phú Quý', 'Phú Quý Việt Nam', '2019-10-10 10:12:59');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `ncc`
--

CREATE TABLE `ncc` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_create` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `ncc`
--

INSERT INTO `ncc` (`id`, `name`, `description`, `date_create`) VALUES
(1, 'Tourleva', NULL, '2019-10-09 08:47:48'),
(2, 'ADT', NULL, '2019-10-09 08:48:02'),
(3, 'NH sơn', NULL, '2019-10-09 08:48:27');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `partner`
--

CREATE TABLE `partner` (
  `id` int(11) NOT NULL,
  `name` varchar(70) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `date_create` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `partner`
--

INSERT INTO `partner` (`id`, `name`, `description`, `date_create`) VALUES
(1, 'Marhub', 'Marhub Company', '2019-10-23 03:18:27'),
(2, 'Phuong Trang', 'sss', '2019-10-23 03:18:45');

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
  `date_create` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `register`
--

INSERT INTO `register` (`id`, `first_name`, `last_name`, `username`, `password`, `department`, `user_category`, `address`, `phone`, `email`, `token`, `date_create`) VALUES
(5, 'admin', 'admin', 'admin', 'admin', 1, 1, 'admin', '0333333333', 'admin@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDAwIn0.NGEtiEvkwNZbSanZlb5_689bmuBwLJunaci8NipvdVY', '2019-10-09 07:21:47'),
(6, 'user', '01', 'user01', '123456', 2, 2, 'test', '0352336270', 'user@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDAwIn0.NGEtiEvkwNZbSanZlb5_689bmuBwLJunaci8NipvdVY', '2019-10-23 06:59:59'),
(7, 'user', '02', 'user02', '123456', 1, 3, 'test', '0352336270', 'user@gmail.com', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOiIyMDAwIn0.NGEtiEvkwNZbSanZlb5_689bmuBwLJunaci8NipvdVY', '2019-10-23 07:59:45'),
(8, 'user', '03', 'user03', '123456', 2, 2, 'test', '0352336270', 'user@gmail.com', NULL, '2019-10-24 04:13:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `type_of_car`
--

CREATE TABLE `type_of_car` (
  `id` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `supplier` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date_create` timestamp NOT NULL DEFAULT current_timestamp()
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
  `date_create` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `user_category`
--

INSERT INTO `user_category` (`id`, `name`, `description`, `date_create`) VALUES
(1, 'Admin', 'Admin', '2019-10-08 01:30:15'),
(2, 'Accountant', 'Accountant', '2019-10-08 01:30:23'),
(3, 'Seller', 'Seller', '2019-10-23 06:57:18');

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
-- Chỉ mục cho bảng `ncc`
--
ALTER TABLE `ncc`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `partner`
--
ALTER TABLE `partner`
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

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
-- AUTO_INCREMENT cho bảng `ncc`
--
ALTER TABLE `ncc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT cho bảng `partner`
--
ALTER TABLE `partner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `register`
--
ALTER TABLE `register`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT cho bảng `type_of_car`
--
ALTER TABLE `type_of_car`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT cho bảng `user_category`
--
ALTER TABLE `user_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
