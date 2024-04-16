<template>
    <div class="row mt-4">
        <div class="col-lg-6 offset-lg-3 d-flex justify-content-center">
            <div class="switch-button">
                <span class="active"></span>
                <button disabled class="switch-button-case left active-case">Focus</button>
                <button disabled class="switch-button-case right">Break</button>
            </div>
        </div>
    </div>
    <div class="cycle-bullets">
        <span v-for="cycle in cycles" :key="cycle" class="bullet"></span>
    </div>
</template>

<script>
export default {
    name: 'SwitchHeader',

    data() {
        return {
            cyclesCount: 0,
            cycles: Number(localStorage.getItem("cycles")),
        }

    },
    created() {
        this.emitter.on('finishCycle', this.finishCycle);
        this.emitter.on('resetCycles', this.resetCycles);
        this.emitter.on('updateCycles', this.updateCycles);
    },
    methods: {
        finishCycle() {
            this.cyclesCount++;
            for (let i = 0; i < this.cyclesCount; i++) {
                document.querySelectorAll(".bullet")[i].classList.add("bullet-finished");
            }
        },
        resetCycles() {
            this.cyclesCount = 0;
            for (let i = 0; i < this.cycles; i++) {
                try {
                    document.querySelectorAll(".bullet")[i].classList.remove("bullet-finished");
                } catch (error) {continue;}
            }
        },
        updateCycles() {
            this.cycles = Number(localStorage.getItem("cycles"));
            this.resetCycles();
        }
    },
    
}
</script>

<style scoped>
.switch-button {
    width: 20em;
    height: 2.5em;
    text-align: center;
    will-change: transform;
    z-index: 197 !important;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 20px;
}

.switch-button-case {
    background: none;
    width: 49%;
    height: 100%;
    color: white;
    border: none;
    text-transform: uppercase;
    letter-spacing: 5px;
    padding-bottom: 1px;
}

.switch-button-case:hover {
    opacity: 0.6;
    cursor: pointer;
}

.switch-button-case:focus {
    outline: none;
}

.active {
    border-radius: 20px 0px 0px 20px;
}

.switch-button .active {
    color: #151515;
    background-color: white;
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    z-index: -1;
}

.switch-button .active-case {
    color: #151515;
}

.cycle-bullets {
    display: flex;
    justify-content: center;
    margin-top: 3rem;
}

.bullet {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #71797E;
    margin: 0 5px;
    transition: .75s;
}

.bullet-finished {
    background-color: white;
    transition: .75s;
}

@media screen and (max-width: 1000px) {
    .switch-button {
        width: 15em;
        height: 2.5em;
    }
}

@media screen and (max-width: 675px) {
    .switch-button {
        width: 13em;
        height: 2.5em;
    }

    .switch-button-case {
        font-size: 13px;
        padding-left: 10px;
    }

    .cycle-bullets {
        margin-top: 2rem;
    }
}
</style>
