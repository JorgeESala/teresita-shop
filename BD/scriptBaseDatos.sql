-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema teresita
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `teresita` ;

-- -----------------------------------------------------
-- Schema teresita
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `teresita` DEFAULT CHARACTER SET utf8mb3 ;
USE `teresita` ;

-- -----------------------------------------------------
-- Table `teresita`.`categorias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `teresita`.`categorias` ;

CREATE TABLE IF NOT EXISTS `teresita`.`categorias` (
  `idCategorias` INT NOT NULL AUTO_INCREMENT,
  `nombreCateg` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idCategorias`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teresita`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `teresita`.`usuario` ;

CREATE TABLE IF NOT EXISTS `teresita`.`usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(40) NOT NULL,
  `numeroTel` VARCHAR(14) NOT NULL,
  `correoElect` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(45) NOT NULL,
  `tipoUsuario` VARCHAR(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `correoElect_UNIQUE` (`correoElect` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teresita`.`compras`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `teresita`.`compras` ;

CREATE TABLE IF NOT EXISTS `teresita`.`compras` (
  `idCompras` INT NOT NULL AUTO_INCREMENT,
  `direccion` VARCHAR(250) NOT NULL,
  `fechaIngreso` DATE NOT NULL,
  `cantidadProduc` INT NOT NULL,
  `total` DOUBLE NOT NULL,
  `Usuario_id` INT NOT NULL,
  PRIMARY KEY (`idCompras`),
  INDEX `fk_Compras_Usuario_idx` (`Usuario_id` ASC) VISIBLE,
  CONSTRAINT `fk_Compras_Usuario`
    FOREIGN KEY (`Usuario_id`)
    REFERENCES `teresita`.`usuario` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teresita`.`productos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `teresita`.`productos` ;

CREATE TABLE IF NOT EXISTS `teresita`.`productos` (
  `idProductos` INT NOT NULL AUTO_INCREMENT,
  `nombreProduc` VARCHAR(50) NOT NULL,
  `descripcionProduct` VARCHAR(200) NOT NULL,
  `precio` DOUBLE NOT NULL,
  `imagen` LONGTEXT NOT NULL,
  `stock` INT NOT NULL,
  PRIMARY KEY (`idProductos`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teresita`.`compras_has_productos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `teresita`.`compras_has_productos` ;

CREATE TABLE IF NOT EXISTS `teresita`.`compras_has_productos` (
  `Compras_idCompras` INT NOT NULL,
  `Productos_idProductos` INT NOT NULL,
  `cantidad` INT NOT NULL,
  PRIMARY KEY (`Compras_idCompras`, `Productos_idProductos`),
  INDEX `fk_Compras_has_Productos_Productos1_idx` (`Productos_idProductos` ASC) VISIBLE,
  INDEX `fk_Compras_has_Productos_Compras1_idx` (`Compras_idCompras` ASC) VISIBLE,
  CONSTRAINT `fk_Compras_has_Productos_Compras1`
    FOREIGN KEY (`Compras_idCompras`)
    REFERENCES `teresita`.`compras` (`idCompras`),
  CONSTRAINT `fk_Compras_has_Productos_Productos1`
    FOREIGN KEY (`Productos_idProductos`)
    REFERENCES `teresita`.`productos` (`idProductos`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `teresita`.`productos_has_categorias`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `teresita`.`productos_has_categorias` ;

CREATE TABLE IF NOT EXISTS `teresita`.`productos_has_categorias` (
  `Productos_idProductos` INT NOT NULL,
  `Categorias_idCategorias` INT NOT NULL,
  PRIMARY KEY (`Productos_idProductos`, `Categorias_idCategorias`),
  INDEX `fk_Productos_has_Categorias_Categorias1_idx` (`Categorias_idCategorias` ASC) VISIBLE,
  INDEX `fk_Productos_has_Categorias_Productos1_idx` (`Productos_idProductos` ASC) VISIBLE,
  CONSTRAINT `fk_Productos_has_Categorias_Categorias1`
    FOREIGN KEY (`Categorias_idCategorias`)
    REFERENCES `teresita`.`categorias` (`idCategorias`),
  CONSTRAINT `fk_Productos_has_Categorias_Productos1`
    FOREIGN KEY (`Productos_idProductos`)
    REFERENCES `teresita`.`productos` (`idProductos`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
