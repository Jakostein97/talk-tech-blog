# Tech Talk Application

## Description
Tech Talk is a CMS-style blog platform that allows users to create and share articles about technology. It uses Handlebars for templating, providing a seamless and dynamic user experience.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)

## Installation
Follow these steps to install and run the application locally.

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)
- MySQL

### Steps
1. **Clone the repository**
    ```sh
    git clone https://github.com/yourusername/tech-talk.git
    cd tech-talk
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **Configure the database**
    - Create a `.env` file in the root directory and add your database credentials:
      ```plaintext
      DB_NAME=tech_talk_db
      DB_USER=root
      DB_PASSWORD=yourpassword
      DB_HOST=localhost
      DB_PORT=3001
      ```

4. **Initialize the database**
    ```sh
    npm run db:setup
    ```

5. **Start the application**
    ```sh
    npm start
    ```

6. **Access the application**
    Open your browser and navigate to `http://localhost:3001`.

## Usage

GitHub: [Jakostein97](https://github.com/Jakostein97/talk-tech-blog)

1. **Register/Login**
    - Users can register a new account or log in using existing credentials.

2. **Create a Post**
    - After logging in, users can create a new blog post by navigating to the "New Post" page.

3. **View Posts**
    - All posts can be viewed on the home page. Clicking on a post title will open the full article.

4. **Edit/Delete Posts**
    - Users can edit or delete their own posts.

5. **Comment on Posts**
    - Users can comment on any post to share their thoughts and feedback.

## Technologies
- **Frontend:**
  - HTML
  - CSS
  - JavaScript
  - Handlebars

- **Backend:**
  - Node.js
  - Express.js
  - MySQL
  - Sequelize (ORM)

## License
This project is licensed under the MIT License - see the [LICENSE](/LICENSE) file for details.


