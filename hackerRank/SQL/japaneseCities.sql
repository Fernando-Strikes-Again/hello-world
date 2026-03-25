-- Query all attributes of every Japanese city in the CITY table. The COUNTRYCODE for Japan is JPN. 

SELECT * FROM city
WHERE countrycode = 'JPN';

-- Query the names of all the Japanese cities in the CITY table. The COUNTRYCODE for Japan is JPN.

SELECT name
FROM city
WHERE countrycode = 'JPN';