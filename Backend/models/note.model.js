import mongoose from "mongoose";
import AutoIncrementFactory from 'mongoose-sequence';

const AutoIncrement= AutoIncrementFactory(mongoose)

const noteSchema= new mongoose.Schema({
    assignedToUser:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        requiered:true
    },
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        required:false
    },

},
{
    timestamps:true
}
)
noteSchema.plugin(AutoIncrement,
    {
        inc_field:'ticket',
        id:'ticketNums',
        start_seq:300
})

const Note= mongoose.model('Note',noteSchema)

export default Note