export function validatePassword(password) {
  // Mínimo 8 caracteres, al menos una letra mayúscula, una minúscula, un número y un carácter especial
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (passwordRegex.test(password)) {
    return true; // La contraseña es válida
  } else {
    return false; // La contraseña no cumple con los requisitos
  }
}
