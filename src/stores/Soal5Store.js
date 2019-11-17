import { observable, action, computed } from 'mobx';


class Soal5Store{

    @observable points = [40, 100, 1, 5, 25, 10];
    @observable list_pegawai = [
        {
            name:'Virgo Asmita',
            email:'asmita@gmail.com',
            gender:'Laki-laki',
            nip: 2001,
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
            photo: require('../resources/images/photos/asmita.jpg')
            
        },
        {
            name:'Kento Momota',
            email:'kemot@gmail.com',
            gender:'Laki-laki',
            nip: 2016,
            hoby:[
                {
                    label:'Sepak bola',
                    value: 1
                },
           
            ],
            photo: require('../resources/images/photos/kemot.jpeg')
        },

        {
            name:'Son Goku',
            email:'goku@gmail.com',
            gender:'Laki-laki',
            nip: 2018,
            hoby:[
                {
                    label:'Tenis Meja',
                    value: 3
                },
           
            ],
            photo: require('../resources/images/photos/goku.jpg')
        },

    ];

    @action sortingData(input){

        // this.points.sorted(function(a, b){return a - b});
        // const sortedPoints = this.points.sort((a, b) => a - b);
        
        // this.points.replace(sortedPoints);
        // alert(this.points)

        //SORTING BY NIP
        if(input == 0){

            // alert(JSON.stringify(this.list_pegawai))
            const sortedListPegawai = this.list_pegawai.sort((a, b) => a.nip - b.nip);
            this.list_pegawai.replace(sortedListPegawai);
            alert(JSON.stringify(this.list_pegawai))
        }
        //SORTING BY NAME
        else{
            // const sortedListPegawai = this.list_pegawai.sort((a, b) => a.name - b.name);
            const sortedListPegawai = this.list_pegawai.sort((a, b) => a.name.localeCompare(b.name))
            this.list_pegawai.replace(sortedListPegawai);
            alert(JSON.stringify(this.list_pegawai))
            
        }

        
    }
 
}

const soal5Store = new Soal5Store();
export default soal5Store;