import { Schema, model } from 'mongoose'

const feedSchema = new Schema(
  {
    newspaper: { type: String, enum: ['El País', 'El Mundo'], required: true },
    text: { type: String, required: true, unique: true },
    href: { type: String, required: true, unique: true },
    delete: { type: Boolean, required: true, default: false }
  },
  { timestamps: true }
)

export default model('Feed', feedSchema)
