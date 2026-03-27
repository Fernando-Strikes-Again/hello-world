/*
Julia just finished conducting a coding contest, and she needs your help assembling the leaderboard! 
Write a query to print the respective hacker_id and name of hackers who achieved full scores for more than one challenge. 
Order your output in descending order by the total number of challenges in which the hacker earned a full score. 
If more than one hacker received full scores in same number of challenges, then sort them by ascending hacker_id.
*/

SELECT h.hacker_id, h.name
FROM submissions s
JOIN hackers h ON s.hacker_id = h.hacker_id
JOIN challenges c ON c.challenge_id = s.challenge_id
JOIN difficulty d ON d.difficulty_level = c.difficulty_level
WHERE s.score = d.score
GROUP BY h.hacker_id, h.name
HAVING COUNT(s.submission_id)>1
ORDER BY COUNT(s.submission_id) DESC, h.hacker_id ASC;

/*
Julia asked her students to create some coding challenges. Write a query to print the hacker_id, name, 
and the total number of challenges created by each student. Sort your results by the total number of challenges in descending order. 
If more than one student created the same number of challenges, then sort the result by hacker_id. 
If more than one student created the same number of challenges and the count is less than the maximum number of challenges created, 
then exclude those students from the result.
*/

SELECT h.hacker_id, h.name, COUNT(c.challenge_id) AS total_count
FROM hackers h
JOIN challenges c ON h.hacker_id = c.hacker_id
GROUP BY h.hacker_id, h.name
HAVING
    total_count = (
        SELECT COUNT(c2.challenge_id)
        FROM challenges c2
        GROUP BY c2.hacker_id
        ORDER BY COUNT(c2.challenge_id) DESC
        LIMIT 1
    )
    OR
    total_count IN (
        SELECT t.cnt 
        FROM (
            SELECT COUNT(challenge_id) AS cnt
            FROM challenges
            GROUP BY hacker_id
        ) t 
        GROUP BY t.cnt
        HAVING COUNT(t.cnt) = 1
    )
ORDER BY total_count DESC, h.hacker_id ASC;

/*
You did such a great job helping Julia with her last coding contest challenge that she wants you to work on this one, too!
The total score of a hacker is the sum of their maximum scores for all of the challenges. 
Write a query to print the hacker_id, name, and total score of the hackers ordered by the descending score.
If more than one hacker achieved the same total score, then sort the result by ascending hacker_id. 
Exclude all hackers with a total score of 0 from your result.
*/

SELECT h.hacker_id, h.name, SUM(max_scores.m_score) AS total_score
FROM hackers h
JOIN (
    SELECT hacker_id, MAX(score) AS m_score
    FROM submissions
    GROUP BY hacker_id, challenge_id
) max_scores ON h.hacker_id = max_scores.hacker_id
GROUP BY h.hacker_id, h.name
HAVING total_score > 0
ORDER BY total_score DESC, h.hacker_id ASC;