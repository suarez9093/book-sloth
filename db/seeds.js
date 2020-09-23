CREATE TABLE `USERS` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `message` varchar(255) NOT NULL,
    `first_name` varchar(255) NOT NULL,
    `last_name` varchar(255) NOT NULL,
    `email` varchar(50) NOT NULL,
    `photo` varchar() NOT NULL,
    PRIMARY KEY (`id`)
  ); 
  
  CREATE TABLE Message(
  `id` int NOT NULL AUTO_INCREMENT,
  `first_Name` varchar(255) NOT NULL,
  `last_Name` varchar(255) NOT NULL,
  `message` varchar(255),
  `email` varchar(255),
  `UserID` int,
  PRIMARY KEY(id),
  FOREIGN KEY (UserID) REFERENCES Users(id)
);


CREATE TABLE Replies(
`id` int NOT NULL AUTO_INCREMENT,
`first_name` varchar(255) NOT NULL,
`last_name` varchar(255) NOT NULL,
`message` varchar(255),
`email` varchar(255),
`photo` varchar(255),
`MessageID` int,
PRIMARY KEY(id),
FOREIGN KEY(MessageID) REFERENCES Message(id)
);

  INSERT INTO USERS VALUES 
  (1,"I just finished reading The Martian and I loved the ending! What do you think?",'Carly','Diaz',"carly@email.com",'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
  (2,"I read a book and now I'm so smart!",'Lisa','Brooks',"lisa@email.com",'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80')
  

  INSERT INTO USERS VALUES 