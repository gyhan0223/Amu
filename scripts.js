function ValidUsername() {
  const username = document.getElementById("username").value;
  let usernameError = document.getElementById("usernameError");
  let isValid = true;
  // Regular expression to check for only letters (A-Z, a-z) and numbers (0-9)
  const validCharacters = /^[A-Za-z0-9]+$/;

  // Array of existing usernames (you should maintain this list with your actual users)
  const existingUsernames = ["user1", "user2", "admin"]; // Example array

  if (username === "") {
    usernameError.textContent = "사용자 이름을 입력해 주세요";
    isValid = false;
  }

  // Check if username contains only valid characters (FIRST PRIORITY)
  if (!validCharacters.test(username)) {
    usernameError.textContent =
      "사용자 이름은 문자(A-Z, a-z)와 숫자(0-9)만 포함할 수 있습니다. 특별한 문자나 공백은 허용되지 않습니다";
    isValid = false;
  }

  // Check length requirement (SECOND PRIORITY)
  else if (username.length < 3 || username.length > 16) {
    usernameError.textContent = "사용자 이름은 3자에서 16자 사이여야 합니다";
    isValid = false;
  }

  // Check for duplicate usernames (THIRD PRIORITY)
  if (existingUsernames.includes(username)) {
    usernameError.textContent =
      "이 사용자 이름은 이미 사용 중입니다. 다른 사용자 이름을 선택해 주세요";
    isValid = false;
  }

  if (isValid) {
    usernameError.style.display = "none";
  } else {
    usernameError.style.display = "block";
    usernameError.textContent = message;

    return isValid;
  }

  function ValidPassword() {
    const password = document.getElementById("password1").value;
    let passwordError;
    if (password === "") {
      passwordError.textContent = "비밀번호를 입력해 주세요";
      return false;
    }

    // 1. 최소 길이: 8자 이상
    if (password.length < 8) {
      passwordError.textContent = "비밀번호는 최소 8자 이상이어야 합니다.";
      return false;
    }

    // 2. 대문자와 소문자 포함 (적어도 하나씩)
    if (!/[A-Z]/.test(password)) {
      passwordError.textContent =
        "비밀번호는 최소 하나 이상의 대문자를 포함해야 합니다.";
      return false;
    }
    if (!/[a-z]/.test(password)) {
      passwordError.textContent =
        "비밀번호는 최소 하나 이상의 소문자를 포함해야 합니다.";
      return false;
    }

    // 3. 숫자 포함 (0~9)
    if (!/[0-9]/.test(password)) {
      passwordError.textContent =
        "비밀번호는 최소 하나 이상의 숫자를 포함해야 합니다.";
      return false;
    }

    // 4. 특수 문자 포함 (예: !@#$%^&*(),.?":{}|<> 등)
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      passwordError.textContent =
        "비밀번호는 최소 하나 이상의 특수문자를 포함해야 합니다.";
      return false;
    }

    // 5. 반복 및 연속 문자 제한
    // (a) 동일 문자가 3회 이상 연속되는지 검사 (예: "aaa" 또는 "111")
    if (/(.)\1\1/.test(password)) {
      passwordError.textContent =
        "비밀번호에 동일 문자가 3회 이상 연속해서 나타날 수 없습니다.";
      return false;
    }
    // (b) 연속된 순차적(증가 또는 감소) 문자 3개 이상 제한
    for (let i = 0; i < password.length - 2; i++) {
      const charCode1 = password.charCodeAt(i);
      const charCode2 = password.charCodeAt(i + 1);
      const charCode3 = password.charCodeAt(i + 2);

      // 증가하는 순차 (예: "abc", "123")
      if (charCode2 === charCode1 + 1 && charCode3 === charCode2 + 1) {
        passwordError.textContent =
          "비밀번호에 연속되는 순차적 문자는 사용할 수 없습니다.";
        return false;
      }
      // 감소하는 순차 (예: "cba", "321")
      if (charCode2 === charCode1 - 1 && charCode3 === charCode2 - 1) {
        passwordError.textContent =
          "비밀번호에 연속되는 순차적 문자는 사용할 수 없습니다.";
        return false;
      }
    }

    // 6. 일반적인 비밀번호 사용 금지 (소문자로 변환 후 비교)
    const commonPasswords = [
      "password",
      "12345678",
      "qwerty",
      "111111",
      "iloveyou",
      "admin",
      "welcome",
      "monkey",
      "abc123",
    ];
    if (commonPasswords.includes(password.toLowerCase())) {
      passwordError.textContent = "너무 흔한 비밀번호는 사용할 수 없습니다.";
    }

    // 모든 조건을 만족하면 true 반환
    return true;
  }
}
