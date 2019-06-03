import { Location } from './Location';
import { Author } from './Author';

export class Blog {
    BlogId: number;
    Title: string;
    Contents: string;
    locationData: Location;
    Author: Author;
}