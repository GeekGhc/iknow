<template>
    <div id="test" style="margin-top:40px;width:600px;">
        <div>
            <div class="form-group" v-bind:class="{ 'form-group--error': $v.name.$error }">
                <label class="form__label">Name</label>
                <input class="form__input" v-model.trim="name" @input="$v.name.$touch()">
            </div><span class="form-group__message" v-if="!$v.name.required">Field is required</span><span class="form-group__message" v-if="!$v.name.minLength">Name must be longer than 3 letters.</span>
            <pre>name: {{ $v.name }}</pre>
            <div class="form-group" v-bind:class="{ 'form-group--error': $v.email.$error }">
                <label class="form__label">Age</label>
                <input class="form__input" v-model.trim="email" @blur="$v.email.$touch()">
            </div><span class="form-group__message" v-if="!$v.email.required">Must be between 20 and 30</span>
            <pre>age: {{ $v.email }}</pre>
        </div>
    </div>
</template>

<script>
    import { required, minLength, between } from 'vuelidate/lib/validators'
    export default{
        data(){
            return{
               name:'',
               email:''
            }
        },
        validations: {
            name: {
                    required,
                    minLength: minLength(4)
            },
            email: {
                    required,
            }
        },
        components:{

        }
    }
</script>
