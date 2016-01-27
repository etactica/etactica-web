import {Component} from 'angular2/core';
import {LlamaService} from "./llama.service";
import {OnInit} from "angular2/core";
import {Llama} from "./llama";

@Component({
    selector: 'llama',
    templateUrl: './app/llama/llama.html',
    providers: [LlamaService]
})

export class LlamaComponent implements OnInit {
    public llama : Llama;
    constructor(private llamaService: LlamaService) {}

    ngOnInit(){
        this.getLlama();
    }

    getLlama(){
        this.llama =
            this.llamaService.random();
    }

    clicked(){
        console.log("jamm og jojojo");
    }
}
