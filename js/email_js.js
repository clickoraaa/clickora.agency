//Contact sending mail
function Email() {
    let emailsParms = {
        name: document.getElementById('Name').value,
        email: document.getElementById('Email').value,
        service: document.getElementById('Service').value,
        message: document.getElementById('Message').value,
    };

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is valid
    if (!emailRegex.test(emailsParms.email)) {
        // Show error notification for invalid email
        const errorNotification = document.createElement('div');
        errorNotification.className = 'notification error';
        errorNotification.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please enter a valid email address.';
        document.body.appendChild(errorNotification);

        setTimeout(() => {
            errorNotification.style.opacity = '0';
            setTimeout(() => {
                errorNotification.remove();
            }, 500);
        }, 3000);
        return; // Stop execution if email is invalid
    }

    const service_ID = 'service_tbqgkcq';
    const temp_ID = 'template_3m1us9n';

    emailjs.send(service_ID, temp_ID, emailsParms).then(
        (res) => {
            document.getElementById('Name').value = '';
            document.getElementById('Email').value = '';
            document.getElementById('Service').selectedIndex = 0;
            document.getElementById('Message').value = '';
            console.log(res);

            // Create notification div
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = '<i class="fas fa-check-circle"></i> Message was sent successfully, Thank you!';
            document.body.appendChild(notification);

            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    notification.remove();
                }, 500); // Wait for fade-out animation to complete
            }, 3000);
        }
    ).catch((err) => {
        console.log(err);
        // Optionally, show error notification
        const errorNotification = document.createElement('div');
        errorNotification.className = 'notification error';
        errorNotification.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to send message. Please try again.';
        document.body.appendChild(errorNotification);
        
        setTimeout(() => {
            errorNotification.style.opacity = '0';
            setTimeout(() => {
                errorNotification.remove();
            }, 500);
        }, 3000);
    });
}

//newsletter
function subscribeNewsletter() {
    let email = document.getElementById('email_newsletter').value;
    let params = {
        email: email,
    };

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is valid
    if (!emailRegex.test(params.email)) {
        // Show error notification for invalid email
        const errorNotification = document.createElement('div');
        errorNotification.className = 'notification error';
        errorNotification.innerHTML = '<i class="fas fa-exclamation-circle"></i> Please enter a valid email address.';
        document.body.appendChild(errorNotification);

        setTimeout(() => {
            errorNotification.style.opacity = '0';
            setTimeout(() => {
                errorNotification.remove();
            }, 500);
        }, 3000);
        return; // Stop execution if email is invalid
    }

    const service_ID = 'service_tbqgkcq'; // Reuse the same service ID or create a new one
    const temp_ID = 'template_xkbjvbt'; // Replace with your EmailJS newsletter template ID

    emailjs.send(service_ID, temp_ID, params).then(
        (res) => {
            document.getElementById('email_newsletter').value = '';
            console.log(res);

            // Create success notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.innerHTML = '<i class="fas fa-check-circle"></i> Subscribed successfully! Check your email.';
            document.body.appendChild(notification);

            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.opacity = '0';
                setTimeout(() => {
                    notification.remove();
                }, 500);
            }, 3000);
        }
    ).catch((err) => {
        console.log(err);
        const errorNotification = document.createElement('div');
        errorNotification.className = 'notification error';
        errorNotification.innerHTML = '<i class="fas fa-exclamation-circle"></i> Failed to subscribe. Please try again.';
        document.body.appendChild(errorNotification);

        setTimeout(() => {
            errorNotification.style.opacity = '0';
            setTimeout(() => {
                errorNotification.remove();
            }, 500);
        }, 3000);
    });
}






/* ********** OLD ********** */

// function Email(){
//     let emailsParms ={
//         name: document.getElementById('Name').value,
//         email: document.getElementById('Email').value,
//         service: document.getElementById('Service').value,
//         message: document.getElementById('Message').value,
//     }
//     const service_ID='service_tbqgkcq';
//     const temp_ID='template_3m1us9n';

//     emailjs.send(service_ID,temp_ID,emailsParms).then(
//         (res)=>{
//             document.getElementById('Name').value ='';
//             document.getElementById('Email').value ='';
//             document.getElementById('Service').selectedIndex = 0;;
//             document.getElementById('Message').value ='';
//             console.log(res);
//             alert("Message was sent successfully, Thank you!");
//         }
//     ).catch((err)=>console.log(err));
// }