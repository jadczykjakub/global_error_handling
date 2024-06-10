import express from 'express';
const app = express();
const port = 3000;
import httpStatus from 'http-status';
import ApiError from './utils/ApiError.js';
import { catchAsync } from './utils/CatchAsync.js';
import { errorConverter, errorHandler } from './middlewares/error.js';

// Basic route
app.get('/', catchAsync(async (req, res, next) => {
    
    // throw new Error("this is default error")

    // Intentional error
    // throw new ApiError( httpStatus.BAD_REQUEST ,'This is ApiError');
}));

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});