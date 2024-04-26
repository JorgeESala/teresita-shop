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
  `idCategorias` int NOT NULL AUTO_INCREMENT,
  `nombreCateg` varchar(45) NOT NULL,
  PRIMARY KEY (`idCategorias`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras`
--

DROP TABLE IF EXISTS `compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras` (
  `idCompras` int NOT NULL AUTO_INCREMENT,
  `direccion` varchar(250) NOT NULL,
  `fechaIngreso` date NOT NULL,
  `cantidadProduc` int NOT NULL,
  `total` double NOT NULL,
  `Usuario_id` int NOT NULL,
  PRIMARY KEY (`idCompras`),
  KEY `fk_Compras_Usuario_idx` (`Usuario_id`),
  CONSTRAINT `fk_Compras_Usuario` FOREIGN KEY (`Usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras`
--

LOCK TABLES `compras` WRITE;
/*!40000 ALTER TABLE `compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compras_has_productos`
--

DROP TABLE IF EXISTS `compras_has_productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `compras_has_productos` (
  `Compras_idCompras` int NOT NULL,
  `Productos_idProductos` int NOT NULL,
  `cantidad` int NOT NULL,
  PRIMARY KEY (`Compras_idCompras`,`Productos_idProductos`),
  KEY `fk_Compras_has_Productos_Productos1_idx` (`Productos_idProductos`),
  KEY `fk_Compras_has_Productos_Compras1_idx` (`Compras_idCompras`),
  CONSTRAINT `fk_Compras_has_Productos_Compras1` FOREIGN KEY (`Compras_idCompras`) REFERENCES `compras` (`idCompras`),
  CONSTRAINT `fk_Compras_has_Productos_Productos1` FOREIGN KEY (`Productos_idProductos`) REFERENCES `productos` (`idProductos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compras_has_productos`
--

LOCK TABLES `compras_has_productos` WRITE;
/*!40000 ALTER TABLE `compras_has_productos` DISABLE KEYS */;
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
  CONSTRAINT `fk_direccion_de_envio_usuario1` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
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
-- Table structure for table `metodopago`
--

DROP TABLE IF EXISTS `metodopago`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `metodopago` (
  `numTarjeta` varchar(16) NOT NULL,
  `fecha` varchar(5) DEFAULT NULL,
  `usuario_id` int NOT NULL,
  PRIMARY KEY (`numTarjeta`,`usuario_id`),
  KEY `fk_metodoPago_usuario_idx` (`usuario_id`),
  CONSTRAINT `fk_metodoPago_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `metodopago`
--

LOCK TABLES `metodopago` WRITE;
/*!40000 ALTER TABLE `metodopago` DISABLE KEYS */;
/*!40000 ALTER TABLE `metodopago` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `idProductos` int NOT NULL AUTO_INCREMENT,
  `nombreProduc` varchar(50) NOT NULL,
  `descripcionProduct` varchar(200) NOT NULL,
  `precio` double NOT NULL,
  `imagen` longtext NOT NULL,
  `stock` int NOT NULL,
  PRIMARY KEY (`idProductos`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos_has_categorias`
--

DROP TABLE IF EXISTS `productos_has_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos_has_categorias` (
  `Productos_idProductos` int NOT NULL,
  `Categorias_idCategorias` int NOT NULL,
  PRIMARY KEY (`Productos_idProductos`,`Categorias_idCategorias`),
  KEY `fk_Productos_has_Categorias_Categorias1_idx` (`Categorias_idCategorias`),
  KEY `fk_Productos_has_Categorias_Productos1_idx` (`Productos_idProductos`),
  CONSTRAINT `fk_Productos_has_Categorias_Categorias1` FOREIGN KEY (`Categorias_idCategorias`) REFERENCES `categorias` (`idCategorias`),
  CONSTRAINT `fk_Productos_has_Categorias_Productos1` FOREIGN KEY (`Productos_idProductos`) REFERENCES `productos` (`idProductos`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos_has_categorias`
--

LOCK TABLES `productos_has_categorias` WRITE;
/*!40000 ALTER TABLE `productos_has_categorias` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos_has_categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) NOT NULL,
  `numeroTel` varchar(14) NOT NULL,
  `correoElect` varchar(45) NOT NULL,
  `contraseña` varchar(45) NOT NULL,
  `tipoUsuario` varchar(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `correoElect_UNIQUE` (`correoElect`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-24 18:39:28
