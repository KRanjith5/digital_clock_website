function clock(){
    let dateTime=new Date();
    let hr=dateTime.getHours();
    let min=dateTime.getMinutes();
    let sec=dateTime.getSeconds();
   
     
    document.getElementById('hour').innerHTML=hr;
    document.getElementById('minute').innerHTML=min;
    document.getElementById('second').innerHTML=sec;
    let ampm=document.getElementById('ampm')
    if(hr>=12){
       hr=hr-12;
       ampm.innerHTML='PM'
    }
    else{
        ampm.innerHTML='AM'
    }
}
setInterval(clock,1000);