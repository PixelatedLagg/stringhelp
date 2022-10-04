var index = document.getElementById("index");
var input = document.getElementById("input");
$(function()
{
    $('#form').on('submit', function(e)
    {
        e.preventDefault();
        document.getElementById("index").innerHTML = "";
        for (let i = 0; i < document.getElementById("input").value.length; i++)
        {
            if (document.getElementById("input").value[i] == ' ')
            {
                document.getElementById("index").innerHTML += `<div class="char-empty"><h1>' '</h1><h2>${i}</h2></div>`
            }
            else
            {
                document.getElementById("index").innerHTML += `<div class="char"><h1>${document.getElementById("input").value[i]}</h1><h2>${i}</h2></div>`
            }
        }
    });
});