
const obj = { hello: "world" };
const blob = new Blob([JSON.stringify(obj, null, 2)], {
    type: "application/json",
});
console.log(blob)
FileSaver.saveAs(blob,'file.txt')
