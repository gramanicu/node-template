# Node Template Project

## Overview

This template is for starting a new nodejs/express backend project. It includes a basic express server, and a basic structure to write controllers and middlewares. It is configured to use typescript, and includes a basic configuration for eslint and prettier. For database interactions, it uses Prisma, which is configured to use a postgres database. It is also configured to use Redis for caching or any other use.

It includes a Dockerfile and docker-compose.yml file to run the project in a docker container (the main application, postgres, and redis).

## Getting Started

There are two ways to run the project. The first is to run it locally, and the second is to run it in a docker container.

### Running Locally

To run the project locally, you will need to have nodejs and np, installed. You will also need to have a postgres database and redis instance running. You can use the docker-compose.yml file to run these services in docker containers (the docker-compose.yml file will also run the application).

Ensure that the configuration in the .env file is correct for your local environment. The .env file is not included in the repository, so you will need to create it. You can use the .env.example file as a template.

To run the project locally, run the following commands:

```bash
npm install
npm run dev
```

### Running in Docker

To run the project in a docker container, you will need to have docker and docker-compose installed. The docker-compose.yml file will run the application, postgres, and redis.

Ensure that the configuration in the .env file is correct for the docker environment.

To run the project in docker, run the following commands:

```bash
docker-compose -f docker-compose.yml up -d    
```

To rebuild the docker image, run the following commands:

```bash
 docker-compose -f docker-compose.yml down
```

```bash
 docker-compose build --no-cache 
```

## Project Structure

The project is structured as follows:

```bash
.
├── .env.example
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── Dockerfile
├── README.md
├── docker-compose.yml
├── package-lock.json
├── package.json
├── prisma
│   ├── migrations/
│   └── schema.prisma
├── src
│   ├── app.ts
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   ├── types
│   └── lib
│       ├── config.ts
│       ├── prisma/
│       ├── types/
│       └── redis/
└── tsconfig.json
```

## Configuration

The configuration for the project is stored in the .env file. The .env file is not included in the repository, so you will need to create it. You can use the .env.example file as a template.
