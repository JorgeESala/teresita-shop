-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: teresita
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categorias` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Dragon Ball'),(2,'Naruto'),(3,'One Piece'),(4,'Demon Slayer'),(5,'Sombrero');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `id` int NOT NULL AUTO_INCREMENT,
  `direccion` varchar(250) NOT NULL,
  `fecha` date NOT NULL,
  `cantidad` int NOT NULL,
  `total` double NOT NULL,
  `Usuario_id` int NOT NULL,
  PRIMARY KEY (`id`,`Usuario_id`),
  KEY `fk_Compras_Usuario_idx` (`Usuario_id`),
  CONSTRAINT `fk_Compras_Usuario` FOREIGN KEY (`Usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
INSERT INTO `compras` VALUES (1,'calle siempre viva 1','2024-04-14',38,728954.59,1),(2,'calle siempre viva 2','2024-06-27',5,450,2),(3,'calle siempre viva 3','2024-07-09',2,240,3),(4,'calle siempre viva 4','2024-08-16',1,100,4),(5,'calle siempre viva 5','2024-09-12',3,180,4);
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras_has_productos`
--

DROP TABLE IF EXISTS `compras_has_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras_has_productos` (
  `compra_id` int NOT NULL,
  `producto_id` int NOT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`compra_id`,`producto_id`),
  KEY `fk_Compras_has_Productos_Productos1_idx` (`producto_id`),
  KEY `fk_Compras_has_Productos_Compras1_idx` (`compra_id`),
  CONSTRAINT `fk_Compras_has_Productos_Compras1` FOREIGN KEY (`compra_id`) REFERENCES `compras` (`id`),
  CONSTRAINT `fk_Compras_has_Productos_Productos1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras_has_productos`
--

LOCK TABLES `compras_has_productos` WRITE;
/*!40000 ALTER TABLE `compras_has_productos` DISABLE KEYS */;
INSERT INTO `compras_has_productos` VALUES (1,5,38),(2,3,5),(3,2,2),(4,4,1),(5,1,3);
/*!40000 ALTER TABLE `compras_has_productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direccion_de_envio`
--

DROP TABLE IF EXISTS `direccion_de_envio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `direccion_de_envio` (
  `calle` varchar(100) DEFAULT NULL,
  `numero` int NOT NULL,
  `colonia` varchar(45) NOT NULL,
  `ciudad` varchar(45) NOT NULL,
  `estado` varchar(45) NOT NULL,
  `codigo_postal` varchar(6) NOT NULL,
  `num_telefono` varchar(45) DEFAULT NULL,
  `usuario_id` int NOT NULL,
  PRIMARY KEY (`usuario_id`),
  CONSTRAINT `fk_direccion_de_envio_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direccion_de_envio`
--

LOCK TABLES `direccion_de_envio` WRITE;
/*!40000 ALTER TABLE `direccion_de_envio` DISABLE KEYS */;
/*!40000 ALTER TABLE `direccion_de_envio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `metodos_pago`
--

DROP TABLE IF EXISTS `metodos_pago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `metodos_pago` (
  `numero_tarjeta` varchar(16) NOT NULL,
  `fecha` varchar(5) DEFAULT NULL,
  `usuario_id` int NOT NULL,
  PRIMARY KEY (`numero_tarjeta`,`usuario_id`),
  KEY `fk_metodoPago_usuario_idx` (`usuario_id`),
  CONSTRAINT `fk_metodoPago_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metodos_pago`
--

LOCK TABLES `metodos_pago` WRITE;
/*!40000 ALTER TABLE `metodos_pago` DISABLE KEYS */;
/*!40000 ALTER TABLE `metodos_pago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `precio` double NOT NULL,
  `imagen` longtext NOT NULL,
  `stock` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'Gorry Luffy','Gorro para adulto',100,'https://raw.githubusercontent.com/JorgeESala/teresita-shop/main/src/assets/img/Gorro%20Luffy.jpg',3),(2,'Monedero de Naruto','Monedero que usa naruto en el ánime',100,'https://raw.githubusercontent.com/JorgeESala/teresita-shop/main/src/assets/img/Monedero%20naruto.jpg',3),(3,'Figura pikachu gengar','Figura de pikachu disfrazado de gengar con caja',270,'https://raw.githubusercontent.com/JorgeESala/teresita-shop/main/src/assets/img/Pikachu%20gengar.jpg',1),(4,'Playera pokemon','Playera neón talla chica',200,'https://raw.githubusercontent.com/JorgeESala/teresita-shop/main/src/assets/img/Playera%20pokemon.jpg',1),(5,'Rosa amarilla armable','Rosa armable tipo lego',120,'https://raw.githubusercontent.com/JorgeESala/teresita-shop/main/src/assets/img/Rosa%20amarilla%20armable.jpg',3);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos_has_categorias`
--

DROP TABLE IF EXISTS `productos_has_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos_has_categorias` (
  `producto_id` int NOT NULL,
  `categoria_id` int NOT NULL,
  PRIMARY KEY (`producto_id`,`categoria_id`),
  KEY `fk_Productos_has_Categorias_Categorias1_idx` (`categoria_id`),
  KEY `fk_Productos_has_Categorias_Productos1_idx` (`producto_id`),
  CONSTRAINT `fk_Productos_has_Categorias_Categorias1` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`),
  CONSTRAINT `fk_Productos_has_Categorias_Productos1` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_has_categorias`
--

LOCK TABLES `productos_has_categorias` WRITE;
/*!40000 ALTER TABLE `productos_has_categorias` DISABLE KEYS */;
INSERT INTO `productos_has_categorias` VALUES (3,1),(2,2),(4,2),(1,3),(5,4),(1,5);
/*!40000 ALTER TABLE `productos_has_categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) NOT NULL,
  `numero` varchar(14) NOT NULL,
  `correo` varchar(45) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  `tipo_usuario` varchar(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `correoElect_UNIQUE` (`correo`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'Juan Perez','5487251022','example1@hotmail.com','1234','1'),(2,'Jorge Buen Rostro','5578120368','example2@hotmail.com','1234','1'),(3,'Serch de la Parra','5519874502','example3@hotmail.com','1234','1'),(4,'Pedro Mendoza','5423684702','exampleadmin1@hotmail.com','admin','2'),(5,'Panfilo Bonilla','5689874512','exampleadmin2@hotmail.com','admin','2');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-27 12:51:00
