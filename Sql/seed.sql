use employee_tracker;

INSERT INTO departments (name)
VALUES	('Marketing'),
		('Sales'),
		('Development');

INSERT INTO roles (title, salary, department_id)
VALUES  ('Developer', 85000, 1),
		('Salesperson', 65000, 2),
		('Engineer', 75000, 3),
		('Manager', 120000, 2);

/* Foreign Key is a reference to another table in the database */
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES	('Erich', 'Purpur', 4, NULL),
		('Badara', 'Dia', 4, NULL),
		('Awa', 'Dia', 4, NULL),
		('Dora', 'Bridge', 1, 1),
		('Josh', 'Shepherd', 2, 1),
		('Dylan', 'Fuller', 3, 2),
		('Veronica', 'Boggs', 1, 2),
		('Moussa', 'Dia', 2, 3),
		('Souleyman', 'Dia', 3, 3);
