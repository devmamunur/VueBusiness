-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 07, 2022 at 06:57 PM
-- Server version: 5.7.33
-- PHP Version: 7.4.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `vue_omnimart`
--

-- --------------------------------------------------------

--
-- Table structure for table `bcategories`
--

CREATE TABLE `bcategories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `bcategories`
--

INSERT INTO `bcategories` (`id`, `name`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Web Design', 'web-design', 'Public', '2021-06-23 22:39:16', '2021-06-23 22:39:16'),
(2, 'Web Development', 'web-development', 'Public', '2021-06-23 22:39:56', '2021-06-23 22:40:37'),
(3, 'PSD Design', 'psd-design', 'Public', '2021-06-23 22:40:47', '2021-06-23 22:40:47'),
(4, 'Digital Marketing', 'digital-marketing', 'Public', '2021-06-23 22:41:17', '2021-06-23 22:41:17'),
(5, 'App Development', 'app-development', 'Public', '2021-06-23 22:41:45', '2021-06-23 22:41:45');

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bcategory_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `bcategory_id`, `title`, `slug`, `image`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 5, 'Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.', 'lorem-ipsum-dolor-sit-amet-consecte-cing-elit-sed-do-eiusmod-tempor', '16492564791848986926.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.\r\n\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nA cleansing hot shower or bath\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.', 'Public', '2021-06-23 22:45:58', '2022-04-06 08:47:59'),
(2, 3, 'Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.', 'adipisicing-elit-sed-do-eiusmod-tempor-incididunt-ut-labore-et-dolore', '16245100641104020231.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.\r\n\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nA cleansing hot shower or bath\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.', 'Public', '2021-06-23 22:47:44', '2022-04-06 08:48:19'),
(3, 1, 'Magna aliqua. Ut enim ad minim venia m, quis nostrud exercitation ullamco', 'magna-aliqua-ut-enim-ad-minim-venia-m-quis-nostrud-exercitation-ullamco', '1624510103339929223.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.\r\n\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nA cleansing hot shower or bath\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.', 'Public', '2021-06-23 22:48:23', '2022-04-06 08:48:38'),
(6, 4, 'Digital marketing discussion part one', 'digital-marketing-discussion-part-one', '16492570121829836425.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.\r\n\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nA cleansing hot shower or bath\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.', 'Public', '2021-08-06 10:40:07', '2022-04-06 08:56:52'),
(7, 4, 'Digital marketing discussion part two', 'digital-marketing-discussion-part-two', '164925703999864711.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.\r\n\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nA cleansing hot shower or bath\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.', 'Public', '2022-04-06 08:57:19', '2022-04-06 08:57:19'),
(8, 4, 'Digital marketing discussion part three', 'digital-marketing-discussion-part-three', '1649257063640829498.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.\r\n\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nA cleansing hot shower or bath\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.', 'Public', '2022-04-06 08:57:43', '2022-04-06 08:57:43'),
(9, 4, 'Digital marketing discussion part four', 'digital-marketing-discussion-part-four', '1649257210747460808.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.\r\n\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nA cleansing hot shower or bath\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.', 'Public', '2022-04-06 09:00:10', '2022-04-06 09:00:10'),
(10, 4, 'Digital marketing discussion part five', 'digital-marketing-discussion-part-five', '16492572262121046627.jpg', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.\r\n\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.\r\n\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nA cleansing hot shower or bath\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi-dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati-on ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre-henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.\r\n\r\nSetting the mood with incense\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.\r\nLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do.', 'Public', '2022-04-06 09:00:26', '2022-04-06 09:00:26');

-- --------------------------------------------------------

--
-- Table structure for table `clients`
--

CREATE TABLE `clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clients`
--

INSERT INTO `clients` (`id`, `name`, `image`, `link`, `status`, `created_at`, `updated_at`) VALUES
(5, 'Company Name', '1655107500317908568.png', '#', 'Public', '2021-08-11 13:28:17', '2022-06-13 02:05:00'),
(6, 'Company Name', '1655107491595260695.png', '#', 'Public', '2021-08-11 13:28:37', '2022-06-13 02:04:51'),
(7, 'Company Name', '16551074861038451518.png', '#', 'Public', '2021-08-11 13:28:51', '2022-06-13 02:04:46'),
(8, 'Company Name', '16551074762009054984.png', '#', 'Public', '2021-08-11 13:29:01', '2022-06-13 02:04:36'),
(9, 'Company Name', '16551074701128512611.png', '#', 'Public', '2021-08-11 13:29:09', '2022-06-13 02:04:30'),
(10, 'Company Name', '16551074612093725968.png', '#', 'Public', '2021-08-11 13:29:29', '2022-06-13 02:04:21');

-- --------------------------------------------------------

--
-- Table structure for table `counters`
--

CREATE TABLE `counters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `number` int(11) DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text` text COLLATE utf8mb4_unicode_ci,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `counters`
--

INSERT INTO `counters` (`id`, `title`, `number`, `icon`, `text`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Projct Complate', 569, 'fas fa-tasks', 'Sed ut perspiciatis unde omnis iste natus error sit voluptsantium doloremque laudantium', 'Public', '2021-08-04 22:46:49', '2022-04-06 08:34:24'),
(2, 'Happy Clients', 356, 'fas fa-users', 'Sed ut perspiciatis unde omnis iste natus error sit voluptsantium doloremque laudantium', 'Public', '2021-08-04 22:49:57', '2022-04-06 08:33:17'),
(3, 'Business Partners', 783, 'fas fa-globe', 'Sed ut perspiciatis unde omnis iste natus error sit voluptsantium doloremque laudantium', 'Public', '2021-08-04 22:50:05', '2022-04-06 08:34:20'),
(4, 'IT Consultant', 894, 'fas fa-award', 'Sed ut perspiciatis unde omnis iste natus error sit voluptsantium doloremque laudantiu', 'Public', '2021-08-04 22:50:13', '2022-04-06 08:34:10');

-- --------------------------------------------------------

--
-- Table structure for table `emailsettings`
--

CREATE TABLE `emailsettings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `is_smtp` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `header_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `smtp_host` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `smtp_port` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email_encryption` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `smtp_user` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `smtp_pass` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `from_email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `from_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_verification_email` tinyint(4) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `emailsettings`
--

INSERT INTO `emailsettings` (`id`, `is_smtp`, `header_email`, `smtp_host`, `smtp_port`, `email_encryption`, `smtp_user`, `smtp_pass`, `from_email`, `from_name`, `is_verification_email`, `created_at`, `updated_at`) VALUES
(1, 'Activated', 'smtp', 'smtp.mailtrap.io', '2525', 'tls', 'f45e61a95b407b', 'c9b28a09cc37df', 'yourmail@gmail.com', 'VueBusiness', 1, NULL, '2022-06-15 07:16:52');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `faqs`
--

CREATE TABLE `faqs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `faqs`
--

INSERT INTO `faqs` (`id`, `title`, `content`, `status`, `created_at`, `updated_at`) VALUES
(1, 'We Provide Professional Service', 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam', 'Public', '2021-08-04 09:50:09', '2021-08-04 09:50:09'),
(2, 'Stay Up, Stay Running & Protected', 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam', 'Public', '2021-08-04 09:50:37', '2022-04-10 12:33:01'),
(3, 'Our Experienced Experts', 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam', 'Public', '2021-08-04 09:50:43', '2021-08-04 09:50:43'),
(4, 'Management Engineering System', 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam', 'Public', '2021-08-04 09:50:49', '2022-04-10 12:32:40');

-- --------------------------------------------------------

--
-- Table structure for table `features`
--

CREATE TABLE `features` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `features`
--

INSERT INTO `features` (`id`, `icon`, `title`, `text`, `status`, `created_at`, `updated_at`) VALUES
(2, 'fal fa-database', 'Database Security', 'Sed ut perspiciatis unde omnis iste natus error volup', 'Public', '2021-07-12 08:34:58', '2022-03-07 07:59:54'),
(3, 'fal fa-chalkboard', 'Web Development', 'Sed ut perspiciatis unde omnis iste natus error volup', 'Public', '2021-07-12 08:38:55', '2022-03-07 07:59:32'),
(4, 'fal fa-fingerprint', 'Security System', 'Sed ut perspiciatis unde omnis iste natus error volup', 'Public', '2021-07-12 08:39:00', '2022-03-07 07:59:09'),
(5, 'fal fa-laptop-code', 'IT Soluations', 'Sed ut perspiciatis unde omnis iste natus error volup', 'Public', '2021-07-12 08:39:06', '2022-03-07 07:58:39');

-- --------------------------------------------------------

--
-- Table structure for table `footer_links`
--

CREATE TABLE `footer_links` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `footer_links`
--

INSERT INTO `footer_links` (`id`, `name`, `url`, `status`, `created_at`, `updated_at`) VALUES
(4, 'Service', '#', 'Public', '2021-08-05 23:23:30', '2022-06-08 23:59:33'),
(5, 'Blog', '#', 'Public', '2021-08-05 23:23:41', '2022-06-08 23:30:07'),
(6, 'Contact', '#', 'Public', '2021-08-05 23:23:47', '2022-06-08 23:29:59'),
(7, 'About', '#', 'Public', '2021-08-05 23:23:57', '2022-06-08 23:29:51');

-- --------------------------------------------------------

--
-- Table structure for table `galleries`
--

CREATE TABLE `galleries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `gcategory_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `galleries`
--

INSERT INTO `galleries` (`id`, `gcategory_id`, `title`, `image`, `video_link`, `status`, `created_at`, `updated_at`) VALUES
(1, 2, 'Lorem Ipsum is simply dummy text', '1649615946770394560.jpg', 'yXXDPsh2YuU', 'Public', '2021-07-05 03:46:27', '2022-04-10 12:39:06'),
(2, 1, 'Lorem Ipsum is simply dummy text 3', '16496159521264939941.jpg', NULL, 'Public', '2021-07-05 04:16:44', '2022-04-10 12:39:12'),
(3, 5, 'Lorem Ipsum is simply dummy text 4', '1649615961892053671.jpg', NULL, 'Public', '2022-04-10 12:39:21', '2022-04-10 12:39:21'),
(4, 2, 'Lorem Ipsum is simply dummy text 5', '16496159761932571879.jpg', 'yXXDPsh2YuU', 'Public', '2022-04-10 12:39:36', '2022-04-10 12:39:36'),
(5, 1, 'Lorem Ipsum is simply dummy text 6', '1649615988840787758.jpg', NULL, 'Public', '2022-04-10 12:39:48', '2022-04-10 12:39:48'),
(6, 5, 'Lorem Ipsum is simply dummy text 7', '16496160031190756483.jpg', NULL, 'Public', '2022-04-10 12:40:03', '2022-04-10 12:40:03'),
(7, 3, 'Lorem Ipsum is simply dummy text 8', '1649616012805719953.jpg', 'yXXDPsh2YuU', 'Public', '2022-04-10 12:40:12', '2022-04-10 12:40:12'),
(8, 2, 'Lorem Ipsum is simply dummy text 9', '16496160201900906337.jpg', NULL, 'Public', '2022-04-10 12:40:20', '2022-04-10 12:40:20');

-- --------------------------------------------------------

--
-- Table structure for table `gcategories`
--

CREATE TABLE `gcategories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `gcategories`
--

INSERT INTO `gcategories` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Web Design', 'Public', '2021-07-05 00:43:07', '2021-07-05 01:16:30'),
(2, 'Web Development', 'Public', '2021-07-05 01:19:19', '2021-07-05 01:19:19'),
(3, 'PSD to HTML', 'Public', '2021-07-05 01:19:29', '2021-07-05 01:19:29'),
(4, 'SEO', 'Private', '2021-07-05 01:19:37', '2021-07-05 03:37:04'),
(5, 'App Design', 'Public', '2021-07-05 01:19:52', '2021-07-05 01:19:52');

-- --------------------------------------------------------

--
-- Table structure for table `histories`
--

CREATE TABLE `histories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `histories`
--

INSERT INTO `histories` (`id`, `title`, `image`, `date`, `position`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Technical content may have per suasive objectives.', '16496148201304361088.jpg', '2010', 'Stratup', 'Public', '2021-07-07 22:20:00', '2022-04-10 12:20:20'),
(2, 'Technical content may have per suasive objectives.', '1649614865212349530.jpg', '2011', 'Startup', 'Public', '2021-07-08 00:16:04', '2022-04-10 12:21:05'),
(3, 'Technical content may have per suasive objectives.', '16496148962045837381.jpg', '2012', 'Stratup', 'Public', '2021-07-08 00:16:19', '2022-04-10 12:21:36'),
(4, 'Technical content may have per suasive objectives.', '16496149151256945408.jpg', '2013', 'Stratup', 'Public', '2021-07-08 00:16:33', '2022-04-10 12:21:55');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_category_id` int(11) DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `company_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vacancy` int(11) DEFAULT NULL,
  `deadline` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `employment_status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_location` text COLLATE utf8mb4_unicode_ci,
  `salary` text COLLATE utf8mb4_unicode_ci,
  `other_benefits` text COLLATE utf8mb4_unicode_ci,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `job_responsibility` text COLLATE utf8mb4_unicode_ci,
  `education_requirement` text COLLATE utf8mb4_unicode_ci,
  `job_context` text COLLATE utf8mb4_unicode_ci,
  `experience_requirement` text COLLATE utf8mb4_unicode_ci,
  `additional_requirement` text COLLATE utf8mb4_unicode_ci,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `jobs`
--

INSERT INTO `jobs` (`id`, `job_category_id`, `title`, `slug`, `position`, `company_name`, `vacancy`, `deadline`, `employment_status`, `job_location`, `salary`, `other_benefits`, `email`, `job_responsibility`, `education_requirement`, `job_context`, `experience_requirement`, `additional_requirement`, `status`, `created_at`, `updated_at`) VALUES
(5, 5, 'Need Web Application Developer', 'need-web-application-developer', 'Application Developer', 'GeniusDevs', 15, '2022-04-29T18:00:00.000Z', 'Full-Time', 'Dhaka, Bangladesh', '$2000-$4000', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'geniusdevs24@gmail.com', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'Public', '2022-04-10 12:54:23', '2022-04-10 12:54:45'),
(6, 5, 'Need Android Developer', 'need-android-developer', 'Application Developer', 'GeniusDevs', 15, '2022-04-29T18:00:00.000Z', 'Full-Time', 'Dhaka, Bangladesh', '$2000-$4000', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'geniusdevs24@gmail.com', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'Public', '2022-04-10 12:54:23', '2022-04-10 12:58:25'),
(7, 5, 'Need IOS Developer', 'need-ios-developer', 'Application Developer', 'GeniusDevs', 15, '2022-04-29T18:00:00.000Z', 'Full-Time', 'Dhaka, Bangladesh', '$2000-$4000', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'geniusdevs24@gmail.com', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'Public', '2022-04-10 12:54:23', '2022-04-10 12:58:17'),
(8, 1, 'Need HTML Designer', 'need-html-designer', 'Web Developer', 'GeniusDevs', 15, '2022-04-29T18:00:00.000Z', 'Full-Time', 'Dhaka, Bangladesh', '$2000-$4000', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'geniusdevs24@gmail.com', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'Public', '2022-04-10 12:54:23', '2022-04-10 12:58:08'),
(9, 2, 'Need JavaScript Expert', 'need-javascript-expert', 'Web Developer', 'GeniusDevs', 15, '2022-04-29T18:00:00.000Z', 'Full-Time', 'Dhaka, Bangladesh', '$2000-$4000', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'geniusdevs24@gmail.com', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'Public', '2022-04-10 12:54:23', '2022-04-10 12:58:59'),
(10, 2, 'Need React Developer', 'need-react-developer', 'Application Developer', 'GeniusDevs', 15, '2022-04-29T18:00:00.000Z', 'Full-Time', 'Dhaka, Bangladesh', '$2000-$4000', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'geniusdevs24@gmail.com', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'Public', '2022-04-10 12:54:23', '2022-04-10 12:59:16'),
(11, 5, 'Need Node JS Developer', 'need-node-js-developer', 'Application Developer', 'GeniusDevs', 15, '2022-04-29T18:00:00.000Z', 'Full-Time', 'Dhaka, Bangladesh', '$2000-$4000', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'geniusdevs24@gmail.com', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'Public', '2022-04-10 12:54:23', '2022-04-10 12:59:41'),
(12, 4, 'Need Expert Graphic Designer', 'need-expert-graphic-designer', 'Graphic Designer', 'GeniusDevs', 15, '2022-04-29T18:00:00.000Z', 'Full-Time', 'Dhaka, Bangladesh', '$2000-$4000', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'geniusdevs24@gmail.com', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'You have to be experienced with UI frameworks in general; we love the Angular and Angular material. You have to be experienced in building Single Page Applications (SPA) & integrating Web (Rest) API. Well versed with Angular modules or you have created custom and web components by yourself. You must have practical experience on Node.js, TypeScript, webpack and Third party library. You have an in-depth understanding of cross browser compatibility and you do not create bugs for such reasons. You are pixel-perfect in design conversions and you think of mobile-first implementations. You should have knowledge of CSS preprocessors, Media queries, Image compression and be good with debugging.', 'Public', '2022-04-10 12:54:23', '2022-04-10 13:00:17');

-- --------------------------------------------------------

--
-- Table structure for table `job_applications`
--

CREATE TABLE `job_applications` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `job_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zipFile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `expected_salary` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT '0',
  `message` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_applications`
--

INSERT INTO `job_applications` (`id`, `job_title`, `type`, `zipFile`, `name`, `email`, `phone`, `expected_salary`, `status`, `message`, `created_at`, `updated_at`) VALUES
(38, 'Need Expert Graphic Designer', 'Graphic Designer', 'MjQ8FQu2vzp08GiH1654697714.pdf', 'Mamunur Rashid', 'mamunur24@gmail.com', '1111111111', '12233', '1', 'Hi, this is test application.', '2022-06-08 08:15:14', '2022-06-08 10:49:43'),
(39, 'Need Expert Graphic Designer', 'Graphic Designer', 'ymih6hljLbDi16la1654698005.pdf', 'Rony Khan', 'ronykhan@gmail.com', '2222222', '3455', '1', 'This is a test application mail.', '2022-06-08 08:20:05', '2022-06-08 10:44:45');

-- --------------------------------------------------------

--
-- Table structure for table `job_categories`
--

CREATE TABLE `job_categories` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `job_categories`
--

INSERT INTO `job_categories` (`id`, `name`, `slug`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Web Design', 'web-design', 'Public', '2021-06-24 00:58:50', '2021-06-24 00:58:50'),
(2, 'Web Development', 'web-development', 'Public', '2021-06-24 01:00:08', '2021-06-24 01:00:08'),
(3, 'Digital Marketing', 'digital-marketing', 'Public', '2021-06-24 01:11:03', '2021-06-24 01:11:52'),
(4, 'PSD Design', 'psd-design', 'Public', '2021-06-24 01:11:12', '2021-06-24 01:11:12'),
(5, 'App Development', 'app-development', 'Public', '2021-06-24 01:11:23', '2021-06-24 03:33:37');

-- --------------------------------------------------------

--
-- Table structure for table `languages`
--

CREATE TABLE `languages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_default` int(11) NOT NULL DEFAULT '0',
  `direction` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(14, '2021_06_23_033459_create_languages_table', 6),
(17, '2021_05_25_150456_create_bcategories_table', 7),
(18, '2021_06_02_141857_create_blogs_table', 7),
(19, '2021_06_24_045615_create_jobs_table', 8),
(20, '2021_06_24_050059_create_job_categories_table', 8),
(21, '2021_06_25_095234_create_services_table', 9),
(23, '2021_06_25_111904_create_portfolio_images_table', 10),
(24, '2021_06_25_111849_create_portfolios_table', 11),
(27, '2021_07_04_150802_create_gcategories_table', 12),
(28, '2021_07_04_150928_create_galleries_table', 12),
(29, '2021_07_05_102736_create_packages_table', 13),
(30, '2021_07_06_115540_create_histories_table', 14),
(34, '2021_07_12_101736_create_features_table', 17),
(35, '2021_07_12_145324_create_why_chooses_table', 18),
(37, '2021_07_13_085716_create_testimonials_table', 19),
(38, '2021_08_04_064012_create_teams_table', 20),
(39, '2021_08_04_150812_create_faqs_table', 21),
(41, '2021_08_04_155742_create_counters_table', 22),
(42, '2021_08_05_045610_create_clients_table', 23),
(43, '2021_07_10_152838_create_settings_table', 24),
(44, '2021_07_10_153546_create_sectiontitles_table', 24),
(47, '2021_08_06_045247_create_footer_links_table', 26),
(49, '2021_08_16_010913_create_social_links_table', 28),
(50, '2021_09_13_031349_create_job_applications_table', 29),
(51, '2021_07_08_073532_create_sliders_table', 30),
(53, '2022_03_30_060239_create_quotes_table', 32),
(54, '2022_04_13_074206_create_newsletters_table', 33),
(55, '2022_03_29_172847_create_emailsettings_table', 34),
(57, '2021_08_05_084724_create_visibilities_table', 35),
(58, '2014_10_12_000000_create_users_table', 36),
(59, '2019_12_14_000001_create_personal_access_tokens_table', 37);

-- --------------------------------------------------------

--
-- Table structure for table `newsletters`
--

CREATE TABLE `newsletters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `newsletters`
--

INSERT INTO `newsletters` (`id`, `email`, `created_at`, `updated_at`) VALUES
(10, 'devmamun8@gmail.com', '2022-04-17 23:22:05', '2022-04-17 23:22:05');

-- --------------------------------------------------------

--
-- Table structure for table `packages`
--

CREATE TABLE `packages` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `price` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `time` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `feature` text COLLATE utf8mb4_unicode_ci,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `packages`
--

INSERT INTO `packages` (`id`, `title`, `price`, `time`, `feature`, `status`, `created_at`, `updated_at`) VALUES
(4, 'Early Birds', '9', 'Monthly', '[\"Web Design\",\"11 html page\",\"20 free support\",\"50 Revesion\",\"Source Code\"]', 'Public', '2021-07-06 05:53:07', '2022-04-10 12:28:05'),
(5, 'Monthly', '32', 'Monthly', '[\"Web Design\",\"11 html page\",\"20 free support\",\"50 Revesion\",\"Source Code\"]', 'Public', '2021-07-06 05:53:07', '2022-04-10 12:28:05'),
(6, 'Personal', '69', 'Monthly', '[\"Web Design\",\"11 html page\",\"20 free support\",\"50 Revesion\",\"Source Code\"]', 'Public', '2021-07-06 05:53:07', '2022-04-10 12:28:05'),
(7, 'Plutinum', '99', 'Monthly', '[\"Web Design\",\"11 html page\",\"20 free support\",\"50 Revesion\",\"Source Code\"]', 'Public', '2021-07-06 05:53:07', '2022-04-10 12:28:05'),
(8, 'Max', '120', 'Monthly', '[\"Web Design\",\"11 html page\",\"20 free support\",\"50 Revesion\",\"Source Code\"]', 'Public', '2021-07-06 05:53:07', '2022-04-10 12:28:05'),
(9, 'Pro', '150', 'Monthly', '[\"Web Design\",\"11 html page\",\"20 free support\",\"50 Revesion\",\"Source Code\"]', 'Public', '2021-07-06 05:53:07', '2022-04-10 12:28:05');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `portfolios`
--

CREATE TABLE `portfolios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `submission_date` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `client_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `featured_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `service_id` int(11) DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `link` text COLLATE utf8mb4_unicode_ci,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `portfolios`
--

INSERT INTO `portfolios` (`id`, `title`, `slug`, `start_date`, `submission_date`, `client_name`, `featured_image`, `service_id`, `content`, `link`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Software Landing Page HTML', 'software-landing-page-html', '2022-04-01', '2022-04-20', 'Yoko Best', '1649203553735583251.jpg', 5, 'DescriptionAs a result, most of us need to know how to use computers. Our knowledge of computers will help us to tap into challenging career opportunities and enhance the quality of our lives. It is imperative that quality students be encouraged and motivated to study computers and become capable and responsible IT professionals. The education model needs to align itself with dynamically changing technology to meet the growing need for skilled IT manpower and deliver state-of-the-art, industry relevant and technology ready programs.​ Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing and technology and the term is more recognizable than ever before. The Information Technology umbrella can be quite large, covering many fields. IT professionals perform a variety of duties that range from installing applications, managing information, to designing complex applications, managing computer networks and designing and managing databases.', NULL, 'Public', '2021-06-25 09:23:12', '2022-04-05 18:05:53'),
(2, 'Product Landing Page HTML Template', 'product-landing-page-html-template', 'Mon Jun 07 2021 00:00:00 GMT+0600 (Bangladesh Standard Time)', 'Wed Jun 16 2021 00:00:00 GMT+0600 (Bangladesh Standard Time)', 'Aquila Wolf', '1649204257706271852.jpg', 9, 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '#', 'Public', '2021-06-25 10:33:53', '2022-04-05 18:17:37'),
(3, 'Personal Portfolio HTML Template', 'personal-portfolio-html-template', 'Wed Jun 16 2021 00:00:00 GMT+0600 (Bangladesh Standard Time)', 'Wed Jun 23 2021 00:00:00 GMT+0600 (Bangladesh Standard Time)', 'Audrey Molina', '1649204441237666711.jpg', 7, 'As a result, most of us need to know how to use computers. Our knowledge of computers will help us to tap into challenging career opportunities and enhance the quality of our lives. It is imperative that quality students be encouraged and motivated to study computers and become capable and responsible IT professionals. The education model needs to align itself with dynamically changing technology to meet the growing need for skilled IT manpower and deliver state-of-the-art, industry relevant and technology ready programs.​ Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing and technology and the term is more recognizable than ever before. The Information Technology umbrella can be quite large, covering many fields. IT professionals perform a variety of duties that range from installing applications, managing information, to designing complex applications, managing computer networks and designing and managing databases.', '#', 'Public', '2021-06-25 10:39:12', '2022-04-05 18:20:41'),
(4, 'Multipurpose Business & Digital Agency HTML Template', 'multipurpose-business-digital-agency-html-template', 'Tue Jun 08 2021 00:00:00 GMT+0600 (Bangladesh Standard Time)', 'Tue Jun 22 2021 00:00:00 GMT+0600 (Bangladesh Standard Time)', 'Yoko Best', '1649204488502870593.jpg', 6, 'qwerAs a result, most of us need to know how to use computers. Our knowledge of computers will help us to tap into challenging career opportunities and enhance the quality of our lives. It is imperative that quality students be encouraged and motivated to study computers and become capable and responsible IT professionals. The education model needs to align itself with dynamically changing technology to meet the growing need for skilled IT manpower and deliver state-of-the-art, industry relevant and technology ready programs.​ Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing and technology and the term is more recognizable than ever before. The Information Technology umbrella can be quite large, covering many fields. IT professionals perform a variety of duties that range from installing applications, managing information, to designing complex applications, managing computer networks and designing and managing databases.', '#', 'Public', '2021-06-25 11:24:08', '2022-04-05 18:21:28'),
(5, 'One Page Parallax HTML Template', 'one-page-parallax-html-template', '2021-06-08', '2021-06-16', 'Audrey Molina', '16492045361227898569.jpg', 9, 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '#', 'Public', '2021-06-25 12:23:54', '2022-04-05 18:22:16'),
(6, 'Broadband & Internet Service Providers Laravel CMS', 'broadband-internet-service-providers-laravel-cms', '2021-06-09', '2021-06-16', 'Audrey Molina', '1649204594578994955.jpg', 6, 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '#', 'Public', '2021-06-27 11:24:03', '2022-04-10 21:01:13');

-- --------------------------------------------------------

--
-- Table structure for table `portfolio_images`
--

CREATE TABLE `portfolio_images` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `portfolio_id` int(11) DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `portfolio_images`
--

INSERT INTO `portfolio_images` (`id`, `portfolio_id`, `image`, `created_at`, `updated_at`) VALUES
(16, 1, '16492035532035620913.jpg', '2022-04-05 18:05:53', '2022-04-05 18:05:53'),
(17, 1, '1649203553196863843.jpg', '2022-04-05 18:05:53', '2022-04-05 18:05:53'),
(18, 1, '16492035531222491042.jpg', '2022-04-05 18:05:53', '2022-04-05 18:05:53'),
(19, 2, '1649204257826095212.jpg', '2022-04-05 18:17:37', '2022-04-05 18:17:37'),
(20, 3, '16492044411019274358.jpg', '2022-04-05 18:20:41', '2022-04-05 18:20:41'),
(21, 4, '1649204488663798028.jpg', '2022-04-05 18:21:28', '2022-04-05 18:21:28'),
(22, 5, '16492045361513783147.jpg', '2022-04-05 18:22:16', '2022-04-05 18:22:16'),
(23, 6, '16492045941545145518.jpg', '2022-04-05 18:23:14', '2022-04-05 18:23:14');

-- --------------------------------------------------------

--
-- Table structure for table `quotes`
--

CREATE TABLE `quotes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `budget` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `skypeid` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subject` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `file` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `status` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `quotes`
--

INSERT INTO `quotes` (`id`, `name`, `email`, `phone`, `country`, `budget`, `skypeid`, `subject`, `file`, `description`, `status`, `created_at`, `updated_at`) VALUES
(4, 'Elit aliqua Repell', 'rrr@gmail.com', '345', 'Accusantium est quae', 'Incidunt dolore nem', 'Velit quidem qui eos', 'Aut natus a voluptat', NULL, 'Libero fugiat et sun', '0', '2022-03-30 01:15:26', '2022-03-30 01:15:26'),
(5, 'Odit commodo corrupt', 'ggg@gmail.com', '234234', 'Deserunt ad veniam', 'Exercitation officia', 'Rerum in aliquam aut', 'Consequuntur magnam', NULL, 'Explicabo Repudiand', '0', '2022-03-30 01:17:06', '2022-03-30 01:17:06'),
(6, 'Pariatur Illum in', 'mamun@gmail.com', '3434', 'Aliquam repudiandae', 'Consectetur expedita', 'Voluptas officia fug', 'Et est tempor fuga', '1648740274448961076.zip', 'Error incidunt non', '0', '2022-03-31 09:24:34', '2022-03-31 09:24:34'),
(7, 'Dolorum ad suscipit', 'mamun@gmail.com', '4444', 'Sed laborum Occaeca', 'Incididunt architect', 'Sint et fugiat cons', 'Aperiam voluptate su', '164874040069172746.zip', 'Error laboris neque', '0', '2022-03-31 09:26:40', '2022-03-31 09:26:40'),
(8, 'Nam libero nisi cupi', 'mmm@gmail.com', '11111', 'Enim ducimus ab est', 'Sit mollitia proide', 'Illo quas aut quisqu', 'Sint ut consequatur', '164876323828622233.zip', 'Minim adipisicing co', '0', '2022-03-31 15:47:18', '2022-03-31 15:47:18'),
(9, 'Dolor sit quos sit', 'rrr@gmail.com', '3333', 'Ullamco aut in nostr', 'Ea ullamco at odit q', 'Rem officia enim sin', 'Lorem doloremque qui', '16487637951659006953.zip', 'Irure omnis aut aper', '0', '2022-03-31 15:56:35', '2022-03-31 15:56:35'),
(15, 'Mamunur Rashid', 'mamun@gmail.com', '222222', 'BD', '300', '345', 'Test quote', '16547117302139891061.zip', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', '0', '2022-06-08 12:08:50', '2022-06-08 12:08:50');

-- --------------------------------------------------------

--
-- Table structure for table `sectiontitles`
--

CREATE TABLE `sectiontitles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `w_we_are_sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `w_we_are_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `w_we_are_text` text COLLATE utf8mb4_unicode_ci,
  `video_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `service_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `service_sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `w_c_us_sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `w_c_us_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `w_c_us_image1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `w_c_us_image2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `team_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `team_sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_form_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_section_bg_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_form_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_map` text COLLATE utf8mb4_unicode_ci,
  `faq_sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `faq_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `faq_bg_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `faq_image1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `faq_image2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `blog_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `blog_sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hero_sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hero_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hero_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hero_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hero_bg_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hero_f_icon1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hero_f_icon2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hero_f_text1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hero_f_text2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about_sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about_text` text COLLATE utf8mb4_unicode_ci,
  `about_experince_yers` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about_intro_video` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `get_quote_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `get_quote_sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `our_history_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `our_history_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `package_sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `package_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `portfolio_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `portfolio_sub_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `counter_bg_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meeet_us_bg_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meeet_us_button_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `meeet_us_button_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_content` text COLLATE utf8mb4_unicode_ci,
  `video_bg_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_image_left` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `video_image_right` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about_image` text COLLATE utf8mb4_unicode_ci,
  `meeet_us_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `testimonial_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `testimonial_subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sectiontitles`
--

INSERT INTO `sectiontitles` (`id`, `w_we_are_sub_title`, `w_we_are_title`, `w_we_are_text`, `video_title`, `video_sub_title`, `video_text`, `video_image`, `video_link`, `service_title`, `service_sub_title`, `w_c_us_sub_title`, `w_c_us_title`, `w_c_us_image1`, `w_c_us_image2`, `team_title`, `team_sub_title`, `contact_sub_title`, `contact_title`, `contact_form_title`, `contact_section_bg_image`, `contact_form_image`, `contact_map`, `faq_sub_title`, `faq_title`, `faq_bg_image`, `faq_image1`, `faq_image2`, `blog_title`, `blog_sub_title`, `hero_sub_title`, `hero_title`, `hero_text`, `hero_image`, `hero_bg_image`, `hero_f_icon1`, `hero_f_icon2`, `hero_f_text1`, `hero_f_text2`, `about_title`, `about_sub_title`, `about_text`, `about_experince_yers`, `about_intro_video`, `get_quote_title`, `get_quote_sub_title`, `our_history_title`, `our_history_text`, `package_sub_title`, `package_title`, `portfolio_title`, `portfolio_sub_title`, `counter_bg_image`, `meeet_us_bg_image`, `meeet_us_button_text`, `meeet_us_button_link`, `video_content`, `video_bg_image`, `video_image_left`, `video_image_right`, `about_image`, `meeet_us_text`, `testimonial_title`, `testimonial_subtitle`, `created_at`, `updated_at`) VALUES
(1, 'At adipisicing irureg', 'dfrghdjsdfgds', 'Necessitatibus dolorg', 'How we growth our business.', 'INTRO VIDEO', 'The introduction of cloud and mobile technologies into enterprise software.', '1649699793388167125.jpg', 'https://www.youtube.com/watch?v=TdSA7gkVYU0', 'We Offer Better Soluation For Your IT Business', 'OUR LATEST SERVICES', 'WHO WE ARE', 'Why Choose Us', '1649106599315016223.jpg', '1649106599332630888.jpg', 'Meet Our Exclusive Leadership', 'OUR TEAM MEMBER', 'CONTACT US', 'Join Us To Get Free Consultations', 'Don\'t Hesitate To Contact With Us, Say Hello......', '16492559611810549728.jpg', '1649255961448471332.jpg', '<iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993207.564767118!2d-77.9807899414373!3d42.92219345357043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1569310771254!5m2!1sen!2sbd\" width=\"600\" height=\"450\" style=\"border:0;\" allowfullscreen=\"\"></iframe>', 'BEST AGECY FOR YOU', 'Why Choose Our Solutions', '16496158351169044130.jpg', '16496158351435316618.jpg', '16496156581863702738.jpg', 'Read Our Latest News & Blog', 'LATEST NEWS', 'Promote any poduct, service or online course.', 'Get every it Services Here', 'Make your products with good & professionals', '16496980721162796748.png', '1649698138422416871.jpg', 'fal fa-gem', 'fal fa-bullseye', 'IT Product', 'IT Services', 'You can\'t use up creativity.', 'ABOUT US', 'Does any industry face a more complex audience journey and marketing sales process than B2B technology? Consider the number of people who influence a sale, the length of the decision-making cycle, the competing interests of the people who purchase, implement, manage, and use the technology. It’s a lot meaningful content here. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\r\n\r\nThe point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', '60', 'https://www.youtube.com/watch?v=TdSA7gkVYU0', NULL, NULL, 'Our History', 'Does any industry face a more complex audience journey and marketing sales process than B2B technology.', NULL, NULL, 'Our Portfolio', 'Portfolio', NULL, '16492560151723175753.jpg', 'Meet With Us', '#', 'hether you are building an enterprise web portal or a state-of-the-art website, you always need the right modern tools. Well-built and maintained PHP frameworks provide those tools in abundance, allowing maintained PHP frameworks provide those tools in abundance, allowing developers to save time, re-use code, and streamline the back end. As software development tools continuously.', '1649699793528316185.jpg', '1649699793302440510.png', '16496997931968744466.png', '16282624511790751873.jpg', 'Preparing For Your Business Success', 'What Our Client Says', 'TESTIMONIAL', NULL, '2022-06-15 07:12:50');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `content` text COLLATE utf8mb4_unicode_ci,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `title`, `slug`, `icon`, `image`, `content`, `status`, `created_at`, `updated_at`) VALUES
(2, 'UI/UX Design', 'uiux-design', 'fal fa-eye-dropper', '16491073271792534383.jpg', 'As a result, most of us need to know how to use computers. Our knowledge of computers will help us to tap into challenging career opportunities and enhance the quality of our lives. It is imperative that quality students be encouraged and motivated to study computers and become capable and responsible IT professionals. The education model needs to align itself with dynamically changing technology to meet the growing need for skilled IT manpower and deliver state-of-the-art, industry relevant and technology ready programs.​ Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing and technology and the term is more recognizable than ever before. The Information Technology umbrella can be quite large, covering many fields. IT professionals perform a variety of duties that range from installing applications, managing information, to designing complex applications, managing computer networks and designing and managing databases.', 'Public', '2021-06-25 05:16:13', '2022-04-04 15:22:07'),
(5, 'IT Consultancy', 'it-consultancy', 'fal fa-gavel', '16491073541184488123.jpg', 'As a result, most of us need to know how to use computers. Our knowledge of computers will help us to tap into challenging career opportunities and enhance the quality of our lives. It is imperative that quality students be encouraged and motivated to study computers and become capable and responsible IT professionals. The education model needs to align itself with dynamically changing technology to meet the growing need for skilled IT manpower and deliver state-of-the-art, industry relevant and technology ready programs.​ Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing and technology and the term is more recognizable than ever before. The Information Technology umbrella can be quite large, covering many fields. IT professionals perform a variety of duties that range from installing applications, managing information, to designing complex applications, managing computer networks and designing and managing databases.', 'Public', '2021-06-25 05:17:29', '2022-04-04 15:22:34'),
(6, 'Technology Prof', 'technology-prof', 'fal fa-map-marked-alt', '16491073761320972368.jpg', 'As a result, most of us need to know how to use computers. Our knowledge of computers will help us to tap into challenging career opportunities and enhance the quality of our lives. It is imperative that quality students be encouraged and motivated to study computers and become capable and responsible IT professionals. The education model needs to align itself with dynamically changing technology to meet the growing need for skilled IT manpower and deliver state-of-the-art, industry relevant and technology ready programs.​ Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing and technology and the term is more recognizable than ever before. The Information Technology umbrella can be quite large, covering many fields. IT professionals perform a variety of duties that range from installing applications, managing information, to designing complex applications, managing computer networks and designing and managing databases.', 'Public', '2022-04-04 15:22:56', '2022-04-04 15:24:07'),
(7, 'Web Development', 'web-development', 'fal fa-hurricane', '16491073891860408289.jpg', 'As a result, most of us need to know how to use computers. Our knowledge of computers will help us to tap into challenging career opportunities and enhance the quality of our lives. It is imperative that quality students be encouraged and motivated to study computers and become capable and responsible IT professionals. The education model needs to align itself with dynamically changing technology to meet the growing need for skilled IT manpower and deliver state-of-the-art, industry relevant and technology ready programs.​ Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing and technology and the term is more recognizable than ever before. The Information Technology umbrella can be quite large, covering many fields. IT professionals perform a variety of duties that range from installing applications, managing information, to designing complex applications, managing computer networks and designing and managing databases.', 'Public', '2022-04-04 15:23:09', '2022-04-04 15:24:25'),
(8, 'App Development', 'app-development', 'fal fa-bezier-curve', '16491074041909444970.jpg', 'As a result, most of us need to know how to use computers. Our knowledge of computers will help us to tap into challenging career opportunities and enhance the quality of our lives. It is imperative that quality students be encouraged and motivated to study computers and become capable and responsible IT professionals. The education model needs to align itself with dynamically changing technology to meet the growing need for skilled IT manpower and deliver state-of-the-art, industry relevant and technology ready programs.​ Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing and technology and the term is more recognizable than ever before. The Information Technology umbrella can be quite large, covering many fields. IT professionals perform a variety of duties that range from installing applications, managing information, to designing complex applications, managing computer networks and designing and managing databases.', 'Public', '2022-04-04 15:23:24', '2022-04-04 15:24:35'),
(9, 'Game Design', 'game-design', 'fal fa-umbrella', '16491074201971077095.jpg', 'As a result, most of us need to know how to use computers. Our knowledge of computers will help us to tap into challenging career opportunities and enhance the quality of our lives. It is imperative that quality students be encouraged and motivated to study computers and become capable and responsible IT professionals. The education model needs to align itself with dynamically changing technology to meet the growing need for skilled IT manpower and deliver state-of-the-art, industry relevant and technology ready programs.​ Today, the term Information Technology (IT) has ballooned to encompass many aspects of computing and technology and the term is more recognizable than ever before. The Information Technology umbrella can be quite large, covering many fields. IT professionals perform a variety of duties that range from installing applications, managing information, to designing complex applications, managing computer networks and designing and managing databases.', 'Public', '2022-04-04 15:23:40', '2022-04-04 15:24:49');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `theme_version` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `base_color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `header_logo_dark` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `footer_logo` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fav_icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `breadcrumb_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `number` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contactemail` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `footer_text` text COLLATE utf8mb4_unicode_ci,
  `meta_keywords` text COLLATE utf8mb4_unicode_ci,
  `meta_description` text COLLATE utf8mb4_unicode_ci,
  `copyright_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `opening_hours` text COLLATE utf8mb4_unicode_ci,
  `footer_bg_image` text COLLATE utf8mb4_unicode_ci,
  `hero_section_video_link` text COLLATE utf8mb4_unicode_ci,
  `preloader_icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `preloader_bg_color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hero_slider_overlay_color` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hero_slider_overlay_color_opacity` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `theme_version`, `website_title`, `base_color`, `header_logo_dark`, `footer_logo`, `fav_icon`, `breadcrumb_image`, `number`, `email`, `contactemail`, `address`, `footer_text`, `meta_keywords`, `meta_description`, `copyright_text`, `opening_hours`, `footer_bg_image`, `hero_section_video_link`, `preloader_icon`, `preloader_bg_color`, `hero_slider_overlay_color`, `hero_slider_overlay_color_opacity`, `created_at`, `updated_at`) VALUES
(1, '1', 'VueBusiness - Multipurpose Business CMS VueJS (SPA)', '#FF5200', '165513169990112091.png', '16552983391633809479.png', '165513169925286017.png', '16288382061796353603.jpg', '[\"123456789\",\"587434554\"]', '[\"demomail@gmail.com\",\"newdemomain@gmail.com\"]', 'mamun@gmail.com', 'Uttara, Dhaka, Bangladesh', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', '[\"Laravel\",\"Vue\",\"SPA\",\"Business\",\"Multipurpose Business \",\"CMS\",\"VueBusiness\"]', 'VueBusiness - Multipurpose Business CMS. It gives you infinite possibilities to make your site.  If you have planned to buy a multipurpose business CMS You can choose VueBusiness as the most suitable platform.', 'Copyright 2022.  By GeniusDevs', '9:00 AM -  5:00 PM', '1628228063314748256.jpg', 'xZHWQvza4QzrSjtS.mp4', NULL, NULL, NULL, '1', NULL, '2022-06-15 07:14:40');

-- --------------------------------------------------------

--
-- Table structure for table `sliders`
--

CREATE TABLE `sliders` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `background_image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subtitle` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `button_link` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sliders`
--

INSERT INTO `sliders` (`id`, `background_image`, `image`, `subtitle`, `title`, `text`, `button_text`, `button_link`, `status`, `created_at`, `updated_at`) VALUES
(1, '16466597981385307362.jpg', '16466592431018122329.png', 'IT Business Consulting', 'Best IT Solutions Provider Agency', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremda tium totam rem aperiam eaque ipsa quae ab illo inventore veritatis', 'Learn More', '#', 'Public', '2022-03-07 07:20:43', '2022-03-07 07:49:25'),
(2, '1646660814289883775.jpg', '1646660387351522440.png', 'IT Business Consulting', 'Fast & Quality IT Service', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremda tium totam rem aperiam eaque ipsa quae ab illo inventore veritatis', 'Learn More', '#', 'Public', '2022-03-07 07:39:47', '2022-03-07 07:50:59');

-- --------------------------------------------------------

--
-- Table structure for table `social_links`
--

CREATE TABLE `social_links` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `social_links`
--

INSERT INTO `social_links` (`id`, `icon`, `url`, `created_at`, `updated_at`) VALUES
(1, 'fab fa-facebook-f', '#', '2021-09-12 20:39:34', '2021-09-12 20:39:34'),
(2, 'fab fa-twitter', '#', '2022-04-10 13:02:08', '2022-04-10 13:02:08'),
(3, 'fab fa-linkedin-in', '#', '2022-04-10 13:02:16', '2022-04-10 13:02:16'),
(4, 'fab fa-pinterest', '#', '2022-04-10 13:02:23', '2022-04-10 13:02:23'),
(5, 'fab fa-whatsapp', '#', '2022-04-10 13:02:31', '2022-04-10 13:02:31');

-- --------------------------------------------------------

--
-- Table structure for table `teams`
--

CREATE TABLE `teams` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `dagenation` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon4` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon5` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url3` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url4` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `url5` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `teams`
--

INSERT INTO `teams` (`id`, `image`, `name`, `dagenation`, `description`, `status`, `icon1`, `icon2`, `icon3`, `icon4`, `icon5`, `url1`, `url2`, `url3`, `url4`, `url5`, `created_at`, `updated_at`) VALUES
(2, '1649205691600676115.jpg', 'D. Williamson', 'Founder', 'Does any industry face a more complex audience journey and marketing sales process than B2B technology? Consider the number of people who influence a sale, the length of the decision-making cycle, the competing interests of the people who purchase, implement, manage, and use the technology. It’s a lot meaningful content here.  As a result, most of us need to know how to use computers. Our knowledge of computers will help us to tap into challenging career opportunities and enhance the quality of our lives. It is imperative that quality students be encouraged and motivated to study computers and become capable and responsible IT professionals. The education model needs to align itself with dynamically changing technology to meet the growing need for skilled IT manpower and deliver state-of-the-art, industry relevant and technology ready programs.​', 'Public', 'fab fa-facebook-f', 'fab fa-twitter', 'fab fa-behance', NULL, NULL, '#', '#', '#', NULL, NULL, '2021-08-04 01:43:51', '2022-04-05 18:41:31'),
(5, '16492058341317066518.jpg', 'Sakib Hasan', 'CEO', 'Does any industry face a more complex audience journey and marketing sales process than B2B technology? Consider the number of people who influence a sale, the length of the decision-making cycle, the competing interests of the people who purchase, implement, manage, and use the technology. It’s a lot meaningful content here.  As a result, most of us need to know how to use computers. Our knowledge of computers will help us to tap into challenging career opportunities and enhance the quality of our lives. It is imperative that quality students be encouraged and motivated to study computers and become capable and responsible IT professionals. The education model needs to align itself with dynamically changing technology to meet the growing need for skilled IT manpower and deliver state-of-the-art, industry relevant and technology ready programs.​', 'Public', 'fab fa-facebook-f', 'fab fa-twitter', 'fab fa-linkedin-in', NULL, NULL, '#', '#', '#', NULL, NULL, '2021-08-04 01:44:21', '2022-04-05 18:51:00'),
(6, '1649205884964881250.jpg', 'Maxime distinctio', 'Developer', 'Does any industry face a more complex audience journey and marketing sales process than B2B technology? Consider the number of people who influence a sale, the length of the decision-making cycle, the competing interests of the people who purchase, implement, manage, and use the technology. It’s a lot meaningful content here.  As a result, most of us need to know how to use computers. Our knowledge of computers will help us to tap into challenging career opportunities and enhance the quality of our lives. It is imperative that quality students be encouraged and motivated to study computers and become capable and responsible IT professionals. The education model needs to align itself with dynamically changing technology to meet the growing need for skilled IT manpower and deliver state-of-the-art, industry relevant and technology ready programs.​', 'Public', 'fab fa-facebook-f', 'fab fa-twitter', 'fab fa-behance', NULL, NULL, '#', '#', '#', NULL, NULL, '2021-08-11 11:02:05', '2022-04-05 18:51:25'),
(7, '1649205990952184299.jpg', 'Liza Rose', 'CTO', 'Does any industry face a more complex audience journey and marketing sales process than B2B technology? Consider the number of people who influence a sale, the length of the decision-making cycle, the competing interests of the people who purchase, implement, manage, and use the technology. It’s a lot meaningful content here.  As a result, most of us need to know how to use computers. Our knowledge of computers will help us to tap into challenging career opportunities and enhance the quality of our lives. It is imperative that quality students be encouraged and motivated to study computers and become capable and responsible IT professionals. The education model needs to align itself with dynamically changing technology to meet the growing need for skilled IT manpower and deliver state-of-the-art, industry relevant and technology ready programs.​', 'Public', 'fab fa-facebook-f', 'fab fa-twitter', 'fab fa-behance', NULL, NULL, '#', '#', '#', NULL, NULL, '2021-08-11 11:02:16', '2022-04-05 18:46:30'),
(8, '1649206123477406618.jpg', 'Rafi Khan', 'ECO', 'Does any industry face a more complex audience journey and marketing sales process than B2B technology? Consider the number of people who influence a sale, the length of the decision-making cycle, the competing interests of the people who purchase, implement, manage, and use the technology. It’s a lot meaningful content here.  As a result, most of us need to know how to use computers. Our knowledge of computers will help us to tap into challenging career opportunities and enhance the quality of our lives. It is imperative that quality students be encouraged and motivated to study computers and become capable and responsible IT professionals. The education model needs to align itself with dynamically changing technology to meet the growing need for skilled IT manpower and deliver state-of-the-art, industry relevant and technology ready programs.​', 'Public', 'fab fa-facebook-f', 'fab fa-twitter', 'fab fa-behance', NULL, NULL, '#', '#', '#', NULL, NULL, '2021-08-11 11:02:27', '2022-04-05 18:48:43'),
(9, '16492062011088109343.jpg', 'Salman Khan', 'Developer', 'Does any industry face a more complex audience journey and marketing sales process than B2B technology? Consider the number of people who influence a sale, the length of the decision-making cycle, the competing interests of the people who purchase, implement, manage, and use the technology. It’s a lot meaningful content here.  As a result, most of us need to know how to use computers. Our knowledge of computers will help us to tap into challenging career opportunities and enhance the quality of our lives. It is imperative that quality students be encouraged and motivated to study computers and become capable and responsible IT professionals. The education model needs to align itself with dynamically changing technology to meet the growing need for skilled IT manpower and deliver state-of-the-art, industry relevant and technology ready programs.​', 'Public', 'fab fa-facebook-f', 'fab fa-twitter', 'fab fa-behance', NULL, NULL, '#', '#', '#', NULL, NULL, '2021-08-11 11:02:45', '2022-04-05 18:50:01');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `position` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` text COLLATE utf8mb4_unicode_ci,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `name`, `position`, `message`, `image`, `rating`, `status`, `created_at`, `updated_at`) VALUES
(4, 'Mamun', 'CEO of Apple', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', '1649255748826942767.jpg', 5, 'Public', '2021-08-03 07:34:05', '2022-04-06 08:35:48'),
(5, 'Rony', 'CTO of Apple', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', '1649255776195916862.jpg', 5, 'Public', '2021-08-03 07:34:37', '2022-04-06 08:36:16'),
(6, 'Sova', 'Developer', 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.', '16492558071984324109.jpg', 5, 'Public', '2022-04-06 08:36:48', '2022-04-06 08:36:48');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `image`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, '16549435621395251829.jpg', 'Admin', 'admin@gmail.com', NULL, '$2y$10$JLHNYdxaoBKQWk/6g5.YSedkgoEUjBH39zjm1tJqeFxJ/iZyMNggm', 'B9kMaym05hiGxa1nJlomtRW0TFDZW1DL7isCr9Vp4eZjOUIiyOx3L7zdd24I', NULL, '2022-08-07 04:06:48');

-- --------------------------------------------------------

--
-- Table structure for table `visibilities`
--

CREATE TABLE `visibilities` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `is_messenger` tinyint(4) NOT NULL DEFAULT '1',
  `is_disqus` tinyint(4) NOT NULL DEFAULT '1',
  `is_google_analytics` tinyint(4) NOT NULL DEFAULT '1',
  `is_announcement` tinyint(4) NOT NULL DEFAULT '1',
  `is_maintainance_mode` tinyint(4) NOT NULL DEFAULT '1',
  `is_blog_share_links` tinyint(4) NOT NULL DEFAULT '1',
  `is_tawk_to` tinyint(4) NOT NULL DEFAULT '1',
  `is_recaptcha` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `is_cooki_alert` tinyint(4) NOT NULL DEFAULT '1',
  `is_about_page` tinyint(4) NOT NULL DEFAULT '1',
  `is_service_page` tinyint(4) NOT NULL DEFAULT '1',
  `is_poerfolio_page` tinyint(4) NOT NULL DEFAULT '1',
  `is_package_page` tinyint(4) NOT NULL DEFAULT '1',
  `is_team_page` tinyint(4) NOT NULL DEFAULT '1',
  `is_faq_page` tinyint(4) NOT NULL DEFAULT '1',
  `is_blog_page` tinyint(4) NOT NULL DEFAULT '1',
  `is_gallery_page` tinyint(4) NOT NULL DEFAULT '1',
  `is_career_page` tinyint(4) NOT NULL DEFAULT '1',
  `is_add_this_status` tinyint(4) NOT NULL DEFAULT '1',
  `is_contact_page` tinyint(4) NOT NULL DEFAULT '1',
  `is_quote_page` tinyint(4) NOT NULL DEFAULT '1',
  `is_about_about` tinyint(4) NOT NULL DEFAULT '1',
  `is_about_featured_work` tinyint(4) NOT NULL DEFAULT '1',
  `is_about_choose_us` tinyint(4) NOT NULL DEFAULT '1',
  `is_about_history` tinyint(4) NOT NULL DEFAULT '1',
  `is_video_hero` tinyint(4) NOT NULL DEFAULT '1',
  `is_preloader` tinyint(4) NOT NULL DEFAULT '1',
  `is_t1_slider_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t1_about_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t1_featured_work_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t1_who_we_are_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t1_service_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t1_portfolio_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t1_team_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t1_counter_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t1_testimonial_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t1_meet_us_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t1_blog_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t1_clint_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t2_slider_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t2_who_we_are_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t2_service_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t2_portfolio_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t2_team_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t2_testimonial_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t2_faq_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t2_news_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t2_client_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t3_hero_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t3_about_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t3_service_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t3_intro_video_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t3_team_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t3_counter_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t3_testimonial_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t3_faq_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t3_meet_us_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t3_news_section` tinyint(4) NOT NULL DEFAULT '1',
  `is_t3_client_section` tinyint(4) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `visibilities`
--

INSERT INTO `visibilities` (`id`, `is_messenger`, `is_disqus`, `is_google_analytics`, `is_announcement`, `is_maintainance_mode`, `is_blog_share_links`, `is_tawk_to`, `is_recaptcha`, `is_cooki_alert`, `is_about_page`, `is_service_page`, `is_poerfolio_page`, `is_package_page`, `is_team_page`, `is_faq_page`, `is_blog_page`, `is_gallery_page`, `is_career_page`, `is_add_this_status`, `is_contact_page`, `is_quote_page`, `is_about_about`, `is_about_featured_work`, `is_about_choose_us`, `is_about_history`, `is_video_hero`, `is_preloader`, `is_t1_slider_section`, `is_t1_about_section`, `is_t1_featured_work_section`, `is_t1_who_we_are_section`, `is_t1_service_section`, `is_t1_portfolio_section`, `is_t1_team_section`, `is_t1_counter_section`, `is_t1_testimonial_section`, `is_t1_meet_us_section`, `is_t1_blog_section`, `is_t1_clint_section`, `is_t2_slider_section`, `is_t2_who_we_are_section`, `is_t2_service_section`, `is_t2_portfolio_section`, `is_t2_team_section`, `is_t2_testimonial_section`, `is_t2_faq_section`, `is_t2_news_section`, `is_t2_client_section`, `is_t3_hero_section`, `is_t3_about_section`, `is_t3_service_section`, `is_t3_intro_video_section`, `is_t3_team_section`, `is_t3_counter_section`, `is_t3_testimonial_section`, `is_t3_faq_section`, `is_t3_meet_us_section`, `is_t3_news_section`, `is_t3_client_section`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, 1, 1, 1, 1, '1', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, NULL, '2022-06-10 13:10:53');

-- --------------------------------------------------------

--
-- Table structure for table `why_chooses`
--

CREATE TABLE `why_chooses` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `text` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `why_chooses`
--

INSERT INTO `why_chooses` (`id`, `title`, `icon`, `text`, `status`, `created_at`, `updated_at`) VALUES
(6, 'Beneficial Strategies', 'fal fa-server', 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan-tium totam.', 'Public', NULL, '2022-04-04 15:15:51'),
(7, 'Automated Software', 'fal fa-tools', 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan-tium totam.', 'Public', NULL, '2022-04-04 15:15:47'),
(8, 'Modify Whole System', 'fal fa-laptop-code', 'Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudan-tium totam.', 'Public', NULL, '2022-04-04 15:15:43');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bcategories`
--
ALTER TABLE `bcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `clients`
--
ALTER TABLE `clients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `counters`
--
ALTER TABLE `counters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `emailsettings`
--
ALTER TABLE `emailsettings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `faqs`
--
ALTER TABLE `faqs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `features`
--
ALTER TABLE `features`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `footer_links`
--
ALTER TABLE `footer_links`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `galleries`
--
ALTER TABLE `galleries`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `gcategories`
--
ALTER TABLE `gcategories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_applications`
--
ALTER TABLE `job_applications`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_categories`
--
ALTER TABLE `job_categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `languages`
--
ALTER TABLE `languages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `newsletters`
--
ALTER TABLE `newsletters`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `packages`
--
ALTER TABLE `packages`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `portfolios`
--
ALTER TABLE `portfolios`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `portfolio_images`
--
ALTER TABLE `portfolio_images`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `quotes`
--
ALTER TABLE `quotes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sectiontitles`
--
ALTER TABLE `sectiontitles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sliders`
--
ALTER TABLE `sliders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `social_links`
--
ALTER TABLE `social_links`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teams`
--
ALTER TABLE `teams`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `visibilities`
--
ALTER TABLE `visibilities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `why_chooses`
--
ALTER TABLE `why_chooses`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bcategories`
--
ALTER TABLE `bcategories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `clients`
--
ALTER TABLE `clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `counters`
--
ALTER TABLE `counters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `emailsettings`
--
ALTER TABLE `emailsettings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `faqs`
--
ALTER TABLE `faqs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `features`
--
ALTER TABLE `features`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `footer_links`
--
ALTER TABLE `footer_links`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `galleries`
--
ALTER TABLE `galleries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `gcategories`
--
ALTER TABLE `gcategories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `histories`
--
ALTER TABLE `histories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `job_applications`
--
ALTER TABLE `job_applications`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `job_categories`
--
ALTER TABLE `job_categories`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `languages`
--
ALTER TABLE `languages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;

--
-- AUTO_INCREMENT for table `newsletters`
--
ALTER TABLE `newsletters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `packages`
--
ALTER TABLE `packages`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `portfolios`
--
ALTER TABLE `portfolios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `portfolio_images`
--
ALTER TABLE `portfolio_images`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `quotes`
--
ALTER TABLE `quotes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `sectiontitles`
--
ALTER TABLE `sectiontitles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `sliders`
--
ALTER TABLE `sliders`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `social_links`
--
ALTER TABLE `social_links`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `teams`
--
ALTER TABLE `teams`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `visibilities`
--
ALTER TABLE `visibilities`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `why_chooses`
--
ALTER TABLE `why_chooses`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
