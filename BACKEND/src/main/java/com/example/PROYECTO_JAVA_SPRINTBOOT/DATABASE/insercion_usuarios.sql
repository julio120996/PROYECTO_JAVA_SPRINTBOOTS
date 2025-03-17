USE NekoSound;

 SELECT * from nekosound.usuarios;
 SELECT * FROM nekosound.suscripciones;

INSERT INTO usuarios (nombre, apellido, email, password, foto_perfil, id_autenticacion_externa)
VALUES
('Jose', 'Pérez Terrez', 'juanperezterrez23@gmail.com', 'password123', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742095164/8.6_xlsmjd.jpg', NULL),
('Tatiana', 'Gómez Rivera', 'tatianagomez33@gmail.com', 'securepass456', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742095224/7.4_cihiap.jpg',  NULL),
('Carlos', 'Ramírez Sanchez', 'carlosramirezs33@gmail.com', 'hash789', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742095077/2.1_njxt8n.jpg', NULL),
('Luz María ', 'López Qevedo', 'lucesitalopez7@gmail.com', 'clave321','https://res.cloudinary.com/dcolydznr/image/upload/v1742095060/3.3_va38gx.jpg', NULL),
('Andrea ', 'Martínez', 'andreamartinez45@gmail.com', 'andrea1234', 'https://res.cloudinary.com/dcolydznr/image/upload/v1742095117/9.2_fsiyo0.jpg', NULL);

INSERT INTO suscripciones (id_usuario, plan, fecha_inicio, fecha_fin)
VALUES
(1, TRUE, '2025-03-01 12:00:00', '2025-04-20 12:00:00'),
(2, FALSE, '2025-01-01 00:00:00', '2025-01-01 00:00:00'),  -- Fecha predeterminada
(3, TRUE, '2025-02-20 10:00:00', '2025-03-23 10:00:00'),
(4, TRUE, '2025-03-10 08:00:00', '2025-04-25 08:00:00'),
(5, FALSE, '2025-01-01 00:00:00', '2025-01-01 00:00:00');  -- Fecha predeterminada
  -- Valor predeterminado en lugar de NULL


