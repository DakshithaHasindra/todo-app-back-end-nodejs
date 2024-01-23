const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: [true, "Please enter a product name"]
        },
        description: {
            type: String,
            required: [true, "Please enter a product description"],
        },
        status: {
            type: Boolean,
            required: [true, "Please enter a price"],
            default: false
        },
        image: {
            type: String,
            required: false
        }
    },

    {
        timestamp : true
    }
)


const Task = mongoose.model('Task', taskSchema);

module.exports = Task;