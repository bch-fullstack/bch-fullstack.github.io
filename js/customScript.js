console.log('Hello world from customScript.js');

document.getElementById('slogan').innerText = 'We hate out customers';

document.getElementById('all').style.backgroundColor = '#c7c3c3';

document.body.style.fontFamily = 'impact';

document.querySelectorAll('#hot .item').forEach(function(anything){
    anything.style.margin = '10px 20px'
    anything.style.boxShadow = '2px 2px 10px'
})