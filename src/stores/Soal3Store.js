import { observable, action, computed } from 'mobx';


class Soal3Store{

    @observable resultAnagram = '';

    @action anagramProcess(input){

        this.resultAnagram = '';

        let res = input.split(" ");

        let first_word = res[0].toLowerCase();
        let second_word = res[1].toLowerCase();

        //Check lenght both of word
        if(first_word.length != second_word.length){
            // alert(this.resultAnagram)
            this.resultAnagram = 'False';
        }
        else{
            // alert('kayanya anagram')

            // this.resultAnagram = 'True'
            let i = 0;

            let isAnagram = true;

            let length_second_word = second_word.length

            // alert('first: ' + first_word + 'second: ' +second_word)
            //Check if Anagram
            while(isAnagram && i < length_second_word){

                let j = 0;

                let length_first_word = first_word.length
                let isFound = false;

                while(!isFound && j < length_first_word){
                    
                    if(second_word[i] == first_word[j]){
                        
                        isFound = true;

                        //REMOVE
                        let new_first_word = first_word.slice(0, j) + first_word.slice(j+1, first_word.length);

                        first_word = new_first_word;
                    }

                    j++;
                }


                if(!isFound){
                    
                    isAnagram = false;
                }

                i++;
            }
            // alert(isAnagram)

            if(isAnagram){
                this.resultAnagram = 'True'
            }
            else{
                this.resultAnagram = 'False'
            }
        }
        

    }
    
}

const soal3Store = new Soal3Store();
export default soal3Store;