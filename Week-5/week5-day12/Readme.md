--> Every element is a box

We have three border in these
1) double 
2)solid ---> most preferable 

shortcut ul>li*4> it will create four li


For Padding and margin 
---> if we give two values first one is top and bottom second one is left and right 
---> if we give three values first one is top and second one is left right and third one is bottom
---> for four values top right bottom left
example 
padding: 50px 100px   tp lr
padding: 50px 100px 70px  t lr b
padding: 50px 100px 70px 80px t l r b


---> Width of ele is calculated it calcs padding left and right border left and right and content width 
---> TO overcome this we have a box-sizing:border-box;
---> For every element you apply box:sizing :border-box; 

*{ *--> universal selector
   bpx-sizing:border-box;
   margin:0px;  --> it resets to zero of margin
   padding:0px ---> it resets the padding to zero
}


max-width --> max-width is to grow and it is var
width---> it is const upto 


--> for sharp edge to curve edge border-radius:60px
---> to turn into perfect circle we have to set the width and height as same 



# Text - styles
color: ---> it is the property it apply the color to the text
1) named colors
2) rgb  --> we can call the function rgb(200,120,50) fro rgb it has red,blue,green has 
256+256+256 every color has 0to 255 shades 
3) hexadecimal 


size
--> default size of text is 32px
you can change like font-size;
for font family


--> if you have two or more headings to identify the uniq
we can write class="
---> * assumes that class is name of ele not class
---> to assume the ele of name we .heading1 

--> if any ele has same properties 
we pass two elements in class has common elements

/// Images 
---> to align the images to left right and center
float:left            float:right 
for center----> display:block and margin as auto


// Pseudo class
hover pseudo class ele is applied to any ele 
--> hover will activate when our cursor goes at that ele 
h1:hover{

}


li:firstchild{

}
li:lastchild{

}

li:nthchild(odd){

}
li:nthchild(even){

}





Positions
         --> relatively---> it alwas moves relative to its position 
         --> other block ele 
         -->absolute  --->
         -->fixed
         -->sticky


1)Top
2)Bottom
3)Left
4)Right


// Flex
Using flex we can do only one direction layout
display:flex;  // First we make to the parent  flex container
flex-direction:row // by default
flex-direction:column;
// 
justify-content:space between --> it is for horizantal alignmetn

align-items:center --> this is for vertical
