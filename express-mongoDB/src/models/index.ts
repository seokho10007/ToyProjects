import mongoose from 'mongoose';
import { PostSchema } from './schemas/post.model';
import { TagSchema } from './schemas/tag.model';
import { UserSchema } from './schemas/user.model';

const Post = mongoose.model('Post', PostSchema);
const User = mongoose.model('User', UserSchema);
const Tag = mongoose.model('Tag', TagSchema);

export { Post, User, Tag };
