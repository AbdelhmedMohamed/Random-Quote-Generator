
var arr1 =[' "Do not take life too seriously. You will not get out alive." ' ,
 ' "Resentment is like drinking poison and waiting for your enemies to die." ',
  ' "You miss 100% of the shots you dont ake." ',
   ' "The best revenge is massive success." ',
    ' "Its not what happens to you, but how you react to it that matters." ' ,
' "Be yourself; everyone else is already taken." ',
' "So many books, so little time." ' ]


var arr2 =[' --Elbert Hubbard ' ,
' --Frank Zappa ',
' --Oscar Wilde ',
' --Wayne Gretzy ',
' --Nelson Mandela ',
' --Sinatra ',
' --Epictetus ']


function test(){
    document.getElementById('quoteOutput').innerHTML
    = arr1[Math.trunc(Math.random() * 7)] ;
    document.getElementById('authorOutput').innerHTML
    = arr2[Math.trunc(Math.random() * 7)] ;

}