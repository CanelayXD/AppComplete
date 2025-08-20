USE amodrinks;

CREATE TABLE users(
	id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(180) NOT NULL,
    email VARCHAR(180) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP(0) NOT NULL,
    updated_at TIMESTAMP(0) NOT NULL
);

SELECT * FROM amodrinks.users;

CREATE TABLE preguntasChill(
    pregunta VARCHAR(500)
);

Insert into preguntasChill Values ("Si pudieras cenar con cualquier personaje de película, ¿quién sería y qué le preguntarías?");

Insert into preguntasChill Values ("¿Cuál es el recuerdo más divertido de tu infancia?");

Insert into preguntasChill Values ("Imagina que puedes viajar a cualquier lugar del mundo ahora mismo, ¿dónde iríamos y qué haríamos allí?");

Insert into preguntasChill Values ("¿Qué habilidad o talento desearías tener y cómo lo usarías?");

Insert into preguntasChill Values ("Si solo pudieras comer un tipo de comida durante un mes, ¿cuál sería?");

Create Table preguntasCitas (
pregunta varchar(1000)
);

Insert into preguntasCitas Values ("Si tuvieras que elegir un lugar para una cita de picnic en nuestra ciudad, ¿dónde sería?");

Insert into preguntasCitas Values ("¿Cuál es tu restaurante favorito para una ocasión especial y por qué?");

Insert into preguntasCitas Values ("¿Qué actividad al aire libre no hemos hecho juntos que te gustaría probar en nuestra próxima cita?");

Insert into preguntasCitas Values ("¿Hay algún festival local al que te gustaría ir juntos? 
Si pudiéramos tener una cita en cualquier lugar del mundo, ¿dónde iríamos? 
");

Insert into preguntasCitas Values ("¿Qué experiencia culinaria no hemos probado juntos y te gustaría explorar?");


Create Table preguntasHot (
pregunta varchar(1000)
);

Insert into preguntasHot Values ("Dime una fantasía que nunca hayas compartido conmigo.");

Insert into preguntasHot Values ("¿Qué tipo de ropa te gustaría que llevara más a menudo?");

Insert into preguntasHot Values ("¿Cuál es tu parte favorita de mi cuerpo y por qué?");

Insert into preguntasHot Values ("¿Qué es lo más atrevido que te gustaría hacer en público?");

Insert into preguntasHot Values ("¿Qué palabra clave te gustaría que usáramos solo nosotros dos y que tenga un significado especial?");