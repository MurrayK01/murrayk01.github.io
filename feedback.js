let feedbackForm=document.getElementById('feedback-form');
let feedback=document.getElementById('user-feedback');
let name=document.getElementById('name');
let email=document.getElementById('email');

feedbackForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    if (name.value===''||name==null){
        e.preventDefault();
        alert('Name is required');
    }

    if (email.value===''||email==null){
        e.preventDefault();
        alert('Email is required');
    }
    
    if (feedback.value===''||feedback==null){
        e.preventDefault();
        alert('Feedback is required');
    }
    alert("Thanks for your feedback");
})