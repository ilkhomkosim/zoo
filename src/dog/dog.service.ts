import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
    public getHello(): string {
        return 'WOW-WOOW';
    }

    public introduce(): string {
        return "My name is Tarzan!"
    }
}
