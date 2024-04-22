/*
ALTER TABLE teresita.usuario AUTO_INCREMENT = 1; -- Sentencia para restablecer a 1 el id

delete from compras where idCompras != 1; -- Sentencia para borrar el registro total de la tabla

NOTA: Para poder reiniciar el id de una tabla se debe primero borrar los datos con delete y luego reiniciar con alter
*/
INSERT INTO `teresita`.`usuario`
(`nombre`,
`numeroTel`,
`correoElect`,
`contraseña`,
`tipoUsuario`)
VALUES
("Juan Perez",
"5487251022",
"example1@hotmail.com",
"1234",
"1"),
("Jorge Buen Rostro",
"5578120368",
"example2@hotmail.com",
"1234",
"1"),
("Serch de la Parra",
"5519874502",
"example3@hotmail.com",
"1234",
"1"),
("Pedro Mendoza",
"5423684702",
"exampleadmin1@hotmail.com",
"admin",
"2"),
("Panfilo Bonilla",
"5689874512",
"exampleadmin2@hotmail.com",
"admin",
"2");

select * from usuario;

