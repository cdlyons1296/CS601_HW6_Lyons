
    let kitten= "images/kitten.png";
    let cat= "images/cat.png";
    let puppy= "images/puppy.png";
    let dog= "images/dog.png";
    let chick="images/chick.png";
    let chicken ="images/chicken.png";
    let piglet= "images/piglet.png";
    let pig= "images/pig.png";

    const cats = [kitten, cat]
    const dogs = [puppy, dog]
    const chickens = [chick, chicken]
    const pigs = [piglet, pig]
    
    var app = new Vue({
        el:'#app',
        data: {
            pageName:'Baby Animals',
            link:'https://kids.nationalgeographic.com/animals',
            cats,
            dogs,
            chickens,
            pigs,
            catImage: cats[0],
            dogImage: dogs[0],
            chickenImage: chickens[0],
            pigImage: pigs[0],
            



            animals:[
                {text:'A kitten grows up to be a cat'},
                {text:'A puppy grows up to be dog.'},
                {text:'A piglet grows up to be pig.'},
                {text:'A chick grows up to be chicken.'}

            ]
        },
        methods:{
            learnMore(){
                alert('You will be sent to National Geographic Kids to learn more about animals.')
                window.location.href='https://kids.nationalgeographic.com/animals'
            },
            
            adultCat(id){
                this.catImage= this.cats[id]
            },
            babyCat(id){
                this.catImage = this.cats[id]
            },
            adultDog(id){
                this.dogImage= this.dogs[id]
            },
            babyDog(id){
                this.dogImage = this.dogs[id]
            },
            adultChicken(id){
                this.chickenImage= this.chickens[id]
            },
            babyChicken(id){
                this.chickenImage = this.chickens[id]
            },
            adultPig(id){
                this.pigImage= this.pigs[id]
            },
            babyPig(id){
                this.pigImage = this.pigs[id]
            }
        }
        

    })