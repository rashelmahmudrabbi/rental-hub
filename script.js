const signinTab=document.getElementById('signin-tab');
const signupTab=document.getElementById('signup-tab');

const signinForm=document.getElementById('signin-form');
const signupForm=document.getElementById('signup-form');

function showSignin(){

signinForm.classList.add('active-form');
signupForm.classList.remove('active-form');

signinTab.classList.add('active');
signupTab.classList.remove('active');

}

function showSignup(){

signupForm.classList.add('active-form');
signinForm.classList.remove('active-form');

signupTab.classList.add('active');
signinTab.classList.remove('active');

}

signinTab.addEventListener('click',showSignin);
signupTab.addEventListener('click',showSignup);

function showToast(message){

const toast=document.createElement('div');

toast.innerText=message;

toast.style.position='fixed';
toast.style.bottom='25px';
toast.style.right='25px';
toast.style.background='#0d1b3e';
toast.style.color='white';
toast.style.padding='14px 22px';
toast.style.borderRadius='12px';
toast.style.zIndex='9999';

document.body.appendChild(toast);

setTimeout(()=>{
toast.remove();
},3000);

}

document.querySelectorAll('.book-btn').forEach(btn=>{

btn.addEventListener('click',()=>{

showToast('🎉 Booking submitted successfully!');

});

});

document.querySelector('.signin-btn').addEventListener('click',()=>{

showToast('🔓 Signed in successfully!');

});

document.querySelector('.signup-btn').addEventListener('click',()=>{

showToast('✅ Account created successfully!');

});