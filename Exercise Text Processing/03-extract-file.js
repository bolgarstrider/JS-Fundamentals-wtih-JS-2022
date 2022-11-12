// Write a function that receives a single string - the path to a file (the '\' character is escaped)
// Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, 
//     as template.bak should be the file name, while pptx is the extension).


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
