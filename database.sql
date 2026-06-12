-- ===================================================
-- Blood Bank Management System - Database Schema
-- ===================================================

CREATE DATABASE IF NOT EXISTS bloodbank;
USE bloodbank;

-- Donors Table
CREATE TABLE donors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    gender VARCHAR(20),
    blood_group VARCHAR(10),
    phone VARCHAR(20),
    last_donation DATE
);

-- Hospitals Table
CREATE TABLE hospitals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hospital_name VARCHAR(150),
    contact_person VARCHAR(100),
    phone VARCHAR(20),
    email VARCHAR(100),
    address TEXT
);

-- Donations Table
CREATE TABLE donations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    donor_name VARCHAR(100),
    blood_group VARCHAR(10),
    units INT,
    donation_date DATE,
    status VARCHAR(20) DEFAULT 'Pending'
);

-- Blood Requests Table
CREATE TABLE blood_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    hospital_name VARCHAR(150),
    blood_group VARCHAR(10),
    units INT,
    priority VARCHAR(20),
    status VARCHAR(20) DEFAULT 'Pending'
);

-- Inventory Table
CREATE TABLE inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    blood_group VARCHAR(10),
    available_units INT,
    units_used INT DEFAULT 0
);

-- ===================================================
-- Sample Data
-- ===================================================

INSERT INTO donors
(name, age, gender, blood_group, phone, last_donation)
VALUES
('Rahul Sharma', 28, 'Male', 'O+', '9876543210', '2025-11-14'),
('Priya Patel', 32, 'Female', 'A+', '9876543211', '2025-10-19'),
('Amit Kumar', 25, 'Male', 'B+', '9876543212', NULL),
('Sneha Reddy', 30, 'Female', 'O+', '9876543213', '2025-09-04'),
('Vikram Singh', 35, 'Male', 'O-', '9876543214', '2025-11-30'),
('Ananya Gupta', 27, 'Female', 'A-', '9876543215', NULL),
('Rajesh Mehta', 40, 'Male', 'B-', '9876543216', '2025-08-09'),
('Kavita Nair', 29, 'Female', 'AB+', '9876543217', '2025-11-27'),
('imran', 18, 'Male', 'B+', '8618207131', '2026-06-11'),
('annu', 18, 'Female', 'B+', '8618207131', NULL);

INSERT INTO hospitals
(hospital_name, contact_person, phone, email, address)
VALUES
('City General Hospital', 'Dr. Sanjay Verma', '0112345678', 'citygen@hospital.com', '123 Main Street, Delhi'),
('Apollo Medical Center', 'Dr. Meera Shah', '0223456789', 'apollo@medical.com', '456 Health Avenue, Mumbai'),
('LifeCare Hospital', 'Dr. Arjun Rao', '0804567890', 'lifecare@hospital.com', '789 Wellness Road, Bangalore'),
('Metro Health Institute', 'Dr. Lakshmi Iyer', '0445678901', 'metro@health.com', '321 Care Lane, Chennai'),
('Test Hospital', 'Dr Test', '9999999999', 'test@test.com', 'Test');

INSERT INTO donations
(donor_name, blood_group, units, donation_date, status)
VALUES
('Rahul Sharma', 'O+', 1, '2025-11-14', 'Approved'),
('Priya Patel', 'A+', 1, '2025-10-19', 'Approved'),
('Sneha Reddy', 'O+', 1, '2025-09-04', 'Approved'),
('Vikram Singh', 'O-', 1, '2025-11-30', 'Approved'),
('Amit Kumar', 'B+', 1, '2026-01-09', 'Pending'),
('Ananya Gupta', 'A-', 1, '2026-01-14', 'Pending'),
('imran', 'B+', 1, '2026-06-11', 'Approved');

INSERT INTO blood_requests
(hospital_name, blood_group, units, priority, status)
VALUES
('City General Hospital', 'O+', 3, 'Critical', 'Fulfilled'),
('Apollo Medical Center', 'A+', 2, 'Urgent', 'Approved'),
('LifeCare Hospital', 'B+', 1, 'Normal', 'Pending'),
('Metro Health Institute', 'O-', 2, 'Critical', 'Pending'),
('City General Hospital', 'B-', 1, 'Normal', 'Pending');

INSERT INTO inventory
(blood_group, available_units, units_used)
VALUES
('A-', 20, 5),
('A+', 45, 12),
('AB-', 8, 1),
('AB+', 10, 2),
('B-', 15, 3),
('B+', 39, 8),
('O-', 25, 10),
('O+', 60, 25);

-- ===================================================
-- Sample Queries
-- ===================================================

SELECT * FROM donors;
SELECT * FROM hospitals;
SELECT * FROM donations;
SELECT * FROM blood_requests;
SELECT * FROM inventory;