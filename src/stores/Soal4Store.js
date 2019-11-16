import { observable, action, computed } from 'mobx';


class Soal4Store{

    @observable list_number = [];

    @action loopingNumber(input){

        this.list_number = []

        let lg_input = input.length

        for(let i = 0; i < lg_input; i++){

            let str = input[i] + '0'.repeat(lg_input-1-i)
            this.list_number.push({number: str})
        }

        // alert(JSON.stringify(this.list_number))

    }
    
    // @computed get data_list_word(){

    //     return this.list_word;
    // }
}

const soal4Store = new Soal4Store();
export default soal4Store;