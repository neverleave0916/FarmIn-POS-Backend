CREATE TABLE member
(
  member_id CHAR(6),  -- M1XXXX
  member_card_id CHAR(10),
  member_name VARCHAR(30),
  member_gender TINYINT(1),
  member_birthday DATE,
  member_phone CHAR(15),
  memebr_email VARCHAR(100),
  member_address VARCHAR(100),
  member_balance FLOAT,
  member_remark VARCHAR(256),
  PRIMARY KEY (member_id),
  UNIQUE (member_card_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='會員';

CREATE TABLE member_category
(
  member_category_id CHAR(5), -- MCXXX
  member_category_name VARCHAR(20),
  member_category_desc VARCHAR(256),
  PRIMARY KEY (member_category_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='會員類別';

CREATE TABLE cart_status -- 購物車狀態 -- CSXX
(
  cart_status_id CHAR(4),
  cart_status_name VARCHAR(30),
  cart_status_desc VARCHAR(256),
  PRIMARY KEY (cart_status_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='購物車狀態';

CREATE TABLE supplier -- 供應商 -- SXXXX
(
  supplier_id CHAR(5),
  supplier_name VARCHAR(50),
  supplier_phone CHAR(15),
  supplier_address VARCHAR(100),
  supplier_desc VARCHAR(256),
  PRIMARY KEY (supplier_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='供應商';

CREATE TABLE transaction_status -- 交易狀態
(
  transaction_status_id CHAR(7),
  transaction_status_name VARCHAR(20),
  transaction_status_desc VARCHAR(256),
  PRIMARY KEY (transaction_status_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='交易狀態';

CREATE TABLE deposit -- 儲值
(
  deposit_id CHAR(15),
  member_id CHAR(6),
  deposit_amount FLOAT,
  deposit_dt DATETIME,
  PRIMARY KEY (deposit_id),
  FOREIGN KEY (member_id) REFERENCES member(member_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='儲值';

CREATE TABLE user -- 使用者
(
  user_id CHAR(6),
  user_name VARCHAR(30),
  user_account CHAR(30),
  user_password VARCHAR(256),
  PRIMARY KEY (user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='使用者';

CREATE TABLE purchase -- 進貨
(
  purchase_id CHAR(16),
  user_id CHAR(6),
  purchase_dt DATETIME,
  purchase_subtotal FLOAT,
  purchase_discount FLOAT,
  purchase_total FLOAT,
  PRIMARY KEY (purchase_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='進貨';

CREATE TABLE harvest
(
  harvest_id CHAR(16),
  user_id CHAR(6),
  harvest_dt DATETIME,
  PRIMARY KEY (harvest_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='採收';

CREATE TABLE dispose
(
  dispose_id CHAR(16),
  user_id CHAR(6),
  dispose_ DATETIME,
  PRIMARY KEY (dispose_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE adjust
(
  adjust_id CHAR(16),
  user_id CHAR(6),
  adjust_dt DATETIME,
  PRIMARY KEY (adjust_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE plant
(
  plant_id CHAR(16),
  user_id CHAR(6),
  plant_dt DATETIME,
  PRIMARY KEY (plant_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE farm_info
(
  farm_info_id INT AUTO_INCREMENT,
  farm_info_inage LONGBLOB,
  farm_info_desc VARCHAR(1000),
  farm_info_update_dt DATETIME,
  PRIMARY KEY (farm_info_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE news
(
  news_id INT AUTO_INCREMENT,
  news_artical VARCHAR(10000),
  news_update_dt DATETIME,
  PRIMARY KEY (news_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE marketing_image
(
  marketing_image_id INT AUTO_INCREMENT,
  marketing_image_desc VARCHAR(20),
  marketing_image_data INT,
  marketing_image_create_dt DATETIME,
  PRIMARY KEY (marketing_image_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE payment_type
(
  payment_type_id CHAR(4),
  payment_type_title VARCHAR(20),
  payment_type_desc VARCHAR(256),
  PRIMARY KEY (payment_type_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE transaction_src
(
  transaction_src_id CHAR(6),
  transaction_src_name VARCHAR(20),
  transaction_src_desc VARCHAR(256),
  PRIMARY KEY (transaction_src_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE published_status
(
  published_status_id CHAR(3),
  published_status_title VARCHAR(20),
  published_status_desc VARCHAR(256),
  PRIMARY KEY (published_status_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE member_participate_member_category -- 會員_有_會員編號
(
  member_id CHAR(6),
  member_category_id CHAR(5),
  PRIMARY KEY (member_id, member_category_id),
  FOREIGN KEY (member_id) REFERENCES member(member_id),
  FOREIGN KEY (member_category_id) REFERENCES member_category(member_category_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE news_participate_marketing_image -- 最新消息_有_行銷圖片
(
  news_id INT,
  marketing_image_id INT,
  PRIMARY KEY (news_id, marketing_image_id),
  FOREIGN KEY (news_id) REFERENCES news(news_id),
  FOREIGN KEY (marketing_image_id) REFERENCES marketing_image(marketing_image_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE cart
(
  member_id CHAR(6),
  cart_status_id CHAR(4),
  cart_update_dt DATETIME,
  PRIMARY KEY (member_id),
  FOREIGN KEY (member_id) REFERENCES member(member_id),
  FOREIGN KEY (cart_status_id) REFERENCES cart_status(cart_status_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE transaction
(
  transaction_id CHAR(15),
  member_id CHAR(6),
  transaction_src_id CHAR(6),
  transaction_status_id CHAR(7),
  payment_type_id CHAR(4),
  transaction_create_dt DATETIME,
  transaction_subtotal FLOAT,
  transaction_discount FLOAT,
  transaction_total FLOAT,
  transaction_paid FLOAT, -- 實付金額
  transaction_pay_dt DATETIME,
  transaction_remark VARCHAR(256),
  PRIMARY KEY (transaction_id),
  FOREIGN KEY (payment_type_id) REFERENCES payment_type(payment_type_id),
  FOREIGN KEY (transaction_status_id) REFERENCES transaction_status(transaction_status_id),
  FOREIGN KEY (member_id) REFERENCES member(member_id),
  FOREIGN KEY (transaction_src_id) REFERENCES transaction_src(transaction_src_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE renew
(
  renew_id CHAR(15),
  member_id CHAR(6),
  transaction_id CHAR(15),
  renew_start_dt DATETIME,
  renew_end_dt DATETIME,
  renew_cycle INT, -- 續訂週期
  PRIMARY KEY (renew_id),
  FOREIGN KEY (member_id) REFERENCES member(member_id),
  FOREIGN KEY (transaction_id) REFERENCES transaction(transaction_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE product_category
(
  product_category_id CHAR(5),
  product_category_name VARCHAR(20),
  product_category_desc VARCHAR(256),
  product_category_img LONGBLOB,
  product_category_sort INT,
  product_category_parent CHAR(5),
  PRIMARY KEY (product_category_id),
  FOREIGN KEY (product_category_parent) REFERENCES product_category(product_category_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE product
(
  product_id CHAR(6),
  product_category_id CHAR(5),
  published_status_id CHAR(3),
  product_name VARCHAR(20),
  product_unit CHAR(5),
  product_unit_price FLOAT,
  product_inventory INT,
  product_desc VARCHAR(256),
  product_growth_period FLOAT,
  product_expire FLOAT,
  product_default_save_amount INT,
  product_actual_save_amount INT,
  product_online_unit CHAR(5),
  product_online_unit_price FLOAT,
  product_online_inventory INT,
  product_online_max_inventory INT,
  PRIMARY KEY (product_id),
  FOREIGN KEY (product_category_id) REFERENCES product_category(product_category_id),
  FOREIGN KEY (published_status_id) REFERENCES published_status(published_status_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE published_control
(
  published_control_id CHAR(8),
  member_category_id CHAR(5),
  product_id CHAR(6),
  published_control_save_amount INT, -- 保留數量
  PRIMARY KEY (published_control_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id),
  FOREIGN KEY (member_category_id) REFERENCES member_category(member_category_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE product_online_category
(
  product_online_category_id CHAR(6),
  product_online_category_title VARCHAR(20),
  product_online_category_desc VARCHAR(256),
  product_online_category_img LONGBLOB,
  product_online_category_sort INT,
  product_online_category_parent CHAR(6),
  PRIMARY KEY (product_online_category_id),
  FOREIGN KEY (product_online_category_parent) REFERENCES product_online_category(product_online_category_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE product_participate_product_online_category
(
  product_id CHAR(6),
  product_online_category_id CHAR(6),
  PRIMARY KEY (product_id, product_online_category_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id),
  FOREIGN KEY (product_online_category_id) REFERENCES product_online_category(product_online_category_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE supplier_participate_product
(
  supplier_id CHAR(5),
  product_id CHAR(6),
  supplier_participate_product_amount INT,
  PRIMARY KEY (supplier_id, product_id),
  FOREIGN KEY (supplier_id) REFERENCES supplier(supplier_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE harvest_participate_product
(
  harvest_id CHAR(16),
  product_id CHAR(6),
  harvest_participate_product_amount INT, 
  PRIMARY KEY (harvest_id, product_id),
  FOREIGN KEY (harvest_id) REFERENCES harvest(harvest_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE plant_participate_product
(
  plant_id CHAR(16),
  product_id CHAR(6),
  plant_participate_product_amount INT,
  PRIMARY KEY (plant_id, product_id),
  FOREIGN KEY (plant_id) REFERENCES plant(plant_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE dispose_participate_product
(
  dispose_id CHAR(16),
  product_id CHAR(6),
  dispose_participate_product_amount INT,
  PRIMARY KEY (dispose_id, product_id),
  FOREIGN KEY (dispose_id) REFERENCES dispose(dispose_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE adjust_participate_product
(
  adjust_id CHAR(16),
  product_id CHAR(6),
  adjust_participate_product_amount INT,
  PRIMARY KEY (adjust_id, product_id),
  FOREIGN KEY (adjust_id) REFERENCES adjust(adjust_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE purchase_participate_product
(
  purchase_id CHAR(16),
  product_id CHAR(6),
  purchase_participate_product_unit CHAR(5),
  purchase_participate_product_amount INT,
  purchase_participate_product_unit_price FLOAT,
  PRIMARY KEY (purchase_id, product_id),
  FOREIGN KEY (purchase_id) REFERENCES purchase(purchase_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE transaction_participate_product
(
  transaction_id CHAR(15),
  product_id CHAR(6),
  transaction_participate_product_unit CHAR(5),
  transaction_participate_product_amount INT,
  transaction_participate_product_unit_price FLOAT,
  PRIMARY KEY (transaction_id, product_id),
  FOREIGN KEY (transaction_id) REFERENCES transaction(transaction_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE cart_participate_product
(
  member_id CHAR(6),
  product_id CHAR(6),
  PRIMARY KEY (product_id, member_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id),
  FOREIGN KEY (member_id) REFERENCES cart(member_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE renew_participate_product
(
  renew_id CHAR(15),
  product_id CHAR(6),
  renew_participate_product_amount INT,
  PRIMARY KEY (renew_id, product_id),
  FOREIGN KEY (renew_id) REFERENCES renew(renew_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE product_image
(
  product_image_id INT AUTO_INCREMENT,
  product_id CHAR(6),
  product_image_data LONGBLOB,
  PRIMARY KEY (product_image_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `product_category` (`product_category_id`, `product_category_name`, `product_category_desc`, `product_category_img`, `product_category_sort`, `product_category_parent`) VALUES
('PC001', '葉菜類', NULL, NULL, 1, NULL),
('PC002', '根莖類', NULL, NULL, 2, NULL);


INSERT INTO `published_status` (`published_status_id`, `published_status_title`, `published_status_desc`) VALUES
('L01', '上架中', NULL),
('L02', '下架', NULL);


INSERT INTO `product` (`product_id`, `product_category_id`, `published_status_id`, `product_name`, `product_unit`, `product_unit_price`, `product_inventory`, `product_desc`, `product_growth_period`, `product_expire`, `product_default_save_amount`, `product_actual_save_amount`, `product_online_unit`, `product_online_unit_price`, `product_online_inventory`, `product_online_max_inventory`) VALUES
('PD0001', 'PC001', 'L01', '高麗菜', '包', 40, 20, '高麗菜哈囉囉', 70, 14, 0, 0, '包', 0, 0, 0),
('PD0002', 'PC001', 'L01', '大白菜', '包', 40, 30, '大白菜', 50, 14, 0, 0, '包', 0, 0, 0),
('PD0003', 'PC001', 'L01', '小黃瓜', '包', 40, 30, '自行生產的小黃瓜', 80, 14, 0, 0, '包', 0, 0, 0),
('PD0004', 'PC001', 'L01', '大黃瓜', '包', 40, 20, '自行生產的大黃瓜', 80, 14, 0, 0, '包', 0, 0, 0),
('PD0005', 'PC001', 'L01', '芥菜', '包', 40, 10, '自行生產的芥菜', 60, 14, 0, 0, '包', 0, 0, 0),
('PD0006', 'PC001', 'L01', '小白菜', '包', 40, 20, '自行生產的小白菜', 27, 14, 0, 0, '包', 0, 0, 0),
('PD0007', 'PC002', 'L01', '地瓜', '斤', 40, 0, '自行生產的地瓜', 180, 14, 0, 0, '包', 0, 0, 0);

INSERT INTO `user` (`user_id`, `user_name`, `user_account`, `user_password`) VALUES
('ADM001', 'User01', 'Thenewestuser', 'Thenewestuser');

INSERT INTO `harvest` (`harvest_id`, `user_id`, `harvest_dt`) VALUES
('HARR202008200000', 'ADM001', '2020-08-17 15:11:06');

INSERT INTO `harvest_participate_product` (`harvest_id`, `product_id`, `harvest_participate_product_amount`) VALUES
('HARR202008200000', 'PD0003', 30),
('HARR202008200000', 'PD0004', 20),
('HARR202008200000', 'PD0005', 10),
('HARR202008200000', 'PD0006', 20);

INSERT INTO `member` (`member_id`, `member_card_id`, `member_name`, `member_gender`, `member_birthday`, `member_phone`, `memebr_email`, `member_address`, `member_balance`, `member_remark`) VALUES
('M10001', '1234567890', '蔣昆興', 1, '1999-01-11', '0932018375', 'neverleave0916@gmail.com', '台北市內湖區文德路101巷2號5樓', 1000, NULL);