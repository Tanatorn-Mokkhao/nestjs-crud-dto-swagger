import { Injectable } from '@nestjs/common';

@Injectable()
export class CrudService {
  private data: string[] = [];
  get(): string {
    return this.data.join(', ');
  }
  create(newData: string): void {
    this.data.push(newData);
  }
  update(index: number, updatedData: string): void {
    if (index >= 0 && index < this.data.length) {
      this.data[index] = updatedData;
    } else {
      throw new Error('Index out of bounds');
    }
  }
  delete(index: number): void {
    if (index >= 0 && index < this.data.length) {
      this.data.splice(index, 1);
    } else {
      throw new Error('Index out of bounds');
    }
  }
}
