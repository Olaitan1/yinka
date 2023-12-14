// services/api.js
const database = {
    users: [],
};

 const saveUserData = (data) => {
    // Simulate storing data in a database
    database.users.push(data);
};

 const getUserData = () => {
    // Simulate retrieving user data from the database
    // In a real app, you would fetch data from the backend
    return database.users[database.users.length - 1];
};



module.exports={
    getUserData,
        saveUserData
}