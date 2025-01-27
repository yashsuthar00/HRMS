# HRMS Backend

This repository contains the backend code for the Human Resource Management System (HRMS).

## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The HRMS backend is responsible for managing the server-side logic, database interactions, and API endpoints for the HRMS application.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yashsuthar00/hrms.git
    ```
2. Navigate to the project directory:
    ```bash
    cd hrms/backend
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

1. Create a `.env` file in the root directory and add the following environment variables:
    ```
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

2. Start the server:
    ```bash
    npm start
    ```

3. The backend server will be running at `http://localhost:5000`.

## API Documentation

For detailed API documentation, refer to the [API Docs](./docs/api.md).

## Contributing

Contributions are welcome! Please read the [contributing guidelines](./CONTRIBUTING.md) first.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.