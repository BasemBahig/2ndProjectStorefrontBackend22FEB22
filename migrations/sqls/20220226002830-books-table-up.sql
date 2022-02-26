/* Replace with your SQL commands */
/*Create Table Products*/
Create table clients(
    id serial primary key,
    firstName varchar (50) not null,
    SecondName varchar (50),
    thirdName varchar (50),
    lastName varchar(50) not null,
    email varchar(50) unique,
    userName varchar(50) not null,
    dateOFJoin date

);