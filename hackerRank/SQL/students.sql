-- Query the Name of any student in STUDENTS who scored higher than 75 Marks. Order your output by the last three characters 
-- of each name. If two or more students both have names ending in the same last three characters (i.e.: Bobby, Robby, etc.),
-- secondary sort them by ascending ID.

SELECT name 
FROM students
WHERE marks > 75
ORDER BY RIGHT (name, 3) ASC, id ASC;

/*
Ketty gives Eve a task to generate a report containing three columns: Name, Grade and Mark. 
Ketty doesn't want the NAMES of those students who received a grade lower than 8. The report must be in descending order by grade -- i.e. 
higher grades are entered first. If there is more than one student with the same grade (8-10) assigned to them, 
order those particular students by their name alphabetically. Finally, if the grade is lower than 8, use "NULL" as their name and 
list them by their grades in descending order. If there is more than one student with the same grade (1-7) assigned to them,
order those particular students by their marks in ascending order.
Write a query to help Eve.
*/

SELECT IF(grade < 8, 'NULL', name), grade, marks
FROM students
JOIN grades ON students.marks BETWEEN grades.min_mark AND grades.max_mark
ORDER BY grade DESC, name ASC, marks ASC;