import mongoose, { Schema, model } from 'mongoose';

const favoriteSchema = new Schema({
  type: String,
  name: String,
  url: String,
});

const Favorite = model('Favorite', favoriteSchema);

export default Favorite;
