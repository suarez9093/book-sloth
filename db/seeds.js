CREATE TABLE `users` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `message` varchar(255) NOT NULL,
    `first_name` varchar(255) NOT NULL,
    `last_name` varchar(255) NOT NULL,
    `email` varchar(50) NOT NULL,
    `photo` varchar() NOT NULL,
    // `replies` int(11) DEFAULT '0', => This one I am not too sure of. Might be some sort of join
    PRIMARY KEY (`id`)
  ); 
  
  
  
  INSERT INTO users VALUES 
  (1,"I just finished reading The Martian and I loved the ending! What do you think?",'Carlos','Diaz',"carlos@email.com",'https://booksloth-profilejpg')
  