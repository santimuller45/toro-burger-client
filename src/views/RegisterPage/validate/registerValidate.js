export default function registerValidate(input) {
    const errors = {};
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/;

    if (!EMAIL_REGEX.test(input.email) && input.email.length > 0) errors.email = "Email Invalido";
    if (!PASSWORD_REGEX.test(input.password) && input.password.length > 0) errors.password = "La contraseña debe tener al menos 1 letra mayúscula , 1 número y tener entre 8-20 caractéres";
    if (input.repeatPassword.length !== input.password.length || input.password !== input.repeatPassword) errors.repeatPassword = "Password do not match";

    return errors;
}