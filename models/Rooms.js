const { Schema, model } = require("mongoose");

const RoomSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})