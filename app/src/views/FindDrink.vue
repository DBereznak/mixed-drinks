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
                drinkInstructions: [],
                drinkQuery: null
            }
        },
        methods: {
            getRecipe(drinkQuery){
                this.drinkTitles =[];
                this.drinkImages = [];
                this.drinkInstructions = [];
            APICallService.getDrink(drinkQuery)
            .then(response => {
                this.drinkData = response.data;
                for(let i = 0; i < this.drinkData.drinks.length; i++){
                    this.drinkTitles.push(this.drinkData.drinks[i].strDrink);
                    this.drinkImages.push(this.drinkData.drinks[i].strDrinkThumb)
                    this.drinkInstructions.push(this.drinkData.drinks[i].strInstructions)
                }
            })
            .catch(error => {
                console.error(error.response);
            })
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