
    let kitten= "assets/images/kitten.png";
    let cat= "assets/images/cat.png";
    let puppy= "assets/images/puppy.png";
    let dog= "assets/images/dog.png";
    let chick="assets/images/chick.png";
    let chicken ="assets/images/chicken.png";
    let piglet= "assets/images/piglet.png";
    let pig= "assets/images/pig.png";

    const cats = [kitten, cat]
    const dogs = [puppy, dog]
    const chickens = [chick, chicken]
    const pigs = [piglet, pig]
    const{createApp} = Vue


     createApp({
        data() {
        return {
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
        }
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
        

    }).mount('#app')