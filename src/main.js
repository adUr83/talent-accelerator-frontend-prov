
const paginationArea = document.querySelector("#pagination-area")
const swCard = document.querySelector("#sw-card")

let pageCount = 1;
let currentPage = 1;
let nextLink = null;
let prevLink = null;


const getCharactersAndFirstBoot = async ()  =>{


 const res = await axios.get("https://swapi.dev/api/people/?page=1")
 
 nextLink = res.data.next;

 //prepare pagination 

  pageCount = parseInt(res.data.count / 10) + (res.data.count % 10  !== 0 ? 1 : 0)
 
 let code = "";
 code += `<a id = "pages-&laquo;" href="#">&laquo;</a>`
 for(let i = 1 ; i<= pageCount ; i++)
   (i == 1) 
   ? code += `<a id = "pages-${i}"  href="#" class = "active">${i}</a>` 
   : code += `<a id = "pages-${i}"  href="#">${i}</a>`
    
 code += `<a  id = "pages-&raquo;" id = "ahmet" href="#">&raquo;</a>`
 paginationArea.innerHTML = code

 //prepare first page
 loadPageContent(res.data.results)


}


const loadPageContent = (data) =>{

    let code = ""
    data.forEach((item,index)=>{

        code += `
        <div class="collapse" id="index-${(index + 1) + ((currentPage -1) * 10)}">
          <a class="cozy" href="#index-${(index + 1) + ((currentPage -1) * 10)}"
            > ${(index + 1) + ((currentPage -1) * 10)}.  ${item.name}</a
          >
          <div class="content">
            <div class="inner-content">
              <h6>Birth Year : ${item.birth_year}</h6>
              <h6>Gender : ${item.gender}</h6>
              <h6>Height : ${item.height}</h6>
              <h6>Skin Color : ${item.skin_color}</h6>
            </div>
          </div>
        </div>
        `


    })
    swCard.innerHTML = code

}

const changePage =  (e) =>{
   
    const command = e.target.textContent;
    
    let link = "";
    if(command === "«") // prev page
    {
        link = prevLink  
       
    }
    else if(command === "»") // next page
    {
        link = nextLink
    }
    else{ // spesific page
        link = e.target.textContent
    }

  //changing page
  getData(link,e,command)
  

}

const getData = async (link,e,command)=>{
  
  
    
    
    if(link !== null )
    {
        if(isNaN(link))
        {
            
          await axios.get(link).then((res)=>{

            if(currentPage + 1 <= pageCount  ||  currentPage -1 >= 0)
            {
                currentPage += ( command === "«"  ? -1 : 1)
                nextLink = res.data.next
                prevLink = res.data.previous
                selectActivePage(e)
                loadPageContent(res.data.results)
            }
               
            })
        }
        else{

            await axios.get(`https://swapi.dev/api/people/?page=${link}`).then((res)=>{
               
                currentPage =  parseInt(link)
                nextLink = res.data.next
                prevLink=res.data.previous
                selectActivePage(e)
                loadPageContent(res.data.results)

            })

        }

    }

}

const selectActivePage = (e) =>{

    const allLinks = document.querySelectorAll("a")
    //remove selected class
    allLinks.forEach((item)=>{

        if(parseInt(item.textContent) === currentPage )
            item.className = "active"
        else 
            item.classList.remove("active")
    })
  
}
document.addEventListener("click" ,(e)=>{

    const pieces = e.target.id.split("-");
    if(pieces.length > 0 && pieces[0] === "pages")
        changePage(e)

})

getCharactersAndFirstBoot()

