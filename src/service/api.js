// services/api.js
const database = {
    users: [],
};

export const saveUserData = (data) => {
    // Simulate storing data in a database
    database.users.push(data);
};

export const getUserData = () => {
    // Simulate retrieving user data from the database
    // In a real app, you would fetch data from the backend
    return database.users[database.users.length - 1];
};
