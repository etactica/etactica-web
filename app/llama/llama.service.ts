import {Llama} from './llama';
import {Injectable} from "angular2/core";

@Injectable()
export class LlamaService{
    private llamas : Llama[];

    constructor() {
        this.llamas = [
            new Llama(1, 'llama.jpg', 'One mean mofo'),
            new Llama(2, 'llama_glare.jpg', 'Mofos homie'),
            new Llama(3, 'uglyLlama.jpeg', 'One ugly bastard')
        ];
    }
    getLlamas(){
        return this.llamas;
    }

    random(){
        var index = Math.floor(Math.random() * this.llamas.length);
        return this.llamas[index];
    }

}