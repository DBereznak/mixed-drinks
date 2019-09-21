<template>
    <div>
        <input type="text" name="drink" id="" placeholder="your favorite drink" v-model="drinkQuery">
        <button @click="getRecipe(drinkQuery)">Get Recipe</button>
        <h1>{{pageTitle}}</h1>
        
        <ul>
            <li v-for="(title, index) in drinkTitles" :key="index">
                <div>
                     <img :src="drinkImages[index]" :alt="title">
                </div>
                <div>
                <h4> {{title}}</h4>
                <ul>
                    <li v-for="(ingredient, i) in drinkIngredients[index]" :key="i">
                        {{ingredient}}
                    </li>
                </ul>
                <p>{{drinkInstructions[index]}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import APICallService from '@/services/APICallService.js'
    
    export default {
        data() {
            return{
                pageTitle: 'Find a Drink Recipe',
                drinkData: {},
                drinkTitles: [],
                drinkImages: [],
                drinkIngredients: {},
                drinkInstructions: [],
                drinkQuery: null
            }
        },
        methods: {
            getRecipe(drinkQuery){
                this.drinkTitles =[];
                this.drinkImages = [];
                this.drinkIngredients = [];
                this.drinkInstructions = [];
            APICallService.getDrink(drinkQuery)
            .then(response => {
                this.drinkData = response.data.drinks;
                this.sortData(this.drinkData);
            })
            .catch(error => {
                console.error(error.response);
            })
            },
            sortData(data){
                for(let i = 0; i < data.length; i++){
                    let tempArray = []
                    this.drinkTitles.push(data[i].strDrink);
                    this.drinkImages.push(data[i].strDrinkThumb);
                    this.drinkInstructions.push(data[i].strInstructions);
                    //This is terrible, I need to find a better way 
                    tempArray.push(data[i].strIngredient1)
                    tempArray.push(data[i].strIngredient2)
                    tempArray.push(data[i].strIngredient3)
                    tempArray.push(data[i].strIngredient4)
                    tempArray.push(data[i].strIngredient5)
                    tempArray.push(data[i].strIngredient6)
                    tempArray.push(data[i].strIngredient7)
                    tempArray.push(data[i].strIngredient8)
                    tempArray.push(data[i].strIngredient9)
                    tempArray.push(data[i].strIngredient10)
                    tempArray.push(data[i].strIngredient11)
                    tempArray.push(data[i].strIngredient12)
                    tempArray.push(data[i].strIngredient13)
                    tempArray.push(data[i].strIngredient14)
                    tempArray.push(data[i].strIngredient15)
                    this.drinkIngredients[i] = tempArray.filter(item => item.length > 1);
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
ul{
    list-style: none;
    li{
        text-align: left;
        img{
            width: 200px;
            height: 200px;
            border: 1px solid #666;
        }
    }
}
</style>