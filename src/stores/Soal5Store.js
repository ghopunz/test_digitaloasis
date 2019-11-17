import { observable, action, computed } from 'mobx';


class Soal5Store{

    @observable list_pegawai = [
        {
            name:'Kento Momota',
            email:'kemot@gmail.com',
            gender:'Laki-laki',
            nip: 1234567,
            hoby:[
                {
                    label:'Sepak bola',
                    value: 1
                },
                {
                    label:'Voli',
                    value: 2   
                }
            ],
            photo: require('../resources/images/photos/kemot.jpeg')
        },
        {
            name:'Virgo Asmita',
            email:'asmita@gmail.com',
            gender:'Laki-laki',
            nip: 223344,
            hoby:[
                {
                    label:'Sepak bola',
                    value: 1
                },
           
            ],
            photo: require('../resources/images/photos/asmita.jpg')
        },

    ];

    @action loopingNumber(input){

        this.list_number = []

        let lg_input = input.length

        for(let i = 0; i < lg_input; i++){

            let str = input[i] + '0'.repeat(lg_input-1-i)
            this.list_number.push({number: str})
        }

        // alert(JSON.stringify(this.list_number))

    }
 
}

const soal5Store = new Soal5Store();
export default soal5Store;