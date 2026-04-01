-- Query a count of the number of cities in CITY having a Population larger than 100000. 

SELECT COUNT(*)
FROM city
WHERE population > 100000;

-- Query the total population of all cities in CITY where District is California. 

SELECT SUM(population)
FROM city
WHERE district = 'California';

-- Query the average population of all cities in CITY where District is California. 

SELECT AVG(population)
FROM city
WHERE district = 'California';

-- Query the average population for all cities in CITY, rounded down to the nearest integer.

SELECT FLOOR(AVG(population))
FROM city;

-- Query the sum of the populations for all Japanese cities in CITY. The COUNTRYCODE for Japan is JPN.

SELECT SUM(population)
FROM city
WHERE countrycode = 'JPN';

-- Query the difference between the maximum and minimum populations in CITY.

SELECT MAX(population) - MIN(population)
FROM city;

/*
Samantha was tasked with calculating the average monthly salaries for all employees in the EMPLOYEES table, 
but did not realize her keyboard's 0 key was broken until after completing the calculation. 
She wants your help finding the difference between her miscalculation (using salaries with any zeros removed), 
and the actual average salary.
Write a query calculating the amount of error (i.e.: average monthly salaries), and round it up to the next integer.
*/

SELECT CEIL(AVG(salary) - AVG(REPLACE(salary, '0', '')))
FROM employees;

/*
We define an employee's total earnings to be their monthly salary x months worked, and the maximum total earnings to be the maximum total
earnings for any employee in the Employee table. Write a query to find the maximum total earnings for all employees as well as the total
 number of employees who have maximum total earnings. Then print these values as 2 space-separated integers.
*/

SELECT (salary*months) AS total_earnings, COUNT(*) 
FROM employee
GROUP BY total_earnings
ORDER BY total_earnings DESC
LIMIT 1;