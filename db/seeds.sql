INSERT INTO department (dept_name)
VALUES ("Finance"),
("Marketing"),
("Sales");

INSERT INTO role (title, salary, dept_id)
VALUES ("Data Analyst", 80000, 1),
("Chief Financial Officer", 120000, 1),
("Marketing Associate", 70000, 2),
("Marketing Manager", 105000, 2),
("Salesman", 60000, 3),
("Head of Sales", 90000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Alon", "Patashnik", 2, NULL),
("Devon", "Fisher", 1, 1),
("Alec", "Yarno", 1, 1),
("Mattie", "O'Boyle", 4, NULL),
("Janice", "Fair", 3, 4),
("Liam", "Wiese", 3, 4),
("Sam", "Wiper", 5, 10),
("Connor", "Murray", 5, 10),
("Karly", "Dougherty", 5, 10),
("Sam", "Leinon", 6, NULL),
("Jordan", "Shaw", 1, 1),
("Jake", "Hoyer", 3, 4);


