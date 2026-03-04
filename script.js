
// pandas.Series object
let array = document.getElementById("array");
let variable = document.getElementById("variable");

const series = () => {
  if (array.value === '') {
      return alert("Please enter a comma separated array in the 'array' field, in the 'pandas.Series object' section.");
  } else if (variable.value === "") {
     document.editor.textbox.value+= "\nnp.array([" + array.value.replaceAll(",", ", ").split(",") + "])";
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else {
     document.editor.textbox.value+= "\n" + variable.value + " = pd.Series([" + array.value.replaceAll(",", ", ").split(",") + "])";
  }
}

const createFromObject = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (value.value === '') {
    return alert("Please enter a value in the 'value' field, in the 'pandas.Series object' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + " = pd.Series({\n    '': ,\n    '': \n}, name='" + value.value + "')";
  }
}
