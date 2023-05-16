--CAUTION h2 se tu dong doi ten column

insert into userr (id , user_full_name, user_user_name, user_password, user_email, user_role)
values
    (1001, 'Nguyen van A', 'nghia', 'Zet411632', 'Nguyen Van A email', 'user'),
    (1002, 'Nguyen van B', 'duy', 'Duy03032002', 'Nguyen Van B email', 'user'),
    (1003, 'Nguyen van C', 'dinh', 'Zet411632', 'Nguyen Van C email', 'user'),
    (1004, 'Nguyen van D', 'binh', 'Zet411632', 'Nguyen Van D email', 'user'),
    (1005, 'Nguyen van E', 'zet', 'Zet411632', 'Nguyen Van E email', 'user');


insert into Product(id , product_Name, product_Quantity, product_Category, product_Price, product_Description, product_Image_Url)
values
    (1, 'Iams Proactive Health Smart Puppy Large Breed Dry Puppy Foo', 10, 'food', 100,'Iams Smart Puppy Large Breed promotes optimal growth with balanced nutrition specifically designed for large-breed puppies and essential DHA for healthy brain development and the best start possible.','https://www.petproducts.com/static/upload/products/iams-proactive-health-smart-puppy-large-breed-dry-puppy-food-15-lbs/019014610945-2.jpg'),
    (2, 'Vital Essentials Freeze Dried Vital Treats Bully Sticks', 0, 'food', 99, 'Freeze-dried Bully Sticks support healthy teeth and gums. Made with only fresh beef pizzle, these treats are an excellent source of protein and energy.','https://www.petproducts.com/static/upload/products/vital-essentials2/-vital-essentials-freeze-dried-vital-treats-bully-sticks-5-pcs/033211005090_Vital%20Essentials_Freeze-Dried%20Vital%20Treats_Bully%20Sticks_5%20pieces.png'),
    (3, 'Elanco Seresto Flea and Tick Collar for Dogs Small Gray', 8, 'food', 98, 'With its innovative delivery system, Seresto offers a breakthrough in flea and tick protection for dogs for 8 months. Seresto repels and kills fleas and ticks. The Seresto collar offers the performance of a topical with the convenience of an easy-to-use collar. If a tick is repelled, it can''t attach and transmit organisms that cause disease. Seresto is non-greasy, odorless, and easy-to-use for small dogs 7 weeks of age and older and over 18 lbs. The flea collar is water resistant and remains effective following monthly bathing, occasional swimming (if swimming occurs more often than once a month, the duration is reduced to five months) or after exposure to rain or sunshine.', 'https://www.petproducts.com/static/upload/products/assorted/seresto-bayer--flea-and-tick-collar-for-dogs-small-gray/brp0rf8.jpg'),
    (4, 'Four Paws Magic Coat Gentle Tearless Shampoo', 10, 'fashion', 100, 'For dogs & puppies with sensitive skin. Non-irritating to eyes. Conditions, beautifies & deodorizes coat. Leaves coat manageable', 'https://www.petproducts.com/static/upload/products/central-garden+pet-company/four-paws--magic-coat-tearless-shampoo-for-dogs+puppies-16oz/Magic_Coat_Tearless_Shampoo_16_oz.thumbnail.jpg'),
    (5, 'Four Paws Magic Coat Pet Comb', 0, 'fashion', 99, 'Removes tangles & mats. Coarse & fine teeth detangle & fluff coat. Ideal for medium, long, curly & wiry coats', 'https://www.petproducts.com/static/upload/products/assorted/four-paws--magic-coat-pet-comb/mu1uqe2.jpg'),
    (6, 'Four Paws Magic Coat Reduces Odor Dog Shampoo', 8, 'fashion', 98, 'Deep cleaning shampoo neutralizes odors. Cleans, shines & freshens. Restores natural shine. For all coats', 'https://www.petproducts.com/static/upload/products/central-garden+pet-company/four-paws--magic-coat-reduces-odor-dog-shampoo-16oz/MC_reduces_odor_shampoo.thumbnail.jpg'),
    (7, 'Nylabone Puppy Chew Dog Bone - Chicken Flavor', 10, 'toy', 100, 'Nylabone Puppybone is specifically designed for teething puppies to encourage non-destructive chewing. Helps clean teeth. Helps control plaque and tartar. Not recommended for dogs with any adult teeth. Made of inert soft thermoplastic polymer and natural flavor.', 'https://www.petproducts.com/static/upload/products/assorted/nylabone--puppy-chew-dog-bone-chicken-flavor/o6eoveo.jpg'),
    (8, 'Nylabone Puppy Chew Teething Keys Chew Toy', 0, 'toy', 99, 'Puppy Teething Keys are designed for young puppies to aid in the growth and development of their teeth and jaws, and to encourage safe and non-destructive chewing. Great Bacon Flavor! Not recommended for dogs and puppies with any adult teeth.', 'https://www.petproducts.com/static/upload/products/assorted/nylabone--puppy-chew-teething-keys-chew-toy--small-for-dogs-up-to-25-lbs/o8lphjo.jpg'),
    (9, 'Nylabone Dura Chew Barbell Dog Chew Toy', 8, 'toy', 98, 'Especially important for powerful chewers, the appropriate chew toys can help keep dogs busy, prevent boredom, help with separation anxiety and help prevent destructive chewing. New - Peanut Butter Flavor!', 'https://www.petproducts.com/static/upload/products/assorted/nylabone--dura-chew-barbell-dog-chew-toy-peanut-butter-flavor-monster/5hwty1o.jpg');




insert into Cart(id, user_Id,  product_Id, cart_Item_Quantity)
values
    (1001, 1001, 1, 1),
    (1002, 1001, 2, 2),
    (1003, 1002, 2, 3),
    (1004, 1002, 3, 4),
    (1005, 1003, 3, 4),
    (1006, 1003, 4, 3),
    (1007, 1004, 4, 2),
    (1008, 1004, 4, 1),
    (1009, 1005, 5, 5),
    (1010, 1005, 5, 5);



insert into Ordered_Product (id , user_Id, product_Id, ordered_Product_Quantity, ordered_Product_Date )
values
    (1, 1001, 5, 5, current_date()),
    (2, 1001, 4, 4, current_date()),
    (3, 1002, 4, 3, current_date()),
    (4, 1002, 3, 2, current_date()),
    (5, 1003, 3, 1, current_date()),
    (6, 1003, 2, 2, current_date()),
    (7, 1004, 2, 3, current_date()),
    (8, 1004, 1, 1, current_date());

--
insert into Comment(id  , ORDERED_PRODUCT_ID , COMMENT_DESCRIPTION , comment_Date)
values
    (1, 1, 'it''s ok', current_date),
    (2, 2, 'it''s fine', current_date),
    (3, 3, 'it''s wonderful', current_date),
    (4, 4, 'it''s amazing', current_date),
    (5, 5, 'it''s intersting', current_date),
    (6, 6, 'it''s boring', current_date),
    (7, 7, 'it''s broken', current_date),
    (8, 8, 'it''s good ', current_date);


