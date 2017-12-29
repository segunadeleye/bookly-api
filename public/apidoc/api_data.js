define({ "api": [  {    "type": "get",    "url": "/",    "title": "API Status",    "group": "Status",    "success": {      "fields": {        "Success 200": [          {            "group": "Success 200",            "type": "String",            "optional": false,            "field": "message",            "description": "<p>API Status message</p>"          }        ]      },      "examples": [        {          "title": "Success",          "content": "HTTP/1.1 200 OK\n{message: \"Bookly. Let's know what you are reading.\"}",          "type": "json"        }      ]    },    "version": "0.0.0",    "filename": "routes/index.js",    "groupTitle": "Status",    "name": "Get"  }] });
