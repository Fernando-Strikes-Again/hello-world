-- Query a list of CITY and STATE from the STATION table. 

SELECT city, state
FROM station;

-- Query a list of CITY names from STATION for cities that have an even ID number. 
-- Print the results in any order, but exclude duplicates from the answer. 

SELECT DISTINCT city FROM station
WHERE ID % 2 = 0;

-- Find the difference between the total number of CITY entries in the table and the number of distinct CITY entries in the table. 

SELECT COUNT(CITY) - COUNT(DISTINCT CITY) 
FROM station;

-- Query the two cities in STATION with the shortest and longest CITY names, as well as their respective lengths 
-- (i.e.: number of characters in the name). 
-- If there is more than one smallest or largest city, choose the one that comes first when ordered alphabetically. 

(SELECT city, LENGTH(city)
FROM station
ORDER BY LENGTH(city) ASC, city ASC
LIMIT 1)
UNION ALL
(SELECT city, LENGTH(city)
FROM station
ORDER BY LENGTH(city) DESC, city DESC
LIMIT 1)

-- Query the list of CITY names starting with vowels (i.e., a, e, i, o, or u) from STATION. Your result cannot contain duplicates.

SELECT DISTINCT city 
FROM station 
WHERE city LIKE 'a%' 
   OR city LIKE 'e%' 
   OR city LIKE 'i%' 
   OR city LIKE 'o%' 
   OR city LIKE 'u%';

SELECT DISTINCT city FROM station
WHERE city REGEXP '^[aeiou]';