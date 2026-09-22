const fs = require('fs').promises;

async function writeFile(){
    try{
        await fs.writeFile('promise.txt','Welcome to full stack development!');
        console.log('File written successfully!');
    } catch(error){
        console.log('Error writing file:', error);
    }
}

async function readFile(){
    try{
        const data = await fs.readFile('promise.txt','utf8');
        console.log('File contents:');
        console.log(data);
    } catch(error){
        console.log('Error reading file:', error);
    }
}
async function appendFile(){
    try{
        await fs.appendFile('promise.txt','\nSemester : 3');
        console.log('File updated successfully!');
    } catch(error){
        console.log('Error updating file:', error);
    }
}

/*async function deleteFile(){
    try{
        await fs.unlink('promise.txt');
        console.log('File deleted successfully!');
    } catch(error){
        console.log('Error deleting file:', error);
    }
}*/
async function renameFile(){
    try{
        await fs.rename('promise.txt','promise1.txt');
        console.log('File renamed successfully!');
    } catch(error){
        console.log('Error renaming file:', error);
    }
}
