const search = () => 
{
    const searchBox = document.getElementById("search-item").value.toUpperCase();
    const movie = document.querySelectorAll(".movie");
    const mname = document.getElementsByTagName("h2")

    for(var i=0;i<mname.length;i++)
    {
        let match = movie[i].getElementsByTagName('h2')[0];

        if(match)
        {
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchBox) > -1)
            {
                movie[i].style.display = "";
            }
            else{
                movie[i].style.display = "none";
            }
        }
    }

}