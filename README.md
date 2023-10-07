
# NovaCode
NovaCode is an open-source coding platform built with TypeScript and Express.

## Features

**(TBA) - To be Added

- User Authentication and Profiles (TBA)
- Coding Problem Management (TBA)
- Code Submission and Judging (TBA)
- User Progress Tracking and Analytics (TBA)
- Collaborative Coding (TBA)
- Discussion Forums (TBA)
- Problem Tags and Categories (TBA)
- Leaderboard (TBA)


## 1. Tech Stack

**Server:** NodeJS + Express\
**Database:** MongoDB\
**Cache:** Redis

**Dev Dependencies:**
- Typescript
- ESLint
- Mocha
- Chai
- Nodemon

**Other Dependencies:**
- Mongoose
- Redis
- Dotenv
- Moment.js
- JsonWebToken
- Morgan


## 2. Getting Started

### 2.1 Pre-Requisites
Ensure you have the following installed:

- `Node.js (version >= 14)`
- `npm`
- `Docker`
- `concurrently`

### 2.2 Setting Up
- Clone this Repository
```bash
git clone https://github.com/fallen-ecstasy/NovaCode-Server
cd NovaCode-Server
```

- Install the Required Dependencies
```bash
npm install
```

### 2.3 Setup Database Server
- To Start Database Servers, You need Docker Up and Running
- Then Run the Following command in the `ROOTDIR` of Project.
```bash
docker compose up
```
- To Stop the Servers
```bash
docker compose down
```

** Additionally, You can play with Local Fork of the Repository, and configure your database servers if you want.
For this, We Prefer to use Docker for Running Databases locally.

### 2.4 Environment Variables
To run this project, you will need to add the following environment variables to your .env file
- `PORT`
- `CORS_ORIGIN`
- `DB_HOST` -- default:`localhost`
- `DB_PORT` -- default:`67017`
- `DB_NAME` -- default:`novacode`

### 2.5 Running Node Scripts

**Development Server**
```bash
npm run dev
```
\
**Create Build**
```bash
npm run build
```
\
**Production Server**
```bash
npm run start
```
\
**Run Linting**
```bash
npm run lint
```

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.


## Contributors
A Look at our Contributors


[![Contributors](https://contrib.rocks/image?repo=fallen-ecstasy/NovaCode)](https://github.com/fallen-ecstasy/NovaCode/graphs/contributors)
## REPO ACTIVITY

![Alt](https://repobeats.axiom.co/api/embed/0b0455b39b8c5f8e2c74acc988a2f8c03ffb7264.svg "Repobeats analytics image")
## Authors

- [@fallen-ecstasy](https://www.github.com/fallen-ecstasy)


## Support

For support, join our [Discord channel](https://discord.gg/pEG9QDMZVA).

