const axios = window.axios;

const accessToken = "8356~6EroKSXroXBVvBrNoQ4aWb61v0E19lOJ2MNyEGI2IO5OjSAqHrCljBM2iEdxTZsZ"
const tableBody = document.querySelector('#student-table tbody');

const handleApiResponse = (response) => {
    const students = response.data;

    students.forEach((student) => {
        const name = student.name;
        const email = student.email;
        const grade = student.grade;

        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const emailCell = document.createElement('td');
        const gradeCell = document.createElement('td');

        nameCell.textContent = name;
        emailCell.textContent = email;
        gradeCell.textContent = grade;

        row.appendChild(nameCell);
        row.appendChild(emailCell);
        row.appendChild(gradeCell);

        tableBody.appendChild(row);
    });
};


axios.get('https://miuonline.instructure.com/api/v1/accounts/1/courses?per_page=100', {
    headers: {
        Authorization: `Bearer ${accessToken}`
    }
})
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error(error);
    });