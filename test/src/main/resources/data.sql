insert into products (id, product_name)
values
(1, 'san pham 1'),
(2, 'san pham 2'),
(3, 'san pham 3');


insert into users (id, username, userpassword)
values
(1, 'ten nguoi 1', 'password 1'),
(2, 'ten nguoi 2', 'password 2'),
(3, 'ten nguoi 3', 'password 3');

insert into carts (id, product_id, user_id)
values
(1, 1, 1),
(2, 1, 2),
(3, 2, 1),
(4, 3, 3);