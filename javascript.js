function convert() {
    const cyrillicText = document.getElementById("cyrillic-input").value;
    const cyrillicToLatinMap = {
      // Special cases
      "ль": "lj",
      "ля": "lja",
      "лю": "lju",
      "нь": "nj",
      "ня": "nja",
      "ню": "nju",
      "лё": "ljo",
      "нё": "njo",
      // Special cases - uppercase
      "Ж": "ПЛЕЈСХОЛДЕР",
      // Uppercase
      "А": "A",
      "Б": "B",
      "В": "V",
      "Г": "G",
      "Д": "D",
      "Е": "E",
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
      "Щ": "Šč",
      "Ъ": "",
      "Ы": "I",
      "Ь": "",
      "Э": "E",
      "Ю": "Ju",
      "Я": "Ja",
      // Lowercase
      "а": "a",
      "б": "b",
      "в": "v",
      "г": "g",
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
      "щ": "šč",
      "ъ": "",
      "ы": "i",
      "ь": "",
      "э": "e",
      "ю": "ju",
      "я": "ja",
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
    document.getElementById("latin-output").value = latinText;
  }
  
  function clearFields() {
    document.getElementById("cyrillic-input").value = "";
    document.getElementById("latin-output").value = "";
  }
  
  function copyToClipboard() {
    const textarea = document.getElementById("latin-output");
    textarea.select();
    document.execCommand("copy");
  }