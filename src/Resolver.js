import User from './model/User'

export const resolvers = {
    Query:{
            getUsers:async ()=>{
            const users = await User.find();
            return users;
        },
        getOneUser: async (_,{id})=>{
            const user = await User.findById(id);
            return user
       }
    },

    Mutation:{
          createUser:async (_,args)=>{
              const {nickname, fullname, phone, city}= args
              const user = await User.create({
                  nickname,
                  fullname,
                  phone,
                  city
              })
              return user
          },

          deleteUser: async (_, args)=>{
             const {id}= args
             const deleteUSer = await User.findByIdAndDelete(id)
             return deleteUSer
          },

          updateUser:async (_, args)=>{
            const {id, nickname, fullname, phone, city} = args
             return await User.findByIdAndUpdate(id,{
                 nickname,
                 fullname, 
                 phone,
                 city
             },{new:true})
          }
    }
  }