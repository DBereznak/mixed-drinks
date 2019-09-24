<template>
    <div>
        <h1>{{pageTitle}}</h1>
        <input type="text" name="ingredient" id="" placeholder="Vodka" v-model="ingredientQuery">
        <button @click="getIngredient(ingredientQuery)">Get Ingredient</button>
        <h4 v-if="noData == true">Sorry, that ingredient is not in our database, please try another, Thank you.</h4>
    <div v-show="ingredientTitle != ''" class="info">
        <h3>{{ingredientTitle}}</h3>
        <p v-show="description != ''">{{description}}</p>
        <h4 v-show="proof != null">Proof: {{proof * 2}} or {{proof}}% alcohol </h4>
    </div>

    </div>
</template>

<script>
      import APICallService from '@/services/APICallService.js';

    export default {
        data(){
            return{
               pageTitle: 'Find alcohol or mixed drink ingredients',
                ingredientTitle: '',
                description: '',
                proof: '',
                ingredientData: {},
                noData: Boolean,
                ingredientQuery: null
            }
        },
        methods: {
            getIngredient(ingredientQuery) {
                this.noData = false;
                this.ingredientTitle = '',
                this.description = '',
                this.proof = ''
            APICallService.getIngredient(ingredientQuery)
            .then(response => {
                if(response.data.ingredients == null){
                    this.noData = true;
                } else {
                this.ingredientData = response.data.ingredients;
                this.ingredientTitle = this.ingredientData[0].strIngredient;
                this.description = this.ingredientData[0].strDescription;
                this.proof = this.ingredientData[0].strABV;
                }
            }).catch(error => {
                console.error(error.response);
            })
            }
        }
    }
</script>

<style lang="scss" scoped>
.info{
    position: relative;
    width: 60%;
    margin: auto;
    p{
        font-size: 16px;
    }

}
</style>