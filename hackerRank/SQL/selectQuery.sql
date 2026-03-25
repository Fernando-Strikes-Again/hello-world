-- Select All values from American cities that have more than 100000 people

SELECT * FROM city
WHERE population > 100000
AND countrycode = 'USA';

-- Select named cities from America that have more than 120000 people

SELECT name
FROM CITY
WHERE population > 120000
AND countrycode = 'USA';

-- Select all values from the CITY table

SELECT * FROM city;