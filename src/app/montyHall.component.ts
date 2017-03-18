import { ViewChild, Component, ElementRef } from '@angular/core';


@Component({
    selector: 'monty-hall',
    templateUrl: './montyHall.component.html',
    styleUrls: ['./app.component.css']
})
export class MontyHallComponent {
    showExplanation: boolean;
    title: string = 'This is where the monty hall simulation will happen :)';
    doorArray: string[];
    chosenDoor: number;
    doorToRemove: number;
    doSwitch: boolean;
    numberOfWins: number;
    timesToRun: number;
    showResults: boolean;
    numberOfLosses: number;
    percentWins: number;

    runSimulation() {
        this.numberOfWins = 0;
        for (let i = 0; i < this.timesToRun; i++) {
            this.initArray();
            this.chooseDoor();
            this.removeDoor();
            if (this.doSwitch) {
                this.switchDoor();
            }
            let win = this.checkIfCarChosen();
            if (win) {
                this.numberOfWins++;
                win = false;
            }
        }
        this.numberOfLosses = this.timesToRun - this.numberOfWins;
        this.calculatePercentWins();
        this.showResults = true;
    }



    initArray() {
        this.doorArray = ["car", "donkey", "donkey"];
    }

    chooseDoor() {
        this.chosenDoor = Math.floor(Math.random() * 3);
    }

    checkIfCarChosen() {
        if (this.doorArray[this.chosenDoor] == "car") {
            return true;
        }
        return false;
    }

    removeDoor() {
        this.initArray();
        let indexToRemove = Math.floor((Math.random() * 2) + 1);
        this.doorArray.splice(indexToRemove, 1);
    }

    switchDoor() {
        if (this.doSwitch) {
            if (this.chosenDoor == 0) {
                this.chosenDoor = 1;
            }
            else if (this.chosenDoor == 1) {
                this.chosenDoor = 0;
            }
            else if (this.chosenDoor == 2) {
                this.chosenDoor = 0;
            }
        }
    }

    setSwitchDoors(switchDoors: boolean) {

        this.doSwitch = switchDoors;
        console.log("switchDoors is now set to: ", this.doSwitch);
    }

    setTimesToRun(timesToRun: number) {
        this.timesToRun = timesToRun;
        console.log("timesToRun is now set to: ", this.timesToRun);
    }

    calculatePercentWins() {
        this.percentWins = this.numberOfWins / this.timesToRun;
    }

    revealExplanation() {
        this.showExplanation = true;
    }
} 