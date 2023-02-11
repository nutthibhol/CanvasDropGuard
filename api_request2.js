const accessToken = "8356~6EroKSXroXBVvBrNoQ4aWb61v0E19lOJ2MNyEGI2IO5OjSAqHrCljBM2iEdxTZsZ"

async function fetchData() {
    const response = await fetch("https://miuonline.instructure.com/api/v1/courses", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    const data = await response.json();
    return data;
  }

  async function displayData() {
    const data = await fetchData();
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const headRow = document.createElement("tr");
  
    // create the headers
    const headers = ["ID", "Name", "Code"];
    headers.forEach(header => {
      const th = document.createElement("th");
      th.textContent = header;
      headRow.appendChild(th);
    });
  
    // create the rows
    data.forEach(item => {
      const row = document.createElement("tr");
      const idCell = document.createElement("td");
      idCell.textContent = item.id;
      row.appendChild(idCell);
      const nameCell = document.createElement("td");
      nameCell.textContent = item.name;
      row.appendChild(nameCell);
      const codeCell = document.createElement("td");
      codeCell.textContent = item.course_code;
      row.appendChild(codeCell);
      tbody.appendChild(row);
    });
  
    thead.appendChild(headRow);
    table.appendChild(thead);
    table.appendChild(tbody);
    document.body.appendChild(table);
  }

  displayData();