import { Controller, Get, Param, ParseIntPipe, Post, Body, Patch, Delete, ParseUUIDPipe, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { createCarDto } from './dto/create-car.dto';
import { updateCarDto } from './dto/update-car-dto';




@Controller('cars')
//@UsePipes(ValidationPipe)    // el controlador es aquel que escucha los las solicituden de los clientes
export class CarsController {

    constructor(
        private readonly carsService: CarsService   ///Inyeccion de dependencias
    ) { }

    private cars = ['Toyota', 'Honda', 'Jeep'];
    @Get()
    getAllCars() {

        return this.carsService.findAll();
    }
    @Get(':id')
    getCarById(@Param('id', ParseUUIDPipe) id: string) {  // la url de un metodo siempre es string
        console.log({ id })
        return this.carsService.findOneById(id); /// contienes los carros que hay en el arrays
        // el simbolo + convierte de string a number 
    }

    @Post()
    createCar(@Body() createCardDto: createCarDto) {
        return this.carsService.create(createCardDto);

    }
    @Patch(':id')
    updateCar(
        @Param('id', ParseUUIDPipe) id:string,
        @Body() updateCarDto: updateCarDto ) {
        return this.carsService.update(id,updateCarDto)
    }
 /////METODOS SON ENDPOINTS

    @Delete(':id')
    deleteCar(@Param('id', ParseUUIDPipe) id: string) {
        return this.carsService.delete(id)
        
    }
}
