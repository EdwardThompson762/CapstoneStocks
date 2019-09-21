'use strict'

function theNews(articleNews) {
  const APIkey ='aeisbxmlyi5nwky3et0sdizbwno0wutv2osu858x';
    fetch(`https://stocknewsapi.com/api/v1?tickers=${articleNews}&type=article&items=10&token=${APIkey}`)
      .then(response => response.json())
      .then(responseJson =>
        displayArticles(responseJson))
          .catch(error => alert('error found'))
}
function theVideoNews(videoNews) {
  const APIkey ='aeisbxmlyi5nwky3et0sdizbwno0wutv2osu858x';
    fetch(`https://stocknewsapi.com/api/v1?tickers=${videoNews}&type=video&items=10&token=${APIkey}`)
      .then(response => response.json())
      .then(responseJson =>
        displayVideos(responseJson))
          .catch(error => alert('error found'))
}

//remove class for the news
function stockArticles(){
  $('#articleSearch').on('click', function(event){
      console.log();
  });
}

function stockVideos(){
  $('#videoSearch').on('click', function(event){
      console.log();
  });
} 
//Function event listener for articles
function watchArticles(){
  $('#searchArticles').on('submit', (event)=> {
    event.preventDefault();
  let articleNews=$('#articleSearch').val()
  console.log(articleNews);
  theNews(articleNews);
  });
}

//Function event listener for videos
function watchVideos(){
  $('#searchVideos').on('submit', (event)=> {
    event.preventDefault()
  let videoNews=$('#videoSearch').val()
  console.log(videoNews);
  theVideoNews(videoNews);
  });

} 

function displayArticles(responseJson){
  console.log(responseJson);
  $('#articleList').empty();
  for ( let i = 0; i < responseJson.data.length; i ++ ){
    $('#articleList').append(
      `<ul><h3>
      <a href="${responseJson.data[i].news_url}"target="_blank"">
      <img src="${responseJson.data[i].image_url}"
      class="images">
      <p class= "title">
      ${responseJson.data[i].title}
      </p>
      </a></h3></ul>
      <p class="source">
    ${responseJson.data[i].source_name}
      </p>
      <p class="date">
    ${responseJson.data[i].date}
      </p>
      <p class="sentiment">
    ${responseJson.data[i].sentiment}
      </p>
     <p class="text">
     ${responseJson.data[i].text}</p>`);
  } 
}


function displayVideos(responseJson){
  console.log(responseJson);
    $('#videoList').empty();
    for ( let i = 0; i < responseJson.data.length; i ++ ){
      $('#videoList').append(
        `<li><h3><a href="${responseJson.data[i].news_url}"target="_blank"">
      <img src="${responseJson.data[i].image_url} "
      class="images">  
      <p class= "title">
      ${responseJson.data[i].title}
      </p>
      </a></h3></li>
      <p class="source">
    ${responseJson.data[i].source_name}
      </p>
      <p class="date">
    ${responseJson.data[i].date}
      </p>
      <p class="sentiment">
    ${responseJson.data[i].sentiment}
      </p>
     <p class="text">
     ${responseJson.data[i].text}</p>`);
          
    }
}

function handleButtons(){
  $(stockArticles);
  $(stockVideos);
  $(watchArticles);
  $(watchVideos);
}
handleButtons();