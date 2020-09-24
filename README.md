### Task 1: Designing the database schema for our Community tab

Your first task is to design the database tables that the Community feature will use. The goal of this task is to reach a correct database schema that could be implemented in MySQL.

Requirements:

- Design a DB schema for the example included above.
- Use a relational database.
- You should create all tables, and key constraints in the process.

### Task 2: Writing an application

The second, and last part of this assignment is to write an application that uses your database. For this part, **you DO NOT have to do both parts (2.a and 2.b), so you can choose between working on the front end or back end set of instructions.**

#### 2.a Writing a front end application

For the front end application, you will need to build a simple web app that replicates the design showed above.

#### Requirements:

- You should use [React.](https://reactjs.org)
- You should replicate the following design:

<img src="https://user-images.githubusercontent.com/55850581/93656609-6d0d9100-f9f9-11ea-9eb9-5e1a0e187179.png" width="800" height="700">

- You should show the person's picture, first, and last name. The other fields are optional.
- Posts should expand / colapse its replies.

#### 2.b: Writing a back end application

For the back end application, you will need to build a simple REST API composed of two endpoints.

- GET the discussion thread
  - this endpoint should return the following payload:

```
[
  {
    "message": "I just finished reading The Martian and I loved the ending! What do you think?",
    "first_name": "Carlos",
    "last_name": "Diaz",
    "email": "carlos@email.com",
    "photo": "https://booksloth-profilejpg",
    "replies": [...]
  },
  {
    "message": "I think Maven wasn't very likable in Red Queen.",
    "first_name": "Elizabeth",
    "last_name": "Lauren",
    "email": "elizabeth@email.com",
    "photo": "https://booksloth-profilejpg",
    "replies": [
      {
        "message": "Why? I think his actions were very important for his character development. Without it he would never change his original point of view.",
        "first_name": "Maureen",
        "last_name": "",
        "email": "maureen@booksloth.com",
        "photo": "https://booksloth-profilejpg"
      }
    ]
  },
  {
    "message": "I enjoyed Recursion much better that his other book Dark Matter...",
    "first_name": "Lincy",
    "last_name": "L.",
    "email": "lincy@email.com",
    "photo": "https://booksloth-profilejpg",
    "replies": [...]
  },
  {
    "message": "Lady Midnight was amazing and super entertaining! I loved the characters so much!",
    "first_name": "Kat",
    "last_name": "",
    "email": "kat@email.com",
    "photo": "https://booksloth-profilejpg",
    "replies": [...]
  }
]
```

- Post a new post to the Community thread.
- Reply to posts (optional)

#### Requirements:

- Create a small REST API written in [express.js](http://expressjs.com/)
- Use mysql, and connet to the relational database you created in the first step.

Attached is a file you can import to [the Postman app](http://postman.com/) and use it as reference to complete this test, and to test your code. Any technical and/or design details are up to you. The result should look and feel like something you would be proud of. The purpose of this coding assignment is to discuss it in your second interview, and further understand your technical knowledge.

\*\*You should commit changes to a git repo, give access to [booksloth's](https://github.com/booksloth) github user, committing with frequency and with the type of commit messages you would write on a typical project. When you are done, please create a git repo locally and zip it. Send your zip file to your link provided in this email.

Submitting something you're proud of is far more important than any amount of time spent or not spent on the challenge. Make sure you're happy with the result! If you have any technical questions, feel free to send them our way. We look forward to hearing back from you.

https://gist.github.com/booksloth/ed398ad4958e05da1f80a41d0d197dfa
