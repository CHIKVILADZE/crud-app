# Express CRUD App Documentation

This is an Express.js application providing CRUD (Create, Read, Update, Delete) operations for a contacts directory. It uses a MySQL database to store contact information.

## Application Features

The application provides the following endpoints:

1. `POST /contacts`: Create a new contact.
2. `GET /contacts`: Retrieve all contacts.
3. `GET /contacts/:id`: Retrieve a single contact by ID.
4. `PUT /contacts/:id`: Update an existing contact by ID.
5. `DELETE /:id`: Delete a contact by ID.

## Running the application

### Install dependencies

Run the following command to install the necessary dependencies.

```bash
npm install
```

### Start the server

Run the following command to start the server. The server will start on port 3000.

```bash
npm run dev
```

## Using Docker Compose

The application can also be launched with Docker Compose. The included `docker-compose.yaml` file sets up a MySQL server on port 3306.

To launch the server with Docker Compose, run the following command:

```bash
docker compose up -d
```

Please ensure Docker and Docker Compose are installed and properly configured before using this command.

## API Documentation

Below is a brief explanation of each endpoint:

- **POST /contacts**: Creates a new contact. Requires a JSON body with `name`, `email`, and `phone` fields.
- **GET /contacts**: Retrieves all contacts in the database. No input needed.
- **GET /contacts/:id**: Retrieves a specific contact using their ID. Replace `:id` with the desired contact's ID.
- **PUT /contacts/:id**: Updates a contact. Replace `:id` with the ID of the contact to be updated. Requires a JSON body with `name`, `email`, and `phone` fields.
- **DELETE /:id**: Deletes a contact using their ID. Replace `:id` with the ID of the contact to be deleted. No input needed.

Each endpoint will return relevant success or error messages, as well as status codes to signify the result of the operation.
