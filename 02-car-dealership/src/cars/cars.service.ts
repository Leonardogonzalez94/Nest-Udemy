import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { createCarDto, updateCarDto } from './dto/index.dto';
import { Car } from './interfaces/car.interface';

@Injectable() //decorador injectable
export class CarsService {

    private cars: Car[] = [
        /*{
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },*/

       
    ];
    findAll() {  //Find: /busca o retorna todos los carros
        return this.cars;
    }
    findOneById(id: string) {
        const car = this.cars.find(car => car.id === id) //el find recibe siempre de parametros
        if (!car) throw new NotFoundException(`Car with id '${id}' not found `);  //--> exception filters

        return car;

    }
    create(createCarDto: createCarDto) {

        const car: Car = {
            id: uuid(),
            // brand: createCarDto.brand,
            // model: createCarDto.model,
            ...createCarDto
        }

        this.cars.push(car);
        return car;

    }
    update(id:string, updateCarDto: updateCarDto){

        let  carDB= this.findOneById(id);

        if(updateCarDto.id && updateCarDto.id !== id)
         throw new BadRequestException(`Car id is not valid inside body`);

        this.cars = this.cars.map(car =>{
              if (car.id ===id){

                carDB={
                    ...carDB,
                    ...updateCarDto,  ///...nuevas propiedades del atributo
                    id }
                return carDB
              }
              return car;

        })
        return carDB; 

    }
    delete(id: string){
       
        const car= this.findOneById(id);
        this.cars=this.cars.filter(car => car.id !==id);
        }

        fillCarsWithSeedData( cars: Car[]){

            this.cars= cars;
        }
}
