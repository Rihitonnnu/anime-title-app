(async function callApi(){
    const res=await fetch("http://api.moemoe.tokyo/anime/v1/master/2021/2");
    const anime_info=await res.json();
    const display_btn=document.getElementById('display-btn');
    const anime_wrapper=document.querySelector('.title-wrapper');
    animeList=new Set();
    display_btn.addEventListener('click',()=>{
        for(const title of anime_info){
            animeList.add(title);
        }
        console.log(animeList);
        Promise.all(animeList).then(function(content){
            for(const val of content){
                const titleListRow=document.createElement('div');
                titleListRow.className="titleList-row";
                const anime_title=document.createElement("a");
                anime_title.innerText=val.title;
                anime_title.href=val.public_url;
                titleListRow.appendChild(anime_title);
                anime_wrapper.appendChild(titleListRow);
            }
        })
    });
})();

