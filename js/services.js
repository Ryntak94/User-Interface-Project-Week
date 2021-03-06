// JS goes here
class Tab{
    constructor(element){
        this.tab = element;
        this.data = this.tab.dataset.index;
        this.h2 = document.querySelector(`h2[data-index="${this.data}"]`);
        this.text = document.querySelector(`.content .text[data-index="${this.data}"]`);
        this.img = document.querySelector(`img[data-index="${this.data}"]`);
        this.tab.addEventListener("click",  ()  =>  this.select());
    }
    select(){
        let content = document.querySelectorAll(".text");
        let imgs = document.querySelectorAll(".content img");
        let h2s = document.querySelectorAll(".content h2");
        let selected = document.querySelector(".selected");
        console.log(selected)
        if(selected !== null)   {
            selected.classList.toggle("selected");
        }
        this.tab.classList.toggle("selected");
        h2s.forEach((h2)    =>  {
            return h2.style.display = "none";
        })
        content.forEach((text)  =>  {
            return text.style.display = "none";
        })
        imgs.forEach((img)  =>  {
            return img.style.display = "none";
        })
        this.h2.style.display = "block";
        this.img.style.display = "block";
        this.text.style.display = "block";
        console.log(this.text);
    }
}

let tabs = document.querySelectorAll(".tab");
tabs = Array.from(tabs).map((tab)   =>  new Tab(tab));
tabs[0].select()
