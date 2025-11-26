class Book{ constructor(t,a,i){this.title=t;this.author=a;this.ISBN=i;this.isIssued=false;} issueBook(){this.isIssued=true;} returnBook(){this.isIssued=false;} }
let books=[new Book("A","X",1),new Book("B","Y",2)];
console.log(books.filter(b=>!b.isIssued));
function issueByISBN(i){let b=books.find(x=>x.ISBN==i); if(b) b.issueBook();}
