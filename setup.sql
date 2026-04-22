-- Database setup for Spark Mobility

CREATE DATABASE IF NOT EXISTS spark_db;
USE spark_db;

-- Table for form submissions (institutional inquiries, verification checks)
CREATE TABLE IF NOT EXISTS form_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    type VARCHAR(100) NOT NULL,
    payload JSON NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table for credentials (provisioning keys)
CREATE TABLE IF NOT EXISTS credentials (
    id INT AUTO_INCREMENT PRIMARY KEY,
    key_name VARCHAR(100) NOT NULL UNIQUE,
    key_value VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Insert the default provisioning key
INSERT INTO credentials (key_name, key_value) 
VALUES ('provisioning_key', 'spark2026')
ON DUPLICATE KEY UPDATE key_value = 'spark2026';
