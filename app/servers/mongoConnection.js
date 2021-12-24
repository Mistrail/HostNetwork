import mongoose from 'mongoose';
import mongooseAsync from 'mongoose-async';
import {d} from "../misc/util.js";
mongoose.plugin(mongooseAsync);

export const mongoosePromise = mongoose.connect('mongodb://localhost/hostnetwork');
d('Database found & engaged')
