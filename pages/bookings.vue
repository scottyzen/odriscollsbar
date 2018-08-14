<template>
    <div>
        <div class="header">
            <picture>
                <source srcset="~/assets/images/pub-front-extra-large.jpg" media="(min-width: 1400px)">
                <source srcset="~/assets/images/pub-front-large.jpg" media="(min-width: 576px)">
                <img src="~/assets/images/pub-front.jpg" alt="Beer garden ready for a wedding">
            </picture>
        </div>
        <br>
        <div class="container container--style">
            <div class="row p-8 sm:p-10 md:p-12 md:py-8 xl:p-16 xl:py-8">
                <div class="w-full text-center mb-8 lg:mb-16">
                    <h2 class="text-underline">Book an Event</h2>
                </div>
                <form class="pt-6 pb-8 mb-4">
                    <div class="flex flex-wrap mb-6">

                        <!-- Full Name -->
                        <div class="w-full md:w-1/2 md:pr-2 lg:pr-0 lg:w-1/3 mb-6">
                            <label class="block text-grey-darker text-sm font-bold mb-2" for="grid-first-name">
                                Full Name
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Jane Dow">
                        </div>

                        <!-- Date -->
                        <div class="w-full md:w-1/2 md:pl-2 lg:w-1/3 lg:px-3 mb-6">
                            <label class="block text-grey-darker text-sm font-bold mb-2" for="grid-last-name">
                                Date
                            </label>
                            <date-picker class="mx-datepicker" v-model="value" lang="en" :not-before="new Date()" type="date" input-name="date" format="DD-MM-YYYY"></date-picker>
                            <!-- <p>{{value}}</p> -->
                        </div>

                        <!-- Email address -->
                        <div class="w-full lg:w-1/3 mb-6">
                            <label class="block text-grey-darker text-sm font-bold mb-2" for="grid-first-name">
                                Email address
                            </label>
                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="janedow@gmail.com">
                        </div>

                        <div class="w-full mb-6">
                            <label class="block text-grey-darker text-sm font-bold mb-2" for="grid-first-name">
                                Your message
                            </label>
                            <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" name="" id="" rows="10"></textarea>
                        </div>
                        
                        <div class="">
                            <button class="inline-block bg-orange hover:bg-orange-dark text-white font-semibold py-2 px-4 rounded" type="button">
                                Send message
                            </button>
                        </div>
                    </div>
                    
                </form>
                <p class="text-center text-grey text-xs">
                    We will never share your information or send you spam.
                </p>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            value: ""
        }
    }
}
</script>


<style lang="sass">
.mx-datepicker
    width: 100%

.mx-input
    padding: 1.125rem .75rem
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10)
    border-color: #DAE1E7


</style>
