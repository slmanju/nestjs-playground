import { Injectable } from '@nestjs/common';
import { CreateAuthorInput, UpdateAuthorInput } from './author.input';
import { Author } from './author.entity';

@Injectable()
export class AuthorsService {
  private authors: Author[] = [
    { id: '100', firstName: 'Manjula', lastName: 'Jayawardana' },
    { id: '101', firstName: 'Manjula2', lastName: 'Jayawardana2' },
  ];

  async create(createAuthorInput: CreateAuthorInput): Promise<Author> {
    let { firstName, lastName } = createAuthorInput;
    const id = new Date().getTime() + '';
    let author = { id, firstName, lastName };
    this.authors.push(author);
    return author;
  }

  findAll() {
    return this.authors;
  }

  findOne(id: string) {
    return this.authors.find((author) => author.id === id);
  }

  update(id: string, updateAuthorInput: UpdateAuthorInput) {
    const author = this.findOne(updateAuthorInput.id);
    if (author) {
      author.firstName = updateAuthorInput.firstName;
      author.lastName = updateAuthorInput.lastName;
    }
    return author;
  }

  remove(id: string) {
    this.authors = this.authors.filter((author) => author.id !== id);
  }
}
