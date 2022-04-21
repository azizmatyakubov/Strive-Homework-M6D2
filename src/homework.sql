-- select all stores from store table join address,city,country tables and get full_address of stores by string concat


SELECT 
	store.store_id,
	address ||' '|| city ||' '|| country AS full_adress
from store
JOIN address ON store.address_id = address.address_id
JOIN city ON address.address_id = city.city_id
JOIN country ON city.country_id = country.country_id


-- ======================================================================

-- select all countries which country name starts with A
SELECT * FROM country WHERE country LIKE 'A%';

-- ======================================================================

-- select all cities city name includes e
SELECT * FROM city WHERE city LIKE '%e%';

-- ======================================================================

-- select all payments which happened between 2007-02-15 - 2007-02-20 and join customer who made payment
SELECT 
	payment.amount,
	first_name
FROM payment 
JOIN customer ON payment.customer_id = customer.customer_id;

-- ======================================================================

-- select all films and sort by title
SELECT * FROM film ORDER BY film.title

-- select  all payments where amount between 2-5 join staff and customer
SELECT 
	amount, 
	customer.first_name AS customer,
	staff.first_name AS staff
FROM payment
JOIN customer ON payment.customer_id = customer.customer_id
JOIN staff ON payment.staff_id = staff.staff_id
WHERE payment.amount BETWEEN 2 AND 5

-- ======================================================================


-- create blog table that includes following columns
-- blog_id
-- title
-- category
-- content

CREATE TABLE blog(
    blog_id INTEGER PRIMARY KEY,
    title VARCHAR(255),
    category VARCHAR(255),
    content TEXT
);




