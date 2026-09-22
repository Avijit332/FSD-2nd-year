const fs = require('fs');
//creation of file
fs.writeFile(
    'sample.txt',
    'Welcome to full stack development!',(err) => {
        if (err) {
            console.log('Error writing file:', err);
            return;
        }
            console.log('File written successfully!');
        
    }
)
//reading file
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
})
//append
fs.appendFile('sample.txt','\nSemester : 3',(err) => {
    if(err){
        console.log('Error updating file: ',err);
    }else{
        console.log('\n3. File updated successfully!');
    }
})
//updated read
fs.readFile('sample.txt','utf8',(err,data) => {
    if(err){
        console.log('Error loading file: ',err);
        return;
    }
    console.log('File content',data);
})
//delete
fs.unlink('sample.txt',(err) => {
    if(err){
        console.log('Error deleting file: ',err)
    }else{
        console.log('File deleted successfully!');
    }
})
fs.writeFile(
    'sample.txt',
    'Welcome to full stack development!',(err) => {
        if (err) {
            console.log('Error writing file:', err);
            return;
        }
            console.log('File written successfully!');
        
    }
)
