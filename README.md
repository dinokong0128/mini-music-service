# Mini Music Service
A small backend service for saving/serving music files locally, using Node.js, Express.js, Mongodb.

## Endpoints
```
/**
 * Get list of music documents
 */
GET /music

/**
 * Get one music document with specified id
 */
GET /music/:id

/**
 * Create one music document (WIP)
 */
POST /music

/**
 * Update one music document (WIP)
 */
PUT /music/:id

/**
 * Delete one music document (WIP)
 */
DELETE /music/:id
```

## WIPS

- Search functionality for `GET /music` to allow searching song titles, artists, years, etc.
- Create, Update, Delete functionalities
- "Album" collection, that can group songs together.
- Authentication
- User favorite playlist
- Unit tests!

## Getting Started

prerequisite: Node.js, Docker compose, Yarn installed globally

Install dependencies:

```bash
yarn install
```

Set environment variables:

```bash
cp .env.example .env
```

## Running Locally (with instant update)

```bash
yarn dev
```

## Lint

```bash
# lint code with ESLint
yarn lint

# try to fix ESLint errors
yarn lint --fix
```

## Test

```bash
# run integration tests
yarn test:integration
```

music files for demonstration purpose are provided by HymnServe.com:
- Amazing Grace
- Blessed Assurance

Copyright by Elaine Johnson at HymnServe.com
