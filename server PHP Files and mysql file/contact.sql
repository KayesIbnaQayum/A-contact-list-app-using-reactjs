-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 15, 2022 at 05:37 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.3.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `contactdatabase`
--

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(11) NOT NULL,
  `pic` text NOT NULL,
  `Fname` text NOT NULL,
  `Lname` text NOT NULL,
  `company` text NOT NULL,
  `houseNo` text NOT NULL,
  `city` text NOT NULL,
  `states` text NOT NULL,
  `country` text NOT NULL,
  `telephone` text NOT NULL,
  `mobile` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `pic`, `Fname`, `Lname`, `company`, `houseNo`, `city`, `states`, `country`, `telephone`, `mobile`, `email`) VALUES
(30, 'pp', 'anp', 'tom', 'asd', '556', 'Dhaka', 'savar', 'bangladesh', '77552211', '0178190055', 'asd@gmail.com'),
(31, 'pp', 'Riad', 'mm', 'sw2', '889', 'Rajshahi', 'gram', 'Bangladesh', '5551', '018888', 'kk@gmail.com'),
(32, 'pp', 'kayes', 'ibna Qayum', 'kko', '56', 'Austin', 'Texas', 'USA', '598782', '01781900605', 'kayes.qayum@gmail.com'),
(34, 'pp', 'po', 'kk', 'ff', '567', 'dhaka', 'st', 'south Korea', '55478', '017888', 'kk@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
