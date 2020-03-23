import mongoose,{ConnectionOptions} from 'mongoose';

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
} 

mongoose.connect('mongodb://localhost/graphqltest', config)
        .then(db=>console.log('db is connected'))
        .catch(err=>console.log(err))