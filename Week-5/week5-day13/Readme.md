//
NOTE: Do not use the pixels for the font size when we change in chrome font size settings it does not change 
In place of this use em---> font size of parent  rem---> font size of root element
em and rem are relative elements em is for parent and rem is for root element

Benefits of em and rem
--> 10 rem means 10*font size of root element
--> default ele of font is 16px[10*16=160px]
--> when we take the units of em and rem they will respond for font settings


--> To change the size of every element of web page we use 
html{
    font-size:10px or rem 
}

View Port Units[vw vh]
---> Visible space of webpage 
vw and vh[viewport width and view port height]



--> When we are building a web page we must assume the element and layouts of webpage

---> list-style-type:none; It removes the . of unordered list

#Responsive design 
--> To view the best view and make the responsive element

media queries
@media screen and (min-width){
    css code
}

#Grid
At first we create a parent container  // display:grid;
margin:200px;
grid-template-rows: 300px 300px--> no of rows and height of rows 
grid-template-cols:1fr 1fr 1fr 1fr  ---> fraction

.child1{
    grid-column-start: ;  or grid-column: 1/3;
    grid-column-end: ;
    grid-row-start: ;
    grid-row-end: ;
}


# Bootstrap and Tailwind css both do the same thing generating the predefined styles
Bootstrap and Tailwind are frameworks of CSS
--> In tailwind css each class having some features 
--> In tailwind css cdn copy in you html file [content delivery network]
--> write classes in you ele
---Drawback of cdn is it will not auto complete




