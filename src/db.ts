import mongoose from 'mongoose'

const URI = 'mongodb://localhost:27017/daily-trends' || ''

mongoose.set('strictQuery', false)

mongoose
  .connect(URI)
  .then(() => console.log('Database is connected'))
  .catch(err => console.error('Error in DB Mongo =>', err))
