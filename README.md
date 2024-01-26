
# Polling System 

An API where anyone can create questions with options and also add votes to it.


## Deployment


This Api is Live on:- 
( https://pollingsystem-bn2o.onrender.com ).


## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/vishalkrsinghh)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/vishalsingh1010/)


## Run Locally

Clone the project

```bash
  git clone https://github.com/vishalkrsinghh/polling_System.git
```

Go to the project directory

```bash
  cd polling_System(Project directory folder name)
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node index.js
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file and set your own values.

`PORT`

`MONGODB_URI`


## Features

- Create a question (you can add as many questions as you want).
- Add options to a question.
- Add a vote to an option of question.

- Delete a question with it's options. 

- Delete an option.

- View a question with it’s options and all the votes given to it.


## Routes

- /questions/create (To create a question)

- /questions/:id/options/create (To add options to a specific question)

- /questions/:id/delete (To delete a question)

- /options/:id/delete (To delete an option)

- /options/:id/add_vote (To increment the count of votes)

- /questions/:id (To view a question and it’s options)


## Tech Stack

**Server:** Node, Express, MongoDb


## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.


## Authors

- [@vkSingh](https://github.com/vishalkrsinghh)


## Support

For support and feedback, please reach out to me at vk788043@gmail.com

