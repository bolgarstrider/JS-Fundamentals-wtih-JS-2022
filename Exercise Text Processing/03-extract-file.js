
function extractFile(path) {
    const tokens = path.split('\\');
    const file = tokens.pop();    
    const indexDot = file.lastIndexOf('.');
    const extension = file.substring(indexDot+1);
    const name = file.substring(0,indexDot);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);


}
extractFile('C:\\Internal\\training-internal\\Template.pptx');
