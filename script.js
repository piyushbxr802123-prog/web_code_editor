const htmlCode = document.getElementById("htmlCode");
const cssCode = document.getElementById("cssCode");
const jsCode = document.getElementById("jsCode");

const htmlLines = document.getElementById("htmlLines");
const cssLines = document.getElementById("cssLines");
const jsLines = document.getElementById("jsLines");

const output = document.getElementById("output");

// Generate line numbers
function updateLines(textarea, lineBox) {
    const lines = textarea.value.split("\n").length;
    lineBox.innerHTML = "";
    for (let i = 1; i <= lines; i++) {
        lineBox.innerHTML += i + "<br>";
    }
}

// Add event listeners
htmlCode.addEventListener("input", () => updateLines(htmlCode, htmlLines));
cssCode.addEventListener("input", () => updateLines(cssCode, cssLines));
jsCode.addEventListener("input", () => updateLines(jsCode, jsLines));

// Run Code
function runCode() {
    output.contentDocument.open();
    output.contentDocument.write(
        htmlCode.value +
        "<style>" + cssCode.value + "</style>" +
        "<script>" + jsCode.value + "<\/script>"
    );
    output.contentDocument.close();
}

// Clear Code
function clearCode() {
    htmlCode.value = "";
    cssCode.value = "";
    jsCode.value = "";

    htmlLines.innerHTML = "1";
    cssLines.innerHTML = "1";
    jsLines.innerHTML = "1";

    output.contentDocument.open();
    output.contentDocument.write("");
    output.contentDocument.close();
}

// Initialize line numbers
updateLines(htmlCode, htmlLines);
updateLines(cssCode, cssLines);
updateLines(jsCode, jsLines);