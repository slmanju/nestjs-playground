import { Injectable } from '@nestjs/common';
import { Author } from './author.entity';

@Injectable()
export class AuthorsService {
  
  private authors: Author[] = [
    { id: 1, firstName: "Manjula", lastName: "Jayawardana" },
    { id: 2, firstName: "Robert", lastName: "Martin" },
  ];

  findAll(): Author[] {
    return this.authors;
  }

  findOne(id: number): Author {
    return this.authors.find(author => author.id == id);
  }
}
