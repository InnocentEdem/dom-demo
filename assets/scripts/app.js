const addMovie = document.getElementsByTagName('header')[0].lastElementChild;
const modal = document.querySelector('.modal');
const backdrop = document.getElementById('backdrop');
const add = document.querySelector('.btn--success')
movies=[];

addMovie.addEventListener('click',(e)=>{ 
    modal.style.display='block';
    toggleBackDrop();
})

function toggleBackDrop(){
    if( modal.style.display==='block'){
        backdrop.style.display='block';
        backdrop.style.pointerEvents='auto';
    }
    else{
        backdrop.style.display='none';
    }
}

function closeModal(){
    modal.style.display='none';
   backdrop.style.display='none';
}

function closeBackdrop(){
    backdrop.style.display='none';
    modal.style.display='none';
    backdrop.style.pointerEvents='none';
  
}
document.querySelector('.btn--passive').addEventListener('click',()=>{
    closeModal();
    clearInputs
})
backdrop.addEventListener('click',()=>{
    closeBackdrop();
    clearInputs();
   
})

add.addEventListener('click',()=>{addMovies()})

function addMovies(){
 const title = document.getElementById('title').value;
 const rating = document.getElementById('rating').value;
 const url = document.getElementById('image-url').value;
 movie={};
  if(title==="" || +rating < 1 ||+rating >5 || url==="" ){ 
      window.alert('Please Enter Valid Values !!!')
      return
  }
  else{
     movie.title=title;
     movie.rating=rating;
     movie.url=url;
     movies.push(movie);
     clearInputs();
     closeModal();
    
    
    }
}

function clearInputs(){
 document.getElementById('title').value = "";
 document.getElementById('rating').value="";
 document.getElementById('image-url').value="";
}

function hideOrShow(){
    if(movies.length < 1){
        document.querySelector("main").style.display="none";
        return false ;
    }else{
        document.querySelector("main").style.display="block"; 
        return true ; 
    }
}
function addmovieToList(){
    if(hideOrShow()===true){
        movies.array.forEach(element => {
            newMovie=document.createElement('li');
            newMovie.setAttribute('class','new-movie')
            new
        });
    }
}