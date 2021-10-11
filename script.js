const codeId = document.getElementById('codeId');
const btn = document.getElementById('copyBtn');


function copyed(){
    // const res = codeId.value;
    // console.log(res);

    codeId.select();
    document.execCommand('copy');
    alert('copied!');
}


btn.addEventListener('click', copyed);