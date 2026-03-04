
// pandas.Series object
let array = document.getElementById("array");
let variable = document.getElementById("variable");
let value = document.getElementById("value");

const series = () => {
  if (array.value === "") {
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
  } else if (value.value === "") {
    return alert("Please enter a value in the 'value' field, in the 'pandas.Series object' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + " = pd.Series({\n    '': ,\n    '': \n}, name='" + value.value + "')";
  }
}

const createFromList = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (value.value === "") {
    return alert("Please enter a value in the 'value' field, in the 'pandas.Series object' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + " = pd.Series(\n    [ , , ],\n    index=['', ''],\n    name='" + value.value + "')";
  }
}

const createFromSeries = () => {
  if (array.value === "") {
    return alert("Please enter a new variable name in the 'array' field, in the 'pandas.Series object' section.");
  } else if (variable.value === '') {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else {
      document.editor.textbox.value+="\n" + array.value + " = pd.Series(" + variable.value + ", index=['', ''])";
  }
}
