CREATE DATABASE employee_details;

CREATE TABLE details(
    employee_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    dept VARCHAR(255),
    designation VARCHAR(255),
    salary int,
    dob VARCHAR(255),
    address VARCHAR(255),
    doj  VARCHAR(255),
    email VARCHAR(255) UNIQUE
    
);
