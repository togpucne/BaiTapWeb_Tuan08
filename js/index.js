let isAvaiable = true;
// Mã học viên 
let id = document.querySelector("#id");
id.addEventListener("blur", () => {
    let idPattern = /^04[0-9]{8}$/;
    let idInput = id.value.trim();
    let result_id = document.querySelector(".result_id");

    if (idInput === "") {
        result_id.innerHTML = "Không được bỏ trống !";
        result_id.style.color = "red";
        id.classList.add("inner-error");
        id.classList.remove("inner-success");
        isAvaiable = false;


    } else if (!idPattern.test(idInput)) {
        result_id.innerHTML = "Lỗi !";
        result_id.style.color = "red";
        id.classList.add("inner-error");
        id.classList.remove("inner-success");
        isAvaiable = false;
    } else {
        result_id.innerHTML = "(*)";
        result_id.style.color = "green";
        id.classList.remove("inner-error");
        id.classList.add("inner-success");
        isAvaiable = true;
    }

})
// Name
let name = document.querySelector("#name");
name.addEventListener("blur", () => {
    let namePattern = /^[A-Z][a-z]+(\s[A-Z][a-z]+)*$/;
    let nameInput = name.value.trim();
    let result_name = document.querySelector(".result_name");

    if (nameInput === "") {
        result_name.innerHTML = "Không được bỏ trống !";
        result_name.style.color = "red";
        name.classList.add("inner-error");
        name.classList.remove("inner-success");
        isAvaiable = false;


    } else if (!namePattern.test(nameInput)) {
        result_name.innerHTML = "Lỗi !";
        result_name.style.color = "red";
        name.classList.add("inner-error");
        name.classList.remove("inner-success");
        isAvaiable = false;
    } else {
        result_name.innerHTML = "(*)";
        result_name.style.color = "green";
        name.classList.remove("inner-error");
        name.classList.add("inner-success");
        isAvaiable = true;
    }

})
// Email
let email = document.querySelector("#email");
email.addEventListener("blur", () => {
    let emailPattern = /^[A-Za-z0-9]+@iuh\.edu\.vn$/;
    let emailInput = email.value.trim();
    let result_email = document.querySelector(".result_email");

    if (emailInput === "") {
        result_email.innerHTML = "Không được bỏ trống !";
        result_email.style.color = "red";
        email.classList.add("inner-error");
        email.classList.remove("inner-success");
        isAvaiable = false;


    } else if (!emailPattern.test(emailInput)) {
        result_email.innerHTML = "Lỗi !";
        result_email.style.color = "red";
        email.classList.add("inner-error");
        email.classList.remove("inner-success");
        isAvaiable = false;
    } else {
        result_email.innerHTML = "(*)";
        result_email.style.color = "green";
        email.classList.remove("inner-error");
        email.classList.add("inner-success");
        isAvaiable = true;
    }

})
// Dịch vụ
let price = document.querySelector("#price");
let service = document.querySelector("#service");

function Price() {
    let serviceValue = service.value.trim();
    if (serviceValue === 'boi') {
        price.value = 20000;
    } else if (serviceValue === 'chay') {
        price.value = 10000;
    } else {
        price.value = 25000;
    }
    Total();
}

service.addEventListener("change", Price);

// Đồ dùng
const giaDoDung = {
    aoQuanBoi: 10000,
    phao: 410000,
    kinhBoi: 230000
};

const checkboxes = document.querySelectorAll("input[name='doDung']");
const tienDoDung = document.getElementById("tienDoDung");

function tinhTongGiaDoDung() {
    let tongGia = 0;
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            tongGia += giaDoDung[checkbox.id];
        }
    });
    tienDoDung.value = tongGia;
    Total();
}

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', tinhTongGiaDoDung);
});

// Tính tổng
let total = document.querySelector("#total");
function Total() {
    const priCe = parseInt(price.value) || 0;
    const TienDoDung = parseInt(tienDoDung.value) || 0;
    total.value = priCe + TienDoDung;
}

// Khởi tạo giá trị ban đầu cho tổng
Price();
tinhTongGiaDoDung();

let btnSubmit = document.querySelector("#btnSubmit");
btnSubmit.addEventListener("click", () => {
    const nameValue = document.querySelector("#name").value.trim();
    const emailValue = document.querySelector("#email").value.trim();
    const idValue = document.querySelector("#id").value.trim();
    const priceValue = document.querySelector("#price").value.trim();
    const quantityValue = tienDoDung.value.trim();
    const totalValue = total.value.trim();

    let tableBody = document.querySelector(".tableBody");
    let countRow = tableBody.querySelectorAll("tr").length + 1;

    // Chỉ cho phép thêm vào bảng nếu tất cả các trường hợp lệ
    if (nameValue && emailValue && idValue && priceValue && quantityValue && totalValue && isAvaiable) {
        let newRow = `
            <tr>
                <th scope="row">${countRow}</th>
                <td>${idValue}</td>
                <td>${nameValue}</td>
                <td>${emailValue}</td>
                <td>${priceValue}</td>
                <td>${quantityValue}</td>
                <td>${totalValue}</td>
            </tr>
        `;
        tableBody.innerHTML += newRow;
        alert("Thành công!");
    } else {
        alert("Thất bại! Vui lòng điền đầy đủ thông tin.");
    }
});