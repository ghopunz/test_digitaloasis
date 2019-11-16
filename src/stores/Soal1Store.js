import { observable, action, computed } from 'mobx';


class Soal1Store{

    @observable list_word = [];

    @action loopingWord(number){

        this.list_word = []

        for(let i = 1; i <= number; i++){

            if(i % 6 == 0){

                this.list_word.push({id:i, word:'DIGITAL OASIS'})
            }
            else if(i % 3 == 0){

                this.list_word.push({id:i, word:'OS'})
            }
            else if(i % 2 == 0){

                this.list_word.push({id:i, word:'DI'})
            }
            else{
                this.list_word.push({id:i, word:''})
            }
            
        }

        // alert(JSON.stringify(this.list_word))

    }
    
    // @computed get data_list_word(){

    //     return this.list_word;
    // }
}

const soal1Store = new Soal1Store();
export default soal1Store;