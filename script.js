let bookingForm=document.getElementById('booking-form');
let noOfGuests=document.getElementById('guests');
let date=document.getElementById('booking-date');
let time=document.getElementById('booking-time');
let name=document.getElementById('name');
let email=document.getElementById('email');

bookingForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    if (name.value===''||name==null){
        e.preventDefault();
        alert('Name is required');
    }

    if (email.value===''||email==null){
        e.preventDefault();
        alert('Email is required');
    }

    if (noOfGuests.value===''||noOfGuests==null){
        e.preventDefault();
        alert('Number of guests is required');
    }

    if (date.value===''||date==null){
        e.preventDefault();
        alert('Date is required');
    }
    
    if (time.value===''||time==null){
        e.preventDefault();
        alert('Time is required');
    }
    alert("Booking successful" + "\n"+"Name: "+name.value+"\n"+
            "Email: "+email.value+"\n"+
            "Number of Guests: "+noOfGuests.value+"\n"+
            "Date: "+date.value+"\n"+"Time: "+time.value
    );
})