export const host = "http://localhost:4000";
export const loginRoute = `${process.env.REACT_APP_API_URL}/api/auth/login`;
export const registerRoute = `${ process.env.REACT_APP_API_URL}/api/auth/register`;
export const logoutRoute = `${ process.env.REACT_APP_API_URL}/api/auth/logout`;
export const allUsersRoute = `${ process.env.REACT_APP_API_URL}/api/auth/allusers`;
export const sendMessageRoute = `${ process.env.REACT_APP_API_URL}/api/messages/addmsg`;
export const recieveMessageRoute = `${ process.env.REACT_APP_API_URL}/api/messages/getmsg`;
export const setAvatarRoute = `${ process.env.REACT_APP_API_URL}/api/auth/setavatar`;
