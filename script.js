
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
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
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

// Array Type
const dtype = (type) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (!type) {
      document.editor.textbox.value+= "\n" + variable.value + ".dtype";
  } else {
      document.editor.textbox.value+= "\npd.Series(" + variable.value + ", dtype=np." + type + ")";
  }
}

// Assigning
let assignIndexValue = document.getElementById("assignIndexValue");
let assignValue = document.getElementById("assignValue");

const assignSeries = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (assignIndexValue.value === "") {
      return alert("Please enter an element name or index in the 'index' field, in the 'Assigning' section.");
  } else if (assignValue.value === "") {
      return alert("Please enter a number in the 'value' field, in the 'Assigning' section.");
  } else {
    let format = assignIndexValue.value;

    if (Math.abs(Number(format)) >= 0) {
        format = Number(format);
    } else {
        format = `'${format}'`;
    }
      document.editor.textbox.value+= "\n" + variable.value + "[" + format + "] = " + assignValue.value;
  }
}

// summary statistics
const statistics = (arg) => {
  if (variable.value === '') {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (!axis.value) {
      document.editor.textbox.value+="\n" + variable.value + "." + arg + "()";
  } else {
      document.editor.textbox.value+="\n" + variable.value + "." + arg + "(axis=" + axis.value + ")";
  }
}

// Assigning
let assignRangeStart = document.getElementById("assignRangeStart");
let assignRangeEnd = document.getElementById("assignRangeEnd");

const assignRangeSeries = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (assignRangeStart.value === "") {
      return alert("Please enter a number in the 'start' field, in the 'Assigning' section.");
  } else if (assignRangeEnd.value === "") {
      return alert("Please enter a number in the 'end' field, in the 'Assigning' section.");
  } else if (assignValue.value === "") {
      return alert("Please enter a number in the 'value' field, in the 'Assigning' section.")
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + assignRangeStart.value + ":" + assignRangeEnd.value + "] = " + assignValue.value;
  }
}

// Indexing
let indexSeries = document.getElementById("indexSeries");
let ilocIndexStart = document.getElementById("ilocIndexStart");
let ilocIndexEnd = document.getElementById("ilocIndexEnd");
let indexAssign = document.getElementById("indexAssign");

const accessSeries = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (indexSeries.value === "") {
      return alert("Please enter an element name in the 'index' field, in the 'Indexing' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "['" + indexSeries.value + "']";
  }
}

const accessIloc = (arg) => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (ilocIndexStart.value === "") {
      return alert("Please enter a number in the 'index start' field, in the 'Indexing' section.");
  } else {
      if (ilocIndexEnd.value !== "") {
        document.editor.textbox.value+= "\n" + variable.value + "." + arg + "[[" + ilocIndexStart.value + ", " + ilocIndexEnd.value + "]]";
      } else {
          document.editor.textbox.value+= "\n" + variable.value + "." + arg + "[" + ilocIndexStart.value + "]";
      }
  }
}

const assignIndex = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (indexAssign.value === "") {
      return alert("Please enter a comma separated array in the 'new index' field, in the 'Indexing' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + ".index = ['" + indexAssign.value.replaceAll(/\s*,\s*/g, "', '").split(",") + "']";
  }
}

// Slicing
let indexSeriesRangeOne = document.getElementById("indexSeriesRangeOne");
let indexSeriesRangeTwo = document.getElementById("indexSeriesRangeTwo");

const sliceRange = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (indexSeriesRangeOne.value === "") {
      return alert("Please enter an element name in the 'range one' field, in the 'Slicing' section.");
  } else if (indexSeriesRangeTwo.value === "") {
      return alert("Please enter an element name in the 'range two' field, in the 'Slicing' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "['" + indexSeriesRangeOne.value + "': '" + indexSeriesRangeTwo.value + "']";
  }
}

const rangeMatrix = () => {
  if (variable.value === "") {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (matrixStart.value === "") {
    return alert("Please enter a name in the 'start' field, in the 'Slicing' section.");
  } else if (matrixEnd.value === "") {
    return alert("Please enter a name in the 'end' field, in the 'Slicing' section.");
  } else {
      document.editor.textbox.value+= "\n" + variable.value + "[" + startMatrix.value + ":" + endMatrix.value + "]";
  }
}

const sliceMatrix = () => {
  if (variable.value === '') {
    return alert("Please enter a variable name in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (Math.abs(Number(variable.value)) >= 0) {
      return alert("Please do not enter a number in the 'variable' field, in the 'pandas.Series object' section.");
  } else if (startMatrix.value === "" && endMatrix.value) {
      if (endMatrix.value && beforeMatrix.value) {
        document.editor.textbox.value+= "\n" + variable.value + "[" + endMatrix.value + ":, " + beforeMatrix.value + ":]";
      } else {
          document.editor.textbox.value+= "\n" + variable.value + "[" + endMatrix.value + ":, " + beforeMatrix.value + ":]";
      }
  } else if (startMatrix.value && endMatrix.value) {
      document.editor.textbox.value+= "\n" + variable.value + "[:" + startMatrix.value + ", :" + endMatrix.value + "]";
  }
}
