-- Create Table
CREATE TABLE people (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    parent_id INT
);

-- Insert Data
INSERT INTO people
    (id, name, parent_id)
VALUES
    (1, 'Zaki', 2),
    (3, 'Irwan', 2),
    (4, 'Arka', 3);


--Query Data
SELECT
    a.id,
    a.name,
    (
        SELECT b.name
        FROM people b
        WHERE b.id = a.parent_id
    ) as parent_name
FROM
    people a
ORDER BY
    a.id;