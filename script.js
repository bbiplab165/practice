const element3 = document.getElementsByClassName("list-group-item");
element3[2].style.backgroundColor = "green";
for (let i = 0; i < element3.length; i++) {
  element3[i].style.fontWeight = "bold";
}

const tag5=document.getElementsByTagName("li")
tag5[4].style.border="1px solid lightgray";
tag5[4].style.padding="10px";
tag5[4].style.paddingLeft="20px"
tag5[4].style.backgroundColor="lightgray"
tag5[4].style.fontWeight="bold"

const list=document.querySelectorAll("li")
// list[1].style.backgroundColor="green"
list[2].style.visibility="hidden"
list[1].style.color="lightgreen"
console.log(list.length);
for(let i=0;i<list.length;i++)
{
    if(i%2==0)
    {
        list[i].style.backgroundColor="green"
    }
    
}