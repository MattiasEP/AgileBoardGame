-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Värd: localhost
-- Tid vid skapande: 28 feb 2017 kl 13:40
-- Serverversion: 10.1.21-MariaDB
-- PHP-version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databas: `boardgame`
--

-- --------------------------------------------------------

--
-- Tabellstruktur `highscore`
--

CREATE TABLE `highscore` (
  `id` int(250) NOT NULL,
  `teamname` varchar(250) NOT NULL,
  `score` int(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumpning av Data i tabell `highscore`
--

INSERT INTO `highscore` (`id`, `teamname`, `score`) VALUES
(1, 'teamone', 500),
(2, 'teamtwo', 400),
(3, 'teamthree', 100),
(4, 'teamfour', 800),
(5, 'teamfive', 1999),
(6, 'teamsix', 222),
(7, 'abc', 25);

--
-- Index för dumpade tabeller
--

--
-- Index för tabell `highscore`
--
ALTER TABLE `highscore`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT för dumpade tabeller
--

--
-- AUTO_INCREMENT för tabell `highscore`
--
ALTER TABLE `highscore`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
