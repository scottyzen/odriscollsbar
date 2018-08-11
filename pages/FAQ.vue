<template>
  <div>
    <div class="header text-center">
        <picture>
            <source srcset="~/assets/images/garden-bench-extra-large.jpg" media="(min-width: 1600px)">
            <source srcset="~/assets/images/garden-bench-large.jpg" media="(min-width: 1200px)">
            <source srcset="~/assets/images/garden-bench-medium.jpg" media="(min-width: 576px)">
            <img src="~/assets/images/garden-bench.jpg" alt="Beer garden ready for a wedding">
        </picture>
    </div>

    <div class="container container--style container--bottom-gap">
        <div class="row m-auto my-8">
            <div class="text-center">
                <h1 class="mt-8 text-underline">FAQ</h1>
            </div>
            <ul class="questions mx-12">
                <li>
                    <p class="questions__question">Can ye organize music?</p>
                    <p class="questions__answer">Yes. Wadolor sit amet consectetur adipisicing elit. Tempora, sit.</p>
                </li>
                <li>
                    <p class="questions__question">Are your toilets wheelchair accesable?</p>
                    <p class="questions__answer">Yes.</p>
                </li>
                <li>
                    <p class="questions__question">Etiam ac nibh. Fusce imperdiet tellus sed. Phasellus facilisis fermentum eros euismod. Fusce quis sodales?</p>
                    <p class="questions__answer">Yes. Wadolor sit amet consectetur adipisicing elit. Tempora, sit. Sarchitecto eligendi officia molestiae ipsum quia sequi! Aperiam ducimus totam aliquam unde incidunt. Adipisci ipsam laudantium fugit. Adipisci deserunt enim consequuntur exercitationem</p>
                </li>
                <li>
                    <p class="questions__question">Sit amet aspernatur magnam fuga magni cupiditate eligendi maxime?</p>
                    <p class="questions__answer">Yes. Wadolor sit amet consectetur adipisicing elit. Tempora, sit.</p>
                </li>
                <li>
                    <p class="questions__question">Are you hiring?</p>
                    <p class="questions__answer">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quo eos ratione veniam, debitis accusantium. Error, sed similique?</p>
                </li>
                <li>
                    <p class="questions__question">Aeligendi maxime?</p>
                    <p class="questions__answer">Aet consectetur adipisicing elit. Pariatur harum vero, quod cupiditate excepturi quidem, facilis tempora quis consequatur ab ex nemo exercitationem. incidunt. Pipsam laudantium fugit.</p>
                </li>
            </ul>
        </div>
    </div><!-- Container -->

  </div>
</template>

<style lang="sass">

.questions
    padding: 3rem 2rem
    list-style-type: none
    text-align: left
    +tablet
        column-count: 2
        column-gap: 5rem
    li
        margin-bottom: 4rem
        break-inside: avoid
    +element(question)
        font-weight: 700
        margin-bottom: 10px
    +element(answer)
        

</style>

