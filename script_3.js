
//var height = parseInt (prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?", "0"));


/*for (var i=1; i <=rows; i++)
{
    for (var j=0; j<(2*i - 1); j++)
    {
      document.write("#");
    };
    for (var k=1; k<=i; k++)
    {
      document.write("*");
    } ;
    document.write("</br>");
  
}
*/

function createHalfPyramid (height) {
  
  for (var i = 1; i <= height; i++) {
    var row = '';
    
    for (var j = 1; j <= (height - i); j++) {
      row += ' ';
    }
    
    for (var k = 1; k <= i; k++) {
      row += '*';
      
    }
    
    console.log(row);
  }
}

createHalfPyramid(5);
