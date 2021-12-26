import mongoosePkg from 'mongoose';

const {Schema, model} = mongoosePkg;

const user = new Schema({
    login: Schema.Types.String,
    passHash: Schema.Types.String,
    saltHash: Schema.Types.String,
});

user.virtual('password')
    .set((value) => {
        user.saltHash = value
    })
    .get(() => {
        return user.password === user.passHash;
    })

export const root = new Schema({
    user
})