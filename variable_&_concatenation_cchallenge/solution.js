/*
[1] Create 3 Variables [Title, Description, Date]
6
- All In One Statement
7
- - Variable Name Must Be Two Words
8
- - Title Content Is "Elzero"
9
- - Description Content Is "Elzero Web School"
10
- - Date Content Is "25/10"
11
[2] Create Variable Contains Div And This Div Contains
12
- - H3 For Title
13
• - P. For Paragraph
14
- - Span For Time
15
[3] Add This Card To Page 4 Times
16
[4] Use Template Literals For Concatenate
*/
var theTitle = 'elzero', description = 'elzero web school', date = '25/10';
var card = `
<div>
<h3>hello ${theTitle}</h3>
<p>${description}</p>
<span>${date}<span>
</div>
`

document.write(card.repeat(4))