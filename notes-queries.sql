
SELECT * from notes;

SELECT * from notes LIMIT 5;

-- Find newest
SELECT * from notes ORDER BY date DESC;

-- Alphabetical sort
SELECT * from notes ORDER BY title ASC;

SELECT * from notes WHERE title = '5 life lessons learned from cats';

SELECT * from notes WHERE title LIKE 'cats';

SELECT * from notes WHERE title LIKE 'government';

UPDATE notes
  SET title = 'foo',
    content = 'bar'
  WHERE id = '1000';

INSERT INTO notes (name) VALUES ('invalid note 1')

INSERT INTO notes (content) VALUES ('invalid note 2')

DELETE from notes WHERE id = '1000';

