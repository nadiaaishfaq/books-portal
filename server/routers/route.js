import express from 'express'

import bookRoute from '../controllers/bookRoute.js'

const routeFunction = (app) =>{
    app.use(express.json())
    app.use("/api/book", bookRoute)
}

export default routeFunction;