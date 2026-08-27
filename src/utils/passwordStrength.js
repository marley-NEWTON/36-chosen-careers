export function getPasswordStrength(password) {
  if (!password) return { label: "", score: 0 };

  let score = 0;
  if (password.length >= 6) score++;
  if (password.length >= 10) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { label: "Weak", score: 1 };
  if (score <= 3) return { label: "Medium", score: 2 };
  return { label: "Strong", score: 3 };
}
