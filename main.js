const buttonGeneratorPassword = document.querySelector("button")

buttonGeneratorPassword.addEventListener("click", handleGeneratorPassword)

function handleGeneratorPassword() {
  const chars =
    "1234567890qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM@#$%&*"
  const passwordLength = 8
  let password = ""

  for (let i = 0; i < passwordLength; i++) {
    let passwordRandom = Math.floor(Math.random() * chars.length)
    console.log(passwordRandom)

    password += chars.substring(passwordRandom, passwordRandom + 1)
  }

  document.querySelector("p").innerHTML = password
}
