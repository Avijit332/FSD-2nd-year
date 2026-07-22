let students=[];

const table=document.getElementById("studentTable");
const count=document.getElementById("count");

function displayStudents(){

    table.innerHTML="";

    let search=document.getElementById("search").value.toLowerCase();
    let branch=document.getElementById("filterBranch").value;

    let filtered=students.filter(student=>{
        let nameMatch=student.name.toLowerCase().includes(search);
        let branchMatch=(branch==="All" || student.branch===branch);
        return nameMatch && branchMatch;
    });

    filtered.forEach((student,index)=>{
        table.innerHTML += `
            <tr>
                <td>${student.roll}</td>
                <td>${student.name}</td>
                <td>${student.branch}</td>
                <td>${student.email}</td>
                <td>
                    <button class="delete" onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
    });

    count.innerText = students.length;
}

document.getElementById("studentForm").addEventListener("submit",function(e){
    e.preventDefault();

    let name=document.getElementById("name").value;
    let roll=document.getElementById("roll").value;
    let email=document.getElementById("email").value;
    let branch=document.getElementById("branch").value;

    students.push({
        roll,
        name,
        email,
        branch
    });

    this.reset();
    displayStudents();
});

function deleteStudent(index){
    let search=document.getElementById("search").value.toLowerCase();
    let branch=document.getElementById("filterBranch").value;

    let filtered=students.filter(student=>{
        let nameMatch=student.name.toLowerCase().includes(search);
        let branchMatch=(branch==="All" || student.branch===branch);
        return nameMatch && branchMatch;
    });

    let student=filtered[index];
    students=students.filter(s=>s!==student);
    displayStudents();
}

document.getElementById("search").addEventListener("keyup",displayStudents);
document.getElementById("filterBranch").addEventListener("change",displayStudents);

displayStudents();