const { Schema, Types } = require('mongoose');
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlenght: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => FormDataEvent(timestamp),
        },
    },
    {
    toJSON: {
        getters: true,
    },
    id: false,
    }
);

module.exports = reactionSchema;
