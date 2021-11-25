# works with Graphql in server with express-graphql package

## setup works

- install express and express-graphql graphql
- setup express server
- create schema
- create typedefs
- create query
- create mutation

### task one install packages

> npm i express express-graphql graphql typeorm mysql2 ts-node typescript cors @type/node @type/express

create dev and build script

```json
{
  "name": "learn_qrghaql",
  "version": "1.0.0",
  "description": "learn the grapghql with apollow server",
  "main": "server.js",
  "author": "ali alzubir",
  "license": "MIT",
  "scripts": {
    "start": "node ./dist/index.ts",
    "dev": "nodemon ./src/index.ts",
    "build": "tsc -p ."
  },
  "dependencies": {
    "@types/cors": "^2.8.12",
    "@types/express": "^4.17.13",
    "@types/node": "^16.10.5",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "express-graphql": "^0.12.0",
    "graphql": "^15.6.1",
    "mysql2": "^2.3.0",
    "ts-node": "^10.3.0",
    "typeorm": "^0.2.38",
    "typescript": "^4.4.4"
  }
}
```

### setup express server

```js
import express from "express";

import { graphqlHTTP } from "express-graphql";
import { schema } from "./Schema";
import cors from "cors";
import { createConnection } from "typeorm";
import { Users } from "./Entities/Users";
import { Tasks } from "./Entities/Tasks";
import { Projects } from "./Entities/Projects";

// create main function
const main = async () => {
  // create connection to DB
  await createConnection({
    type: "mysql",
    database: "graghqal",
    username: "root",
    password: "",
    logging: true,
    synchronize: false,
    entities: [Users, Tasks, Projects],
  });
  // create express app
  const app = express();

  // set cors && express json
  app.use(cors());
  app.use(express.json());
  // home router
  app.get("/", (req, res) => {
    res.send("home page");
  });
  // create server
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );
  app.listen(3001, () => {
    console.log(`server running on port 3001`);
  });
};

// call main function
main().catch((err) => {
  console.log(err);
});
```

### create schema

create schema folder in root directory
create Queries and TypeDefs and Mutation folders in schema folder

> mkdir schema

> mkdir Queries TypeDefs Mutation

in schema folder create index.ts file

> touch index.ts
> in this file will create schema and Root Query and Mutation and exports its

```js
// create schema

// get the GraphQLObjectType and schema
import { GraphQLObjectType, GraphQLSchema } from "graphql";

// get all queries
import {
  GET_ALL_TASKS,
  GET_ALL_USER,
  GET_PROJECT,
  GET_PROJECTS,
  GET_TASK,
  GET_USER,
} from "./Queries/Users";

// get all mutation
import {
  CREATE_project,
  CREATE_TASKS,
  CREATE_USER,
  deleteProject,
  deleteTask,
  DeleteUser,
} from "./Mutaions/Users";

// create Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    getAllUsers: GET_ALL_USER,
    getUser: GET_USER,
    getTaks: GET_ALL_TASKS,
    getTask: GET_TASK,
    getProjects: GET_PROJECTS,
    getproject: GET_PROJECT,
  },
});

// create Mutation Query
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DeleteUser,
    createTask: CREATE_TASKS,
    deleteTask: deleteTask,
    createProject: CREATE_project,
    deleteProject: deleteProject,
  },
});

// export all queries and Mutation
export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
```

### create type Defs

go to TypesDefs folder and create user type definition

> touch userType.ts

in the file will create a user type definition

```js
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean,
  GraphQLInt,
} from "graphql";

// create user table
export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  }),
});
```

### create query

go to Queries folder and create Users queries

> touch Users.ts

in this file works with query like get all user and get single user queries

```js
import { GraphQLID, GraphQLInt, GraphQLList, GraphQLString } from "graphql";
import { ManageProjectType, TaskType, UserType } from "../TypesDefs/Users";
import { Users } from "../../Entities/Users";
import { Tasks } from "../../Entities/Tasks";
import { Projects } from "../../Entities/Projects";

// get all user
export const GET_ALL_USER = {
  type: new GraphQLList(UserType),
  resolve: () => Users.find(),
};

// get single user
export const GET_USER = {
  type: UserType,
  args: { id: { type: GraphQLInt } },
  async resolve(_: any, args: any) {
    const { id } = args;
    const user = await Users.findOneOrFail(id);
    return user;
  },
};
```

### create mutation

go to Mutation folder and create Users mutation

> touch Users.ts
> in this file works with mutation like create new user and update single user and delete user queries

```js
import { GraphQLBoolean, GraphQLID, GraphQLInt, GraphQLString } from "graphql";
import { ManageProjectType, TaskType, UserType } from "../TypesDefs/Users";
import { Users } from "../../Entities/Users";
import { Tasks } from "../../Entities/Tasks";
import { Projects } from "../../Entities/Projects";

// create new user
export const CREATE_USER = {
  type: UserType,
  args: {
    name: { type: GraphQLString },
    username: { type: GraphQLString },
    password: { type: GraphQLString },
  },
  async resolve(parent: any, args: any) {
    const { name, username, password } = args;
    await Users.insert({ name, username, password });
    return args;
  },
};

// delete user
export const DeleteUser = {
  type: UserType,
  args: { id: { type: GraphQLID } },
  async resolve(parent: any, args: any) {
    const { id } = args;
    await Users.delete(id);
  },
};
```
