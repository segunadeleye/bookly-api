import supertest from 'supertest';
import app from './../index.js';

global.app = app;
global.request = supertest(app);
