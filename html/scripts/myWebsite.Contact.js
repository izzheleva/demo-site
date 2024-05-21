const form = document.querySelector('#contactForm');

const modal = document.querySelector('#contactModal');

const sendButton = document.querySelector('#previewBtn');
let emailBody = '';
let fname;
let lname;
let email;

sendButton.addEventListener('click', function(event) {
    
    const formData = new FormData(form);
    fname = formData.get('fname');
    lname = formData.get('lname');
    const country = formData.get('country');
    const subject = formData.get('subject');
    const whereYouHeard = formData.get('where_you_heard');   
    email = formData.get('email');

    const modalContent = modal.firstElementChild;   
    const modalFormContent = modalContent.lastElementChild.previousElementSibling;
    
    modalFormContent.innerHTML +=`
        <h2>Contact Form Data</h2>
        <p><strong>First name:</strong> ${fname}</p>
        <p><strong>Last name:</strong> ${lname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Message:</strong> ${subject}</p>
        <p><strong>Where you heard about us:</strong> ${whereYouHeard}</p>
        
    `;
    emailBody = `
        First name: ${fname}
        Last name: ${lname}
        Email: ${email}
        Country: ${country}
        Message: ${subject}
        Where you heard about us: ${whereYouHeard}
    `;
    modal.style.display = 'block';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

document.getElementsByClassName("close")[0].onclick = function() {
    modal.style.display = "none";
}

const submitBtn = document.querySelector('#submitBtn');
const sendEmail = () => {   
    if (fname === '' || lname === '' || email === '' || subject === '') {
        alert('Please fill in at least first name, last name, email and message!');
        return;
    }
    else{
    const emailEndpoint = 'mailto:iva.zheleva@student.hogent.be';
    window.location.href = emailEndpoint + '?subject=Contact Form Submission&body=' + encodeURIComponent(emailBody);
    const modalContent = modal.firstElementChild;   
    const modalFormContent = modalContent.lastElementChild.previousElementSibling;
    modalFormContent.innerHTML = '';
    modal.style.display = 'none';
}};

submitBtn.addEventListener('click', function(event) {
    sendEmail();
});