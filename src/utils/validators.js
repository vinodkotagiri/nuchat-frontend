export const validateLoginForm = ({ email, password }) => {
    const isMailValid = validateMail(email);
    const isPasswordValid = validatePassword(password);
    return isMailValid && isPasswordValid
}

const validatePassword = (password) => {
    return password.length > 6 && password.length < 12;
}
const validateUsername = (username) => {
    return username.length > 3 && username.length < 12;
}
const validateMail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email)
}

export const validateRegisterForm = ({ email, password, username }) => {
    const isMailValid = validateMail(email);
    const isPasswordValid = validatePassword(password);
    const isUsernameValid = validateUsername(username);
    return isMailValid && isPasswordValid && isUsernameValid
}
