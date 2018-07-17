<template>
  <div>

    <!-- Header Image -->
    <div class="header header--style"></div>

    <div class="container flex flex-wrap">
        <div class="row">
            <h1 class=" text-underline">FAQ</h1>
            <ul class="questions">
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

<style lang="sass" scoped>
.header--style
    background-image: linear-gradient(to top, $light 0%,rgba(125,185,232,0) 10%), url("~/assets/images/garden-bench.jpg")
    background-position: 0 50%
    +tablet
        background-size: cover
        background-position: 0 bottom

.container
    text-align: center
    .row
        background: $white
        padding: 3rem 1rem
        border: 6px solid $light

        width: 100%
        box-shadow: 0 15px 30px rgba(76, 112, 132, 0.1)
        +tablet
            padding: 4rem 3rem
        +laptop
            padding: 5rem 4rem
            .row
                width: 65%
        +desktop
            .row
                width: 65%

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

