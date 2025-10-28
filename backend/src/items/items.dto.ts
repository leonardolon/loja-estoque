import { IsString, IsOptional, IsEnum, IsInt, Min } from 'class-validator';

export type Status = 'todo' | 'doing' | 'done';

export class CreateItemDto {
  @IsString()
  name: string;

  @IsInt()
  @Min(0)
  quantity: number;

  @IsOptional()
  @IsEnum(['todo', 'doing', 'done'])
  status?: Status;
}

export class UpdateItemDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsInt()
  @Min(0)
  quantity?: number;

  @IsOptional()
  @IsEnum(['todo', 'doing', 'done'])
  status?: Status;
}
