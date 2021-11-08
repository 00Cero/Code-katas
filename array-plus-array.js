
        let array1 = [3,4,2];
        let array2 = [3,4,2];




        // function arrayPlusArray(arr1, arr2) {
        //     let sum = 0;
        //     for(let num of arr1){
        //         sum += num;
        //     }
        //     for(let num of arr2){
        //         sum += num;
        //     }
        // return sum; 
        // }

            let persona = {
                piernas: 2,
                cabeza: 1
            }

        
        let alumnos = [{nombre: "alberto",asistencias: 0},{nombre: "pablo",asistencias: 0}];

        function arrayPlusArray(arr1, arr2) {
            let sum = 0;
            let masterArray = [arr1,arr2];
                masterArray.forEach(arr=>{
                    for(let num of arr){
                    sum += num;
                }
            });
            
        return sum; 
        }

        let resultado = arrayPlusArray(array1,array2);

        console.log(resultado);
