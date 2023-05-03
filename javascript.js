function convert() {
  const cyrillicText = document.getElementById("cyrillic-input").value;
  const language = document.getElementById("language-select").value;

  const cyrillicToLatinMap = {
      // Special cases - lowercase
      "ль": "lj",
      "ля": "lja",
      "лю": "lju",
      "лё": "ljo",
      "нь": "nj",
      "ня": "nja",
      "ню": "nju",
      "нё": "njo",
      // Special cases - uppercase
      "Ль": "Lj",
      "Ля": "Lja",
      "Лю": "Lju",
      "Лё": "Ljo",
      "Нь": "Nj",
      "Ня": "Nja",
      "Ню": "Nju",
      "Нё": "Njo",
      // Special cases - I doubt these can be uppercase, ever
      "ьа": "ja",
      "ье": "je",
      "ьи": "ji",
      "ьо": "jo",
      "ьу": "ju",
      "ъа": "ja",
      "ъе": "je",
      "ъи": "ji",
      "ъо": "jo",
      "ъу": "ju",
      // Uppercase
      "А": "A",
      "Б": "B",
      "В": "V",
      "Г": (language === "rusyn") ? "H" : "G",
      "Ґ": "G",
      "Д": "D",
      "Е": (language === "russian" || language === "belarussian") ? "Je" : "E",
      "Ё": "Jo",
      "Є": "Je",
      "Ж": "Ž",
      "З": "Z",
      "И": "I",
      "І": "I",
      "Ї": "Ji",
      "Й": "J",
      "К": "K",
      "Л": "L",
      "М": "M",
      "Н": "N",
      "О": "O",
      "П": "P",
      "Р": "R",
      "С": "S",
      "Т": "T",
      "У": "U",
      "Ў": "V",
      "Ф": "F",
      "Х": "H",
      "Ц": "C",
      "Ч": "Č",
      "Ш": "Š",
      "Щ": (language === "bulgarian") ? "Št" : "Šč",
      "Ъ": "",
      "Ы": "I",
      "Ь": "",
      "Э": "E",
      "Ю": "Ju",
      "Я": "Ja",
      "Ѕ": "Dz",
      "Ќ": "Ć",
      "Ѓ": "Đ",
      // Lowercase
      "а": "a",
      "б": "b",
      "в": "v",
      "г": (language === "rusyn") ? "h" : "g",
      "ґ": "g",
      "д": "d",
      "е": "e",
      "ё": "jo",
      "є": "je",
      "ж": "ž",
      "з": "z",
      "и": "i",
      "і": "i",
      "ї": "ji",
      "й": "j",
      "к": "k",
      "л": "l",
      "м": "m",
      "н": "n",
      "о": "o",
      "п": "p",
      "р": "r",
      "с": "s",
      "т": "t",
      "у": "u",
      "ў": "v",
      "ф": "f",
      "х": "h",
      "ц": "c",
      "ч": "č",
      "ш": "š",
      "щ": (language === "bulgarian") ? "št" : "šč",
      "ъ": "",
      "ы": "i",
      "ь": "",
      "э": "e",
      "ю": "ju",
      "я": "ja",
      "ѕ": "dz",
      "ќ": "ć",
      "ѓ": "đ",
  };
  let latinText = "";
  for (let i = 0; i < cyrillicText.length; i++) {
      if (cyrillicToLatinMap[cyrillicText.substr(i, 2)] !== undefined) {
          if (cyrillicToLatinMap[cyrillicText.substr(i, 2)] !== "") {
              latinText += cyrillicToLatinMap[cyrillicText.substr(i, 2)];
              i++;
          }
      } else if (cyrillicToLatinMap[cyrillicText[i]] !== undefined) {
          if (cyrillicToLatinMap[cyrillicText[i]] !== "") {
              latinText += cyrillicToLatinMap[cyrillicText[i]];
          }
      } else {
          latinText += cyrillicText[i];
      }
  }
  // Check for consecutive vowels and insert "j"
  latinText = latinText.replace(/[aeiou]{2}/gi, (match) => {
      return match[0] + "j" + match[1];
  });
  document.getElementById("latin-output").value = latinText;
}

// Enables the clear button to clear both fields
function clearFields() {
  document.getElementById("cyrillic-input").value = "";
  document.getElementById("latin-output").value = "";
}

// Enables the copy button to copy the latin-out to the clipboard
function copyToClipboard() {
  const textarea = document.getElementById("latin-output");
  textarea.select();
  document.execCommand("copy");
}

// Displays a banner if Bulgarian is selected
function handleLanguageChange() {
  const language = document.getElementById("language-select").value;
  const bulgarianNotice = document.getElementById("bulgarian-notice");

  if (language === "bulgarian") {
      bulgarianNotice.style.display = "block";
  } else {
      bulgarianNotice.style.display = "none";
  }
}