const { INTEGER } = require("sequelize/types");

CREATE TABLE `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `message` varchar(255) NOT NULL,
    `first_name` varchar(255) NOT NULL,
    `last_name` varchar(255) NOT NULL,
    `email` varchar(50) NOT NULL,
    `photo` varchar() NOT NULL,
    PRIMARY KEY (`id`)
  ); 
  
  // replies needs to map to users. Need to use a foreign key I believe. 
  CREATE TABLE `replies`(
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `message` varchar(255) NOT NULL,
    `first_name` varchar(255) NOT NULL,
    `last_name` varchar(255) NOT NULL,
    `email` varchar(50) NOT NULL,
    `photo` varchar() NOT NULL,
    `message_id` INTEGER REFERENCES `users`
    PRIMARY KEY (`id`)
  )
  
  INSERT INTO users VALUES 
  (1,"I just finished reading The Martian and I loved the ending! What do you think?",'Carly','Diaz',"carly@email.com",'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80')
  (2,"I read a book and now I'm so smart!",'Lisa','Brooks',"lisa@email.com",'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80')
  