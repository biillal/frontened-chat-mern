export const  getSender = (user,users)=>{
    return users[0]._id === user.user._id ? users[1].username : users[0].username        
}