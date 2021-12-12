import mongoose from 'mongoose';
import PostSchema from './schemas/post.model';
import UserSchema from './schemas/user.model';

const Post = mongoose.model('Post', PostSchema);
const User = mongoose.model('User', UserSchema);

export { Post, User };
