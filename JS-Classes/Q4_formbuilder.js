class FormBuilder{
 constructor(fields){this.fields=fields;}
 render(id){const f=document.getElementById(id); let html=''; 
 this.fields.forEach(x=>{ html+=`${x.label}<input type='${x.type}' id='${x.label}'><br>`; });
 html+=`<button onclick='getFormData()'>Submit</button>`; f.innerHTML=html;
 }
}
function getFormData(){ let o={}; document.querySelectorAll("input").forEach(i=>o[i.id]=i.value); console.log(o); }
