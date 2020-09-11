-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2020 年 08 月 23 日 17:06
-- 伺服器版本： 10.3.21-MariaDB
-- PHP 版本： 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `farmin`
--

-- --------------------------------------------------------

--
-- 資料表結構 `adjust`
--

CREATE TABLE `adjust` (
  `adjust_id` char(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `user_id` char(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `adjust_dt` datetime DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `adjust_participate_product`
--

CREATE TABLE `adjust_participate_product` (
  `adjust_id` char(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `product_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `adjust_participate_product_amount` int(11) DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `cart`
--

CREATE TABLE `cart` (
  `member_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `cart_status_id` char(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `cart_update_dt` datetime DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `cart_participate_product`
--

CREATE TABLE `cart_participate_product` (
  `member_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `product_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `cart_status`
--

CREATE TABLE `cart_status` (
  `cart_status_id` char(4) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `cart_status_name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `cart_status_desc` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `deposit`
--

CREATE TABLE `deposit` (
  `deposit_id` char(15) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `member_id` char(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `deposit_amount` float DEFAULT NULL COMMENT 'null',
  `deposit_dt` datetime DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `dispose`
--

CREATE TABLE `dispose` (
  `dispose_id` char(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `user_id` char(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `dispose_dt` datetime DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `dispose_participate_product`
--

CREATE TABLE `dispose_participate_product` (
  `dispose_id` char(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `product_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `dispose_participate_product_amount` int(11) DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `farm_info`
--

CREATE TABLE `farm_info` (
  `farm_info_id` int(11) NOT NULL COMMENT 'null',
  `farm_info_inage` longblob DEFAULT NULL COMMENT 'null',
  `farm_info_desc` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `farm_info_update_dt` datetime DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `harvest`
--

CREATE TABLE `harvest` (
  `harvest_id` char(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `user_id` char(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `harvest_dt` datetime DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `harvest`
--

INSERT INTO `harvest` (`harvest_id`, `user_id`, `harvest_dt`, `deleted_at`) VALUES
('HARR202008200000', 'ADM001', '2020-08-17 15:11:06', NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `harvest_participate_product`
--

CREATE TABLE `harvest_participate_product` (
  `harvest_id` char(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `product_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `harvest_participate_product_amount` int(11) DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `harvest_participate_product`
--

INSERT INTO `harvest_participate_product` (`harvest_id`, `product_id`, `harvest_participate_product_amount`, `deleted_at`) VALUES
('HARR202008200000', 'PD0003', 30, NULL),
('HARR202008200000', 'PD0004', 20, NULL),
('HARR202008200000', 'PD0005', 10, NULL),
('HARR202008200000', 'PD0006', 20, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `marketing_image`
--

CREATE TABLE `marketing_image` (
  `marketing_image_id` int(11) NOT NULL COMMENT 'null',
  `marketing_image_desc` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `marketing_image_data` int(11) DEFAULT NULL COMMENT 'null',
  `marketing_image_create_dt` datetime DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `member_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `member_card_id` char(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `member_name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `member_gender` int(1) DEFAULT NULL COMMENT 'null',
  `member_birthday` date DEFAULT NULL COMMENT 'null',
  `member_phone` char(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `member_email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `member_address` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `member_balance` float DEFAULT NULL COMMENT 'null',
  `member_remark` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `member`
--

INSERT INTO `member` (`member_id`, `member_card_id`, `member_name`, `member_gender`, `member_birthday`, `member_phone`, `memebr_email`, `member_address`, `member_balance`, `member_remark`, `deleted_at`) VALUES
('M10001', '1234567890', '蔣昆興', 1, '1999-01-11', '0932018375', 'neverleave0916@gmail.com', '台北市內湖區文德路101巷2號5樓', 1000, NULL, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `member_category`
--

CREATE TABLE `member_category` (
  `member_category_id` char(5) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `member_category_name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `member_category_desc` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `member_participate_member_category`
--

CREATE TABLE `member_participate_member_category` (
  `member_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `member_category_id` char(5) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `news`
--

CREATE TABLE `news` (
  `news_id` int(11) NOT NULL COMMENT 'null',
  `news_artical` varchar(10000) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `news_update_dt` datetime DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `news_participate_marketing_image`
--

CREATE TABLE `news_participate_marketing_image` (
  `news_id` int(11) NOT NULL COMMENT 'null',
  `marketing_image_id` int(11) NOT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `payment_type`
--

CREATE TABLE `payment_type` (
  `payment_type_id` char(4) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `payment_type_title` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `payment_type_desc` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `plant`
--

CREATE TABLE `plant` (
  `plant_id` char(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `user_id` char(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `plant_dt` datetime DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `plant_participate_product`
--

CREATE TABLE `plant_participate_product` (
  `plant_id` char(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `product_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `plant_participate_product_amount` int(11) DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `product`
--

CREATE TABLE `product` (
  `product_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `product_category_id` char(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `published_status_id` char(3) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `product_name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `product_unit` char(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `product_unit_price` float DEFAULT NULL COMMENT 'null',
  `product_inventory` int(11) DEFAULT NULL COMMENT 'null',
  `product_desc` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `product_growth_period` float DEFAULT NULL COMMENT 'null',
  `product_expire` float DEFAULT NULL COMMENT 'null',
  `product_default_save_amount` int(11) DEFAULT NULL COMMENT 'null',
  `product_actual_save_amount` int(11) DEFAULT NULL COMMENT 'null',
  `product_online_unit` char(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `product_online_unit_price` float DEFAULT NULL COMMENT 'null',
  `product_online_inventory` int(11) DEFAULT NULL COMMENT 'null',
  `product_online_max_inventory` int(11) DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `product`
--

INSERT INTO `product` (`product_id`, `product_category_id`, `published_status_id`, `product_name`, `product_unit`, `product_unit_price`, `product_inventory`, `product_desc`, `product_growth_period`, `product_expire`, `product_default_save_amount`, `product_actual_save_amount`, `product_online_unit`, `product_online_unit_price`, `product_online_inventory`, `product_online_max_inventory`, `deleted_at`) VALUES
('PD0001', 'PC001', 'L01', '高麗菜', '包', 40, 20, '高麗菜哈囉囉', 70, 14, 0, 0, '包', 0, 0, 0, NULL),
('PD0002', 'PC001', 'L01', '大白菜', '包', 40, 30, '大白菜', 50, 14, 0, 0, '包', 0, 0, 0, NULL),
('PD0003', 'PC001', 'L01', '小黃瓜', '包', 40, 30, '自行生產的小黃瓜', 80, 14, 0, 0, '包', 0, 0, 0, NULL),
('PD0004', 'PC001', 'L01', '大黃瓜', '包', 40, 20, '自行生產的大黃瓜', 80, 14, 0, 0, '包', 0, 0, 0, NULL),
('PD0005', 'PC001', 'L01', '芥菜', '包', 40, 10, '自行生產的芥菜', 60, 14, 0, 0, '包', 0, 0, 0, NULL),
('PD0006', 'PC001', 'L01', '小白菜', '包', 40, 20, '自行生產的小白菜', 27, 14, 0, 0, '包', 0, 0, 0, NULL),
('PD0007', 'PC002', 'L01', '地瓜', '斤', 40, 0, '自行生產的地瓜', 180, 14, 0, 0, '包', 0, 0, 0, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `product_category`
--

CREATE TABLE `product_category` (
  `product_category_id` char(5) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `product_category_name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `product_category_desc` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `product_category_img` longblob DEFAULT NULL COMMENT 'null',
  `product_category_sort` int(11) DEFAULT NULL COMMENT 'null',
  `product_category_parent` char(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `product_category`
--

INSERT INTO `product_category` (`product_category_id`, `product_category_name`, `product_category_desc`, `product_category_img`, `product_category_sort`, `product_category_parent`, `deleted_at`) VALUES
('PC001', '葉菜類', NULL, NULL, 1, NULL, NULL),
('PC002', '根莖類', NULL, NULL, 2, NULL, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `product_image`
--

CREATE TABLE `product_image` (
  `product_image_id` int(11) NOT NULL COMMENT 'null',
  `product_id` char(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `product_image_data` longblob DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `product_online_category`
--

CREATE TABLE `product_online_category` (
  `product_online_category_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `product_online_category_title` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `product_online_category_desc` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `product_online_category_img` longblob DEFAULT NULL COMMENT 'null',
  `product_online_category_sort` int(11) DEFAULT NULL COMMENT 'null',
  `product_online_category_parent` char(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `product_participate_product_online_category`
--

CREATE TABLE `product_participate_product_online_category` (
  `product_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `product_online_category_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `published_control`
--

CREATE TABLE `published_control` (
  `published_control_id` char(8) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `member_category_id` char(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `product_id` char(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `published_control_save_amount` int(11) DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `published_status`
--

CREATE TABLE `published_status` (
  `published_status_id` char(3) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `published_status_title` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `published_status_desc` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `published_status`
--

INSERT INTO `published_status` (`published_status_id`, `published_status_title`, `published_status_desc`, `deleted_at`) VALUES
('L01', '上架中', NULL, NULL),
('L02', '下架', NULL, NULL);

-- --------------------------------------------------------

--
-- 資料表結構 `purchase`
--

CREATE TABLE `purchase` (
  `purchase_id` char(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `user_id` char(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `purchase_dt` datetime DEFAULT NULL COMMENT 'null',
  `purchase_subtotal` float DEFAULT NULL COMMENT 'null',
  `purchase_discount` float DEFAULT NULL COMMENT 'null',
  `purchase_total` float DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `purchase_participate_product`
--

CREATE TABLE `purchase_participate_product` (
  `purchase_id` char(16) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `product_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `purchase_participate_product_unit` char(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `purchase_participate_product_amount` int(11) DEFAULT NULL COMMENT 'null',
  `purchase_participate_product_unit_price` float DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `renew`
--

CREATE TABLE `renew` (
  `renew_id` char(15) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `member_id` char(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `transaction_id` char(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `renew_start_dt` datetime DEFAULT NULL COMMENT 'null',
  `renew_end_dt` datetime DEFAULT NULL COMMENT 'null',
  `renew_cycle` int(11) DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `renew_participate_product`
--

CREATE TABLE `renew_participate_product` (
  `renew_id` char(15) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `product_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `renew_participate_product_amount` int(11) DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `supplier`
--

CREATE TABLE `supplier` (
  `supplier_id` char(5) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `supplier_name` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `supplier_phone` char(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `supplier_address` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `supplier_desc` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `supplier_participate_product`
--

CREATE TABLE `supplier_participate_product` (
  `supplier_id` char(5) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `product_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `supplier_participate_product_amount` int(11) DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `transaction`
--

CREATE TABLE `transaction` (
  `transaction_id` char(15) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `member_id` char(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `transaction_src_id` char(6) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `transaction_status_id` char(7) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `payment_type_id` char(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `transaction_create_dt` datetime DEFAULT NULL COMMENT 'null',
  `transaction_subtotal` float DEFAULT NULL COMMENT 'null',
  `transaction_discount` float DEFAULT NULL COMMENT 'null',
  `transaction_total` float DEFAULT NULL COMMENT 'null',
  `transaction_paid` float DEFAULT NULL COMMENT 'null',
  `transaction_pay_dt` datetime DEFAULT NULL COMMENT 'null',
  `transaction_remark` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `transaction_participate_product`
--

CREATE TABLE `transaction_participate_product` (
  `transaction_id` char(15) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `product_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `transaction_participate_product_unit` char(5) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `transaction_participate_product_amount` int(11) DEFAULT NULL COMMENT 'null',
  `transaction_participate_product_unit_price` float DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `transaction_src`
--

CREATE TABLE `transaction_src` (
  `transaction_src_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `transaction_src_name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `transaction_src_desc` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `transaction_status`
--

CREATE TABLE `transaction_status` (
  `transaction_status_id` char(7) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `transaction_status_name` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `transaction_status_desc` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- 資料表結構 `user`
--

CREATE TABLE `user` (
  `user_id` char(6) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'null',
  `user_name` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `user_account` char(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `user_password` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'null',
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_account`, `user_password`, `deleted_at`) VALUES
('ADM001', 'User01', 'Thenewestuser', 'Thenewestuser', NULL);

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `adjust`
--
ALTER TABLE `adjust`
  ADD PRIMARY KEY (`adjust_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `adjust_participate_product`
--
ALTER TABLE `adjust_participate_product`
  ADD PRIMARY KEY (`adjust_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- 資料表索引 `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`member_id`),
  ADD KEY `cart_status_id` (`cart_status_id`);

--
-- 資料表索引 `cart_participate_product`
--
ALTER TABLE `cart_participate_product`
  ADD PRIMARY KEY (`member_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- 資料表索引 `cart_status`
--
ALTER TABLE `cart_status`
  ADD PRIMARY KEY (`cart_status_id`);

--
-- 資料表索引 `deposit`
--
ALTER TABLE `deposit`
  ADD PRIMARY KEY (`deposit_id`),
  ADD KEY `member_id` (`member_id`);

--
-- 資料表索引 `dispose`
--
ALTER TABLE `dispose`
  ADD PRIMARY KEY (`dispose_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `dispose_participate_product`
--
ALTER TABLE `dispose_participate_product`
  ADD PRIMARY KEY (`dispose_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- 資料表索引 `farm_info`
--
ALTER TABLE `farm_info`
  ADD PRIMARY KEY (`farm_info_id`);

--
-- 資料表索引 `harvest`
--
ALTER TABLE `harvest`
  ADD PRIMARY KEY (`harvest_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `harvest_participate_product`
--
ALTER TABLE `harvest_participate_product`
  ADD PRIMARY KEY (`harvest_id`,`product_id`),
  ADD UNIQUE KEY `harvest_participate_product_product_id_harvest_id_unique` (`harvest_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- 資料表索引 `marketing_image`
--
ALTER TABLE `marketing_image`
  ADD PRIMARY KEY (`marketing_image_id`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`member_id`),
  ADD UNIQUE KEY `member_card_id` (`member_card_id`);

--
-- 資料表索引 `member_category`
--
ALTER TABLE `member_category`
  ADD PRIMARY KEY (`member_category_id`);

--
-- 資料表索引 `member_participate_member_category`
--
ALTER TABLE `member_participate_member_category`
  ADD PRIMARY KEY (`member_id`,`member_category_id`),
  ADD KEY `member_category_id` (`member_category_id`);

--
-- 資料表索引 `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`news_id`);

--
-- 資料表索引 `news_participate_marketing_image`
--
ALTER TABLE `news_participate_marketing_image`
  ADD PRIMARY KEY (`news_id`,`marketing_image_id`),
  ADD KEY `marketing_image_id` (`marketing_image_id`);

--
-- 資料表索引 `payment_type`
--
ALTER TABLE `payment_type`
  ADD PRIMARY KEY (`payment_type_id`);

--
-- 資料表索引 `plant`
--
ALTER TABLE `plant`
  ADD PRIMARY KEY (`plant_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `plant_participate_product`
--
ALTER TABLE `plant_participate_product`
  ADD PRIMARY KEY (`plant_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- 資料表索引 `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `product_category_id` (`product_category_id`),
  ADD KEY `published_status_id` (`published_status_id`);

--
-- 資料表索引 `product_category`
--
ALTER TABLE `product_category`
  ADD PRIMARY KEY (`product_category_id`),
  ADD KEY `product_category_parent` (`product_category_parent`);

--
-- 資料表索引 `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`product_image_id`),
  ADD KEY `product_id` (`product_id`);

--
-- 資料表索引 `product_online_category`
--
ALTER TABLE `product_online_category`
  ADD PRIMARY KEY (`product_online_category_id`),
  ADD KEY `product_online_category_parent` (`product_online_category_parent`);

--
-- 資料表索引 `product_participate_product_online_category`
--
ALTER TABLE `product_participate_product_online_category`
  ADD PRIMARY KEY (`product_id`,`product_online_category_id`),
  ADD KEY `product_online_category_id` (`product_online_category_id`);

--
-- 資料表索引 `published_control`
--
ALTER TABLE `published_control`
  ADD PRIMARY KEY (`published_control_id`),
  ADD KEY `member_category_id` (`member_category_id`),
  ADD KEY `product_id` (`product_id`);

--
-- 資料表索引 `published_status`
--
ALTER TABLE `published_status`
  ADD PRIMARY KEY (`published_status_id`);

--
-- 資料表索引 `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`purchase_id`),
  ADD KEY `user_id` (`user_id`);

--
-- 資料表索引 `purchase_participate_product`
--
ALTER TABLE `purchase_participate_product`
  ADD PRIMARY KEY (`purchase_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- 資料表索引 `renew`
--
ALTER TABLE `renew`
  ADD PRIMARY KEY (`renew_id`),
  ADD KEY `member_id` (`member_id`),
  ADD KEY `transaction_id` (`transaction_id`);

--
-- 資料表索引 `renew_participate_product`
--
ALTER TABLE `renew_participate_product`
  ADD PRIMARY KEY (`renew_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- 資料表索引 `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`supplier_id`);

--
-- 資料表索引 `supplier_participate_product`
--
ALTER TABLE `supplier_participate_product`
  ADD PRIMARY KEY (`supplier_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- 資料表索引 `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`transaction_id`),
  ADD KEY `member_id` (`member_id`),
  ADD KEY `transaction_src_id` (`transaction_src_id`),
  ADD KEY `transaction_status_id` (`transaction_status_id`),
  ADD KEY `payment_type_id` (`payment_type_id`);

--
-- 資料表索引 `transaction_participate_product`
--
ALTER TABLE `transaction_participate_product`
  ADD PRIMARY KEY (`transaction_id`,`product_id`),
  ADD KEY `product_id` (`product_id`);

--
-- 資料表索引 `transaction_src`
--
ALTER TABLE `transaction_src`
  ADD PRIMARY KEY (`transaction_src_id`);

--
-- 資料表索引 `transaction_status`
--
ALTER TABLE `transaction_status`
  ADD PRIMARY KEY (`transaction_status_id`);

--
-- 資料表索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`user_id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `farm_info`
--
ALTER TABLE `farm_info`
  MODIFY `farm_info_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'null';

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `marketing_image`
--
ALTER TABLE `marketing_image`
  MODIFY `marketing_image_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'null';

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `news`
--
ALTER TABLE `news`
  MODIFY `news_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'null';

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `product_image`
--
ALTER TABLE `product_image`
  MODIFY `product_image_id` int(11) NOT NULL AUTO_INCREMENT COMMENT 'null';

--
-- 已傾印資料表的限制式
--

--
-- 資料表的限制式 `adjust`
--
ALTER TABLE `adjust`
  ADD CONSTRAINT `adjust_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- 資料表的限制式 `adjust_participate_product`
--
ALTER TABLE `adjust_participate_product`
  ADD CONSTRAINT `adjust_participate_product_ibfk_1` FOREIGN KEY (`adjust_id`) REFERENCES `adjust` (`adjust_id`),
  ADD CONSTRAINT `adjust_participate_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- 資料表的限制式 `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`cart_status_id`) REFERENCES `cart_status` (`cart_status_id`);

--
-- 資料表的限制式 `cart_participate_product`
--
ALTER TABLE `cart_participate_product`
  ADD CONSTRAINT `cart_participate_product_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `cart` (`member_id`),
  ADD CONSTRAINT `cart_participate_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- 資料表的限制式 `deposit`
--
ALTER TABLE `deposit`
  ADD CONSTRAINT `deposit_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`);

--
-- 資料表的限制式 `dispose`
--
ALTER TABLE `dispose`
  ADD CONSTRAINT `dispose_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- 資料表的限制式 `dispose_participate_product`
--
ALTER TABLE `dispose_participate_product`
  ADD CONSTRAINT `dispose_participate_product_ibfk_1` FOREIGN KEY (`dispose_id`) REFERENCES `dispose` (`dispose_id`),
  ADD CONSTRAINT `dispose_participate_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- 資料表的限制式 `harvest`
--
ALTER TABLE `harvest`
  ADD CONSTRAINT `harvest_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- 資料表的限制式 `harvest_participate_product`
--
ALTER TABLE `harvest_participate_product`
  ADD CONSTRAINT `harvest_participate_product_ibfk_1` FOREIGN KEY (`harvest_id`) REFERENCES `harvest` (`harvest_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `harvest_participate_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- 資料表的限制式 `member_participate_member_category`
--
ALTER TABLE `member_participate_member_category`
  ADD CONSTRAINT `member_participate_member_category_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  ADD CONSTRAINT `member_participate_member_category_ibfk_2` FOREIGN KEY (`member_category_id`) REFERENCES `member_category` (`member_category_id`);

--
-- 資料表的限制式 `news_participate_marketing_image`
--
ALTER TABLE `news_participate_marketing_image`
  ADD CONSTRAINT `news_participate_marketing_image_ibfk_1` FOREIGN KEY (`news_id`) REFERENCES `news` (`news_id`),
  ADD CONSTRAINT `news_participate_marketing_image_ibfk_2` FOREIGN KEY (`marketing_image_id`) REFERENCES `marketing_image` (`marketing_image_id`);

--
-- 資料表的限制式 `plant`
--
ALTER TABLE `plant`
  ADD CONSTRAINT `plant_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- 資料表的限制式 `plant_participate_product`
--
ALTER TABLE `plant_participate_product`
  ADD CONSTRAINT `plant_participate_product_ibfk_1` FOREIGN KEY (`plant_id`) REFERENCES `plant` (`plant_id`),
  ADD CONSTRAINT `plant_participate_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- 資料表的限制式 `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`product_category_id`) REFERENCES `product_category` (`product_category_id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`published_status_id`) REFERENCES `published_status` (`published_status_id`);

--
-- 資料表的限制式 `product_category`
--
ALTER TABLE `product_category`
  ADD CONSTRAINT `product_category_ibfk_1` FOREIGN KEY (`product_category_parent`) REFERENCES `product_category` (`product_category_id`);

--
-- 資料表的限制式 `product_image`
--
ALTER TABLE `product_image`
  ADD CONSTRAINT `product_image_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- 資料表的限制式 `product_online_category`
--
ALTER TABLE `product_online_category`
  ADD CONSTRAINT `product_online_category_ibfk_1` FOREIGN KEY (`product_online_category_parent`) REFERENCES `product_online_category` (`product_online_category_id`);

--
-- 資料表的限制式 `product_participate_product_online_category`
--
ALTER TABLE `product_participate_product_online_category`
  ADD CONSTRAINT `product_participate_product_online_category_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  ADD CONSTRAINT `product_participate_product_online_category_ibfk_2` FOREIGN KEY (`product_online_category_id`) REFERENCES `product_online_category` (`product_online_category_id`);

--
-- 資料表的限制式 `published_control`
--
ALTER TABLE `published_control`
  ADD CONSTRAINT `published_control_ibfk_1` FOREIGN KEY (`member_category_id`) REFERENCES `member_category` (`member_category_id`),
  ADD CONSTRAINT `published_control_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- 資料表的限制式 `purchase`
--
ALTER TABLE `purchase`
  ADD CONSTRAINT `purchase_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`);

--
-- 資料表的限制式 `purchase_participate_product`
--
ALTER TABLE `purchase_participate_product`
  ADD CONSTRAINT `purchase_participate_product_ibfk_1` FOREIGN KEY (`purchase_id`) REFERENCES `purchase` (`purchase_id`),
  ADD CONSTRAINT `purchase_participate_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- 資料表的限制式 `renew`
--
ALTER TABLE `renew`
  ADD CONSTRAINT `renew_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  ADD CONSTRAINT `renew_ibfk_2` FOREIGN KEY (`transaction_id`) REFERENCES `transaction` (`transaction_id`);

--
-- 資料表的限制式 `renew_participate_product`
--
ALTER TABLE `renew_participate_product`
  ADD CONSTRAINT `renew_participate_product_ibfk_1` FOREIGN KEY (`renew_id`) REFERENCES `renew` (`renew_id`),
  ADD CONSTRAINT `renew_participate_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- 資料表的限制式 `supplier_participate_product`
--
ALTER TABLE `supplier_participate_product`
  ADD CONSTRAINT `supplier_participate_product_ibfk_1` FOREIGN KEY (`supplier_id`) REFERENCES `supplier` (`supplier_id`),
  ADD CONSTRAINT `supplier_participate_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);

--
-- 資料表的限制式 `transaction`
--
ALTER TABLE `transaction`
  ADD CONSTRAINT `transaction_ibfk_1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  ADD CONSTRAINT `transaction_ibfk_2` FOREIGN KEY (`transaction_src_id`) REFERENCES `transaction_src` (`transaction_src_id`),
  ADD CONSTRAINT `transaction_ibfk_3` FOREIGN KEY (`transaction_status_id`) REFERENCES `transaction_status` (`transaction_status_id`),
  ADD CONSTRAINT `transaction_ibfk_4` FOREIGN KEY (`payment_type_id`) REFERENCES `payment_type` (`payment_type_id`);

--
-- 資料表的限制式 `transaction_participate_product`
--
ALTER TABLE `transaction_participate_product`
  ADD CONSTRAINT `transaction_participate_product_ibfk_1` FOREIGN KEY (`transaction_id`) REFERENCES `transaction` (`transaction_id`),
  ADD CONSTRAINT `transaction_participate_product_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
