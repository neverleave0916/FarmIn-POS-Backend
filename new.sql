CREATE TABLE member
(
  member_id CHAR(6) NOT NULL,  -- M1XXXX
  member_card_id CHAR(10) NOT NULL,
  member_name VARCHAR(30) NOT NULL,
  member_gender TINYINT(1) NOT NULL,
  member_birthday DATE NOT NULL,
  member_phone CHAR(15) NOT NULL,
  memebr_email VARCHAR(100) NOT NULL,
  member_address VARCHAR(100) NOT NULL,
  member_balance FLOAT NOT NULL,
  member_remark VARCHAR(256) NOT NULL,
  PRIMARY KEY (member_id),
  UNIQUE (member_card_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='會員';

CREATE TABLE member_category
(
  member_category_id CHAR(5) NOT NULL, -- MCXXX
  member_category_name VARCHAR(20) NOT NULL,
  member_category_desc VARCHAR(256) NOT NULL,
  PRIMARY KEY (member_category_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='會員類別';

CREATE TABLE cart_status -- 購物車狀態 -- CSXX
(
  cart_status_id CHAR(4) NOT NULL,
  cart_status_name VARCHAR(30) NOT NULL,
  cart_status_desc VARCHAR(256) NOT NULL,
  PRIMARY KEY (cart_status_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='購物車狀態';

CREATE TABLE supplier -- 供應商 -- SXXXX
(
  supplier_id CHAR(5) NOT NULL,
  supplier_name VARCHAR(50) NOT NULL,
  supplier_phone CHAR(15) NOT NULL,
  supplier_address VARCHAR(100) NOT NULL,
  supplier_desc VARCHAR(256) NOT NULL,
  PRIMARY KEY (supplier_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='供應商';

CREATE TABLE transaction_status -- 交易狀態
(
  transaction_status_id CHAR(7) NOT NULL,
  transaction_status_name VARCHAR(20) NOT NULL,
  transaction_status_desc VARCHAR(256) NOT NULL,
  PRIMARY KEY (transaction_status_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='交易狀態';

CREATE TABLE deposit -- 儲值
(
  deposit_id CHAR(15) NOT NULL,
  member_id CHAR(6) NOT NULL,
  deposit_amount FLOAT NOT NULL,
  deposit_time DATETIME NOT NULL,
  PRIMARY KEY (deposit_time),
  FOREIGN KEY (member_id) REFERENCES member(member_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='儲值';

CREATE TABLE user -- 使用者
(
  user_id CHAR(6) NOT NULL,
  user_name VARCHAR(30) NOT NULL,
  user_account CHAR(30) NOT NULL,
  user_password VARCHAR(256) NOT NULL,
  PRIMARY KEY (user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='使用者';

CREATE TABLE purchase -- 進貨
(
  purchase_id CHAR(16) NOT NULL,
  user_id CHAR(6) NOT NULL,
  purchase_date DATETIME NOT NULL,
  purchase_subtotal FLOAT NOT NULL,
  purchase_discount FLOAT NOT NULL,
  purchase_total FLOAT NOT NULL,
  PRIMARY KEY (purchase_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='進貨';

CREATE TABLE harvest
(
  harvest_id CHAR(16) NOT NULL,
  user_id CHAR(6) NOT NULL,
  harvest_at DATETIME NOT NULL,
  PRIMARY KEY (harvest_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='採收';

CREATE TABLE dispose
(
  dispose_id CHAR(16) NOT NULL,
  user_id CHAR(6) NOT NULL,
  dispose_datetime DATETIME NOT NULL,
  PRIMARY KEY (dispose_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE adjust
(
  adjust_id CHAR(16) NOT NULL,
  user_id CHAR(6) NOT NULL,
  adjust_datetime DATETIME NOT NULL,
  PRIMARY KEY (adjust_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE plant
(
  plant_id CHAR(16) NOT NULL,
  user_id CHAR(6) NOT NULL,
  plant_datetime DATETIME NOT NULL,
  PRIMARY KEY (plant_id),
  FOREIGN KEY (user_id) REFERENCES user(user_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE farm_info
(
  farm_info_id INT NOT NULL AUTO_INCREMENT,
  farm_info_inage LONGBLOB NOT NULL,
  farm_info_desc VARCHAR(1000) NOT NULL,
  farm_info_update_datetime DATETIME NOT NULL,
  PRIMARY KEY (farm_info_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE news
(
  news_id INT NOT NULL AUTO_INCREMENT,
  news_artical VARCHAR(10000) NOT NULL,
  news_update_datetime DATETIME NOT NULL,
  PRIMARY KEY (news_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE marketing_image
(
  marketing_image_id INT NOT NULL AUTO_INCREMENT,
  marketing_image_desc VARCHAR(20) NOT NULL,
  marketing_image_data INT NOT NULL,
  marketing_image_create_datetime DATETIME NOT NULL,
  PRIMARY KEY (marketing_image_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE payment_type
(
  payment_type_id CHAR(4) NOT NULL,
  payment_type_title VARCHAR(20) NOT NULL,
  payment_type_desc VARCHAR(256) NOT NULL,
  PRIMARY KEY (payment_type_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE transaction_src
(
  transaction_src_id CHAR(6) NOT NULL,
  transaction_src_name VARCHAR(20) NOT NULL,
  transaction_src_desc VARCHAR(256) NOT NULL,
  PRIMARY KEY (transaction_src_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE published_status
(
  published_status_id CHAR(3) NOT NULL,
  published_status_title VARCHAR(20) NOT NULL,
  published_status_desc VARCHAR(256) NOT NULL,
  PRIMARY KEY (published_status_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE member_participate_member_category -- 會員_有_會員編號
(
  member_id CHAR(6) NOT NULL,
  member_category_id CHAR(5) NOT NULL,
  PRIMARY KEY (member_id, member_category_id),
  FOREIGN KEY (member_id) REFERENCES member(member_id),
  FOREIGN KEY (member_category_id) REFERENCES member_category(member_category_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE news_participate_marketing_image -- 最新消息_有_行銷圖片
(
  news_id INT NOT NULL,
  marketing_image_id INT NOT NULL,
  PRIMARY KEY (news_id, marketing_image_id),
  FOREIGN KEY (news_id) REFERENCES news(news_id),
  FOREIGN KEY (marketing_image_id) REFERENCES marketing_image(marketing_image_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE cart
(
  member_id CHAR(6) NOT NULL,
  cart_status_id CHAR(4) NOT NULL,
  cart_update_datetime DATETIME NOT NULL,
  PRIMARY KEY (member_id),
  FOREIGN KEY (member_id) REFERENCES member(member_id),
  FOREIGN KEY (cart_status_id) REFERENCES cart_status(cart_status_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE transaction
(
  transaction_id CHAR(15) NOT NULL,
  member_id CHAR(6) NOT NULL,
  transaction_src_id CHAR(6) NOT NULL,
  transaction_status_id CHAR(7) NOT NULL,
  payment_type_id CHAR(4) NOT NULL,
  transaction_create_time DATETIME NOT NULL,
  transaction_subtotal FLOAT NOT NULL,
  transaction_discount FLOAT NOT NULL,
  transaction_total FLOAT NOT NULL,
  transaction_paid FLOAT NOT NULL, -- 實付金額
  transaction_pay_datetime DATETIME NOT NULL,
  transaction_remark VARCHAR(256) NOT NULL,
  PRIMARY KEY (transaction_id),
  FOREIGN KEY (payment_type_id) REFERENCES payment_type(payment_type_id),
  FOREIGN KEY (transaction_status_id) REFERENCES transaction_status(transaction_status_id),
  FOREIGN KEY (member_id) REFERENCES member(member_id),
  FOREIGN KEY (transaction_src_id) REFERENCES transaction_src(transaction_src_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE renew
(
  renew_id CHAR(15) NOT NULL,
  member_id CHAR(6) NOT NULL,
  transaction_id CHAR(15) NOT NULL,
  renew_start_date DATETIME NOT NULL,
  renew_end_date DATETIME NOT NULL,
  renew_cycle INT NOT NULL, -- 續訂週期
  PRIMARY KEY (renew_id),
  FOREIGN KEY (member_id) REFERENCES member(member_id),
  FOREIGN KEY (transaction_id) REFERENCES transaction(transaction_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE product_category
(
  product_category_id CHAR(5) NOT NULL,
  product_category_name VARCHAR(20) NOT NULL,
  product_category_desc VARCHAR(256) NOT NULL,
  product_category_img LONGBLOB NOT NULL,
  product_category_sort INT NOT NULL,
  product_category_parent CHAR(5),
  PRIMARY KEY (product_category_id),
  FOREIGN KEY (product_category_parent) REFERENCES product_category(product_category_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE TABLE product
(
  product_id CHAR(6) NOT NULL,
  product_category_id CHAR(5) NOT NULL,
  published_status_id CHAR(3) NOT NULL,
  product_name VARCHAR(20) NOT NULL,
  product_unit CHAR(5) NOT NULL,
  product_unit_price FLOAT NOT NULL,
  product_inventory INT NOT NULL,
  product_desc VARCHAR(256) NOT NULL,
  product_growth_period FLOAT NOT NULL,
  product_expire FLOAT NOT NULL,
  product_default_save_amount INT NOT NULL,
  product_actual_save_amount INT NOT NULL,
  product_online_unit CHAR(5) NOT NULL,
  product_online_unit_price FLOAT NOT NULL,
  product_online_inventory INT NOT NULL,
  product_online_max_inventory INT NOT NULL,
  PRIMARY KEY (product_id),
  FOREIGN KEY (product_category_id) REFERENCES product_category(product_category_id),
  FOREIGN KEY (published_status_id) REFERENCES published_status(published_status_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE published_control
(
  published_control_id CHAR(8) NOT NULL,
  member_category_id CHAR(5) NOT NULL,
  product_id CHAR(6) NOT NULL,
  published_control_save_amount INT NOT NULL, -- 保留數量
  PRIMARY KEY (published_control_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id),
  FOREIGN KEY (member_category_id) REFERENCES member_category(member_category_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE product_online_category
(
  product_online_category_id CHAR(6) NOT NULL,
  product_online_category_title VARCHAR(20) NOT NULL,
  product_online_category_desc VARCHAR(256) NOT NULL,
  product_online_category_img LONGBLOB NOT NULL,
  product_online_category_sort INT NOT NULL,
  product_online_category_parent CHAR(6),
  PRIMARY KEY (product_online_category_id),
  FOREIGN KEY (product_online_category_parent) REFERENCES product_online_category(product_online_category_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE product_participate_product_online_category
(
  product_id CHAR(6) NOT NULL,
  product_online_category_id CHAR(6) NOT NULL,
  PRIMARY KEY (product_id, product_online_category_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id),
  FOREIGN KEY (product_online_category_id) REFERENCES product_online_category(product_online_category_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE supplier_participate_product
(
  supplier_id CHAR(5) NOT NULL,
  product_id CHAR(6) NOT NULL,
  supplier_participate_product_amount INT NOT NULL,
  PRIMARY KEY (supplier_id, product_id),
  FOREIGN KEY (supplier_id) REFERENCES supplier(supplier_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE harvest_participate_product
(
  harvest_id CHAR(16) NOT NULL,
  product_id CHAR(6) NOT NULL,
  harvest_participate_product_amount INT NOT NULL, 
  PRIMARY KEY (harvest_id, product_id),
  FOREIGN KEY (harvest_id) REFERENCES harvest(harvest_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE plant_participate_product
(
  plant_id CHAR(16) NOT NULL,
  product_id CHAR(6) NOT NULL,
  plant_participate_product_amount INT NOT NULL,
  PRIMARY KEY (plant_id, product_id),
  FOREIGN KEY (plant_id) REFERENCES plant(plant_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE dispose_participate_product
(
  dispose_id CHAR(16) NOT NULL,
  product_id CHAR(6) NOT NULL,
  dispose_participate_product_amount INT NOT NULL,
  PRIMARY KEY (dispose_id, product_id),
  FOREIGN KEY (dispose_id) REFERENCES dispose(dispose_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE adjust_participate_product
(
  adjust_id CHAR(16) NOT NULL,
  product_id CHAR(6) NOT NULL,
  adjust_participate_product_amount INT NOT NULL,
  PRIMARY KEY (adjust_id, product_id),
  FOREIGN KEY (adjust_id) REFERENCES adjust(adjust_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE purchase_participate_product
(
  purchase_id CHAR(16) NOT NULL,
  product_id CHAR(6) NOT NULL,
  purchase_participate_product_unit CHAR(5) NOT NULL,
  purchase_participate_product_amount INT NOT NULL,
  purchase_participate_product_unit_price FLOAT NOT NULL,
  PRIMARY KEY (purchase_id, product_id),
  FOREIGN KEY (purchase_id) REFERENCES purchase(purchase_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE transaction_participate_product
(
  transaction_id CHAR(15) NOT NULL,
  product_id CHAR(6) NOT NULL,
  transaction_participate_product_unit CHAR(5) NOT NULL,
  transaction_participate_product_amount INT NOT NULL,
  transaction_participate_product_unit_price FLOAT NOT NULL,
  PRIMARY KEY (transaction_id, product_id),
  FOREIGN KEY (transaction_id) REFERENCES transaction(transaction_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE cart_participate_product
(
  member_id CHAR(6) NOT NULL,
  product_id CHAR(6) NOT NULL,
  PRIMARY KEY (product_id, member_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id),
  FOREIGN KEY (member_id) REFERENCES cart(member_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE renew_participate_product
(
  renew_id CHAR(15) NOT NULL,
  product_id CHAR(6) NOT NULL,
  renew_participate_product_amount INT NOT NULL,
  PRIMARY KEY (renew_id, product_id),
  FOREIGN KEY (renew_id) REFERENCES renew(renew_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;



CREATE TABLE product_image
(
  product_image_id INT AUTO_INCREMENT NOT NULL,
  product_id CHAR(6) NOT NULL,
  product_image_data LONGBLOB NOT NULL,
  PRIMARY KEY (product_image_id),
  FOREIGN KEY (product_id) REFERENCES product(product_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;