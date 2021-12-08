import mongoose from 'mongoose';
import PostSchema from './schemas/post';

const Post = mongoose.model('Post', PostSchema);

export { Post };
