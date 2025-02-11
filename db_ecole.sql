-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.40 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.8.0.6908
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for db_ecole
DROP DATABASE IF EXISTS `db_ecole`;
CREATE DATABASE IF NOT EXISTS `db_ecole` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `db_ecole`;

-- Dumping structure for table db_ecole.departments
CREATE TABLE IF NOT EXISTS `departments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `histoire` text,
  `domaine` enum('sciences','literature','autre') NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_ecole.departments: ~20 rows (approximately)
INSERT INTO `departments` (`id`, `nom`, `histoire`, `domaine`, `image`) VALUES
	(1, 'Science Department', 'Focus on physical and biological sciences.', 'sciences', 'science.jpg'),
	(2, 'Literature Department', 'Focus on world literature and languages.', 'literature', 'literature.jpg'),
	(3, 'Engineering Department', 'Dedicated to innovative engineering solutions.', 'sciences', 'engineering.jpg'),
	(4, 'History Department', 'Exploring historical events and figures.', 'literature', 'history.jpg'),
	(5, 'Mathematics Department', 'Center for mathematical research.', 'sciences', 'math.jpg'),
	(6, 'Art Department', 'Fostering creativity and artistic skills.', 'literature', 'art.jpg'),
	(7, 'Biology Department', 'Study of life and living organisms.', 'sciences', 'biology.jpg'),
	(8, 'Philosophy Department', 'Critical thinking and ethical discussions.', 'literature', 'philosophy.jpg'),
	(9, 'Physics Department', 'Understanding the laws of the universe.', 'sciences', 'physics.jpg'),
	(10, 'Political Science Department', 'Analysis of political systems.', 'literature', 'politics.jpg'),
	(11, 'Chemistry Department', 'Chemical reactions and molecular structures.', 'sciences', 'chemistry.jpg'),
	(12, 'Sociology Department', 'Study of society and social behavior.', 'literature', 'sociology.jpg'),
	(13, 'Environmental Science Department', 'Focus on ecology and sustainability.', 'sciences', 'environment.jpg'),
	(14, 'Linguistics Department', 'Study of language structures.', 'literature', 'linguistics.jpg'),
	(15, 'Astronomy Department', 'Exploring the cosmos.', 'sciences', 'astronomy.jpg'),
	(16, 'Media Studies Department', 'Analysis of mass communication.', 'literature', 'media.jpg'),
	(17, 'Geology Department', 'Earth sciences and geological studies.', 'sciences', 'geology.jpg'),
	(18, 'Theater Department', 'Performing arts and drama.', 'literature', 'theater.jpg'),
	(19, 'Computer Science Department', 'Computing technologies and programming.', 'sciences', 'cs.jpg'),
	(20, 'Anthropology Department', 'Study of human societies.', 'literature', 'anthropology.jpg'),
	(21, 'Francais', 'Humaines', 'sciences', NULL);

-- Dumping structure for table db_ecole.equipment
CREATE TABLE IF NOT EXISTS `equipment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `modele` enum('nouveau','ancien','refait') NOT NULL,
  `description` text,
  `image` varchar(255) DEFAULT NULL,
  `LaboratoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `LaboratoryId` (`LaboratoryId`),
  CONSTRAINT `equipment_ibfk_1` FOREIGN KEY (`LaboratoryId`) REFERENCES `laboratories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_ecole.equipment: ~8 rows (approximately)
INSERT INTO `equipment` (`id`, `nom`, `modele`, `description`, `image`, `LaboratoryId`) VALUES
	(1, 'Microscope', 'nouveau', 'Advanced optical microscope.', 'microscope.jpg', 3),
	(2, '3D Printer', 'nouveau', 'High precision 3D printing.', '3d_printer.jpg', 4),
	(3, 'Oscilloscope', 'ancien', 'Electronic signal analyzer.', 'oscilloscope.jpg', 1),
	(4, 'Centrifuge', 'refait', 'Separation of substances.', 'centrifuge.jpg', 3),
	(5, 'Spectrometer', 'nouveau', 'Analysis of light properties.', 'spectrometer.jpg', 2),
	(6, 'Robotic Arm', 'nouveau', 'Automation in engineering.', 'robotic_arm.jpg', 8),
	(7, 'Drawing Tablet', 'nouveau', 'Digital art creation.', 'tablet.jpg', 9),
	(8, 'Server Rack', 'ancien', 'Data storage solutions.', 'server.jpg', 4),
	(11, 'Size', 'nouveau', 'Easy Line', NULL, NULL);

-- Dumping structure for table db_ecole.laboratories
CREATE TABLE IF NOT EXISTS `laboratories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `salle` varchar(255) DEFAULT NULL,
  `information` text,
  `image` varchar(255) DEFAULT NULL,
  `DepartmentId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `DepartmentId` (`DepartmentId`),
  CONSTRAINT `laboratories_ibfk_1` FOREIGN KEY (`DepartmentId`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_ecole.laboratories: ~10 rows (approximately)
INSERT INTO `laboratories` (`id`, `nom`, `salle`, `information`, `image`, `DepartmentId`) VALUES
	(1, 'Physics Lab', '101', 'Equipped with advanced physics instruments.', 'physics_lab.jpg', 9),
	(2, 'Chemistry Lab', '202', 'Modern chemistry experiments setup.', 'chemistry_lab.jpg', 11),
	(3, 'Biology Lab', '303', 'Focus on biological research.', 'biology_lab.jpg', 7),
	(4, 'Computer Lab', '404', 'State-of-the-art computer facilities.', 'computer_lab.jpg', 19),
	(5, 'Mathematics Lab', '505', 'Dedicated space for math projects.', 'math_lab.jpg', 5),
	(6, 'Literature Lab', '606', 'Study of literary works.', 'literature_lab.jpg', 2),
	(7, 'History Lab', '707', 'Research historical documents.', 'history_lab.jpg', 4),
	(8, 'Engineering Lab', '808', 'Innovative engineering projects.', 'engineering_lab.jpg', 3),
	(9, 'Art Studio', '909', 'Creative art activities.', 'art_studio.jpg', 6),
	(10, 'Environmental Lab', '1010', 'Research on environmental science.', 'environment_lab.jpg', 13),
	(11, 'TAGNE', 'MICHEL', 'GATINEAU', NULL, 1);

-- Dumping structure for table db_ecole.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` varchar(255) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_ecole.roles: ~18 rows (approximately)
INSERT INTO `roles` (`id`, `titre`, `description`) VALUES
	(1, 'Administrator', 'Manages system configurations and permissions.'),
	(2, 'Student', 'Enrolled to learn and complete courses.'),
	(3, 'Professor', 'Teaches and evaluates students.'),
	(4, 'Researcher', 'Conducts academic or scientific research.'),
	(5, 'Lab Assistant', 'Supports laboratory activities.'),
	(6, 'Technician', 'Handles technical equipment and support.'),
	(7, 'Advisor', 'Provides academic guidance.'),
	(8, 'Librarian', 'Manages library resources.'),
	(9, 'Coordinator', 'Oversees department operations.'),
	(10, 'IT Support', 'Manages IT infrastructure.'),
	(11, 'Accountant', 'Manages financial records.'),
	(12, 'Clerk', 'Handles administrative tasks.'),
	(16, 'Event Planner', 'Organizes institutional events.'),
	(17, 'Counselor', 'Provides psychological support.'),
	(18, 'Director', 'Heads a department.'),
	(21, 'Salutaire', 'Salutaire');

-- Dumping structure for table db_ecole.role_user
CREATE TABLE IF NOT EXISTS `role_user` (
  `RoleId` int NOT NULL,
  `UserId` int NOT NULL,
  PRIMARY KEY (`RoleId`,`UserId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `role_user_ibfk_1` FOREIGN KEY (`RoleId`) REFERENCES `roles` (`id`),
  CONSTRAINT `role_user_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_ecole.role_user: ~20 rows (approximately)
INSERT INTO `role_user` (`RoleId`, `UserId`) VALUES
	(1, 1),
	(10, 1),
	(1, 2),
	(2, 2),
	(2, 3),
	(3, 3),
	(3, 4),
	(4, 4),
	(4, 5),
	(5, 5),
	(5, 6),
	(6, 6),
	(6, 7),
	(7, 7),
	(7, 8),
	(8, 8),
	(8, 9),
	(9, 9),
	(9, 10),
	(10, 10);

-- Dumping structure for table db_ecole.subjects
CREATE TABLE IF NOT EXISTS `subjects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `description` text,
  `statut` enum('requis','optionnel') DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `DepartmentId` int DEFAULT NULL,
  `LaboratoryId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  KEY `DepartmentId` (`DepartmentId`),
  KEY `LaboratoryId` (`LaboratoryId`),
  CONSTRAINT `subjects_ibfk_1` FOREIGN KEY (`DepartmentId`) REFERENCES `departments` (`id`),
  CONSTRAINT `subjects_ibfk_2` FOREIGN KEY (`LaboratoryId`) REFERENCES `laboratories` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_ecole.subjects: ~10 rows (approximately)
INSERT INTO `subjects` (`id`, `nom`, `code`, `description`, `statut`, `image`, `DepartmentId`, `LaboratoryId`) VALUES
	(1, 'Physics', 'PHY101', 'Introduction to basic physics concepts.', 'requis', 'physics.jpg', 9, 1),
	(2, 'Chemistry', 'CHE101', 'Fundamentals of chemical reactions.', 'requis', 'chemistry.jpg', 11, 2),
	(3, 'Biology', 'BIO101', 'Study of living organisms.', 'requis', 'biology.jpg', 7, 3),
	(4, 'Computer Science', 'CS101', 'Basics of programming and computing.', 'requis', 'cs.jpg', 19, 4),
	(5, 'Mathematics', 'MTH101', 'Introduction to algebra and calculus.', 'requis', 'math.jpg', 5, 5),
	(6, 'Literature', 'LIT101', 'Analysis of literary texts.', 'optionnel', 'literature.jpg', 2, 6),
	(7, 'History', 'HIS101', 'Study of ancient civilizations.', 'optionnel', 'history.jpg', 4, 7),
	(8, 'Engineering', 'ENG101', 'Principles of mechanical engineering.', 'requis', 'engineering.jpg', 3, 8),
	(9, 'Art', 'ART101', 'Fundamentals of visual arts.', 'optionnel', 'art.jpg', 6, 9),
	(10, 'Environmental Science', 'ENV101', 'Basics of ecology and sustainability.', 'requis', 'environment.jpg', 13, 10),
	(11, 'Sauna Bios', 'SOB110', 'Sauna Bios', 'requis', NULL, 1, 1);

-- Dumping structure for table db_ecole.subject_user
CREATE TABLE IF NOT EXISTS `subject_user` (
  `SubjectId` int NOT NULL,
  `UserId` int NOT NULL,
  `createdAt` timestamp NULL DEFAULT (now()),
  `updatedAt` timestamp NULL DEFAULT (now()),
  PRIMARY KEY (`SubjectId`,`UserId`),
  KEY `UserId` (`UserId`),
  CONSTRAINT `subject_user_ibfk_1` FOREIGN KEY (`SubjectId`) REFERENCES `subjects` (`id`),
  CONSTRAINT `subject_user_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_ecole.subject_user: ~20 rows (approximately)
INSERT INTO `subject_user` (`SubjectId`, `UserId`, `createdAt`, `updatedAt`) VALUES
	(1, 1, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(1, 2, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(2, 2, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(2, 3, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(3, 3, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(3, 4, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(4, 4, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(4, 5, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(5, 5, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(5, 6, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(6, 6, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(6, 7, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(7, 7, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(7, 8, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(8, 8, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(8, 9, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(9, 9, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(9, 10, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(10, 1, '2025-02-11 00:21:52', '2025-02-11 00:22:35'),
	(10, 10, '2025-02-11 00:21:52', '2025-02-11 00:22:35');

-- Dumping structure for table db_ecole.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `mot_de_passe` varchar(255) NOT NULL,
  `naissance` date DEFAULT NULL,
  `biographie` text,
  `conduite` enum('Excellente','Bonne','Passable') DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `DepartmentId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `DepartmentId` (`DepartmentId`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`DepartmentId`) REFERENCES `departments` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table db_ecole.users: ~10 rows (approximately)
INSERT INTO `users` (`id`, `nom`, `prenom`, `email`, `mot_de_passe`, `naissance`, `biographie`, `conduite`, `photo`, `DepartmentId`) VALUES
	(1, 'Smith', 'John', 'john.smith@example.com', 'password123', '1990-05-14', 'Enthusiastic learner.', 'Excellente', 'john.jpg', 1),
	(2, 'Doe', 'Jane', 'jane.doe@example.com', 'password456', '1992-07-19', 'Loves teaching history.', 'Bonne', 'jane.jpg', 2),
	(3, 'Brown', 'Charlie', 'charlie.brown@example.com', 'charliepass', '1988-03-23', 'Passionate about chemistry.', 'Passable', 'charlie.jpg', 3),
	(4, 'Taylor', 'Emily', 'emily.taylor@example.com', 'emilypass', '1995-08-12', 'Interested in literature.', 'Bonne', 'emily.jpg', 4),
	(5, 'Wilson', 'David', 'david.wilson@example.com', 'davidpass', '1985-11-29', 'Computer science enthusiast.', 'Excellente', 'david.jpg', 5),
	(6, 'Johnson', 'Olivia', 'olivia.johnson@example.com', 'oliviapass', '1993-04-17', 'Enjoys mathematical puzzles.', 'Bonne', 'olivia.jpg', 6),
	(7, 'Lee', 'Michael', 'michael.lee@example.com', 'michaelpass', '1991-09-05', 'Biology researcher.', 'Passable', 'michael.jpg', 7),
	(8, 'Clark', 'Sophia', 'sophia.clark@example.com', 'sophiapass', '1994-01-22', 'Sociology major.', 'Bonne', 'sophia.jpg', 8),
	(9, 'Walker', 'James', 'james.walker@example.com', 'jamespass', '1996-06-13', 'Aspiring physicist.', 'Excellente', 'james.jpg', 9),
	(10, 'Hall', 'Emma', 'emma.hall@example.com', 'emmapass', '1989-12-30', 'Art and design lover.', 'Bonne', 'emma.jpg', 10),
	(11, 'Fodouop', 'Jahswant', 'jahswant@live.com', '$2a$10$dqoPnu9VWbcUVS6lcE96H.t8lulcEw7Y/LXdx5VNE7giqLO5LEXyC', '2025-02-12', NULL, NULL, NULL, 3);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
