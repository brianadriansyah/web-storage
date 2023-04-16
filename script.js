function saveData() {
    let firstName = document.getElementById("firstName").value
    let lastName = document.getElementById("lastName").value
    let gender = document.getElementById("gender").value
    let address = document.getElementById("address").value
    let storage = document.getElementById("storage").value

    let data = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        address: address
    }

    if(storage === "session") {
        sessionStorage.setItem("data", JSON.stringify(data))
    } else if (storage === "local") {
        localStorage.setItem("data", JSON.stringify(data))   
    } else if (storage === "cookie") {
        document.cookie = "data=" + JSON.stringify(data)
    }

}

function displayData(buttonType) {
    let data;
    let storage = document.getElementById("storage").value;
  
    if (storage == "session") {
      data = JSON.parse(sessionStorage.getItem("data"));
    } else if (storage == "local") {
      data = JSON.parse(localStorage.getItem("data"));
    } else if (storage == "cookie") {
      let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)data\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      data = JSON.parse(decodeURIComponent(cookieValue));
    }
  
    if (buttonType == 1) {
      // Menampilkan data baru
      document.getElementById("output").innerHTML = JSON.stringify(data);
    } else if (buttonType == 2) {
      // Menampilkan data lama dan data baru
      let oldData = "";
      if (storage == "session") {
        oldData = sessionStorage.getItem("data");
      } else if (storage == "local") {
        oldData = localStorage.getItem("data");
      } else if (storage == "cookie") {
        oldData = document.cookie.replace(/(?:(?:^|.*;\s*)data\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      }
      document.getElementById("output").innerHTML = "Data Lama: " + oldData + "<br>Data Baru: " + JSON.stringify(data);
    }
  }

  // mohon maaf jika pengerjaan kurang maksimal, karena masih kurang memahami materi