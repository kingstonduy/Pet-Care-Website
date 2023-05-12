insert into User (userId, userFullName, userUserName, userPassword, userEmail, userRole)
values
(1, 'Nguyen van A', 'Nguyen Van A username', 'Nguyen Van A password', 'Nguyen Van A email', 'user'),
(2, 'Nguyen van B', 'Nguyen Van B username', 'Nguyen Van B password', 'Nguyen Van B email', 'user'),
(3, 'Nguyen van C', 'Nguyen Van C username', 'Nguyen Van C password', 'Nguyen Van C email', 'user'),
(4, 'Nguyen van D', 'Nguyen Van D username', 'Nguyen Van D password', 'Nguyen Van D email', 'user'),
(5, 'Nguyen van E', 'Nguyen Van E username', 'Nguyen Van E password', 'Nguyen Van E email', 'user');


insert into Cart(cartId, userId,  productId, cartItemQuantity, cartTotalPrice)
values
(1, 1, 1, 1, 0),
(2, 1, 2, 2, 0),
(3, 2, 2, 3, 0),
(4, 2, 3, 4, 0),
(5, 3, 3, 4, 0),
(6, 3, 4, 3, 0),
(7, 4, 4, 2, 0),
(8, 4, 4, 1, 0),
(9, 5, 5, 5, 0),
(10, 5, 5, 5, 0);


insert into Product(productId, productName, productQuantity, productCategory, productPrice, productDescription, productImageUrl)
values
(1, 'Iams Proactive Health Smart Puppy Large Breed Dry Puppy Foo', 10, 'food', 100,'Iams Smart Puppy Large Breed promotes optimal growth with balanced nutrition specifically designed for large-breed puppies and essential DHA for healthy brain development and the best start possible.','https://www.petproducts.com/static/upload/products/iams-proactive-health-smart-puppy-large-breed-dry-puppy-food-15-lbs/019014610945-2.jpg'),
(2, 'Vital Essentials Freeze Dried Vital Treats Bully Sticks', 9, 'food', 99, 'Freeze-dried Bully Sticks support healthy teeth and gums. Made with only fresh beef pizzle, these treats are an excellent source of protein and energy.','https://www.petproducts.com/static/upload/products/vital-essentials2/-vital-essentials-freeze-dried-vital-treats-bully-sticks-5-pcs/033211005090_Vital%20Essentials_Freeze-Dried%20Vital%20Treats_Bully%20Sticks_5%20pieces.png'),
(3, 'Elanco Seresto Flea and Tick Collar for Dogs Small Gray', 8, 'food', 98, 'With its innovative delivery system, Seresto offers a breakthrough in flea and tick protection for dogs for 8 months. Seresto repels and kills fleas and ticks. The Seresto collar offers the performance of a topical with the convenience of an easy-to-use collar. If a tick is repelled, it can''t attach and transmit organisms that cause disease. Seresto is non-greasy, odorless, and easy-to-use for small dogs 7 weeks of age and older and over 18 lbs. The flea collar is water resistant and remains effective following monthly bathing, occasional swimming (if swimming occurs more often than once a month, the duration is reduced to five months) or after exposure to rain or sunshine.', 'https://www.petproducts.com/static/upload/products/assorted/seresto-bayer--flea-and-tick-collar-for-dogs-small-gray/brp0rf8.jpg'),
(4, 'Four Paws Magic Coat Gentle Tearless Shampoo', 10, 'fashion', 100, 'For dogs & puppies with sensitive skin. Non-irritating to eyes. Conditions, beautifies & deodorizes coat. Leaves coat manageable', 'https://www.petproducts.com/static/upload/products/central-garden+pet-company/four-paws--magic-coat-tearless-shampoo-for-dogs+puppies-16oz/Magic_Coat_Tearless_Shampoo_16_oz.thumbnail.jpg'),
(5, 'Four Paws Magic Coat Pet Comb', 9, 'fashion', 99, 'Removes tangles & mats. Coarse & fine teeth detangle & fluff coat. Ideal for medium, long, curly & wiry coats', 'https://www.petproducts.com/static/upload/products/assorted/four-paws--magic-coat-pet-comb/mu1uqe2.jpg'),
(6, 'Four Paws Magic Coat Reduces Odor Dog Shampoo', 8, 'fashion', 98, 'Deep cleaning shampoo neutralizes odors. Cleans, shines & freshens. Restores natural shine. For all coats', 'https://www.petproducts.com/static/upload/products/central-garden+pet-company/four-paws--magic-coat-reduces-odor-dog-shampoo-16oz/MC_reduces_odor_shampoo.thumbnail.jpg'),
(7, 'Nylabone Puppy Chew Dog Bone - Chicken Flavor', 10, 'toy', 100, 'Nylabone Puppybone is specifically designed for teething puppies to encourage non-destructive chewing. Helps clean teeth. Helps control plaque and tartar. Not recommended for dogs with any adult teeth. Made of inert soft thermoplastic polymer and natural flavor.', 'https://www.petproducts.com/static/upload/products/assorted/nylabone--puppy-chew-dog-bone-chicken-flavor/o6eoveo.jpg'),
(8, 'Nylabone Puppy Chew Teething Keys Chew Toy', 9, 'toy', 99, 'Puppy Teething Keys are designed for young puppies to aid in the growth and development of their teeth and jaws, and to encourage safe and non-destructive chewing. Great Bacon Flavor! Not recommended for dogs and puppies with any adult teeth.', 'https://www.petproducts.com/static/upload/products/assorted/nylabone--puppy-chew-teething-keys-chew-toy--small-for-dogs-up-to-25-lbs/o8lphjo.jpg'),
(9, 'Nylabone Dura Chew Barbell Dog Chew Toy', 8, 'toy', 98, 'Especially important for powerful chewers, the appropriate chew toys can help keep dogs busy, prevent boredom, help with separation anxiety and help prevent destructive chewing. New - Peanut Butter Flavor!', 'https://www.petproducts.com/static/upload/products/assorted/nylabone--dura-chew-barbell-dog-chew-toy-peanut-butter-flavor-monster/5hwty1o.jpg');

insert into OrderedProduct (orderedProductId, userId, productId, orderedProductDate, orderedProductQuantity )
values
(1, 1, 5, 5),
(2, 1, 4, 4),
(3, 2, 4, 3),
(4, 2, 3, 2),
(5, 3, 3, 1),
(6, 3, 2, 2),
(7, 4, 2, 3),
(8, 4, 1, 1),
(8, 5, 1, 2),
(8, 5, 5, 3);

insert into Comment(commentId, orderedProductId, commentDescription, commentDate)
values
(1, 1, 'it''s ok', current_date),
(1, 2, 'it''s fine', current_date),
(1, 3, 'it''s wonderful', current_date),
(1, 4, 'it''s amazing', current_date),
(1, 5, 'it''s intersting', current_date),
(1, 6, 'it''s boring', current_date),
(1, 7, 'it''s broken', current_date),
(1, 8, 'it''s good ', current_date);




