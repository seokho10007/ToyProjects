import { IsBoolean, IsString, IsNumber } from 'class-validator';

export class AddTodo {
  @IsString()
  readonly content: string;
  @IsBoolean()
  readonly completed: boolean;
  @IsNumber()
  readonly userId: number;
}
