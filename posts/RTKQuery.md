# RTK Query overview

RTK Query is a powerful data fetching and caching tool,it is designed to simplify common cases for loading data in a web application,eliminating the need to hand-write data fetching & caching logic yourself .
RTK Query is an optional addon included in the redux ToolKit package , and its functionality is built on top of the other APIs in redux ToolKit

## install reduxjs/toolKit package

> npm install @reduxjs/toolkit

## setup redux in react application

after setup redux now create new folder named it servers

> mkdir Servers
> create new file named user.js in ./server
> touch user.js

## setup api with RTK Query

```js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const userApi = createApi({
  reducerPath: "user", // name of reducer
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000" }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "users",
    }),
  }),
});
export const { useGetUserQuery } = userApi;

// create endpoint
export const postApi = createApi({
  reducerPath: "post", // reducer name
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000" }), // url to get data from it
  endpoints: (builder) => ({
    // make operating query like get,post,put,delete
    query: builder.query({
      query: () => "post",
    }),
  }),
});

// create task endpoint
export const taskApi = createApi({
  reducerPath: "task",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000" }), // url to get data
  endpoints: (builder) => ({
    query: builder.query({
      query: () => "task",
    }),
  }),
});

// create category endpoint
export const categoryApi = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000" }),
  endpoints: (builder) => ({
    query: builder.query({
      query: () => "category",
    }),
  }),
});
```

## Get Single data

```js
export const PostApi=createApi({
  reducerPath:'posts',
  baseQuery:fetchBaseQuery({ baseUrl: "https://localhost:3000"}),
  endpoints:(builder) => ({
    getPost:builder.query()=>({
      query:(id)=> `posts/${id}`
    })
  })
})

export const {useGetPostQuery}=PostApi

```

## Create new data

```js
export const PostApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000" }),
  endpoints: (builder) => ({
    createPost: builder.mutation({
      query: (data) => ({
        headers: { "Content-Type": "application/json" },
        url: "posts",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useCreatePostMutation } = PostApi;
```

## Delete data

```js
export const PostApi = createApi({
  reducerPath: "posts",
  baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:3000" }),
  endpoints: (builder) => ({
    deletePost: builder.mutation({
      query: () => ({
        url: `post/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useDeletePostMutation } = PostApi;
```
