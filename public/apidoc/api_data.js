define({ "api": [  {    "type": "get",    "url": "/books",    "title": "List Books",    "group": "Books",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "status",            "description": "<p>Response status</p>"          },          {            "group": "Success 200",            "type": "Object[]",            "optional": false,            "field": "book",            "description": "<p>Book list</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "book.id",            "description": "<p>Book id</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "book.title",            "description": "<p>Book title</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "book.author",            "description": "<p>Book author</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "book.edition",            "description": "<p>Book edition</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "book.year",            "description": "<p>Book year</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "book.description",            "description": "<p>Book description</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "book.user_id",            "description": "<p>User Id</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "book.created_at",            "description": "<p>Creation date</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "book.updated_at",            "description": "<p>Updates date</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n {\n   success: true,\n   book: [{\n     \"id\": 1,\n     \"title\": \"Building APIs with Node.js\",\n     \"author\": \"Caio Ribeiro Pereira\",\n     \"edition\": null,\n     \"year\": 2016,\n     \"description\": \"A book that takes you step by step on how to create production-ready APIs with Node.js\",\n     \"created_at\": \"2017-12-22T13:45:56.000Z\",\n     \"updated_at\": \"2017-12-22T13:45:56.000Z\",\n     \"user_id\": 1\n   }]\n }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Boolean",            "optional": false,            "field": "status",            "description": "<p>Response Status</p>"          },          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "err",            "description": "<p>Response Error</p>"          }        ]      },      "examples": [        {          "title": "Error",          "content": "HTTP/1.1 412 Precondition Failed\n {\n   status: false,\n   err: {}\n }",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "routes/books.js",    "groupTitle": "Books",    "name": "GetBooks"  },  {    "type": "post",    "url": "/books",    "title": "Create Book",    "group": "Books",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "title",            "description": "<p>Book title</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "author",            "description": "<p>Book author</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "edition",            "description": "<p>Book edition</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "year",            "description": "<p>Book year of release</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "description",            "description": "<p>Book description</p>"          },          {            "group": "Parameter",            "type": "Number",            "optional": false,            "field": "user_id",            "description": "<p>Id of user</p>"          }        ]      },      "examples": [        {          "title": "Input",          "content": "{\n  \"title\": \"Building APIs with Node.js\",\n  \"author\": \"Caio Ribeiro Pereira\",\n  \"edition\": \"1\",\n  \"year\": 2016,\n  \"description\": \"A book that takes you step by step on how to create production-ready APIs with Node.js\",\n  \"user_id\": 1\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "status",            "description": "<p>Response status</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "book",            "description": "<p>Create book</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "book.id",            "description": "<p>Book id</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "book.title",            "description": "<p>Book title</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "book.author",            "description": "<p>Book author</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "book.edition",            "description": "<p>Book edition</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "book.year",            "description": "<p>Book year</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "book.description",            "description": "<p>Book description</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "book.user_id",            "description": "<p>User Id</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "book.created_at",            "description": "<p>Creation date</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "book.updated_at",            "description": "<p>Update date</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n {\n   success: true,\n   book: {\n     \"id\": 1,\n     \"title\": \"Building APIs with Node.js\",\n     \"author\": \"Caio Ribeiro Pereira\",\n     \"edition\": \"1\",\n     \"year\": 2016,\n     \"description\": \"A book that takes you step by step on how to create production-ready APIs with Node.js\"\n     \"user_id\": 1,\n     \"created_at\": \"2017-12-22T13:45:56.000Z\",\n     \"updated_at\": \"2017-12-22T13:45:56.000Z\"\n   }\n }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Boolean",            "optional": false,            "field": "status",            "description": "<p>Response Status</p>"          },          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "err",            "description": "<p>Response Error</p>"          }        ]      },      "examples": [        {          "title": "Error",          "content": "HTTP/1.1 412 Precondition Failed\n {\n   status: false,\n   err: {}\n }",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "routes/books.js",    "groupTitle": "Books",    "name": "PostBooks"  },  {    "type": "get",    "url": "/",    "title": "API Status",    "group": "Status",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>API Status message</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n{message: \"Bookly. Let's know what you are reading.\"}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "routes/index.js",    "groupTitle": "Status",    "name": "Get"  },  {    "type": "post",    "url": "/users",    "title": "Create User",    "group": "Users",    "parameter": {      "fields": {        "Parameter": [          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "name",            "description": "<p>User's name</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "email",            "description": "<p>User's email</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "username",            "description": "<p>User's username</p>"          },          {            "group": "Parameter",            "type": "String",            "optional": false,            "field": "password",            "description": "<p>User's password</p>"          }        ]      },      "examples": [        {          "title": "Input",          "content": "{\n  \"name\": \"Oluwasegun Adeleye\",\n  \"email\": \"oluwasegun@bookly.com\",\n  \"username\": \"oluwasegun\",\n  \"password\": \"booklypass\"\n}",          "type": "json"        }      ]    },    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "Boolean",            "optional": false,            "field": "status",            "description": "<p>Response status</p>"          },          {            "group": "Success 200",            "type": "Object",            "optional": false,            "field": "user",            "description": "<p>Created user</p>"          },          {            "group": "Success 200",            "type": "Number",            "optional": false,            "field": "user.id",            "description": "<p>User Id</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "user.name",            "description": "<p>User's name</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "user.email",            "description": "<p>User's email</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "user.username",            "description": "<p>User's username</p>"          },          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "user.password",            "description": "<p>User's password</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "user.created_at",            "description": "<p>Creation date</p>"          },          {            "group": "Success 200",            "type": "Date",            "optional": false,            "field": "user.updated_at",            "description": "<p>Update date</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n {\n   success: true,\n   user: {\n     \"name\": \"Oluwasegun Adeleye\",\n     \"email\": \"oluwasegun@bookly.com\",\n     \"username\": \"oluwasegun\",\n     \"password\": \"sdeonnjfeaw23j4330nc\",\n     \"created_at\": \"2017-12-22T13:45:56.000Z\",\n     \"updated_at\": \"2017-12-22T13:45:56.000Z\"\n   }\n }",          "type": "json"        }      ]    },    "error": {      "fields": {        "Error 4xx": [          {            "group": "Error 4xx",            "type": "Boolean",            "optional": false,            "field": "status",            "description": "<p>Response Status</p>"          },          {            "group": "Error 4xx",            "type": "Object",            "optional": false,            "field": "err",            "description": "<p>Response Error</p>"          }        ]      },      "examples": [        {          "title": "Error",          "content": "HTTP/1.1 412 Precondition Failed\n {\n   status: false,\n   err: {}\n }",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "routes/users.js",    "groupTitle": "Users",    "name": "PostUsers"  }] });
