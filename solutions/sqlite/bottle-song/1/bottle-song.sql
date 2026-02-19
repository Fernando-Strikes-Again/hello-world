-- Schema:
-- CREATE TABLE "bottle-song" (
--         start_bottles INTEGER NOT NULL,
--         take_down     INTEGER NOT NULL,
--         result        TEXT
-- );
-- Task: update bottle-song table and set the result based on the
-- start_bottles and take_down.
UPDATE "bottle-song"
SET result = (
  WITH RECURSIVE
    words(n, word) AS (
      SELECT 0, 'no' UNION ALL SELECT 1, 'one' UNION ALL SELECT 2, 'two' UNION ALL 
      SELECT 3, 'three' UNION ALL SELECT 4, 'four' UNION ALL SELECT 5, 'five' UNION ALL 
      SELECT 6, 'six' UNION ALL SELECT 7, 'seven' UNION ALL SELECT 8, 'eight' UNION ALL 
      SELECT 9, 'nine' UNION ALL SELECT 10, 'ten'
    ),
    counter(v_num, bottles_left) AS (
      SELECT 1, start_bottles
      UNION ALL
      SELECT v_num + 1, bottles_left - 1
      FROM counter
      WHERE v_num < take_down
    ),
    verses(v_num, verse_text) AS (
      SELECT v_num,
        UPPER(SUBSTR(w1.word, 1, 1)) || SUBSTR(w1.word, 2) || ' green bottle' || (CASE WHEN bottles_left = 1 THEN '' ELSE 's' END) || ' hanging on the wall,' || CHAR(10) ||
        UPPER(SUBSTR(w1.word, 1, 1)) || SUBSTR(w1.word, 2) || ' green bottle' || (CASE WHEN bottles_left = 1 THEN '' ELSE 's' END) || ' hanging on the wall,' || CHAR(10) ||
        'And if one green bottle should accidentally fall,' || CHAR(10) ||
        'There''ll be ' || w2.word || ' green bottle' || (CASE WHEN bottles_left - 1 = 1 THEN '' ELSE 's' END) || ' hanging on the wall.'
      FROM counter
      JOIN words w1 ON bottles_left = w1.n
      JOIN words w2 ON (bottles_left - 1) = w2.n
    )
  -- This version of GROUP_CONCAT is more likely to respect the order
  SELECT GROUP_CONCAT(verse_text, CHAR(10) || CHAR(10))
  FROM (SELECT verse_text FROM verses ORDER BY v_num ASC)
);