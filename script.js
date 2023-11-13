
let toastBox = document.getElementById("toastBox");
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errorMsg='<i class="fa-solid fa-circle-xmark"></i> Please fix the Error';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, chack again';

function showToast(arg){
    let toast=document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = arg;
    toastBox.appendChild(toast);

    if(arg.includes('Error')){  // is wale error ka e capital hone pr shi output aayega
        toast.classList.add('error');
    }
    if(arg.includes('Invalid')){  // is wale invalid ka i capital hone pr output shi aayega
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },6000);
}