USE BookSloth;
CREATE TABLE `User` (
    `user_id` MEDIUMINT NOT NULL AUTO_INCREMENT,
    `first_name` varchar(255) NOT NULL,
    `last_name` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `photo` varchar(255) NOT NULL,
    `message` varchar(255) NOT NULL,
    `replies` JSON DEFAULT NULL,
     PRIMARY KEY (user_id)
    );

  INSERT INTO USER VALUES (1,'Carly','Diaz',"carly@email.com",'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', "I think Maven wasn't very likable in Red Queen.",'[{ "message": "Why? I think his actions were very important for his character development. Without it he would never change his original point of view.",
        "first_name": "Maureen",
        "last_name": "Haun",
        "email": "maureen@booksloth.com",
        "photo": "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}]');
  INSERT INTO USER VALUES (2,'Lisa','Brooks',"lisa@email.com",'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80',"I just finished reading The Martian and I loved the ending! What do you think?", "[]");
  INSERT INTO USER VALUES (3,'Juan','Hernandez',"juan@email.com",'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',"Lady Midnight was amazing and super entertaining! I loved the characters so much!", "[]");
  INSERT INTO USER VALUES (4,'James','Grayson',"james@email.com",'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',"I just finished reading The Martian and I loved the ending! What do you think?",'[{ "message": "I loved it!.",
        "first_name": "Jack",
        "last_name": "Green",
        "email": "jack@booksloth.com",
        "photo": "https://images.unsplash.com/photo-1595929287357-74f1d41d5a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}]');

     
-- CREATE TABLE `User` (
--     `user_id` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     `first_name` varchar(255) NOT NULL,
--     `last_name` varchar(255) NOT NULL,
--     `email` varchar(255) NOT NULL,
--     `photo` varchar(255) NOT NULL
--     );
  
--   CREATE TABLE Message(
--   `message_id` int AUTO_INCREMENT PRIMARY KEY,
--   `message_user_id` int,
--   `message` TEXT,
--   FOREIGN KEY (message_user_id) REFERENCES USER (user_id)
-- );
--   CREATE TABLE Reply(
--   `reply_id` int AUTO_INCREMENT PRIMARY KEY,
--   `reply_message_id` int,
--   `reply_user_id` int,
--   `reply` TEXT,
--   FOREIGN KEY (reply_message_id) REFERENCES Message (message_id),
--   FOREIGN KEY (user_id) REFERENCES User (user_id)
-- );

--   CREATE TABLE Like(
--   `like_id` int AUTO_INCREMENT PRIMARY KEY,
--   `message_id`, REFERENCES Message(message_id)
--   `user_id` int
--   `like` int,
--   FOREIGN KEY (message_id) REFERENCES Message(message_id)
--   FOREIGN KEY (user_id) REFERENCES User(user_id)
-- );
 

-- -- Inserting into the User table
--   INSERT INTO USER VALUES (1,'Carly','Diaz',"carly@email.com",'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
--   INSERT INTO USER VALUES (2,'Lisa','Brooks',"lisa@email.com",'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80');
--   INSERT INTO USER VALUES (3,'Juan','Hernandez',"juan@email.com",'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
--   INSERT INTO USER VALUES (4,'James','Grayson',"james@email.com",'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');

--   -- Inserting into the Message Table
-- INSERT INTO Message VALUES (1,1, "I just finished reading Can't see me and I loved it! What do you think?");
-- INSERT INTO Message VALUES (2,2, "I think Maven wasn't very likable in Red Queen");
-- INSERT INTO Message VALUES (3,3, "I enjoyed Recursion much better than his other book Dark Matter...");


--   -- Inserting into the Reply Table
-- INSERT INTO Reply VALUES (1,1,4,  "I think David is a very interesting guy. He's very inspirational! A little crazy though");
  
 
