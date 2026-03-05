
// pandas.Series object
let array = document.getElementById("array");
let variable = document.getElementById("variable");
let value = document.getElementById("value");
let index = document.getElementById("index");
let start = document.getElementById("start");
let end = document.getElementById("end");
let step = document.getElementById("step");

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
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (value.value === "") {
    return alert("Please enter a value in the 'value' field, in the 'pandas.Series object' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + " = pd.Series({\n    '': ,\n    '': \n}, name='" + value.value + "')";
  }
}

const createFromList = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
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
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else {
      document.editor.textbox.value+="\n" + array.value + " = pd.Series(" + variable.value + ", index=['', ''])";
  }
}

const nameSeries = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (value.value === '') {
    return alert("Please enter a value in the 'value' field, in the 'pandas.Series object' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + "." + arg + " = '" + value.value + "'";
  }
}

const copy = (arg) => {
  if (array.value === "") {
    return alert("Please enter a new variable name in the 'array' field, in the 'pandas.Series object' section.");
  } else if (variable.value === "") {
      return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else {
     document.editor.textbox.value+= "\n" + array.value + " = np." + arg + "(" + variable.value + ")";
  }
}

const seriesProperties = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else {
      document.editor.textbox.value+="\n" + variable.value + "." + arg;
  }
}

const access = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (index.value == "") {
      return alert("Please enter a number in the 'index' field, in the 'pandas.Series object' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + index.value + "]";
  }
}

const range = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (step.value === "") {
      document.editor.textbox.value+= "\n" + variable.value + "[" + start.value + ":" + end.value + "]";
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + start.value + ":" + end.value + ":" + step.value + "]";
  }
}
